import type { APIRoute } from "astro";
import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export const GET: APIRoute = async ({ params, request, site }) => {
  const blogPosts = await getCollection("blog");

  return rss({
    // `<title>` field in output xml
    title: "Maleanta",
    // `<description>` field in output xml
    description: "Editorial Maleanta - Libros de fantasía y ciencia ficción",
    // Pull in your project "site" from the endpoint context
    // https://docs.astro.build/en/reference/api-reference/#site
    site: site ?? "",
    // Array of `<item>`s in output xml
    // See "Generating items" section for examples using content collections and glob imports
    items: blogPosts.map(({ data, slug }) => ({
      title: data.title,
      pubDate: data.date,
      description: data.description,
      link: `/blog/${slug}/`,
    })),
    // (optional) inject custom xml
    customData: `<language>es-es</language>`,
    // stylesheet: '/styles/rss.xsl',
  });
};
