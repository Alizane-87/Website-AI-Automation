"use client";

import React, { useRef, useState, useEffect } from "react";

export function OrbitalSatelliteRelay() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [orbitAngle, setOrbitAngle] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const vh = window.innerHeight;
      const p = Math.min(1, Math.max(0, (vh - rect.top) / (rect.height + vh)));
      setOrbitAngle(p * 360);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={containerRef} className="border-b border-white/10 py-24 px-6 sm:px-16 bg-[#06080B] text-[#F4F2EF]">
      <div className="mx-auto max-w-5xl text-center space-y-8">
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-950/80 px-3.5 py-1 text-xs font-mono text-emerald-300">
          <span>Story 11 · 3D Orbital Satellite Relay</span>
        </div>
        <h2 className="font-serif text-3xl sm:text-5xl text-white">Continuous Orbit Coverage</h2>

        <div className="relative mx-auto h-64 w-64 flex items-center justify-center">
          <div className="absolute inset-4 rounded-full border border-dashed border-emerald-500/30" />
          <div
            style={{ transform: `rotate(${orbitAngle}deg)` }}
            className="absolute inset-0 flex items-start justify-center transition-transform duration-75"
          >
            <div className="h-4 w-4 rounded-full bg-emerald-400 shadow-[0_0_15px_#34D399]" />
          </div>
          <div className="h-20 w-20 rounded-full border border-emerald-400/40 bg-black flex items-center justify-center font-mono text-[10px] text-white">
            EARTH CORE
          </div>
        </div>
      </div>
    </section>
  );
}
