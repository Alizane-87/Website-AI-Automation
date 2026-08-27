"use client";

import React, { useRef, useState, useEffect } from "react";

interface SplitCurtainProps {
  leftTitle?: string;
  rightTitle?: string;
  tag?: string;
}

export function SplitCurtain({
  leftTitle = "Manual Quote Logging",
  rightTitle = "Automated AI Dispatch",
  tag = "Device 17 · Split Curtain Wipe",
}: SplitCurtainProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [split, setSplit] = useState(50);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const vh = window.innerHeight;
      const p = Math.min(1, Math.max(0, (vh - rect.top) / (rect.height + vh)));
      setSplit(p * 100);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={containerRef} className="border-b border-white/10 py-24 px-6 sm:px-16 bg-[#0A0D10]">
      <div className="mx-auto max-w-4xl">
        <div className="font-mono text-xs text-emerald-400 mb-4 uppercase">
          {tag} (Split: {Math.round(split)}%)
        </div>
        <div className="relative h-[280px] w-full overflow-hidden rounded-2xl border border-white/15 shadow-2xl">
          <div className="absolute inset-0 bg-[#1E293B] p-8 text-white">
            <div className="font-mono text-xs text-blue-300">LEFT: BEFORE</div>
            <h3 className="font-serif text-2xl mt-2">{leftTitle}</h3>
          </div>
          <div
            className="absolute inset-0 bg-[#065F46] p-8 text-white transition-all duration-75"
            style={{ clipPath: `inset(0 0 0 ${split}%)` }}
          >
            <div className="font-mono text-xs text-emerald-200">RIGHT: AFTER</div>
            <h3 className="font-serif text-2xl mt-2">{rightTitle}</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
