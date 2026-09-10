"use client";

import React from "react";
import Link from "next/link";

export function HeroSection() {
  const handleOpenChat = (e: React.MouseEvent) => {
    e.preventDefault();
    window.dispatchEvent(new CustomEvent("alizane:open-chat"));
  };

  return (
    <section className="relative overflow-hidden pt-16 pb-24 sm:pt-24 sm:pb-32 border-b border-[#E7E5E4] bg-[#F9F9F7]">
      {/* Architectural Dot Grid with Radial Falloff */}
      <div
        className="pointer-events-none absolute inset-0 bg-dot-grid opacity-60"
        style={{
          maskImage: "radial-gradient(ellipse 75% 75% at 50% 30%, black 40%, transparent 85%)",
          WebkitMaskImage: "radial-gradient(ellipse 75% 75% at 50% 30%, black 40%, transparent 85%)",
        }}
      />

      {/* Soft Ambient Emerald Atmosphere */}
      <div
        className="pointer-events-none absolute right-1/4 -top-32 h-[560px] w-[560px] rounded-full opacity-[0.06] blur-3xl"
        style={{
          background: "radial-gradient(circle, #059669 0%, transparent 70%)",
        }}
      />
      <div
        className="pointer-events-none absolute left-0 top-1/2 h-[420px] w-[420px] rounded-full opacity-[0.035] blur-3xl"
        style={{
          background: "radial-gradient(circle, #065F46 0%, transparent 70%)",
        }}
      />

      {/* SVG Flow Graphic: Call/Message -> AI Answers & Qualifies -> Booked / Handed to Team */}
      <div className="pointer-events-none absolute right-6 top-14 hidden h-[440px] w-[440px] opacity-90 lg:block xl:right-16 select-none transition-transform duration-700 hover:scale-[1.02]">
        <svg viewBox="0 0 400 420" fill="none" className="h-full w-full">
          {/* Subtle Ambient Glow Behind AI Node */}
          <circle cx="320" cy="180" r="60" fill="#ECFDF5" opacity="0.6" />

          {/* Circuit Interconnect Paths */}
          <path
            d="M 60 90 L 220 90 L 320 180 L 320 250 L 220 330 L 60 330"
            stroke="#E7E5E4"
            strokeWidth="1.5"
            strokeDasharray="4 4"
          />
          <path
            d="M 220 90 L 320 180 L 220 330"
            stroke="#A7F3D0"
            strokeWidth="1.5"
          />

          {/* Node 01: Call or Message Comes In */}
          <rect x="30" y="68" width="52" height="44" rx="8" fill="#FFFFFF" stroke="#E7E5E4" strokeWidth="1" />
          <circle cx="56" cy="90" r="5" fill="#ECFDF5" stroke="#059669" strokeWidth="1.5" />
          <text x="94" y="86" fontFamily="monospace" fontSize="10" fill="#111827" fontWeight="600">01 · CALL OR MESSAGE</text>
          <text x="94" y="101" fontFamily="monospace" fontSize="9" fill="#78716C">Inbound signal arrives</text>

          {/* Node 02: AI Answers & Qualifies with Radar Ping Ring */}
          <rect x="294" y="158" width="52" height="44" rx="8" fill="#FFFFFF" stroke="#065F46" strokeWidth="1.5" />
          <circle cx="320" cy="180" r="18" stroke="#059669" strokeWidth="1" opacity="0.4">
            <animate attributeName="r" values="12;26;12" dur="3s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.6;0;0.6" dur="3s" repeatCount="indefinite" />
          </circle>
          <text x="308" y="185" fontFamily="monospace" fontSize="10" fill="#065F46" fontWeight="bold">02</text>
          <text x="278" y="176" fontFamily="monospace" fontSize="10" fill="#111827" fontWeight="600" textAnchor="end">AI ANSWERS &amp; QUALIFIES</text>
          <text x="278" y="191" fontFamily="monospace" fontSize="9" fill="#065F46" textAnchor="end">Immediate 24/7 triage</text>

          {/* Node 03: Handed to Team via Instant Alert */}
          <rect x="30" y="308" width="52" height="44" rx="8" fill="#064E3B" stroke="#064E3B" strokeWidth="1" />
          <circle cx="56" cy="330" r="4" fill="#34D399" />
          <text x="94" y="326" fontFamily="monospace" fontSize="10" fill="#065F46" fontWeight="600">03 · INSTANT TEAM ALERT</text>
          <text x="94" y="341" fontFamily="monospace" fontSize="9" fill="#78716C">Lead sent directly to you</text>

          {/* Continuous Animated Data Particles */}
          <circle r="4.5" fill="#065F46">
            <animateMotion
              path="M 60 90 L 220 90 L 320 180 L 320 250 L 220 330 L 60 330"
              dur="6.5s"
              repeatCount="indefinite"
            />
          </circle>

          <circle r="3.5" fill="#059669" opacity="0.9">
            <animateMotion
              path="M 60 330 L 220 330 L 320 250 L 320 180 L 220 90 L 60 90"
              dur="8.5s"
              repeatCount="indefinite"
            />
          </circle>
        </svg>
      </div>

      {/* Main Content Area with Staggered Reveals */}
      <div className="relative z-10 mx-auto max-w-5xl px-6" data-reveal>
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#A7F3D0] bg-[#ECFDF5] px-3.5 py-1 text-xs font-mono text-[#065F46] shadow-xs">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#34D399] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#059669]" />
            </span>
            <span className="uppercase tracking-widest text-[11px] font-semibold">
              AI Automation
            </span>
          </div>

          <h1 className="mt-6 font-serif text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.12] tracking-tight text-[#111827]">
            The customers you lose don&apos;t look like lost customers. They just look like a quiet month.
          </h1>

          <p className="mt-6 text-base sm:text-lg leading-relaxed text-[#57534E] max-w-xl">
            A missed call becomes a call to the next company. A message that goes unanswered just goes cold. Alizane Labs builds AI automation that catches what falls through — installed on the number and website you already have.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="/pricing#start"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-md bg-[#065F46] px-6 py-3.5 text-sm font-medium text-white shadow-xs transition-all duration-200 hover:bg-[#064E3B] hover:shadow-md active:scale-98"
            >
              <span>Start your automation plan</span>
              <span className="transition-transform duration-200 group-hover:translate-x-0.5">→</span>
            </Link>
            <a
              href="#products"
              className="inline-flex items-center rounded-md border border-[#D6D3D1] bg-white px-5 py-3.5 text-sm font-medium text-[#111827] shadow-2xs transition-all duration-200 hover:border-[#111827] hover:bg-[#F9F9F7]"
            >
              See our products
            </a>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-6 text-xs font-mono text-[#78716C]">
            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[#059669]" />
              No new website required
            </span>
            <button
              type="button"
              onClick={handleOpenChat}
              className="flex items-center gap-1.5 text-[#065F46] hover:underline font-medium cursor-pointer"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#059669] animate-pulse" />
              Chat is live on this page — try it →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

