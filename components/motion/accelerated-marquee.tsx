"use client";

import React, { useState, useEffect } from "react";

interface AcceleratedMarqueeProps {
  items?: string[];
  tag?: string;
}

const DEFAULT_ITEMS = [
  "⚡ SUB-SECOND ARCHITECTURE",
  "24/7 AI RECEPTIONIST",
  "INSTANT SMS DISPATCH",
  "21-DAY QUOTE WIN-BACK",
];

export function AcceleratedMarquee({
  items = DEFAULT_ITEMS,
  tag = "Device 13 · Scroll-Accelerated Infinite Marquee",
}: AcceleratedMarqueeProps) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="border-b border-white/10 py-20 bg-[#07090C] overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 mb-6">
        <div className="font-mono text-xs text-emerald-400 uppercase">{tag}</div>
      </div>
      <div className="flex gap-6 whitespace-nowrap py-4 font-mono text-lg sm:text-2xl font-bold uppercase tracking-widest text-emerald-400/80">
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className="flex items-center gap-6 animate-pulse"
            style={{ transform: `translateX(${-scrollY * 0.4}px)` }}
          >
            {items.map((item, idx) => (
              <React.Fragment key={idx}>
                <span>{item}</span>
                <span>•</span>
              </React.Fragment>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
