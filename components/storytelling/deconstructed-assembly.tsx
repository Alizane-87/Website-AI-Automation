"use client";

import React, { useRef, useState, useEffect } from "react";

export function DeconstructedAssembly() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const vh = window.innerHeight;
      const travel = Math.max(containerRef.current.offsetHeight - vh, 1);
      setProgress(Math.min(1, Math.max(0, -rect.top / travel)));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={containerRef} className="relative border-b border-white/10 bg-[#0B0F14]" style={{ height: "230vh" }}>
      <div className="sticky top-0 flex h-screen w-full flex-col justify-center px-6 sm:px-16 overflow-hidden text-[#F4F2EF]">
        <div className="mx-auto w-full max-w-4xl text-center space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-950/80 px-3.5 py-1 text-xs font-mono text-emerald-300">
            <span>Story 02 · 3D Deconstructed Assembly ({Math.round(progress * 100)}%)</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl text-white">
            Deconstructed System Architecture
          </h2>

          <div className="relative mx-auto h-[320px] w-full max-w-xl mt-8" style={{ perspective: "1200px" }}>
            <div
              style={{
                transform: `rotateX(25deg) rotateY(-15deg) translateZ(${(-120 * (1 - progress)).toFixed(1)}px)`,
              }}
              className="absolute inset-x-6 inset-y-4 rounded-2xl border border-white/10 bg-[#161B22] p-4 text-left font-mono text-xs text-gray-400 shadow-2xl"
            >
              <div className="font-bold text-gray-300">LAYER 03: EDGE INFRASTRUCTURE</div>
              <div className="text-[10px] mt-1">US-East Edge Network · 280ms Verified Cache</div>
            </div>

            <div
              style={{
                transform: `rotateX(25deg) rotateY(-15deg) translateZ(${(20 * (1 - progress)).toFixed(1)}px)`,
              }}
              className="absolute inset-x-4 inset-y-2 rounded-2xl border border-emerald-500/30 bg-[#064E3B] p-4 text-left font-mono text-xs text-emerald-200 shadow-2xl"
            >
              <div className="font-bold text-white">LAYER 02: 24/7 AI RECEPTIONIST CORE</div>
              <div className="text-[10px] mt-1">Multi-Turn Qualification · Instant SMS Dispatch</div>
            </div>

            <div
              style={{
                transform: `rotateX(25deg) rotateY(-15deg) translateZ(${(120 * (1 - progress)).toFixed(1)}px)`,
              }}
              className="absolute inset-0 rounded-2xl border border-white/30 bg-white/10 p-6 text-left text-white shadow-2xl backdrop-blur-md"
            >
              <div className="font-mono text-xs text-emerald-300 font-bold">LAYER 01: DIGITAL STOREFRONT</div>
              <div className="font-serif text-xl mt-1">100/100 Core Web Vitals Guaranteed</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
