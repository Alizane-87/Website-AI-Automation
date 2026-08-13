import type { CSSProperties, ReactNode } from "react";

import { cn } from "@/components/ui/cn";
import type { Tone } from "@/components/ui/section";

export function Card({
  children,
  className,
  tone = "paper",
  as: Tag = "div",
  reveal = false,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  tone?: Tone;
  as?: "div" | "li" | "article" | "section";
  /** Fades the card in on scroll. Static under `prefers-reduced-motion`. */
  reveal?: boolean;
  /** Stagger in milliseconds, applied only when `reveal` is set. */
  delay?: number;
}) {
  return (
    <Tag
      data-reveal={reveal ? "" : undefined}
      style={reveal && delay ? ({ "--reveal-delay": `${delay}ms` } as CSSProperties) : undefined}
      className={cn(
        "flex flex-col rounded-xl border p-6 sm:p-7",
        tone === "ink"
          ? "border-white/12 bg-abyss-600/60 text-white"
          : "border-ink/10 bg-paper text-ink",
        className,
      )}
    >
      {children}
    </Tag>
  );
}

export function CardTitle({
  children,
  className,
  as: Tag = "h3",
}: {
  children: ReactNode;
  className?: string;
  as?: "h2" | "h3" | "h4";
}) {
  return (
    <Tag className={cn("text-subtitle font-medium tracking-[-0.01em]", className)}>{children}</Tag>
  );
}

export function CardBody({
  children,
  tone = "paper",
  className,
}: {
  children: ReactNode;
  tone?: Tone;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "mt-3 text-[0.9375rem] leading-relaxed",
        tone === "ink" ? "text-graphite-light" : "text-graphite",
        className,
      )}
    >
      {children}
    </p>
  );
}

/** Checked list used for capability and inclusion lists. */
export function TickList({
  items,
  tone = "paper",
  className,
}: {
  items: readonly string[];
  tone?: Tone;
  className?: string;
}) {
  return (
    <ul className={cn("flex flex-col gap-2.5", className)}>
      {items.map((item) => (
        <li
          key={item}
          className={cn(
            "grid grid-cols-[auto_1fr] gap-3 text-[0.9375rem] leading-relaxed",
            tone === "ink" ? "text-graphite-light" : "text-graphite",
          )}
        >
          <span
            aria-hidden="true"
            className={cn(
              "mt-2 h-1.5 w-1.5 shrink-0 rounded-full",
              tone === "ink" ? "bg-signal" : "bg-cobalt",
            )}
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

/** Explicit label for anything illustrative rather than evidential. */
export function IllustrativeLabel({
  children = "Illustrative example",
  tone = "paper",
  className,
}: {
  children?: ReactNode;
  tone?: Tone;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 font-mono text-[10px] uppercase tracking-[0.16em]",
        tone === "ink" ? "border-white/25 text-graphite-light" : "border-ink/20 text-graphite",
        className,
      )}
    >
      {children}
    </span>
  );
}
