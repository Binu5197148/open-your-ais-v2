#!/usr/bin/env node
// OYA content quality gate — runs before build and inside auto-openai.ts pipeline.
// Schema (Astro Zod) covers required fields. This script covers what schema cannot:
//   - duplicate hero images across posts (kills the "art mural" effect)
//   - HTML entities accidentally pasted into Markdown prose (&apos; &quot;)
//   - thin content (<800 visible words → AdSense / E-E-A-T risk)
//   - accidental <pre> blocks (4+ leading spaces inside body)
// Single-file mode: `node scripts/validate-content.mjs path/to/post.md`
// All-files mode:  `node scripts/validate-content.mjs` (scans src/content/blog/*.md)
// Exits 1 on any failure with a per-file report.

import fs from 'node:fs/promises';
import path from 'node:path';

const BLOG_DIR = 'src/content/blog';
const MIN_VISIBLE_WORDS = 800; // editorial standard for substantive articles

function parseFrontmatter(raw) {
  const m = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!m) return { frontmatter: {}, body: raw };
  const fm = {};
  for (const line of m[1].split('\n')) {
    const kv = line.match(/^([a-zA-Z_][a-zA-Z0-9_]*):\s*(.*)$/);
    if (!kv) continue;
    let v = kv[2].trim();
    if (v.startsWith('"') && v.endsWith('"')) v = v.slice(1, -1);
    if (v.startsWith("'") && v.endsWith("'")) v = v.slice(1, -1);
    fm[kv[1]] = v;
  }
  return { frontmatter: fm, body: m[2] };
}

function visibleWordCount(body) {
  // Strip HTML comments, then HTML tags, then count whitespace-separated tokens.
  const stripped = body
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&[a-z]+;/gi, ' ');
  return stripped.split(/\s+/).filter(Boolean).length;
}

async function loadPost(file) {
  const raw = await fs.readFile(file, 'utf-8');
  const { frontmatter, body } = parseFrontmatter(raw);
  return { file, raw, frontmatter, body };
}

function checkSinglePost(post, heroIndex) {
  const errors = [];
  const warnings = [];
  const { file, frontmatter, body } = post;

  // Hero image present + not in known-duplicated set
  const hero = frontmatter.heroImage;
  if (!hero) {
    errors.push('heroImage missing');
  } else {
    const dupes = heroIndex.get(hero) ?? [];
    if (dupes.length > 1) {
      const others = dupes.filter(f => f !== file).map(f => path.basename(f));
      errors.push(`heroImage duplicated with ${dupes.length - 1} other post(s): ${others.slice(0, 3).join(', ')}${others.length > 3 ? '…' : ''}`);
    }
  }

  // HTML entity escaping in prose (Astro Markdown does NOT auto-decode these)
  const apos = (body.match(/&apos;/g) ?? []).length;
  const quot = (body.match(/&quot;/g) ?? []).length;
  if (apos > 0) errors.push(`${apos} occurrences of &apos; in body — use raw apostrophe ' (Markdown does not decode HTML entities)`);
  if (quot > 0) errors.push(`${quot} occurrences of &quot; in body — use raw double quote " (Markdown does not decode HTML entities)`);

  // Visible word count (post-tag strip)
  const words = visibleWordCount(body);
  if (words < MIN_VISIBLE_WORDS) {
    errors.push(`thin content: ${words} visible words (minimum ${MIN_VISIBLE_WORDS}) — AdSense / E-E-A-T risk`);
  }

  // Accidental <pre> blocks (Astro turns 4+ leading spaces into <pre>)
  const lines = body.split('\n');
  const inFence = { active: false };
  const offenders = [];
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (/^```/.test(line.trim())) inFence.active = !inFence.active;
    if (inFence.active) continue;
    if (/^    [^ ]/.test(line)) {
      offenders.push(i + 1);
      if (offenders.length >= 3) break;
    }
  }
  if (offenders.length > 0) {
    errors.push(`accidental <pre> block — lines ${offenders.join(', ')} start with 4+ spaces outside a code fence`);
  }

  // Soft SEO warnings (do not fail the build, but surface in weekly report)
  const title = frontmatter.title ?? '';
  const description = frontmatter.description ?? '';
  if (title.length > 65) warnings.push(`title is ${title.length} chars — Google SERP truncates around 60-65 (still acceptable)`);
  if (description.length > 170) warnings.push(`description is ${description.length} chars — Google SERP truncates around 155-160 (still acceptable)`);

  return { errors, warnings };
}

async function buildHeroIndex(files) {
  const idx = new Map();
  for (const file of files) {
    const { frontmatter } = await loadPost(file);
    const hero = frontmatter.heroImage;
    if (!hero) continue;
    if (!idx.has(hero)) idx.set(hero, []);
    idx.get(hero).push(file);
  }
  return idx;
}

async function main() {
  const arg = process.argv[2];
  let allFiles;
  let target;

  if (arg) {
    target = [path.resolve(arg)];
    // For single-file mode we still need the full hero index to detect collisions.
    const dir = path.resolve(BLOG_DIR);
    const list = await fs.readdir(dir);
    allFiles = list.filter(f => f.endsWith('.md')).map(f => path.join(dir, f));
  } else {
    const dir = path.resolve(BLOG_DIR);
    const list = await fs.readdir(dir);
    allFiles = list.filter(f => f.endsWith('.md')).map(f => path.join(dir, f));
    target = allFiles;
  }

  const heroIndex = await buildHeroIndex(allFiles);

  let failures = 0;
  let warnCount = 0;
  const failed = [];
  const warned = [];
  for (const file of target) {
    const post = await loadPost(file);
    const { errors, warnings } = checkSinglePost(post, heroIndex);
    if (errors.length > 0) {
      failures++;
      failed.push({ file: path.basename(file), errors });
    }
    if (warnings.length > 0) {
      warnCount++;
      warned.push({ file: path.basename(file), warnings });
    }
  }

  if (failures > 0) {
    console.error(`\n❌ Content validation FAILED for ${failures}/${target.length} post(s):\n`);
    for (const { file, errors } of failed) {
      console.error(`  ${file}`);
      for (const e of errors) console.error(`    • ${e}`);
      console.error('');
    }
    console.error(`Fix the above before building. Schema-level errors (missing/short title etc.) will be caught by Astro at build time.`);
    process.exit(1);
  }

  if (warnCount > 0) {
    console.log(`\n⚠️  ${warnCount}/${target.length} post(s) have soft SEO warnings (do not block build):`);
    for (const { file, warnings } of warned.slice(0, 10)) {
      console.log(`  ${file}`);
      for (const w of warnings) console.log(`    • ${w}`);
    }
    if (warned.length > 10) console.log(`  …and ${warned.length - 10} more.`);
    console.log('');
  }

  console.log(`✅ Content validation passed (${target.length} post${target.length === 1 ? '' : 's'} checked, ${warnCount} with soft warnings).`);
}

main().catch(err => {
  console.error(`validate-content.mjs crashed:`, err);
  process.exit(2);
});
