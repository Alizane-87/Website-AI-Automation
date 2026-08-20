import type { ReactNode } from "react";

export type BadgeVariant = "default" | "blue" | "green" | "yellow" | "red" | "mono";

export function Badge({
  children,
  variant = "default",
  className = "",
}: {
  children: ReactNode;
  variant?: BadgeVariant;
  className?: string;
}) {
  const variantStyles: Record<BadgeVariant, string> = {
    default: "bg-surface text-ink border-border",
    blue: "bg-pastel-blue text-pastel-blue-ink border-transparent",
    green: "bg-pastel-green text-pastel-green-ink border-transparent",
    yellow: "bg-pastel-yellow text-pastel-yellow-ink border-transparent",
    red: "bg-pastel-red text-pastel-red-ink border-transparent",
    mono: "bg-ink text-paper border-ink",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 font-mono text-[0.6875rem] font-medium tracking-wide uppercase ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  );
}

export function Kbd({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <kbd
      className={`inline-block rounded border border-border bg-surface px-1.5 py-0.5 font-mono text-[0.6875rem] text-graphite shadow-[0_1px_0_rgba(0,0,0,0.08)] ${className}`}
    >
      {children}
    </kbd>
  );
}
