import { Link } from "@tanstack/react-router";
import { Container } from "./Section";
import { whatsappLink } from "@/lib/brand";
import { ArrowRight } from "lucide-react";

export function CTASection({
  eyebrow = "Ready to ship",
  title = "Let's discuss your next container",
  intro = "Send us your wishlist, destination port, and target lead time. Our export desk replies within one business day.",
}: { eyebrow?: string; title?: string; intro?: string }) {
  return (
    <section className="relative overflow-hidden border-y border-border bg-surface-2/40">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-30" />
      <div className="pointer-events-none absolute inset-0 bg-[var(--gradient-forge)]" />
      <Container className="relative grid items-center gap-10 py-20 lg:grid-cols-12 lg:py-28">
        <div className="lg:col-span-8">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-copper">{eyebrow}</div>
          <h2 className="mt-4 font-display text-4xl font-bold leading-[1.05] text-balance md:text-5xl lg:text-6xl">
            {title}
          </h2>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">{intro}</p>
        </div>
        <div className="flex flex-col gap-3 lg:col-span-4 lg:items-end">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-copper px-6 py-3.5 text-sm font-semibold text-copper-foreground transition-transform hover:-translate-y-px"
          >
            Request Quotation <ArrowRight className="h-4 w-4" />
          </Link>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-md border border-border px-6 py-3.5 text-sm font-medium hover:border-copper"
          >
            Chat on WhatsApp
          </a>
        </div>
      </Container>
    </section>
  );
}
