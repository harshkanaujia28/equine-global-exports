import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/site/Section";
import { CTASection } from "@/components/site/CTASection";
import { Reveal } from "@/components/site/Reveal";
import { CERTIFICATIONS } from "@/lib/content";
import { BRAND } from "@/lib/brand";
import { Award, FileBadge } from "lucide-react";

export const Route = createFileRoute("/certifications")({
  head: () => ({
    meta: [
      { title: `Certifications — ISO 9001, APEDA, EPCH, REACH | ${BRAND.name}` },
      { name: "description", content: "ISO 9001:2015 certified manufacturer. APEDA, EPCH, MSME, BIS, IEC, REACH compliant. Mill test certificates on every shipment." },
      { property: "og:title", content: `Certifications — ${BRAND.name}` },
      { property: "og:description", content: "Quality and compliance credentials our buyers rely on." },
      { property: "og:url", content: "/certifications" },
    ],
    links: [{ rel: "canonical", href: "/certifications" }],
  }),
  component: CertsPage,
});

function CertsPage() {
  return (
    <>
      <Section
        eyebrow="Certifications &amp; compliance"
        title="Audited, certified, traceable"
        intro="Every credential a serious procurement desk asks for. Mill test certificates, REACH chemistry, ISO QMS, and export-council registrations — all current, all on file."
      />

      <Section className="bg-surface-2/30">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {CERTIFICATIONS.map((c, i) => (
            <Reveal key={c.name} delay={i * 0.04}>
              <div className="h-full rounded-xl border border-border bg-card p-7">
                <div className="grid h-11 w-11 place-items-center rounded-md bg-copper/10 text-copper">
                  <Award className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-xl font-bold">{c.name}</h3>
                <div className="mt-1 text-xs uppercase tracking-wider text-copper">{c.issuer}</div>
                <p className="mt-3 text-sm text-muted-foreground">{c.scope}</p>
                <div className="mt-5 inline-flex items-center gap-2 rounded-md border border-border px-3 py-1.5 text-xs">
                  <FileBadge className="h-3.5 w-3.5 text-copper" />
                  PDF available on request
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <CTASection title="Need a credential PDF?" intro="We share certificate scans with confirmed buyers under NDA. Drop us a line." />
    </>
  );
}
