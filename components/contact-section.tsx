"use client";

import React, { useState } from "react";

function HvacIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3v18M3 12h18M5.6 5.6l12.8 12.8M18.4 5.6L5.6 18.4" />
      <path d="m9 3 3 3 3-3M9 21l3-3 3 3M3 9l3 3-3 3M21 9l-3 3 3 3" />
    </svg>
  );
}

function PlumbingIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
    </svg>
  );
}

function RoofingIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="m3 10 9-7 9 7" />
      <path d="M5 9v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9" />
      <path d="M9 21v-6a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v6" />
    </svg>
  );
}

function ElectricalIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  );
}

function RestorationIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3z" />
    </svg>
  );
}

function OtherTradeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  );
}

const BUSINESS_TYPES = [
  { id: "hvac", label: "HVAC & Cooling", icon: HvacIcon },
  { id: "plumbing", label: "Plumbing & Drains", icon: PlumbingIcon },
  { id: "roofing", label: "Roofing, Siding & Solar", icon: RoofingIcon },
  { id: "electrical", label: "Electrical & Contracting", icon: ElectricalIcon },
  { id: "restoration", label: "Restoration & Cleaning", icon: RestorationIcon },
  { id: "other", label: "Other Trade / Service", icon: OtherTradeIcon },
];

const COMMON_CHALLENGES = [
  { id: "no_site", label: "We don't have a website yet (starting fresh)" },
  { id: "dated_site", label: "Our current website is dated, slow, or doesn't generate calls" },
  { id: "missed_leads", label: "We miss customer calls and quote requests while on the job" },
  { id: "cold_quotes", label: "We spend time quoting, but leads go cold and don't close" },
];

const FEATURE_CATEGORIES = [
  {
    category: "Core Website & Design",
    features: [
      { id: "custom_design", label: "Bespoke Custom Design", sub: "Editorial layout on sub-second Next.js", defaultChecked: true },
      { id: "mobile_first", label: "Mobile-First & Tap-to-Call", sub: "Optimized for one-tap phone dialing", defaultChecked: true },
      { id: "before_after", label: "Before & After Job Gallery", sub: "Showcases your best completed projects", defaultChecked: true },
      { id: "google_reviews", label: "Live Google Reviews Feed", sub: "Displays 5-star verified customer ratings", defaultChecked: true },
    ],
  },
  {
    category: "Local Google Visibility & Search",
    features: [
      { id: "service_pages", label: "Dedicated Service Pages (Up to 10)", sub: "Ranks for each individual trade you offer", defaultChecked: true },
      { id: "town_pages", label: "Dedicated Town & Area Pages (Up to 10)", sub: "Ranks in surrounding suburbs & cities", defaultChecked: true },
      { id: "local_schema", label: "Local SEO Schema & Google Maps", sub: "Boosts Google Maps 3-Pack rankings", defaultChecked: true },
    ],
  },
  {
    category: "Lead Capture & Speed-to-Lead",
    features: [
      { id: "sms_alerts", label: "Instant Lead SMS Alerts to Your Phone", sub: "Get notified the second a lead arrives", defaultChecked: true },
      { id: "customer_auto_sms", label: "Instant Customer Auto-Confirmation SMS", sub: "Stops customers calling your competitors", defaultChecked: true },
      { id: "quote_funnel", label: "Interactive Multi-Step Quote Funnel", sub: "Pre-qualifies incoming jobs automatically", defaultChecked: true },
    ],
  },
  {
    category: "AI Employees & Telephony",
    features: [
      { id: "ai_voice_receptionist", label: "24/7 AI Phone Receptionist", sub: "Answers calls, answers FAQs & books calendar slots", defaultChecked: false },
      { id: "ai_chat_employee", label: "24/7 Website AI Chat Employee", sub: "Engages & qualifies online visitors 24/7", defaultChecked: false },
      { id: "quote_followup", label: "21-Day Automated Quote Follow-Up", sub: "Timed multi-touch SMS nudges to win back quoted jobs", defaultChecked: false },
    ],
  },
];

export function ContactSection() {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [businessType, setBusinessType] = useState<string>("hvac");
  const [selectedChallenge, setSelectedChallenge] = useState<string>("dated_site");
  const [customChallenge, setCustomChallenge] = useState<string>("");
  
  const allInitialFeatures = FEATURE_CATEGORIES.flatMap(cat => 
    cat.features.filter(f => f.defaultChecked).map(f => f.label)
  );
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>(allInitialFeatures);

  const [contactData, setContactData] = useState({
    name: "",
    businessName: "",
    email: "",
    phone: "",
    websiteUrl: "",
    smsConsent: true,
    nickname: "", // Honeypot
  });

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState<boolean>(false);

  const toggleFeature = (featureLabel: string) => {
    setSelectedFeatures(prev => 
      prev.includes(featureLabel)
        ? prev.filter(f => f !== featureLabel)
        : [...prev, featureLabel]
    );
  };

  const handleNext = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1);
  };

  const handleBack = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    const payload = {
      name: contactData.name,
      email: contactData.email,
      businessName: contactData.businessName,
      phone: contactData.phone,
      websiteUrl: contactData.websiteUrl,
      businessType: BUSINESS_TYPES.find(b => b.id === businessType)?.label || businessType,
      challenge: selectedChallenge === "custom" ? customChallenge : (COMMON_CHALLENGES.find(c => c.id === selectedChallenge)?.label || selectedChallenge),
      customNotes: customChallenge,
      selectedFeatures,
      smsConsent: contactData.smsConsent,
      nickname: contactData.nickname,
    };

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const errData = await res.json().catch(() => ({}));
        throw new Error(errData.message || "Failed to submit request. Please check your information.");
      }

      setSubmitted(true);
    } catch (err: unknown) {
      setSubmitError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const selectedBusinessLabel = BUSINESS_TYPES.find(b => b.id === businessType)?.label || "Local Business";

  return (
    <section id="start" aria-labelledby="contact-heading" className="border-t border-[#E7E5E4] py-20 sm:py-28 bg-[#F9F9F7]">
      <div className="mx-auto max-w-5xl px-6">
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#A7F3D0] bg-[#ECFDF5] px-3.5 py-1 text-xs font-mono text-[#065F46] shadow-xs">
            <span className="h-1.5 w-1.5 rounded-full bg-[#059669] animate-pulse" />
            <span className="uppercase tracking-widest text-[11px] font-semibold">Interactive Project Planner</span>
          </div>
          <h2 id="contact-heading" className="mt-4 font-serif text-3xl sm:text-5xl text-[#111827] leading-tight">
            Get your tailored website &amp; automation plan.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#57534E] leading-relaxed">
            Answer 4 quick questions. We&apos;ll prepare a customized architecture blueprint, feature breakdown, and quote within 24 hours.
          </p>
        </div>

        <div className="rounded-2xl border border-[#E7E5E4] bg-white p-6 sm:p-10 shadow-sm">
          {submitted ? (
            <div className="text-center py-10 max-w-lg mx-auto">
              <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-[#ECFDF5] text-[#065F46] border border-[#A7F3D0]">
                <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>

              <span className="font-mono text-xs uppercase tracking-widest text-[#065F46] font-semibold">
                Plan Request Confirmed
              </span>

              <h3 className="mt-3 font-serif text-3xl sm:text-4xl text-[#111827]">
                Thank you, {contactData.name || "there"}!
              </h3>

              <p className="mt-4 text-base text-[#57534E] leading-relaxed">
                We have received your project details for{" "}
                <span className="font-semibold text-[#111827]">
                  {contactData.businessName || selectedBusinessLabel}
                </span>.
              </p>

              <div className="mt-8 rounded-xl border border-[#E7E5E4] bg-[#F9F9F7] p-6 text-left space-y-3 font-mono text-xs text-[#57534E]">
                <div className="flex justify-between border-b border-[#E7E5E4] pb-2">
                  <span className="text-[#78716C]">Trade / Industry:</span>
                  <span className="font-semibold text-[#111827]">{selectedBusinessLabel}</span>
                </div>
                <div className="flex justify-between border-b border-[#E7E5E4] pb-2">
                  <span className="text-[#78716C]">Features Selected:</span>
                  <span className="font-semibold text-[#065F46]">{selectedFeatures.length} capabilities included</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#78716C]">Plan Destination:</span>
                  <span className="font-semibold text-[#111827]">{contactData.email || "your email"}</span>
                </div>
              </div>

              <p className="mt-6 text-xs text-[#78716C]">
                Our team is preparing your custom proposal. We&apos;ll email your complete plan within 24 hours.
              </p>

              <div className="mt-8">
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setCurrentStep(1);
                    setContactData({ name: "", businessName: "", email: "", phone: "", websiteUrl: "", smsConsent: true, nickname: "" });
                  }}
                  className="rounded-md border border-[#E7E5E4] bg-[#F9F9F7] px-6 py-2.5 text-sm font-medium text-[#111827] transition-colors hover:border-[#111827]"
                >
                  Start another plan request
                </button>
              </div>
            </div>
          ) : (
            <div>
              {/* Stepper Progress Bar */}
              <div className="mb-8">
                <div className="flex items-center justify-between text-xs font-mono text-[#78716C] mb-2.5">
                  <span className="font-semibold text-[#065F46]">
                    STEP {currentStep} OF 4
                  </span>
                  <span>
                    {currentStep === 1 && "Select Trade"}
                    {currentStep === 2 && "Current Bottleneck"}
                    {currentStep === 3 && "Desired Features"}
                    {currentStep === 4 && "Contact Details"}
                  </span>
                </div>
                <div className="h-1.5 w-full rounded-full bg-[#E7E5E4] overflow-hidden">
                  <div
                    className="h-full bg-[#065F46] transition-all duration-300 ease-out rounded-full"
                    style={{ width: `${(currentStep / 4) * 100}%` }}
                  />
                </div>
              </div>

              {/* STEP 1: Trade / Business Type */}
              {currentStep === 1 && (
                <div>
                  <h3 className="font-serif text-2xl text-[#111827]">
                    What type of business do you run?
                  </h3>
                  <p className="mt-1 text-sm text-[#57534E]">
                    Select your primary service trade:
                  </p>

                  <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {BUSINESS_TYPES.map((type) => {
                      const isSelected = businessType === type.id;
                      const IconComponent = type.icon;
                      return (
                        <button
                          key={type.id}
                          type="button"
                          onClick={() => setBusinessType(type.id)}
                          className={`group flex items-center gap-3.5 rounded-xl border p-4 text-left transition-all ${
                            isSelected
                              ? "border-[#065F46] bg-[#ECFDF5] text-[#065F46] ring-1 ring-[#065F46]"
                              : "border-[#E7E5E4] bg-white text-[#111827] hover:border-[#D6D3D1] hover:bg-[#F9F9F7]"
                          }`}
                        >
                          <div
                            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg transition-colors ${
                              isSelected
                                ? "bg-[#065F46] text-white"
                                : "bg-[#F5F5F4] text-[#57534E] group-hover:bg-[#E7E5E4] group-hover:text-[#111827]"
                            }`}
                          >
                            <IconComponent className="h-5 w-5" />
                          </div>
                          <span className="font-medium text-sm">{type.label}</span>
                        </button>
                      );
                    })}
                  </div>

                  <div className="mt-8 flex justify-end">
                    <button
                      type="button"
                      onClick={handleNext}
                      className="inline-flex items-center gap-2 rounded-md bg-[#065F46] px-6 py-3 text-sm font-medium text-white shadow-xs transition-all hover:bg-[#064E3B] active:scale-98"
                    >
                      Next: Challenges →
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 2: Current Bottleneck & Write-in */}
              {currentStep === 2 && (
                <div>
                  <h3 className="font-serif text-2xl text-[#111827]">
                    What is the main challenge with your current setup?
                  </h3>
                  <p className="mt-1 text-sm text-[#57534E]">
                    Select a common scenario or write your specific goals below:
                  </p>

                  <div className="mt-6 space-y-3">
                    {COMMON_CHALLENGES.map((chal) => {
                      const isSelected = selectedChallenge === chal.id;
                      return (
                        <button
                          key={chal.id}
                          type="button"
                          onClick={() => setSelectedChallenge(chal.id)}
                          className={`flex w-full items-center justify-between rounded-xl border p-4 text-left transition-all ${
                            isSelected
                              ? "border-[#065F46] bg-[#ECFDF5] text-[#065F46] ring-1 ring-[#065F46]"
                              : "border-[#E7E5E4] bg-white text-[#111827] hover:border-[#D6D3D1] hover:bg-[#F9F9F7]"
                          }`}
                        >
                          <span className="text-sm font-medium">{chal.label}</span>
                          <span className={`h-4 w-4 rounded-full border flex items-center justify-center ${
                            isSelected ? "border-[#065F46] bg-[#065F46]" : "border-[#D6D3D1]"
                          }`}>
                            {isSelected && <span className="h-1.5 w-1.5 rounded-full bg-white" />}
                          </span>
                        </button>
                      );
                    })}
                  </div>

                  <div className="mt-6">
                    <label htmlFor="custom-challenge" className="block text-xs font-mono uppercase tracking-wider text-[#57534E] mb-2 font-semibold">
                      Tell us more about your current situation (optional):
                    </label>
                    <textarea
                      id="custom-challenge"
                      rows={3}
                      value={customChallenge}
                      onChange={(e) => setCustomChallenge(e.target.value)}
                      placeholder="e.g. We get about 15 calls a week but technicians miss them while in crawl spaces, and our current site takes 5 seconds to load..."
                      className="w-full rounded-xl border border-[#D6D3D1] bg-[#F9F9F7] p-3.5 text-sm text-[#111827] placeholder:text-[#78716C] outline-none focus:border-[#065F46] focus:bg-white transition-colors"
                    />
                  </div>

                  <div className="mt-8 flex justify-between">
                    <button
                      type="button"
                      onClick={handleBack}
                      className="rounded-md border border-[#E7E5E4] bg-white px-5 py-2.5 text-sm font-medium text-[#57534E] hover:border-[#D6D3D1] hover:text-[#111827]"
                    >
                      ← Back
                    </button>
                    <button
                      type="button"
                      onClick={handleNext}
                      className="inline-flex items-center gap-2 rounded-md bg-[#065F46] px-6 py-3 text-sm font-medium text-white shadow-xs transition-all hover:bg-[#064E3B] active:scale-98"
                    >
                      Next: Features →
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 3: Capability Checklist */}
              {currentStep === 3 && (
                <div>
                  <h3 className="font-serif text-2xl text-[#111827]">
                    Select the features you want included:
                  </h3>
                  <p className="mt-1 text-sm text-[#57534E]">
                    Toggle any items based on your needs:
                  </p>

                  <div className="mt-6 space-y-6">
                    {FEATURE_CATEGORIES.map((cat) => (
                      <div key={cat.category} className="rounded-xl border border-[#E7E5E4] bg-[#F9F9F7]/70 p-5">
                        <h4 className="font-mono text-xs uppercase tracking-wider text-[#065F46] font-semibold mb-3">
                          {cat.category}
                        </h4>
                        <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                          {cat.features.map((feat) => {
                            const isChecked = selectedFeatures.includes(feat.label);
                            return (
                              <label
                                key={feat.id}
                                className={`flex items-start gap-3 rounded-lg border p-3 cursor-pointer transition-all ${
                                  isChecked
                                    ? "border-[#A7F3D0] bg-white text-[#111827] shadow-xs"
                                    : "border-[#E7E5E4] bg-white/50 text-[#78716C] hover:bg-white"
                                }`}
                              >
                                <input
                                  type="checkbox"
                                  checked={isChecked}
                                  onChange={() => toggleFeature(feat.label)}
                                  className="mt-1 h-4 w-4 rounded border-[#D6D3D1] text-[#065F46] focus:ring-[#065F46]"
                                />
                                <div>
                                  <div className="text-xs font-medium text-[#111827]">{feat.label}</div>
                                  <div className="text-[11px] text-[#78716C] mt-0.5">{feat.sub}</div>
                                </div>
                              </label>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 flex justify-between">
                    <button
                      type="button"
                      onClick={handleBack}
                      className="rounded-md border border-[#E7E5E4] bg-white px-5 py-2.5 text-sm font-medium text-[#57534E] hover:border-[#D6D3D1] hover:text-[#111827]"
                    >
                      ← Back
                    </button>
                    <button
                      type="button"
                      onClick={handleNext}
                      className="inline-flex items-center gap-2 rounded-md bg-[#065F46] px-6 py-3 text-sm font-medium text-white shadow-xs transition-all hover:bg-[#064E3B] active:scale-98"
                    >
                      Next: Your Details →
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 4: Contact Information & Consent */}
              {currentStep === 4 && (
                <form onSubmit={handleSubmit}>
                  {/* Honeypot */}
                  <input
                    type="text"
                    name="nickname"
                    value={contactData.nickname}
                    onChange={(e) => setContactData({ ...contactData, nickname: e.target.value })}
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                  />

                  <h3 className="font-serif text-2xl text-[#111827]">
                    Where should we send your custom plan?
                  </h3>
                  <p className="mt-1 text-sm text-[#57534E]">
                    Enter your contact details so we can deliver your tailored architecture breakdown:
                  </p>

                  {submitError && (
                    <div className="mt-4 rounded-md border border-red-200 bg-red-50 p-3 text-xs text-red-700">
                      {submitError}
                    </div>
                  )}

                  <div className="mt-6 space-y-4">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div>
                        <label htmlFor="plan-name" className="block text-xs font-medium text-[#111827] mb-1">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          id="plan-name"
                          required
                          placeholder="First and last name"
                          value={contactData.name}
                          onChange={(e) => setContactData({ ...contactData, name: e.target.value })}
                          className="w-full rounded-md border border-[#D6D3D1] bg-[#F9F9F7] px-3.5 py-2.5 text-sm text-[#111827] outline-none focus:border-[#065F46] focus:bg-white transition-colors"
                        />
                      </div>
                      <div>
                        <label htmlFor="plan-business" className="block text-xs font-medium text-[#111827] mb-1">
                          Business / Company Name *
                        </label>
                        <input
                          type="text"
                          id="plan-business"
                          required
                          placeholder="e.g. Apex Heating & Cooling"
                          value={contactData.businessName}
                          onChange={(e) => setContactData({ ...contactData, businessName: e.target.value })}
                          className="w-full rounded-md border border-[#D6D3D1] bg-[#F9F9F7] px-3.5 py-2.5 text-sm text-[#111827] outline-none focus:border-[#065F46] focus:bg-white transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div>
                        <label htmlFor="plan-email" className="block text-xs font-medium text-[#111827] mb-1">
                          Work Email *
                        </label>
                        <input
                          type="email"
                          id="plan-email"
                          required
                          placeholder="name@business.com"
                          value={contactData.email}
                          onChange={(e) => setContactData({ ...contactData, email: e.target.value })}
                          className="w-full rounded-md border border-[#D6D3D1] bg-[#F9F9F7] px-3.5 py-2.5 text-sm text-[#111827] outline-none focus:border-[#065F46] focus:bg-white transition-colors"
                        />
                      </div>
                      <div>
                        <label htmlFor="plan-phone" className="block text-xs font-medium text-[#111827] mb-1">
                          Phone Number (for SMS notifications &amp; proposal alerts)
                        </label>
                        <input
                          type="tel"
                          id="plan-phone"
                          placeholder="Best number to reach you"
                          value={contactData.phone}
                          onChange={(e) => setContactData({ ...contactData, phone: e.target.value })}
                          className="w-full rounded-md border border-[#D6D3D1] bg-[#F9F9F7] px-3.5 py-2.5 text-sm text-[#111827] outline-none focus:border-[#065F46] focus:bg-white transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="plan-url" className="block text-xs font-medium text-[#111827] mb-1">
                        Current Website URL (optional)
                      </label>
                      <input
                        type="text"
                        id="plan-url"
                        placeholder="https://www.yourcurrentsite.com (if you have one)"
                        value={contactData.websiteUrl}
                        onChange={(e) => setContactData({ ...contactData, websiteUrl: e.target.value })}
                        className="w-full rounded-md border border-[#D6D3D1] bg-[#F9F9F7] px-3.5 py-2.5 text-sm text-[#111827] outline-none focus:border-[#065F46] focus:bg-white transition-colors"
                      />
                    </div>

                    {/* Automated Calls & SMS Consent Checkbox */}
                    <div className="pt-2">
                      <label className="flex items-start gap-2.5 cursor-pointer text-xs text-[#57534E] leading-relaxed">
                        <input
                          type="checkbox"
                          checked={contactData.smsConsent}
                          onChange={(e) => setContactData({ ...contactData, smsConsent: e.target.checked })}
                          className="mt-1 h-4 w-4 shrink-0 rounded border-[#D6D3D1] text-[#065F46] focus:ring-[#065F46]"
                        />
                        <span>
                          I consent to receive automated phone calls, AI voice communications, and SMS text messages from Alizane Labs regarding my website &amp; automation plan at the phone number provided. Consent is not a condition of purchase. Message and data rates may apply. Reply STOP to cancel at any time. View our{" "}
                          <a href="/privacy" target="_blank" className="text-[#065F46] underline font-medium hover:text-[#064E3B]">
                            Privacy Policy
                          </a>{" "}
                          and{" "}
                          <a href="/terms" target="_blank" className="text-[#065F46] underline font-medium hover:text-[#064E3B]">
                            Terms of Service
                          </a>.
                        </span>
                      </label>
                    </div>
                  </div>

                  <div className="mt-8 flex justify-between items-center">
                    <button
                      type="button"
                      onClick={handleBack}
                      className="rounded-md border border-[#E7E5E4] bg-white px-5 py-2.5 text-sm font-medium text-[#57534E] hover:border-[#D6D3D1] hover:text-[#111827]"
                    >
                      ← Back
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center gap-2 rounded-md bg-[#065F46] px-7 py-3.5 text-sm font-medium text-white shadow-xs transition-all hover:bg-[#064E3B] active:scale-98 disabled:opacity-60"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="h-4 w-4 animate-spin text-white" viewBox="0 0 24 24" fill="none">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                          </svg>
                          Generating Your Plan...
                        </>
                      ) : (
                        "Generate My Custom Plan →"
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
