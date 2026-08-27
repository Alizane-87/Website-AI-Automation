"use client";

import React, { useState, useEffect } from "react";
import { AIChatWidget } from "@/components/ai-chat-widget";
import { ContractorService, ContractorReview, ContractorLeader } from "@/lib/supabase-chat";

interface DemoShowcaseProps {
  clientId: string;
  businessName: string;
  phone: string;
  tollFree?: string;
  address?: string;
  serviceCity: string;
  tagline: string;
  subheadline: string;
  trade: string;
  trustBadges: string[];
  services: ContractorService[];
  serviceAreas: string[];
  reviews: ContractorReview[];
  leadership?: ContractorLeader[];
  foundationMission?: string;
  themeAccent: string;
  themePulse: string;
  themeBorder: string;
  themeOnAccent: string;
}

export function DemoShowcase({
  clientId,
  businessName = "Water Extraction Team",
  phone = "(303) 232-8888",
  tollFree = "(866) 344-4WET",
  address = "4191 Inca St, Denver, CO 80211",
  serviceCity = "Denver Metropolitan Area & Colorado Front Range",
  services = [],
  leadership = [],
  reviews = [],
}: DemoShowcaseProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Triage / Form States
  const [damageCategory, setDamageCategory] = useState("Category 1: Clean Water (Supply Line / Pipe Burst)");
  const [selectedService, setSelectedService] = useState("Water Extraction & Structural Drying");
  const [formName, setFormName] = useState("");
  const [formPhone, setFormPhone] = useState("");
  const [formAddress, setFormAddress] = useState("");
  const [formLossDetails, setFormLossDetails] = useState("");
  const [isFirstResponder, setIsFirstResponder] = useState(false);
  const [intakeDispatched, setIntakeDispatched] = useState(false);
  const [intakeLoading, setIntakeLoading] = useState(false);

  const cleanPhone = phone.replace(/\D/g, "");
  const telHref = `tel:${cleanPhone.length === 10 ? `+1${cleanPhone}` : cleanPhone}`;

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleIntakeSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName || !formPhone) return;

    setIntakeLoading(true);
    try {
      await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formName,
          phone: formPhone,
          company: businessName,
          trade: selectedService,
          monthlyCallRange: isFirstResponder ? "First Responder (Foundation 1023 5% Loss Donation)" : "Standard Loss",
          crm: `TRIAGE INTAKE: ${businessName} (${clientId}) | Addr: ${formAddress || "N/A"} | Damage: ${damageCategory} | Details: ${formLossDetails || "None"}`,
        }),
      });
      setIntakeDispatched(true);
    } catch {
      setIntakeDispatched(true);
    } finally {
      setIntakeLoading(false);
    }
  };

  const initialGreeting = `This is the 24/7 AI Emergency Dispatch Assistant for ${businessName} (Corporate Office: 4191 Inca St, Denver). How can I assist with your emergency water extraction, structural drying, fire restoration, or insurance claim today?`;

  return (
    <div
      className="min-h-screen bg-[#F4F1EC] text-[#16191C] font-sans antialiased selection:bg-[#C94300] selection:text-[#FFFFFF]"
      style={
        {
          "--chat-accent": "#C94300",
          "--chat-pulse": "#F07B41",
          "--chat-accent-hover": "#AD3A00",
          "--chat-accent-border": "#16191C",
          "--chat-on-accent": "#FFFFFF",
        } as React.CSSProperties
      }
    >
      {/* ─────────────────────────────────────────────────────────────────────────
          CUSTOM MOTION STYLES (Section 9.7 Motion System)
      ───────────────────────────────────────────────────────────────────────── */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes hourRuleDraw {
          0% { width: 0%; }
          100% { width: 100%; }
        }
        @keyframes tickFadeIn {
          0% { opacity: 0; transform: translateY(4px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .hour-rule-line-animated {
          animation: hourRuleDraw 420ms cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        .tick-stagger-1 { animation: tickFadeIn 180ms cubic-bezier(0.0, 0.0, 0.2, 1) 200ms forwards; opacity: 0; }
        .tick-stagger-2 { animation: tickFadeIn 180ms cubic-bezier(0.0, 0.0, 0.2, 1) 260ms forwards; opacity: 0; }
        .tick-stagger-3 { animation: tickFadeIn 180ms cubic-bezier(0.0, 0.0, 0.2, 1) 320ms forwards; opacity: 0; }
        .tick-stagger-4 { animation: tickFadeIn 180ms cubic-bezier(0.0, 0.0, 0.2, 1) 380ms forwards; opacity: 0; }
        
        .service-row {
          transition: background-color 140ms cubic-bezier(0.4, 0.0, 0.2, 1);
        }
        .service-row:hover {
          background-color: #FBFAF8;
        }
        .service-row:hover .service-arrow {
          transform: translateX(4px);
        }
        .service-arrow {
          transition: transform 140ms cubic-bezier(0.4, 0.0, 0.2, 1);
        }
      `}} />

      {/* ─────────────────────────────────────────────────────────────────────────
          0. PERSISTENT DESKTOP DISPATCH BAR (Row 1 of Header, Dark Slate Ground)
          Section 8.1 Specification
      ───────────────────────────────────────────────────────────────────────── */}
      <div className="hidden lg:block bg-[#16191C] text-[#F4F1EC] border-b border-[#242A2F] py-2.5 px-6 sticky top-0 z-50">
        <div className="max-w-[1440px] mx-auto flex items-center justify-between font-mono text-[12px] tracking-[0.08em]">
          <div className="flex items-center gap-3 text-[#79838B]">
            <span className="inline-block w-2 h-2 rounded-none bg-[#C94300]"></span>
            <span>24 HOURS A DAY · DENVER, CO & FRONT RANGE</span>
            <span className="text-[#5C666E]">|</span>
            <span>EST. OCTOBER 14, 2004 · BBB A+ ACCREDITED</span>
          </div>
          <div className="flex items-center gap-6">
            <span className="text-[#79838B]">EMERGENCY DISPATCH:</span>
            <a
              href={telHref}
              className="text-[#F4F1EC] font-semibold text-[15px] hover:text-[#F07B41] transition-colors tracking-normal flex items-center gap-2"
            >
              <span className="text-[#C94300]">☎</span> {phone}
            </a>
            <span className="text-[#5C666E]">·</span>
            <a
              href="#contact"
              className="text-[#79838B] hover:text-[#F4F1EC] transition-colors text-[13px] tracking-normal cursor-pointer"
            >
              Not an emergency →
            </a>
          </div>
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────────────────
          0B. DESKTOP MAIN NAVIGATION (Row 2 of Header, Light Gypsum Ground)
          Section 5.2 Specification with Smooth Anchor Navigation
      ───────────────────────────────────────────────────────────────────────── */}
      <header className="bg-[#F4F1EC]/95 backdrop-blur-sm border-b border-[#DCD5C9] sticky top-0 lg:top-[41px] z-40">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <a href="#" className="group text-left cursor-pointer">
              <div className="flex items-baseline gap-2">
                <span className="font-bold text-[19px] sm:text-[22px] tracking-[-0.02em] text-[#16191C] group-hover:text-[#AD430E] transition-colors uppercase">
                  Water Extraction Team
                </span>
                <span className="font-mono text-[11px] font-semibold text-[#AD430E] tracking-[0.08em]">
                  WET
                </span>
              </div>
              <p className="font-mono text-[10px] text-[#5C666E] uppercase tracking-[0.06em]">
                Loss Mitigation & Structural Drying · Est. 2004
              </p>
            </a>
          </div>

          <nav className="hidden lg:flex items-center gap-7 font-medium text-[14px] text-[#16191C]">
            <a href="#services" className="hover:text-[#AD430E] transition-colors">Emergency Services</a>
            <a href="#process" className="hover:text-[#AD430E] transition-colors">What Happens Next</a>
            <a href="#insurance" className="hover:text-[#AD430E] transition-colors">Insurance & Deductibles</a>
            <a href="#managers" className="hover:text-[#AD430E] transition-colors">Property Managers</a>
            <a href="#about" className="hover:text-[#AD430E] transition-colors">About</a>
            <a href="#evidence" className="hover:text-[#AD430E] transition-colors">Evidence</a>
            <a href="#foundation" className="hover:text-[#0E4F52] text-[#0E4F52] font-semibold transition-colors">Foundation 1023</a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center justify-center px-3.5 py-1.5 text-[13px] font-semibold text-[#16191C] border-[1.5px] border-[#16191C] hover:bg-[#FBFAF8] transition-colors rounded-[2px]"
            >
              Start an Intake
            </a>
            <a
              href={telHref}
              className="inline-flex items-center justify-center px-4 py-2 text-[14px] font-semibold text-[#FFFFFF] bg-[#C94300] hover:bg-[#AD3A00] transition-colors rounded-[2px] font-mono tracking-tight"
            >
              <span className="hidden sm:inline">Call Dispatch · </span> {phone}
            </a>
            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden px-3 py-1.5 border border-[#16191C] font-mono text-[13px] font-bold uppercase"
            >
              Menu
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#16191C] text-[#F4F1EC] border-b-2 border-[#C94300] p-6 space-y-4 font-mono text-[14px]">
            <div className="border-b border-[#242A2F] pb-3 flex items-center justify-between">
              <span className="text-[#C94300] font-bold">24/7 DISPATCH: {phone}</span>
              <button onClick={() => setMobileMenuOpen(false)} className="text-[#79838B]">✕ CLOSE</button>
            </div>
            <div className="grid grid-cols-2 gap-3 text-[13px]">
              <a href="#services" onClick={() => setMobileMenuOpen(false)} className="text-left py-1 hover:text-[#C94300]">Services</a>
              <a href="#process" onClick={() => setMobileMenuOpen(false)} className="text-left py-1 hover:text-[#C94300]">Process (Hour 0→Dry)</a>
              <a href="#insurance" onClick={() => setMobileMenuOpen(false)} className="text-left py-1 hover:text-[#C94300]">Insurance & Deductibles</a>
              <a href="#managers" onClick={() => setMobileMenuOpen(false)} className="text-left py-1 hover:text-[#C94300]">Property Managers</a>
              <a href="#about" onClick={() => setMobileMenuOpen(false)} className="text-left py-1 hover:text-[#C94300]">About Us</a>
              <a href="#evidence" onClick={() => setMobileMenuOpen(false)} className="text-left py-1 hover:text-[#C94300]">Reviews & Proof</a>
              <a href="#foundation" onClick={() => setMobileMenuOpen(false)} className="text-left py-1 text-[#9CC7C2]">Foundation 1023</a>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="text-left py-1 hover:text-[#C94300]">Contact & Intake</a>
            </div>
          </div>
        )}
      </header>

      {/* ─────────────────────────────────────────────────────────────────────────
          1. HERO SECTION (§6.1)
      ───────────────────────────────────────────────────────────────────────── */}
      <section className="pt-12 sm:pt-16 pb-14 border-b border-[#DCD5C9]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Measure Track (Left) */}
            <div className="hidden lg:block lg:col-span-2 font-mono text-[11px] text-[#5C666E] space-y-4 pt-2 border-l border-[#8E8578] pl-4">
              <div>
                <p className="font-semibold text-[#16191C]">LOCATION</p>
                <p>Denver Metro & Front Range</p>
              </div>
              <div>
                <p className="font-semibold text-[#16191C]">STANDARDS</p>
                <p>IICRC S500 / S520</p>
              </div>
              <div>
                <p className="font-semibold text-[#16191C]">ESTABLISHED</p>
                <p>October 14, 2004</p>
              </div>
              <div>
                <p className="font-semibold text-[#16191C]">BBB STATUS</p>
                <p>A+ Accredited Firm</p>
              </div>
            </div>

            {/* Argument Track (Center) */}
            <div className="lg:col-span-7">
              <p className="font-mono text-[11px] sm:text-[12px] uppercase text-[#AD430E] font-semibold tracking-[0.1em] mb-4">
                DENVER, CO · 24 HOURS A DAY · IICRC CERTIFIED
              </p>
              <h1 className="text-[38px] sm:text-[54px] lg:text-[68px] leading-[0.98] font-bold text-[#16191C] tracking-[-0.02em] uppercase mb-6 max-w-[18ch]">
                Water is moving through your home right now.
              </h1>
              <p className="text-[18px] sm:text-[21px] text-[#5C666E] leading-[1.45] max-w-[42ch] mb-8">
                Call and a certified crew starts the clock. Denver water, fire, and mold mitigation since October 2004.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <a
                  href={telHref}
                  className="inline-flex items-center justify-center gap-3 px-7 py-4 text-[16px] font-bold text-[#FFFFFF] bg-[#C94300] hover:bg-[#AD3A00] transition-colors rounded-[2px] font-mono"
                >
                  <span>☎ CALL EMERGENCY DISPATCH</span>
                  <span className="tracking-tight text-[18px]">{phone}</span>
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-6 py-4 text-[15px] font-semibold text-[#16191C] border-[1.5px] border-[#16191C] hover:bg-[#FBFAF8] transition-colors rounded-[2px]"
                >
                  Submit Triage Form ↓
                </a>
              </div>
            </div>

            {/* Credential Ledger Column (Right) */}
            <div className="lg:col-span-3 bg-[#FBFAF8] border border-[#8E8578] p-5 space-y-4">
              <div className="border-b border-[#DCD5C9] pb-3">
                <span className="font-mono text-[10px] uppercase text-[#79838B] tracking-[0.08em]">
                  CREDENTIAL LEDGER · VERIFIED
                </span>
              </div>
              <div className="space-y-3.5 text-[13px]">
                <div>
                  <p className="font-bold text-[#16191C]">SBA Certified WOSB</p>
                  <p className="text-[#5C666E] text-[12px]">Women-Owned Small Business</p>
                </div>
                <div className="border-t border-[#DCD5C9] pt-2">
                  <p className="font-bold text-[#16191C]">BBB A+ Accredited</p>
                  <p className="text-[#5C666E] text-[12px]">Accredited since Dec 11, 2014</p>
                </div>
                <div className="border-t border-[#DCD5C9] pt-2">
                  <p className="font-bold text-[#16191C]">IICRC Certified Technicians</p>
                  <p className="text-[#5C666E] text-[12px]">Every field technician certified</p>
                </div>
                <div className="border-t border-[#DCD5C9] pt-2">
                  <p className="font-bold text-[#16191C]">Colorado Health Links</p>
                  <p className="text-[#5C666E] text-[12px]">Certified Health & Safety Partner</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────────────
          2. THE SIGNATURE HOUR RULE & PROCESS (§6.2, §8.2, §9.7 ANIMATED)
      ───────────────────────────────────────────────────────────────────────── */}
      <section id="process" className="py-14 bg-[#FBFAF8] border-b border-[#DCD5C9] scroll-mt-20">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="mb-8 max-w-[800px]">
            <p className="font-mono text-[11px] uppercase text-[#AD430E] font-semibold tracking-[0.1em] mb-2">
              SIGNATURE TIME DATUM · IICRC S500 ESCALATION
            </p>
            <h2 className="text-[32px] sm:text-[42px] font-bold text-[#16191C] tracking-tight uppercase leading-[1.05] mb-3">
              The Hour Rule: Why Speed Is a Citable Fact
            </h2>
            <p className="text-[17px] text-[#5C666E] leading-[1.5]">
              Water damage is not an event — it is a clock. What can be dried in place during the first 24 hours must be cut out and discarded if delayed to Hour 48.
            </p>
          </div>

          {/* Animated Hour Rule Horizontal Line */}
          <div className="relative pt-6 pb-6 border-t-2 border-[#16191C]">
            <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ${isLoaded ? "hour-rule-line-animated" : ""}`}>
              <div className="pl-4 border-l-2 border-[#C94300] tick-stagger-1">
                <p className="font-mono text-[17px] font-bold text-[#C94300]">HOUR 0</p>
                <p className="font-bold text-[16px] text-[#16191C] mt-0.5">You Call Dispatch</p>
                <p className="text-[13px] text-[#5C666E] mt-1 leading-[1.5]">
                  Crew starts clock. Extraction units deployed, FLIR thermal moisture mapping started.
                </p>
              </div>
              <div className="pl-4 border-l-2 border-[#8E8578] tick-stagger-2">
                <p className="font-mono text-[17px] font-bold text-[#16191C]">HOUR 24</p>
                <p className="font-bold text-[16px] text-[#16191C] mt-0.5">Clean Water Turns</p>
                <p className="text-[13px] text-[#5C666E] mt-1 leading-[1.5]">
                  Category 1 sanitary water degrades toward Category 2 contamination. Microbial growth begins.
                </p>
              </div>
              <div className="pl-4 border-l-2 border-[#8E8578] tick-stagger-3">
                <p className="font-mono text-[17px] font-bold text-[#16191C]">HOUR 48</p>
                <p className="font-bold text-[16px] text-[#16191C] mt-0.5">Scope & Costs Rise</p>
                <p className="text-[13px] text-[#5C666E] mt-1 leading-[1.5]">
                  Materials that could dry in place must now be removed under containment.
                </p>
              </div>
              <div className="pl-4 border-l-2 border-[#0E4F52] tick-stagger-4">
                <p className="font-mono text-[17px] font-bold text-[#0E4F52]">HOUR 72+</p>
                <p className="font-bold text-[16px] text-[#16191C] mt-0.5">Documented Dry Target</p>
                <p className="text-[13px] text-[#5C666E] mt-1 leading-[1.5]">
                  Daily protimeter readings confirm moisture content matches unaffected dry baseline.
                </p>
              </div>
            </div>
          </div>

          {/* Full Process & The Drying Log Card Facsimile */}
          <div className="mt-12 pt-8 border-t border-[#DCD5C9] grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-6 space-y-6">
              <h3 className="font-bold text-[22px] text-[#16191C] uppercase">What Happens When Our Crews Arrive</h3>
              <div className="space-y-4 text-[14px] text-[#5C666E] leading-[1.6]">
                <p>
                  <strong className="text-[#16191C]">1. Source Isolation & Floor Protection:</strong> We verify the main water shut-off and lay heavy drop cloths to protect unaffected hardwood and carpet before rolling in equipment.
                </p>
                <p>
                  <strong className="text-[#16191C]">2. High-CFM Truck-Mounted Extraction:</strong> Thousands of gallons are pumped out directly to our truck holding tanks, pulling trapped water out of padding and subflooring.
                </p>
                <p>
                  <strong className="text-[#16191C]">3. Controlled Square Openings:</strong> If trapped in wall cavities, we cut clean, straight square openings to minimize reconstruction costs for your insurer.
                </p>
                <p>
                  <strong className="text-[#16191C]">4. Psychrometric Chamber Setup:</strong> LGR commercial dehumidifiers and vortex air movers create balanced negative pressure to evaporate hidden moisture.
                </p>
              </div>
            </div>

            {/* The Drying Log Card Facsimile (§8.5) */}
            <div className="lg:col-span-6">
              <div className="bg-[#F4F1EC] border-2 border-[#16191C] p-5 sm:p-6 font-mono text-[12px]">
                <div className="flex items-center justify-between border-b border-[#16191C] pb-3 mb-3">
                  <div>
                    <span className="font-bold text-[13px] text-[#16191C] uppercase block">
                      W.E.T. Psychrometric Field Record
                    </span>
                    <span className="text-[#79838B] text-[11px]">JOB REF: #DEN-8891 · DISPATCH: 4191 INCA ST</span>
                  </div>
                  <span className="px-2 py-1 bg-[#E7E2DA] text-[#8A5B00] border border-[#8A5B00] text-[9px] sm:text-[10px] font-bold uppercase">
                    ILLUSTRATIVE SAMPLE — NOT A CUSTOMER RECORD
                  </span>
                </div>

                <div className="space-y-3">
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 bg-[#E7E2DA] p-2.5 border border-[#8E8578] text-[10px] sm:text-[11px]">
                    <div>
                      <span className="text-[#5C666E] block">DRY TARGET</span>
                      <span className="font-bold">11.0% MC</span>
                    </div>
                    <div>
                      <span className="text-[#5C666E] block">ROOM TEMP</span>
                      <span className="font-bold">72°F / 22°C</span>
                    </div>
                    <div>
                      <span className="text-[#5C666E] block">RH TARGET</span>
                      <span className="font-bold">34% RH</span>
                    </div>
                    <div>
                      <span className="text-[#5C666E] block">TECH LEAD</span>
                      <span className="font-bold">JK / DL (IICRC)</span>
                    </div>
                  </div>

                  <table className="w-full text-left border-collapse text-[11px]">
                    <thead>
                      <tr className="border-b border-[#8E8578] text-[#5C666E]">
                        <th className="py-1.5">LOCATION</th>
                        <th className="py-1.5">DAY 1</th>
                        <th className="py-1.5">DAY 2</th>
                        <th className="py-1.5">DAY 3</th>
                        <th className="py-1.5">STATUS</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#DCD5C9]">
                      <tr>
                        <td className="py-1.5 font-bold">Basement Subfloor (OSB)</td>
                        <td className="py-1.5 text-[#C94300] font-bold">28.4%</td>
                        <td className="py-1.5 text-[#8A5B00]">18.1%</td>
                        <td className="py-1.5 text-[#0E4F52] font-bold">10.8%</td>
                        <td className="py-1.5 text-[#0E4F52] font-bold">✓ PASS</td>
                      </tr>
                      <tr>
                        <td className="py-1.5 font-bold">Drywall - Base 12"</td>
                        <td className="py-1.5 text-[#C94300] font-bold">34.2%</td>
                        <td className="py-1.5 text-[#8A5B00]">16.5%</td>
                        <td className="py-1.5 text-[#0E4F52] font-bold">9.4%</td>
                        <td className="py-1.5 text-[#0E4F52] font-bold">✓ PASS</td>
                      </tr>
                      <tr>
                        <td className="py-1.5 font-bold">Bottom Plate Framing (Fir)</td>
                        <td className="py-1.5 text-[#C94300] font-bold">24.1%</td>
                        <td className="py-1.5 text-[#8A5B00]">15.0%</td>
                        <td className="py-1.5 text-[#0E4F52] font-bold">11.0%</td>
                        <td className="py-1.5 text-[#0E4F52] font-bold">✓ PASS</td>
                      </tr>
                    </tbody>
                  </table>

                  <div className="border-t border-[#8E8578] pt-2 text-[10px] text-[#5C666E]">
                    This comprehensive scope record and psychrometric moisture log is delivered directly to your insurance adjuster for direct carrier payout.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────────────
          3. TABULATED SERVICES INDEX (§8.11 ANIMATED) & THE ESCALATION LADDER
      ───────────────────────────────────────────────────────────────────────── */}
      <section id="services" className="py-14 border-b border-[#DCD5C9] scroll-mt-20">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="max-w-[800px] mb-10">
            <p className="font-mono text-[11px] uppercase text-[#AD430E] font-semibold tracking-[0.1em] mb-2">
              CERTIFIED SERVICE DIRECTORY · TABULATED INDEX
            </p>
            <h2 className="text-[32px] sm:text-[42px] font-bold text-[#16191C] tracking-tight uppercase leading-[1.05] mb-3">
              Full Loss Mitigation & Structural Restoration
            </h2>
            <p className="text-[17px] text-[#5C666E]">
              Every service is executed by IICRC-certified field technicians using truck-mounted extraction and thermal imaging.
            </p>
          </div>

          {/* 6 Tabulated Service Rows with Section 9.7 Hover Animation */}
          <div className="border-t-2 border-[#16191C] divide-y divide-[#DCD5C9] mb-14">
            {[
              {
                code: "WE / 01",
                name: "Water Extraction & Structural Drying",
                desc: "High-CFM truck-mounted pump out, FLIR moisture mapping, and protimeter verification to reach dry baseline standards.",
              },
              {
                code: "MR / 02",
                name: "Mold Remediation & Physical Containment",
                desc: "Negative air pressure poly-containment, HEPA air scrubbing, and botanical antimicrobial treatments addressing the moisture source.",
              },
              {
                code: "FS / 03",
                name: "Fire & Smoke Damage Restoration",
                desc: "Soot and protein neutralization, structural deodorization, and water extraction from emergency firefighting efforts.",
              },
              {
                code: "OR / 04",
                name: "Odor Removal & Thermal Fogging",
                desc: "Molecular thermal fogging that permanently breaks down smoke, pet, cooking, and decomposition odors without masking agents.",
              },
              {
                code: "AA / 05",
                name: "Asbestos Testing & Abatement",
                desc: "State of Colorado CDPHE-certified testing at property losses, certified containment barriers, and compliant disposal manifests.",
              },
              {
                code: "CU / 06",
                name: "Carpet & Fine Upholstery Cleaning",
                desc: "IICRC certified care for delicate area rugs, draperies, and fine upholstery in wool, leather, suede, linen, and silk.",
              },
            ].map((s) => (
              <div key={s.code} className="service-row py-5 px-4 sm:px-6 flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer">
                <div className="flex items-baseline gap-4 md:gap-8">
                  <span className="font-mono text-[13px] font-bold text-[#AD430E] tracking-wider w-16 shrink-0">
                    [{s.code}]
                  </span>
                  <div>
                    <h3 className="text-[20px] sm:text-[22px] font-bold text-[#16191C]">{s.name}</h3>
                    <p className="text-[14px] text-[#5C666E] mt-1 max-w-[70ch]">{s.desc}</p>
                  </div>
                </div>
                <div className="service-arrow text-[18px] font-bold text-[#AD430E] self-end md:self-center">
                  →
                </div>
              </div>
            ))}
          </div>

          {/* The 3-Tier Escalation Ladder (§8.3) */}
          <div className="bg-[#FBFAF8] border-2 border-[#16191C] p-6 sm:p-8">
            <div className="max-w-[700px] mb-6">
              <span className="font-mono text-[11px] font-bold text-[#AD430E] uppercase tracking-wider block mb-1">
                IICRC S500 WATER CATEGORY DEFINITIONS
              </span>
              <h3 className="text-[24px] font-bold text-[#16191C] uppercase">The Water Contamination Ladder</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-[#F4F1EC] border-2 border-[#8E8578] p-5">
                <span className="font-mono text-[11px] font-bold text-[#16191C] block">CATEGORY 1</span>
                <h4 className="text-[18px] font-bold text-[#16191C] mt-1">Clean Water Source</h4>
                <p className="text-[13px] text-[#5C666E] mt-2 leading-[1.5]">
                  Supply line break, water heater leak, or rainwater through roof. Materials dry in place if treated within 24 hours.
                </p>
              </div>
              <div className="bg-[#F4F1EC] border-2 border-[#8A5B00] p-5">
                <span className="font-mono text-[11px] font-bold text-[#8A5B00] block">CATEGORY 2</span>
                <h4 className="text-[18px] font-bold text-[#16191C] mt-1">Grey Water Contamination</h4>
                <p className="text-[13px] text-[#5C666E] mt-2 leading-[1.5]">
                  Washing machine overflows, dishwasher discharge, or water dwelling past 24 hours. Contaminated pad and insulation must be removed.
                </p>
              </div>
              <div className="bg-[#F4F1EC] border-2 border-[#C94300] p-5">
                <span className="font-mono text-[11px] font-bold text-[#C94300] block">CATEGORY 3</span>
                <h4 className="text-[18px] font-bold text-[#16191C] mt-1">Black Water / Gross Hazard</h4>
                <p className="text-[13px] text-[#5C666E] mt-2 leading-[1.5]">
                  Sewage back-up, storm runoff, or flood waters. Requires full antimicrobial decontamination, negative air scrubbers, and demolition.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────────────
          4. INSURANCE, DEDUCTIBLES & WHAT TO DO FIRST (§6.8)
      ───────────────────────────────────────────────────────────────────────── */}
      <section id="insurance" className="py-14 border-b border-[#DCD5C9] scroll-mt-20">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="max-w-[850px] mb-10">
            <p className="font-mono text-[11px] uppercase text-[#AD430E] font-semibold tracking-[0.1em] mb-2">
              DIRECT BILLING & DEDUCTIBLE GUIDANCE
            </p>
            <h2 className="text-[32px] sm:text-[42px] font-bold text-[#16191C] tracking-tight uppercase leading-[1.05] mb-3">
              Insurance Claims & Published Deductible Bands
            </h2>
            <p className="text-[17px] text-[#5C666E] leading-[1.5]">
              Homeowners often ask: “Should I call my insurance company or call mitigation first?” The rule is clear: <strong>call mitigation immediately to stop secondary damage</strong>. Your insurance policy requires you to take reasonable steps to prevent further loss.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Deductible Bands Table */}
            <div className="lg:col-span-7 bg-[#FBFAF8] border-2 border-[#16191C] p-6 sm:p-8">
              <h3 className="font-mono text-[13px] font-bold text-[#16191C] uppercase mb-4">
                Published Deductible Payment Bands
              </h3>
              <table className="w-full text-left font-mono text-[13px] border-collapse">
                <thead>
                  <tr className="border-b-2 border-[#16191C] text-[#5C666E]">
                    <th className="py-2">BAND</th>
                    <th className="py-2">RANGE</th>
                    <th className="py-2">TYPICAL POLICY SCENARIO</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#DCD5C9]">
                  <tr>
                    <td className="py-3 font-bold text-[#16191C]">Low Deductible</td>
                    <td className="py-3 text-[#AD430E] font-bold">$100 – $1,000</td>
                    <td className="py-3 text-[#5C666E]">Standard residential plumbing pipe bursts</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-bold text-[#16191C]">Medium Deductible</td>
                    <td className="py-3 text-[#AD430E] font-bold">$1,100 – $5,000</td>
                    <td className="py-3 text-[#5C666E]">Multi-room structural water or soot loss</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-bold text-[#16191C]">High Deductible</td>
                    <td className="py-3 text-[#AD430E] font-bold">$5,500 – $10,000</td>
                    <td className="py-3 text-[#5C666E]">Commercial, HOA, or multi-family property loss</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Direct Billing Explanation */}
            <div className="lg:col-span-5 space-y-4">
              <div className="bg-[#F4F1EC] border border-[#8E8578] p-5">
                <h4 className="font-bold text-[16px] text-[#16191C] mb-2">Direct Carrier Xactimate Billing</h4>
                <p className="text-[13px] text-[#5C666E] leading-[1.5]">
                  We use Xactimate — the exact same pricing software used by State Farm, Allstate, USAA, Travelers, and Farmers adjusters, ensuring seamless approval.
                </p>
              </div>
              <div className="bg-[#F4F1EC] border border-[#8E8578] p-5">
                <h4 className="font-bold text-[16px] text-[#16191C] mb-2">Zero Out-Of-Pocket Delays</h4>
                <p className="text-[13px] text-[#5C666E] leading-[1.5]">
                  You pay only your agreed deductible. We submit the full drying record, moisture log, and itemized scope directly to your carrier.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────────────
          5. PROPERTY MANAGERS & HOA DISASTER RESPONSE (§6.10)
      ───────────────────────────────────────────────────────────────────────── */}
      <section id="managers" className="py-14 bg-[#FBFAF8] border-b border-[#DCD5C9] scroll-mt-20">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="max-w-[850px] mb-8">
            <p className="font-mono text-[11px] uppercase text-[#AD430E] font-semibold tracking-[0.1em] mb-2">
              INSTITUTIONAL & HOA PORTFOLIO SERVICES
            </p>
            <h2 className="text-[32px] sm:text-[42px] font-bold text-[#16191C] tracking-tight uppercase leading-[1.05] mb-3">
              HOA, Multi-Family & Management Companies
            </h2>
            <p className="text-[17px] text-[#5C666E] leading-[1.5]">
              Led by EVP Mark Muniz-Brown (CMCA, AMS, PCAM), W.E.T. specializes in multi-family emergency response contracts, tenant coordination, and comprehensive board documentation packages.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#F4F1EC] border border-[#8E8578] p-5">
              <strong className="block text-[#16191C] font-bold text-[16px] mb-1">Simultaneous Unit Capacity</strong>
              <p className="text-[13px] text-[#5C666E]">Large truck fleet can extract up to 12 multi-family units at once.</p>
            </div>
            <div className="bg-[#F4F1EC] border border-[#8E8578] p-5">
              <strong className="block text-[#16191C] font-bold text-[16px] mb-1">Master Billing Portals</strong>
              <p className="text-[13px] text-[#5C666E]">Itemized invoicing separating HOA common areas from owner units.</p>
            </div>
            <div className="bg-[#F4F1EC] border border-[#8E8578] p-5">
              <strong className="block text-[#16191C] font-bold text-[16px] mb-1">After-Hours Protocol</strong>
              <p className="text-[13px] text-[#5C666E]">Dedicated direct line for property managers with zero phone tree delays.</p>
            </div>
            <div className="bg-[#F4F1EC] border border-[#8E8578] p-5">
              <strong className="block text-[#16191C] font-bold text-[16px] mb-1">Licensed in CO & MT</strong>
              <p className="text-[13px] text-[#5C666E]">Comprehensive general liability and worker's compensation coverage.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────────────
          6. ABOUT & EXECUTIVE LEADERSHIP (§6.11)
      ───────────────────────────────────────────────────────────────────────── */}
      <section id="about" className="py-14 border-b border-[#DCD5C9] scroll-mt-20">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="max-w-[800px] mb-10">
            <p className="font-mono text-[11px] uppercase text-[#AD430E] font-semibold tracking-[0.1em] mb-2">
              COMPANY HISTORY & LEADERSHIP
            </p>
            <h2 className="text-[32px] sm:text-[42px] font-bold text-[#16191C] tracking-tight uppercase leading-[1.05] mb-3">
              Serving Colorado’s Front Range Since October 14, 2004
            </h2>
            <p className="text-[17px] text-[#5C666E] leading-[1.5]">
              Water Extraction Team (W.E.T.) is an SBA Certified Women-Owned Small Business (WOSB), BBB A+ Accredited firm since 2014, and Colorado Health Links Safety Partner.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#FBFAF8] border border-[#8E8578] p-6">
              <span className="font-mono text-[11px] font-bold text-[#AD430E] block">CO-OWNER & COO</span>
              <h3 className="text-[20px] font-bold text-[#16191C] mt-1">Jennifer Kronebusch, MBA</h3>
              <p className="text-[13px] text-[#5C666E] mt-2 leading-[1.5]">
                Directing residential and commercial large-loss restoration throughout Colorado and Montana for nearly two decades.
              </p>
            </div>
            <div className="bg-[#FBFAF8] border border-[#8E8578] p-6">
              <span className="font-mono text-[11px] font-bold text-[#AD430E] block">CO-OWNER & PRESIDENT</span>
              <h3 className="text-[20px] font-bold text-[#16191C] mt-1">David Lian</h3>
              <p className="text-[13px] text-[#5C666E] mt-2 leading-[1.5]">
                Over three decades managing disaster recovery operations, industrial water pumps, and insurance carrier settlements.
              </p>
            </div>
            <div className="bg-[#FBFAF8] border border-[#8E8578] p-6">
              <span className="font-mono text-[11px] font-bold text-[#AD430E] block">EVP BUSINESS DEVELOPMENT</span>
              <h3 className="text-[20px] font-bold text-[#16191C] mt-1">Mark Muniz-Brown, CMCA</h3>
              <p className="text-[13px] text-[#5C666E] mt-2 leading-[1.5]">
                Two decades serving HOA Boards of Directors and management company portfolios across the Denver Metro.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────────────
          7. VERIFIED CUSTOMER EVIDENCE (§6.12, §8.7)
      ───────────────────────────────────────────────────────────────────────── */}
      <section id="evidence" className="py-14 bg-[#FBFAF8] border-b border-[#DCD5C9] scroll-mt-20">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="max-w-[800px] mb-8">
            <p className="font-mono text-[11px] uppercase text-[#AD430E] font-semibold tracking-[0.1em] mb-2">
              THIRD-PARTY EVIDENCE & 4 PROOF BREAKDOWN
            </p>
            <h2 className="text-[32px] sm:text-[42px] font-bold text-[#16191C] tracking-tight uppercase leading-[1.05]">
              Verified HOA Commercial Case Study
            </h2>
          </div>

          <div className="bg-[#F4F1EC] border-2 border-[#16191C] p-6 sm:p-8 max-w-[1000px]">
            <blockquote className="text-[18px] sm:text-[20px] text-[#16191C] leading-[1.55] italic">
              “I absolutely recommend Mark and WET. We had an active flood from a pipe on the third floor of one of our HOA communities, I called Mark and he had a crew in route within minutes. Once on site, the crew opened the wall with such care, nice straight opening making repairs so much easier, placed drop cloths on the floor to protect the flooring, found the leak and fixed it, dried everything out, explained to the owners what was needed to continue drying out the walls, floors and such. They called and followed up over the next couple of days, once it was all dried out, they came back and removed their equipment. The speed and professionalism is much appreciated!”
            </blockquote>
            <div className="mt-6 pt-4 border-t border-[#DCD5C9] flex flex-col sm:flex-row sm:items-center justify-between font-mono text-[12px] gap-2">
              <span className="font-bold text-[#16191C]">JULIE BACA · COLORADO MANAGEMENT & REALTY</span>
              <span className="text-[#0E4F52] font-semibold">VERIFIED HOA PROPERTY MANAGER</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────────────
          8. FOUNDATION 1023 PARTNERSHIP (§6.13)
      ───────────────────────────────────────────────────────────────────────── */}
      <section id="foundation" className="py-14 bg-[#DCEAE8] border-b border-[#8CB9B4] scroll-mt-20">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="max-w-[850px]">
            <span className="font-mono text-[11px] font-bold text-[#0E4F52] uppercase tracking-[0.1em] block mb-2">
              COMMUNITY COMMITMENT · COLORADO FIRST RESPONDERS
            </span>
            <h2 className="text-[32px] sm:text-[42px] font-bold text-[#0E4F52] tracking-tight uppercase leading-[1.05] mb-4">
              Foundation 1023 Partnership: 5% Loss Donation
            </h2>
            <p className="text-[17px] text-[#0E4F52] leading-[1.6] mb-6">
              Water Extraction Team is a proud supporter of Foundation 1023, providing confidential mental wellness services for Colorado firefighters, paramedics, and law enforcement. W.E.T. donates 5% of a given property loss to Foundation 1023 whenever a first responder or homeowner mentions Foundation 1023 when calling.
            </p>
            <div className="bg-[#FBFAF8] border-2 border-[#0E4F52] p-5 font-mono text-[13px] text-[#0E4F52] max-w-[600px]">
              <p className="font-bold mb-1 uppercase">How to Activate:</p>
              <p>
                Simply mention <strong>“Foundation 1023”</strong> to our dispatcher when you call <strong>{phone}</strong>. 5% of the property loss job proceeds will be routed directly to Foundation 1023.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────────────
          9. TRIAGE INTAKE & LEAD DISPATCH FORM (§6.15, §8.4)
      ───────────────────────────────────────────────────────────────────────── */}
      <section id="contact" className="py-14 border-b border-[#DCD5C9] scroll-mt-20">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-5 space-y-4">
              <p className="font-mono text-[11px] uppercase text-[#AD430E] font-semibold tracking-[0.1em]">
                NON-CALL INTAKE PORTAL
              </p>
              <h2 className="text-[32px] sm:text-[42px] font-bold text-[#16191C] tracking-tight uppercase leading-[1.05]">
                Contact & Emergency Triage Intake
              </h2>
              <p className="text-[16px] text-[#5C666E] leading-[1.5]">
                If water is currently moving, call <strong className="text-[#C94300]">{phone}</strong> immediately. The form below is for non-call inquiries and after-hours dispatch triage.
              </p>
              <div className="border-t border-[#DCD5C9] pt-4 font-mono text-[12px] text-[#5C666E] space-y-1">
                <p><strong className="text-[#16191C]">Corporate Office:</strong> {address}</p>
                <p><strong className="text-[#16191C]">24/7 Hotline:</strong> {phone}</p>
                <p><strong className="text-[#16191C]">Admin Hours:</strong> Mon–Fri 8:00 AM – 5:00 PM MST</p>
              </div>
            </div>

            <div className="lg:col-span-7 bg-[#FBFAF8] border-2 border-[#16191C] p-6 sm:p-8">
              {intakeDispatched ? (
                <div className="p-6 bg-[#DCEAE8] border-2 border-[#0E4F52] text-center font-mono">
                  <p className="text-[20px] font-bold text-[#0E4F52]">✓ INTAKE DISPATCH RECEIVED</p>
                  <p className="text-[14px] text-[#0E4F52] mt-2">
                    A dispatch technician will contact you immediately at <span className="font-bold">{formPhone}</span>.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleIntakeSubmit} className="space-y-4 text-[13px]">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="font-mono font-bold text-[#16191C] block mb-1 uppercase text-[11px]">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={formName}
                        onChange={(e) => setFormName(e.target.value)}
                        placeholder="e.g. Jennifer Smith"
                        className="w-full bg-[#F4F1EC] border border-[#8E8578] p-2.5 text-[#16191C] rounded-[2px]"
                      />
                    </div>
                    <div>
                      <label className="font-mono font-bold text-[#16191C] block mb-1 uppercase text-[11px]">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        value={formPhone}
                        onChange={(e) => setFormPhone(e.target.value)}
                        placeholder="(303) 555-0199"
                        className="w-full bg-[#F4F1EC] border border-[#8E8578] p-2.5 text-[#16191C] rounded-[2px]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="font-mono font-bold text-[#16191C] block mb-1 uppercase text-[11px]">Property Address</label>
                    <input
                      type="text"
                      value={formAddress}
                      onChange={(e) => setFormAddress(e.target.value)}
                      placeholder="Street, City, ZIP in Denver Metro"
                      className="w-full bg-[#F4F1EC] border border-[#8E8578] p-2.5 text-[#16191C] rounded-[2px]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="font-mono font-bold text-[#16191C] block mb-1 uppercase text-[11px]">Service</label>
                      <select
                        value={selectedService}
                        onChange={(e) => setSelectedService(e.target.value)}
                        className="w-full bg-[#F4F1EC] border border-[#8E8578] p-2.5 text-[#16191C] rounded-[2px]"
                      >
                        <option>Water Extraction & Structural Drying</option>
                        <option>Mold Remediation & Containment</option>
                        <option>Fire & Smoke Damage Restoration</option>
                        <option>Odor Removal & Thermal Fogging</option>
                        <option>Asbestos Testing & Abatement</option>
                        <option>Carpet & Upholstery Cleaning</option>
                      </select>
                    </div>
                    <div>
                      <label className="font-mono font-bold text-[#16191C] block mb-1 uppercase text-[11px]">Damage Category</label>
                      <select
                        value={damageCategory}
                        onChange={(e) => setDamageCategory(e.target.value)}
                        className="w-full bg-[#F4F1EC] border border-[#8E8578] p-2.5 text-[#16191C] rounded-[2px]"
                      >
                        <option>Category 1: Clean Water (Supply Pipe)</option>
                        <option>Category 2: Grey Water (Appliance)</option>
                        <option>Category 3: Black Water (Sewage / Flood)</option>
                        <option>Uncertain / On-Site Inspection Needed</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="font-mono font-bold text-[#16191C] block mb-1 uppercase text-[11px]">Loss Details</label>
                    <textarea
                      rows={3}
                      value={formLossDetails}
                      onChange={(e) => setFormLossDetails(e.target.value)}
                      placeholder="Briefly describe standing water depth, affected rooms, or active leaks..."
                      className="w-full bg-[#F4F1EC] border border-[#8E8578] p-2.5 text-[#16191C] rounded-[2px]"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={intakeLoading}
                    className="w-full py-3.5 px-6 bg-[#C94300] hover:bg-[#AD3A00] text-[#FFFFFF] font-mono font-bold text-[14px] uppercase tracking-wide transition-colors rounded-[2px]"
                  >
                    {intakeLoading ? "Transmitting..." : "Submit Triage Request →"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────────────
          10. COMPREHENSIVE FOOTER & SITEMAP (§5.6, §8.14)
      ───────────────────────────────────────────────────────────────────────── */}
      <footer className="bg-[#16191C] text-[#F4F1EC] pt-14 pb-24 lg:pb-14 border-t border-[#242A2F]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pb-12 border-b border-[#242A2F]">
            {/* Col 1: Emergency */}
            <div>
              <p className="font-mono text-[11px] font-bold text-[#F07B41] uppercase tracking-[0.08em] mb-3">
                EMERGENCY LINES (24/7)
              </p>
              <a href={telHref} className="text-[20px] font-bold text-[#F4F1EC] hover:text-[#F07B41] font-mono block">
                {phone}
              </a>
              <p className="text-[13px] text-[#79838B] mt-1 font-mono">Toll-Free: {tollFree}</p>
              <p className="text-[13px] text-[#79838B] mt-1 font-mono">info@waterextractionteam.com</p>
            </div>

            {/* Col 2: Services */}
            <div>
              <p className="font-mono text-[11px] font-bold text-[#F4F1EC] uppercase tracking-[0.08em] mb-3">
                CERTIFIED SERVICES
              </p>
              <ul className="space-y-1.5 text-[13px] text-[#79838B]">
                <li><a href="#services" className="hover:text-[#F4F1EC]">Water Extraction & Drying</a></li>
                <li><a href="#services" className="hover:text-[#F4F1EC]">Mold Remediation</a></li>
                <li><a href="#services" className="hover:text-[#F4F1EC]">Fire & Smoke Restoration</a></li>
                <li><a href="#services" className="hover:text-[#F4F1EC]">Deodorization & Fogging</a></li>
                <li><a href="#services" className="hover:text-[#F4F1EC]">Asbestos Abatement</a></li>
                <li><a href="#services" className="hover:text-[#F4F1EC]">Carpet & Upholstery</a></li>
              </ul>
            </div>

            {/* Col 3: Company */}
            <div>
              <p className="font-mono text-[11px] font-bold text-[#F4F1EC] uppercase tracking-[0.08em] mb-3">
                SECTION SHORTCUTS
              </p>
              <ul className="space-y-1.5 text-[13px] text-[#79838B]">
                <li><a href="#process" className="hover:text-[#F4F1EC]">The Hour Rule (Process)</a></li>
                <li><a href="#insurance" className="hover:text-[#F4F1EC]">Insurance & Deductibles</a></li>
                <li><a href="#managers" className="hover:text-[#F4F1EC]">Property Managers & HOAs</a></li>
                <li><a href="#about" className="hover:text-[#F4F1EC]">About & Leadership</a></li>
                <li><a href="#evidence" className="hover:text-[#F4F1EC]">Verified Case Study</a></li>
                <li><a href="#foundation" className="hover:text-[#F4F1EC]">Foundation 1023 (5% Donation)</a></li>
                <li><a href="#contact" className="hover:text-[#F4F1EC]">Contact & Triage Form</a></li>
              </ul>
            </div>

            {/* Col 4: Corporate Office */}
            <div>
              <p className="font-mono text-[11px] font-bold text-[#F4F1EC] uppercase tracking-[0.08em] mb-3">
                CORPORATE HEADQUARTERS
              </p>
              <address className="not-italic text-[13px] text-[#79838B] space-y-1">
                <p className="text-[#F4F1EC] font-semibold">{address}</p>
                <p>Denver, Colorado 80211</p>
                <p className="pt-2 font-mono text-[11px] text-[#5C666E]">
                  ADMIN HOURS: Mon–Fri 8:00 AM – 5:00 PM MST (Closed Holidays)
                </p>
              </address>
            </div>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[12px] text-[#5C666E] font-mono">
            <p>© {new Date().getFullYear()} Water Extraction Team LLC (WET). All rights reserved.</p>
            <p>SBA WOSB Certified · BBB A+ Accredited since 2014 · Licensed & Insured in CO & MT</p>
          </div>
        </div>
      </footer>

      {/* ─────────────────────────────────────────────────────────────────────────
          11. NARROW VIEWPORT FIXED BOTTOM DISPATCH BAR (§8.1)
      ───────────────────────────────────────────────────────────────────────── */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#16191C] border-t-4 border-[#C94300] px-4 py-2.5 safe-bottom shadow-lg">
        <a
          href={telHref}
          className="flex flex-col items-center justify-center text-center font-mono"
        >
          <span className="text-[#F4F1EC] font-bold text-[19px] tracking-tight flex items-center gap-2">
            <span className="text-[#C94300]">☎</span> {phone}
          </span>
          <span className="text-[#79838B] text-[10px] uppercase tracking-[0.08em]">
            24 HOURS · DENVER METRO DISPATCH
          </span>
        </a>
      </div>

      {/* ─────────────────────────────────────────────────────────────────────────
          12. LIVE 24/7 AI EMERGENCY DISPATCH ASSISTANT
      ───────────────────────────────────────────────────────────────────────── */}
      <AIChatWidget clientId={clientId} initialGreeting={initialGreeting} />
    </div>
  );
}
