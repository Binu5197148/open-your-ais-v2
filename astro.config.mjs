import fs from 'node:fs';
// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';


// Slugs marcados com noindex no frontmatter nao entram no sitemap.
// Sem isto o sitemap continua convidando o Google a rastrear pagina que
// pedimos para nao indexar, o que e um sinal contraditorio.
const noindexSlugs = fs
  .readdirSync('./src/content/blog')
  .filter((f) => f.endsWith('.md') || f.endsWith('.mdx'))
  .filter((f) => /^noindex:\s*true\s*$/m.test(fs.readFileSync(`./src/content/blog/${f}`, 'utf8')))
  .map((f) => f.replace(/\.mdx?$/, ''));

export default defineConfig({
  site: 'https://openyourais.com',
  output: 'static',
  integrations: [mdx(), sitemap({
      filter: (page) => !noindexSlugs.some((slug) => page.includes(`/blog/${slug}/`)),
    })],
  vite: {
    plugins: [tailwindcss()],
  },
  adapter: vercel(),
});
