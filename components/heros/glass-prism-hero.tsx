"use client";

import React, { useState, useCallback } from "react";

export function GlassPrismHero() {
  const [prismAngle, setPrismAngle] = useState(0);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const pct = (e.clientX - rect.left) / rect.width;
    setPrismAngle((pct - 0.5) * 60);
  }, []);

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative overflow-hidden border-b border-white/10 bg-[#07090C] py-28 px-6 sm:px-16 text-[#F4F2EF] text-center"
    >
      <div className="mx-auto max-w-5xl space-y-6">
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-950/80 px-4 py-1 text-xs font-mono text-emerald-300">
          <span>Hero 13 · 3D Glass Prism Caustics</span>
        </div>

        <h1 className="font-serif text-4xl sm:text-7xl font-normal tracking-tight text-white leading-tight">
          Refracting Speed Into High-Ticket Conversions.
        </h1>

        <p className="text-base sm:text-xl text-gray-400 max-w-2xl mx-auto font-sans leading-relaxed">
          Move your cursor horizontally to rotate the crystalline prism and bend dynamic chromatic caustics across the canvas.
        </p>

        {/* Floating 3D Prism Node */}
        <div className="relative mx-auto mt-10 h-64 w-64 flex items-center justify-center">
          <div
            style={{
              transform: `perspective(800px) rotateY(${prismAngle}deg) rotateX(15deg)`,
              transition: "transform 100ms ease-out",
            }}
            className="relative h-44 w-44 rounded-3xl border-2 border-white/40 bg-gradient-to-tr from-white/10 via-emerald-500/20 to-transparent p-6 shadow-[0_0_50px_rgba(52,211,153,0.3)] backdrop-blur-2xl flex items-center justify-center"
          >
            <div className="text-center font-mono text-xs">
              <div className="text-3xl">💎</div>
              <div className="mt-2 text-white font-bold">PRISM CORE</div>
              <div className="text-[10px] text-emerald-300">DISPERSION: {(prismAngle + 30).toFixed(0)}°</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
