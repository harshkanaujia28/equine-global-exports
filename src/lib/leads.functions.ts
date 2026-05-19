import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { supabaseAdmin } from "@/integrations/supabase/client.server";

const LeadSchema = z.object({
  source: z.string().min(1).max(64),
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  country: z.string().trim().max(80).optional().or(z.literal("")),
  company: z.string().trim().max(160).optional().or(z.literal("")),
  product_interest: z.string().trim().max(120).optional().or(z.literal("")),
  message: z.string().trim().max(2000).optional().or(z.literal("")),
  payload: z.record(z.string(), z.unknown()).optional(),
});

export const submitLead = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => LeadSchema.parse(input))
  .handler(async ({ data }) => {
    const { error } = await supabaseAdmin.from("leads").insert({
      source: data.source,
      name: data.name,
      email: data.email,
      phone: data.phone || null,
      country: data.country || null,
      company: data.company || null,
      product_interest: data.product_interest || null,
      message: data.message || null,
      payload: data.payload ?? null,
    });

    if (error) {
      console.error("[leads.submit]", error);
      return { ok: false as const, error: "We couldn't save your request. Please try WhatsApp or email instead." };
    }
    return { ok: true as const };
  });
