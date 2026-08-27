"use client";

import React, { useRef, useState, useEffect } from "react";

interface VerticalSlatsProps {
  slats?: string[];
  tag?: string;
}

const DEFAULT_SLATS = ["Edge Hosting", "AI Receptionist", "Calendar Lock", "Reputation Loop"];

export function VerticalSlats({
  slats = DEFAULT_SLATS,
  tag = "Device 14 · Vertical Slat Unfold",
}: VerticalSlatsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const vh = window.innerHeight;
      setProgress(Math.min(1, Math.max(0, (vh - rect.top) / (rect.height + vh))));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={containerRef} className="border-b border-white/10 py-24 px-6 sm:px-16 bg-[#090C0F]">
      <div className="mx-auto max-w-4xl">
        <div className="font-mono text-xs text-emerald-400 mb-4 uppercase">{tag}</div>
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4" style={{ perspective: "1000px" }}>
          {slats.map((title, idx) => {
            const slatProgress = Math.min(1, Math.max(0, progress * 2 - idx * 0.25));
            return (
              <div
                key={idx}
                className="rounded-xl border border-white/15 bg-white/5 p-5 text-center transition-transform duration-100"
                style={{
                  transformOrigin: "top",
                  transform: `rotateX(${((1 - slatProgress) * 75).toFixed(1)}deg)`,
                  opacity: 0.3 + slatProgress * 0.7,
                }}
              >
                <div className="font-mono text-xs text-emerald-400 font-semibold">SLAT 0{idx + 1}</div>
                <div className="mt-2 font-serif text-lg text-white">{title}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
