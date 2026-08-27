"use client";

import React, { useState } from "react";

export function MechanicalSynthHero() {
  const [speedDial, setSpeedDial] = useState(280);
  const [aiSwitch, setAiSwitch] = useState(true);

  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-[#0A0D10] py-24 px-6 sm:px-16 text-[#F4F2EF]">
      <div className="mx-auto max-w-5xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6 space-y-6">
          <div className="inline-flex items-center gap-2 rounded border border-amber-500/40 bg-amber-950/30 px-3 py-1 font-mono text-xs text-amber-300">
            <span>Hero 11 · Teenage Engineering Mechanical Console</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl font-normal text-white leading-tight">
            Tactile Control Over Your Entire Agency Stack.
          </h1>

          <p className="text-base sm:text-lg text-gray-400 font-sans leading-relaxed">
            Industrial design meets autonomous AI infrastructure. Adjust physical rotary parameters on the right to calibrate engine performance.
          </p>
        </div>

        {/* Mechanical Synth Console Box */}
        <div className="lg:col-span-6 rounded-3xl border-2 border-stone-700 bg-[#16181B] p-8 shadow-2xl space-y-6 font-mono text-xs">
          <div className="flex items-center justify-between border-b border-white/10 pb-3 text-stone-400">
            <span className="text-amber-400 font-bold">ALIZANE MK-IV SYNTH CONSOLE</span>
            <span>REV: 2026.4</span>
          </div>

          {/* OLED Screen Readout */}
          <div className="rounded-xl border border-emerald-500/40 bg-black p-4 text-emerald-400 font-mono space-y-1 shadow-inner">
            <div className="text-[10px] text-emerald-600 uppercase">OLED PHOSPHOR READOUT</div>
            <div className="text-lg font-bold">EDGE_SPEED: {speedDial}ms</div>
            <div className="text-xs">AI_DISPATCH_CORE: {aiSwitch ? "ACTIVE (3.8s)" : "STANDBY"}</div>
          </div>

          {/* Rotary Dials & Switches */}
          <div className="grid grid-cols-2 gap-4 pt-2">
            <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">
              <div className="text-gray-400 mb-2">SPEED DIAL</div>
              <input
                type="range"
                min={120}
                max={500}
                value={speedDial}
                onChange={(e) => setSpeedDial(Number(e.target.value))}
                className="w-full accent-amber-500 cursor-pointer"
              />
              <div className="mt-1 text-amber-400 font-bold">{speedDial}ms</div>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-center flex flex-col justify-between">
              <div className="text-gray-400">AI GATE TOGGLE</div>
              <button
                onClick={() => setAiSwitch(!aiSwitch)}
                className={`mx-auto rounded px-4 py-1.5 font-bold cursor-pointer transition-colors ${
                  aiSwitch ? "bg-emerald-500 text-black shadow" : "bg-red-950 text-red-400 border border-red-500/30"
                }`}
              >
                {aiSwitch ? "ENABLED" : "BYPASSED"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
