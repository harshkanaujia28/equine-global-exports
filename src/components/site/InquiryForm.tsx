"use client";
import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { Loader2, CheckCircle2 } from "lucide-react";
import { submitLead } from "@/lib/leads.functions";

interface Props {
  source: string;
  defaultProduct?: string;
  compact?: boolean;
}

export function InquiryForm({ source, defaultProduct, compact }: Props) {
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "err">("idle");
  const [err, setErr] = useState<string>();
  const submit = useServerFn(submitLead);

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        const fd = new FormData(e.currentTarget);
        setStatus("loading");
        setErr(undefined);
        try {
          const res = await submit({
            data: {
              source,
              name: String(fd.get("name") ?? ""),
              email: String(fd.get("email") ?? ""),
              phone: String(fd.get("phone") ?? ""),
              country: String(fd.get("country") ?? ""),
              company: String(fd.get("company") ?? ""),
              product_interest: String(fd.get("product_interest") ?? defaultProduct ?? ""),
              message: String(fd.get("message") ?? ""),
            },
          });
          if (res.ok) {
            setStatus("ok");
            (e.target as HTMLFormElement).reset();
          } else {
            setStatus("err");
            setErr(res.error);
          }
        } catch {
          setStatus("err");
          setErr("Something went wrong. Please try WhatsApp or email.");
        }
      }}
      className="grid gap-4"
    >
      <div className={compact ? "grid gap-4" : "grid gap-4 sm:grid-cols-2"}>
        <Input name="name" label="Full name" required />
        <Input name="email" label="Work email" type="email" required />
        <Input name="phone" label="Phone (with country code)" />
        <Input name="country" label="Country" />
        <Input name="company" label="Company" className="sm:col-span-2" />
        <Input
          name="product_interest"
          label="Product of interest"
          defaultValue={defaultProduct}
          className="sm:col-span-2"
        />
      </div>
      <label className="grid gap-2">
        <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Message</span>
        <textarea
          name="message"
          rows={4}
          maxLength={2000}
          placeholder="Quantities, destination port, target lead time…"
          className="min-h-[110px] rounded-md border border-input bg-background/60 px-3 py-2.5 text-sm outline-none transition-colors focus:border-copper"
        />
      </label>
      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex items-center justify-center gap-2 rounded-md bg-copper px-6 py-3 text-sm font-semibold text-copper-foreground transition-transform hover:-translate-y-px disabled:opacity-60"
      >
        {status === "loading" && <Loader2 className="h-4 w-4 animate-spin" />}
        {status === "ok" ? (
          <>
            <CheckCircle2 className="h-4 w-4" /> Sent — we'll reply within 1 business day
          </>
        ) : (
          "Send Inquiry"
        )}
      </button>
      {status === "err" && <p className="text-sm text-destructive">{err}</p>}
    </form>
  );
}

function Input({
  name, label, type = "text", required, defaultValue, className = "",
}: {
  name: string; label: string; type?: string; required?: boolean; defaultValue?: string; className?: string;
}) {
  return (
    <label className={`grid gap-2 ${className}`}>
      <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
        {label}
        {required && <span className="ml-1 text-copper">*</span>}
      </span>
      <input
        type={type}
        name={name}
        required={required}
        defaultValue={defaultValue}
        maxLength={255}
        className="h-11 rounded-md border border-input bg-background/60 px-3 text-sm outline-none transition-colors focus:border-copper"
      />
    </label>
  );
}
