"use client";

import React, { useRef, useState, useEffect } from "react";

interface WaypointBeaconProps {
  tag?: string;
}

export function WaypointBeacon({ tag = "Device 18 · Stepped Waypoint Beacon" }: WaypointBeaconProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const vh = window.innerHeight;
      setProgress(Math.min(1, Math.max(0, (vh - rect.top) / (rect.height + vh))));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={containerRef} className="border-b border-white/10 py-24 px-6 sm:px-16 bg-[#090C0F]">
      <div className="mx-auto max-w-4xl">
        <div className="font-mono text-xs text-emerald-400 mb-6 uppercase">{tag}</div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[0.2, 0.45, 0.7, 0.95].map((threshold, idx) => {
            const isStamped = progress >= threshold;
            return (
              <div
                key={idx}
                className={`rounded-xl border p-4 font-mono text-xs transition-all ${
                  isStamped
                    ? "border-emerald-500 bg-emerald-950/60 text-emerald-300 shadow-[0_0_15px_rgba(16,185,129,0.3)]"
                    : "border-white/10 bg-white/5 text-gray-500"
                }`}
              >
                <div className="font-semibold">WAYPOINT 0{idx + 1}</div>
                <div className="mt-1">{isStamped ? "✓ STAMPED" : "PENDING..."}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
