"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";

const CONSENT_STORAGE_KEY = "alizane_cookie_consent";

type ConsentChoice = "accepted" | "declined";

/**
 * Updates Google Consent Mode v2 if gtag is initialized on the window.
 */
function updateGtagConsent(consent: ConsentChoice) {
  if (typeof window === "undefined") return;

  const grantedOrDenied = consent === "accepted" ? "granted" : "denied";

  if (typeof (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag === "function") {
    (window as unknown as { gtag: (...args: unknown[]) => void }).gtag("consent", "update", {
      analytics_storage: grantedOrDenied,
      ad_storage: grantedOrDenied,
      ad_user_data: grantedOrDenied,
      ad_personalization: grantedOrDenied,
    });
  }

  // Dispatch custom window event for other listeners
  window.dispatchEvent(
    new CustomEvent("alizane:consent-updated", { detail: { consent } })
  );
}

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check existing stored consent
    try {
      const stored = localStorage.getItem(CONSENT_STORAGE_KEY) as ConsentChoice | null;
      if (!stored) {
        // Small initial delay so page loads cleanly before banner surfaces
        const timer = setTimeout(() => setIsVisible(true), 600);
        return () => clearTimeout(timer);
      } else {
        // Re-apply stored preference to gtag on page load
        updateGtagConsent(stored);
      }
    } catch {
      // LocalStorage unavailable (e.g. private browsing restrictions)
      setIsVisible(true);
    }
  }, []);

  // Allow re-opening banner from footer or settings link
  useEffect(() => {
    const handleReopen = () => setIsVisible(true);
    window.addEventListener("alizane:open-cookie-settings", handleReopen);
    return () => window.removeEventListener("alizane:open-cookie-settings", handleReopen);
  }, []);

  const handleChoice = (choice: ConsentChoice) => {
    try {
      localStorage.setItem(CONSENT_STORAGE_KEY, choice);
    } catch {
      // Ignore storage errors
    }
    updateGtagConsent(choice);
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <aside
      aria-label="Cookie consent"
      role="dialog"
      aria-modal="false"
      className="fixed bottom-4 left-4 right-4 z-50 max-w-md rounded-xl border border-[#E7E5E4] bg-white p-5 sm:p-6 shadow-md transition-all duration-200 sm:bottom-6 sm:left-6 sm:right-auto animate-in fade-in slide-in-from-bottom-3"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-[#059669]" />
          <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#111827]">
            Cookie Preferences
          </span>
        </div>
        <button
          type="button"
          onClick={() => handleChoice("declined")}
          aria-label="Close and decline optional cookies"
          className="text-[#78716C] hover:text-[#111827] text-xs font-mono transition-colors cursor-pointer"
        >
          ✕
        </button>
      </div>

      <p className="mt-3 text-xs leading-relaxed text-[#57534E]">
        We use cookies and measurement analytics to understand site traffic and improve our products. You can choose whether to accept performance and analytics cookies.
      </p>

      <div className="mt-4 flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-[#E7E5E4]">
        <Link
          href="/privacy"
          className="text-xs font-mono text-[#065F46] underline underline-offset-4 hover:text-[#064E3B]"
        >
          Privacy Policy
        </Link>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => handleChoice("declined")}
            className="rounded-md border border-[#D6D3D1] bg-[#F9F9F7] px-3 py-1.5 text-xs font-medium text-[#111827] shadow-2xs hover:border-[#111827] hover:bg-white transition-all cursor-pointer"
          >
            Essential only
          </button>
          <button
            type="button"
            onClick={() => handleChoice("accepted")}
            className="rounded-md bg-[#065F46] px-3.5 py-1.5 text-xs font-medium text-white shadow-xs hover:bg-[#064E3B] active:scale-98 transition-all cursor-pointer"
          >
            Accept all
          </button>
        </div>
      </div>
    </aside>
  );
}
