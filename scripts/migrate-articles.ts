import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const LEGACY = '/Users/ulissesbalbino/Projects/open-your-ais';
const OUT_DIR = path.resolve(__dirname, '../src/content/blog');

type LegacyArticle = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category?: string;
  tags?: string[];
  date?: string;
  publishDate?: string;
  readTime?: string;
  image?: string;
  imageUrl?: string;
  author?: string;
  featured?: boolean;
  noindex?: boolean;
};

async function loadArticles(): Promise<LegacyArticle[]> {
  const sources = [
    { file: `${LEGACY}/articles-march-2026.ts`, exp: 'ARTICLES_MARCH_2026' },
    { file: `${LEGACY}/articles-feb17.ts`, exp: 'FEB17_ARTICLES' },
    { file: `${LEGACY}/articles-missing-2026.ts`, exp: 'ARTICLES_MISSING_2026' },
  ];
  const all: LegacyArticle[] = [];
  for (const src of sources) {
    const mod = await import(src.file);
    const arr = mod[src.exp] as LegacyArticle[];
    if (!Array.isArray(arr)) {
      console.warn(`! skipped ${src.file}: ${src.exp} not an array`);
      continue;
    }
    console.log(`  • ${path.basename(src.file)} → ${arr.length} articles`);
    all.push(...arr);
  }
  return all;
}

function parseDate(d?: string): string {
  if (!d) return new Date().toISOString().split('T')[0];
  const dt = new Date(d);
  if (isNaN(dt.getTime())) return new Date().toISOString().split('T')[0];
  return dt.toISOString().split('T')[0];
}

function yamlEscape(s: string): string {
  return s.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
}

function toFrontmatter(a: LegacyArticle): string {
  const heroImage = a.image || a.imageUrl;
  const pubDate = parseDate(a.date || a.publishDate);
  const lines: string[] = [];
  lines.push('---');
  lines.push(`id: "${yamlEscape(a.id)}"`);
  lines.push(`title: "${yamlEscape(a.title)}"`);
  lines.push(`description: "${yamlEscape(a.excerpt)}"`);
  lines.push(`pubDate: "${pubDate}"`);
  if (a.category) lines.push(`category: "${yamlEscape(a.category)}"`);
  if (a.tags && a.tags.length) {
    lines.push('tags:');
    for (const t of a.tags) lines.push(`  - "${yamlEscape(t)}"`);
  }
  if (heroImage) lines.push(`heroImage: "${heroImage}"`);
  lines.push(`author: "${yamlEscape(a.author || 'Ulisses Balbino')}"`);
  if (a.readTime) lines.push(`readTime: "${yamlEscape(a.readTime)}"`);
  if (a.featured) lines.push('featured: true');
  if (a.noindex) lines.push('noindex: true');
  lines.push('---');
  return lines.join('\n');
}

function writeArticle(a: LegacyArticle) {
  const body = a.content.trim();
  const file = path.join(OUT_DIR, `${a.slug}.md`);
  const md = `${toFrontmatter(a)}\n\n${body}\n`;
  fs.writeFileSync(file, md, 'utf8');
}

async function main() {
  fs.mkdirSync(OUT_DIR, { recursive: true });
  console.log('Loading legacy articles...');
  const articles = await loadArticles();
  const seen = new Set<string>();
  let written = 0;
  let dupes = 0;
  for (const a of articles) {
    if (!a.slug) continue;
    if (seen.has(a.slug)) {
      dupes++;
      console.warn(`  ! duplicate slug: ${a.slug}`);
      continue;
    }
    seen.add(a.slug);
    writeArticle(a);
    written++;
  }
  console.log(`\nDone. ${written} articles written to ${OUT_DIR} (${dupes} dupes skipped).`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
