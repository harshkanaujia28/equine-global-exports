// Centralized brand constants. Swap in one place to rebrand the site.
export const BRAND = {
  name: "Bharat Equine Exports",
  short: "Bharat Equine",
  tagline: "Forged for the World",
  description:
    "Indian manufacturer and global exporter of premium horse shoes (horse naal), farrier tools, and equine accessories. ISO-certified, shipped to 40+ countries.",
  email: "exports@bharatequine.com",
  phone: "+91 98000 00000",
  whatsapp: "919800000000",
  whatsappDisplay: "+91 98000 00000",
  address: {
    line1: "Plot 14, Industrial Area Phase II",
    line2: "Ludhiana, Punjab 141003",
    country: "India",
  },
  hours: "Mon – Sat, 09:00 – 19:00 IST",
  founded: 1998,
  social: {
    linkedin: "https://www.linkedin.com",
    instagram: "https://www.instagram.com",
  },
  stats: {
    countries: 42,
    annualUnits: "15M+",
    yearsExperience: 25,
    factorySqFt: "80,000",
  },
};

export const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Products" },
  { to: "/manufacturing", label: "Manufacturing" },
  { to: "/export-services", label: "Export" },
  { to: "/about", label: "About" },
  { to: "/certifications", label: "Certifications" },
  { to: "/gallery", label: "Gallery" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
] as const;

export function whatsappLink(message?: string) {
  const text = encodeURIComponent(
    message ?? `Hello ${BRAND.name}, I'd like to enquire about your products.`,
  );
  return `https://wa.me/${BRAND.whatsapp}?text=${text}`;
}
