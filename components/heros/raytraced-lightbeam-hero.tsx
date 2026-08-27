"use client";

import React, { useState, useCallback } from "react";

export function RaytracedLightbeamHero() {
  const [mouse, setMouse] = useState({ x: 50, y: 50 });

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMouse({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  }, []);

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative overflow-hidden border-b border-white/10 bg-[#05070A] py-32 px-6 sm:px-16 text-[#F4F2EF] text-center"
    >
      {/* Specular Raytraced Cone */}
      <div
        className="pointer-events-none absolute inset-0 opacity-60 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mouse.x}% ${mouse.y}%, rgba(52, 211, 153, 0.25), transparent 70%)`,
        }}
      />

      <div className="relative mx-auto max-w-5xl space-y-6">
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-black/60 px-4 py-1 text-xs font-mono text-emerald-300">
          <span>Hero 10 · Raytraced Specular Lightbeam</span>
        </div>

        <h1 className="font-serif text-4xl sm:text-7xl font-normal tracking-tight text-white leading-tight">
          Precision Light &amp; Sub-Second Velocity.
        </h1>

        <p className="text-base sm:text-xl text-gray-400 max-w-2xl mx-auto font-sans leading-relaxed">
          Move your cursor across the surface to cast dynamic specular reflections across our frosted dark titanium glass cards.
        </p>

        {/* Specular Glass Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 text-left">
          {["280ms Edge CDN", "24/7 AI Receptionist", "21-Day Win-Back Loop"].map((item, i) => (
            <div
              key={i}
              className="rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-md shadow-2xl transition-transform hover:-translate-y-1"
            >
              <div className="font-mono text-xs text-emerald-400">SPECULAR NODE 0{i + 1}</div>
              <h3 className="font-serif text-xl text-white mt-2">{item}</h3>
              <p className="text-xs text-gray-400 mt-2">Zero CMS bloat. Guaranteed Core Web Vitals.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
