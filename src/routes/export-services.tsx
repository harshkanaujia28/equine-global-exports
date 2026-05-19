import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/site/Section";
import { CTASection } from "@/components/site/CTASection";
import { Reveal } from "@/components/site/Reveal";
import { BRAND } from "@/lib/brand";
import { COUNTRIES_SERVED } from "@/lib/content";
import { Ship, FileText, Package, Boxes, Tags, Briefcase, Globe2 } from "lucide-react";

export const Route = createFileRoute("/export-services")({
  head: () => ({
    meta: [
      { title: `Export Services — Logistics, OEM, Private Label | ${BRAND.name}` },
      { name: "description", content: "Global logistics, export documentation, OEM manufacturing, private labeling, and bulk container handling for the equine industry." },
      { property: "og:title", content: `Export Services — ${BRAND.name}` },
      { property: "og:description", content: "End-to-end export support for international equine product distributors." },
      { property: "og:url", content: "/export-services" },
    ],
    links: [{ rel: "canonical", href: "/export-services" }],
  }),
  component: ExportPage,
});

const SERVICES = [
  { icon: Ship, t: "Global logistics", d: "Sea freight via Nhava Sheva and Mundra; air freight via DEL. Direct service to 60+ destination ports with consolidator partnerships across the EU, US, and GCC." },
  { icon: FileText, t: "Export documentation", d: "Commercial Invoice, Packing List, Certificate of Origin (APEDA / FIEO), Phytosanitary, Mill Test Certificate, Pre-Shipment Inspection. All drafted by our in-house team." },
  { icon: Package, t: "Packaging standards", d: "Polybag → carton → ISPM-15 heat-treated pallet → stretch-wrap with corner protection. Damage rate on landed containers averages 0.2%." },
  { icon: Boxes, t: "Bulk order handling", d: "20-foot and 40-foot HQ container loading. Mixed-SKU consolidation across all product categories from a single PO." },
  { icon: Briefcase, t: "OEM manufacturing", d: "Custom dies, custom alloy specifications, custom packing. Approval samples in 14 days." },
  { icon: Tags, t: "Private labeling", d: "Stamped product marking, branded packaging, custom catalogs. We private-label for 14 distributors today." },
];

const PROCESS = [
  { t: "Inquiry &amp; quotation", d: "Send wishlist, target port, target lead time. Quote returned in 1 business day." },
  { t: "PI &amp; advance", d: "Proforma Invoice, 30% T/T advance, PO confirmation." },
  { t: "Production", d: "21 – 28 days for standard SKUs; 35 – 45 days for OEM with approval samples." },
  { t: "Pre-shipment inspection", d: "Optional 3rd party (SGS / Intertek / Bureau Veritas). We have hosted 200+ PSI audits." },
  { t: "Documentation &amp; dispatch", d: "Final docs couriered + emailed. Container handed to your nominated forwarder." },
  { t: "Transit &amp; delivery", d: "Sea freight 18 – 35 days depending on destination. We track in our portal until delivery." },
];

function ExportPage() {
  return (
    <>
      <Section
        eyebrow="Export services"
        title="End-to-end export support, not just product shipping"
        intro="From the day you send us your wishlist to the day the container clears your port, we handle the full chain — production, documentation, packing, logistics."
      />

      <Section className="bg-surface-2/30">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal key={s.t} delay={i * 0.05}>
              <div className="h-full rounded-xl border border-border bg-card p-7">
                <div className="grid h-11 w-11 place-items-center rounded-md bg-copper/10 text-copper">
                  <s.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-xl font-bold">{s.t}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{s.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section eyebrow="The shipping process" title="From inquiry to your warehouse">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {PROCESS.map((p, i) => (
            <Reveal key={i} delay={i * 0.04}>
              <div className="rounded-xl border border-border bg-card p-7">
                <div className="font-display text-3xl font-bold text-copper">0{i + 1}</div>
                <h3 className="mt-3 font-display text-lg font-bold" dangerouslySetInnerHTML={{ __html: p.t }} />
                <p className="mt-2 text-sm text-muted-foreground" dangerouslySetInnerHTML={{ __html: p.d }} />
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="bg-surface-2/30" eyebrow="Countries exported to" title={`${BRAND.stats.countries}+ destination markets`}>
        <div className="rounded-2xl border border-border bg-card p-8 lg:p-10">
          <div className="flex flex-wrap gap-2">
            {COUNTRIES_SERVED.map((c) => (
              <span key={c} className="inline-flex items-center gap-2 rounded-md border border-border bg-background/60 px-3 py-1.5 text-sm">
                <Globe2 className="h-3.5 w-3.5 text-copper" /> {c}
              </span>
            ))}
          </div>
        </div>
      </Section>

      <CTASection title="Tell us where you want it shipped" intro="Share destination port, target lead time, and quantities. Quote returned within one business day." />
    </>
  );
}
