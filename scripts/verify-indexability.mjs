#!/usr/bin/env node
// Regression checks for published routes, internal links and sitemap metadata.
// Passing these checks is not a promise of Google indexing or AdSense approval.
import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';

const root = path.resolve('.vercel/output/static');
assert.ok(fs.existsSync(root), 'Build output missing. Run npm run build first.');
const site = 'https://openyourais.com';
const sitemap = fs.readFileSync(path.join(root, 'sitemap-0.xml'), 'utf8');
const entries = [...sitemap.matchAll(/<url>([\s\S]*?)<\/url>/g)].map((m) => ({
  url: m[1].match(/<loc>(.*?)<\/loc>/)?.[1],
  lastmod: m[1].match(/<lastmod>(.*?)<\/lastmod>/)?.[1],
}));
const urls = new Set(entries.map((entry) => entry.url));
assert.ok(urls.size > 0, 'Empty sitemap');
assert.equal(urls.size, entries.length, 'Duplicate sitemap URL');
const redirects = JSON.parse(fs.readFileSync('vercel.json', 'utf8')).redirects ?? [];
const posts = fs.readdirSync('src/content/blog').filter((file) => /\.mdx?$/.test(file)).map((file) => {
  const raw = fs.readFileSync(path.join('src/content/blog', file), 'utf8');
  const fm = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/)?.[1] ?? '';
  const field = (name) => fm.match(new RegExp(`^${name}:\\s*["']?([^"'\\s]+)`, 'm'))?.[1];
  return { slug: file.replace(/\.mdx?$/, ''), withdrawn: field('noindex') === 'true', date: field('updatedDate') || field('pubDate') };
});
const withdrawn = new Set(posts.filter((p) => p.withdrawn).map((p) => `/blog/${p.slug}/`));
const fileFor = (pathname) => {
  const clean = decodeURIComponent(pathname).replace(/^\/+/, '');
  const candidates = [path.join(root, clean), path.join(root, clean, 'index.html'), path.join(root, clean.replace(/\/$/, '') + '.html')];
  return candidates.find((file) => file.startsWith(root + path.sep) && fs.existsSync(file) && fs.statSync(file).isFile());
};
const redirectsByPath = new Map(redirects.filter((r) => !r.source.includes(':')).map((r) => [r.source, r.destination]));
function targetExists(pathname, visited = new Set()) {
  if (visited.has(pathname)) return false;
  visited.add(pathname);
  if (fileFor(pathname)) return true;
  const target = redirectsByPath.get(pathname) ?? redirectsByPath.get(pathname.endsWith('/') ? pathname.slice(0, -1) : pathname + '/');
  return target ? targetExists(new URL(target, site).pathname, visited) : false;
}
for (const p of posts) {
  const pathname = `/blog/${p.slug}/`;
  if (p.withdrawn) {
    assert.ok(!fileFor(pathname), `Withdrawn article is still built: ${pathname}`);
    assert.ok(!urls.has(site + pathname), `Withdrawn article in sitemap: ${pathname}`);
    for (const feed of ['rss.xml', 'llms.txt']) {
      assert.ok(!fs.readFileSync(path.join(root, feed), 'utf8').includes(pathname), `Withdrawn article in ${feed}: ${pathname}`);
    }
  } else {
    const entry = entries.find((e) => e.url === site + pathname);
    assert.ok(entry, `Published article missing from sitemap: ${pathname}`);
    assert.equal(entry.lastmod?.slice(0, 10), p.date?.slice(0, 10), `lastmod must use editorial date: ${pathname}`);
  }
}
for (const r of redirects) {
  assert.notEqual(r.destination, '/blog/', `Irrelevant archive redirect: ${r.source}`);
  assert.ok(!withdrawn.has(r.destination), `Redirect to withdrawn content: ${r.source}`);
  if (!r.destination.includes(':')) assert.ok(targetExists(r.destination), `Redirect destination missing: ${r.source} -> ${r.destination}`);
}
let checkedLinks = 0;
for (const { url } of entries) {
  const pathname = new URL(url).pathname;
  const file = fileFor(pathname);
  assert.ok(file, `Sitemap URL has no page: ${url}`);
  const html = fs.readFileSync(file, 'utf8');
  assert.ok(!/<meta[^>]*name=["']robots["'][^>]*content=["'][^"']*noindex/i.test(html), `noindex in sitemap: ${url}`);
  const canonical = html.match(/<link[^>]*rel=["']canonical["'][^>]*href=["']([^"']+)/i)?.[1];
  assert.equal(canonical, url, `Canonical mismatch: ${url}`);
  assert.ok(!/data-ad-slot=["']1234567890["']/.test(html), `Placeholder ad unit: ${url}`);
  for (const m of html.matchAll(/<a\b[^>]*href=["']([^"']+)["']/gi)) {
    const target = new URL(m[1].replace(/&amp;/g, '&'), url);
    if (target.origin !== site) continue;
    assert.ok(!withdrawn.has(target.pathname), `Link to withdrawn article: ${url} -> ${target.pathname}`);
    assert.ok(targetExists(target.pathname), `Broken internal link: ${url} -> ${target.pathname}`);
    checkedLinks++;
  }
  for (const m of html.matchAll(/<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/g)) JSON.parse(m[1]);
}
const errorPage = fs.readFileSync(path.join(root, '404.html'), 'utf8');
assert.match(errorPage, /noindex/);
assert.ok(!errorPage.includes('pagead2.googlesyndication.com'), 'Error page must not load advertising');
console.log(`Indexability checks passed: ${entries.length} sitemap URLs, ${posts.filter(p => !p.withdrawn).length} articles, ${withdrawn.size} withdrawn routes absent, ${checkedLinks} internal links, ${redirects.length} redirect rules.`);
