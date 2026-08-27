"use client";

import React, { useRef, useState, useEffect } from "react";

interface MetricItem {
  label: string;
  value: number;
  suffix: string;
  decimals?: number;
}

interface TabularCountProps {
  metrics?: MetricItem[];
  title?: string;
  tag?: string;
}

export function TabularCount({
  metrics = [
    { label: "Edge Speed", value: 280, suffix: "ms" },
    { label: "Response", value: 3.8, suffix: "s", decimals: 1 },
    { label: "Quotes Won", value: 14, suffix: "%" },
    { label: "NPS Rating", value: 4.9, suffix: "★", decimals: 1 },
  ],
  title = "Numbers that land with precision.",
  tag = "Device 03 · Rolling Tabular Numbers",
}: TabularCountProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [factor, setFactor] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const vh = window.innerHeight;
      const p = Math.min(1, Math.max(0, (vh - rect.top) / (rect.height + vh)));
      if (p > 0.1) {
        setFactor(Math.min(1, Math.max(0, (p - 0.1) / 0.7)));
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={containerRef} className="border-b border-white/10 py-24 px-6 sm:px-16 bg-[#0E1318]">
      <div className="mx-auto max-w-5xl">
        <div className="font-mono text-xs text-emerald-400 mb-2 uppercase">{tag}</div>
        <h2 className="font-serif text-3xl sm:text-4xl text-white">{title}</h2>
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {metrics.map((m, idx) => {
            const rawVal = factor * m.value;
            const displayVal = m.decimals ? rawVal.toFixed(m.decimals) : Math.round(rawVal);

            return (
              <div key={idx} className="rounded-xl border border-white/10 bg-white/5 p-5 text-center">
                <div className="font-mono text-xs text-gray-400">{m.label}</div>
                <div className="mt-1 font-serif text-4xl text-emerald-400 tabular-nums">
                  {displayVal}
                  <span className="text-2xl text-emerald-300 font-normal">{m.suffix}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
