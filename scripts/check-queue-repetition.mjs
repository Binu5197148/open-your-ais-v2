#!/usr/bin/env node
// Compara TODOS os posts da fila entre si, nao so o par LinkedIn/X da mesma
// entrega. O fracasso de julho de 2026 foi 19 posts diferentes com a mesma
// arquitetura, e nenhuma trava daquela epoca comparava um post com o de tres
// dias antes.
//
// Uso: node scripts/check-queue-repetition.mjs fila.json
// Formato: [{ "id": "...", "quando": "...", "canal": "...", "texto": "..." }]
// Sai com 1 se achar repeticao.

import { readFileSync } from 'node:fs';

const PAYLOAD = [/^npx\s/, /^git clone\s/, /^unzip\s/, /^cd\s/, /^\.venv\//, /^python3\s/];

const words = (t) =>
  (t
    .split('\n')
    .filter((l) => !PAYLOAD.some((p) => p.test(l.trim())))
    .join(' ')
    .replace(/https?:\/\/\S+/g, ' ')
    .normalize('NFKD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .match(/[a-z0-9]+/g)) || [];

const shingles = (t, n = 5) => {
  const w = words(t);
  const s = new Set();
  for (let i = 0; i + n <= w.length; i++) s.add(w.slice(i, i + n).join(' '));
  return s;
};

// Classe gramatical grosseira da abertura, so para variedade.
const openClass = (t) => {
  const first = t.trim().split('\n')[0].trim();
  const w0 = words(first)[0] || '';
  if (/\?$/.test(first.split(/[.!]/)[0])) return 'pergunta';
  if (/^(se|quando|enquanto|caso)$/.test(w0)) return 'oracao condicional';
  if (/^(eu|nos)$/.test(w0)) return 'primeira pessoa';
  if (/^(so|apenas|ainda|hoje|ontem|sempre|nunca)$/.test(w0)) return 'adverbio';
  if (/^(tem|existe|ha)$/.test(w0)) return 'existencial';
  if (/^(o|a|os|as|um|uma|todo|toda|nenhum)$/.test(w0)) return 'sintagma nominal';
  if (/^(na|no|em|de|do|da|por|com|para|desde|antes|depois)$/.test(w0)) return 'sintagma preposicionado';
  if (/(ar|er|ir)$/.test(w0)) return 'verbo infinitivo';
  if (/^(there|one|every|the|a|an)$/.test(w0)) return 'ingles: sintagma nominal';
  if (/^(can|do|does|is|are)$/.test(w0)) return 'ingles: pergunta';
  return `outra (${w0})`;
};

// Construcoes retoricas que viram forma se repetirem na fila.
const CONSTRUCTIONS = [
  ['negacao-afirmacao "nao e X, e Y"', /n[ao]o e [^.!?]{2,40}[,.] e /i],
  ['"o que ... e/foi"', /\bo que [a-z ]{2,30}\b(e|foi|nao)\b/i],
  ['"uma coisa e X, outra e Y"', /uma coisa e [^.!?]+outra e /i],
  ['fragmento de duas palavras', /(^|\n)[A-Z][a-z]+ [a-z]+\.(\s|$)/],
  ['"e isso que"', /\be isso que\b/i],
  ['"por isso"', /\bpor isso\b/i],
  ['"o que eu (parei|levo|rodo|faco)"', /\bo que eu (parei|levo|rodo|faco|uso)\b/i],
];

const fila = JSON.parse(readFileSync(process.argv[2], 'utf8'));
let falhou = false;

console.log(`Fila: ${fila.length} posts\n`);

console.log('ABERTURAS');
const classCount = {};
for (const p of fila) {
  const c = openClass(p.texto);
  classCount[c] = (classCount[c] || 0) + 1;
  console.log(`  ${p.quando}  ${p.canal.padEnd(8)} ${c.padEnd(26)} ${words(p.texto).slice(0, 6).join(' ')}...`);
}
for (const [c, n] of Object.entries(classCount)) {
  if (n > 2) {
    console.log(`  FALHA: a classe "${c}" abre ${n} posts da fila. Teto 2.`);
    falhou = true;
  }
}

console.log('\nCONSTRUCOES REPETIDAS NA FILA');
for (const [nome, rx] of CONSTRUCTIONS) {
  const quais = fila.filter((p) => rx.test(p.texto));
  if (quais.length > 2) {
    console.log(`  FALHA: ${nome} aparece em ${quais.length} posts: ${quais.map((p) => p.quando).join(', ')}`);
    falhou = true;
  } else if (quais.length) {
    console.log(`  ok  ${nome}: ${quais.length} (${quais.map((p) => p.quando).join(', ')})`);
  }
}

console.log('\nTRECHOS REPETIDOS ENTRE POSTS DIFERENTES (5 palavras)');
let achou = false;
for (let i = 0; i < fila.length; i++) {
  for (let j = i + 1; j < fila.length; j++) {
    const a = shingles(fila[i].texto);
    const b = shingles(fila[j].texto);
    // Nome proprio repetido nao e formula: os dois posts falam do mesmo festival.
    const PROPRIO = /neu wave ai film festival|toninho sagatiba|open your ais|pichorra filmes|balba bossa/;
    const comuns = [...a].filter((s) => b.has(s) && !PROPRIO.test(s));
    if (comuns.length) {
      achou = true;
      falhou = true;
      console.log(`  FALHA: ${fila[i].quando} ${fila[i].canal} x ${fila[j].quando} ${fila[j].canal}`);
      for (const c of comuns.slice(0, 3)) console.log(`      ${c}`);
    }
  }
}
if (!achou) console.log('  nenhum');

console.log(falhou ? '\nREPROVADO' : '\nAPROVADO');
process.exit(falhou ? 1 : 0);
