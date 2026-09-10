import fs from 'node:fs/promises';
import { execFileSync } from 'node:child_process';
import { pathToFileURL } from 'node:url';

const site = 'https://openyourais.com';
export function selectUrls(files, sitemap) {
  const urls = new Set();
  let globalChange = false;
  for (const file of files) {
    const post = file.match(/^src\/content\/blog\/(.+)\.mdx?$/);
    if (post) {
      urls.add(`${site}/blog/${post[1]}/`);
      urls.add(`${site}/`); urls.add(`${site}/blog/`);
    } else if (/^(src\/(pages|layouts|components|styles)\/|public\/|astro\.config|vercel\.json)/.test(file)) {
      globalChange = true;
    }
  }
  return [...new Set([...urls, ...(globalChange ? sitemap : [])])];
}

async function get(path) {
  return fetch(site + path, { signal: AbortSignal.timeout(20000), cache: 'no-store' });
}
async function main() {
  const args = process.argv.slice(2);
  const sha = process.env.INDEXNOW_EXPECTED_SHA;
  if (sha) {
    if (!/^[a-f0-9]{40}$/.test(sha)) throw Error('Invalid deployment SHA');
    let ready = false;
    for (let i = 0; i < 40; i++) {
      try {
        const r = await get('/indexnow-deployment.txt');
        if (r.ok && (await r.text()).trim() === sha) { ready = true; break; }
      } catch {}
      console.log('Waiting for production deployment...');
      await new Promise(r => setTimeout(r, 15000));
    }
    if (!ready) throw Error('Production has not deployed this commit; nothing submitted');
  }
  const response = await get('/sitemap-0.xml');
  if (!response.ok) throw Error(`Sitemap HTTP ${response.status}`);
  const sitemap = [...(await response.text()).matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1]);
  if (!sitemap.length) throw Error('Empty sitemap');
  let urls;
  if (args.includes('--all')) urls = sitemap;
  else {
    const before = process.env.INDEXNOW_BEFORE;
    if (!before || !/^[a-f0-9]{40}$/.test(before) || /^0+$/.test(before)) throw Error('Use --all or a valid INDEXNOW_BEFORE');
    const files = execFileSync('git', ['diff', '--name-only', '--no-renames', before, 'HEAD'], { encoding: 'utf8' }).trim().split('\n');
    urls = selectUrls(files, sitemap);
  }
  urls = [...new Set(urls)];
  if (urls.some(u => new URL(u).origin !== site || new URL(u).search || new URL(u).hash)) throw Error('Invalid URL in submission');
  if (!urls.length) { console.log('No content changes to submit'); return; }
  if (args.includes('--dry-run')) { console.log(JSON.stringify({ count: urls.length, urls }, null, 2)); return; }
  const key = (await fs.readFile('public/indexnow-key.txt', 'utf8')).trim();
  if (!/^[a-f0-9]{32}$/.test(key)) throw Error('Invalid IndexNow key');
  const proof = await get('/indexnow-key.txt');
  if (!proof.ok || (await proof.text()).trim() !== key) throw Error('Published key does not match; nothing submitted');
  for (let i = 0; i < urls.length; i += 10000) {
    const batch = urls.slice(i, i + 10000);
    const r = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST', headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify({ host: 'openyourais.com', key, keyLocation: `${site}/indexnow-key.txt`, urlList: batch }),
      signal: AbortSignal.timeout(30000),
    });
    if (![200, 202].includes(r.status)) throw Error(`IndexNow HTTP ${r.status}: ${await r.text()}`);
    console.log(`IndexNow HTTP ${r.status}: ${batch.length} URLs received${r.status === 202 ? ' (key verification pending)' : ''}. Indexing is not guaranteed.`);
  }
}
if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  main().catch(e => { console.error(e.message); process.exitCode = 1; });
}
