import { z, defineCollection } from 'astro:content';

interface Review {
  outlet: string;
  region: string;
  overallScore: number;
  slug: string;
  pubDate: Date;
  author: string[];
}

const reviewCollection = defineCollection({
  schema: z.object({
    outlet: z.string(),
    region: z.string(),
    overallScore: z.number(),
    slug: z.string(),
    pubDate: z.date(),
    author: z.array(z.string()),
  }),
});

export type { Review };
export const collections = {
  review: reviewCollection,
};
