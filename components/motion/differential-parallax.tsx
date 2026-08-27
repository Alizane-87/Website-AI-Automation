"use client";

import React, { useRef, useState, useEffect } from "react";

interface DifferentialParallaxProps {
  title?: string;
  description?: string;
  tag?: string;
}

export function DifferentialParallax({
  title = "Mid Ground Layer (0.0)",
  description = "Background moves at -1.4x while floating telemetry moves at +1.2x.",
  tag = "Device 04 · Differential Parallax",
}: DifferentialParallaxProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0.5);

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
    <section ref={containerRef} className="relative border-b border-white/10 py-28 px-6 sm:px-16 overflow-hidden bg-[#0A0D10]">
      <div
        className="pointer-events-none absolute inset-0 bg-dot-grid opacity-30 transition-transform duration-75"
        style={{ transform: `translate3d(0, ${(progress - 0.5) * -140}px, 0)` }}
      />
      <div className="relative mx-auto max-w-5xl flex items-center justify-between">
        <div className="max-w-md">
          <div className="font-mono text-xs text-emerald-400 mb-2 uppercase">{tag}</div>
          <h3 className="font-serif text-2xl text-white">{title}</h3>
          <p className="text-xs text-gray-300 mt-2">{description}</p>
        </div>
        <div
          style={{ transform: `translate3d(0, ${(progress - 0.5) * 110}px, 0)` }}
          className="rounded-xl border border-emerald-500/40 bg-emerald-950/90 p-4 font-mono text-xs text-emerald-300 shadow-xl"
        >
          ⚡ Floating Satellite (+1.2x)
        </div>
      </div>
    </section>
  );
}
