# Open Your AIs — Astro edition

Static blog for [openyourais.com](https://openyourais.com). A filmmaker's perspective on AI.

## Stack

- Astro (static site generation)
- Content Collections (Markdown in `src/content/blog/`)
- Tailwind CSS (v4 via Vite plugin)
- `@astrojs/sitemap` + `@astrojs/rss` + Vercel adapter

## Commands

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Content pipeline

New articles are written automatically by `auto-openai.ts` (in the
`marketing-video` repo) directly to `src/content/blog/{slug}.md`. Each commit
triggers a Vercel deploy.

## Structure

- `src/content/blog/` — Markdown articles
- `src/pages/` — routes (index, blog, about, contact, privacy, terms, tools)
- `src/layouts/` — `BaseLayout.astro`, `BlogPost.astro`
- `src/components/` — header, footer, article card, AdSense slot
- `src/content.config.ts` — frontmatter schema
- `public/` — static assets (robots.txt, ads.txt)
- `vercel.json` — 301 redirects for deleted/moved URLs
