#!/usr/bin/env node
// Verificador de saude para os sites que estao ou vao entrar no AdSense.
// Checa o que de fato reprova, nao o que e bonito de medir.
//
//   node scripts/site-health.mjs
//   node scripts/site-health.mjs --site axenworks.com
//   node scripts/site-health.mjs --json
//
// Sai com codigo 1 se houver qualquer BLOQUEIO, para poder ser usado em rotina.

const SITES = [
  {
    host: 'axenworks.com',
    nome: 'Axen Works',
    estagio: 'aguardando AdSense',
    legais: ['/about/', '/contact/', '/privacy/', '/terms/'],
  },
  {
    host: 'openyourais.com',
    nome: 'Open Your AIs',
    estagio: 'em avaliacao AdSense',
    legais: ['/about/', '/contact/'],
  },
];

const args = process.argv.slice(2);
const soJson = args.includes('--json');
const soSite = args.includes('--site') ? args[args.indexOf('--site') + 1] : null;
const TIMEOUT = 20000;

async function buscar(url, metodo = 'GET') {
  const ctrl = new AbortController();
  const t = setTimeout(() => ctrl.abort(), TIMEOUT);
  const inicio = Date.now();
  try {
    const r = await fetch(url, {
      method: metodo,
      redirect: 'manual',
      signal: ctrl.signal,
      headers: { 'User-Agent': 'site-health/1.0 (+openyourais.com)' },
    });
    const corpo = metodo === 'GET' ? await r.text() : '';
    return {
      ok: true,
      status: r.status,
      ms: Date.now() - inicio,
      destino: r.headers.get('location'),
      tipo: r.headers.get('content-type') || '',
      corpo,
      bytes: corpo.length,
    };
  } catch (e) {
    return { ok: false, erro: e.name === 'AbortError' ? 'timeout' : e.message, ms: Date.now() - inicio };
  } finally {
    clearTimeout(t);
  }
}

const achados = [];
function reg(site, nivel, checagem, detalhe) {
  achados.push({ site, nivel, checagem, detalhe });
}

async function verificar(site) {
  const base = `https://${site.host}`;
  const R = (n, d) => reg(site.host, 'BLOQUEIO', n, d);
  const A = (n, d) => reg(site.host, 'ATENCAO', n, d);
  const OK = (n, d) => reg(site.host, 'ok', n, d);

  // 1. A home serve conteudo de verdade.
  // Este e o erro que ja aconteceu: HTTP 200 numa pagina de dominio estacionado,
  // e HTTP 308 numa casca que so redireciona. Status sozinho nao prova nada.
  const home = await buscar(base + '/');
  if (!home.ok) {
    R('home', `nao respondeu: ${home.erro}`);
    return;
  }
  if (home.status >= 300 && home.status < 400) {
    R('home', `redireciona (${home.status}) para ${home.destino}. O AdSense avalia a URL submetida, e uma casca que redireciona nao serve conteudo`);
    return;
  }
  if (home.status !== 200) {
    R('home', `HTTP ${home.status}`);
    return;
  }
  if (/parked domain|dominio estacionado|domain for sale|under construction/i.test(home.corpo)) {
    R('home', 'esta servindo pagina de dominio estacionado, nao o site');
    return;
  }
  if (home.bytes < 2000) {
    R('home', `so ${home.bytes} bytes. Pagina praticamente vazia`);
  } else {
    OK('home', `${home.bytes} bytes em ${home.ms}ms`);
  }
  if (home.ms > 3000) A('velocidade', `home levou ${home.ms}ms. Acima de 3s prejudica indexacao e experiencia`);

  // 2. robots.txt precisa existir e liberar rastreio.
  const robots = await buscar(base + '/robots.txt');
  if (!robots.ok || robots.status !== 200) {
    R('robots.txt', `HTTP ${robots.status || robots.erro}`);
  } else if (/^\s*Disallow:\s*\/\s*$/mi.test(robots.corpo)) {
    R('robots.txt', 'esta bloqueando o site inteiro com Disallow: /');
  } else {
    const temSitemap = /sitemap:/i.test(robots.corpo);
    if (!temSitemap) A('robots.txt', 'nao aponta o sitemap');
    else OK('robots.txt', 'libera rastreio e aponta o sitemap');
  }

  // 3. Sitemap, e cada URL dentro dele.
  let urls = [];
  const sm = await buscar(base + '/sitemap.xml');
  if (!sm.ok || sm.status !== 200) {
    const idx = await buscar(base + '/sitemap-index.xml');
    if (idx.ok && idx.status === 200) {
      const filhos = [...idx.corpo.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
      for (const f of filhos.slice(0, 5)) {
        const sub = await buscar(f);
        if (sub.ok && sub.status === 200) urls.push(...[...sub.corpo.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]));
      }
      OK('sitemap', `via sitemap-index, ${urls.length} URLs`);
    } else {
      R('sitemap', 'nao encontrado em /sitemap.xml nem /sitemap-index.xml');
    }
  } else {
    urls = [...sm.corpo.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
    if (!urls.length) R('sitemap', 'existe mas esta vazio');
    else OK('sitemap', `${urls.length} URLs listadas`);
  }

  // Amostra: todas se forem poucas, senao as primeiras 30.
  const amostra = urls.length > 30 ? urls.slice(0, 30) : urls;
  const quebradas = [];
  const foraDoHost = [];
  let semCanonical = 0;
  let canonicalErrado = 0;
  let comNoindex = 0;

  for (const u of amostra) {
    if (!u.includes(site.host)) foraDoHost.push(u);
    const p = await buscar(u);
    if (!p.ok || p.status !== 200) {
      quebradas.push(`${u} -> ${p.status || p.erro}`);
      continue;
    }
    // noindex acidental derruba a pagina do indice sem aviso
    if (/<meta[^>]+name=["']robots["'][^>]*content=["'][^"']*noindex/i.test(p.corpo)) comNoindex++;
    // canonical precisa apontar para o host que esta servindo
    const c = p.corpo.match(/<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)/i);
    if (!c) semCanonical++;
    else if (!c[1].includes(site.host)) canonicalErrado++;
  }

  if (quebradas.length) R('URLs do sitemap', `${quebradas.length} de ${amostra.length} nao respondem 200: ${quebradas.slice(0, 5).join(' | ')}`);
  else if (amostra.length) OK('URLs do sitemap', `${amostra.length} testadas, todas 200`);

  if (foraDoHost.length) R('sitemap', `${foraDoHost.length} URLs apontam para outro host. O AdSense trata isso como declaracao inexata`);
  if (comNoindex) R('noindex', `${comNoindex} paginas com noindex. Elas saem do Google sem aviso`);
  if (canonicalErrado) R('canonical', `${canonicalErrado} paginas com canonical apontando para outro host. Foi exatamente isso que reprovou o axenworks na primeira rodada`);
  else if (semCanonical) A('canonical', `${semCanonical} paginas sem canonical`);
  else if (amostra.length) OK('canonical', 'todas coerentes com o host servido');

  // 4. Paginas legais. Falta delas e a causa numero um de reprovacao.
  for (const l of site.legais) {
    const p = await buscar(base + l);
    if (!p.ok || p.status !== 200) R('paginas legais', `${l} responde ${p.status || p.erro}. Sem isso o AdSense reprova`);
  }
  OK('paginas legais', site.legais.join(', ') + ' verificadas');

  // 5. ads.txt. Nao bloqueia aprovacao, mas bloqueia receita depois.
  const ads = await buscar(base + '/ads.txt');
  if (ads.ok && ads.status === 200 && /google\.com/i.test(ads.corpo)) OK('ads.txt', 'presente com a linha do Google');
  else A('ads.txt', 'ausente. Nao impede a aprovacao, mas e necessario para monetizar depois do aceite');

  // 6. Motores de IA. Nao e AdSense, e canal de descoberta.
  const llms = await buscar(base + '/llms.txt');
  if (llms.ok && llms.status === 200) OK('llms.txt', 'presente');
  else A('llms.txt', 'ausente. Reduz a chance de ser citado por ChatGPT, Claude e Perplexity');
}

const alvos = soSite ? SITES.filter((s) => s.host === soSite) : SITES;
for (const s of alvos) await verificar(s);

const bloqueios = achados.filter((a) => a.nivel === 'BLOQUEIO');
const atencoes = achados.filter((a) => a.nivel === 'ATENCAO');

if (soJson) {
  console.log(JSON.stringify({ quando: new Date().toISOString(), achados, bloqueios: bloqueios.length, atencoes: atencoes.length }, null, 2));
} else {
  for (const s of alvos) {
    const meus = achados.filter((a) => a.site === s.host);
    console.log(`\n${s.nome} (${s.host}), ${s.estagio}`);
    console.log('='.repeat(58));
    for (const a of meus) {
      const marca = a.nivel === 'BLOQUEIO' ? 'BLOQUEIO' : a.nivel === 'ATENCAO' ? 'atencao ' : 'ok      ';
      console.log(`  ${marca}  ${a.checagem.padEnd(18)} ${a.detalhe}`);
    }
  }
  console.log('\n' + '='.repeat(58));
  console.log(bloqueios.length ? `${bloqueios.length} BLOQUEIO(S) para o AdSense` : 'Nenhum bloqueio para o AdSense');
  if (atencoes.length) console.log(`${atencoes.length} ponto(s) de atencao`);
}

process.exit(bloqueios.length ? 1 : 0);
