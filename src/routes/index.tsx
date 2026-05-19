import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ShieldCheck, Factory, Globe2, Award, Wrench, Truck, Package, Microscope } from "lucide-react";
import { Container, Section } from "@/components/site/Section";
import { StatCounter } from "@/components/site/StatCounter";
import { Marquee } from "@/components/site/Marquee";
import { CTASection } from "@/components/site/CTASection";
import { FAQAccordion } from "@/components/site/FAQAccordion";
import { TestimonialSlider } from "@/components/site/TestimonialSlider";
import { Reveal } from "@/components/site/Reveal";
import { InquiryForm } from "@/components/site/InquiryForm";
import { BRAND } from "@/lib/brand";
import { CATEGORIES, COUNTRIES_SERVED, FAQS, TRUST_BADGES } from "@/lib/content";
import heroImg from "@/assets/hero-forge.jpg";
import factoryImg from "@/assets/factory-floor.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${BRAND.name} — Horse Shoe Exporter · Horse Naal Manufacturer India` },
      { name: "description", content: "Global exporters of premium horse shoes (horse naal), farrier tools and equine accessories. ISO 9001 certified Indian manufacturer shipping to 40+ countries." },
      { property: "og:title", content: `${BRAND.name} — Global Horse Shoe Exporter` },
      { property: "og:description", content: BRAND.description },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQS.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Glowing horseshoe at the forge" className="h-full w-full object-cover opacity-50" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background" />
          <div className="absolute inset-0 bg-grid opacity-20" />
        </div>
        <Container className="relative grid min-h-[88vh] items-center py-24 lg:py-32">
          <div className="max-w-4xl">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-copper backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-copper" />
                Established {BRAND.founded} · ISO 9001 Certified
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="mt-6 font-display text-5xl font-bold leading-[1.02] tracking-tight text-balance md:text-7xl lg:text-[5.5rem]">
                Global Exporters of <span className="text-copper">Premium Horse Shoes</span> &amp; Equine Products
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl text-pretty">
                Forged in Punjab, India. Trusted by wholesalers, racing stables, and farrier supply distributors across {BRAND.stats.countries}+ countries.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="mt-9 flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-md bg-copper px-6 py-3.5 text-sm font-semibold text-copper-foreground transition-transform hover:-translate-y-px"
                >
                  Request Quotation <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/products"
                  className="inline-flex items-center gap-2 rounded-md border border-border bg-background/50 px-6 py-3.5 text-sm font-medium backdrop-blur hover:border-copper"
                >
                  Browse Products
                </Link>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* STATS */}
      <section className="border-y border-border bg-surface-2/40">
        <Container className="grid gap-y-8 py-16 sm:grid-cols-2 lg:grid-cols-4">
          <StatCounter value={BRAND.stats.countries} suffix="+" label="Countries Served" />
          <StatCounter value={15} suffix="M+" label="Units Shipped / Year" />
          <StatCounter value={BRAND.stats.yearsExperience} suffix="+ yrs" label="Manufacturing Heritage" />
          <StatCounter value={99} suffix="%" label="On-time Dispatch" />
        </Container>
      </section>

      {/* TRUST MARQUEE */}
      <div className="border-b border-border py-8">
        <Marquee items={TRUST_BADGES} />
      </div>

      {/* PRODUCT CATEGORIES */}
      <Section
        eyebrow="What we manufacture"
        title="Six categories. One container."
        intro="From aerospace-grade racing aluminum to hand-stitched leather, our catalog covers the full equine supply chain — ship mixed-SKU containers to one address."
      >
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {CATEGORIES.map((c, i) => (
            <Reveal key={c.id} delay={i * 0.05}>
              <Link
                to="/products"
                search={{ cat: c.id }}
                className="group relative flex h-full flex-col justify-between overflow-hidden rounded-xl border border-border bg-card p-7 transition-all hover:border-copper hover:shadow-[var(--shadow-card)]"
              >
                <div className="pointer-events-none absolute inset-0 bg-[var(--gradient-forge)] opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="relative">
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-copper">0{i + 1}</div>
                  <h3 className="mt-3 font-display text-2xl font-bold leading-tight">{c.label}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">{c.blurb}</p>
                </div>
                <div className="relative mt-10 inline-flex items-center gap-2 text-sm font-medium text-copper">
                  Explore range <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* WHY US */}
      <Section
        className="bg-surface-2/30"
        eyebrow="Why exporters choose us"
        title="The supplier your buyers won't have to second-guess"
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Factory, title: "Vertically integrated", body: "Forge, finish, pack, and dispatch — every stage inside one 80,000 sq ft facility." },
            { icon: ShieldCheck, title: "ISO 9001 quality", body: "± 1.5 mm dimensional tolerance, mill-test certified materials, sub-0.4% reject rate." },
            { icon: Globe2, title: "Truly global reach", body: "Active shipments to 42 countries with documentation ready for EU, US, GCC, ANZ." },
            { icon: Award, title: "OEM &amp; private label", body: "We have private-labeled SKUs for 14 international distributors with zero spec drift." },
          ].map((f, i) => (
            <Reveal key={f.title} delay={i * 0.05}>
              <div className="rounded-xl border border-border bg-card p-7">
                <div className="grid h-11 w-11 place-items-center rounded-md bg-copper/10 text-copper">
                  <f.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-lg font-bold" dangerouslySetInnerHTML={{ __html: f.title }} />
                <p className="mt-2 text-sm text-muted-foreground" dangerouslySetInnerHTML={{ __html: f.body }} />
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* MANUFACTURING */}
      <Section
        eyebrow="Inside the forge"
        title="Manufacturing built for export volume"
        intro="A modern drop-forge line paired with traditional hand-finishing. The combination is what lets us match Italian quality at South-Asian pricing."
      >
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="relative overflow-hidden rounded-2xl border border-border">
              <img src={factoryImg} alt="Inside Bharat Equine forge facility" className="h-full w-full object-cover" loading="lazy" />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="space-y-5">
              {[
                { icon: Microscope, t: "Mill-test certified raw material", d: "Steel from Tata, aluminum from Hindalco — every coil traceable to heat number." },
                { icon: Wrench, t: "Drop-forged grain alignment", d: "250-ton mechanical press, single-strike closed-die forging on every shoe." },
                { icon: ShieldCheck, t: "Statistical QC", d: "1-in-500 dimensional gauging on a Mitutoyo digital, signed off per lot." },
                { icon: Package, t: "Export-grade packing", d: "ISPM-15 pallets, double-corrugated cartons, full stretch wrap with corner protection." },
              ].map((s, i) => (
                <div key={i} className="flex gap-4 rounded-lg border border-border bg-card p-5">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-copper/10 text-copper">
                    <s.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-display text-base font-bold">{s.t}</h4>
                    <p className="mt-1 text-sm text-muted-foreground">{s.d}</p>
                  </div>
                </div>
              ))}
              <Link to="/manufacturing" className="inline-flex items-center gap-2 pt-2 text-sm font-medium text-copper">
                Tour the facility <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* GLOBAL SHIPPING */}
      <Section
        className="bg-surface-2/30"
        eyebrow="Global logistics"
        title="Active shipments to 42 countries"
        intro="EXW · FOB Nhava Sheva / Mundra · CIF · DAP · DDP for select destinations. Our in-house documentation team drafts every CO, MTC, and phyto-sanitary in-house."
      >
        <Reveal>
          <div className="rounded-2xl border border-border bg-card p-8 lg:p-10">
            <div className="flex flex-wrap gap-2">
              {COUNTRIES_SERVED.map((c) => (
                <span
                  key={c}
                  className="rounded-md border border-border bg-background/60 px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-copper hover:text-foreground"
                >
                  {c}
                </span>
              ))}
            </div>
            <div className="mt-8 grid gap-4 border-t border-border pt-8 sm:grid-cols-3">
              {[
                { icon: Truck, k: "Lead time", v: "21 – 45 days" },
                { icon: Package, k: "Container loading", v: "20'/40' HQ" },
                { icon: Globe2, k: "Incoterms", v: "EXW · FOB · CIF · DDP" },
              ].map((s, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="grid h-10 w-10 place-items-center rounded-md bg-copper/10 text-copper">
                    <s.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-muted-foreground">{s.k}</div>
                    <div className="font-display text-base font-semibold">{s.v}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </Section>

      {/* TESTIMONIAL */}
      <Section eyebrow="What buyers say" title="Six-year supplier relationships, not transactions">
        <TestimonialSlider />
      </Section>

      {/* FAQ */}
      <Section
        className="bg-surface-2/30"
        eyebrow="Trade FAQ"
        title="Questions our export desk hears every week"
      >
        <FAQAccordion items={FAQS} />
      </Section>

      {/* CONTACT TEASER */}
      <Section eyebrow="Get in touch" title="Tell us what you're shipping">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="text-lg text-muted-foreground">
              Share your destination port, target quantities, and which SKUs you're interested in.
              We'll come back within one business day with a complete quote, sample plan, and lead time.
            </p>
            <ul className="mt-8 space-y-4 text-sm">
              <li className="flex gap-3"><ShieldCheck className="h-5 w-5 shrink-0 text-copper" /><span>NDA available on request for OEM enquiries</span></li>
              <li className="flex gap-3"><Truck className="h-5 w-5 shrink-0 text-copper" /><span>Container consolidation across multiple SKUs</span></li>
              <li className="flex gap-3"><Award className="h-5 w-5 shrink-0 text-copper" /><span>Free approval samples on confirmed orders</span></li>
            </ul>
          </div>
          <div className="rounded-2xl border border-border bg-card p-7 lg:col-span-7">
            <InquiryForm source="home_contact" />
          </div>
        </div>
      </Section>

      <CTASection />
    </>
  );
}
