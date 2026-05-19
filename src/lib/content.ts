// All static content used across the site. Structured to be CMS-portable.

export type ProductCategory =
  | "aluminum-horse-shoes"
  | "steel-horse-shoes"
  | "racing-horse-shoes"
  | "farrier-tools"
  | "hoof-care"
  | "equine-accessories";

export interface Product {
  slug: string;
  name: string;
  category: ProductCategory;
  categoryLabel: string;
  tagline: string;
  description: string;
  specs: { label: string; value: string }[];
  moq: string;
  packaging: string;
  hsCode: string;
}

export const CATEGORIES: { id: ProductCategory; label: string; blurb: string }[] = [
  { id: "aluminum-horse-shoes", label: "Aluminum Horse Shoes", blurb: "Lightweight racing & performance shoes." },
  { id: "steel-horse-shoes",    label: "Steel Horse Shoes",    blurb: "Forged carbon steel for working horses." },
  { id: "racing-horse-shoes",   label: "Racing Horse Shoes",   blurb: "Track-tested, aerodynamic profiles." },
  { id: "farrier-tools",        label: "Handmade Farrier Tools", blurb: "Hammers, pincers, rasps, knives." },
  { id: "hoof-care",            label: "Hoof Care Products",   blurb: "Pads, packing, dressings & nails." },
  { id: "equine-accessories",   label: "Equine Accessories",   blurb: "Stable, grooming & training gear." },
];

export const PRODUCTS: Product[] = [
  {
    slug: "aluminum-race-shoe-ar1",
    name: "AR-1 Aluminum Race Shoe",
    category: "aluminum-horse-shoes",
    categoryLabel: "Aluminum Horse Shoes",
    tagline: "Featherweight aerospace-grade aluminum for thoroughbreds",
    description:
      "Precision-cast from 6061-T6 aluminum and CNC-finished, the AR-1 delivers maximum stride efficiency without sacrificing wear life. Pre-punched for race nails and concave-profiled for grip on turf and dirt tracks.",
    specs: [
      { label: "Material", value: "6061-T6 Aluminum" },
      { label: "Weight", value: "110 – 140 g" },
      { label: "Sizes", value: "00 – 6" },
      { label: "Profile", value: "Concave, fullered" },
      { label: "Finish", value: "Brushed satin" },
    ],
    moq: "500 pairs",
    packaging: "Polybag → 50-pair carton → wooden pallet (1,000 pairs)",
    hsCode: "7326.19",
  },
  {
    slug: "steel-working-shoe-sw3",
    name: "SW-3 Steel Working Shoe",
    category: "steel-horse-shoes",
    categoryLabel: "Steel Horse Shoes",
    tagline: "Hot-forged carbon steel for daily working horses",
    description:
      "Hand-forged from low-carbon steel bar, drop-forged for grain alignment, then heat-treated for fatigue resistance. The workhorse of our line — trusted by farms across Europe, the Middle East, and North America.",
    specs: [
      { label: "Material", value: "EN-S235 Forged Steel" },
      { label: "Weight", value: "320 – 480 g" },
      { label: "Sizes", value: "0 – 8" },
      { label: "Profile", value: "Flat, plain stamped" },
      { label: "Finish", value: "Black scale or galvanized" },
    ],
    moq: "1,000 pairs",
    packaging: "Polybag → 25-pair carton → strapped pallet (2,000 pairs)",
    hsCode: "7326.19",
  },
  {
    slug: "racing-shoe-rt5",
    name: "RT-5 Track Racing Shoe",
    category: "racing-horse-shoes",
    categoryLabel: "Racing Horse Shoes",
    tagline: "Aerodynamic profile validated on three continents",
    description:
      "Developed with veterinary biomechanics consultants, the RT-5 reduces toe drag at full extension. Available in titanium-aluminum hybrid for graded stakes.",
    specs: [
      { label: "Material", value: "Al/Ti hybrid" },
      { label: "Weight", value: "85 – 115 g" },
      { label: "Sizes", value: "00 – 4" },
      { label: "Profile", value: "Swedge, beveled" },
      { label: "Finish", value: "Polished" },
    ],
    moq: "300 pairs",
    packaging: "Foam-lined 25-pair tray, export carton",
    hsCode: "7326.19",
  },
  {
    slug: "farrier-rounding-hammer-fh2",
    name: "FH-2 Rounding Hammer",
    category: "farrier-tools",
    categoryLabel: "Farrier Tools",
    tagline: "Drop-forged tool steel, hand-fitted hickory handle",
    description:
      "Balanced 12oz / 16oz head with mirror-polished striking face. Hickory shaft sourced from FSC-certified Appalachian timber, oil-finished by hand.",
    specs: [
      { label: "Material", value: "AISI-4140 Tool Steel" },
      { label: "Weights", value: "12 oz, 16 oz, 20 oz" },
      { label: "Handle", value: "FSC Hickory, 12 in" },
      { label: "Hardness", value: "52 – 56 HRC" },
    ],
    moq: "100 pcs",
    packaging: "Individual sleeve → 20-piece carton",
    hsCode: "8205.20",
  },
  {
    slug: "hoof-pad-hp4",
    name: "HP-4 Therapeutic Hoof Pad",
    category: "hoof-care",
    categoryLabel: "Hoof Care",
    tagline: "Shock-absorbing polyurethane pad for laminitic support",
    description:
      "Closed-cell polyurethane formulated for sustained shock absorption. Trimmable to size and compatible with all our shoe profiles.",
    specs: [
      { label: "Material", value: "Polyurethane (Shore 60A)" },
      { label: "Thickness", value: "6 / 9 / 12 mm" },
      { label: "Sizes", value: "0 – 6" },
    ],
    moq: "500 pcs",
    packaging: "Bagged in 100s, 1,000/carton",
    hsCode: "4016.99",
  },
  {
    slug: "stable-halter-sh1",
    name: "SH-1 Premium Stable Halter",
    category: "equine-accessories",
    categoryLabel: "Equine Accessories",
    tagline: "Vegetable-tanned leather with solid brass hardware",
    description:
      "Hand-stitched bridle leather halter built for daily stable use. Adjustable noseband and crown, solid brass squares and conway buckles.",
    specs: [
      { label: "Leather", value: "3.5 mm bridle, veg-tan" },
      { label: "Hardware", value: "Solid brass" },
      { label: "Sizes", value: "Cob / Full / Oversize" },
    ],
    moq: "200 pcs",
    packaging: "Individually polybagged, 50/carton",
    hsCode: "4201.00",
  },
];

export const COUNTRIES_SERVED = [
  "USA","Canada","Mexico","UK","Germany","France","Italy","Spain","Netherlands","Belgium",
  "Sweden","Norway","Poland","Ireland","UAE","Saudi Arabia","Qatar","Kuwait","Oman","Bahrain",
  "South Africa","Kenya","Australia","New Zealand","Japan","South Korea","Singapore","Malaysia",
  "Brazil","Argentina","Chile","Colombia","Turkey","Egypt","Morocco","Nigeria","Switzerland",
  "Austria","Denmark","Finland","Portugal","Czechia",
];

export const TRUST_BADGES = [
  "ISO 9001:2015","APEDA Registered","EPCH Member","MSME Certified","BIS Compliant","REACH Compliant",
];

export const TESTIMONIALS = [
  {
    quote:"Bharat Equine has been our primary horseshoe supplier for over six years. Their consistency on tolerances and on-time shipping is exceptional for the price point.",
    author:"Hans Müller", role:"Procurement Director", company:"Equine Supply GmbH, Germany",
  },
  {
    quote:"Their aluminum race shoes meet every spec our trainers ask for. Documentation and packaging are textbook export quality.",
    author:"Sarah O'Connor", role:"Owner", company:"Greenfield Farrier Co., Ireland",
  },
  {
    quote:"Switched from a Chinese supplier two years ago and never looked back. Handmade farrier tools have a noticeably better hammer balance.",
    author:"Robert Klein", role:"Master Farrier", company:"Klein Hufschmied, Austria",
  },
  {
    quote:"Reliable OEM partner. They have private-labeled three SKUs for us with perfect QC and zero rejections in 18 months.",
    author:"Ahmed Al-Mansouri", role:"Managing Director", company:"Gulf Equestrian Trading, UAE",
  },
];

export const FAQS = [
  { q:"What is your minimum order quantity (MOQ)?", a:"MOQ varies by product — typically 300–1,000 pairs for horseshoes and 100–500 pieces for tools and accessories. Mixed-SKU container orders are welcomed; share your wish-list and we'll quote." },
  { q:"What lead time should I plan for?", a:"Standard SKUs ship in 21–28 days from PO. Custom OEM or private-label orders run 35–45 days including approval samples. Sea freight from Nhava Sheva or Mundra is 18–35 days depending on destination port." },
  { q:"Which Incoterms do you offer?", a:"We quote EXW, FOB Nhava Sheva/Mundra, CIF, and DAP for most destinations. For repeat buyers we offer DDP into the EU, UK, and select GCC ports." },
  { q:"Do you support private labeling and OEM?", a:"Yes — we manufacture private-label horseshoes, farrier tools, and accessories for distributors in 14 countries. We provide approval samples, branded packaging, and stamped product marking." },
  { q:"What payment terms do you accept?", a:"30% advance T/T with order, 70% against B/L copy is our standard term. For established buyers we accept irrevocable L/C at sight from prime banks." },
  { q:"Are your products certified?", a:"Manufacturing is ISO 9001:2015 certified. We hold IEC, APEDA, EPCH, MSME, and BIS registrations. All steel and aluminum chemistry is mill-test certified on request." },
];

export const CERTIFICATIONS = [
  { name:"ISO 9001:2015", issuer:"Bureau Veritas", scope:"Quality Management System" },
  { name:"IEC", issuer:"DGFT, Govt. of India", scope:"Import-Export Code" },
  { name:"APEDA Registration", issuer:"Ministry of Commerce", scope:"Agricultural & Processed Products Export" },
  { name:"EPCH Membership", issuer:"Export Promotion Council", scope:"Handicrafts & Hardware Export" },
  { name:"MSME Certified", issuer:"Govt. of India", scope:"Manufacturing Enterprise" },
  { name:"BIS Compliant", issuer:"Bureau of Indian Standards", scope:"Material Standards" },
  { name:"REACH Compliance", issuer:"EU Regulation EC 1907/2006", scope:"EU Market Chemical Safety" },
  { name:"Mill Test Certificate", issuer:"Tata Steel / Hindalco", scope:"Raw Material Chemistry" },
];

export const BLOG_POSTS = [
  {
    slug:"horse-shoe-manufacturing-process",
    title:"Inside the Forge: How a Premium Horse Shoe Is Manufactured",
    excerpt:"A detailed walk-through of the eight-stage process — from billet sourcing to galvanizing — that produces a tournament-grade horseshoe.",
    date:"2025-03-12", readMinutes:8,
    body:`Manufacturing a precision horseshoe is closer to making an aerospace bracket than people realise. The eight stages below are what separate a ten-year shoe from a one-season failure.

## 1. Raw material selection
We start with EN-S235 low-carbon steel bar from Tata Steel, supplied with a mill test certificate documenting chemistry to two decimal places.

## 2. Bar cutting & weighing
Bars are sheared to length and weighed individually. Each blank is within 1.5% of its target weight.

## 3. Heating
Blanks are heated to 1,150 °C in a gas-fired billet furnace.

## 4. Drop forging
A 250-ton mechanical press strikes the heated blank into a closed die in a single blow.

## 5. Trimming
Flash is removed in a trimming press while the shoe is still hot. Nail holes are punched in the same heat.

## 6. Heat treatment
Selected lines go through age-hardening. Working steel shoes are slow-cooled to relieve forging stress.

## 7. Finishing
Sandblasting removes scale. Galvanized SKUs are hot-dip-coated at 450 °C in a zinc bath.

## 8. QC & packing
Every 500th shoe is gauged. Reject rates run under 0.4%. Shoes are polybagged and palletised on ISPM-15 stamped pallets for international transport.`,
  },
  {
    slug:"types-of-horse-shoes-explained",
    title:"A Buyer's Guide to Horse Shoe Types",
    excerpt:"Working steel, racing aluminum, therapeutic, and traction — when each one earns its place in your catalog.",
    date:"2025-02-20", readMinutes:6,
    body:`Buying horseshoes for resale or for a working stable means knowing which profile belongs under which animal.

## Working steel shoes
The default for most riding, draft, and farm horses. Forged from low-carbon steel.

## Racing aluminum
Two-thirds the weight of steel — a measurable advantage at full extension.

## Therapeutic shoes
Heart-bar, egg-bar, and rolled-toe profiles. Designed to redistribute load away from compromised tissue.

## Traction shoes
Borium or tungsten-carbide studded for ice work, draft pulling, and police mounted units.`,
  },
  {
    slug:"benefits-of-aluminum-horse-shoes",
    title:"Why Aluminum Horse Shoes Have Taken Over Modern Racing",
    excerpt:"Weight, biomechanics, recyclability, and a cost story that finally makes sense at scale.",
    date:"2025-01-30", readMinutes:5,
    body:`Three reasons drove the shift to aluminum on major racetracks.

## Reduced concussive load
A 110 g aluminum shoe replaces a 380 g steel shoe — adding racing years to a thoroughbred's career.

## Stride efficiency
Lighter distal mass means a faster, less effortful stride extension.

## Sustainability
Our aluminum shoes are 100% recyclable and we accept old shoes back from our European distributors.`,
  },
  {
    slug:"export-quality-standards",
    title:"What Export-Grade Quality Actually Means",
    excerpt:"Beyond the marketing copy: the documentation, tolerances, and packing standards international buyers expect.",
    date:"2024-12-15", readMinutes:7,
    body:`"Export quality" is over-used. Here is what it actually means in our facility.

## Dimensional tolerance
Toe-to-heel length: ± 1.5 mm. Web width: ± 0.5 mm. Crease depth: ± 0.3 mm.

## Material traceability
Every steel coil and aluminum ingot is logged with mill batch, heat number, and chemistry.

## Documentation
Commercial Invoice, Packing List, Certificate of Origin, Phyto-sanitary, Mill Test Certificate. All drafted in-house.

## Packaging
ISPM-15 pallets, double-corrugated cartons, polybag with desiccant for sea freight.`,
  },
  {
    slug:"equine-hoof-care-guide",
    title:"Hoof Care Essentials: A Practical Guide for Distributors",
    excerpt:"What products belong in a complete equine hoof-care category, and how to merchandise them together.",
    date:"2024-11-08", readMinutes:6,
    body:`Hoof care is the highest-margin and most recurring-revenue category in equine supplies.

## Pads
Therapeutic polyurethane, leather rim, full plastic. Stock all three thicknesses across sizes 0–6.

## Packing materials
Medicated packing, hoof putty. Repeat cycles of 4–6 weeks.

## Dressings & oils
Pine tar, neat's-foot oil, hoof moisturisers. 60–70% retail margin.

## Nails
A horseshoe is only as good as the nail holding it. Stock E-head and city-head in sizes 4–10.`,
  },
];
