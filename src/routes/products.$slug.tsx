import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Container, Section } from "@/components/site/Section";
import { CTASection } from "@/components/site/CTASection";
import { InquiryForm } from "@/components/site/InquiryForm";
import { PRODUCTS } from "@/lib/content";
import { BRAND, whatsappLink } from "@/lib/brand";
import { ArrowLeft, MessageCircle, Package, FileText } from "lucide-react";

export const Route = createFileRoute("/products/$slug")({
  loader: ({ params }) => {
    const product = PRODUCTS.find((p) => p.slug === params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.product;
    if (!p) return {};
    return {
      meta: [
        { title: `${p.name} — ${p.categoryLabel} | ${BRAND.name}` },
        { name: "description", content: p.tagline },
        { property: "og:title", content: `${p.name} — ${BRAND.name}` },
        { property: "og:description", content: p.tagline },
        { property: "og:url", content: `/products/${p.slug}` },
        { property: "og:type", content: "product" },
      ],
      links: [{ rel: "canonical", href: `/products/${p.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: p.name,
            description: p.description,
            category: p.categoryLabel,
            sku: p.slug,
            brand: { "@type": "Brand", name: BRAND.name },
            manufacturer: { "@type": "Organization", name: BRAND.name },
          }),
        },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="grid min-h-[60vh] place-items-center px-6 text-center">
      <div>
        <h1 className="font-display text-3xl font-bold">Product not found</h1>
        <Link to="/products" className="mt-4 inline-flex items-center gap-2 text-copper">
          <ArrowLeft className="h-4 w-4" /> Back to catalog
        </Link>
      </div>
    </div>
  ),
  component: ProductPage,
});

function ProductPage() {
  const { product: p } = Route.useLoaderData();

  return (
    <>
      <div className="border-b border-border bg-surface-2/30 py-6">
        <Container>
          <Link to="/products" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
            <ArrowLeft className="h-4 w-4" /> Back to products
          </Link>
        </Container>
      </div>

      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="relative aspect-square overflow-hidden rounded-2xl border border-border bg-card">
            <div className="absolute inset-0 bg-[var(--gradient-forge)] opacity-60" />
            <div className="absolute inset-0 grid place-items-center">
              <Package className="h-40 w-40 text-copper/40" />
            </div>
            <div className="absolute left-5 top-5 rounded bg-background/80 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-copper backdrop-blur">
              {p.categoryLabel}
            </div>
          </div>

          <div>
            <h1 className="font-display text-4xl font-bold leading-tight md:text-5xl">{p.name}</h1>
            <p className="mt-4 text-lg text-muted-foreground">{p.tagline}</p>
            <p className="mt-6 text-muted-foreground">{p.description}</p>

            <div className="mt-8 rounded-xl border border-border bg-card">
              <h3 className="border-b border-border px-6 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-copper">
                Technical specifications
              </h3>
              <dl className="divide-y divide-border">
                {p.specs.map((s: { label: string; value: string }) => (
                  <div key={s.label} className="grid grid-cols-2 gap-4 px-6 py-3.5 text-sm">
                    <dt className="text-muted-foreground">{s.label}</dt>
                    <dd className="font-medium">{s.value}</dd>
                  </div>
                ))}
                <div className="grid grid-cols-2 gap-4 px-6 py-3.5 text-sm">
                  <dt className="text-muted-foreground">MOQ</dt>
                  <dd className="font-medium">{p.moq}</dd>
                </div>
                <div className="grid grid-cols-2 gap-4 px-6 py-3.5 text-sm">
                  <dt className="text-muted-foreground">Export packaging</dt>
                  <dd className="font-medium">{p.packaging}</dd>
                </div>
                <div className="grid grid-cols-2 gap-4 px-6 py-3.5 text-sm">
                  <dt className="text-muted-foreground">HS Code</dt>
                  <dd className="font-medium">{p.hsCode}</dd>
                </div>
              </dl>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={whatsappLink(`Hi, I'd like a quote on ${p.name} (${p.slug}).`)}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-[oklch(0.62_0.18_150)] px-5 py-3 text-sm font-semibold text-white"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp Inquiry
              </a>
              <a
                href="#inquiry"
                className="inline-flex items-center gap-2 rounded-md bg-copper px-5 py-3 text-sm font-semibold text-copper-foreground"
              >
                <FileText className="h-4 w-4" /> Request Quote
              </a>
            </div>
          </div>
        </div>
      </Section>

      <Section id="inquiry" className="bg-surface-2/30" eyebrow="Inquiry" title={`Request a quotation for ${p.name}`}>
        <div className="mx-auto max-w-2xl rounded-2xl border border-border bg-card p-7">
          <InquiryForm source="product_detail" defaultProduct={`${p.name} (${p.slug})`} />
        </div>
      </Section>

      <CTASection />
    </>
  );
}
