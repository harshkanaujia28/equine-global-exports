import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/site/Section";
import { CTASection } from "@/components/site/CTASection";
import { Reveal } from "@/components/site/Reveal";
import { BRAND } from "@/lib/brand";
import { Flame, Hammer, Cog, Microscope, ShieldCheck, Truck, ChevronRight } from "lucide-react";
import factoryImg from "@/assets/factory-floor.jpg";

export const Route = createFileRoute("/manufacturing")({
  head: () => ({
    meta: [
      { title: `Manufacturing — Drop Forge, Aluminum Casting, Hand Finishing | ${BRAND.name}` },
      { name: "description", content: "Inside our 80,000 sq ft ISO-certified facility: drop forge, aluminum casting, heat treatment, hand-finishing, and on-site QC lab." },
      { property: "og:title", content: `Manufacturing — ${BRAND.name}` },
      { property: "og:description", content: "Vertically integrated horse shoe manufacturing inside one facility." },
      { property: "og:url", content: "/manufacturing" },
    ],
    links: [{ rel: "canonical", href: "/manufacturing" }],
  }),
  component: ManufacturingPage,
});

const STAGES = [
  { icon: Cog, t: "Raw material", d: "EN-S235 steel from Tata; 6061-T6 aluminum from Hindalco. Every coil mill-test certified." },
  { icon: Flame, t: "Heating", d: "Gas-fired billet furnaces at 1,150 °C. Uniform straw-yellow heat for grain alignment." },
  { icon: Hammer, t: "Drop forging", d: "250-ton mechanical press, single-strike closed-die forging." },
  { icon: Cog, t: "Trimming &amp; punching", d: "Flash removed and nail holes punched on the same heat to preserve grain flow." },
  { icon: Flame, t: "Heat treatment", d: "Controlled-atmosphere age-hardening or stress relief depending on alloy." },
  { icon: ShieldCheck, t: "Finishing", d: "Sandblast, then galvanize (70 µm zinc) or brush, polish, paint." },
  { icon: Microscope, t: "QC &amp; gauging", d: "Mitutoyo digital metrology on a 1-in-500 sample. Sub-0.4% reject rate." },
  { icon: Truck, t: "Packing &amp; dispatch", d: "ISPM-15 pallets, double-corrugated cartons, full stretch-wrap with corner protection." },
];

function ManufacturingPage() {
  return (
    <>
      <Section
        eyebrow="Manufacturing"
        title="Vertically integrated. From billet to bill of lading."
        intro={`Eighty thousand square feet of forging, casting, finishing, leatherwork, and dispatch — all inside one ${BRAND.address.line2.split(",")[0]} facility. The combination is what keeps tolerances tight and lead times honest.`}
      />

      <Section className="bg-surface-2/30">
        <div className="overflow-hidden rounded-2xl border border-border">
          <img src={factoryImg} alt="Forging line on the Bharat Equine factory floor" className="h-full w-full object-cover" loading="lazy" />
        </div>
      </Section>

      <Section eyebrow="Process" title="The eight stages of an export-grade horse shoe">
        <ol className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {STAGES.map((s, i) => (
            <Reveal key={i} delay={i * 0.04}>
              <li className="relative h-full rounded-xl border border-border bg-card p-6">
                <div className="font-display text-3xl font-bold text-copper">0{i + 1}</div>
                <s.icon className="absolute right-5 top-5 h-5 w-5 text-muted-foreground" />
                <h3 className="mt-3 font-display text-base font-bold" dangerouslySetInnerHTML={{ __html: s.t }} />
                <p className="mt-2 text-sm text-muted-foreground" dangerouslySetInnerHTML={{ __html: s.d }} />
              </li>
            </Reveal>
          ))}
        </ol>
      </Section>

      <Section className="bg-surface-2/30" eyebrow="Quality control" title="Statistics-driven, audit-ready">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            { k: "Reject rate", v: "< 0.4%" },
            { k: "Length tolerance", v: "± 1.5 mm" },
            { k: "Web width tolerance", v: "± 0.5 mm" },
            { k: "PSI audits hosted", v: "200+" },
          ].map((s) => (
            <div key={s.k} className="rounded-xl border border-border bg-card p-7 text-center">
              <div className="font-display text-4xl font-bold text-copper md:text-5xl">{s.v}</div>
              <div className="mt-3 text-xs uppercase tracking-[0.18em] text-muted-foreground">{s.k}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Safety &amp; sustainability" title="Operations built for the long term">
        <div className="grid gap-6 lg:grid-cols-3">
          {[
            { t: "Worker safety", d: "Mandatory PPE, monthly safety audits, on-site first-aid bay. Zero lost-time incidents since 2023." },
            { t: "Energy efficiency", d: "Roof-mounted solar covering 35% of facility load. Heat-recovery on the galvanizing line." },
            { t: "Circular materials", d: "100% aluminum scrap recycled in-house. Take-back program with European distributors since 2022." },
          ].map((b) => (
            <div key={b.t} className="rounded-xl border border-border bg-card p-7">
              <h3 className="font-display text-lg font-bold">{b.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{b.d}</p>
              <div className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-copper">
                Verified <ChevronRight className="h-3.5 w-3.5" />
              </div>
            </div>
          ))}
        </div>
      </Section>

      <CTASection title="Visit the factory" intro="Schedule a virtual tour or plan a buyer visit — we host 30+ international buyers a year." />
    </>
  );
}
