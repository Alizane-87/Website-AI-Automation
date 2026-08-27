"use client";

import React, { useRef, useState, useEffect } from "react";

interface ClipPathRevealProps {
  height?: string;
  tag?: string;
}

export function ClipPathReveal({
  height = "220vh",
  tag = "Device 02 · Clip-Path Reveal Wipe",
}: ClipPathRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [revealMode, setRevealMode] = useState<"horizontal" | "iris">("horizontal");

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
    <section ref={containerRef} className="relative border-b border-white/10 bg-[#0C1014]" style={{ height }}>
      <div className="sticky top-0 flex h-screen w-full flex-col justify-center px-6 sm:px-16 overflow-hidden">
        <div className="mx-auto w-full max-w-5xl">
          <div className="flex items-center justify-between font-mono text-xs text-emerald-400 mb-4">
            <span>{tag}</span>
            <div className="flex items-center gap-1 rounded bg-white/10 p-1">
              <button
                onClick={() => setRevealMode("horizontal")}
                className={`rounded px-2 py-0.5 text-xs cursor-pointer ${
                  revealMode === "horizontal" ? "bg-emerald-500 text-black font-semibold" : "text-gray-300"
                }`}
              >
                Linear
              </button>
              <button
                onClick={() => setRevealMode("iris")}
                className={`rounded px-2 py-0.5 text-xs cursor-pointer ${
                  revealMode === "iris" ? "bg-emerald-500 text-black font-semibold" : "text-gray-300"
                }`}
              >
                Iris
              </button>
            </div>
          </div>
          <div className="relative h-[360px] w-full overflow-hidden rounded-2xl border border-white/15 shadow-2xl">
            <div className="absolute inset-0 bg-[#2A2421] p-8 text-[#D5CEBA]">
              <div className="font-mono text-xs text-red-400">🔴 LEGACY SLOW STOREFRONT (6.8s LOAD)</div>
              <h3 className="mt-3 font-serif text-2xl text-white">Acme Heating &amp; Mechanical</h3>
              <p className="mt-2 text-xs text-[#C4BBA7]">Unresponsive layout with static contact form.</p>
            </div>
            <div
              className="absolute inset-0 bg-[#065F46] p-8 text-white transition-all duration-75 shadow-2xl"
              style={{
                clipPath:
                  revealMode === "horizontal"
                    ? `inset(0 0 0 ${(1 - progress) * 100}%)`
                    : `circle(${progress * 85}% at 50% 50%)`,
              }}
            >
              <div className="font-mono text-xs text-emerald-200">⚡ ALIZANE EDGE STUDIO (280ms LOAD)</div>
              <h3 className="mt-3 font-serif text-2xl text-white">Apex Climate Systems</h3>
              <p className="mt-2 text-xs text-emerald-100">Sub-second load with 24/7 AI employee dispatch.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
