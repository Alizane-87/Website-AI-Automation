"use client";

import React, { useRef, useState, useEffect } from "react";

interface LaserCircuitRingProps {
  title?: string;
  description?: string;
  tag?: string;
}

export function LaserCircuitRing({
  title = "Laser Line Drawing on Scroll",
  description = "SVG strokeDashoffset synchronizes with scroll progress to power up nodes.",
  tag = "Device 10 · SVG Laser Circuit Trace",
}: LaserCircuitRingProps) {
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
    <section ref={containerRef} className="border-b border-white/10 py-24 px-6 sm:px-16 bg-[#0B0E12]">
      <div className="mx-auto max-w-5xl flex flex-col sm:flex-row items-center justify-between gap-8">
        <div>
          <div className="font-mono text-xs text-emerald-400 mb-2 uppercase">{tag}</div>
          <h3 className="font-serif text-2xl sm:text-4xl text-white">{title}</h3>
          <p className="text-xs text-gray-400 mt-2 max-w-md">{description}</p>
        </div>
        <div className="relative h-44 w-44 shrink-0">
          <svg className="h-full w-full -rotate-90" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="42" stroke="rgba(255,255,255,0.1)" strokeWidth="6" fill="none" />
            <circle
              cx="50"
              cy="50"
              r="42"
              stroke="#10B981"
              strokeWidth="6"
              strokeDasharray="264"
              strokeDashoffset={264 * (1 - progress)}
              strokeLinecap="round"
              fill="none"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center font-mono text-xs text-white">
            <span className="text-xl font-bold text-emerald-400">{Math.round(progress * 100)}%</span>
            <span className="text-[9px] text-gray-400">TRACED</span>
          </div>
        </div>
      </div>
    </section>
  );
}
