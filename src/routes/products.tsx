import { createFileRoute, Link } from "@tanstack/react-router";
import { z } from "zod";
import { Section, Container } from "@/components/site/Section";
import { CTASection } from "@/components/site/CTASection";
import { Reveal } from "@/components/site/Reveal";
import { CATEGORIES, PRODUCTS, type ProductCategory } from "@/lib/content";
import { BRAND, whatsappLink } from "@/lib/brand";
import { ArrowRight, MessageCircle, Package } from "lucide-react";

const SearchSchema = z.object({
  cat: z
    .enum([
      "aluminum-horse-shoes",
      "steel-horse-shoes",
      "racing-horse-shoes",
      "farrier-tools",
      "hoof-care",
      "equine-accessories",
    ])
    .optional(),
});

export const Route = createFileRoute("/products")({
  validateSearch: SearchSchema,
  head: () => ({
    meta: [
      { title: `Products — Horse Shoes, Farrier Tools & Equine Supplies | ${BRAND.name}` },
      { name: "description", content: "Browse our full export catalog: aluminum horse shoes, steel horse shoes, racing shoes, handmade farrier tools, hoof care products, and equine accessories." },
      { property: "og:title", content: `Products — ${BRAND.name}` },
      { property: "og:description", content: "Six categories. One container. Complete equine supply catalog for global distributors." },
      { property: "og:url", content: "/products" },
    ],
    links: [{ rel: "canonical", href: "/products" }],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  const { cat } = Route.useSearch();
  const filtered = cat ? PRODUCTS.filter((p) => p.category === cat) : PRODUCTS;

  return (
    <>
      <Section
        eyebrow="Catalog"
        title="Horse shoes, farrier tools, and equine supplies"
        intro="Six product categories backed by a single source of supply. Filter below or send us your wishlist — we'll quote container pricing within one business day."
      >
        <div className="flex flex-wrap gap-2">
          <FilterChip to="/products" active={!cat} label="All products" />
          {CATEGORIES.map((c) => (
            <FilterChip key={c.id} to="/products" search={{ cat: c.id }} active={cat === c.id} label={c.label} />
          ))}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.04}>
              <Link
                to="/products/$slug"
                params={{ slug: p.slug }}
                className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card transition-all hover:border-copper hover:shadow-[var(--shadow-card)]"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-surface-2">
                  <div className="absolute inset-0 bg-[var(--gradient-forge)] opacity-60" />
                  <div className="absolute inset-0 grid place-items-center">
                    <Package className="h-20 w-20 text-copper/40 transition-transform group-hover:scale-110" />
                  </div>
                  <div className="absolute left-4 top-4 rounded bg-background/80 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-copper backdrop-blur">
                    {p.categoryLabel}
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-xl font-bold leading-tight">{p.name}</h3>
                  <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{p.tagline}</p>
                  <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
                    <span>MOQ: <span className="text-foreground">{p.moq}</span></span>
                    <span className="inline-flex items-center gap-1 text-copper">
                      View details <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      <CTASection
        title="Need a SKU that isn't here?"
        intro="OEM and private-label production runs from 1,000 pieces. Send us your specs or reference samples."
      />
    </>
  );
}

function FilterChip({
  to, label, active, search,
}: { to: string; label: string; active: boolean; search?: { cat: ProductCategory } }) {
  return (
    <Link
      to={to}
      search={search as never}
      className={`rounded-md border px-4 py-2 text-sm font-medium transition-colors ${
        active ? "border-copper bg-copper text-copper-foreground" : "border-border bg-card hover:border-copper"
      }`}
    >
      {label}
    </Link>
  );
}

