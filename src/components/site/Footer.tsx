import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { BRAND, NAV_LINKS, whatsappLink } from "@/lib/brand";
import { Container } from "./Section";
import { CATEGORIES } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface-2/40">
      <Container className="grid gap-12 py-20 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Link to="/" className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-sm bg-[var(--gradient-copper)] font-display text-xl font-bold text-copper-foreground">
              B
            </div>
            <div>
              <div className="font-display text-lg font-bold leading-none">{BRAND.short}</div>
              <div className="mt-1 text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                {BRAND.tagline}
              </div>
            </div>
          </Link>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground">{BRAND.description}</p>

          <ul className="mt-8 space-y-3 text-sm">
            <li className="flex items-start gap-3 text-muted-foreground">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-copper" />
              <span>{BRAND.address.line1}, {BRAND.address.line2}, {BRAND.address.country}</span>
            </li>
            <li className="flex items-center gap-3 text-muted-foreground">
              <Phone className="h-4 w-4 shrink-0 text-copper" />
              <a href={`tel:${BRAND.phone.replace(/\s/g, "")}`} className="hover:text-foreground">{BRAND.phone}</a>
            </li>
            <li className="flex items-center gap-3 text-muted-foreground">
              <Mail className="h-4 w-4 shrink-0 text-copper" />
              <a href={`mailto:${BRAND.email}`} className="hover:text-foreground">{BRAND.email}</a>
            </li>
            <li className="flex items-center gap-3 text-muted-foreground">
              <Clock className="h-4 w-4 shrink-0 text-copper" />
              <span>{BRAND.hours}</span>
            </li>
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-foreground">Company</h3>
          <ul className="mt-5 space-y-3 text-sm">
            {NAV_LINKS.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-muted-foreground hover:text-foreground">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-foreground">Products</h3>
          <ul className="mt-5 space-y-3 text-sm">
            {CATEGORIES.map((c) => (
              <li key={c.id}>
                <Link to="/products" search={{ cat: c.id }} className="text-muted-foreground hover:text-foreground">
                  {c.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-2">
          <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-foreground">Get Started</h3>
          <div className="mt-5 flex flex-col gap-3">
            <Link
              to="/contact"
              className="rounded-md bg-copper px-4 py-2.5 text-center text-sm font-semibold text-copper-foreground"
            >
              Request Quote
            </Link>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noreferrer"
              className="rounded-md border border-border px-4 py-2.5 text-center text-sm font-medium hover:border-copper"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </Container>

      <div className="border-t border-border">
        <Container className="flex flex-col items-center justify-between gap-3 py-6 text-xs text-muted-foreground md:flex-row">
          <span>© {new Date().getFullYear()} {BRAND.name}. All rights reserved.</span>
          <span>Manufactured in India · Shipped Worldwide</span>
        </Container>
      </div>
    </footer>
  );
}
