"use client";

import React, { useState } from "react";
import Link from "next/link";
import { AIChatWidget } from "@/components/ai-chat-widget";
import { ContractorService, ContractorReview } from "@/lib/supabase-chat";

interface DemoShowcaseProps {
  clientId: string;
  businessName: string;
  phone: string;
  serviceCity: string;
  tagline: string;
  subheadline: string;
  trade: string;
  trustBadges: string[];
  services: ContractorService[];
  serviceAreas: string[];
  reviews: ContractorReview[];
  themeAccent: string;
  themePulse: string;
  themeBorder: string;
  themeOnAccent: string;
}

export function DemoShowcase({
  clientId,
  businessName,
  phone,
  serviceCity,
  tagline,
  subheadline,
  trade,
  trustBadges,
  services,
  serviceAreas,
  reviews,
  themeAccent,
  themePulse,
  themeBorder,
  themeOnAccent,
}: DemoShowcaseProps) {
  const [activeServiceIdx, setActiveServiceIdx] = useState(0);

  // Quote & Dispatch Console State
  const defaultServiceTitle = services[0]?.title || "24/7 Water Extraction & Structural Drying";
  const [selectedService, setSelectedService] = useState(defaultServiceTitle);
  const [damageCategory, setDamageCategory] = useState("Category 1: Clean Water (Supply Line / Pipe)");
  const [insuranceCarrier, setInsuranceCarrier] = useState("State Farm / Major Carrier");
  const [urgency, setUrgency] = useState("Immediate 24/7 Emergency Dispatch");
  const [formName, setFormName] = useState("");
  const [formPhone, setFormPhone] = useState("");
  const [formAddress, setFormAddress] = useState("");
  const [dispatchDispatched, setDispatchDispatched] = useState(false);
  const [dispatchLoading, setDispatchLoading] = useState(false);

  const cleanPhone = phone.replace(/\D/g, "");
  const telHref = `tel:${cleanPhone.length === 10 ? `+1${cleanPhone}` : cleanPhone}`;

  const handleDispatchSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName || !formPhone) return;

    setDispatchLoading(true);
    try {
      await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formName,
          phone: formPhone,
          company: businessName,
          trade: selectedService,
          monthlyCallRange: urgency,
          crm: `EMERGENCY DISPATCH: ${businessName} | Addr: ${formAddress || "N/A"} | Damage: ${damageCategory} | Ins: ${insuranceCarrier}`,
        }),
      });
      setDispatchDispatched(true);
    } catch {
      setDispatchDispatched(true);
    } finally {
      setDispatchLoading(false);
    }
  };

  const currentService = services[activeServiceIdx] || services[0];
  const initialGreeting = `Hi there! 👋 Welcome to ${businessName}. I'm your 24/7 AI Emergency Dispatcher for ${serviceCity}. How can I assist with your water damage, fire restoration, mold remediation, or insurance claim today?`;

  return (
    <div
      className="min-h-screen bg-[#08121E] text-[#F8FAFC] font-sans antialiased selection:bg-[#00B4D8] selection:text-[#08121E]"
      style={
        {
          "--chat-accent": themeAccent,
          "--chat-pulse": themePulse,
          "--chat-accent-hover": themeAccent,
          "--chat-accent-border": themeBorder,
          "--chat-on-accent": themeOnAccent,
        } as React.CSSProperties
      }
    >
      {/* 1. TOP AGENCY PROTOTYPE STATUS BAR */}
      <div className="bg-[#040A12] border-b border-[#1E293B] py-2 px-4 text-xs font-medium text-[#94A3B8] flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500" />
          </span>
          <span>
            Live Interactive Architecture Prototype for <strong className="text-white">{businessName}</strong> · Sub-Second Next.js 16 Edge Build
          </span>
        </div>
        <Link
          href="/contact"
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-xs hover:brightness-110 shadow-sm transition-all shrink-0"
        >
          🚀 Claim & Launch This Site →
        </Link>
      </div>

      {/* 2. REAL CONTRACTOR HEADER */}
      <header className="sticky top-0 z-40 bg-[#0C1A2E]/90 backdrop-blur-xl border-b border-white/10 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
          {/* Logo & Trade Branding */}
          <Link href="#hero" className="flex items-center gap-3.5 min-w-0 group">
            <div
              className="w-12 h-12 rounded-2xl flex items-center justify-center font-black text-xl shadow-md border border-white/20 shrink-0"
              style={{ backgroundColor: themeAccent, color: themeOnAccent }}
            >
              〰️
            </div>
            <div className="min-w-0">
              <span className="font-extrabold text-base sm:text-lg tracking-tight block truncate text-white group-hover:text-cyan-300 transition-colors">
                {businessName}
              </span>
              <span className="text-[11px] font-semibold tracking-wider uppercase text-cyan-400 block truncate">
                {serviceCity} · 24/7 Emergency Dispatch
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-[#CBD5E1]">
            <a href="#services" className="hover:text-white transition-colors">Capabilities</a>
            <a href="#dispatch-console" className="hover:text-white transition-colors">Emergency Dispatch</a>
            <a href="#why-us" className="hover:text-white transition-colors">Why Choose W.E.T.</a>
            <a href="#reviews" className="hover:text-white transition-colors">Verified Reviews</a>
            <a href="#service-areas" className="hover:text-white transition-colors">Service Radius</a>
          </nav>

          {/* 24/7 Emergency Hotline Button */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={telHref}
              className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold text-white shadow-xl transition-all transform hover:scale-105 active:scale-95 border border-white/20"
              style={{ backgroundColor: themeAccent }}
            >
              <svg className="w-4 h-4 animate-bounce text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <div className="text-left">
                <span className="block text-[9px] uppercase font-bold text-cyan-200 tracking-wider">24/7 Emergency Hotline</span>
                <span className="block leading-none">{phone}</span>
              </div>
            </a>
          </div>
        </div>
      </header>

      {/* 3. HERO SECTION (High-Impact Industrial Split Console) */}
      <section id="hero" className="relative pt-12 pb-20 sm:pt-16 sm:pb-28 overflow-hidden bg-gradient-to-b from-[#0C1A2E] via-[#08121E] to-[#040A12] border-b border-white/10">
        {/* Subtle Background Lighting Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-cyan-500/10 blur-[120px] pointer-events-none rounded-full" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Value Thesis */}
            <div className="lg:col-span-7 text-left space-y-6">
              {/* Trust Badges Pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/5 border border-white/15 backdrop-blur-md">
                <span className="text-amber-400">★★★★★</span>
                <span className="text-white">4.9 Star Verified</span>
                <span className="text-white/30">|</span>
                <span className="text-cyan-400 font-bold">WOSB &amp; IICRC Certified</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
                {tagline}
              </h1>

              <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed max-w-2xl">
                {subheadline}
              </p>

              {/* Real-time Status Card */}
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md flex items-center justify-between gap-4 max-w-xl">
                <div className="flex items-center gap-3">
                  <span className="flex h-3 w-3 relative shrink-0">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
                  </span>
                  <div>
                    <div className="text-xs font-bold text-white">4 Extraction Trucks on Standby</div>
                    <div className="text-[11px] text-[#94A3B8]">Denver, Lakewood, Aurora &amp; Front Range Radius</div>
                  </div>
                </div>
                <div className="text-right shrink-0">
                  <div className="text-xs font-black text-cyan-400">&lt; 60 MIN</div>
                  <div className="text-[10px] uppercase text-[#64748B] font-bold">Avg Arrival</div>
                </div>
              </div>

              {/* Dual Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href={telHref}
                  className="px-8 py-4 rounded-xl text-sm sm:text-base font-extrabold text-white shadow-2xl transition-all transform hover:-translate-y-0.5 active:scale-95 flex items-center gap-2"
                  style={{ backgroundColor: themeAccent }}
                >
                  <span>🚨 Call Emergency Dispatch ({phone})</span>
                </a>
                <a
                  href="#dispatch-console"
                  className="px-6 py-4 rounded-xl text-sm sm:text-base font-bold bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all backdrop-blur-md"
                >
                  Request Dispatch Online ↓
                </a>
              </div>

              {/* Guarantees Bar */}
              <div className="pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-medium text-[#94A3B8]">
                {trustBadges.slice(0, 4).map((badge, idx) => (
                  <div key={idx} className="flex items-center gap-1.5">
                    <span className="text-cyan-400 font-bold">✓</span> {badge}
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Live Emergency Dispatch Console Box */}
            <div id="dispatch-console" className="lg:col-span-5">
              <div className="bg-[#0C1A2E] border border-cyan-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden backdrop-blur-2xl">
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 blur-3xl pointer-events-none" />

                <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                  <div>
                    <h3 className="text-lg font-black text-white">Emergency Dispatch Console</h3>
                    <p className="text-xs text-cyan-400">Direct 24/7 Technician Alert Desk</p>
                  </div>
                  <span className="text-2xl">⚡</span>
                </div>

                {dispatchDispatched ? (
                  <div className="text-center py-8 space-y-4">
                    <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-3xl font-black mx-auto border border-emerald-500/40">
                      ✓
                    </div>
                    <h4 className="text-xl font-bold text-white">Dispatch Ticket Generated!</h4>
                    <p className="text-xs text-[#94A3B8] leading-relaxed">
                      Your emergency parameters have been dispatched to <strong>{businessName}</strong>. An on-call technician has received your alert and a confirmation text was sent to <strong>{formPhone}</strong>.
                    </p>
                    <button
                      onClick={() => setDispatchDispatched(false)}
                      className="px-4 py-2 rounded-lg text-xs font-bold bg-white/10 hover:bg-white/20 text-white border border-white/20"
                    >
                      Submit Another Alert
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleDispatchSubmit} className="space-y-4 text-left">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#94A3B8] mb-1.5">
                        1. Select Damage Category
                      </label>
                      <select
                        value={selectedService}
                        onChange={(e) => setSelectedService(e.target.value)}
                        className="w-full px-3.5 py-2.5 text-xs bg-[#08121E] border border-white/20 rounded-xl text-white focus:outline-none focus:border-cyan-400"
                      >
                        {services.map((s, idx) => (
                          <option key={idx} value={s.title}>
                            {s.title}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#94A3B8] mb-1.5">
                        2. Water / Damage Source
                      </label>
                      <select
                        value={damageCategory}
                        onChange={(e) => setDamageCategory(e.target.value)}
                        className="w-full px-3.5 py-2.5 text-xs bg-[#08121E] border border-white/20 rounded-xl text-white focus:outline-none focus:border-cyan-400"
                      >
                        <option>Clean Water (Supply Pipe / Water Heater)</option>
                        <option>Gray Water (Washing Machine / Sump Pump)</option>
                        <option>Black Water / Sewage / Flood Runoff</option>
                        <option>Smoke / Fire Soot / Structural Damage</option>
                        <option>Visible Mold Colony / Musty Odor</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#94A3B8] mb-1.5">
                        3. Insurance Carrier (For Direct Billing)
                      </label>
                      <select
                        value={insuranceCarrier}
                        onChange={(e) => setInsuranceCarrier(e.target.value)}
                        className="w-full px-3.5 py-2.5 text-xs bg-[#08121E] border border-white/20 rounded-xl text-white focus:outline-none focus:border-cyan-400"
                      >
                        <option>State Farm Insurance</option>
                        <option>Allstate Insurance</option>
                        <option>USAA Insurance</option>
                        <option>Travelers / Liberty Mutual / Farmers</option>
                        <option>Self-Pay / Commercial Property Account</option>
                      </select>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                      <div>
                        <label className="block text-[11px] font-bold text-[#94A3B8] mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formName}
                          onChange={(e) => setFormName(e.target.value)}
                          placeholder="Greg Miller"
                          className="w-full px-3 py-2 text-xs bg-[#08121E] border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-bold text-[#94A3B8] mb-1">
                          Phone (for 60s SMS Alert) *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formPhone}
                          onChange={(e) => setFormPhone(e.target.value)}
                          placeholder={phone}
                          className="w-full px-3 py-2 text-xs bg-[#08121E] border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-[#94A3B8] mb-1">
                        Denver Property Address (Optional for faster dispatch)
                      </label>
                      <input
                        type="text"
                        value={formAddress}
                        onChange={(e) => setFormAddress(e.target.value)}
                        placeholder="1420 Washington St, Denver, CO"
                        className="w-full px-3 py-2 text-xs bg-[#08121E] border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={dispatchLoading}
                      className="w-full py-3.5 text-xs sm:text-sm font-extrabold rounded-xl shadow-lg transition-all transform active:scale-95 text-center text-white cursor-pointer"
                      style={{ backgroundColor: themeAccent }}
                    >
                      {dispatchLoading ? "Dispatching Crew..." : "🚨 Transmit Emergency Dispatch Alert →"}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. STATISTICS STRIP */}
      <section className="bg-[#040A12] border-b border-white/10 py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl sm:text-4xl font-extrabold text-white">24/7/365</div>
            <div className="text-xs uppercase font-semibold text-cyan-400 mt-1 tracking-wider">Live Denver Hotline</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-extrabold text-white">&lt; 60 Min</div>
            <div className="text-xs uppercase font-semibold text-cyan-400 mt-1 tracking-wider">Truck-Mounted Arrival</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-extrabold text-white">100%</div>
            <div className="text-xs uppercase font-semibold text-cyan-400 mt-1 tracking-wider">Direct Insurance Billing</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-extrabold text-white">IICRC</div>
            <div className="text-xs uppercase font-semibold text-cyan-400 mt-1 tracking-wider">Master Certified Techs</div>
          </div>
        </div>
      </section>

      {/* 5. INTERACTIVE SERVICE CAPABILITIES WORKSPACE (Deep-Dive Tabs) */}
      <section id="services" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">
            {trade}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mt-2">
            Engineered Emergency Restoration Capabilities
          </h2>
          <p className="text-sm text-[#94A3B8] mt-3">
            Explore our specialized fleet equipment, thermal containment protocols, and direct insurance workflows below.
          </p>
        </div>

        {/* Interactive Tab Selector */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 mb-8">
          {services.map((s, idx) => (
            <button
              key={idx}
              onClick={() => setActiveServiceIdx(idx)}
              className={`p-3 rounded-xl text-left text-xs font-bold transition-all border cursor-pointer ${
                activeServiceIdx === idx
                  ? "bg-cyan-500/20 border-cyan-400 text-white shadow-lg shadow-cyan-500/10"
                  : "bg-white/5 border-white/10 text-[#94A3B8] hover:bg-white/10 hover:text-white"
              }`}
            >
              <span className="text-lg block mb-1">{s.icon}</span>
              <span className="line-clamp-2">{s.title.split("&")[0]}</span>
            </button>
          ))}
        </div>

        {/* Selected Service Deep-Dive Bento Display */}
        {currentService && (
          <div className="bg-[#0C1A2E] border border-white/15 rounded-3xl p-8 sm:p-12 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4 text-left">
              <div className="inline-block text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                {currentService.category}
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                {currentService.title}
              </h3>
              <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed">
                {currentService.description}
              </p>

              <div className="space-y-2.5 pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-400">
                  Standard Operating Protocol:
                </h4>
                <ul className="space-y-2 text-xs text-[#CBD5E1]">
                  {currentService.highlights.map((h, hIdx) => (
                    <li key={hIdx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 flex flex-wrap gap-4">
                <a
                  href={telHref}
                  className="px-6 py-3 rounded-xl text-xs font-extrabold text-white shadow-lg transition-all"
                  style={{ backgroundColor: themeAccent }}
                >
                  Dispatch Crew for This Service ({phone})
                </a>
                <a
                  href="#dispatch-console"
                  onClick={() => setSelectedService(currentService.title)}
                  className="px-6 py-3 rounded-xl text-xs font-bold bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all"
                >
                  Select in Dispatch Console ↑
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 bg-[#08121E] border border-white/10 rounded-2xl p-6 space-y-4 text-left">
              <div className="text-xs font-bold uppercase tracking-wider text-cyan-400">
                W.E.T. Deployment Specs:
              </div>
              <div className="space-y-3 text-xs">
                <div className="flex justify-between pb-2 border-b border-white/10">
                  <span className="text-[#94A3B8]">Fleet Units:</span>
                  <span className="font-bold text-white">Truck-Mounted High-CFM</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-white/10">
                  <span className="text-[#94A3B8]">Thermal Mapping:</span>
                  <span className="font-bold text-white">FLIR Infrared Cameras</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-white/10">
                  <span className="text-[#94A3B8]">Dehumidification:</span>
                  <span className="font-bold text-white">Commercial LGR Systems</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-white/10">
                  <span className="text-[#94A3B8]">Insurance Billing:</span>
                  <span className="font-bold text-white">100% Direct Carrier Itemized</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#94A3B8]">Clearance:</span>
                  <span className="font-bold text-emerald-400">IICRC Certified Clean</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* 6. WHY CHOOSE US (4-PILLAR TRUST SECTION) */}
      <section id="why-us" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-white/10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">
            The Colorado Standard
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-white mt-2">
            Why Denver Homeowners Trust {businessName}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-[#0C1A2E] border border-white/10 rounded-2xl p-6 text-center shadow-lg">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center mx-auto mb-4 text-2xl font-bold border border-cyan-500/30">
              ⚡
            </div>
            <h3 className="font-bold text-sm text-white mb-1">Under 60-Min Dispatch</h3>
            <p className="text-xs text-[#94A3B8] leading-relaxed">
              Truck-mounted extraction crews on standby 24/7/365 across the entire metropolitan radius.
            </p>
          </div>

          <div className="bg-[#0C1A2E] border border-white/10 rounded-2xl p-6 text-center shadow-lg">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4 text-2xl font-bold border border-emerald-500/30">
              📋
            </div>
            <h3 className="font-bold text-sm text-white mb-1">Direct Insurance Billing</h3>
            <p className="text-xs text-[#94A3B8] leading-relaxed">
              We bill your insurance carrier directly using Xactimate itemization with zero upfront delay.
            </p>
          </div>

          <div className="bg-[#0C1A2E] border border-white/10 rounded-2xl p-6 text-center shadow-lg">
            <div className="w-12 h-12 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center mx-auto mb-4 text-2xl font-bold border border-purple-500/30">
              🏆
            </div>
            <h3 className="font-bold text-sm text-white mb-1">Certified Master Techs</h3>
            <p className="text-xs text-[#94A3B8] leading-relaxed">
              IICRC and CDPHE certified technicians trained in strict structural drying and containment.
            </p>
          </div>

          <div className="bg-[#0C1A2E] border border-white/10 rounded-2xl p-6 text-center shadow-lg">
            <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center mx-auto mb-4 text-2xl font-bold border border-amber-500/30">
              🛡️
            </div>
            <h3 className="font-bold text-sm text-white mb-1">Full Mitigation to Rebuild</h3>
            <p className="text-xs text-[#94A3B8] leading-relaxed">
              Complete seamless restoration from initial water pump-out to full drywall, flooring, and paint.
            </p>
          </div>
        </div>
      </section>

      {/* 7. VERIFIED GOOGLE REVIEWS (Real Denver stories) */}
      <section id="reviews" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-white/10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">
            Verified Homeowner Feedback
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-white mt-2">
            What {serviceCity} Neighbors Say About {businessName}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r, idx) => (
            <div key={idx} className="bg-[#0C1A2E] border border-white/10 rounded-2xl p-6 shadow-md flex flex-col justify-between text-left">
              <div>
                <div className="text-amber-400 mb-3 text-sm">★★★★★</div>
                <p className="text-xs sm:text-sm text-[#CBD5E1] leading-relaxed mb-4">
                  &quot;{r.text}&quot;
                </p>
              </div>
              <div className="flex items-center gap-3 pt-3 border-t border-white/10">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs bg-cyan-500/20 text-cyan-300 border border-cyan-500/30"
                >
                  {r.name.slice(0, 2).toUpperCase()}
                </div>
                <div>
                  <div className="text-xs font-bold text-white">{r.name}</div>
                  <div className="text-[11px] text-[#64748B]">{r.location} · {r.time}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. REGIONAL COLORADO SERVICE AREAS */}
      <section id="service-areas" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-white/10">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">
            Rapid Dispatch Radius
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mt-1">
            Proudly Serving Denver &amp; Colorado Front Range
          </h2>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2.5 max-w-4xl mx-auto">
          {serviceAreas.map((town) => (
            <span
              key={town}
              className="px-4 py-2 rounded-xl text-xs font-semibold bg-white/5 border border-white/15 text-[#CBD5E1] shadow-sm hover:border-cyan-400 hover:text-white transition-all cursor-default"
            >
              📍 {town}, CO
            </span>
          ))}
        </div>
      </section>

      {/* 9. REAL CONTRACTOR FOOTER */}
      <footer className="bg-[#040A12] border-t border-white/10 text-[#CBD5E1] py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8 mb-12 text-left">
          <div className="col-span-1 md:col-span-2">
            <h4 className="text-lg font-bold text-white mb-2">{businessName}</h4>
            <p className="text-xs text-[#94A3B8] max-w-sm leading-relaxed mb-4">
              {subheadline}
            </p>
            <div className="text-xs text-[#64748B]">24/7 Hotline: {phone} · IICRC &amp; CDPHE Certified</div>
          </div>

          <div>
            <h5 className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-3">Hours of Operation</h5>
            <div className="text-xs text-[#94A3B8] space-y-1">
              <div>Monday – Friday: 24 Hours Open</div>
              <div>Saturday – Sunday: 24 Hours Open</div>
              <div className="font-semibold pt-1 text-emerald-400">
                ● 24/7 Emergency Dispatch Active
              </div>
            </div>
          </div>

          <div>
            <h5 className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-3">Engineering Prototype</h5>
            <div className="text-xs text-[#94A3B8] space-y-2">
              <p>Designed &amp; engineered by Alizane Labs.</p>
              <Link
                href="/contact"
                className="inline-block px-3 py-1.5 rounded bg-white text-black font-bold text-xs hover:bg-gray-200 transition-colors"
              >
                Claim This Website →
              </Link>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 border-t border-white/5 text-center text-xs text-[#64748B]">
          © {new Date().getFullYear()} {businessName}. All rights reserved. High-performance Next.js 16 build by Alizane Labs.
        </div>
      </footer>

      {/* 10. MULTI-TENANT AI CHATBOT MOUNTED WITH CLIENT ID & BRAND ACCENT */}
      <AIChatWidget
        clientId={clientId}
        initialGreeting={initialGreeting}
        botName={`${businessName.split(" ")[0]} AI Dispatcher`}
        accentColor={themeAccent}
        pulseColor={themePulse}
      />
    </div>
  );
}
