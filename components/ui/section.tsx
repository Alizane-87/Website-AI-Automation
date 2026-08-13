import type { CSSProperties, ReactNode } from "react";

import { cn } from "@/components/ui/cn";

export type Tone = "canvas" | "paper" | "ink";

/** Stagger for `data-reveal` elements. */
export function revealStyle(delay: number): CSSProperties {
  return { "--reveal-delay": `${delay}ms` } as CSSProperties;
}

export function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-[76rem] px-5 sm:px-8", className)}>{children}</div>
  );
}

const toneClasses: Record<Tone, string> = {
  canvas: "bg-canvas text-ink",
  paper: "bg-paper text-ink",
  ink: "bg-abyss text-white",
};

export function Section({
  children,
  tone = "canvas",
  className,
  id,
  labelledBy,
}: {
  children: ReactNode;
  tone?: Tone;
  className?: string;
  id?: string;
  labelledBy?: string;
}) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={cn("py-18 sm:py-24 lg:py-28", toneClasses[tone], className)}
    >
      <Container>{children}</Container>
    </section>
  );
}

export function Eyebrow({
  children,
  tone = "canvas",
  className,
}: {
  children: ReactNode;
  tone?: Tone;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "flex items-center gap-2.5 font-mono text-[0.6875rem] font-medium uppercase tracking-[0.22em]",
        tone === "ink" ? "text-graphite-light" : "text-graphite",
        className,
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          "h-px w-6",
          tone === "ink" ? "bg-signal" : "bg-cobalt",
        )}
      />
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  id,
  tone = "canvas",
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  id?: string;
  tone?: Tone;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <header
      className={cn(
        "flex max-w-3xl flex-col gap-5",
        align === "center" && "mx-auto items-center text-center",
        className,
      )}
    >
      {eyebrow ? <Eyebrow tone={tone}>{eyebrow}</Eyebrow> : null}
      <h2
        id={id}
        className={cn(
          "display-face text-title sm:text-headline",
          tone === "ink" ? "text-white" : "text-ink",
        )}
      >
        {title}
      </h2>
      {description ? (
        <div
          className={cn(
            "text-lead",
            tone === "ink" ? "text-graphite-light" : "text-graphite",
          )}
        >
          {description}
        </div>
      ) : null}
    </header>
  );
}

/** Small qualifying note. Used wherever a claim needs an explicit boundary. */
export function Note({
  children,
  tone = "canvas",
  className,
}: {
  children: ReactNode;
  tone?: Tone;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "border-l-2 pl-3.5 text-sm leading-relaxed",
        tone === "ink" ? "border-white/25 text-graphite-light" : "border-ink/15 text-graphite",
        className,
      )}
    >
      {children}
    </p>
  );
}
