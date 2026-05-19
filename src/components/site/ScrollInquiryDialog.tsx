"use client";
import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { InquiryForm } from "./InquiryForm";

const KEY = "be_inquiry_shown_v1";

export function ScrollInquiryDialog() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem(KEY)) return;
    let fired = false;
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      const pct = window.scrollY / Math.max(total, 1);
      if (!fired && pct > 0.4) {
        fired = true;
        sessionStorage.setItem(KEY, "1");
        setOpen(true);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!open) return null;
  return (
    <div
      className="fixed inset-0 z-[60] grid place-items-center bg-background/80 p-4 backdrop-blur-sm"
      onClick={() => setOpen(false)}
    >
      <div
        className="relative w-full max-w-md overflow-hidden rounded-xl border border-border bg-card p-7 shadow-2xl animate-fade-up"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => setOpen(false)}
          className="absolute right-3 top-3 grid h-8 w-8 place-items-center rounded-md text-muted-foreground hover:bg-muted hover:text-foreground"
          aria-label="Close"
        >
          <X className="h-4 w-4" />
        </button>
        <div className="text-xs font-semibold uppercase tracking-[0.18em] text-copper">Trade Inquiry</div>
        <h3 className="mt-2 font-display text-2xl font-bold">Talk to our export desk</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Wholesale &amp; distributor enquiries — typical reply within one business day.
        </p>
        <div className="mt-5">
          <InquiryForm source="scroll_popup" compact />
        </div>
      </div>
    </div>
  );
}
