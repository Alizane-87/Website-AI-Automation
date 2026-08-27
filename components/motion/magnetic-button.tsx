"use client";

import React, { useRef, useState, useCallback } from "react";

interface MagneticButtonProps {
  href?: string;
  label?: string;
  subheading?: string;
  title?: string;
  tag?: string;
}

export function MagneticButton({
  href = "/",
  label = "Explore Live Main Site",
  title = "Magnetic Button Attraction",
  subheading = "Hover near the button to feel it pull toward your cursor with spring-damped physics.",
  tag = "Device 05 · magnet & spotlight",
}: MagneticButtonProps) {
  const ctaRef = useRef<HTMLAnchorElement>(null);
  const [ctaOffset, setCtaOffset] = useState({ x: 0, y: 0 });
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!ctaRef.current) return;
    const rect = ctaRef.current.getBoundingClientRect();
    const cX = rect.left + rect.width / 2;
    const cY = rect.top + rect.height / 2;
    const dX = e.clientX - cX;
    const dY = e.clientY - cY;
    const dist = Math.sqrt(dX * dX + dY * dY);

    if (dist < 180) setCtaOffset({ x: dX * 0.32, y: dY * 0.32 });
    else setCtaOffset({ x: 0, y: 0 });

    const containerRect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: ((e.clientX - containerRect.left) / containerRect.width) * 100,
      y: ((e.clientY - containerRect.top) / containerRect.height) * 100,
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setCtaOffset({ x: 0, y: 0 });
  }, []);

  return (
    <section
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative py-32 sm:py-44 px-6 sm:px-16 overflow-hidden bg-[#07090C]"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-40 transition-opacity duration-300"
        style={{
          background: `radial-gradient(400px circle at ${mousePos.x}% ${mousePos.y}%, rgba(16, 185, 129, 0.25), transparent 70%)`,
        }}
      />
      <div className="relative mx-auto max-w-4xl text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-950/80 px-3.5 py-1 text-xs font-mono text-emerald-300 mb-6">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="uppercase tracking-widest text-[11px] font-semibold">{tag}</span>
        </div>
        <h2 className="font-serif text-3xl sm:text-5xl text-white">{title}</h2>
        <p className="mt-4 text-sm sm:text-base text-gray-400 max-w-lg mx-auto">{subheading}</p>
        <div className="mt-10 flex items-center justify-center">
          <a
            ref={ctaRef}
            href={href}
            style={{
              transform: `translate3d(${ctaOffset.x.toFixed(2)}px, ${ctaOffset.y.toFixed(2)}px, 0)`,
              transition: "transform 120ms cubic-bezier(0.23, 1, 0.32, 1)",
            }}
            className="relative inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-[#065F46] to-[#059669] px-8 py-4 font-mono text-sm font-semibold text-white shadow-[0_0_25px_rgba(5,150,105,0.4)] hover:shadow-[0_0_40px_rgba(5,150,105,0.7)] active:scale-95 cursor-pointer"
          >
            <span>{label}</span>
            <span className="text-emerald-200">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
