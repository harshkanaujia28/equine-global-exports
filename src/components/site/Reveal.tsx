"use client";
import { motion, useInView } from "framer-motion";
import { useRef, type PropsWithChildren } from "react";

export function Reveal({ children, delay = 0 }: PropsWithChildren<{ delay?: number }>) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
