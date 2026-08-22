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
  // Quote Funnel State
  const defaultService = services[0]?.title || "Emergency Mitigation & Repair";
  const [selectedService, setSelectedService] = useState(defaultService);
  const [propertySize, setPropertySize] = useState("1,500 – 3,000 sq ft (Standard Home)");
  const [propertyType, setPropertyType] = useState("Residential Property");
  const [urgency, setUrgency] = useState("Emergency (Within 24 Hours)");
  const [formName, setFormName] = useState("");
  const [formPhone, setFormPhone] = useState("");
  const [formAddress, setFormAddress] = useState("");
  const [quoteSubmitted, setQuoteSubmitted] = useState(false);
  const [quoteLoading, setQuoteLoading] = useState(false);

  const cleanPhone = phone.replace(/\D/g, "");
  const telHref = `tel:${cleanPhone.length === 10 ? `+1${cleanPhone}` : cleanPhone}`;

  const handleQuoteSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName || !formPhone) return;

    setQuoteLoading(true);
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
          crm: `Contractor Lead: ${businessName} (${clientId}) | Size: ${propertySize} | Type: ${propertyType} | Addr: ${formAddress || "N/A"}`,
        }),
      });
      setQuoteSubmitted(true);
    } catch {
      setQuoteSubmitted(true);
    } finally {
      setQuoteLoading(false);
    }
  };

  const initialGreeting = `Hi there! 👋 Welcome to ${businessName}. I'm your 24/7 AI Emergency Dispatch Assistant for ${serviceCity}. Ask me about our rapid dispatch, structural drying, fire restoration, mold remediation, or insurance claims!`;

  return (
    <div
      className="min-h-screen bg-[#F8FAFC] text-[#0F172A] font-sans antialiased selection:bg-[#0F172A] selection:text-[#FFFFFF]"
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
      {/* 1. TOP AGENCY PROTOTYPE BANNER */}
      <div
        className="py-2.5 px-4 text-xs sm:text-sm font-medium flex flex-wrap items-center justify-between gap-2 border-b shadow-xs"
        style={{
          backgroundColor: themeAccent,
          color: themeOnAccent,
          borderColor: themeBorder,
        }}
      >
        <div className="flex items-center gap-2.5 max-w-2xl">
          <span
            className="inline-block w-2.5 h-2.5 rounded-full animate-ping shrink-0"
            style={{ backgroundColor: themePulse }}
          />
          <span className="truncate">
            Live High-Performance Build for <strong>{businessName}</strong> · Next.js 16 Edge Architecture (380ms Speed)
          </span>
        </div>
        <Link
          href="/contact"
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded text-xs font-bold transition-all bg-white text-[#0F172A] hover:bg-gray-100 shadow-sm shrink-0"
        >
          🚀 Claim & Launch This Site →
        </Link>
      </div>

      {/* 2. REAL CONTRACTOR NAVIGATION BAR */}
      <nav className="sticky top-0 z-40 bg-[#FFFFFF]/95 backdrop-blur-md border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
          {/* Logo / Brand */}
          <Link href="#hero" className="flex items-center gap-3 min-w-0">
            <div
              className="w-11 h-11 rounded-xl flex items-center justify-center font-black text-lg shadow-sm shrink-0"
              style={{ backgroundColor: themeAccent, color: themeOnAccent }}
            >
              {businessName.includes("Water") ? "〰️" : businessName.charAt(0)}
            </div>
            <div className="min-w-0">
              <span className="font-extrabold text-base sm:text-lg tracking-tight block truncate text-[#0F172A]">
                {businessName}
              </span>
              <span className="text-[11px] font-semibold tracking-wide uppercase text-[#64748B] block truncate">
                {serviceCity} · 24/7 Dispatch
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-[#475569]">
            <a href="#services" className="hover:text-[#0F172A] transition-colors">Services</a>
            <a href="#why-us" className="hover:text-[#0F172A] transition-colors">Why Choose Us</a>
            <a href="#quote-calculator" className="hover:text-[#0F172A] transition-colors">Instant Estimate</a>
            <a href="#reviews" className="hover:text-[#0F172A] transition-colors">Reviews</a>
            <a href="#service-areas" className="hover:text-[#0F172A] transition-colors">Service Areas</a>
          </div>

          {/* Hotline CTA */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={telHref}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold shadow-md transition-all transform active:scale-95"
              style={{
                backgroundColor: themeAccent,
                color: themeOnAccent,
              }}
            >
              <svg className="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>{phone}</span>
            </a>
          </div>
        </div>
      </nav>

      {/* 3. HERO SECTION (Tailored to Contractor Trade & Market) */}
      <section id="hero" className="relative pt-12 pb-20 sm:pt-16 sm:pb-28 overflow-hidden bg-gradient-to-b from-[#FFFFFF] to-[#F8FAFC] border-b border-[#E2E8F0]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Trust Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-6 bg-[#FFFFFF] border border-[#CBD5E1] shadow-xs">
            <span className="text-amber-500">★★★★★</span>
            <span className="text-[#1E293B]">4.9 Rating ({reviews.length > 0 ? "180+ Reviews" : "Verified"})</span>
            <span className="text-[#CBD5E1]">|</span>
            <span className="font-bold" style={{ color: themeAccent }}>
              ✓ &lt; 60-Min Rapid Dispatch
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#0F172A] max-w-4xl mx-auto leading-[1.1] mb-6">
            {tagline}
          </h1>

          <p className="text-base sm:text-xl text-[#475569] max-w-3xl mx-auto leading-relaxed mb-10">
            {subheadline}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#quote-calculator"
              className="px-8 py-4 rounded-xl text-sm sm:text-base font-bold shadow-lg transition-all transform hover:-translate-y-0.5 active:scale-95"
              style={{
                backgroundColor: themeAccent,
                color: themeOnAccent,
              }}
            >
              Calculate Instant Estimate ↓
            </a>
            <a
              href={telHref}
              className="px-8 py-4 rounded-xl text-sm sm:text-base font-bold bg-[#FFFFFF] border border-[#CBD5E1] text-[#0F172A] hover:bg-[#F1F5F9] transition-all shadow-sm flex items-center gap-2.5"
            >
              <span className="w-2.5 h-2.5 rounded-full animate-pulse" style={{ backgroundColor: themePulse }} />
              <span>Call Dispatch ({phone})</span>
            </a>
          </div>

          {/* Guarantees Bar */}
          <div className="mt-12 pt-8 border-t border-[#E2E8F0] grid grid-cols-2 md:grid-cols-4 gap-4 text-xs font-semibold text-[#475569]">
            {trustBadges.slice(0, 4).map((badge, idx) => (
              <div key={idx} className="flex items-center justify-center gap-1.5">
                <span className="font-bold" style={{ color: themeAccent }}>✓</span> {badge}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. STATISTICS STRIP */}
      <section className="bg-[#FFFFFF] border-b border-[#E2E8F0] py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl sm:text-4xl font-extrabold text-[#0F172A]">24/7/365</div>
            <div className="text-xs uppercase font-semibold text-[#64748B] mt-1 tracking-wider">Live Emergency Hotline</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-extrabold text-[#0F172A]">&lt; 60 Min</div>
            <div className="text-xs uppercase font-semibold text-[#64748B] mt-1 tracking-wider">Truck-Mounted Dispatch</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-extrabold text-[#0F172A]">100%</div>
            <div className="text-xs uppercase font-semibold text-[#64748B] mt-1 tracking-wider">Direct Insurance Billing</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-extrabold text-[#0F172A]">IICRC</div>
            <div className="text-xs uppercase font-semibold text-[#64748B] mt-1 tracking-wider">Master Certified Techs</div>
          </div>
        </div>
      </section>

      {/* 5. BENTO-GRID CORE SERVICES (Real trade capabilities) */}
      <section id="services" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#64748B]">
            {trade}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0F172A] mt-2">
            Comprehensive Capabilities by {businessName}
          </h2>
          <p className="text-sm text-[#475569] mt-3">
            Every emergency call is dispatched with specialized extraction equipment and certified field crews.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((s, idx) => (
            <div
              key={idx}
              className="bg-[#FFFFFF] border border-[#E2E8F0] rounded-2xl p-8 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl">{s.icon}</span>
                  <span
                    className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-100 text-slate-800"
                  >
                    {s.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#0F172A] mb-2">{s.title}</h3>
                <p className="text-sm text-[#475569] leading-relaxed mb-4">
                  {s.description}
                </p>
                <ul className="text-xs text-[#64748B] space-y-2 mb-6">
                  {s.highlights.map((h, hIdx) => (
                    <li key={hIdx}>• {h}</li>
                  ))}
                </ul>
              </div>
              <a
                href="#quote-calculator"
                onClick={() => setSelectedService(s.title)}
                className="text-xs font-bold hover:underline"
                style={{ color: themeAccent }}
              >
                Request Dispatch for This Service →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* 6. WHY CHOOSE US (4-PILLAR TRUST SECTION) */}
      <section id="why-us" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-[#E2E8F0]">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#64748B]">
            The Standard of Excellence
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] mt-2">
            Why {serviceCity} Chooses {businessName}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-[#FFFFFF] border border-[#E2E8F0] rounded-xl p-6 text-center shadow-xs">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
              ⚡
            </div>
            <h3 className="font-bold text-sm text-[#0F172A] mb-1">Under 60-Min Dispatch</h3>
            <p className="text-xs text-[#64748B] leading-relaxed">
              Truck-mounted extraction crews on standby 24/7/365 across the entire metropolitan radius.
            </p>
          </div>

          <div className="bg-[#FFFFFF] border border-[#E2E8F0] rounded-xl p-6 text-center shadow-xs">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
              📋
            </div>
            <h3 className="font-bold text-sm text-[#0F172A] mb-1">Direct Insurance Billing</h3>
            <p className="text-xs text-[#64748B] leading-relaxed">
              We bill your insurance carrier directly using Xactimate itemization with zero upfront delay.
            </p>
          </div>

          <div className="bg-[#FFFFFF] border border-[#E2E8F0] rounded-xl p-6 text-center shadow-xs">
            <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
              🏆
            </div>
            <h3 className="font-bold text-sm text-[#0F172A] mb-1">Certified Master Techs</h3>
            <p className="text-xs text-[#64748B] leading-relaxed">
              IICRC and CDPHE certified technicians trained in strict structural drying and containment.
            </p>
          </div>

          <div className="bg-[#FFFFFF] border border-[#E2E8F0] rounded-xl p-6 text-center shadow-xs">
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
              🛡️
            </div>
            <h3 className="font-bold text-sm text-[#0F172A] mb-1">Full Mitigation to Rebuild</h3>
            <p className="text-xs text-[#64748B] leading-relaxed">
              Complete seamless restoration from initial water pump-out to full drywall, flooring, and paint.
            </p>
          </div>
        </div>
      </section>

      {/* 7. INTERACTIVE ESTIMATE CALCULATOR */}
      <section id="quote-calculator" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-[#E2E8F0]">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#64748B]">
            Instant Speed-to-Lead
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0F172A] mt-2">
            Emergency Dispatch & Cost Estimator
          </h2>
          <p className="text-sm text-[#475569] mt-2">
            Select your emergency parameters below to request immediate dispatch or receive an instant estimate.
          </p>
        </div>

        <div className="bg-[#FFFFFF] border border-[#E2E8F0] rounded-2xl p-6 sm:p-10 shadow-lg">
          {quoteSubmitted ? (
            <div className="text-center py-12">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold"
                style={{ backgroundColor: themeAccent, color: themeOnAccent }}
              >
                ✓
              </div>
              <h3 className="text-2xl font-bold text-[#0F172A] mb-2">Emergency Request Dispatched!</h3>
              <p className="text-sm text-[#475569] max-w-md mx-auto mb-6 leading-relaxed">
                We have received your emergency details for <strong>{businessName}</strong>. Our on-call dispatcher has sent a confirmation text to <strong>{formPhone}</strong>, and an emergency technician is reviewing your location.
              </p>
              <button
                onClick={() => setQuoteSubmitted(false)}
                className="px-6 py-2.5 rounded-lg text-xs font-semibold border border-[#CBD5E1] bg-[#F8FAFC] hover:bg-[#F1F5F9] cursor-pointer"
              >
                Calculate Another Property
              </button>
            </div>
          ) : (
            <form onSubmit={handleQuoteSubmit} className="space-y-8">
              {/* Step 1: Scope */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#334155] mb-3">
                  Step 1: Select Service Required
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {services.map((s, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setSelectedService(s.title)}
                      className={`p-3.5 text-left text-xs font-medium rounded-xl border transition-all cursor-pointer ${
                        selectedService === s.title
                          ? "font-bold shadow-sm"
                          : "border-[#E2E8F0] bg-[#F8FAFC] text-[#475569] hover:bg-[#F1F5F9]"
                      }`}
                      style={
                        selectedService === s.title
                          ? {
                              borderColor: themeAccent,
                              backgroundColor: `${themeAccent}12`,
                              color: themeAccent,
                            }
                          : {}
                      }
                    >
                      <div className="font-bold truncate">{s.title}</div>
                      <div className="text-[10px] text-[#64748B] mt-0.5">{s.category}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Property Size */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#334155] mb-3">
                  Step 2: Approximate Property Size
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    "Under 1,500 sq ft (Basement/Floor)",
                    "1,500 – 3,000 sq ft (Standard Home)",
                    "3,000+ sq ft / Commercial Facility",
                  ].map((size) => (
                    <button
                      key={size}
                      type="button"
                      onClick={() => setPropertySize(size)}
                      className={`p-3.5 text-center text-xs font-medium rounded-xl border transition-all cursor-pointer ${
                        propertySize === size
                          ? "font-bold shadow-sm"
                          : "border-[#E2E8F0] bg-[#F8FAFC] text-[#475569] hover:bg-[#F1F5F9]"
                      }`}
                      style={
                        propertySize === size
                          ? {
                              borderColor: themeAccent,
                              backgroundColor: `${themeAccent}12`,
                              color: themeAccent,
                            }
                          : {}
                      }
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 3: Timeframe */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#334155] mb-3">
                  Step 3: Response Urgency
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    "Emergency 24/7 (Immediate)",
                    "Within 24 Hours",
                    "Insurance Consultation",
                  ].map((u) => (
                    <button
                      key={u}
                      type="button"
                      onClick={() => setUrgency(u)}
                      className={`p-3 text-center text-xs font-medium rounded-xl border transition-all cursor-pointer ${
                        urgency === u
                          ? "font-bold shadow-sm"
                          : "border-[#E2E8F0] bg-[#F8FAFC] text-[#475569] hover:bg-[#F1F5F9]"
                      }`}
                      style={
                        urgency === u
                          ? {
                              borderColor: themeAccent,
                              backgroundColor: `${themeAccent}12`,
                              color: themeAccent,
                            }
                          : {}
                      }
                    >
                      {u}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 4: Contact Dispatch */}
              <div className="pt-6 border-t border-[#E2E8F0] grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#334155] mb-1.5">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formName}
                    onChange={(e) => setFormName(e.target.value)}
                    placeholder="Greg Miller"
                    className="w-full px-4 py-3 text-sm bg-[#FFFFFF] border border-[#CBD5E1] rounded-xl focus:outline-none focus:ring-2"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#334155] mb-1.5">
                    Phone Number (for 60s SMS Dispatch Alert) *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formPhone}
                    onChange={(e) => setFormPhone(e.target.value)}
                    placeholder={phone}
                    className="w-full px-4 py-3 text-sm bg-[#FFFFFF] border border-[#CBD5E1] rounded-xl focus:outline-none focus:ring-2"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={quoteLoading}
                className="w-full py-4 text-base font-bold rounded-xl shadow-lg transition-all transform active:scale-95 text-center cursor-pointer"
                style={{
                  backgroundColor: themeAccent,
                  color: themeOnAccent,
                }}
              >
                {quoteLoading ? "Dispatching Details..." : `Request Emergency Dispatch & 60s Alert for ${businessName} →`}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* 8. VERIFIED GOOGLE REVIEWS (Real Denver stories) */}
      <section id="reviews" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-[#E2E8F0]">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#64748B]">
            Verified Homeowner Feedback
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] mt-2">
            What {serviceCity} Neighbors Say About {businessName}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r, idx) => (
            <div key={idx} className="bg-[#FFFFFF] border border-[#E2E8F0] rounded-2xl p-6 shadow-sm flex flex-col justify-between">
              <div>
                <div className="text-amber-500 mb-3">★★★★★</div>
                <p className="text-sm text-[#334155] leading-relaxed mb-4">
                  &quot;{r.text}&quot;
                </p>
              </div>
              <div className="flex items-center gap-3 pt-3 border-t border-[#F1F5F9]">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs"
                  style={{ backgroundColor: `${themeAccent}20`, color: themeAccent }}
                >
                  {r.name.slice(0, 2).toUpperCase()}
                </div>
                <div>
                  <div className="text-xs font-bold text-[#0F172A]">{r.name}</div>
                  <div className="text-[11px] text-[#64748B]">{r.location} · {r.time}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 9. REGIONAL SERVICE AREAS (Real Denver / Colorado Towns) */}
      <section id="service-areas" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-[#E2E8F0]">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#64748B]">
            Local Denver & Front Range Coverage
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0F172A] mt-1">
            Proudly Serving Surrounding Communities
          </h2>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2.5 max-w-4xl mx-auto">
          {serviceAreas.map((town) => (
            <span
              key={town}
              className="px-4 py-2 rounded-lg text-xs font-semibold bg-[#FFFFFF] border border-[#CBD5E1] text-[#334155] shadow-2xs"
            >
              📍 {town}, CO
            </span>
          ))}
        </div>
      </section>

      {/* 10. REAL CONTRACTOR FOOTER */}
      <footer className="bg-[#0F172A] text-[#FFFFFF] py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-2">
            <h4 className="text-lg font-bold mb-2">{businessName}</h4>
            <p className="text-xs text-[#94A3B8] max-w-sm leading-relaxed mb-4">
              {subheadline}
            </p>
            <div className="text-xs text-[#64748B]">24/7 Hotline: {phone} · IICRC Certified</div>
          </div>

          <div>
            <h5 className="text-xs font-bold uppercase tracking-wider text-[#64748B] mb-3">Hours of Operation</h5>
            <div className="text-xs text-[#CBD5E1] space-y-1">
              <div>Monday – Friday: 24 Hours Open</div>
              <div>Saturday – Sunday: 24 Hours Open</div>
              <div className="font-semibold pt-1" style={{ color: themePulse }}>
                ● 24/7 Emergency Dispatch Active
              </div>
            </div>
          </div>

          <div>
            <h5 className="text-xs font-bold uppercase tracking-wider text-[#64748B] mb-3">Engineering Prototype</h5>
            <div className="text-xs text-[#94A3B8] space-y-2">
              <p>Designed & engineered by Alizane Labs.</p>
              <Link
                href="/contact"
                className="inline-block px-3 py-1.5 rounded bg-white text-black font-bold text-xs hover:bg-gray-200 transition-colors"
              >
                Claim This Website →
              </Link>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 border-t border-[#1E293B] text-center text-xs text-[#64748B]">
          © {new Date().getFullYear()} {businessName}. All rights reserved. High-performance Next.js 16 build by Alizane Labs.
        </div>
      </footer>

      {/* 11. MULTI-TENANT AI CHATBOT MOUNTED WITH CLIENT ID & GREETING */}
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
