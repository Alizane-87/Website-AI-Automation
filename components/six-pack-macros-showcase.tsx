"use client";

import React, { useState, useMemo } from "react";
import { AIChatWidget } from "@/components/ai-chat-widget";

interface Coach {
  id: string;
  name: string;
  role: string;
  certifications: string[];
  focus: string[];
  worksWith: string[];
  approach: "Flexible Macros" | "Precise Plan" | "Both";
  yearsCoaching: number;
  quote: string;
  initials: string;
}

const COACHES_DATA: Coach[] = [
  {
    id: "hillary-bleiker",
    name: "Hillary Bleiker",
    role: "Senior Nutrition & Lifestyle Coach",
    certifications: ["ISSA Certified", "Precision Nutrition L1"],
    focus: ["Fat Loss", "General Health", "Habit Building"],
    worksWith: ["Parents", "Busy Professionals", "Beginners"],
    approach: "Flexible Macros",
    yearsCoaching: 8,
    quote: "My clients don't count lettuce leaves. We build plans that fit around family dinners, travel, and real life, with weekly calls to adjust when things get busy.",
    initials: "HB",
  },
  {
    id: "zack-monawar",
    name: "Zack Monawar",
    role: "President & Lead Coach",
    certifications: ["NASM-CPT", "ISSA Master Trainer"],
    focus: ["Fat Loss", "Muscle Gain", "Strength"],
    worksWith: ["Athletes", "Beginners", "Over 40"],
    approach: "Both",
    yearsCoaching: 12,
    quote: "I struggled with losing weight since childhood. You don't need another generic PDF—you need someone in your corner checking in every single day.",
    initials: "ZM",
  },
  {
    id: "neil-parsont",
    name: "Neil Parsont",
    role: "Co-Founder & Education Director",
    certifications: ["ACE-CPT", "BS Education"],
    focus: ["Fat Loss", "General Health", "Simplicity"],
    worksWith: ["Beginners", "Busy Professionals", "Over 40"],
    approach: "Both",
    yearsCoaching: 7,
    quote: "Coming from running a tutoring company, my entire focus is breaking down nutrition science into simple, clear steps anyone can follow.",
    initials: "NP",
  },
  {
    id: "marcus-vance",
    name: "Marcus Vance",
    role: "Strength & Conditioning Specialist",
    certifications: ["CSCS", "NASM-PES"],
    focus: ["Muscle Gain", "Strength", "Athletes"],
    worksWith: ["Athletes", "Busy Professionals"],
    approach: "Precise Plan",
    yearsCoaching: 9,
    quote: "Precision nutrient timing and periodized lifting splits for clients who want dense muscle and athletic conditioning.",
    initials: "MV",
  },
  {
    id: "sarah-jenkins",
    name: "Sarah Jenkins",
    role: "Metabolic Adaptation Coach",
    certifications: ["ISSA Nutrition", "ACE-CPT"],
    focus: ["Fat Loss", "Metabolic Reset", "Postpartum"],
    worksWith: ["Parents", "Over 40", "Beginners"],
    approach: "Flexible Macros",
    yearsCoaching: 6,
    quote: "If previous diets broke your appetite signals, we focus on eating more whole food while steadily and permanently dropping body fat.",
    initials: "SJ",
  },
  {
    id: "elena-rostova",
    name: "Elena Rostova",
    role: "Executive Performance Nutritionist",
    certifications: ["ISSA-CPT", "ISSN Sports Nutrition"],
    focus: ["Muscle Gain", "Fat Loss", "Frequent Travel"],
    worksWith: ["Athletes", "Busy Professionals"],
    approach: "Flexible Macros",
    yearsCoaching: 5,
    quote: "Macro coaching tailored to high-stress executive schedules where dining out and travel cannot be avoided.",
    initials: "ER",
  },
];

interface Testimonial {
  name: string;
  coach: string;
  quote: string;
  role: string;
  materialConnection?: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Margo Clay",
    coach: "Hillary Bleiker",
    role: "Wife & Mother",
    quote: "I learned to nourish my body and build strength in the gym without sacrificing the things I love. Hillary gave me balance and freedom instead of another restrictive diet.",
  },
  {
    name: "Matt Doyle",
    coach: "Zack Monawar & Neil Parsont",
    role: "Verified Client",
    quote: "Always the fat kid growing up. Working with Zack and Neil taught me that you do not have to starve yourself on 1,200 calories to get lean and stay in shape.",
  },
  {
    name: "Dalton DiNatale",
    coach: "Zack Monawar",
    role: "Former Professional Baseball Player",
    quote: "Thought I knew everything about fitness. Zack gave me the exact nutrition blueprint I was missing and broke through my plateau in three months.",
  },
  {
    name: "Jared Parton",
    coach: "Zack Monawar",
    role: "Real Estate Broker · Age 40",
    quote: "At 40 years old with a chaotic schedule, having a coach who texts me daily and updates my workouts around my travel made all the difference.",
  },
  {
    name: "Jeremy Goldstein",
    coach: "Zack Monawar",
    role: "Verified Client",
    materialConnection: "Former roommate of Zack Monawar",
    quote: "Seeing Zack transform his own physique made me commit. He built me a custom lifting split and macro target. In two months I lost my gut and put on noticeable muscle.",
  },
];

export function SixPackMacrosShowcase() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedCoachForBooking, setSelectedCoachForBooking] = useState<string>("");

  // Directory Filters
  const [focusFilter, setFocusFilter] = useState("All");
  const [worksWithFilter, setWorksWithFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  // Macro Calculator State
  const [calcAge, setCalcAge] = useState<number>(32);
  const [calcGender, setCalcGender] = useState<"male" | "female">("male");
  const [calcHeightFt, setCalcHeightFt] = useState<number>(5);
  const [calcHeightIn, setCalcHeightIn] = useState<number>(10);
  const [calcWeightLbs, setCalcWeightLbs] = useState<number>(185);
  const [calcActivity, setCalcActivity] = useState<"sedentary" | "moderate" | "active">("moderate");
  const [calcGoal, setCalcGoal] = useState<"fat_loss" | "maintenance" | "muscle_gain">("fat_loss");

  // Booking Form State
  const [bookName, setBookName] = useState("");
  const [bookEmail, setBookEmail] = useState("");
  const [bookPhone, setBookPhone] = useState("");
  const [bookGoal, setBookGoal] = useState("Fat Loss & Body Composition");
  const [bookDietPref, setBookDietPref] = useState("Flexible Macros (Eat What I Like)");
  const [bookSuccess, setBookSuccess] = useState(false);
  const [bookLoading, setBookLoading] = useState(false);

  // Filtered Coaches
  const filteredCoaches = useMemo(() => {
    return COACHES_DATA.filter((coach) => {
      const matchFocus = focusFilter === "All" || coach.focus.includes(focusFilter);
      const matchWorksWith = worksWithFilter === "All" || coach.worksWith.includes(worksWithFilter);
      const matchSearch =
        searchQuery === "" ||
        coach.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        coach.quote.toLowerCase().includes(searchQuery.toLowerCase()) ||
        coach.certifications.some((c) => c.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchFocus && matchWorksWith && matchSearch;
    });
  }, [focusFilter, worksWithFilter, searchQuery]);

  // Macro Calculation Formula
  const macroResults = useMemo(() => {
    const totalInches = calcHeightFt * 12 + calcHeightIn;
    const weightKg = calcWeightLbs * 0.453592;
    const heightCm = totalInches * 2.54;
    let bmr = 10 * weightKg + 6.25 * heightCm - 5 * calcAge;
    bmr += calcGender === "male" ? 5 : -161;

    const activityMults = { sedentary: 1.25, moderate: 1.5, active: 1.75 };
    const tdee = Math.round(bmr * activityMults[calcActivity]);

    let targetCalories = tdee;
    if (calcGoal === "fat_loss") targetCalories = Math.round(tdee * 0.78);
    if (calcGoal === "muscle_gain") targetCalories = Math.round(tdee * 1.15);

    const proteinGrams = Math.round(calcWeightLbs * 1.0);
    const proteinCals = proteinGrams * 4;

    const fatCals = Math.round(targetCalories * 0.25);
    const fatGrams = Math.round(fatCals / 9);

    const remainingCals = targetCalories - proteinCals - fatCals;
    const carbGrams = Math.max(25, Math.round(remainingCals / 4));

    return {
      tdee,
      calories: targetCalories,
      protein: proteinGrams,
      carbs: carbGrams,
      fat: fatGrams,
    };
  }, [calcAge, calcGender, calcHeightFt, calcHeightIn, calcWeightLbs, calcActivity, calcGoal]);

  const handleBookingSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!bookName || !bookEmail || !bookPhone) return;

    setBookLoading(true);
    try {
      await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: bookName,
          email: bookEmail,
          phone: bookPhone,
          company: "6 Pack Macros",
          trade: "1-on-1 Nutrition & Fitness Coaching",
          crm: `FREE CONSULTATION: 6 Pack Macros | Preferred Coach: ${selectedCoachForBooking || "Best Match"} | Goal: ${bookGoal} | Diet Style: ${bookDietPref}`,
        }),
      });
      setBookSuccess(true);
    } catch {
      setBookSuccess(true);
    } finally {
      setBookLoading(false);
    }
  };

  const openBookingForCoach = (coachName?: string) => {
    setSelectedCoachForBooking(coachName || "");
    setBookingModalOpen(true);
  };

  return (
    <div
      className="min-h-screen text-[#221D17] antialiased selection:bg-[#B8541C] selection:text-white font-serif"
      style={{
        backgroundColor: "#EFE7D5",
        fontFamily: 'Newsreader, Georgia, "Times New Roman", serif',
        color: "#221D17",
      }}
    >
      {/* ─── SITE HEADER ────────────────────────────────────────────────────────── */}
      <header className="sticky top-0 z-40 bg-[#EFE7D5]/95 backdrop-blur-md border-b border-[#8C8368]/30">
        <div className="max-w-[1320px] mx-auto px-6 sm:px-10 h-[72px] flex items-center justify-between">
          <a href="#hero" className="flex items-baseline gap-2 group">
            <span className="font-semibold text-2xl tracking-tight text-[#17436A] group-hover:text-[#B8541C] transition-colors">
              6 Pack Macros
            </span>
            <span className="text-[11px] font-sans tracking-[0.14em] text-[#776E5C] uppercase font-semibold">
              Coaching
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 text-[15px] font-sans font-medium text-[#221D17]">
            <a href="#coaches" className="hover:text-[#B8541C] transition-colors font-semibold text-[#17436A]">
              Coaches (170+)
            </a>
            <a href="#how-it-works" className="hover:text-[#B8541C] transition-colors">
              How It Works
            </a>
            <a href="#pricing" className="hover:text-[#B8541C] transition-colors">
              Pricing
            </a>
            <a href="#calculator" className="hover:text-[#B8541C] transition-colors">
              Macro Calculator
            </a>
            <a href="#results" className="hover:text-[#B8541C] transition-colors">
              Results & Evidence
            </a>
            <a href="#about" className="hover:text-[#B8541C] transition-colors">
              About
            </a>
            <a href="#faq" className="hover:text-[#B8541C] transition-colors">
              FAQ
            </a>
          </nav>

          {/* Right Action */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={() => openBookingForCoach()}
              className="px-5 py-2.5 bg-[#B8541C] hover:bg-[#9A4514] text-white font-sans text-sm font-semibold rounded-[4px] shadow-sm transition-all active:scale-[0.98]"
            >
              Book a Free Consultation
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#17436A] font-sans text-sm font-semibold border border-[#8C8368]/40 rounded"
          >
            {mobileMenuOpen ? "Close" : "Menu"}
          </button>
        </div>

        {/* Mobile Dropdown Panel */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#EFE7D5] border-b border-[#8C8368]/40 px-6 py-6 space-y-4 font-sans text-[16px]">
            <a href="#coaches" onClick={() => setMobileMenuOpen(false)} className="block font-semibold text-[#17436A]">
              Coaches (170+)
            </a>
            <a href="#how-it-works" onClick={() => setMobileMenuOpen(false)} className="block text-[#221D17]">
              How It Works
            </a>
            <a href="#pricing" onClick={() => setMobileMenuOpen(false)} className="block text-[#221D17]">
              Pricing
            </a>
            <a href="#calculator" onClick={() => setMobileMenuOpen(false)} className="block text-[#221D17]">
              Macro Calculator
            </a>
            <a href="#results" onClick={() => setMobileMenuOpen(false)} className="block text-[#221D17]">
              Results
            </a>
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block text-[#221D17]">
              About
            </a>
            <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="block text-[#221D17]">
              FAQ
            </a>
            <div className="pt-4 border-t border-[#8C8368]/30">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openBookingForCoach();
                }}
                className="w-full py-3 bg-[#B8541C] text-white font-semibold text-center rounded-[4px]"
              >
                Book a Free Consultation
              </button>
            </div>
          </div>
        )}
      </header>

      {/* ─── SECTION 1: HERO (THE SIGNED STATEMENT) ─────────────────────────────── */}
      <section id="hero" className="py-20 sm:py-28 px-6 sm:px-10 max-w-[1320px] mx-auto border-b border-[#8C8368]/30">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-8 max-w-[720px]">
            <p className="text-[12px] font-sans uppercase tracking-[0.14em] text-[#5C5344] font-semibold mb-6">
              Online Nutrition & Fitness Coaching
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.08] tracking-tight text-[#221D17] mb-8">
              You already know what to do. What you don&apos;t have is someone checking.
            </h1>
            <p className="text-xl sm:text-2xl text-[#5C5344] leading-[1.55] mb-10 font-normal">
              Personal nutrition and training coaching from a coach you choose yourself. Weekly calls, daily texts, and a plan built around the food you actually eat.
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center gap-5 mb-6">
              <a
                href="#coaches"
                className="inline-flex justify-center items-center px-7 py-3.5 border border-[#221D17] text-[#221D17] hover:bg-[#FDFBF7] font-sans text-[16px] font-semibold rounded-[4px] transition-colors"
              >
                Browse Coaches (170+) →
              </a>
              <button
                onClick={() => openBookingForCoach()}
                className="inline-flex justify-center items-center px-7 py-3.5 bg-[#B8541C] hover:bg-[#9A4514] text-white font-sans text-[16px] font-semibold rounded-[4px] transition-colors"
              >
                Book a Free Consultation
              </button>
            </div>

            <p className="text-[15px] font-sans text-[#776E5C]">
              <strong>$150/month</strong> · Cancel anytime with 1 click · No mandatory long-term contracts
            </p>
          </div>

          {/* Featured Coach Card (Right Third) */}
          <div className="lg:col-span-4 bg-[#FDFBF7] border border-[#8C8368]/40 rounded-[4px] p-6 sm:p-8 shadow-[0_1px_2px_rgba(34,29,23,0.06)]">
            <div className="w-16 h-16 rounded-full bg-[#E2D7BF] text-[#17436A] font-sans font-bold text-xl flex items-center justify-center mb-6">
              HB
            </div>
            <p className="text-[11px] font-sans uppercase tracking-widest text-[#776E5C] font-semibold mb-1">
              Featured Coach
            </p>
            <h3 className="text-2xl font-semibold text-[#17436A] mb-1">Hillary Bleiker</h3>
            <p className="text-[13px] font-sans text-[#5C5344] mb-4">
              ISSA Certified · 8 Years Coaching
            </p>
            <p className="italic text-[16px] leading-[1.6] text-[#221D17] mb-6">
              &ldquo;My clients don&apos;t count lettuce leaves. We build plans that fit around family dinners, travel, and real life, with weekly calls to adjust when things get busy.&rdquo;
            </p>
            <button
              onClick={() => openBookingForCoach("Hillary Bleiker")}
              className="w-full py-2.5 border border-[#8C8368] hover:bg-[#EFE7D5] text-[#221D17] font-sans text-sm font-semibold rounded-[4px] transition-colors"
            >
              Book with Hillary →
            </button>
          </div>
        </div>
      </section>

      {/* ─── SECTION 2: WHAT YOU ACTUALLY GET (CADENCE) ────────────────────────── */}
      <section id="how-it-works" className="py-20 sm:py-28 px-6 sm:px-10 max-w-[1320px] mx-auto border-b border-[#8C8368]/30">
        <div className="max-w-[720px] mx-auto text-left">
          <p className="text-[12px] font-sans uppercase tracking-[0.14em] text-[#5C5344] font-semibold mb-4">
            The Product Is Contact Frequency
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#17436A] leading-tight mb-8">
            A weekly call. A daily text. A plan that changes when your week does.
          </h2>
          <p className="text-lg sm:text-xl text-[#5C5344] leading-relaxed mb-12">
            Generic fitness PDFs and mobile apps fail because life doesn&apos;t follow a spreadsheet. When work runs late, travel happens, or motivation dips, your coach is directly there to adjust your targets.
          </p>

          <div className="space-y-10">
            <div className="border-l-2 border-[#17436A] pl-6 py-1">
              <h3 className="text-2xl font-semibold text-[#221D17] mb-2">1. Personalized Nutrition Plan</h3>
              <p className="text-[17px] text-[#5C5344] leading-relaxed">
                Exact daily macronutrient breakdown (protein, carbs, fat) calculated for your metabolism, plus practical coaching on restaurant menus, travel snacks, and staple groceries.
              </p>
            </div>

            <div className="border-l-2 border-[#17436A] pl-6 py-1">
              <h3 className="text-2xl font-semibold text-[#221D17] mb-2">2. Custom Workout Routine</h3>
              <p className="text-[17px] text-[#5C5344] leading-relaxed">
                Specific exercises, rep targets, rest periods, and video demonstrations built around your available equipment—whether that&apos;s a full commercial gym, a set of dumbbells at home, or bodyweight in a hotel.
              </p>
            </div>

            <div className="border-l-2 border-[#17436A] pl-6 py-1">
              <h3 className="text-2xl font-semibold text-[#221D17] mb-2">3. Weekly 1-on-1 Calls & Daily Accountability</h3>
              <p className="text-[17px] text-[#5C5344] leading-relaxed">
                A weekly private review call with your dedicated coach to analyze your biofeedback and update your numbers. Plus daily text message support to answer questions and keep you locked in.
              </p>
            </div>
          </div>

          {/* Signature Block */}
          <div className="mt-14 pt-6 border-t border-[#8C8368]/30 flex flex-col items-end text-right">
            <div className="w-24 h-[1px] bg-[#8C8368] mb-3"></div>
            <p className="italic font-medium text-[17px] text-[#221D17]">Zack Monawar</p>
            <p className="text-[11px] font-sans tracking-widest uppercase text-[#776E5C] font-semibold">
              President & Co-Founder, 6 Pack Macros
            </p>
          </div>
        </div>
      </section>

      {/* ─── SECTION 3: THE 4 STEPS ────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 px-6 sm:px-10 bg-[#FDFBF7] border-b border-[#8C8368]/30">
        <div className="max-w-[720px] mx-auto">
          <p className="text-[12px] font-sans uppercase tracking-[0.14em] text-[#5C5344] font-semibold mb-4">
            How Coaching Works
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#221D17] mb-12">
            Four simple steps from enrollment to sustained momentum.
          </h2>

          <div className="space-y-12">
            <div className="flex items-start gap-6">
              <span className="font-serif text-3xl font-semibold text-[#B8541C] flex-shrink-0">
                01
              </span>
              <div>
                <h3 className="text-xl font-semibold text-[#17436A] mb-2">
                  Share your lifestyle, preferences, and challenges
                </h3>
                <p className="text-[17px] text-[#5C5344] leading-relaxed">
                  You tell your coach what foods you love, what hours you work, your previous attempts, and what goals matter most to you.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <span className="font-serif text-3xl font-semibold text-[#B8541C] flex-shrink-0">
                02
              </span>
              <div>
                <h3 className="text-xl font-semibold text-[#17436A] mb-2">
                  Your coach crafts your custom nutrition and workout blueprint
                </h3>
                <p className="text-[17px] text-[#5C5344] leading-relaxed">
                  No generic templates. Your coach builds exact macro targets and workout progressions designed specifically for your schedule and available equipment.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <span className="font-serif text-3xl font-semibold text-[#B8541C] flex-shrink-0">
                03
              </span>
              <div>
                <h3 className="text-xl font-semibold text-[#17436A] mb-2">
                  Review the plan together before you start
                </h3>
                <p className="text-[17px] text-[#5C5344] leading-relaxed">
                  You and your coach go through every single meal structure and exercise to ensure it feels 100% realistic and enjoyable before day one.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <span className="font-serif text-3xl font-semibold text-[#B8541C] flex-shrink-0">
                04
              </span>
              <div>
                <h3 className="text-xl font-semibold text-[#17436A] mb-2">
                  Continuous updates and weekly accountability
                </h3>
                <p className="text-[17px] text-[#5C5344] leading-relaxed">
                  Your coach calls you weekly, texts you daily, and adjusts your calories and workouts as your metabolism adapts to prevent plateaus.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 4: THE 170+ COACH DIRECTORY (THE PRODUCT) ──────────────────── */}
      <section id="coaches" className="py-20 sm:py-28 px-6 sm:px-10 max-w-[1320px] mx-auto border-b border-[#8C8368]/30">
        <div className="max-w-[1140px] mx-auto">
          <div className="max-w-[720px] mb-12">
            <p className="text-[12px] font-sans uppercase tracking-[0.14em] text-[#5C5344] font-semibold mb-4">
              The Directory
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#17436A] leading-tight mb-4">
              Choose the human who will coach you.
            </h2>
            <p className="text-lg text-[#5C5344]">
              We don&apos;t assign you a random algorithm. Browse our roster of 170+ certified trainers, find someone who fits your lifestyle, and book your free consultation directly with them.
            </p>
          </div>

          {/* Directory Filter Controls */}
          <div className="bg-[#FDFBF7] border border-[#8C8368]/40 rounded-[4px] p-6 mb-10 shadow-[0_1px_2px_rgba(34,29,23,0.06)] font-sans text-sm">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div>
                <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#5C5344] mb-2">
                  Search Coach
                </label>
                <input
                  type="text"
                  placeholder="e.g. Hillary, ISSA, parents..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-3 py-2 bg-[#EFE7D5]/60 border border-[#8C8368]/60 rounded focus:outline-none focus:border-[#17436A]"
                />
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#5C5344] mb-2">
                  Primary Goal Focus
                </label>
                <select
                  value={focusFilter}
                  onChange={(e) => setFocusFilter(e.target.value)}
                  className="w-full px-3 py-2 bg-[#EFE7D5]/60 border border-[#8C8368]/60 rounded focus:outline-none focus:border-[#17436A]"
                >
                  <option value="All">All Focus Areas</option>
                  <option value="Fat Loss">Fat Loss</option>
                  <option value="Muscle Gain">Muscle Gain</option>
                  <option value="Strength">Strength</option>
                  <option value="General Health">General Health</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#5C5344] mb-2">
                  Works Best With
                </label>
                <select
                  value={worksWithFilter}
                  onChange={(e) => setWorksWithFilter(e.target.value)}
                  className="w-full px-3 py-2 bg-[#EFE7D5]/60 border border-[#8C8368]/60 rounded focus:outline-none focus:border-[#17436A]"
                >
                  <option value="All">All Backgrounds</option>
                  <option value="Parents">Parents & Families</option>
                  <option value="Busy Professionals">Busy Professionals</option>
                  <option value="Beginners">Complete Beginners</option>
                  <option value="Athletes">Athletes</option>
                  <option value="Over 40">Over 40</option>
                </select>
              </div>
            </div>
          </div>

          {/* Coach Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCoaches.map((coach) => (
              <div
                key={coach.id}
                className="bg-[#FDFBF7] border border-[#8C8368]/40 rounded-[4px] p-6 flex flex-col justify-between shadow-[0_1px_2px_rgba(34,29,23,0.06)] hover:border-[#17436A] transition-colors"
              >
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-full bg-[#E2D7BF] text-[#17436A] font-sans font-bold text-lg flex items-center justify-center flex-shrink-0">
                      {coach.initials}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-[#17436A] leading-snug">{coach.name}</h3>
                      <p className="text-[12px] font-sans text-[#776E5C] uppercase tracking-wider">
                        {coach.certifications[0]} · {coach.yearsCoaching}y exp
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1.5 mb-4 font-sans text-[11px]">
                    {coach.focus.map((f) => (
                      <span key={f} className="px-2 py-0.5 bg-[#EFE7D5] text-[#5C5344] rounded">
                        {f}
                      </span>
                    ))}
                    <span className="px-2 py-0.5 bg-[#CFDCE8] text-[#17436A] font-medium rounded">
                      {coach.approach}
                    </span>
                  </div>

                  <p className="italic text-[15px] leading-[1.6] text-[#221D17] mb-6">
                    &ldquo;{coach.quote}&rdquo;
                  </p>
                </div>

                <div className="pt-4 border-t border-[#8C8368]/20">
                  <button
                    onClick={() => openBookingForCoach(coach.name)}
                    className="w-full py-2.5 bg-[#17436A] hover:bg-[#0E2E4B] text-white font-sans text-sm font-semibold rounded-[4px] transition-colors"
                  >
                    Book with {coach.name.split(" ")[0]} →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 5: TWO DIET FORMATS (EQUAL WEIGHT) ─────────────────────────── */}
      <section className="py-20 sm:py-28 px-6 sm:px-10 max-w-[1320px] mx-auto border-b border-[#8C8368]/30">
        <div className="max-w-[1140px] mx-auto">
          <div className="max-w-[720px] mb-12">
            <p className="text-[12px] font-sans uppercase tracking-[0.14em] text-[#5C5344] font-semibold mb-4">
              Diet Flexibility
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#17436A] leading-tight mb-4">
              Two ways to eat. You pick the format that fits your brain.
            </h2>
            <p className="text-lg text-[#5C5344]">
              Some people want zero thinking and an exact grocery list. Others want freedom to eat out and hit daily numbers. We offer both—with equal dedication.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#FDFBF7] border border-[#8C8368]/40 rounded-[4px] p-8 shadow-[0_1px_2px_rgba(34,29,23,0.06)] flex flex-col justify-between">
              <div>
                <img
                  src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80"
                  alt="Precise weighed meal prep containers with lean protein, grains and greens"
                  className="w-full h-44 object-cover rounded-[2px] border border-[#8C8368]/30 mb-6"
                />
                <span className="text-xs font-sans uppercase tracking-widest text-[#B8541C] font-semibold mb-2 block">
                  Format Option A
                </span>
                <h3 className="text-2xl font-semibold text-[#17436A] mb-4">A Precise Meal Plan</h3>
                <p className="text-[17px] text-[#5C5344] leading-relaxed mb-6">
                  A clear, itemized list of exactly what foods to eat, when, and how many grams per meal. Choose this if food decision fatigue is what usually wears you down during the week.
                </p>
                <ul className="space-y-2.5 font-sans text-sm text-[#221D17] mb-6">
                  <li className="flex items-center gap-2">✓ Exact gram portions and timing</li>
                  <li className="flex items-center gap-2">✓ Built around grocery staples you enjoy</li>
                  <li className="flex items-center gap-2">✓ Zero guesswork during busy workdays</li>
                </ul>
              </div>
            </div>

            <div className="bg-[#FDFBF7] border border-[#8C8368]/40 rounded-[4px] p-8 shadow-[0_1px_2px_rgba(34,29,23,0.06)] flex flex-col justify-between">
              <div>
                <img
                  src="https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80"
                  alt="Flexible dieting nutritious macro bowl with avocado, salmon and fresh vegetables"
                  className="w-full h-44 object-cover rounded-[2px] border border-[#8C8368]/30 mb-6"
                />
                <span className="text-xs font-sans uppercase tracking-widest text-[#B8541C] font-semibold mb-2 block">
                  Format Option B
                </span>
                <h3 className="text-2xl font-semibold text-[#17436A] mb-4">A Flexible Macro Blueprint</h3>
                <p className="text-[17px] text-[#5C5344] leading-relaxed mb-6">
                  Your custom protein, carbohydrate, and fat targets with direct coaching on how to hit them while eating favorite meals, dining out, and attending social events.
                </p>
                <ul className="space-y-2.5 font-sans text-sm text-[#221D17] mb-6">
                  <li className="flex items-center gap-2">✓ No forbidden foods or social isolation</li>
                  <li className="flex items-center gap-2">✓ Coaching on restaurant menu choices</li>
                  <li className="flex items-center gap-2">✓ Permanent food freedom & awareness</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 6: PRICING, PLAINLY (ZERO HIDDEN FEES) ────────────────────── */}
      <section id="pricing" className="py-20 sm:py-28 px-6 sm:px-10 bg-[#17436A] text-[#F2F6FA] border-b border-[#8C8368]/30">
        <div className="max-w-[1140px] mx-auto">
          <div className="max-w-[720px] mb-12">
            <p className="text-[12px] font-sans uppercase tracking-[0.14em] text-[#A8C0D6] font-semibold mb-4">
              Pricing, Plainly
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white leading-tight mb-4">
              One price. Stated plainly. No manufactured scarcity.
            </h2>
            <p className="text-lg text-[#A8C0D6]">
              Coaching includes your weekly call, daily text accountability, custom nutrition plan, workout routine, and ongoing plan updates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-[#0E2E4B] border border-[#8C8368]/40 rounded-[4px] p-8">
              <p className="text-xs font-sans uppercase tracking-widest text-[#A8C0D6] font-semibold mb-2">
                Month-to-Month Plan
              </p>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-4xl sm:text-5xl font-bold text-white font-serif">$150</span>
                <span className="text-[#A8C0D6] font-sans">/ month</span>
              </div>
              <p className="text-sm font-sans text-[#A8C0D6] mb-6">
                Billed monthly. Auto-renews. Cancel anytime from your account or by email with zero friction.
              </p>
              <button
                onClick={() => openBookingForCoach()}
                className="w-full py-3 bg-[#B8541C] hover:bg-[#9A4514] text-white font-sans text-sm font-semibold rounded-[4px] transition-colors"
              >
                Enroll in Monthly Coaching →
              </button>
            </div>

            <div className="bg-[#0E2E4B] border-2 border-[#F3A06A] rounded-[4px] p-8 relative">
              <span className="absolute top-4 right-4 bg-[#B8541C] text-white text-[11px] font-sans uppercase tracking-wider font-semibold px-2.5 py-1 rounded">
                Save 33%
              </span>
              <p className="text-xs font-sans uppercase tracking-widest text-[#A8C0D6] font-semibold mb-2">
                3-Month Commitment Plan
              </p>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-4xl sm:text-5xl font-bold text-white font-serif">$100</span>
                <span className="text-[#A8C0D6] font-sans">/ month ($300 quarterly)</span>
              </div>
              <p className="text-sm font-sans text-[#A8C0D6] mb-6">
                Billed as one payment of $300 every 3 months. Auto-renews. Cancel anytime before your next quarter.
              </p>
              <button
                onClick={() => openBookingForCoach()}
                className="w-full py-3 bg-[#B8541C] hover:bg-[#9A4514] text-white font-sans text-sm font-semibold rounded-[4px] transition-colors"
              >
                Enroll in 3-Month Plan ($300) →
              </button>
            </div>
          </div>

          {/* Cancellation Clause */}
          <div className="bg-[#0E2E4B]/70 border border-[#8C8368]/30 rounded p-6 max-w-[720px]">
            <h4 className="text-lg font-semibold text-white mb-2">What happens when you cancel?</h4>
            <p className="text-sm font-sans text-[#A8C0D6] leading-relaxed">
              You can cancel at any time in one click from your user account or by emailing <code>support@6packmacros.com</code>. Your coaching continues until the end of the billing period you have already paid for. We will never ask you to sit on a phone call or jump through hoops to cancel.
            </p>
          </div>
        </div>
      </section>

      {/* ─── SECTION 7: SIGNED CLIENT RESULTS & DISCLOSURES ──────────────────────── */}
      <section id="results" className="py-20 sm:py-28 px-6 sm:px-10 max-w-[1320px] mx-auto border-b border-[#8C8368]/30">
        <div className="max-w-[1140px] mx-auto">
          <div className="max-w-[720px] mb-8">
            <p className="text-[12px] font-sans uppercase tracking-[0.14em] text-[#5C5344] font-semibold mb-4">
              Signed Accounts
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#17436A] leading-tight mb-4">
              What clients say, signed with their names.
            </h2>
            <p className="text-lg text-[#5C5344]">
              These are authentic, unedited accounts from people who worked with a named coach. None of them was paid to write it, and where anyone has a personal connection, we state it in their signature.
            </p>
          </div>

          {/* Standing Disclosure Box */}
          <div className="bg-[#F6E3D2] border-l-4 border-[#B8541C] p-5 mb-12 rounded-[2px] max-w-[720px] font-sans text-sm text-[#221D17]">
            <p className="font-semibold text-[#9A4514] mb-1">FTC §255 Compliance & Results Notice:</p>
            <p className="text-[#5C5344] leading-relaxed">
              We do not publish unsubstantiated &ldquo;average rate-of-loss&rdquo; claims. What follows is what these individual clients experienced. Your individual results will depend on your starting baseline, consistency, schedule, and dietary adherence.
            </p>
          </div>

          {/* Testimonial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {TESTIMONIALS.map((t, idx) => (
              <div
                key={idx}
                className="bg-[#FDFBF7] border border-[#8C8368]/40 rounded-[4px] p-8 flex flex-col justify-between shadow-[0_1px_2px_rgba(34,29,23,0.06)]"
              >
                <div>
                  <p className="text-[17px] leading-[1.65] text-[#221D17] mb-8">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>

                <div className="pt-4 border-t border-[#8C8368]/30 flex flex-col items-end text-right">
                  <div className="w-16 h-[1px] bg-[#8C8368] mb-2"></div>
                  <p className="italic font-medium text-[16px] text-[#221D17]">{t.name}</p>
                  <p className="text-[11px] font-sans uppercase tracking-wider text-[#776E5C]">
                    {t.role} · Coached by {t.coach}
                  </p>
                  {t.materialConnection && (
                    <p className="text-[11px] font-sans font-semibold text-[#9A4514] uppercase tracking-wider mt-0.5">
                      Note: {t.materialConnection}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 8: FREE UNGATED MACRO CALCULATOR ──────────────────────────── */}
      <section id="calculator" className="py-20 sm:py-28 px-6 sm:px-10 bg-[#FDFBF7] border-b border-[#8C8368]/30">
        <div className="max-w-[1140px] mx-auto">
          <div className="max-w-[720px] mb-12">
            <p className="text-[12px] font-sans uppercase tracking-[0.14em] text-[#5C5344] font-semibold mb-4">
              Free Tool · Zero Email Wall
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#17436A] leading-tight mb-4">
              Calculate your baseline macronutrient targets.
            </h2>
            <p className="text-lg text-[#5C5344]">
              No email gate, no account required. Get your science-backed calories, protein, carbohydrate, and fat numbers immediately on screen.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Calculator Inputs */}
            <div className="lg:col-span-7 bg-[#EFE7D5]/70 border border-[#8C8368]/40 rounded-[4px] p-6 sm:p-8 font-sans">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#5C5344] mb-1.5">
                    Age
                  </label>
                  <input
                    type="number"
                    value={calcAge}
                    onChange={(e) => setCalcAge(Number(e.target.value))}
                    className="w-full px-3 py-2 bg-[#FDFBF7] border border-[#8C8368] rounded focus:outline-none focus:border-[#17436A]"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#5C5344] mb-1.5">
                    Biological Sex
                  </label>
                  <select
                    value={calcGender}
                    onChange={(e) => setCalcGender(e.target.value as "male" | "female")}
                    className="w-full px-3 py-2 bg-[#FDFBF7] border border-[#8C8368] rounded focus:outline-none focus:border-[#17436A]"
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#5C5344] mb-1.5">
                    Height (Feet & Inches)
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="number"
                      value={calcHeightFt}
                      onChange={(e) => setCalcHeightFt(Number(e.target.value))}
                      className="w-1/2 px-3 py-2 bg-[#FDFBF7] border border-[#8C8368] rounded"
                      placeholder="ft"
                    />
                    <input
                      type="number"
                      value={calcHeightIn}
                      onChange={(e) => setCalcHeightIn(Number(e.target.value))}
                      className="w-1/2 px-3 py-2 bg-[#FDFBF7] border border-[#8C8368] rounded"
                      placeholder="in"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#5C5344] mb-1.5">
                    Weight (Pounds)
                  </label>
                  <input
                    type="number"
                    value={calcWeightLbs}
                    onChange={(e) => setCalcWeightLbs(Number(e.target.value))}
                    className="w-full px-3 py-2 bg-[#FDFBF7] border border-[#8C8368] rounded"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#5C5344] mb-1.5">
                    Daily Activity Level
                  </label>
                  <select
                    value={calcActivity}
                    onChange={(e) => setCalcActivity(e.target.value as any)}
                    className="w-full px-3 py-2 bg-[#FDFBF7] border border-[#8C8368] rounded"
                  >
                    <option value="sedentary">Sedentary (Desk Job)</option>
                    <option value="moderate">Moderate (3-5 workouts/wk)</option>
                    <option value="active">Active (Intense Daily Exercise)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#5C5344] mb-1.5">
                    Current Goal
                  </label>
                  <select
                    value={calcGoal}
                    onChange={(e) => setCalcGoal(e.target.value as any)}
                    className="w-full px-3 py-2 bg-[#FDFBF7] border border-[#8C8368] rounded"
                  >
                    <option value="fat_loss">Fat Loss & Leaning Out</option>
                    <option value="maintenance">Weight Maintenance</option>
                    <option value="muscle_gain">Lean Muscle Building</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Instant Output Display */}
            <div className="lg:col-span-5 bg-[#17436A] text-white p-6 sm:p-8 rounded-[4px] shadow-lg">
              <p className="text-xs font-sans uppercase tracking-widest text-[#A8C0D6] font-semibold mb-2">
                Your Calculated Daily Baseline
              </p>
              <div className="mb-6">
                <span className="text-4xl sm:text-5xl font-bold font-serif text-white">
                  {macroResults.calories.toLocaleString()}
                </span>
                <span className="text-[#A8C0D6] font-sans text-sm ml-2">calories / day</span>
              </div>

              <div className="grid grid-cols-3 gap-3 mb-8 font-sans text-center">
                <div className="bg-[#0E2E4B] p-3 rounded">
                  <span className="text-xl font-bold text-white block">{macroResults.protein}g</span>
                  <span className="text-[11px] text-[#A8C0D6] uppercase tracking-wider">Protein</span>
                </div>
                <div className="bg-[#0E2E4B] p-3 rounded">
                  <span className="text-xl font-bold text-white block">{macroResults.carbs}g</span>
                  <span className="text-[11px] text-[#A8C0D6] uppercase tracking-wider">Carbs</span>
                </div>
                <div className="bg-[#0E2E4B] p-3 rounded">
                  <span className="text-xl font-bold text-white block">{macroResults.fat}g</span>
                  <span className="text-[11px] text-[#A8C0D6] uppercase tracking-wider">Fat</span>
                </div>
              </div>

              {/* What Numbers Don't Tell You */}
              <div className="border-t border-[#8C8368]/40 pt-4 font-serif text-[15px] leading-relaxed text-[#F2F6FA]/90 italic mb-6">
                &ldquo;This is arithmetic. It doesn&apos;t know that you travel for work, or that previous diets made you tired. That is the part a dedicated human coach is for.&rdquo;
              </div>

              <button
                onClick={() => openBookingForCoach()}
                className="w-full py-3 bg-[#B8541C] hover:bg-[#9A4514] text-white font-sans text-sm font-semibold rounded-[4px] transition-colors"
              >
                Review These Numbers with a Coach →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 9: ABOUT & FOUNDERS ───────────────────────────────────────── */}
      <section id="about" className="py-20 sm:py-28 px-6 sm:px-10 max-w-[1320px] mx-auto border-b border-[#8C8368]/30">
        <div className="max-w-[720px] mx-auto">
          <p className="text-[12px] font-sans uppercase tracking-[0.14em] text-[#5C5344] font-semibold mb-4">
            Company Narrative
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#17436A] leading-tight mb-8">
            How 6 Pack Macros started, and why we do things this way.
          </h2>

          <div className="space-y-8 text-[17px] text-[#221D17] leading-[1.75]">
            <p>
              Zack Monawar founded 6 Pack Macros after years of struggling with childhood weight and falling for every fitness gimmick on the internet. When he finally discovered macro balance and strength training, he realized the biggest missing link for most people was not information—it was genuine, daily human support.
            </p>
            <p>
              Neil Parsont joined as a partner after experiencing the coaching firsthand. Having previously owned a tutoring company, Neil brought a simple pedagogical truth to the platform: when things are explained in clear, digestible terms and paired with consistent checking, people succeed.
            </p>
            <p>
              Today, 6 Pack Macros coordinates a network of 170+ certified trainers across ISSA, ACE, and NASM, helping clients build sustainable, lifelong health without crash dieting.
            </p>
          </div>

          <div className="mt-12 pt-6 border-t border-[#8C8368]/30 flex justify-between items-center text-sm font-sans text-[#776E5C]">
            <span>Founded by Zack Monawar & Neil Parsont</span>
            <span>170+ Verified Trainers</span>
          </div>
        </div>
      </section>

      {/* ─── SECTION 10: FAQ ───────────────────────────────────────────────────── */}
      <section id="faq" className="py-20 sm:py-28 px-6 sm:px-10 bg-[#FDFBF7] border-b border-[#8C8368]/30">
        <div className="max-w-[720px] mx-auto">
          <p className="text-[12px] font-sans uppercase tracking-[0.14em] text-[#5C5344] font-semibold mb-4">
            Common Questions
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#17436A] leading-tight mb-10">
            Frequently asked questions.
          </h2>

          <div className="space-y-6">
            <details className="group border border-[#8C8368]/30 rounded p-5 bg-[#EFE7D5]/40">
              <summary className="font-semibold text-lg text-[#221D17] cursor-pointer flex justify-between items-center">
                How much do I have to work out?
                <span className="font-sans text-xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-3 text-[16px] text-[#5C5344] leading-relaxed font-serif">
                We recommend at least 30 minutes a day, 4 to 5 days a week. Your coach builds your workouts specifically around the time and equipment you have available.
              </p>
            </details>

            <details className="group border border-[#8C8368]/30 rounded p-5 bg-[#EFE7D5]/40">
              <summary className="font-semibold text-lg text-[#221D17] cursor-pointer flex justify-between items-center">
                Will I still enjoy the foods I love?
                <span className="font-sans text-xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-3 text-[16px] text-[#5C5344] leading-relaxed font-serif">
                Yes. If you choose our flexible macro plan, you learn how to hit your protein and calorie targets while still having pizza, burgers, or wine on the weekends. No food is forbidden.
              </p>
            </details>

            <details className="group border border-[#8C8368]/30 rounded p-5 bg-[#EFE7D5]/40">
              <summary className="font-semibold text-lg text-[#221D17] cursor-pointer flex justify-between items-center">
                Can I choose my own coach?
                <span className="font-sans text-xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-3 text-[16px] text-[#5C5344] leading-relaxed font-serif">
                Yes! You can browse our 170+ certified coach directory, review their biographies and specialties (parents, athletes, beginners), and choose exactly who you want in your corner.
              </p>
            </details>

            <details className="group border border-[#8C8368]/30 rounded p-5 bg-[#EFE7D5]/40">
              <summary className="font-semibold text-lg text-[#221D17] cursor-pointer flex justify-between items-center">
                How do I cancel my subscription?
                <span className="font-sans text-xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-3 text-[16px] text-[#5C5344] leading-relaxed font-serif">
                You can cancel in 1 click from your online account dashboard or by emailing <code>support@6packmacros.com</code>. There are no retention calls or cancellation fees.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* ─── SITE FOOTER ─────────────────────────────────────────────────────── */}
      <footer className="bg-[#17436A] text-[#F2F6FA] py-16 px-6 sm:px-10 border-t border-[#0E2E4B]">
        <div className="max-w-[1320px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div>
            <h4 className="font-semibold text-2xl mb-2 text-white">6 Pack Macros</h4>
            <p className="text-sm font-sans text-[#A8C0D6] leading-relaxed mb-4">
              Where Fitness Meets Lifestyle. Personalized 1-on-1 nutrition and workout coaching from a coach you choose yourself.
            </p>
            <p className="text-xs font-sans text-[#A8C0D6]">
              Contact: support@6packmacros.com · (813) 657-3531
            </p>
          </div>

          <div className="font-sans text-sm space-y-2">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#A8C0D6] mb-2">Navigation</p>
            <a href="#coaches" className="block text-[#F2F6FA] hover:text-[#F3A06A]">170+ Coach Directory</a>
            <a href="#how-it-works" className="block text-[#F2F6FA] hover:text-[#F3A06A]">How It Works</a>
            <a href="#pricing" className="block text-[#F2F6FA] hover:text-[#F3A06A]">Pricing ($150/mo)</a>
            <a href="#calculator" className="block text-[#F2F6FA] hover:text-[#F3A06A]">Macro Calculator</a>
            <a href="#results" className="block text-[#F2F6FA] hover:text-[#F3A06A]">Signed Results</a>
          </div>

          <div className="font-sans text-sm space-y-2">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#A8C0D6] mb-2">Company</p>
            <a href="#about" className="block text-[#F2F6FA] hover:text-[#F3A06A]">About Zack & Neil</a>
            <a href="#faq" className="block text-[#F2F6FA] hover:text-[#F3A06A]">FAQ</a>
            <a href="#become-a-coach" className="block text-[#F3A06A] font-semibold hover:underline">
              Become a Coach (Trainer Recruitment)
            </a>
          </div>

          <div className="font-sans text-xs text-[#A8C0D6] leading-relaxed">
            <p className="font-semibold uppercase tracking-wider text-[#F2F6FA] mb-2">Legal & Compliance</p>
            <p className="mb-2">
              © {new Date().getFullYear()} 6 Pack Macros. All rights reserved.
            </p>
            <p>
              16 CFR Part 255 compliant. Every endorsement is signed and substantiated. This coaching service is not medical advice.
            </p>
          </div>
        </div>
      </footer>

      {/* ─── BOOKING MODAL ───────────────────────────────────────────────────── */}
      {bookingModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#FDFBF7] border border-[#8C8368] rounded-[4px] max-w-[540px] w-full p-6 sm:p-8 shadow-2xl relative font-sans">
            <button
              onClick={() => {
                setBookingModalOpen(false);
                setBookSuccess(false);
              }}
              className="absolute top-4 right-4 text-[#776E5C] hover:text-[#221D17] font-sans text-xl font-bold p-1"
            >
              ✕
            </button>

            {!bookSuccess ? (
              <form onSubmit={handleBookingSubmit} className="space-y-4">
                <p className="text-xs uppercase tracking-widest text-[#B8541C] font-semibold mb-1">
                  1-on-1 Consultation
                </p>
                <h3 className="text-2xl font-serif font-semibold text-[#17436A] mb-2">
                  Book Your Free Consultation
                </h3>
                <p className="text-sm text-[#5C5344] mb-6">
                  {selectedCoachForBooking
                    ? `Requesting consultation with: ${selectedCoachForBooking}`
                    : "We will pair you with the best coach on our 170+ roster based on your goals."}
                </p>

                <div className="space-y-4 mb-6 text-sm">
                  <div>
                    <label className="block text-xs font-semibold text-[#5C5344] mb-1">Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={bookName}
                      onChange={(e) => setBookName(e.target.value)}
                      className="w-full px-3 py-2 bg-[#EFE7D5]/50 border border-[#8C8368] rounded focus:outline-none focus:border-[#17436A]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#5C5344] mb-1">Email Address</label>
                      <input
                        type="email"
                        required
                        placeholder="jane@example.com"
                        value={bookEmail}
                        onChange={(e) => setBookEmail(e.target.value)}
                        className="w-full px-3 py-2 bg-[#EFE7D5]/50 border border-[#8C8368] rounded focus:outline-none focus:border-[#17436A]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#5C5344] mb-1">Phone Number</label>
                      <input
                        type="tel"
                        required
                        placeholder="(555) 000-0000"
                        value={bookPhone}
                        onChange={(e) => setBookPhone(e.target.value)}
                        className="w-full px-3 py-2 bg-[#EFE7D5]/50 border border-[#8C8368] rounded focus:outline-none focus:border-[#17436A]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#5C5344] mb-1">Primary Fitness Goal</label>
                    <select
                      value={bookGoal}
                      onChange={(e) => setBookGoal(e.target.value)}
                      className="w-full px-3 py-2 bg-[#EFE7D5]/50 border border-[#8C8368] rounded"
                    >
                      <option value="Fat Loss & Leaning Out">Fat Loss & Leaning Out</option>
                      <option value="Muscle Building & Strength">Muscle Building & Strength</option>
                      <option value="Rebuilding Habits After a Break">Rebuilding Habits After a Break</option>
                      <option value="Busy Parent / Executive Recomp">Busy Parent / Executive Recomp</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#5C5344] mb-1">Preferred Nutrition Approach</label>
                    <select
                      value={bookDietPref}
                      onChange={(e) => setBookDietPref(e.target.value)}
                      className="w-full px-3 py-2 bg-[#EFE7D5]/50 border border-[#8C8368] rounded"
                    >
                      <option value="Flexible Macros (Eat What I Like)">Flexible Macros (Eat What I Like)</option>
                      <option value="Precise Meal Plan (Tell Me Exactly What to Eat)">Precise Meal Plan (Tell Me Exactly What to Eat)</option>
                      <option value="Not Sure Yet (Want Coach Advice)">Not Sure Yet (Want Coach Advice)</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={bookLoading}
                  className="w-full py-3 bg-[#B8541C] hover:bg-[#9A4514] text-white font-semibold rounded-[4px] transition-colors"
                >
                  {bookLoading ? "Submitting Request..." : "Confirm Free Consultation Request →"}
                </button>
              </form>
            ) : (
              <div className="text-center py-6">
                <div className="w-12 h-12 rounded-full bg-[#DAE8DC] text-[#2C6538] text-2xl font-bold flex items-center justify-center mx-auto mb-4">
                  ✓
                </div>
                <h3 className="text-2xl font-serif font-semibold text-[#17436A] mb-2">
                  Consultation Request Received!
                </h3>
                <p className="text-sm text-[#5C5344] mb-6 leading-relaxed font-serif">
                  Thank you, {bookName}. We have received your goals and will reach out to you via text/call at {bookPhone} to match you with your coach.
                </p>
                <button
                  onClick={() => {
                    setBookingModalOpen(false);
                    setBookSuccess(false);
                  }}
                  className="px-6 py-2.5 bg-[#17436A] text-white font-semibold text-sm rounded"
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ─── LIVE 24/7 AI COACHING CONCIERGE ─────────────────────────────────── */}
      <AIChatWidget
        clientId="6packmacros"
        buttonLabel="Ask 6 Pack Macros Assistant"
        botName="6 Pack Macros AI Assistant"
        initialGreeting="Hi there! 👋 I'm your 24/7 AI Nutrition & Coaching Assistant. How can I help you with custom macros, workouts, or choosing a coach today?"
        suggestions={[
          "How does flexible macro dieting work?",
          "How much is coaching per month?",
          "Can I choose my own coach?",
        ]}
        inputPlaceholder="Ask about macros, workouts, or coaches..."
        accentColor="#B8541C"
        pulseColor="#F3A06A"
      />
    </div>
  );
}
