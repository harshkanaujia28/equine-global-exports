"use client";
import { useEffect, useState } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { Menu, X, Sun, Moon } from "lucide-react";
import { BRAND, NAV_LINKS, whatsappLink } from "@/lib/brand";
import { Container } from "./Section";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dark, setDark] = useState(true);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  useEffect(() => {
    document.documentElement.classList.toggle("light", !dark);
  }, [dark]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border bg-background/85 backdrop-blur-md"
          : "bg-transparent",
      )}
    >
      <Container className="flex h-16 items-center justify-between lg:h-20">
        <Link to="/" className="group flex items-center gap-3">
          <div className="grid h-9 w-9 place-items-center rounded-sm bg-[var(--gradient-copper)] font-display text-lg font-bold text-copper-foreground">
            B
          </div>
          <div className="leading-none">
            <div className="font-display text-base font-bold tracking-tight">{BRAND.short}</div>
            <div className="mt-1 text-[10px] uppercase tracking-[0.22em] text-muted-foreground">Exports</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              activeProps={{ className: "text-foreground bg-muted" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setDark((d) => !d)}
            className="hidden h-9 w-9 items-center justify-center rounded-md text-muted-foreground hover:bg-muted hover:text-foreground md:flex"
            aria-label="Toggle theme"
          >
            {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-md border border-border px-4 py-2 text-sm font-medium hover:border-copper md:inline-flex"
          >
            WhatsApp
          </a>
          <Link
            to="/contact"
            className="hidden rounded-md bg-copper px-4 py-2 text-sm font-semibold text-copper-foreground transition-transform hover:-translate-y-px md:inline-flex"
          >
            Request Quotation
          </Link>
          <button
            className="grid h-10 w-10 place-items-center rounded-md border border-border lg:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </Container>

      {open && (
        <div className="border-t border-border bg-background/95 backdrop-blur lg:hidden">
          <Container className="flex flex-col py-4">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="rounded-md px-3 py-3 text-base font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
                activeProps={{ className: "text-foreground bg-muted" }}
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="mt-4 rounded-md bg-copper px-4 py-3 text-center text-sm font-semibold text-copper-foreground"
            >
              Request Quotation
            </Link>
          </Container>
        </div>
      )}
    </header>
  );
}
