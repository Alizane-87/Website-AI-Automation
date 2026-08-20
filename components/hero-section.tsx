"use client";

import React from "react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-16 pb-24 sm:pt-24 sm:pb-32 border-b border-[#E7E5E4] bg-[#F9F9F7]">
      {/* Soft Ambient Emerald Depth Light */}
      <div
        className="pointer-events-none absolute right-1/4 -top-32 h-[520px] w-[520px] rounded-full opacity-[0.045] blur-3xl"
        style={{
          background: "radial-gradient(circle, #059669 0%, transparent 70%)",
        }}
      />
      <div
        className="pointer-events-none absolute left-0 top-1/2 h-[380px] w-[380px] rounded-full opacity-[0.03] blur-3xl"
        style={{
          background: "radial-gradient(circle, #D97706 0%, transparent 70%)",
        }}
      />

      {/* Concept A Connected SVG Circuit Graphic (Palette 2: Sovereign Emerald) */}
      <div className="pointer-events-none absolute right-6 top-14 hidden h-[420px] w-[420px] opacity-90 lg:block xl:right-16">
        <svg viewBox="0 0 400 420" fill="none" className="h-full w-full">
          {/* Circuit Interconnect Paths */}
          <path
            d="M 60 90 L 220 90 L 320 180 L 320 250 L 220 330 L 60 330"
            stroke="#E7E5E4"
            strokeWidth="1.5"
            strokeDasharray="4 4"
          />
          <path
            d="M 220 90 L 320 180 L 220 330"
            stroke="#E7E5E4"
            strokeWidth="1.5"
          />

          {/* Node 01: Website Visit */}
          <rect x="30" y="68" width="52" height="44" rx="8" fill="#FFFFFF" stroke="#E7E5E4" strokeWidth="1" />
          <circle cx="56" cy="90" r="5" fill="#ECFDF5" stroke="#059669" strokeWidth="1.5" />
          <text x="94" y="86" fontFamily="monospace" fontSize="11" fill="#111827" fontWeight="600">01 · WEBSITE VISIT</text>
          <text x="94" y="101" fontFamily="monospace" fontSize="9" fill="#78716C">Visitor arrives &amp; engages</text>

          {/* Node 02: Chat AI Employee */}
          <rect x="294" y="158" width="52" height="44" rx="8" fill="#FFFFFF" stroke="#065F46" strokeWidth="1.5" />
          <text x="308" y="185" fontFamily="monospace" fontSize="10" fill="#065F46" fontWeight="bold">02</text>
          <text x="278" y="176" fontFamily="monospace" fontSize="11" fill="#111827" fontWeight="600" textAnchor="end">CHAT AI EMPLOYEE</text>
          <text x="278" y="191" fontFamily="monospace" fontSize="9" fill="#065F46" textAnchor="end">Answers &amp; qualifies 24/7</text>

          {/* Node 03: Book Appointment */}
          <rect x="30" y="308" width="52" height="44" rx="8" fill="#064E3B" stroke="#064E3B" strokeWidth="1" />
          <circle cx="56" cy="330" r="4" fill="#34D399" />
          <text x="94" y="326" fontFamily="monospace" fontSize="11" fill="#065F46" fontWeight="600">03 · BOOK APPOINTMENT</text>
          <text x="94" y="341" fontFamily="monospace" fontSize="9" fill="#78716C">Direct calendar sync &amp; won</text>

          {/* Continuous Animated Data Particles */}
          <circle r="4" fill="#065F46">
            <animateMotion
              path="M 60 90 L 220 90 L 320 180 L 320 250 L 220 330 L 60 330"
              dur="7s"
              repeatCount="indefinite"
            />
          </circle>

          <circle r="3.5" fill="#D97706" opacity="0.9">
            <animateMotion
              path="M 60 330 L 220 330 L 320 250 L 320 180 L 220 90 L 60 90"
              dur="9s"
              repeatCount="indefinite"
            />
          </circle>
        </svg>
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 mx-auto max-w-5xl px-6">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#A7F3D0] bg-[#ECFDF5] px-3.5 py-1 text-xs font-mono text-[#065F46] shadow-xs">
            <span className="h-1.5 w-1.5 rounded-full bg-[#059669] animate-pulse" />
            <span className="uppercase tracking-widest text-[11px] font-semibold">
              Websites · AI Employees · Automation
            </span>
          </div>

          <h1 className="mt-6 font-serif text-4xl sm:text-6xl lg:text-7xl font-normal leading-[1.08] tracking-tight text-[#111827]">
            Websites for local businesses, built and looked after for you.
          </h1>

          <p className="mt-6 text-lg sm:text-xl leading-relaxed text-[#57534E] max-w-xl">
            We build fast, high-converting websites and equip them with intelligent AI chat employees that qualify visitors and book appointments 24/7.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#price"
              className="inline-flex items-center rounded-md bg-[#065F46] px-6 py-3.5 text-sm font-medium text-white shadow-xs transition-all hover:bg-[#064E3B] hover:shadow-sm active:scale-98"
            >
              See the plans →
            </a>
            <a
              href="#why"
              className="inline-flex items-center rounded-md border border-[#D6D3D1] bg-white px-5 py-3.5 text-sm font-medium text-[#111827] transition-colors hover:border-[#111827]"
            >
              Why us
            </a>
          </div>

          <div className="mt-12 flex items-center gap-6 text-xs font-mono text-[#78716C]">
            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[#059669]" />
              Sub-second edge speed
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[#D97706]" />
              AI Chat triage active
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
