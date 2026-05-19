interface Props {
  items: string[];
  className?: string;
}

export function Marquee({ items, className = "" }: Props) {
  const doubled = [...items, ...items];
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />
      <div className="flex animate-marquee gap-12 whitespace-nowrap will-change-transform">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="font-display text-base font-semibold uppercase tracking-[0.18em] text-muted-foreground"
          >
            {item}
            <span className="mx-12 text-copper">●</span>
          </span>
        ))}
      </div>
    </div>
  );
}
