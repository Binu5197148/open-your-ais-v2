#!/usr/bin/env node
// Fetches unique cinematic photos from Unsplash and assigns one per blog post.
// Result: updates heroImage frontmatter in src/content/blog/*.md.
// Site applies CSS `filter: grayscale(1)` globally, so we pick high-contrast
// dramatic shots that translate well to B&W.

import fs from 'node:fs/promises';
import path from 'node:path';

// Simple .env loader (no dotenv dep)
try {
  const env = await fs.readFile('.env', 'utf-8');
  for (const line of env.split('\n')) {
    const m = line.match(/^([A-Z_]+)=(.*)$/);
    if (m && !process.env[m[1]]) process.env[m[1]] = m[2].replace(/^["']|["']$/g, '');
  }
} catch {}

const KEY = process.env.UNSPLASH_ACCESS_KEY;
if (!KEY) { console.error('UNSPLASH_ACCESS_KEY missing'); process.exit(1); }

// Curated cinematic B&W-ready queries.
// High contrast, dramatic lighting, editorial tone.
const QUERIES = [
  'film set cinematography',
  'cinema camera closeup',
  'film director on set',
  'editing bay monitors',
  'film reel 35mm analog',
  'theater stage dramatic lighting',
  'cinema hall empty',
  'smoke noir silhouette',
  'shadow light portrait',
  'dramatic portrait monochrome',
  'neon city night street',
  'analog film photography grain',
  'urban cinematic night',
  'backstage production crew',
  'black and white portrait artistic',
];

const sleep = (ms) => new Promise(r => setTimeout(r, ms));

async function search(q) {
  const u = `https://api.unsplash.com/search/photos?query=${encodeURIComponent(q)}&per_page=30&orientation=landscape&content_filter=high`;
  const r = await fetch(u, { headers: { Authorization: `Client-ID ${KEY}` } });
  if (!r.ok) throw new Error(`Unsplash ${q}: ${r.status} ${await r.text()}`);
  return r.json();
}

// --pick mode: print ONE fresh hero URL (not used by any existing post) to stdout.
// Used by auto-openai.ts to assign a unique hero per daily article.
// Cheap: hits 1-3 random queries until we find a non-duplicate.
async function pickOne() {
  const blogDir = 'src/content/blog';
  let usedUrls = new Set();
  try {
    const files = (await fs.readdir(blogDir)).filter(f => f.endsWith('.md'));
    for (const f of files) {
      const raw = await fs.readFile(path.join(blogDir, f), 'utf-8');
      const m = raw.match(/^heroImage:\s*"([^"]+)"/m);
      if (m) usedUrls.add(m[1]);
    }
  } catch {}

  // Index by Unsplash photo slug (the part after /photo- in the canonical URL).
  // p.id is alphanumeric (e.g. "xPq3R8VdGSc"); the URL slug is numeric+hex
  // (e.g. "1587545634538-50a9b6b3168f"). They are different — must compare URL→URL.
  const usedSlugs = new Set();
  for (const u of usedUrls) {
    const m = u.match(/unsplash\.com\/(photo-[^?\s"]+)/);
    if (m) usedSlugs.add(m[1]);
  }

  const shuffled = [...QUERIES].sort(() => Math.random() - 0.5);
  for (const q of shuffled) {
    try {
      const res = await search(q);
      for (const p of res.results) {
        const candidateSlug = p.urls.raw.match(/unsplash\.com\/(photo-[^?\s"]+)/)?.[1];
        if (candidateSlug && !usedSlugs.has(candidateSlug)) {
          const url = `${p.urls.raw}&auto=format&fit=crop&w=1800&q=85`;
          process.stdout.write(url + '\n');
          return;
        }
      }
    } catch (e) {
      console.error(`  skip "${q}":`, e.message);
    }
    await sleep(800);
  }
  console.error('No fresh hero found across all queries — pool exhausted, broaden QUERIES.');
  process.exit(1);
}

async function main() {
  if (process.argv.includes('--pick')) {
    await pickOne();
    return;
  }

  const pool = new Map();
  for (const q of QUERIES) {
    try {
      const res = await search(q);
      for (const p of res.results) pool.set(p.id, p);
      console.log(`  [${pool.size.toString().padStart(3)}] "${q}" → +${res.results.length}`);
    } catch (e) {
      console.error(`  skip "${q}":`, e.message);
    }
    await sleep(1000); // be gentle
  }

  const blogDir = 'src/content/blog';
  const files = (await fs.readdir(blogDir)).filter(f => f.endsWith('.md')).sort();
  console.log(`\nPool: ${pool.size} unique photos | Posts: ${files.length}`);
  if (pool.size < files.length) {
    console.error(`Pool too small (${pool.size} < ${files.length})`);
    process.exit(1);
  }

  // Shuffle photos deterministically so re-runs are stable (seed = pool size)
  const photos = [...pool.values()];
  // Simple seeded shuffle (mulberry32)
  let seed = 42;
  const rand = () => {
    seed |= 0; seed = seed + 0x6d2b79f5 | 0;
    let t = Math.imul(seed ^ seed >>> 15, 1 | seed);
    t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
  for (let i = photos.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [photos[i], photos[j]] = [photos[j], photos[i]];
  }

  let updated = 0;
  for (let i = 0; i < files.length; i++) {
    const photo = photos[i];
    const heroUrl = `${photo.urls.raw}&auto=format&fit=crop&w=1800&q=85`;
    const filepath = path.join(blogDir, files[i]);
    const raw = await fs.readFile(filepath, 'utf-8');
    const next = raw.replace(
      /^heroImage:\s*"[^"]*"\s*$/m,
      `heroImage: "${heroUrl}"`
    );
    if (next === raw) {
      console.warn(`  ! no heroImage line: ${files[i]}`);
      continue;
    }
    await fs.writeFile(filepath, next);
    updated++;
    console.log(`  ✓ ${files[i].padEnd(70)} ${photo.id}  ${photo.user.name}`);
  }
  console.log(`\nUpdated ${updated}/${files.length} posts.`);
}

main().catch(e => { console.error(e); process.exit(1); });
