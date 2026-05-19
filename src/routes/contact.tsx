import { createFileRoute } from "@tanstack/react-router";
import { Section, Container } from "@/components/site/Section";
import { InquiryForm } from "@/components/site/InquiryForm";
import { BRAND, whatsappLink } from "@/lib/brand";
import { Mail, Phone, MapPin, Clock, MessageCircle } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: `Contact — Request a Quotation | ${BRAND.name}` },
      { name: "description", content: `Send an export inquiry to ${BRAND.name}. WhatsApp ${BRAND.whatsappDisplay}, email ${BRAND.email}, Ludhiana, India. Reply within one business day.` },
      { property: "og:title", content: `Contact ${BRAND.name}` },
      { property: "og:description", content: "Talk to our export desk — reply within one business day." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <Section
        eyebrow="Contact"
        title="Talk to our export desk"
        intro="Wholesalers, distributors, racing stables, and OEM brands — reply within one business day on every channel."
      />

      <section className="pb-24">
        <Container className="grid gap-10 lg:grid-cols-12">
          <aside className="space-y-5 lg:col-span-4">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noreferrer"
              className="flex items-start gap-4 rounded-xl border border-border bg-card p-6 transition-colors hover:border-copper"
            >
              <MessageCircle className="h-5 w-5 shrink-0 text-[oklch(0.62_0.18_150)]" />
              <div>
                <div className="font-display text-base font-bold">WhatsApp</div>
                <div className="mt-1 text-sm text-muted-foreground">{BRAND.whatsappDisplay}</div>
                <div className="mt-2 text-xs text-copper">Fastest response · Mon–Sat</div>
              </div>
            </a>
            <a
              href={`mailto:${BRAND.email}`}
              className="flex items-start gap-4 rounded-xl border border-border bg-card p-6 transition-colors hover:border-copper"
            >
              <Mail className="h-5 w-5 shrink-0 text-copper" />
              <div>
                <div className="font-display text-base font-bold">Email</div>
                <div className="mt-1 text-sm text-muted-foreground">{BRAND.email}</div>
              </div>
            </a>
            <a
              href={`tel:${BRAND.phone.replace(/\s/g, "")}`}
              className="flex items-start gap-4 rounded-xl border border-border bg-card p-6 transition-colors hover:border-copper"
            >
              <Phone className="h-5 w-5 shrink-0 text-copper" />
              <div>
                <div className="font-display text-base font-bold">Phone</div>
                <div className="mt-1 text-sm text-muted-foreground">{BRAND.phone}</div>
              </div>
            </a>
            <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-6">
              <MapPin className="h-5 w-5 shrink-0 text-copper" />
              <div>
                <div className="font-display text-base font-bold">Office &amp; factory</div>
                <div className="mt-1 text-sm text-muted-foreground">
                  {BRAND.address.line1}<br />
                  {BRAND.address.line2}<br />
                  {BRAND.address.country}
                </div>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-6">
              <Clock className="h-5 w-5 shrink-0 text-copper" />
              <div>
                <div className="font-display text-base font-bold">Business hours</div>
                <div className="mt-1 text-sm text-muted-foreground">{BRAND.hours}</div>
              </div>
            </div>
          </aside>

          <div className="rounded-2xl border border-border bg-card p-7 lg:col-span-8 lg:p-10">
            <h2 className="font-display text-2xl font-bold">Export inquiry</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Fill what you can — even a wishlist of SKUs is enough for us to come back with a complete quote.
            </p>
            <div className="mt-6">
              <InquiryForm source="contact_page" />
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-border">
        <Container className="py-0">
          <iframe
            title="Office location map"
            className="h-[420px] w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps?q=Ludhiana+Punjab+India&output=embed"
          />
        </Container>
      </section>
    </>
  );
}
