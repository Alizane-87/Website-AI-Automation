"use client";

import React, { useState, useEffect } from "react";

export function HorologicalClockworkHero() {
  const [angle, setAngle] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAngle((prev) => (prev + 1) % 360);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-[#07090C] py-28 px-6 sm:px-16 text-[#F4F2EF]">
      <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-950/60 px-3.5 py-1 text-xs font-mono text-amber-300">
            <span>Hero 18 · Swiss Horological Precision</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl font-normal text-white leading-tight">
            Clockwork Reliability. 24 Hours. 365 Days.
          </h1>

          <p className="text-base sm:text-lg text-gray-400 font-sans leading-relaxed">
            Every gear of your sales machine operates in synchronization—from instant search index ingestion to automated 5-star review collection.
          </p>
        </div>

        {/* Meshing Clockwork Gear Display */}
        <div className="lg:col-span-5 flex items-center justify-center">
          <div className="relative h-64 w-64 flex items-center justify-center">
            {/* Main Outer Gear */}
            <div
              style={{ transform: `rotate(${angle}deg)` }}
              className="absolute h-52 w-52 rounded-full border-4 border-dashed border-amber-500/50 flex items-center justify-center transition-transform"
            >
              <div className="h-32 w-32 rounded-full border-2 border-dashed border-amber-400/40" />
            </div>

            {/* Inner Tourbillon Pin */}
            <div
              style={{ transform: `rotate(${-angle * 2}deg)` }}
              className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full border-2 border-amber-400 bg-black font-mono text-xs font-bold text-amber-300 shadow-[0_0_25px_rgba(245,158,11,0.4)]"
            >
              24/7
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
