import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    id: z.string().optional(),
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    category: z.string().optional(),
    tags: z.array(z.string()).optional(),
    heroImage: z.string().url().optional(),
    author: z.string().default('Ulisses Balbino'),
    readTime: z.string().optional(),
    featured: z.boolean().default(false),
    noindex: z.boolean().default(false),
  }),
});

export const collections = { blog };
