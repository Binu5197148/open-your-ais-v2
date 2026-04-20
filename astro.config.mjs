// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';

export default defineConfig({
  site: 'https://openyourais.com',
  output: 'static',
  integrations: [mdx(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
  adapter: vercel(),
});
