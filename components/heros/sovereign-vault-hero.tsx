"use client";

import React, { useState } from "react";

export function SovereignVaultHero() {
  const [locked, setLocked] = useState(true);

  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-[#06080B] py-28 px-6 sm:px-16 text-[#F4F2EF]">
      <div className="mx-auto max-w-5xl text-center space-y-6">
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-950/80 px-3.5 py-1 text-xs font-mono text-emerald-300">
          <span>Hero 12 · Sovereign Enclave Security Vault</span>
        </div>

        <h1 className="font-serif text-4xl sm:text-7xl font-normal tracking-tight text-white leading-tight">
          Sovereign Data. Zero Data Leaks.
        </h1>

        <p className="text-base sm:text-xl text-gray-400 max-w-2xl mx-auto font-sans leading-relaxed">
          Enterprise-grade AES-256 encrypted lead intake, dedicated PostgreSQL partition, and isolated AI execution.
        </p>

        {/* Vault Door Circular Lock Component */}
        <div className="pt-8 flex justify-center">
          <div
            onClick={() => setLocked(!locked)}
            className="relative h-64 w-64 rounded-full border-4 border-emerald-500/30 bg-black/80 shadow-[0_0_50px_rgba(16,185,129,0.2)] flex items-center justify-center cursor-pointer select-none hover:scale-105 transition-transform"
          >
            {/* Concentric Rotating Vault Rings */}
            <div
              className={`absolute inset-4 rounded-full border-2 border-dashed border-emerald-400/40 transition-transform duration-700 ${
                locked ? "rotate-0" : "rotate-180"
              }`}
            />
            <div
              className={`absolute inset-10 rounded-full border-2 border-emerald-500/30 transition-transform duration-500 ${
                locked ? "rotate-0" : "-rotate-90"
              }`}
            />

            <div className="text-center font-mono text-xs">
              <div className="text-2xl">{locked ? "🔒" : "🔓"}</div>
              <div className={`mt-2 font-bold ${locked ? "text-emerald-400" : "text-amber-400"}`}>
                {locked ? "ENCLAVE LOCKED" : "ACCESS GRANTED"}
              </div>
              <div className="text-[10px] text-gray-500 mt-1">Tap to toggle</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
