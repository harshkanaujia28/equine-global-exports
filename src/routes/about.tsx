import { createFileRoute, Link } from "@tanstack/react-router";
import { Section, Container } from "@/components/site/Section";
import { CTASection } from "@/components/site/CTASection";
import { Reveal } from "@/components/site/Reveal";
import { BRAND } from "@/lib/brand";
import { COUNTRIES_SERVED } from "@/lib/content";
import { Target, Eye, Sparkles, Factory } from "lucide-react";
import factoryImg from "@/assets/factory-floor.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: `About ${BRAND.name} — 25+ Years Forging Equine Excellence` },
      { name: "description", content: "Family-run, ISO-certified Indian manufacturer of horse shoes and farrier tools. Two-and-a-half decades exporting to 40+ countries." },
      { property: "og:title", content: `About ${BRAND.name}` },
      { property: "og:description", content: "Family-run Indian manufacturer of premium equine products, established 1998." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const TIMELINE = [
  { year: "1998", t: "Founded in Ludhiana", d: "Started as a 600 sq ft hand-forge with five craftsmen serving the Indian working-horse market." },
  { year: "2004", t: "First export shipment", d: "20-foot container of working steel shoes to a German wholesaler — the start of our European business." },
  { year: "2011", t: "Aluminum line commissioned", d: "Installed a precision aluminum casting facility for racing shoes. First US racetrack order followed in 2013." },
  { year: "2017", t: "ISO 9001 certification", d: "Quality management system audited and certified by Bureau Veritas." },
  { year: "2021", t: "80,000 sq ft expansion", d: "New campus combining forging, finishing, leather workshop, and on-site QC lab." },
  { year: "2025", t: "Today", d: `Active export to ${BRAND.stats.countries}+ countries, ${BRAND.stats.annualUnits} units annually, 220 craftsmen and engineers.` },
];

function AboutPage() {
  return (
    <>
      <Section
        eyebrow="About us"
        title="A quarter-century forging equine excellence"
        intro={`${BRAND.name} is a family-owned, ISO-certified manufacturer of premium horse shoes and farrier products in Ludhiana, India. Since ${BRAND.founded}, we've grown from a five-person hand-forge into one of South Asia's largest dedicated equine-supply exporters.`}
      />

      {/* Mission / Vision */}
      <section className="border-y border-border bg-surface-2/30 py-20 lg:py-28">
        <Container className="grid gap-10 lg:grid-cols-2">
          {[
            { icon: Target, eyebrow: "Mission", t: "Build the world's most trusted equine supply chain from India.", d: "We exist to give international distributors a manufacturing partner who never compromises on tolerances, documentation, or timelines — at a price point that makes their business work." },
            { icon: Eye, eyebrow: "Vision", t: "The first name in horse shoes outside Italy.", d: "By 2030, the Bharat Equine stamp on a steel race shoe should mean what 'Made in Italy' means today — and at half the cost." },
          ].map((b, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="h-full rounded-2xl border border-border bg-card p-8">
                <div className="grid h-11 w-11 place-items-center rounded-md bg-copper/10 text-copper">
                  <b.icon className="h-5 w-5" />
                </div>
                <div className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-copper">{b.eyebrow}</div>
                <h3 className="mt-3 font-display text-2xl font-bold leading-tight md:text-3xl">{b.t}</h3>
                <p className="mt-4 text-muted-foreground">{b.d}</p>
              </div>
            </Reveal>
          ))}
        </Container>
      </section>

      {/* Capabilities */}
      <Section eyebrow="Manufacturing capabilities" title="Numbers that matter to a procurement desk">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            { v: BRAND.stats.factorySqFt, l: "sq ft facility" },
            { v: "220", l: "Craftsmen & engineers" },
            { v: BRAND.stats.annualUnits, l: "Units / year capacity" },
            { v: "± 1.5 mm", l: "Dimensional tolerance" },
          ].map((s) => (
            <div key={s.l} className="rounded-xl border border-border bg-card p-7 text-center">
              <div className="font-display text-4xl font-bold text-copper md:text-5xl">{s.v}</div>
              <div className="mt-3 text-xs uppercase tracking-[0.18em] text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* Timeline */}
      <Section className="bg-surface-2/30" eyebrow="Our story" title="From a five-person forge to 42 countries">
        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-border lg:left-1/2" />
          <div className="space-y-10">
            {TIMELINE.map((e, i) => (
              <Reveal key={e.year} delay={i * 0.05}>
                <div className={`relative grid items-start gap-6 pl-12 lg:grid-cols-2 lg:pl-0 ${i % 2 ? "lg:[&>div:first-child]:order-2" : ""}`}>
                  <div className="absolute left-2.5 top-2 grid h-3 w-3 place-items-center rounded-full bg-copper ring-4 ring-background lg:left-1/2 lg:-translate-x-1/2" />
                  <div className="lg:px-10">
                    <div className="font-display text-3xl font-bold text-copper">{e.year}</div>
                  </div>
                  <div className="lg:px-10">
                    <h3 className="font-display text-xl font-bold">{e.t}</h3>
                    <p className="mt-2 text-muted-foreground">{e.d}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* Infra */}
      <Section eyebrow="Infrastructure" title="A facility built for export volume">
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="overflow-hidden rounded-2xl border border-border lg:col-span-2 lg:row-span-2">
            <img src={factoryImg} alt="Forging line at Bharat Equine" className="h-full w-full object-cover" loading="lazy" />
          </div>
          {[
            { t: "Drop forge", d: "Two 250-ton mechanical presses." },
            { t: "Aluminum casting", d: "Vacuum-assisted permanent-mold line." },
            { t: "Heat treatment", d: "Controlled-atmosphere furnaces." },
            { t: "Galvanizing", d: "70-micron hot-dip line." },
            { t: "Leather workshop", d: "Hand-stitching, brass setting." },
            { t: "QC lab", d: "Mitutoyo metrology, hardness testing." },
          ].map((b, i) => (
            <div key={i} className="rounded-xl border border-border bg-card p-6">
              <Factory className="h-5 w-5 text-copper" />
              <h4 className="mt-4 font-display text-base font-bold">{b.t}</h4>
              <p className="mt-1 text-sm text-muted-foreground">{b.d}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Global presence */}
      <Section className="bg-surface-2/30" eyebrow="Global presence" title="Active in 42 markets across 6 continents">
        <div className="rounded-2xl border border-border bg-card p-8 lg:p-10">
          <div className="flex flex-wrap gap-2">
            {COUNTRIES_SERVED.map((c) => (
              <span key={c} className="rounded-md border border-border bg-background/60 px-3 py-1.5 text-sm">{c}</span>
            ))}
          </div>
          <div className="mt-8 flex items-center gap-3 border-t border-border pt-8 text-sm text-muted-foreground">
            <Sparkles className="h-4 w-4 text-copper" />
            <span>Need a destination not listed? We've shipped one-offs to 12 additional markets. <Link to="/contact" className="text-copper">Ask us</Link>.</span>
          </div>
        </div>
      </Section>

      <CTASection title="Become our next distributor" intro="Whether you're a single-country wholesaler or a multi-brand retailer, we'd love to send you a sample pack." />
    </>
  );
}
