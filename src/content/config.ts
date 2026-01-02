import { defineCollection, reference, z } from "astro:content";

const blogCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string().optional(),
      date: z.date(),
      image: image(),
      // .refine(img => img.width > 225500, {
      //     message: "Image width must be less than 1200 pixels",
      // } ),

      // Relation
      // author: z.string().optional(),
      author: reference("author"),
      // Relation
      tags: z.array(z.string()),
      isDraft: z.boolean().default(false),
    }),
});

const authorCollection = defineCollection({
  type: "data",
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      avatar: image(),
      twitter: z.string(),
      linkedIn: z.string(),
      github: z.string(),
      bio: z.string(),
      subtitle: z.string(),
    }),
});

export const collections = {
  blog: blogCollection,
  author: authorCollection,
};
