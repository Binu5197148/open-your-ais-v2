import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    id: z.string().optional(),
    title: z.string()
      .min(25, 'title must be at least 25 chars (substance gate)')
      .max(120, 'title must be at most 120 chars (hard ceiling — Google truncates ~60-65, but informative editorial titles up to 120 are acceptable)'),
    description: z.string()
      .min(80, 'description must be at least 80 chars (Google snippet needs substance)')
      .max(380, 'description must be at most 380 chars (hard ceiling — Google truncates ~155-160, but full editorial meta description acceptable up to 380)'),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    category: z.string().optional(),
    tags: z.array(z.string()).optional(),
    heroImage: z.string().url('heroImage is required and must be a valid URL'),
    author: z.string().default('Ulisses Balbino'),
    readTime: z.string().optional(),
    featured: z.boolean().default(false),
    noindex: z.boolean().default(false),
  }),
});

export const collections = { blog };
