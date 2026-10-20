import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const projects = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: "./src/content/projects" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      tagline: z.string(),
      summary: z.string().max(200),
      /** What Abdullah personally did. Must be truthful for team projects. */
      role: z.string(),
      context: z.string(),
      stack: z.array(z.string()).min(1),
      /** Short bullets for the printable CV, worded as in the CV. */
      highlights: z.array(z.string()).min(1),
      cover: image().optional(),
      coverAlt: z.string().optional(),
      gallery: z.array(z.object({ src: image(), alt: z.string() })).default([]),
      repo: z.url().optional(),
      live: z.url().optional(),
      order: z.number(),
    }),
});

const experience = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: "./src/content/experience" }),
  schema: z.object({
    kind: z.enum(["work", "education"]),
    title: z.string(),
    organization: z.string(),
    period: z.string(),
    repo: z.url().optional(),
    order: z.number(),
  }),
});

export const collections = { projects, experience };
