"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  KineticType,
  ClipPathReveal,
  TabularCount,
  DifferentialParallax,
  MagneticButton,
  SplitFlap,
  Exploded3DLayers,
  VelocityTypography,
  StackingDeck,
  LaserCircuitRing,
  TextHighlightFill,
  Device3DScrub,
  AcceleratedMarquee,
  VerticalSlats,
  ZoomScreenStage,
  ParticleSwarm,
  SplitCurtain,
  WaypointBeacon,
  CipherDecrypt,
  CylinderCarousel,
  PhosphorTrace,
} from "@/components/motion";

export default function ScrollLabPage() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-[#0A0D10] text-[#F4F2EF] font-sans antialiased selection:bg-[#34D399] selection:text-[#065F46] min-h-screen">
      {/* Top Floating HUD */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between border-b border-white/10 bg-[#0A0D10]/85 px-6 py-3 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="flex items-center gap-1.5 font-mono text-xs text-gray-400 hover:text-white transition-colors"
          >
            <span>←</span>
            <span>Return to Site</span>
          </Link>
          <span className="text-white/20">|</span>
          <span className="font-serif text-sm font-semibold tracking-tight text-white">
            ScrollCraft Modular Motion Library (21 Components)
          </span>
        </div>

        <div className="flex items-center gap-4 font-mono text-xs">
          <div className="hidden sm:flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-950/60 px-3 py-0.5 text-emerald-300">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>Modular: @/components/motion</span>
          </div>
          <div className="text-gray-400">
            <span>Scroll: </span>
            <span className="text-white font-semibold">{Math.round(scrollY)}px</span>
          </div>
        </div>
      </header>

      {/* QUICK JUMP BAR */}
      <div className="fixed top-12 left-0 right-0 z-40 flex items-center gap-2 overflow-x-auto border-b border-white/5 bg-black/60 px-6 py-2 backdrop-blur-sm scrollbar-none text-[11px] font-mono text-gray-400">
        <span className="text-emerald-400 shrink-0 font-semibold">Jump to Device:</span>
        {Array.from({ length: 21 }, (_, i) => i + 1).map((num) => (
          <a
            key={num}
            href={`#dev-${num.toString().padStart(2, "0")}`}
            className="shrink-0 rounded px-2 py-0.5 hover:bg-white/10 hover:text-white transition-colors"
          >
            {num.toString().padStart(2, "0")}
          </a>
        ))}
      </div>

      {/* 21 MODULAR MOTION DEVICES */}
      <div className="pt-24">
        <div id="dev-01"><KineticType /></div>
        <div id="dev-02"><ClipPathReveal /></div>
        <div id="dev-03"><TabularCount /></div>
        <div id="dev-04"><DifferentialParallax /></div>
        <div id="dev-06"><SplitFlap /></div>
        <div id="dev-07"><Exploded3DLayers /></div>
        <div id="dev-08"><VelocityTypography /></div>
        <div id="dev-09"><StackingDeck /></div>
        <div id="dev-10"><LaserCircuitRing /></div>
        <div id="dev-11"><TextHighlightFill /></div>
        <div id="dev-12"><Device3DScrub /></div>
        <div id="dev-13"><AcceleratedMarquee /></div>
        <div id="dev-14"><VerticalSlats /></div>
        <div id="dev-15"><ZoomScreenStage /></div>
        <div id="dev-16"><ParticleSwarm /></div>
        <div id="dev-17"><SplitCurtain /></div>
        <div id="dev-18"><WaypointBeacon /></div>
        <div id="dev-19"><CipherDecrypt /></div>
        <div id="dev-20"><CylinderCarousel /></div>
        <div id="dev-21"><PhosphorTrace /></div>
        <div id="dev-05"><MagneticButton /></div>
      </div>
    </div>
  );
}
