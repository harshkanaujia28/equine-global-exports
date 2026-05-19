import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Container, Section } from "@/components/site/Section";
import { CTASection } from "@/components/site/CTASection";
import { BLOG_POSTS } from "@/lib/content";
import { BRAND } from "@/lib/brand";
import { ArrowLeft, Clock } from "lucide-react";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = BLOG_POSTS.find((p) => p.slug === params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.post;
    if (!p) return {};
    return {
      meta: [
        { title: `${p.title} | ${BRAND.name}` },
        { name: "description", content: p.excerpt },
        { property: "og:title", content: p.title },
        { property: "og:description", content: p.excerpt },
        { property: "og:url", content: `/blog/${p.slug}` },
        { property: "og:type", content: "article" },
      ],
      links: [{ rel: "canonical", href: `/blog/${p.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: p.title,
            description: p.excerpt,
            datePublished: p.date,
            author: { "@type": "Organization", name: BRAND.name },
            publisher: { "@type": "Organization", name: BRAND.name },
          }),
        },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="grid min-h-[60vh] place-items-center px-6 text-center">
      <div>
        <h1 className="font-display text-3xl font-bold">Article not found</h1>
        <Link to="/blog" className="mt-4 inline-flex items-center gap-2 text-copper">
          <ArrowLeft className="h-4 w-4" /> Back to blog
        </Link>
      </div>
    </div>
  ),
  component: PostPage,
});

function PostPage() {
  const { post } = Route.useLoaderData();
  return (
    <>
      <div className="border-b border-border bg-surface-2/30 py-6">
        <Container>
          <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
            <ArrowLeft className="h-4 w-4" /> Back to blog
          </Link>
        </Container>
      </div>

      <article className="py-20 lg:py-28">
        <Container className="max-w-3xl">
          <div className="flex items-center gap-3 text-xs text-muted-foreground">
            <time>{new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</time>
            <span>·</span>
            <span className="inline-flex items-center gap-1"><Clock className="h-3 w-3" /> {post.readMinutes} min read</span>
          </div>
          <h1 className="mt-4 font-display text-4xl font-bold leading-[1.1] text-balance md:text-5xl lg:text-6xl">
            {post.title}
          </h1>
          <p className="mt-5 text-xl text-muted-foreground text-pretty">{post.excerpt}</p>

          <div className="prose-content mt-12 space-y-6 text-base leading-relaxed text-foreground/90">
            {post.body.split("\n\n").map((block: string, i: number) => {
              if (block.startsWith("## ")) {
                return (
                  <h2 key={i} className="mt-12 font-display text-2xl font-bold md:text-3xl">
                    {block.replace(/^##\s+/, "")}
                  </h2>
                );
              }
              return <p key={i} className="text-muted-foreground">{block}</p>;
            })}
          </div>
        </Container>
      </article>

      <CTASection />
    </>
  );
}
