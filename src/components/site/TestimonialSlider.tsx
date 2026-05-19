"use client";
import { useEffect, useState } from "react";
import { TESTIMONIALS } from "@/lib/content";

export function TestimonialSlider() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((x) => (x + 1) % TESTIMONIALS.length), 6500);
    return () => clearInterval(t);
  }, []);
  const t = TESTIMONIALS[i];
  return (
    <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-10 lg:p-14">
      <div className="pointer-events-none absolute inset-0 bg-[var(--gradient-forge)]" />
      <div className="relative">
        <div className="font-display text-6xl leading-none text-copper">"</div>
        <blockquote className="mt-2 font-display text-2xl font-medium leading-snug text-balance md:text-3xl">
          {t.quote}
        </blockquote>
        <div className="mt-8 flex items-center justify-between gap-4">
          <div>
            <div className="font-semibold">{t.author}</div>
            <div className="text-sm text-muted-foreground">{t.role} · {t.company}</div>
          </div>
          <div className="flex gap-2">
            {TESTIMONIALS.map((_, k) => (
              <button
                key={k}
                onClick={() => setI(k)}
                className={`h-1.5 rounded-full transition-all ${k === i ? "w-8 bg-copper" : "w-3 bg-border"}`}
                aria-label={`Show testimonial ${k + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
