"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface Props {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  label: string;
}

export function StatCounter({ value, suffix = "", prefix = "", duration = 1.6, label }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / (duration * 1000));
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(value * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, duration]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 12 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="border-l border-border pl-6"
    >
      <div className="font-display text-5xl font-bold tracking-tight md:text-6xl">
        {prefix}
        {n.toLocaleString()}
        {suffix}
      </div>
      <div className="mt-3 text-sm uppercase tracking-[0.18em] text-muted-foreground">{label}</div>
    </motion.div>
  );
}
