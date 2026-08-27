"use client";

import React, { useRef, useState, useEffect } from "react";

export function DnaHelixNarrative() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [helixAngle, setHelixAngle] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const vh = window.innerHeight;
      const p = Math.min(1, Math.max(0, (vh - rect.top) / (rect.height + vh)));
      setHelixAngle(p * 360);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={containerRef} className="border-b border-white/10 py-24 px-6 sm:px-16 bg-[#07090C] text-[#F4F2EF]">
      <div className="mx-auto max-w-4xl space-y-6 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-950/80 px-3.5 py-1 text-xs font-mono text-emerald-300">
          <span>Story 16 · 3D DNA Helix Code Narrative</span>
        </div>
        <h2 className="font-serif text-3xl sm:text-5xl text-white">The Structural Genome</h2>

        <div className="relative mx-auto h-64 w-64 flex flex-col justify-around py-4" style={{ perspective: "800px" }}>
          {[0, 45, 90, 135, 180, 225].map((deg, i) => (
            <div
              key={i}
              style={{
                transform: `rotateY(${helixAngle + deg}deg)`,
                transition: "transform 75ms ease-out",
              }}
              className="h-2 w-full rounded-full bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-600 shadow-[0_0_10px_#34D399]"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
