"use client";

import React, { useRef, useState, useEffect } from "react";

interface LetterConfig {
  char: string;
  mass: number;
  color: string;
}

interface VelocityTypographyProps {
  letters?: LetterConfig[];
  title?: string;
  tag?: string;
}

const DEFAULT_LETTERS: LetterConfig[] = [
  { char: "M", mass: 1.4, color: "#34D399" },
  { char: "O", mass: 0.8, color: "#10B981" },
  { char: "M", mass: 1.6, color: "#059669" },
  { char: "E", mass: 0.6, color: "#047857" },
  { char: "N", mass: 1.3, color: "#34D399" },
  { char: "T", mass: 0.9, color: "#10B981" },
  { char: "U", mass: 1.5, color: "#059669" },
  { char: "M", mass: 1.1, color: "#34D399" },
];

export function VelocityTypography({
  letters = DEFAULT_LETTERS,
  title = "Flick wheel fast to stretch typography.",
  tag = "Device 08 · Velocity-Driven Inertia",
}: VelocityTypographyProps) {
  const [velocity, setVelocity] = useState(0);
  const lastScrollY = useRef(0);
  const lastScrollTime = useRef(Date.now());
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      const now = Date.now();
      const dt = Math.max(1, now - lastScrollTime.current);
      const dy = y - lastScrollY.current;
      const currentVelocity = (dy / dt) * 15;

      lastScrollY.current = y;
      lastScrollTime.current = now;
      setVelocity((prev) => prev * 0.4 + currentVelocity * 0.6);
    };

    const decay = () => {
      setVelocity((v) => (Math.abs(v) < 0.01 ? 0 : v * 0.88));
      rafId.current = requestAnimationFrame(decay);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    rafId.current = requestAnimationFrame(decay);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <section className="border-b border-white/10 py-24 px-6 sm:px-16 bg-[#090C0F] text-center">
      <div className="mx-auto max-w-5xl">
        <div className="font-mono text-xs text-emerald-400 mb-2 uppercase">{tag}</div>
        <h2 className="font-serif text-3xl text-white">{title}</h2>
        <div className="mt-8 flex items-center justify-center gap-2 overflow-hidden py-4">
          {letters.map((item, idx) => (
            <span
              key={idx}
              className="font-serif text-5xl sm:text-8xl font-black transition-transform duration-75 inline-block select-none"
              style={{
                transform: `translate3d(0, ${(Math.max(-30, Math.min(30, velocity * item.mass * 2))).toFixed(1)}px, 0) skewY(${(Math.max(-20, Math.min(20, velocity * item.mass * 1.2))).toFixed(1)}deg)`,
                color: item.color,
              }}
            >
              {item.char}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
