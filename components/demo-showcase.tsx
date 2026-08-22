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
  const [selectedService, setSelectedService] = useState("Full Replacement / Installation");
  const [propertyType, setPropertyType] = useState("Residential");
  const [timeframe, setTimeframe] = useState("Emergency (Within 24h)");
  const [quoteSubmitted, setQuoteSubmitted] = useState(false);
  const [quoteLoading, setQuoteLoading] = useState(false);

  const [formName, setFormName] = useState("");
  const [formPhone, setFormPhone] = useState("");
  const [formEmail, setFormEmail] = useState("");

  const handleQuoteSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName || !formPhone) return;

    setQuoteLoading(true);
    try {
      // Deliver quote lead with clientId tag
      await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formName,
          phone: formPhone,
          email: formEmail || undefined,
          company: businessName,
          trade: selectedService,
          monthlyCallRange: timeframe,
          crm: `Demo Page: ${clientId} (${propertyType})`,
        }),
      });
      setQuoteSubmitted(true);
    } catch {
      setQuoteSubmitted(true);
    } finally {
      setQuoteLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen bg-[#FBFBFA] text-[#111111] font-sans antialiased"
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
      {/* Top Banner */}
      <div
        className="py-2.5 px-4 text-center text-xs sm:text-sm font-medium flex items-center justify-center gap-2 border-b"
        style={{
          backgroundColor: themeAccent,
          color: themeOnAccent,
          borderColor: themeBorder,
        }}
      >
        <span
          className="inline-block w-2 h-2 rounded-full animate-pulse"
          style={{ backgroundColor: themePulse }}
        />
        <span>
          Live Interactive Prototype for <strong>{businessName}</strong> · Built on Next.js 16 + Sub-Second Speed
        </span>
      </div>

      {/* Hero Section */}
      <header className="max-w-6xl mx-auto px-4 sm:px-6 pt-12 pb-16 text-center">
        <div
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-6 border"
          style={{
            borderColor: themeBorder,
            color: themeAccent,
            backgroundColor: "#FFFFFF",
          }}
        >
          <span>Official Contractor Experience</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-[#111111] max-w-3xl mx-auto mb-6">
          Premium Quality & Fast Service in Your Area.
        </h1>
        <p className="text-lg sm:text-xl text-[#666666] max-w-2xl mx-auto mb-8">
          Serving homeowners and commercial properties with 24/7 responsiveness, instant quote estimates, and expert craft.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#quote-funnel"
            className="px-6 py-3.5 rounded-lg text-sm font-semibold transition-all shadow-sm transform active:scale-95"
            style={{
              backgroundColor: themeAccent,
              color: themeOnAccent,
            }}
          >
            Calculate Instant Estimate ↓
          </a>
          <a
            href="tel:+18005550199"
            className="px-6 py-3.5 rounded-lg text-sm font-semibold bg-[#FFFFFF] border border-[#E5E7EB] hover:bg-[#F3F4F6] text-[#111111] transition-all"
          >
            Tap to Call (24/7 Dispatch)
          </a>
        </div>
      </header>

      {/* Before & After Interactive Showcase */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
        <div className="text-center mb-8">
          <span className="text-xs uppercase tracking-widest font-semibold text-[#888888]">
            Quality & Craftsmanship
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold mt-1">Before & After Project Showcase</h2>
        </div>
        <div className="bg-[#FFFFFF] border border-[#EAEAEA] rounded-2xl p-4 sm:p-8 shadow-sm">
          <BeforeAfterSlider />
        </div>
      </section>

      {/* Interactive Multi-Step Quote Funnel */}
      <section id="quote-funnel" className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
        <div className="text-center mb-10">
          <span className="text-xs uppercase tracking-widest font-semibold text-[#888888]">
            Instant Speed-to-Lead
          </span>
          <h2 className="text-3xl font-bold mt-1">Interactive Project Estimate Calculator</h2>
          <p className="text-sm text-[#666666] mt-2">
            Select your project parameters to get an instant tailored estimate.
          </p>
        </div>

        <div className="bg-[#FFFFFF] border border-[#EAEAEA] rounded-2xl p-6 sm:p-10 shadow-sm">
          {quoteSubmitted ? (
            <div className="text-center py-10">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: themeAccent, color: themeOnAccent }}
              >
                ✓
              </div>
              <h3 className="text-2xl font-bold mb-2">Estimate Request Received!</h3>
              <p className="text-sm text-[#666666] max-w-md mx-auto">
                Our team has received your project details for <strong>{businessName}</strong>. Our automated system has sent a confirmation to your phone.
              </p>
            </div>
          ) : (
            <form onSubmit={handleQuoteSubmit} className="space-y-6">
              {/* Step 1: Service Type */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#555555] mb-2">
                  1. Select Scope of Work
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    "Full Replacement / Installation",
                    "Emergency Repair & Inspection",
                    "Routine Maintenance & Tune-Up",
                  ].map((service) => (
                    <button
                      key={service}
                      type="button"
                      onClick={() => setSelectedService(service)}
                      className={`p-3.5 text-left text-xs font-medium rounded-lg border transition-all ${
                        selectedService === service
                          ? "border-current font-bold"
                          : "border-[#E5E7EB] bg-[#FAFAFA] text-[#555555]"
                      }`}
                      style={
                        selectedService === service
                          ? {
                              borderColor: themeAccent,
                              backgroundColor: `${themeAccent}10`,
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

              {/* Step 2: Property Type */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#555555] mb-2">
                  2. Property Type
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {["Residential Home", "Commercial Building"].map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setPropertyType(type)}
                      className={`p-3 text-center text-xs font-medium rounded-lg border transition-all ${
                        propertyType === type
                          ? "border-current font-bold"
                          : "border-[#E5E7EB] bg-[#FAFAFA] text-[#555555]"
                      }`}
                      style={
                        propertyType === type
                          ? {
                              borderColor: themeAccent,
                              backgroundColor: `${themeAccent}10`,
                              color: themeAccent,
                            }
                          : {}
                      }
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 3: Timeframe */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#555555] mb-2">
                  3. Project Timeframe
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {["Emergency (Within 24h)", "This Week", "Planning / Flexible"].map((tf) => (
                    <button
                      key={tf}
                      type="button"
                      onClick={() => setTimeframe(tf)}
                      className={`p-3 text-center text-xs font-medium rounded-lg border transition-all ${
                        timeframe === tf
                          ? "border-current font-bold"
                          : "border-[#E5E7EB] bg-[#FAFAFA] text-[#555555]"
                      }`}
                      style={
                        timeframe === tf
                          ? {
                              borderColor: themeAccent,
                              backgroundColor: `${themeAccent}10`,
                              color: themeAccent,
                            }
                          : {}
                      }
                    >
                      {tf}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 4: Contact Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#EAEAEA]">
                <div>
                  <label className="block text-xs font-semibold text-[#555555] mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formName}
                    onChange={(e) => setFormName(e.target.value)}
                    placeholder="John Miller"
                    className="w-full px-3.5 py-2.5 text-sm bg-[#FFFFFF] border border-[#D1D5DB] rounded-lg focus:outline-none focus:ring-1"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#555555] mb-1">
                    Phone Number (for 60s SMS confirmation) *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formPhone}
                    onChange={(e) => setFormPhone(e.target.value)}
                    placeholder="(555) 019-2834"
                    className="w-full px-3.5 py-2.5 text-sm bg-[#FFFFFF] border border-[#D1D5DB] rounded-lg focus:outline-none focus:ring-1"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={quoteLoading}
                className="w-full py-3.5 text-sm font-semibold rounded-lg shadow-sm transition-all text-center"
                style={{
                  backgroundColor: themeAccent,
                  color: themeOnAccent,
                }}
              >
                {quoteLoading ? "Submitting Estimate Request..." : "Request Instant Estimate →"}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Footer & Agency Activation Banner */}
      <footer className="max-w-6xl mx-auto px-4 sm:px-6 py-12 border-t border-[#EAEAEA] text-center text-xs text-[#888888]">
        <div className="mb-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-xs border border-[#E5E7EB] bg-[#FFFFFF] text-[#111111] hover:bg-[#F3F4F6]"
          >
            🚀 Claim This Website & Launch for {businessName} →
          </Link>
        </div>
        <p>© {new Date().getFullYear()} {businessName}. High-Performance Architecture engineered by Alizane Labs.</p>
      </footer>

      {/* Multi-Tenant AI Chat Widget mounted for this client */}
      <AIChatWidget />
    </div>
  );
}
