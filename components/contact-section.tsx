"use client";

import React, { useState, useEffect } from "react";

const REQUIREMENT_ITEMS = [
  {
    id: "conversion_chat",
    label: "Conversion Chat",
    sub: "Chat on the site you already have — available now, 14 days free",
  },
  {
    id: "conversion_desk",
    label: "Conversion Desk",
    sub: "A dedicated page for your ad traffic — available now",
  },
  {
    id: "conversion_desk_pro",
    label: "Conversion Desk Pro",
    sub: "The page plus 24/7 AI phone answering — available now",
  },
];

export interface ContactSectionProps {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
}

export function ContactSection({
  eyebrow = "See What It Sounds Like",
  title = "Start your automation plan",
  subtitle = "Tell us about your business and we'll show you what it would actually say on your first enquiry, plus a setup plan within 24 hours.",
}: ContactSectionProps = {}) {
  const [currentStep, setCurrentStep] = useState<number>(1);
  
  // Default to Conversion Chat
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>(["Conversion Chat"]);
  const [customNotes, setCustomNotes] = useState<string>("");

  // Sync selected plan from URL parameters (?plan=chat) or in-page CTA clicks
  useEffect(() => {
    const syncPlanFromUrl = () => {
      if (typeof window === "undefined") return;
      const params = new URLSearchParams(window.location.search);
      const plan = params.get("plan") || params.get("tier") || params.get("product");

      if (plan === "chat" || plan === "conversion_chat" || plan === "conversion-chat") {
        setSelectedFeatures(["Conversion Chat"]);
      } else if (plan === "desk" || plan === "conversion_desk" || plan === "conversion-desk") {
        setSelectedFeatures(["Conversion Desk"]);
      } else if (plan === "pro" || plan === "conversion_desk_pro" || plan === "conversion-desk-pro") {
        setSelectedFeatures(["Conversion Desk Pro"]);
      }
    };

    syncPlanFromUrl();
    window.addEventListener("popstate", syncPlanFromUrl);

    // Listen for in-page clicks on plan CTA links
    const handleDocumentClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("a, button");
      if (!target) return;
      const href = target.getAttribute("href") || "";

      if (href.includes("plan=chat") || href.includes("plan=conversion_chat")) {
        setSelectedFeatures(["Conversion Chat"]);
        setCurrentStep(1);
        const el = document.getElementById("start");
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      } else if (href.includes("plan=desk") || href.includes("plan=conversion_desk")) {
        setSelectedFeatures(["Conversion Desk"]);
        setCurrentStep(1);
        const el = document.getElementById("start");
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      } else if (href.includes("plan=pro") || href.includes("plan=conversion_desk_pro")) {
        setSelectedFeatures(["Conversion Desk Pro"]);
        setCurrentStep(1);
        const el = document.getElementById("start");
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };

    document.addEventListener("click", handleDocumentClick);

    return () => {
      window.removeEventListener("popstate", syncPlanFromUrl);
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

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

  const toggleFeature = (label: string) => {
    setSelectedFeatures((prev) =>
      prev.includes(label) ? prev.filter((f) => f !== label) : [...prev, label]
    );
  };

  const handleNext = () => {
    setCurrentStep(2);
  };

  const handleBack = () => {
    setCurrentStep(1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    const payload = {
      name: contactData.name,
      email: contactData.email,
      businessName: contactData.businessName,
      company: contactData.businessName,
      phone: contactData.phone,
      websiteUrl: contactData.websiteUrl,
      customNotes: customNotes,
      selectedFeatures: selectedFeatures,
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

  return (
    <section id="start" aria-labelledby="contact-heading" className="border-t border-[#E7E5E4] py-20 sm:py-28 bg-[#F9F9F7]">
      <div className="mx-auto max-w-5xl px-6" data-reveal>
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#A7F3D0] bg-[#ECFDF5] px-3.5 py-1 text-xs font-mono text-[#065F46] shadow-xs">
            <span className="h-1.5 w-1.5 rounded-full bg-[#059669] animate-pulse" />
            <span className="uppercase tracking-widest text-[11px] font-semibold">
              {eyebrow}
            </span>
          </div>
          <h2 id="contact-heading" className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl text-[#111827] leading-tight">
            {title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#57534E] leading-relaxed">
            {subtitle}
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
                We have received your requirements for{" "}
                <span className="font-semibold text-[#111827]">
                  {contactData.businessName || "your business"}
                </span>.
              </p>

              <div className="mt-8 rounded-xl border border-[#E7E5E4] bg-[#F9F9F7] p-6 text-left space-y-3 font-mono text-xs text-[#57534E]">
                <div className="flex justify-between border-b border-[#E7E5E4] pb-2">
                  <span className="text-[#78716C]">Capabilities Selected:</span>
                  <span className="font-semibold text-[#065F46]">{selectedFeatures.length} selected</span>
                </div>
                <div className="flex justify-between border-b border-[#E7E5E4] pb-2">
                  <span className="text-[#78716C]">Destination:</span>
                  <span className="font-semibold text-[#111827]">{contactData.email}</span>
                </div>
                {contactData.phone ? (
                  <div className="flex justify-between">
                    <span className="text-[#78716C]">Phone:</span>
                    <span className="font-semibold text-[#111827]">{contactData.phone}</span>
                  </div>
                ) : null}
              </div>

              <p className="mt-6 text-xs text-[#78716C]">
                Our team is preparing your custom proposal. We&apos;ll email your complete plan and setup preview within 24 hours.
              </p>

              <div className="mt-8">
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setCurrentStep(1);
                    setContactData({ name: "", businessName: "", email: "", phone: "", websiteUrl: "", smsConsent: true, nickname: "" });
                    setCustomNotes("");
                  }}
                  className="rounded-md border border-[#E7E5E4] bg-[#F9F9F7] px-6 py-2.5 text-sm font-medium text-[#111827] transition-colors hover:border-[#111827] cursor-pointer"
                >
                  Start another plan request
                </button>
              </div>
            </div>
          ) : (
            <div>
              {/* Stepper Progress Indicator */}
              <div className="mb-8">
                <div className="flex items-center justify-between text-xs font-mono text-[#78716C] mb-2.5">
                  <span className="font-semibold text-[#065F46]">
                    STEP {currentStep} OF 2
                  </span>
                  <span>
                    {currentStep === 1 && "Your Requirement"}
                    {currentStep === 2 && "Contact Details"}
                  </span>
                </div>
                <div className="h-1.5 w-full rounded-full bg-[#E7E5E4] overflow-hidden">
                  <div
                    className="h-full bg-[#065F46] transition-all duration-300 ease-out rounded-full"
                    style={{ width: `${(currentStep / 2) * 100}%` }}
                  />
                </div>
              </div>

              {/* STEP 1: Your Requirement */}
              {currentStep === 1 && (
                <div>
                  <h3 className="font-serif text-2xl text-[#111827]">
                    Which product are you interested in?
                  </h3>
                  <p className="mt-1 text-sm text-[#57534E]">
                    Pick one, or more than one if you want both:
                  </p>

                  <div className="mt-6 grid grid-cols-1 gap-3.5 md:grid-cols-3">
                    {REQUIREMENT_ITEMS.map((item) => {
                      const isChecked = selectedFeatures.includes(item.label);
                      return (
                        <label
                          key={item.id}
                          className={`flex items-start gap-3 rounded-xl border p-4 cursor-pointer transition-all ${
                            isChecked
                              ? "border-[#A7F3D0] bg-[#ECFDF5]/30 text-[#111827] shadow-xs"
                              : "border-[#E7E5E4] bg-white text-[#78716C] hover:bg-[#F9F9F7]"
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={() => toggleFeature(item.label)}
                            className="mt-0.5 h-4 w-4 rounded border-[#D6D3D1] text-[#065F46] focus:ring-[#065F46]"
                          />
                          <div>
                            <div className="text-sm font-semibold text-[#111827]">{item.label}</div>
                            <div className="text-xs text-[#57534E] mt-0.5 leading-relaxed">{item.sub}</div>
                          </div>
                        </label>
                      );
                    })}
                  </div>

                  {/* Free-text field */}
                  <div className="mt-6">
                    <label htmlFor="custom-notes" className="block text-xs font-mono uppercase tracking-wider text-[#57534E] mb-2 font-semibold">
                      Tell us more about what you need (optional):
                    </label>
                    <textarea
                      id="custom-notes"
                      rows={3}
                      value={customNotes}
                      onChange={(e) => setCustomNotes(e.target.value)}
                      placeholder="e.g. We get inquiries by phone, email, and our contact form, and none of it's connected right now..."
                      className="w-full rounded-xl border border-[#D6D3D1] bg-[#F9F9F7] p-3.5 text-sm text-[#111827] placeholder:text-[#78716C] outline-none focus:border-[#065F46] focus:bg-white transition-colors"
                    />
                  </div>

                  <div className="mt-8 flex justify-end">
                    <button
                      type="button"
                      onClick={handleNext}
                      className="inline-flex items-center gap-2 rounded-md bg-[#065F46] px-6 py-3 text-sm font-medium text-white shadow-xs transition-all hover:bg-[#064E3B] active:scale-98 cursor-pointer"
                    >
                      <span>Next: Contact Details</span>
                      <span>→</span>
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 2: Contact Details */}
              {currentStep === 2 && (
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
                    Enter your contact details so we can deliver your tailored setup and pricing breakdown:
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
                          Business / Organization Name *
                        </label>
                        <input
                          type="text"
                          id="plan-business"
                          required
                          placeholder="e.g. Apex Systems"
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
                          placeholder="Best phone number to reach you"
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

                    {/* Email and Phone Contact Consent Checkbox */}
                    <div className="pt-2">
                      <label className="flex items-start gap-2.5 cursor-pointer text-xs text-[#57534E] leading-relaxed">
                        <input
                          type="checkbox"
                          checked={contactData.smsConsent}
                          onChange={(e) => setContactData({ ...contactData, smsConsent: e.target.checked })}
                          className="mt-1 h-4 w-4 shrink-0 rounded border-[#D6D3D1] text-[#065F46] focus:ring-[#065F46]"
                        />
                        <span>
                          I consent to be contacted by Alizane Labs by email or phone regarding my enquiry. Consent is not a condition of purchase. View our{" "}
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
                      className="rounded-md border border-[#E7E5E4] bg-white px-5 py-2.5 text-sm font-medium text-[#57534E] hover:border-[#D6D3D1] hover:text-[#111827] cursor-pointer"
                    >
                      ← Back
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center gap-2 rounded-md bg-[#065F46] px-7 py-3.5 text-sm font-medium text-white shadow-xs transition-all hover:bg-[#064E3B] active:scale-98 disabled:opacity-60 cursor-pointer"
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
                        "Get My Plan →"
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
