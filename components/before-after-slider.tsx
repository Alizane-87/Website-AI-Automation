"use client";

import Image from "next/image";
import React, { useRef, useState, useEffect, useCallback } from "react";

export function BeforeAfterSlider() {
  const [pct, setPct] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [isNudging, setIsNudging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Initial subtle nudge animation on mount
  useEffect(() => {
    const timer1 = setTimeout(() => {
      setIsNudging(true);
      setPct(62);
    }, 600);
    const timer2 = setTimeout(() => setPct(50), 1100);
    const timer3 = setTimeout(() => setIsNudging(false), 1550);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const rawPct = (x / rect.width) * 100;
    const clampedPct = Math.max(1, Math.min(99, rawPct));
    setPct(clampedPct);
  }, []);

  const handlePointerDown = (e: React.PointerEvent) => {
    setIsNudging(false);
    setIsDragging(true);
    try {
      (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    } catch {
      // fallback
    }
    updatePosition(e.clientX);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    updatePosition(e.clientX);
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    setIsDragging(false);
    try {
      (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
    } catch {
      // fallback
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      setPct((prev) => Math.max(5, prev - 5));
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      setPct((prev) => Math.min(95, prev + 5));
    } else if (e.key === "Home") {
      e.preventDefault();
      setPct(5);
    } else if (e.key === "End") {
      e.preventDefault();
      setPct(95);
    }
  };

  useEffect(() => {
    if (!isDragging) return;

    const onGlobalMove = (e: PointerEvent) => {
      updatePosition(e.clientX);
    };

    const onGlobalUp = () => {
      setIsDragging(false);
    };

    window.addEventListener("pointermove", onGlobalMove);
    window.addEventListener("pointerup", onGlobalUp);
    window.addEventListener("pointercancel", onGlobalUp);

    return () => {
      window.removeEventListener("pointermove", onGlobalMove);
      window.removeEventListener("pointerup", onGlobalUp);
      window.removeEventListener("pointercancel", onGlobalUp);
    };
  }, [isDragging, updatePosition]);

  return (
    <div className="mx-auto mt-8 max-w-5xl">
      {/* Clean Top Badges Above Image */}
      <div className="mb-3 flex items-center justify-between px-1 text-xs font-mono">
        <div className="flex items-center gap-2 rounded-full border border-[#D6D3D1] bg-white px-3.5 py-1 text-[#44403C] shadow-xs">
          <span className="h-2 w-2 rounded-full bg-[#78716C]" />
          <span className="font-semibold uppercase tracking-wider">
            Before: Generic Template
          </span>
        </div>
        <div className="flex items-center gap-2 rounded-full border border-[#A7F3D0] bg-[#ECFDF5] px-3.5 py-1 text-[#065F46] shadow-xs">
          <span className="h-2 w-2 rounded-full bg-[#059669] animate-pulse" />
          <span className="font-semibold uppercase tracking-wider">
            After: Alizane Engine
          </span>
        </div>
      </div>

      {/* Slider Comparison Viewport */}
      <div
        ref={containerRef}
        role="slider"
        tabIndex={0}
        aria-label="Website Before and After transformation comparison slider"
        aria-valuenow={Math.round(pct)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuetext={`Showing ${Math.round(pct)} percent of the before website`}
        onKeyDown={handleKeyDown}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        className="relative aspect-[21/9] w-full overflow-hidden rounded-xl border border-[#E7E5E4] bg-[#E7E5E4] select-none touch-none cursor-ew-resize shadow-md focus-visible:ring-2 focus-visible:ring-[#065F46] focus-visible:outline-none"
        style={{ userSelect: "none", WebkitUserSelect: "none" }}
      >
        {/* 1. AFTER IMAGE (Right / Background Layer) */}
        <Image
          src="/images/after-hero.jpg"
          alt="After: Modern Alizane Labs Website"
          fill
          sizes="(max-width: 768px) 100vw, 1024px"
          quality={75}
          className="pointer-events-none absolute inset-0 h-full w-full object-cover object-top select-none"
        />

        {/* 2. BEFORE IMAGE (Left Layer clipped by slider) */}
        <div
          className="pointer-events-none absolute inset-0 h-full w-full overflow-hidden select-none"
          style={{
            clipPath: `inset(0 ${100 - pct}% 0 0)`,
            WebkitClipPath: `inset(0 ${100 - pct}% 0 0)`,
            transition: isDragging || !isNudging ? "none" : "clip-path 450ms cubic-bezier(.16,1,.3,1)",
          }}
        >
          <Image
            src="/images/before-hero.jpg"
            alt="Before: Generic Local Business Website"
            fill
            sizes="(max-width: 768px) 100vw, 1024px"
            quality={75}
            className="pointer-events-none absolute inset-0 h-full w-full object-cover object-top select-none"
          />
        </div>

        {/* Draggable Divider Line & Sovereign Emerald Knob */}
        <div
          className="pointer-events-none absolute top-0 bottom-0 w-0.5 bg-[#065F46] shadow-[0_0_10px_rgba(0,0,0,0.35)]"
          style={{
            left: `${pct}%`,
            transform: "translateX(-50%)",
            transition: isDragging || !isNudging ? "none" : "left 450ms cubic-bezier(.16,1,.3,1)",
          }}
        >
          <span className="absolute top-1/2 left-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#065F46] text-white shadow-xl ring-2 ring-white/90">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M5 3 2 8l3 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M11 3l3 5-3 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
}
