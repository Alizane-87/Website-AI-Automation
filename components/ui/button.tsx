import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

import { cn } from "@/components/ui/cn";

type Variant = "primary" | "secondary" | "quiet" | "onInk" | "onInkSolid";
type Size = "md" | "lg";

const base =
  "group/button inline-flex items-center justify-center gap-2 rounded font-mono text-xs uppercase tracking-wider transition-all duration-150 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60";

const variants: Record<Variant, string> = {
  primary: "border border-ink bg-ink text-paper hover:bg-[#222222]",
  secondary: "border border-border bg-paper text-ink hover:border-ink hover:bg-surface",
  quiet: "text-ink underline decoration-border hover:decoration-ink",
  onInk: "border border-border bg-surface text-ink hover:border-ink",
  onInkSolid: "border border-ink bg-paper text-ink hover:bg-surface",
};

const sizes: Record<Size, string> = {
  md: "px-4 py-2.5",
  lg: "px-5 py-3 text-xs",
};

export function buttonClass(variant: Variant = "primary", size: Size = "md") {
  return cn(base, variants[variant], sizes[size]);
}

type ButtonLinkProps = ComponentProps<typeof Link> & {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
};

export function ButtonLink({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonLinkProps) {
  return (
    <Link className={cn(buttonClass(variant, size), className)} {...props}>
      {children}
    </Link>
  );
}

type ButtonProps = ComponentProps<"button"> & { variant?: Variant; size?: Size };

export function Button({
  variant = "primary",
  size = "md",
  className,
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button type={type} className={cn(buttonClass(variant, size), className)} {...props} />
  );
}

/** Arrow that nudges on hover. Decorative: always paired with a text label. */
export function ButtonArrow() {
  return (
    <span
      aria-hidden="true"
      className="transition-transform duration-200 group-hover/button:translate-x-0.5"
    >
      →
    </span>
  );
}
