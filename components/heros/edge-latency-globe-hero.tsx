"use client";

import React, { useState } from "react";

const CITIES = [
  { name: "Ashburn (US-East)", ping: "8ms", active: true },
  { name: "San Jose (US-West)", ping: "14ms", active: true },
  { name: "Frankfurt (EU-Central)", ping: "22ms", active: true },
  { name: "Tokyo (AP-East)", ping: "38ms", active: true },
];

export function EdgeLatencyGlobeHero() {
  const [selectedCity, setSelectedCity] = useState(0);

  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-[#06080B] py-28 px-6 sm:px-16 text-[#F4F2EF]">
      <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6 space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-950/80 px-3.5 py-1 text-xs font-mono text-emerald-300">
            <span>Hero 15 · Global Edge Latency Matrix</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl font-normal text-white leading-tight">
            Sub-20ms Worldwide Delivery.
          </h1>

          <p className="text-base sm:text-lg text-gray-400 font-sans leading-relaxed">
            Your website is compiled to 300+ global edge locations. When a customer taps your ad, it loads as fast as a native app.
          </p>

          {/* City Ping Ticker */}
          <div className="grid grid-cols-2 gap-3 pt-2 font-mono text-xs">
            {CITIES.map((city, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedCity(idx)}
                className={`p-3 rounded-xl border cursor-pointer transition-all ${
                  idx === selectedCity
                    ? "border-emerald-500 bg-emerald-950/60 text-emerald-300 shadow-lg"
                    : "border-white/10 bg-white/5 text-gray-400 hover:text-white"
                }`}
              >
                <div className="font-semibold">{city.name}</div>
                <div className="text-emerald-400 mt-1">PING: {city.ping}</div>
              </div>
            ))}
          </div>
        </div>

        {/* 3D Wireframe Node Visualization */}
        <div className="lg:col-span-6 flex items-center justify-center">
          <div className="relative h-72 w-72 sm:h-80 sm:w-80 rounded-full border-2 border-dashed border-emerald-500/30 bg-black/60 shadow-[0_0_60px_rgba(16,185,129,0.25)] flex items-center justify-center animate-spin" style={{ animationDuration: "30s" }}>
            <div className="absolute top-6 left-12 h-3 w-3 rounded-full bg-emerald-400 shadow-[0_0_12px_#34D399]" />
            <div className="absolute bottom-12 right-8 h-3 w-3 rounded-full bg-emerald-400 shadow-[0_0_12px_#34D399]" />
            <div className="absolute top-1/2 right-4 h-3 w-3 rounded-full bg-emerald-400 shadow-[0_0_12px_#34D399]" />
            <div className="h-28 w-28 rounded-full border border-emerald-400/40 flex items-center justify-center font-mono text-xs text-white">
              EDGE CORE
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
