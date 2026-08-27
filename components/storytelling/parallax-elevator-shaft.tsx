"use client";

import React, { useRef, useState, useEffect } from "react";

const FLOORS = [
  { level: "FLOOR 04 · ROOF ANTENNA", title: "Edge Search Traffic Capture", badge: "280ms INGESTION" },
  { level: "FLOOR 03 · AI SERVER ROOM", title: "Gemini Flash Voice & SMS Triage", badge: "3.8s RESPONSE" },
  { level: "FLOOR 02 · DISPATCH CENTER", title: "Instant Calendar Synchronization", badge: "0 MISSED CALLS" },
  { level: "FLOOR 01 · VAULT LEVEL", title: "Revenue Banking & Review Flywheel", badge: "12X NET ROI" },
];

export function ParallaxElevatorShaft() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeFloor, setActiveFloor] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const vh = window.innerHeight;
      const p = Math.min(1, Math.max(0, (vh - rect.top) / (rect.height + vh)));
      setActiveFloor(Math.min(FLOORS.length - 1, Math.floor(p * FLOORS.length)));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={containerRef} className="border-b border-white/10 py-24 px-6 sm:px-16 bg-[#05070A] text-[#F4F2EF]">
      <div className="mx-auto max-w-4xl space-y-6">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-950/80 px-3.5 py-1 text-xs font-mono text-emerald-300">
            <span>Story 18 · Parallax Elevator Shaft</span>
          </div>
          <h2 className="mt-4 font-serif text-3xl sm:text-5xl text-white">The Industrial Descent</h2>
        </div>

        <div className="space-y-4">
          {FLOORS.map((floor, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-2xl border transition-all ${
                idx === activeFloor
                  ? "border-emerald-500/60 bg-emerald-950/50 text-white shadow-2xl scale-[1.02]"
                  : "border-white/10 bg-white/5 opacity-50"
              }`}
            >
              <div className="flex justify-between font-mono text-xs text-emerald-400">
                <span>{floor.level}</span>
                <span className="rounded bg-black/60 px-2 py-0.5">{floor.badge}</span>
              </div>
              <h3 className="font-serif text-xl text-white mt-2">{floor.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
