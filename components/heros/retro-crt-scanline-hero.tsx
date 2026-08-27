"use client";

import React, { useState } from "react";

export function RetroCrtScanlineHero() {
  const [cmd, setCmd] = useState("alizane --status");

  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-[#050B08] py-28 px-6 sm:px-16 text-[#34D399] font-mono">
      <div className="mx-auto max-w-4xl space-y-6">
        <div className="inline-flex items-center gap-2 rounded border border-emerald-500/40 bg-black/60 px-3.5 py-1 text-xs">
          <span>Hero 19 · Retro Green CRT Terminal</span>
        </div>

        {/* CRT Curved Monitor Box */}
        <div className="relative rounded-3xl border-4 border-emerald-950 bg-black p-8 shadow-[0_0_60px_rgba(16,185,129,0.3)] space-y-4 overflow-hidden">
          {/* CRT Scanline Overlay */}
          <div
            className="pointer-events-none absolute inset-0 opacity-20"
            style={{
              backgroundImage: "linear-gradient(to bottom, transparent 50%, rgba(0, 0, 0, 0.8) 51%)",
              backgroundSize: "100% 4px",
            }}
          />

          <div className="text-xs text-emerald-600 border-b border-emerald-900 pb-2 flex justify-between">
            <span>ALIZANE EMULATOR V1.9</span>
            <span>MEM: 640KB OK</span>
          </div>

          <div className="space-y-2 text-sm sm:text-base">
            <div>&gt; INITIATING SPEED KERNEL... [OK] 280ms</div>
            <div>&gt; BINDING GEMINI FLASH VOICE CORE... [OK] 3.8s</div>
            <div>&gt; MOUNTING OUTLOOK/GOOGLE CALENDAR DISPATCH... [OK]</div>
            <div className="text-white font-bold">&gt; ALL 4 PILLARS ACTIVE AND CONVERTING TRAFFIC.</div>
          </div>

          <div className="pt-2 flex items-center gap-2 text-xs">
            <span className="text-emerald-400">&gt; COMMAND:</span>
            <input
              type="text"
              value={cmd}
              onChange={(e) => setCmd(e.target.value)}
              className="bg-transparent text-white border-b border-emerald-500 outline-none w-64"
            />
            <span className="animate-pulse">█</span>
          </div>
        </div>
      </div>
    </section>
  );
}
