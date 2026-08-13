"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Reveals elements marked with `data-reveal` as they scroll into view.
 * Elements stay visible when JavaScript, IntersectionObserver, or motion is
 * unavailable: the hidden state is only applied by this component.
 */
export function RevealProvider() {
  const pathname = usePathname();

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const targets = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));

    if (prefersReducedMotion || typeof IntersectionObserver === "undefined") {
      targets.forEach((el) => el.setAttribute("data-reveal-ready", "shown"));
      return;
    }

    targets.forEach((el) => {
      if (!el.dataset.revealReady) el.dataset.revealReady = "pending";
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          el.dataset.revealReady = "shown";
          observer.unobserve(el);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
