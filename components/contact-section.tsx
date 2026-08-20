"use client";

import React, { useState } from "react";

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    business: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="start" aria-labelledby="contact-heading" className="border-t border-[#E7E5E4] py-24 sm:py-32 bg-[#F9F9F7]">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-start">
          {/* Left Column: Heading & Info */}
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#065F46] font-semibold">
              Get Started
            </span>
            <h2 id="contact-heading" className="mt-4 font-serif text-3xl sm:text-5xl text-[#111827] leading-tight">
              Tell us about your business.
            </h2>
            <p className="mt-6 text-base sm:text-lg text-[#57534E] leading-relaxed max-w-md">
              Tell us about your business and we&apos;ll come back to you within 24 hours with a clear plan.
            </p>
            <p className="mt-6 text-sm text-[#78716C]">
              Or email{" "}
              <a
                href="mailto:hello@alizanelabs.site"
                className="font-medium text-[#065F46] underline underline-offset-4 hover:text-[#064E3B]"
              >
                hello@alizanelabs.site
              </a>
            </p>
          </div>

          {/* Right Column: Contact Card */}
          <div className="rounded-xl border border-[#E7E5E4] bg-white p-8 sm:p-10 shadow-sm">
            {submitted ? (
              <div className="flex min-h-[320px] flex-col justify-center" role="status" aria-live="polite">
                <span className="self-start rounded-full bg-[#ECFDF5] border border-[#A7F3D0] px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-[#065F46] font-semibold">
                  Received
                </span>
                <h3 className="mt-4 font-serif text-2xl sm:text-3xl text-[#111827]">
                  Thanks — that&apos;s with us.
                </h3>
                <p className="mt-2 text-sm text-[#57534E] leading-relaxed">
                  We&apos;ll review your requirements and reach out to{" "}
                  <span className="font-semibold text-[#111827]">{formData.email || "your email"}</span>{" "}
                  promptly.
                </p>
                <div className="mt-6">
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: "", business: "", email: "", phone: "", message: "" });
                    }}
                    className="rounded-md border border-[#E7E5E4] bg-[#F9F9F7] px-5 py-2.5 text-sm font-medium text-[#111827] transition-colors hover:border-[#111827]"
                  >
                    Send another inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-medium text-[#111827] mb-1.5">
                      Your name *
                    </label>
                    <input
                      type="text"
                      id="contact-name"
                      name="name"
                      required
                      placeholder="First and last"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full rounded-md border border-[#D6D3D1] bg-[#F9F9F7] px-3.5 py-2.5 text-sm text-[#111827] outline-none focus:border-[#065F46] focus:bg-white transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-business" className="block text-xs font-medium text-[#111827] mb-1.5">
                      Business name
                    </label>
                    <input
                      type="text"
                      id="contact-business"
                      name="business"
                      placeholder="What it's called"
                      value={formData.business}
                      onChange={(e) => setFormData({ ...formData, business: e.target.value })}
                      className="w-full rounded-md border border-[#D6D3D1] bg-[#F9F9F7] px-3.5 py-2.5 text-sm text-[#111827] outline-none focus:border-[#065F46] focus:bg-white transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-medium text-[#111827] mb-1.5">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="contact-email"
                      name="email"
                      required
                      placeholder="you@yourbusiness.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full rounded-md border border-[#D6D3D1] bg-[#F9F9F7] px-3.5 py-2.5 text-sm text-[#111827] outline-none focus:border-[#065F46] focus:bg-white transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-phone" className="block text-xs font-medium text-[#111827] mb-1.5">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="contact-phone"
                      name="phone"
                      placeholder="Best number to reach you"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full rounded-md border border-[#D6D3D1] bg-[#F9F9F7] px-3.5 py-2.5 text-sm text-[#111827] outline-none focus:border-[#065F46] focus:bg-white transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs font-medium text-[#111827] mb-1.5">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    placeholder="What kind of business, and what you need."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full rounded-md border border-[#D6D3D1] bg-[#F9F9F7] px-3.5 py-2.5 text-sm text-[#111827] outline-none focus:border-[#065F46] focus:bg-white transition-colors resize-y"
                  />
                </div>

                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <button
                    type="submit"
                    className="rounded-md bg-[#065F46] px-6 py-3 text-sm font-medium text-white shadow-xs transition-all hover:bg-[#064E3B] hover:shadow-sm active:scale-98"
                  >
                    Send it over →
                  </button>
                  <span className="text-xs text-[#78716C]">
                    No newsletter. No sales spam.
                  </span>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
