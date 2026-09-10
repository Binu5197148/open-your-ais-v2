import fs from 'node:fs';
// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';


// Withdrawn articles never enter the sitemap. Article dates come from the
// editorial metadata, not the current build time.
const articleMeta = new Map(fs.readdirSync('./src/content/blog')
  .filter((file) => /\.mdx?$/.test(file)).map((file) => {
    const raw = fs.readFileSync(`./src/content/blog/${file}`, 'utf8');
    const frontmatter = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/)?.[1] ?? '';
    const field = (name) => frontmatter.match(new RegExp(`^${name}:\\s*["']?([^"'\\s]+)`, 'm'))?.[1];
    const slug = file.replace(/\.mdx?$/, '');
    return [`/blog/${slug}/`, { withdrawn: field('noindex') === 'true', date: field('updatedDate') || field('pubDate') }];
  }));

export default defineConfig({
  site: 'https://openyourais.com',
  output: 'static',
  integrations: [mdx(), sitemap({
      filter: (page) => !articleMeta.get(new URL(page).pathname)?.withdrawn,
      serialize: (item) => {
        const date = articleMeta.get(new URL(item.url).pathname)?.date;
        return date ? { ...item, lastmod: date } : item;
      },
    })],
  vite: {
    plugins: [tailwindcss()],
  },
  adapter: vercel(),
});
