import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/site/Section";
import { CTASection } from "@/components/site/CTASection";
import { Reveal } from "@/components/site/Reveal";
import { BRAND } from "@/lib/brand";
import factoryImg from "@/assets/factory-floor.jpg";
import heroImg from "@/assets/hero-forge.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: `Gallery — Factory, Products, Shipping | ${BRAND.name}` },
      { name: "description", content: "Inside the Bharat Equine forge: factory floor, product closeups, packaging line, container loading, and international dispatch." },
      { property: "og:title", content: `Gallery — ${BRAND.name}` },
      { property: "og:description", content: "A visual tour of our factory, products, and export operations." },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  const TILES = [
    { src: heroImg, cap: "Forge — billet at 1,150 °C", span: "lg:col-span-2 lg:row-span-2" },
    { src: factoryImg, cap: "Drop-forge line" },
    { src: heroImg, cap: "Hand finishing" },
    { src: factoryImg, cap: "QC metrology station" },
    { src: heroImg, cap: "Product closeup — race shoe" },
    { src: factoryImg, cap: "Carton packing" },
    { src: heroImg, cap: "ISPM-15 pallet build" },
    { src: factoryImg, cap: "Container loading — Nhava Sheva" },
  ];
  return (
    <>
      <Section
        eyebrow="Gallery"
        title="Walk through the forge"
        intro="A visual tour — the factory floor, finished product, packaging line, and an outbound container."
      >
        <div className="grid auto-rows-[220px] gap-3 md:grid-cols-2 lg:grid-cols-4">
          {TILES.map((t, i) => (
            <Reveal key={i} delay={(i % 4) * 0.04}>
              <figure className={`group relative h-full w-full overflow-hidden rounded-xl border border-border ${t.span ?? ""}`}>
                <img src={t.src} alt={t.cap} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/95 via-background/60 to-transparent p-4 text-sm font-medium">
                  {t.cap}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Section>

      <CTASection title="Plan a buyer visit" intro="We host 30+ international buyers a year. Book a slot." />
    </>
  );
}
