"use client";

import React, { useState } from "react";

export function DynamicIslandHero() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-[#07090C] py-28 px-6 sm:px-16 text-[#F4F2EF] text-center">
      <div className="mx-auto max-w-4xl space-y-6">
        <div className="font-mono text-xs text-emerald-400 font-semibold uppercase">
          Hero 09 · Dynamic Island Neural HUD
        </div>

        <h1 className="font-serif text-4xl sm:text-7xl font-normal tracking-tight text-white leading-tight">
          The Living Autonomous Receptionist.
        </h1>

        <p className="text-base sm:text-lg text-gray-400 max-w-xl mx-auto font-sans">
          Click the dynamic island HUD below to trigger a simulated emergency incoming call and watch the neural agent dispatch in real-time.
        </p>

        {/* Morphing Dynamic Island Pill */}
        <div className="pt-6 flex justify-center">
          <div
            onClick={() => setExpanded(!expanded)}
            style={{
              transition: "all 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
            className={`cursor-pointer overflow-hidden rounded-full border border-emerald-500/40 bg-black shadow-[0_0_40px_rgba(16,185,129,0.3)] transition-all ${
              expanded
                ? "h-44 w-full max-w-xl rounded-3xl p-6 text-left"
                : "h-14 w-80 px-5 flex items-center justify-between hover:scale-105"
            }`}
          >
            {!expanded ? (
              <>
                <div className="flex items-center gap-3">
                  <span className="h-3 w-3 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="font-mono text-xs text-emerald-300 font-semibold">24/7 AI AGENT IDLE</span>
                </div>
                <span className="font-mono text-[10px] rounded bg-white/10 px-2 py-0.5 text-gray-300">
                  TAP TO CALL
                </span>
              </>
            ) : (
              <div className="space-y-3">
                <div className="flex items-center justify-between border-b border-white/10 pb-2">
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-red-500 animate-ping" />
                    <span className="font-mono text-xs text-red-400 font-bold">● INCOMING: $4,500 EMERGENCY HVAC</span>
                  </div>
                  <span className="font-mono text-[10px] text-gray-400">DURATION: 00:04s</span>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1 h-8">
                    {[16, 28, 40, 22, 34, 18, 28, 12, 30].map((h, i) => (
                      <div
                        key={i}
                        className="w-1 rounded-full bg-emerald-400 animate-pulse"
                        style={{ height: `${h}px`, animationDelay: `${i * 100}ms` }}
                      />
                    ))}
                  </div>
                  <div className="font-mono text-xs text-emerald-200">
                    AI: &quot;I have qualified the emergency for 142 Elm St. Booking tech arrival at 08:30 AM.&quot;
                  </div>
                </div>

                <div className="flex justify-between items-center pt-2 font-mono text-[10px] text-gray-400">
                  <span className="text-emerald-400">✓ SMS DISPATCH SENT TO LEAD TECH</span>
                  <span className="text-gray-500">Tap to collapse</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
