"use client";

import React, { useState, useEffect } from "react";

const NICHES = [
  "HVAC & REFRIGERATION",
  "EMERGENCY RESTORATION",
  "HIGH-TICKET ROOFING",
  "COMMERCIAL ELECTRICAL",
];

export function KineticMorphHero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % NICHES.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-[#090C0F] py-28 px-6 sm:px-16 text-[#F4F2EF] text-center">
      <div className="mx-auto max-w-5xl space-y-6">
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-950/80 px-3.5 py-1 text-xs font-mono text-emerald-300">
          <span>Hero 04 · Kinetic Morphing Value Prop</span>
        </div>

        <h1 className="font-serif text-4xl sm:text-7xl font-normal tracking-tight text-white leading-tight">
          Bespoke conversion software for{" "}
          <span className="block mt-2 font-mono text-3xl sm:text-6xl text-emerald-400 font-bold tracking-normal transition-all duration-300">
            [{NICHES[index]}]
          </span>
        </h1>

        <p className="text-base sm:text-xl text-gray-400 max-w-2xl mx-auto font-sans leading-relaxed">
          Dynamic sub-second digital storefronts coupled with 24/7 AI employee phone qualification and automated revenue retention loops.
        </p>

        <div className="pt-4 flex items-center justify-center gap-4">
          <a
            href="#pricing"
            className="rounded-lg bg-emerald-500 px-8 py-3.5 font-mono text-sm font-semibold text-black hover:bg-emerald-400 transition-all shadow-lg"
          >
            Claim Your Industry Build →
          </a>
        </div>
      </div>
    </section>
  );
}
