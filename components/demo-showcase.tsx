"use client";

import React, { useState } from "react";
import Link from "next/link";
import { AIChatWidget } from "@/components/ai-chat-widget";
import { BeforeAfterSlider } from "@/components/before-after-slider";

interface DemoShowcaseProps {
  clientId: string;
  businessName: string;
  themeAccent: string;
  themePulse: string;
  themeBorder: string;
  themeOnAccent: string;
}

export function DemoShowcase({
  clientId,
  businessName,
  themeAccent,
  themePulse,
  themeBorder,
  themeOnAccent,
}: DemoShowcaseProps) {
  // Quote Funnel State
  const [selectedService, setSelectedService] = useState("Full System Replacement & Installation");
  const [propertySize, setPropertySize] = useState("1,500 – 3,000 sq ft (Standard Home)");
  const [propertyType, setPropertyType] = useState("Residential Property");
  const [urgency, setUrgency] = useState("Emergency (Within 24 Hours)");
  const [formName, setFormName] = useState("");
  const [formPhone, setFormPhone] = useState("");
  const [formAddress, setFormAddress] = useState("");
  const [quoteSubmitted, setQuoteSubmitted] = useState(false);
  const [quoteLoading, setQuoteLoading] = useState(false);

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
          crm: `Demo Lead: ${clientId} | Size: ${propertySize} | Type: ${propertyType} | Addr: ${formAddress || "N/A"}`,
        }),
      });
      setQuoteSubmitted(true);
    } catch {
      setQuoteSubmitted(true);
    } finally {
      setQuoteLoading(false);
    }
  };

  const initialGreeting = `Hi there! 👋 Welcome to ${businessName}. I'm your 24/7 AI assistant. Ask me about our services, pricing estimates, emergency response, or schedule an inspection!`;

  return (
    <div
      className="min-h-screen bg-[#FBFBFA] text-[#111111] font-sans antialiased selection:bg-[#111111] selection:text-[#FFFFFF]"
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
        className="py-2.5 px-4 text-xs sm:text-sm font-medium flex flex-wrap items-center justify-between gap-2 border-b"
        style={{
          backgroundColor: themeAccent,
          color: themeOnAccent,
          borderColor: themeBorder,
        }}
      >
        <div className="flex items-center gap-2 max-w-2xl">
          <span
            className="inline-block w-2.5 h-2.5 rounded-full animate-ping"
            style={{ backgroundColor: themePulse }}
          />
          <span className="truncate">
            Live Prototype for <strong>{businessName}</strong> · Next.js 16 Edge Architecture (380ms Speed)
          </span>
        </div>
        <Link
          href="/contact"
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded text-xs font-bold transition-all bg-white text-[#111111] hover:bg-gray-100 shadow-sm shrink-0"
        >
          🚀 Claim & Launch This Site →
        </Link>
      </div>

      {/* 2. REAL CONTRACTOR NAVIGATION BAR */}
      <nav className="sticky top-0 z-40 bg-[#FFFFFF]/90 backdrop-blur-md border-b border-[#EAEAEA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
          {/* Logo / Brand */}
          <Link href="#hero" className="flex items-center gap-2.5 min-w-0">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center font-black text-lg shadow-sm shrink-0"
              style={{ backgroundColor: themeAccent, color: themeOnAccent }}
            >
              {businessName.charAt(0)}
            </div>
            <div className="min-w-0">
              <span className="font-bold text-base sm:text-lg tracking-tight block truncate text-[#111111]">
                {businessName}
              </span>
              <span className="text-[11px] font-medium tracking-wide uppercase text-[#777777] block">
                Licensed · Insured · 24/7 Dispatch
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-[#444444]">
            <a href="#services" className="hover:text-[#111111] transition-colors">Services</a>
            <a href="#projects" className="hover:text-[#111111] transition-colors">Projects</a>
            <a href="#quote-calculator" className="hover:text-[#111111] transition-colors">Quote Estimator</a>
            <a href="#reviews" className="hover:text-[#111111] transition-colors">Reviews</a>
            <a href="#service-areas" className="hover:text-[#111111] transition-colors">Service Areas</a>
          </div>

          {/* Hotline CTA */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="tel:+18005550199"
              className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-bold shadow-sm transition-all transform active:scale-95"
              style={{
                backgroundColor: themeAccent,
                color: themeOnAccent,
              }}
            >
              <svg className="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>(555) 019-2834</span>
            </a>
          </div>
        </div>
      </nav>

      {/* 3. HERO SECTION */}
      <section id="hero" className="relative pt-12 pb-20 sm:pt-16 sm:pb-28 overflow-hidden bg-gradient-to-b from-[#FFFFFF] to-[#FBFBFA] border-b border-[#EAEAEA]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Trust Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-6 bg-[#FFFFFF] border border-[#E5E7EB] shadow-sm">
            <span className="text-amber-500">★★★★★</span>
            <span className="text-[#333333]">4.9 Rating (180+ Verified Reviews)</span>
            <span className="text-[#CCCCCC]">|</span>
            <span className="text-[#065F46] font-bold">✓ 60-Min Emergency Response</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#111111] max-w-4xl mx-auto leading-[1.1] mb-6">
            Expert Craftsmanship & Fast 24/7 Service For Your Property.
          </h1>

          <p className="text-base sm:text-xl text-[#555555] max-w-2xl mx-auto leading-relaxed mb-10">
            From emergency repairs to complete system replacements, <strong>{businessName}</strong> delivers upfront flat-rate pricing, master-certified technicians, and guaranteed workmanship.
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
              href="tel:+18005550199"
              className="px-8 py-4 rounded-xl text-sm sm:text-base font-bold bg-[#FFFFFF] border border-[#D1D5DB] text-[#111111] hover:bg-[#F3F4F6] transition-all shadow-sm flex items-center gap-2"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>Call Dispatch (24/7 Live)</span>
            </a>
          </div>

          {/* Guarantees Bar */}
          <div className="mt-12 pt-8 border-t border-[#EAEAEA] grid grid-cols-2 md:grid-cols-4 gap-4 text-xs font-semibold text-[#666666]">
            <div className="flex items-center justify-center gap-1.5">
              <span className="text-emerald-600 font-bold">✓</span> Upfront Flat-Rate Pricing
            </div>
            <div className="flex items-center justify-center gap-1.5">
              <span className="text-emerald-600 font-bold">✓</span> 100% Workmanship Guarantee
            </div>
            <div className="flex items-center justify-center gap-1.5">
              <span className="text-emerald-600 font-bold">✓</span> Background-Checked Techs
            </div>
            <div className="flex items-center justify-center gap-1.5">
              <span className="text-emerald-600 font-bold">✓</span> Zero Hidden After-Hours Fees
            </div>
          </div>
        </div>
      </section>

      {/* 4. STATISTICS STRIP */}
      <section className="bg-[#FFFFFF] border-b border-[#EAEAEA] py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl sm:text-4xl font-extrabold text-[#111111]">15+</div>
            <div className="text-xs uppercase font-semibold text-[#777777] mt-1 tracking-wider">Years Serving Community</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-extrabold text-[#111111]">3,400+</div>
            <div className="text-xs uppercase font-semibold text-[#777777] mt-1 tracking-wider">Completed Projects</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-extrabold text-[#111111]">&lt; 60 Min</div>
            <div className="text-xs uppercase font-semibold text-[#777777] mt-1 tracking-wider">Emergency Dispatch</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-extrabold text-[#111111]">100%</div>
            <div className="text-xs uppercase font-semibold text-[#777777] mt-1 tracking-wider">Satisfaction Warranty</div>
          </div>
        </div>
      </section>

      {/* 5. BENTO-GRID CORE SERVICES */}
      <section id="services" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#777777]">
            Complete Trade Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#111111] mt-2">
            Comprehensive Services by Master Technicians
          </h2>
          <p className="text-sm text-[#666666] mt-3">
            Every project is backed by our full warranty, transparent pricing, and rigorous quality inspection.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-[#FFFFFF] border border-[#EAEAEA] rounded-2xl p-8 hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl">⚡</span>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-red-100 text-red-700">
                  24/7 Emergency
                </span>
              </div>
              <h3 className="text-xl font-bold text-[#111111] mb-2">Emergency Repair & Containment</h3>
              <p className="text-sm text-[#666666] leading-relaxed mb-4">
                Immediate dispatch for urgent property emergencies, storm damage, burst systems, or electrical failures.
              </p>
              <ul className="text-xs text-[#555555] space-y-2 mb-6">
                <li>• Under 60-minute dispatch window</li>
                <li>• Real-time technician location tracking</li>
                <li>• Full damage assessment & documentation</li>
              </ul>
            </div>
            <a href="#quote-calculator" className="text-xs font-bold text-[#111111] hover:underline">
              Request Emergency Tech →
            </a>
          </div>

          {/* Card 2 */}
          <div className="bg-[#FFFFFF] border border-[#EAEAEA] rounded-2xl p-8 hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl">🏗️</span>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-blue-100 text-blue-700">
                  Full Replacement
                </span>
              </div>
              <h3 className="text-xl font-bold text-[#111111] mb-2">Complete System Overhaul</h3>
              <p className="text-sm text-[#666666] leading-relaxed mb-4">
                High-efficiency installations designed for maximum longevity, energy savings, and optimal performance.
              </p>
              <ul className="text-xs text-[#555555] space-y-2 mb-6">
                <li>• 10-year parts & labor warranty</li>
                <li>• Flexible 0% interest financing options</li>
                <li>• Free on-site engineering calculation</li>
              </ul>
            </div>
            <a href="#quote-calculator" className="text-xs font-bold text-[#111111] hover:underline">
              Calculate Replacement Cost →
            </a>
          </div>

          {/* Card 3 */}
          <div className="bg-[#FFFFFF] border border-[#EAEAEA] rounded-2xl p-8 hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl">🔍</span>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-700">
                  Fixed First Visit
                </span>
              </div>
              <h3 className="text-xl font-bold text-[#111111] mb-2">Diagnostics & Safety Audit</h3>
              <p className="text-sm text-[#666666] leading-relaxed mb-4">
                State-of-the-art camera and sensor inspections to pinpoint hidden leaks, wear points, and structural risks.
              </p>
              <ul className="text-xs text-[#555555] space-y-2 mb-6">
                <li>• Comprehensive 32-point inspection report</li>
                <li>• Transparent photo & video evidence</li>
                <li>• Clear flat-rate pricing before work begins</li>
              </ul>
            </div>
            <a href="#quote-calculator" className="text-xs font-bold text-[#111111] hover:underline">
              Book Inspection →
            </a>
          </div>
        </div>
      </section>

      {/* 6. BEFORE & AFTER SHOWCASE */}
      <section id="projects" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-[#EAEAEA]">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#777777]">
            Proven Results
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-[#111111] mt-2">
            Before & After Project Transformation
          </h2>
          <p className="text-sm text-[#666666] mt-2">
            Slide horizontally to see the quality of our field installations and restorative craftsmanship.
          </p>
        </div>

        <div className="bg-[#FFFFFF] border border-[#EAEAEA] rounded-2xl p-4 sm:p-8 shadow-sm">
          <BeforeAfterSlider />
        </div>
      </section>

      {/* 7. INTERACTIVE QUOTE ESTIMATOR FUNNEL */}
      <section id="quote-calculator" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#777777]">
            Instant Speed-to-Lead
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#111111] mt-2">
            Interactive Project Cost Calculator
          </h2>
          <p className="text-sm text-[#666666] mt-2">
            Configure your project parameters below to get an immediate estimate and fast SMS confirmation.
          </p>
        </div>

        <div className="bg-[#FFFFFF] border border-[#EAEAEA] rounded-2xl p-6 sm:p-10 shadow-lg">
          {quoteSubmitted ? (
            <div className="text-center py-12">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold"
                style={{ backgroundColor: themeAccent, color: themeOnAccent }}
              >
                ✓
              </div>
              <h3 className="text-2xl font-bold text-[#111111] mb-2">Estimate Request Dispatched!</h3>
              <p className="text-sm text-[#666666] max-w-md mx-auto mb-6 leading-relaxed">
                We have received your estimate parameters for <strong>{businessName}</strong>. Our automated system has sent a confirmation text to <strong>{formPhone}</strong>, and an on-call estimator is reviewing your specs.
              </p>
              <button
                onClick={() => setQuoteSubmitted(false)}
                className="px-6 py-2.5 rounded-lg text-xs font-semibold border border-[#D1D5DB] bg-[#FAFAFA] hover:bg-[#F3F4F6]"
              >
                Calculate Another Project
              </button>
            </div>
          ) : (
            <form onSubmit={handleQuoteSubmit} className="space-y-8">
              {/* Step 1: Scope */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#444444] mb-3">
                  Step 1: Select Scope of Work
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    "Full System Replacement & Installation",
                    "Emergency Inspection & Rapid Repair",
                    "Routine Preventative Maintenance",
                  ].map((service) => (
                    <button
                      key={service}
                      type="button"
                      onClick={() => setSelectedService(service)}
                      className={`p-4 text-left text-xs font-medium rounded-xl border transition-all ${
                        selectedService === service
                          ? "font-bold shadow-sm"
                          : "border-[#E5E7EB] bg-[#FAFAFA] text-[#555555] hover:bg-[#F3F4F6]"
                      }`}
                      style={
                        selectedService === service
                          ? {
                              borderColor: themeAccent,
                              backgroundColor: `${themeAccent}12`,
                              color: themeAccent,
                            }
                          : {}
                      }
                    >
                      {service}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Property Size */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#444444] mb-3">
                  Step 2: Approximate Property Size
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    "Under 1,500 sq ft (Compact)",
                    "1,500 – 3,000 sq ft (Standard Home)",
                    "3,000+ sq ft / Commercial",
                  ].map((size) => (
                    <button
                      key={size}
                      type="button"
                      onClick={() => setPropertySize(size)}
                      className={`p-3.5 text-center text-xs font-medium rounded-xl border transition-all ${
                        propertySize === size
                          ? "font-bold shadow-sm"
                          : "border-[#E5E7EB] bg-[#FAFAFA] text-[#555555] hover:bg-[#F3F4F6]"
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
                <label className="block text-xs font-bold uppercase tracking-wider text-[#444444] mb-3">
                  Step 3: Required Timeline
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    "Emergency (Within 24 Hours)",
                    "This Week",
                    "Flexible / Planning",
                  ].map((u) => (
                    <button
                      key={u}
                      type="button"
                      onClick={() => setUrgency(u)}
                      className={`p-3 text-center text-xs font-medium rounded-xl border transition-all ${
                        urgency === u
                          ? "font-bold shadow-sm"
                          : "border-[#E5E7EB] bg-[#FAFAFA] text-[#555555] hover:bg-[#F3F4F6]"
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
              <div className="pt-6 border-t border-[#EAEAEA] grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#444444] mb-1.5">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formName}
                    onChange={(e) => setFormName(e.target.value)}
                    placeholder="Robert Davis"
                    className="w-full px-4 py-3 text-sm bg-[#FFFFFF] border border-[#D1D5DB] rounded-xl focus:outline-none focus:ring-2"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#444444] mb-1.5">
                    Phone Number (for 60s SMS confirmation) *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formPhone}
                    onChange={(e) => setFormPhone(e.target.value)}
                    placeholder="(555) 019-2834"
                    className="w-full px-4 py-3 text-sm bg-[#FFFFFF] border border-[#D1D5DB] rounded-xl focus:outline-none focus:ring-2"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={quoteLoading}
                className="w-full py-4 text-base font-bold rounded-xl shadow-lg transition-all transform active:scale-95 text-center"
                style={{
                  backgroundColor: themeAccent,
                  color: themeOnAccent,
                }}
              >
                {quoteLoading ? "Processing Estimate..." : "Get Instant Estimate & 60s SMS Alert →"}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* 8. VERIFIED GOOGLE REVIEWS */}
      <section id="reviews" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-[#EAEAEA]">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#777777]">
            Verified Homeowner Feedback
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-[#111111] mt-2">
            What Neighbors Say About {businessName}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#FFFFFF] border border-[#EAEAEA] rounded-2xl p-6 shadow-sm">
            <div className="text-amber-500 mb-3">★★★★★</div>
            <p className="text-sm text-[#444444] leading-relaxed mb-4">
              &quot;Our system failed late on a Sunday evening. {businessName} had a technician at our door in 45 minutes. Upfront pricing, clean work, and zero surprise fees.&quot;
            </p>
            <div className="flex items-center gap-3 pt-3 border-t border-[#F0F0F0]">
              <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center font-bold text-xs">
                MR
              </div>
              <div>
                <div className="text-xs font-bold text-[#111111]">Michael R.</div>
                <div className="text-[11px] text-[#888888]">Verified Homeowner · 2 weeks ago</div>
              </div>
            </div>
          </div>

          <div className="bg-[#FFFFFF] border border-[#EAEAEA] rounded-2xl p-6 shadow-sm">
            <div className="text-amber-500 mb-3">★★★★★</div>
            <p className="text-sm text-[#444444] leading-relaxed mb-4">
              &quot;Replaced our entire setup. The crew was courteous, on time, and left our property cleaner than they found it. Best investment we made this year.&quot;
            </p>
            <div className="flex items-center gap-3 pt-3 border-t border-[#F0F0F0]">
              <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center font-bold text-xs">
                SL
              </div>
              <div>
                <div className="text-xs font-bold text-[#111111]">Sarah L.</div>
                <div className="text-[11px] text-[#888888]">Verified Customer · 1 month ago</div>
              </div>
            </div>
          </div>

          <div className="bg-[#FFFFFF] border border-[#EAEAEA] rounded-2xl p-6 shadow-sm">
            <div className="text-amber-500 mb-3">★★★★★</div>
            <p className="text-sm text-[#444444] leading-relaxed mb-4">
              &quot;Their instant estimate tool was spot on. Within 60 seconds of submitting my request online, I had a text confirmation and a dispatch ETA. Truly 5-star service.&quot;
            </p>
            <div className="flex items-center gap-3 pt-3 border-t border-[#F0F0F0]">
              <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center font-bold text-xs">
                DT
              </div>
              <div>
                <div className="text-xs font-bold text-[#111111]">David T.</div>
                <div className="text-[11px] text-[#888888]">Verified Homeowner · 3 weeks ago</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. REGIONAL SERVICE AREAS */}
      <section id="service-areas" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-[#EAEAEA]">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#777777]">
            Local Coverage
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#111111] mt-1">
            Proudly Serving Surrounding Communities
          </h2>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2.5 max-w-4xl mx-auto">
          {[
            "North District", "South County", "West Suburbs", "Metro Area", 
            "East Hills", "Lakeside", "River Valley", "Oakwood", "Highland Park", "Downtown Corridor"
          ].map((town) => (
            <span
              key={town}
              className="px-4 py-2 rounded-lg text-xs font-semibold bg-[#FFFFFF] border border-[#E5E7EB] text-[#444444] shadow-2xs"
            >
              📍 {town}
            </span>
          ))}
        </div>
      </section>

      {/* 10. REAL CONTRACTOR FOOTER */}
      <footer className="bg-[#111111] text-[#FFFFFF] py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-2">
            <h4 className="text-lg font-bold mb-2">{businessName}</h4>
            <p className="text-xs text-[#999999] max-w-sm leading-relaxed mb-4">
              Fully licensed, bonded, and insured contractor providing 24/7/365 emergency service, system replacements, and routine maintenance.
            </p>
            <div className="text-xs text-[#777777]">License #TX-98421 · Fully Insured</div>
          </div>

          <div>
            <h5 className="text-xs font-bold uppercase tracking-wider text-[#777777] mb-3">Hours of Operation</h5>
            <div className="text-xs text-[#CCCCCC] space-y-1">
              <div>Monday – Friday: 24/7</div>
              <div>Saturday – Sunday: 24/7</div>
              <div className="text-emerald-400 font-semibold pt-1">Emergency Dispatch Always Open</div>
            </div>
          </div>

          <div>
            <h5 className="text-xs font-bold uppercase tracking-wider text-[#777777] mb-3">Agency Prototype</h5>
            <div className="text-xs text-[#999999] space-y-2">
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

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 border-t border-[#222222] text-center text-xs text-[#666666]">
          © {new Date().getFullYear()} {businessName}. All rights reserved. High-performance Next.js 16 build by Alizane Labs.
        </div>
      </footer>

      {/* 11. MULTI-TENANT AI CHATBOT MOUNTED WITH CLIENT ID & GREETING */}
      <AIChatWidget clientId={clientId} initialGreeting={initialGreeting} />
    </div>
  );
}
