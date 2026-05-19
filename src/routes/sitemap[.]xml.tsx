import { createFileRoute } from "@tanstack/react-router";

const BASE_URL = "";

const STATIC_PATHS = [
  "/", "/about", "/products", "/manufacturing", "/export-services",
  "/certifications", "/gallery", "/blog", "/contact",
];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const { PRODUCTS, BLOG_POSTS } = await import("@/lib/content");
        const urls: { loc: string; priority: string; lastmod?: string }[] = [
          ...STATIC_PATHS.map((p) => ({ loc: p, priority: p === "/" ? "1.0" : "0.8" })),
          ...PRODUCTS.map((p) => ({ loc: `/products/${p.slug}`, priority: "0.7" })),
          ...BLOG_POSTS.map((p) => ({ loc: `/blog/${p.slug}`, priority: "0.6", lastmod: p.date })),
        ];
        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls.map((u) =>
            [
              "  <url>",
              `    <loc>${BASE_URL}${u.loc}</loc>`,
              u.lastmod ? `    <lastmod>${u.lastmod}</lastmod>` : null,
              "    <changefreq>weekly</changefreq>",
              `    <priority>${u.priority}</priority>`,
              "  </url>",
            ].filter(Boolean).join("\n"),
          ),
          `</urlset>`,
        ].join("\n");
        return new Response(xml, {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});
