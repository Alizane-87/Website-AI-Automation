"use client";

import React, { useRef, useState, useEffect } from "react";

const TIMELINE_STEPS = [
  {
    time: "09:14:00 PM",
    badge: "INCIDENT OCCURS",
    title: "Homeowner experiences emergency failure",
    desc: "A freezing basement or blown commercial HVAC at night. The homeowner calls the first 3 contractors on Google.",
    icon: "📞",
  },
  {
    time: "09:14:04 PM",
    badge: "SUB-SECOND TRIAGE",
    title: "Alizane AI answers on first ring",
    desc: "Greets the customer by business name, asks address, verifies emergency severity, and calculates rough estimate range.",
    icon: "⚡",
  },
  {
    time: "09:15:20 PM",
    badge: "CALENDAR LOCKED",
    title: "Appointment synchronized to dispatch",
    desc: "Customer selects 08:30 AM arrival window. Real-time SMS ticket dispatched to contractor lead technician with Google Maps pin.",
    icon: "📅",
  },
  {
    time: "NEXT MORNING",
    badge: "REPUTATION LOOP",
    title: "$4,200 ticket closed & 5★ Google Review",
    desc: "Job is executed. Polite 21-day follow-up loop triggers an automatic review request, cementing local SEO dominance.",
    icon: "⭐",
  },
];

export function TimeStampedPipeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const vh = window.innerHeight;
      const p = Math.min(1, Math.max(0, (vh - rect.top) / (rect.height + vh)));
      setActiveIdx(Math.min(TIMELINE_STEPS.length - 1, Math.floor(p * TIMELINE_STEPS.length)));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={containerRef} className="border-b border-white/10 py-24 px-6 sm:px-16 bg-[#090C0F] text-[#F4F2EF]">
      <div className="mx-auto max-w-4xl space-y-12">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-950/80 px-3.5 py-1 text-xs font-mono text-emerald-300">
            <span>Story 01 · Time-Stamped 24h Pipeline</span>
          </div>
          <h2 className="mt-4 font-serif text-3xl sm:text-5xl text-white">
            The 9:14 PM Emergency Revenue Journey
          </h2>
        </div>

        <div className="relative border-l border-emerald-500/30 ml-4 sm:ml-32 space-y-12 pl-6 sm:pl-10">
          {TIMELINE_STEPS.map((step, idx) => (
            <div key={idx} className="relative">
              {/* Timeline Time Badge on Left */}
              <div className="hidden sm:block absolute -left-44 top-0 font-mono text-xs text-emerald-400 font-semibold">
                {step.time}
              </div>

              {/* Pulsing Node */}
              <div
                className={`absolute -left-[31px] sm:-left-[47px] top-1.5 h-3.5 w-3.5 rounded-full border-2 transition-all ${
                  idx <= activeIdx
                    ? "border-emerald-400 bg-emerald-400 shadow-[0_0_12px_#34D399]"
                    : "border-gray-600 bg-black"
                }`}
              />

              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm space-y-2">
                <div className="flex items-center gap-2 font-mono text-[10px] text-emerald-300">
                  <span className="sm:hidden font-semibold">{step.time} ·</span>
                  <span className="rounded bg-emerald-950/80 px-2 py-0.5 border border-emerald-500/30">{step.badge}</span>
                </div>
                <h3 className="font-serif text-xl text-white flex items-center gap-2">
                  <span>{step.icon}</span>
                  <span>{step.title}</span>
                </h3>
                <p className="text-xs sm:text-sm text-gray-400">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
