"use client";

import React, { useRef, useState, useCallback } from "react";

interface SpatialHologramHeroProps {
  headline?: string;
  subheadline?: string;
}

export function SpatialHologramHero({
  headline = "The Next Generation Autonomous Dispatch Machine.",
  subheadline = "Multi-tiered spatial software architecture designed for contractors who demand zero downtime and instant calendar bookings.",
}: SpatialHologramHeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ rx: 12, ry: -10 });

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setTilt({
      rx: -(y / rect.height) * 30,
      ry: (x / rect.width) * 30,
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setTilt({ rx: 12, ry: -10 });
  }, []);

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative overflow-hidden border-b border-white/10 bg-[#07090C] py-28 px-6 sm:px-16 text-[#F4F2EF]"
    >
      <div className="mx-auto max-w-6xl text-center space-y-6">
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-950/80 px-4 py-1 text-xs font-mono text-emerald-300">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
          <span className="uppercase tracking-widest text-[11px] font-semibold">Hero 02 · 3D Spatial Hologram</span>
        </div>

        <h1 className="font-serif text-4xl sm:text-7xl font-normal tracking-tight text-white max-w-4xl mx-auto leading-tight">
          {headline}
        </h1>

        <p className="text-base sm:text-xl text-gray-400 max-w-2xl mx-auto font-sans leading-relaxed">
          {subheadline}
        </p>

        {/* 3D Spatial Hologram Stage */}
        <div className="relative mx-auto mt-12 h-[380px] w-full max-w-3xl" style={{ perspective: "1200px" }}>
          <div
            className="relative h-full w-full rounded-2xl border border-emerald-500/30 bg-gradient-to-b from-[#0A1612] to-[#04080A] p-8 shadow-2xl transition-transform duration-150 ease-out flex flex-col justify-between"
            style={{
              transform: `rotateX(${tilt.rx.toFixed(1)}deg) rotateY(${tilt.ry.toFixed(1)}deg)`,
              transformStyle: "preserve-3d",
              boxShadow: "0 20px 60px rgba(5,150,105,0.25)",
            }}
          >
            {/* Hologram Floating Front Badge */}
            <div
              className="flex items-center justify-between border-b border-white/10 pb-4"
              style={{ transform: "translateZ(50px)" }}
            >
              <div className="flex items-center gap-2 font-mono text-xs text-emerald-300">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                <span>HOLOGRAM LAYER: 01 · ACTIVE AIRSPACE</span>
              </div>
              <span className="rounded bg-white/10 px-2.5 py-0.5 font-mono text-[10px] text-gray-300">
                LATENCY: 3.8s
              </span>
            </div>

            {/* Central Holographic Node */}
            <div className="text-center" style={{ transform: "translateZ(80px)" }}>
              <div className="inline-block rounded-2xl border border-emerald-400/50 bg-black/60 px-8 py-4 backdrop-blur-md shadow-2xl">
                <div className="font-mono text-xs text-emerald-400">24/7 AI RECEPTIONIST CORE</div>
                <div className="font-serif text-2xl text-white mt-1">Simulated Job Dispatch Engine</div>
              </div>
            </div>

            {/* Bottom Floating Stats */}
            <div className="flex items-center justify-between font-mono text-xs" style={{ transform: "translateZ(40px)" }}>
              <span className="text-gray-400">STATUS: ONLINE</span>
              <span className="text-emerald-400 font-bold">100% PHONE COVERAGE</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
