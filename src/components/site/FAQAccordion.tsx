"use client";
import { useState } from "react";

interface Item { q: string; a: string }

export function FAQAccordion({ items }: { items: Item[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="divide-y divide-border rounded-xl border border-border bg-card">
      {items.map((it, i) => {
        const isOpen = open === i;
        return (
          <div key={i}>
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left"
              aria-expanded={isOpen}
            >
              <span className="font-display text-base font-semibold md:text-lg">{it.q}</span>
              <span
                className={`grid h-7 w-7 shrink-0 place-items-center rounded-full border border-border text-copper transition-transform ${
                  isOpen ? "rotate-45" : ""
                }`}
              >
                +
              </span>
            </button>
            <div
              className="grid overflow-hidden px-6 transition-all duration-300"
              style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
            >
              <div className="min-h-0">
                <p className="pb-5 text-sm leading-relaxed text-muted-foreground">{it.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
