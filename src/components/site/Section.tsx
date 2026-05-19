import { type PropsWithChildren, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Container({ className, children }: PropsWithChildren<{ className?: string }>) {
  return <div className={cn("mx-auto w-full max-w-7xl px-6 lg:px-10", className)}>{children}</div>;
}

interface SectionProps extends PropsWithChildren {
  id?: string;
  className?: string;
  eyebrow?: ReactNode;
  title?: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
}

export function Section({ id, className, eyebrow, title, intro, align = "left", children }: SectionProps) {
  return (
    <section id={id} className={cn("py-20 lg:py-28", className)}>
      <Container>
        {(eyebrow || title || intro) && (
          <header className={cn("mb-12 lg:mb-16 max-w-3xl", align === "center" && "mx-auto text-center")}>
            {eyebrow && (
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-copper">
                <span className="h-px w-8 bg-copper" /> {eyebrow}
              </div>
            )}
            {title && (
              <h2 className="mt-4 font-display text-4xl font-bold leading-[1.05] text-balance md:text-5xl lg:text-6xl">
                {title}
              </h2>
            )}
            {intro && <p className="mt-5 text-lg text-muted-foreground text-pretty">{intro}</p>}
          </header>
        )}
        {children}
      </Container>
    </section>
  );
}
