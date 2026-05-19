## Stack note
This project runs on **TanStack Start** (React 19 + Vite + Tailwind v4 + Framer Motion), not Next.js App Router. All your requirements — SSR, per-route SEO/meta, file-based routing, edge deploy, fast loads, schema markup — are fully supported. I'll use this stack.

## Defaults I'm locking in (you skipped the questions)
- **Brand**: "Bharat Equine Exports — Forged for the World" (easy to rename later in one constants file)
- **Contact placeholders**: WhatsApp `+91 98000 00000`, email `exports@bharatequine.com`, address in Punjab, India, Mon–Sat 9–7 IST. Centralized in `src/lib/brand.ts` so you swap once.
- **Backend**: Enable **Lovable Cloud** — leads/quotation requests/brochure-download contacts saved to DB. Without this, a B2B export site loses every lead. Admin can view via Cloud dashboard.
- **Design**: One strong direction (industrial-luxury, dark default + light toggle, large display type, copper/steel accents on near-black). Skipping the 3-direction picker to move fast.

## Visual language
- **Palette**: near-black bg `oklch(0.16 0.01 240)`, steel surface, ivory text, **copper accent** `oklch(0.62 0.14 45)`, success steel-blue. Full dark + light tokens in `src/styles.css`.
- **Type**: Display = Space Grotesk (700/600), Body = Inter. Tight tracking on display, generous line-height on body. Large hero type (clamp 3.5–6rem).
- **Motion**: Framer Motion — scroll reveal (whileInView), animated counters, marquee partner strip, magnetic CTAs, image parallax on hero, product card lift on hover. Respects `prefers-reduced-motion`.
- **Components**: shadcn primitives restyled to industrial tokens (sharp 4px radius on industrial elements, 12px on cards).

## Route map (TanStack file-based, every route gets its own head() meta + canonical)

```text
src/routes/
  __root.tsx              Org JSON-LD, site defaults, dark theme, Header+Footer
  index.tsx               Home
  about.tsx               About Us
  products.tsx            Products listing (6 categories, filter)
  products.$slug.tsx      Product detail (dynamic, Product JSON-LD)
  export-services.tsx     Export Services
  manufacturing.tsx       Manufacturing
  certifications.tsx      Certifications
  gallery.tsx             Gallery
  blog.tsx                Blog index
  blog.$slug.tsx          Blog post (Article JSON-LD)
  contact.tsx             Contact + multi-step quotation form
  api/public/
    lead.ts               POST: inquiry/quotation submission
    brochure.ts           GET: serves catalog PDF + logs download lead
sitemap[.]xml.tsx         Dynamic sitemap
robots[.]txt.tsx          robots
```

## Page contents

**Home** — hero ("Global Exporters of Premium Horse Shoes & Equine Products" + dual CTA Request Quotation / Download Catalog), animated counters (40+ countries, 15M+ units/yr, 25+ yrs, ISO certified), trust marquee, 6 product category grid, why-choose-us 4-up, manufacturing snapshot with parallax image, global shipping world-map section, certifications strip, testimonial slider, FAQ accordion, big CTA band, contact teaser.

**About** — story timeline, mission/vision split, manufacturing capabilities stats, infra gallery grid, team grid, world-map market presence.

**Products** — filter chips by category (Aluminum / Steel / Racing / Farrier Tools / Hoof Care / Accessories), animated card grid, each card → detail route with specs table, MOQ, export packaging, HS code, inquiry + WhatsApp deep-link buttons.

**Export Services** — logistics, packaging standards, documentation (Invoice/Packing List/COO/Phyto), bulk handling, OEM, private labeling, shipping process timeline, countries-served grid.

**Manufacturing** — factory setup, production workflow diagram, QC stations, machinery list, safety standards, raw material sourcing map, animated process timeline.

**Certifications** — ISO 9001, IEC, APEDA, EPCH, MSME etc. as credential cards with description + downloadable preview.

**Gallery** — masonry: factory, product closeups, packaging, containers, dispatch.

**Blog** — 5 seeded SEO articles (manufacturing process, types of horse shoes, aluminum benefits, export quality standards, hoof care), Article JSON-LD.

**Contact** — multi-step quotation form (product → quantity/specs → company → contact), inquiry form, WhatsApp CTA, embedded map, hours.

## Lead generation (global)
- Sticky WhatsApp FAB (bottom-right)
- Floating "Request Quotation" CTA (bottom-left, appears after 600px scroll)
- Inquiry popup after 40% scroll (once per session via localStorage)
- "Download Brochure" gated by name+email+country → logs lead, returns PDF
- CTA band repeated on every page bottom

## Backend (Lovable Cloud)
Tables:
- `leads` (id, source, name, email, phone, country, company, product_interest, message, created_at)
- `quotation_requests` (id, lead_id, products jsonb, quantities jsonb, incoterm, destination_port, target_date, notes, created_at)
- `brochure_downloads` (id, lead_id, created_at)

RLS: public can INSERT only (no read). Admin reads via Cloud dashboard. Server functions validate with Zod (length, email, phone, country whitelist). No PII logged. Rate-limited per IP via a simple counter table.

## SEO
- Per-route `head()` with title/description/og:title/og:description/og:url + canonical
- JSON-LD: Organization (root), Product (product detail), Article (blog post), FAQPage (home FAQ), BreadcrumbList (deep routes)
- Dynamic `sitemap.xml` + `robots.txt`
- Semantic HTML, single H1 per page, alt text everywhere, lazy images, responsive viewport
- Target keywords woven naturally: "Horse Shoe Exporter", "Horse Naal Manufacturer India", "Farrier Tools Exporter", "Equine Products Supplier"

## Assets
- ~12 generated images: hero (forge sparks + horseshoe close-up), factory floor, product hero shots per category (6), shipping container, world map dark overlay, team placeholder, gallery shots. All `fast` model, JPG, <200KB each, lazy loaded.
- Catalog PDF: generate a clean branded multi-page PDF placeholder at `public/catalog.pdf`.

## Components (reusable, in src/components/)
`Header`, `Footer`, `ThemeToggle`, `Container`, `Section`, `SectionHeading`, `StatCounter`, `Marquee`, `ProductCard`, `CategoryFilter`, `CTASection`, `FAQ`, `TestimonialSlider`, `Timeline`, `Stepper` (quotation form), `WhatsAppFAB`, `QuoteFAB`, `ScrollInquiryDialog`, `BrochureDialog`, `WorldMap` (SVG), `CertificationCard`, `GalleryMasonry`, `BlogCard`.

## Build order
1. Design tokens + base layout (Header/Footer/theme/typography)
2. Home page end-to-end (lock the visual language)
3. Reusable sections (CTA band, FAQ, testimonials, stat counters, marquee, world map)
4. About, Manufacturing, Export Services, Certifications, Gallery
5. Products list + dynamic detail route
6. Blog list + dynamic post route with seeded MDX-like content
7. Contact + multi-step quotation form
8. Lead-capture infrastructure: Cloud schema, server fns, WhatsApp FAB, Quote FAB, scroll popup, brochure gate
9. SEO: per-route meta, JSON-LD, sitemap, robots
10. Asset generation pass + lazy-load audit + accessibility pass

## Out of scope (call out)
- Multi-language i18n scaffolding only (en default); actual translations not included
- True CMS — content lives in typed TS files (`src/content/*`) structured so a CMS can drop in later
- Admin dashboard UI — leads viewed via Lovable Cloud's built-in DB browser
- Lighthouse 90+ is the target; final score depends on hosting/images and will be tuned in the asset pass

Approve and I'll start building.