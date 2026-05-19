"use client";
import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { FileText } from "lucide-react";

export function QuoteFAB() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <Link
      to="/contact"
      className={`fixed bottom-5 left-5 z-40 inline-flex items-center gap-2 rounded-full bg-copper px-5 py-3 text-sm font-semibold text-copper-foreground shadow-[var(--shadow-glow)] transition-all duration-300 ${
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <FileText className="h-4 w-4" />
      Request Quotation
    </Link>
  );
}
