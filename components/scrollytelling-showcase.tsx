"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";

export function ScrollytellingShowcase() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const railRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Measure and translate horizontal rail based on vertical scroll
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (!sectionRef.current || !railRef.current) {
            ticking = false;
            return;
          }

          const section = sectionRef.current;
          const rail = railRef.current;
          const rect = section.getBoundingClientRect();
          const totalTravel = section.offsetHeight - window.innerHeight;

          if (totalTravel > 0) {
            const rawProgress = -rect.top / totalTravel;
            const progress = Math.min(1, Math.max(0, rawProgress));
            setScrollProgress(progress);

            const overflow = rail.scrollWidth - window.innerWidth + 120; // 120px end breathing room
            if (overflow > 0) {
              rail.style.transform = `translate3d(${-overflow * progress}px, 0, 0)`;
            }
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  // 3D Tilt handler for cards
  const handleCardMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    const rotateX = -(y / (rect.height / 2)) * 6; // max 6 deg
    const rotateY = (x / (rect.width / 2)) * 6;
    card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg)`;
  }, []);

  const handleCardMouseLeave = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg)";
  }, []);

  return (
    <section
      ref={sectionRef}
      id="showcase"
      className="relative bg-[#0A0D10] text-white"
      style={{ height: "320vh" }}
    >
      {/* Pinned Viewport Stage */}
      <div className="sticky top-0 flex h-screen w-full items-center overflow-hidden">
        {/* Subtle Background Architectural Grid */}
        <div
          className="pointer-events-none absolute inset-0 bg-dot-grid opacity-20"
          style={{
            maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 90%)",
            WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 90%)",
          }}
        />

        {/* Top Floating Status Chrome */}
        <div className="absolute top-6 left-6 right-6 z-30 mx-auto flex max-w-6xl items-center justify-between pointer-events-none">
          <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1 text-xs font-mono backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-[#34D399] animate-pulse" />
            <span className="uppercase tracking-widest text-[11px] text-emerald-400 font-medium">
              ScrollCraft Pan Rail · $4,500 System
            </span>
          </div>

          <div className="flex items-center gap-3 font-mono text-xs text-gray-400">
            <span className="hidden sm:inline">Pan Progress:</span>
            <div className="h-1.5 w-24 sm:w-32 overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full bg-gradient-to-r from-[#065F46] via-[#059669] to-[#34D399] transition-all duration-75"
                style={{ width: `${Math.round(scrollProgress * 100)}%` }}
              />
            </div>
            <span className="w-8 font-semibold text-emerald-400">
              {Math.round(scrollProgress * 100)}%
            </span>
          </div>
        </div>

        {/* Horizontal Moving Panoramic Rail */}
        <div
          ref={railRef}
          className="flex flex-row items-center gap-8 pl-8 sm:pl-16 pr-32 will-change-transform transition-transform duration-75 ease-out"
        >
          {/* LEAD CARD: INTRODUCTION */}
          <div className="w-[320px] sm:w-[420px] shrink-0 pr-4">
            <span className="font-mono text-xs uppercase tracking-widest text-emerald-400 font-semibold">
              The Lead-to-Cash Pipeline
            </span>
            <h2 className="mt-4 font-serif text-3xl sm:text-5xl text-white leading-tight">
              How the Alizane Engine converts search traffic into booked revenue.
            </h2>
            <p className="mt-4 text-sm sm:text-base text-gray-300 leading-relaxed">
              Scroll down to pan through the 4 automated pillars that turn mobile visitors into paying clients.
            </p>
            <div className="mt-8 flex items-center gap-3 text-xs font-mono text-emerald-400/90">
              <span className="animate-pulse">Scroll to pan horizontally</span>
              <svg className="h-4 w-4 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </div>

          {/* CARD 01: SUB-SECOND DIGITAL STOREFRONT */}
          <div
            onMouseMove={handleCardMouseMove}
            onMouseLeave={handleCardMouseLeave}
            className="w-[340px] sm:w-[440px] shrink-0 rounded-2xl border border-white/10 bg-[#12161C]/90 p-6 sm:p-8 backdrop-blur-md shadow-2xl transition-transform duration-200"
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <span className="rounded bg-emerald-950/80 border border-emerald-500/30 px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider text-emerald-400 font-semibold">
                Pillar 01 · First 3 Seconds
              </span>
              <span className="font-mono text-xs text-gray-400">280ms Edge</span>
            </div>

            <h3 className="mt-5 font-serif text-2xl text-white">
              Instant Sub-Second Impression
            </h3>
            <p className="mt-2.5 text-xs sm:text-sm text-gray-300 leading-relaxed">
              While slow WordPress sites take 6+ seconds and lose 70% of traffic, your Alizane storefront loads in 280ms with prominent tap-to-call.
            </p>

            <div className="mt-5 rounded-xl border border-white/10 bg-black/40 p-4">
              <div className="flex items-center justify-between text-[11px] font-mono text-emerald-400">
                <span>⚡ CDN EDGE VERIFIED</span>
                <span>100/100 Core Vitals</span>
              </div>
              <div className="mt-2 text-sm font-semibold text-white">Apex Heating &amp; Cooling</div>
              <div className="mt-3 flex items-center justify-between rounded-md bg-[#065F46] p-2.5 text-xs text-white">
                <span className="font-mono font-semibold">(303) 232-8888</span>
                <span className="text-[10px] text-emerald-200">Tap to Call</span>
              </div>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3 border-t border-white/10 pt-4 text-center">
              <div className="rounded bg-white/5 p-2 font-mono text-xs">
                <div className="text-gray-400 text-[10px]">Bounce Rate</div>
                <div className="text-emerald-400 font-semibold mt-0.5">-65%</div>
              </div>
              <div className="rounded bg-white/5 p-2 font-mono text-xs">
                <div className="text-gray-400 text-[10px]">Lighthouse</div>
                <div className="text-emerald-400 font-semibold mt-0.5">100/100</div>
              </div>
            </div>
          </div>

          {/* CARD 02: 24/7 AI EMPLOYEE QUALIFICATION */}
          <div
            onMouseMove={handleCardMouseMove}
            onMouseLeave={handleCardMouseLeave}
            className="w-[340px] sm:w-[440px] shrink-0 rounded-2xl border border-white/10 bg-[#12161C]/90 p-6 sm:p-8 backdrop-blur-md shadow-2xl transition-transform duration-200"
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <span className="rounded bg-emerald-950/80 border border-emerald-500/30 px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider text-emerald-400 font-semibold">
                Pillar 02 · Triage
              </span>
              <span className="font-mono text-xs text-gray-400">3.8s Speed-to-Lead</span>
            </div>

            <h3 className="mt-5 font-serif text-2xl text-white">
              24/7 AI Employee Triage
            </h3>
            <p className="mt-2.5 text-xs sm:text-sm text-gray-300 leading-relaxed">
              Never let leads sit overnight in an inbox. Your AI receptionist answers in 4 seconds, qualifies project scope, and locks the meeting window.
            </p>

            <div className="mt-5 rounded-xl border border-white/10 bg-black/40 p-4 space-y-2 text-xs">
              <div className="rounded-lg bg-white/10 p-2.5 text-gray-200">
                <span className="text-[10px] text-gray-400 font-mono block mb-1">Customer (10:42 PM)</span>
                We need a consultation on replacing our commercial rooftop heat pump.
              </div>
              <div className="rounded-lg bg-[#065F46] p-2.5 text-white">
                <span className="text-[10px] text-emerald-200 font-mono block mb-1">Apex AI Assistant (3.8s)</span>
                I can schedule a technician to review the property. Would Thursday at 10:00 AM work?
              </div>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3 border-t border-white/10 pt-4 text-center">
              <div className="rounded bg-white/5 p-2 font-mono text-xs">
                <div className="text-gray-400 text-[10px]">Lead Capture</div>
                <div className="text-emerald-400 font-semibold mt-0.5">100%</div>
              </div>
              <div className="rounded bg-white/5 p-2 font-mono text-xs">
                <div className="text-gray-400 text-[10px]">Missed Deals</div>
                <div className="text-emerald-400 font-semibold mt-0.5">Zero</div>
              </div>
            </div>
          </div>

          {/* CARD 03: INSTANT CALENDAR DISPATCH */}
          <div
            onMouseMove={handleCardMouseMove}
            onMouseLeave={handleCardMouseLeave}
            className="w-[340px] sm:w-[440px] shrink-0 rounded-2xl border border-white/10 bg-[#12161C]/90 p-6 sm:p-8 backdrop-blur-md shadow-2xl transition-transform duration-200"
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <span className="rounded bg-emerald-950/80 border border-emerald-500/30 px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider text-emerald-400 font-semibold">
                Pillar 03 · Dispatch
              </span>
              <span className="font-mono text-xs text-gray-400">&lt; 5s SMS</span>
            </div>

            <h3 className="mt-5 font-serif text-2xl text-white">
              Calendar Sync &amp; SMS Alerts
            </h3>
            <p className="mt-2.5 text-xs sm:text-sm text-gray-300 leading-relaxed">
              Bookings sync directly to Google and Outlook calendars. An instant text alert hits the technician&apos;s phone with address and project details.
            </p>

            <div className="mt-5 rounded-xl border border-emerald-500/30 bg-emerald-950/40 p-4 font-mono text-xs text-emerald-300">
              <div className="flex items-center justify-between text-[11px]">
                <span className="font-semibold">🚨 NEW BOOKING DISPATCH</span>
                <span>Thursday 10 AM</span>
              </div>
              <p className="mt-2 font-sans text-xs text-gray-200">
                <strong>Project:</strong> Commercial Heat Pump Consultation<br />
                <strong>Client:</strong> Jennifer K. · (303) 555-0192<br />
                <strong>Address:</strong> 4191 Inca St, Denver, CO
              </p>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3 border-t border-white/10 pt-4 text-center">
              <div className="rounded bg-white/5 p-2 font-mono text-xs">
                <div className="text-gray-400 text-[10px]">Calendar Sync</div>
                <div className="text-emerald-400 font-semibold mt-0.5">Instant</div>
              </div>
              <div className="rounded bg-white/5 p-2 font-mono text-xs">
                <div className="text-gray-400 text-[10px]">Booking Rate</div>
                <div className="text-emerald-400 font-semibold mt-0.5">+45%</div>
              </div>
            </div>
          </div>

          {/* CARD 04: 21-DAY REVENUE & REPUTATION LOOP */}
          <div
            onMouseMove={handleCardMouseMove}
            onMouseLeave={handleCardMouseLeave}
            className="w-[340px] sm:w-[440px] shrink-0 rounded-2xl border border-white/10 bg-[#12161C]/90 p-6 sm:p-8 backdrop-blur-md shadow-2xl transition-transform duration-200"
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <span className="rounded bg-emerald-950/80 border border-emerald-500/30 px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider text-emerald-400 font-semibold">
                Pillar 04 · Growth
              </span>
              <span className="font-mono text-xs text-gray-400">Automated SMS</span>
            </div>

            <h3 className="mt-5 font-serif text-2xl text-white">
              21-Day Follow-Up &amp; Reviews
            </h3>
            <p className="mt-2.5 text-xs sm:text-sm text-gray-300 leading-relaxed">
              Automated multi-touch SMS check-ins win back pending proposals. Post-service review requests route happy clients directly to Google Maps.
            </p>

            <div className="mt-5 rounded-xl border border-white/10 bg-black/40 p-4 space-y-2 text-xs">
              <div className="rounded bg-emerald-950/60 border border-emerald-500/30 p-2.5 text-emerald-300">
                <span className="font-semibold block text-[11px]">Quote Won ($4,200)</span>
                Day 5 check-in approved by client.
              </div>
              <div className="rounded bg-white/5 p-2.5 text-gray-300 italic text-[11px]">
                &quot;Seamless communication, punctual tech, and honest pricing.&quot; — 5.0 ★
              </div>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3 border-t border-white/10 pt-4 text-center">
              <div className="rounded bg-white/5 p-2 font-mono text-xs">
                <div className="text-gray-400 text-[10px]">Quotes Won</div>
                <div className="text-emerald-400 font-semibold mt-0.5">+14%</div>
              </div>
              <div className="rounded bg-white/5 p-2 font-mono text-xs">
                <div className="text-gray-400 text-[10px]">Google Rating</div>
                <div className="text-emerald-400 font-semibold mt-0.5">4.9 ★</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
