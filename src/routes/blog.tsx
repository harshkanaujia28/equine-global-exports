import { createFileRoute, Link } from "@tanstack/react-router";
import { Section } from "@/components/site/Section";
import { CTASection } from "@/components/site/CTASection";
import { Reveal } from "@/components/site/Reveal";
import { BLOG_POSTS } from "@/lib/content";
import { BRAND } from "@/lib/brand";
import { ArrowRight, Clock } from "lucide-react";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: `Blog — Horse Shoe Manufacturing & Export Insights | ${BRAND.name}` },
      { name: "description", content: "Articles on horse shoe manufacturing, export-grade quality standards, hoof care for distributors, and the global equine supply industry." },
      { property: "og:title", content: `Blog — ${BRAND.name}` },
      { property: "og:description", content: "Insights from the forge floor and the export desk." },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  return (
    <>
      <Section
        eyebrow="Insights"
        title="From the forge floor and the export desk"
        intro="Practical writing for buyers, distributors, and farriers. Manufacturing, quality standards, and how to merchandise the equine supply category."
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {BLOG_POSTS.map((post, i) => (
            <Reveal key={post.slug} delay={i * 0.05}>
              <Link
                to="/blog/$slug"
                params={{ slug: post.slug }}
                className="group flex h-full flex-col rounded-xl border border-border bg-card p-7 transition-all hover:border-copper hover:shadow-[var(--shadow-card)]"
              >
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <time>{new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</time>
                  <span>·</span>
                  <span className="inline-flex items-center gap-1"><Clock className="h-3 w-3" /> {post.readMinutes} min read</span>
                </div>
                <h3 className="mt-4 flex-1 font-display text-xl font-bold leading-tight">{post.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground line-clamp-3">{post.excerpt}</p>
                <div className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-copper">
                  Read article <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      <CTASection />
    </>
  );
}
