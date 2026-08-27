"use client";

import React, { useState, useMemo } from "react";
import { AIChatWidget } from "@/components/ai-chat-widget";

interface Method {
  id: string;
  name: string;
  target: string;
  zone: string;
  zoneCode: "Z1" | "Z2" | "Z3" | "Z4" | "Z5";
  zoneColor: string;
  zoneText: string;
  ticks: number;
  whatItIs: string;
  protocol: {
    work: string;
    rest: string;
    intensity: string;
    duration: string;
    frequency: string;
  };
  mechanism: string;
  mechanismBasis: string;
  evidence: string;
  evidenceBasis: string;
  practice: string;
  practiceBasis: string;
  whenNotTo: string;
  commonMistakes: string;
}

const METHODS_DATA: Method[] = [
  {
    id: "cardiac-power-intervals",
    name: "Cardiac Power Intervals",
    target: "Maximal cardiac output & left ventricular contractile force",
    zone: "Z5 Max (90–95% HRmax)",
    zoneCode: "Z5",
    zoneColor: "#9E3535",
    zoneText: "#FFFFFF",
    ticks: 5,
    whatItIs: "High-intensity intervals designed to drive the heart to maximum stroke volume and chamber contraction rate without inducing excessive peripheral muscular acidosis.",
    protocol: {
      work: "60 – 120 sec",
      rest: "2 – 5 min (until HR < 130 bpm)",
      intensity: "90 – 95% HRmax",
      duration: "4 – 8 intervals (15 – 30 min total)",
      frequency: "1 – 2 sessions / week",
    },
    mechanism: "Repeated sustained contractions at peak stroke volume induce eccentric hypertrophy of the left ventricle and expand coronary vascular conductance.",
    mechanismBasis: "BASIS · MECHANISM — Left ventricular hemodynamics & stroke volume plateau (Mortensen et al. 2005)",
    evidence: "Published trials demonstrate significant increases in VO2max and cardiac index in trained subjects compared to continuous steady-state training alone.",
    evidenceBasis: "BASIS · PEER-REVIEWED — Helgerud et al. 2007 (Med Sci Sports Exerc)",
    practice: "Used primarily during the late pre-competition phase for combat athletes when peak aerobic power must be expressed without accumulating joint damage.",
    practiceBasis: "BASIS · PRACTICE — 20+ years coaching UFC fighters & tactical operators (Joel Jamieson)",
    whenNotTo: "Do not program during foundational aerobic rebuilding blocks, for athletes with an underdeveloped aerobic base (resting HR > 65 bpm), or within 7 days of competition.",
    commonMistakes: "Cutting rest intervals short, which turns a cardiac output session into a peripheral lactic acid tolerance drill.",
  },
  {
    id: "aerobic-plyometrics",
    name: "Aerobic Plyometrics",
    target: "Aerobic capacity of fast-twitch motor units & tendon elasticity",
    zone: "Z3 Tempo / Z4 Threshold",
    zoneCode: "Z3",
    zoneColor: "#C4A657",
    zoneText: "#15191B",
    ticks: 3,
    whatItIs: "Submaximal rhythmic plyometric jumping or bounding performed in an aerobic state to stimulate oxidative enzyme density in high-threshold muscle fibers.",
    protocol: {
      work: "8 – 10 sec continuous bounding",
      rest: "10 – 20 sec between sets",
      intensity: "Moderate explosive effort",
      duration: "10 – 20 min total session",
      frequency: "2 sessions / week",
    },
    mechanism: "Intermittent explosive loading promotes mitochondrial biogenesis in Type IIa fibers while conditioning stretch-shortening cycle efficiency.",
    mechanismBasis: "BASIS · MECHANISM — Type IIa fiber mitochondrial plasticity & elastic strain recovery",
    evidence: "Research on plyometric training combined with aerobic stimulus shows enhanced running economy and delayed neuromuscular fatigue.",
    evidenceBasis: "BASIS · PEER-REVIEWED — Spurrs et al. 2003 (Eur J Appl Physiol)",
    practice: "Essential for strikers and team-sport athletes who must repeatedly jump or change direction without depleting alactic phosphagen reserves.",
    practiceBasis: "BASIS · PRACTICE — Combat sports physical preparation since 2004",
    whenNotTo: "Do not use with athletes suffering from lower-extremity tendinopathy, acute plantar fasciitis, or insufficient baseline squat strength.",
    commonMistakes: "Using maximal jump heights on every rep, which rapidly induces anaerobic glycolysis and destroys aerobic pacing.",
  },
  {
    id: "alactic-intervals",
    name: "Alactic Intervals",
    target: "ATP-CP capacity, power maintenance & rapid phosphagen resynthesis",
    zone: "Z5 Max (100% effort)",
    zoneCode: "Z5",
    zoneColor: "#9E3535",
    zoneText: "#FFFFFF",
    ticks: 5,
    whatItIs: "Short, maximal-velocity bursts powered exclusively by the phosphagen system, paired with full aerobic recovery intervals to prevent lactic accumulation.",
    protocol: {
      work: "6 – 10 sec all-out sprint",
      rest: "60 – 90 sec active recovery",
      intensity: "100% maximal rate of force",
      duration: "8 – 15 reps",
      frequency: "1 – 2 sessions / week",
    },
    mechanism: "High neural drive stimulates creatine kinase activity while the aerobic system resynthesizes intramuscular phosphocreatine during the rest period.",
    mechanismBasis: "BASIS · MECHANISM — Phosphocreatine shuttle dynamics & creatine kinase kinetics",
    evidence: "Biopsy studies confirm that keeping work intervals under 10 seconds with ample recovery avoids excessive blood lactate and preserves power output.",
    evidenceBasis: "BASIS · PEER-REVIEWED — Bogdanis et al. 1996 (J Appl Physiol)",
    practice: "Standard weekly work for combat athletes to maintain explosive striking and scramble velocity through all 5 rounds.",
    practiceBasis: "BASIS · PRACTICE — Applied across MMA fight camps and tactical teams",
    whenNotTo: "Do not program when the athlete is acutely central-nervous-system fatigued or showing depressed HRV readiness scores.",
    commonMistakes: "Extending the sprint to 15–20 seconds, triggering rapid glycolysis and turning the session into lactic tolerance.",
  },
  {
    id: "hict",
    name: "High-Intensity Continuous Training (HICT)",
    target: "Oxidative capacity of fast-twitch motor units under sustained load",
    zone: "Z2 Aerobic (Heart rate 130–150 bpm)",
    zoneCode: "Z2",
    zoneColor: "#8FB8AE",
    zoneText: "#15191B",
    ticks: 2,
    whatItIs: "Slow, high-resistance concentric contractions performed continuously at low cadence on a spin bike with heavy resistance or step-ups.",
    protocol: {
      work: "10 – 20 min unbroken block",
      rest: "5 min between blocks",
      intensity: "High torque, 20–30 RPM cadence",
      duration: "1 – 3 blocks (20 – 40 min total)",
      frequency: "2 – 3 sessions / week",
    },
    mechanism: "High muscle tension recruits fast-twitch fibers while the slow movement speed allows continuous capillary blood flow and oxygen delivery.",
    mechanismBasis: "BASIS · MECHANISM — High-tension vascular perfusion & Type II fiber aerobic adaptation",
    evidence: "Physiological principles of vascular occlusion vs. low-cadence continuous perfusion in local muscular endurance.",
    evidenceBasis: "BASIS · MECHANISM — Local muscle tissue oxygenation & NIRS perfusion analysis",
    practice: "Originally developed by Russian sports scientists and popularized by Joel Jamieson for building unbreakable grappling grip and leg endurance.",
    practiceBasis: "BASIS · PRACTICE — 15+ years in combat sports and mountain tactical preparation",
    whenNotTo: "Do not use if the athlete cannot maintain low RPM cadence and lets heart rate spike into Zone 4 or 5.",
    commonMistakes: "Spinning too fast, which restricts capillary blood flow through high-frequency intramuscular compression.",
  },
  {
    id: "tempo-intervals",
    name: "Tempo Intervals",
    target: "Extensive aerobic pacing, vascular capillary density & active recovery",
    zone: "Z3 Tempo (70–75% max speed / 140–160 bpm)",
    zoneCode: "Z3",
    zoneColor: "#C4A657",
    zoneText: "#15191B",
    ticks: 3,
    whatItIs: "Rhythmic submaximal running, rowing, or swimming intervals designed to build systemic aerobic volume without neuromuscular strain.",
    protocol: {
      work: "100 – 200 meter runs @ 70% speed",
      rest: "45 – 60 sec walking recovery",
      intensity: "70 – 75% speed (smooth rhythm)",
      duration: "12 – 20 reps (1,500 – 3,000m total)",
      frequency: "2 sessions / week",
    },
    mechanism: "Repetitive rhythmic contraction enhances peripheral capillary density, cardiac stroke volume, and autonomic nervous system parasympathetic tone.",
    mechanismBasis: "BASIS · MECHANISM — Shear-stress induced capillary angiogenesis & parasympathetic recovery",
    evidence: "Charlie Francis tempo methodology adapted to general conditioning and backed by cardiovascular endurance literature.",
    evidenceBasis: "BASIS · PRACTICE — Track & field sprint tempo transfer to combat conditioning",
    practice: "Ideal for secondary training days when the goal is cardiovascular stimulus without creating muscle damage.",
    practiceBasis: "BASIS · PRACTICE — 20+ years field application with elite athletes",
    whenNotTo: "Do not use as a test of mental toughness; running above 75% speed invalidates the aerobic recovery intent.",
    commonMistakes: "Turning the tempo runs into competitive races against training partners.",
  },
  {
    id: "threshold-method",
    name: "The Threshold Method",
    target: "Anaerobic threshold velocity, lactate clearance & buffering",
    zone: "Z4 Threshold (85–88% HRmax / LT2)",
    zoneCode: "Z4",
    zoneColor: "#C4713A",
    zoneText: "#15191B",
    ticks: 4,
    whatItIs: "Sustained work intervals performed right at the second ventilatory threshold (LT2) where lactate production and lactate clearance are in equilibrium.",
    protocol: {
      work: "5 – 10 min sustained blocks",
      rest: "2 – 3 min active recovery",
      intensity: "At or slightly below anaerobic threshold",
      duration: "2 – 4 blocks (20 – 30 min at threshold)",
      frequency: "1 session / week",
    },
    mechanism: "Increases monocarboxylate transporter (MCT-1 and MCT-4) expression, allowing faster lactate shuttle from working muscles to oxidative tissues.",
    mechanismBasis: "BASIS · MECHANISM — Monocarboxylate transporter (MCT1/4) upregulation & mitochondrial clearance",
    evidence: "Extensive endurance literature demonstrates that threshold volume expands the maximum pace sustainable before exponential fatigue.",
    evidenceBasis: "BASIS · PEER-REVIEWED — Seiler & Kjerland 2006 (Scand J Med Sci Sports)",
    practice: "Utilized in mid-to-late camp to raise the athlete's 'cruising speed' during scrambles and high-output exchanges.",
    practiceBasis: "BASIS · PRACTICE — Combat sports championship distance preparation",
    whenNotTo: "Do not use if the athlete's aerobic base is shallow; threshold training on an undeveloped base quickly leads to stagnation.",
    commonMistakes: "Going over threshold into Zone 5, flooding the bloodstream with hydrogen ions and prematurely ending the block.",
  },
  {
    id: "recovery",
    name: "Active Recovery Training",
    target: "Lymphatic drainage, parasympathetic stimulation & metabolite clearance",
    zone: "Z1 Recovery (110–130 bpm)",
    zoneColor: "#CBD9E3",
    zoneCode: "Z1",
    zoneText: "#15191B",
    ticks: 1,
    whatItIs: "Low-intensity cyclic movement (walking, easy cycling, swimming) performed to stimulate circulation without adding muscular or nervous stress.",
    protocol: {
      work: "30 – 45 min continuous easy work",
      rest: "None (continuous)",
      intensity: "Heart rate strictly under 130 bpm",
      duration: "30 – 45 min",
      frequency: "1 – 3 days / week (post-hard training)",
    },
    mechanism: "Muscle pump action increases venous return and lymphatic fluid drainage while gentle cardiovascular stimulus stimulates vagal nerve tone.",
    mechanismBasis: "BASIS · MECHANISM — Vagal nerve stimulation, lymphatic pump & parasympathetic reactivation",
    evidence: "Autonomic research demonstrates faster HRV normalization and lowered systemic inflammatory markers following active recovery vs passive sitting.",
    evidenceBasis: "BASIS · PEER-REVIEWED — Stanley et al. 2013 (Sports Med)",
    practice: "Joel's primary tool for resetting heart rate variability (BioForce HRV) following high-strain sparring or heavy lifting days.",
    practiceBasis: "BASIS · PRACTICE — BioForce HRV protocol tracking across thousands of athletes",
    whenNotTo: "Do not skip active recovery when HRV is depressed in favor of complete sedentary bed rest.",
    commonMistakes: "Letting heart rate creep up to 140+ bpm because the athlete feels 'it's too easy.'",
  },
  {
    id: "regeneration",
    name: "Regeneration Protocols",
    target: "Autonomic nervous system rebalancing & neuroendocrine reset",
    zone: "Z1 Recovery",
    zoneCode: "Z1",
    zoneColor: "#CBD9E3",
    zoneText: "#15191B",
    ticks: 1,
    whatItIs: "A structured combination of breathing techniques, temperature contrast, targeted soft-tissue work, and sleep hygiene to accelerate system recovery.",
    protocol: {
      work: "15 – 30 min daily post-workout or evening",
      rest: "N/A",
      intensity: "Restorative / Parasympathetic",
      duration: "15 – 30 min",
      frequency: "Daily during intensive training cycles",
    },
    mechanism: "Downregulates sympathetic fight-or-flight signaling, reduces circulating cortisol, and promotes restorative slow-wave sleep cycles.",
    mechanismBasis: "BASIS · MECHANISM — Sympathovagal balance, cortisol suppression & sleep architecture",
    evidence: "Heart rate variability biofeedback and recovery science literature support structured parasympathetic conditioning for athletic durability.",
    evidenceBasis: "BASIS · PEER-REVIEWED — Jamieson 2009 ('Ultimate MMA Conditioning') & BioForce HRV data",
    practice: "Mandatory protocol for tactical teams and athletes in twice-daily training camps to prevent non-functional overreaching.",
    practiceBasis: "BASIS · PRACTICE — 20+ years of HRV-guided training periodization",
    whenNotTo: "Do not treat regeneration as a replacement for adequate caloric intake and 8 hours of baseline sleep.",
    commonMistakes: "Using aggressive cold exposure immediately post-hypertrophy resistance training, which can blunt muscular adaptation.",
  },
];

const ZONE_RAMP = [
  { code: "Z1", name: "Recovery", range: "< 130 bpm", color: "#CBD9E3", text: "#15191B", desc: "Active recovery, parasympathetic reset, lymphatic clearance", ticks: "•" },
  { code: "Z2", name: "Aerobic", range: "130 – 150 bpm", color: "#8FB8AE", text: "#15191B", desc: "Mitochondrial density, stroke volume, base endurance", ticks: "••" },
  { code: "Z3", name: "Tempo", range: "150 – 165 bpm", color: "#C4A657", text: "#15191B", desc: "Extensive pacing, capillary angiogenesis, rhythmic stamina", ticks: "•••" },
  { code: "Z4", name: "Threshold", range: "165 – 175 bpm", color: "#C4713A", text: "#15191B", desc: "Lactate clearance, buffering capacity, anaerobic threshold", ticks: "••••" },
  { code: "Z5", name: "Max", range: "175+ bpm", color: "#9E3535", text: "#FFFFFF", desc: "Cardiac power intervals, VO2max, peak output capacity", ticks: "•••••" },
];

export function EightWeeksOutShowcase() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [insiderModalOpen, setInsiderModalOpen] = useState(false);
  const [activeMethodId, setActiveMethodId] = useState<string>("cardiac-power-intervals");
  const [expandAllLayers, setExpandAllLayers] = useState<boolean>(false);
  const [layerOpenState, setLayerOpenState] = useState<Record<string, boolean>>({
    mechanism: false,
    evidence: false,
    practice: false,
  });

  // Insider Form State
  const [insiderName, setInsiderName] = useState("");
  const [insiderEmail, setInsiderEmail] = useState("");
  const [insiderRole, setInsiderRole] = useState("Coach / Personal Trainer");
  const [insiderSuccess, setInsiderSuccess] = useState(false);
  const [insiderLoading, setInsiderLoading] = useState(false);

  const activeMethod = useMemo(() => {
    return METHODS_DATA.find((m) => m.id === activeMethodId) || METHODS_DATA[0];
  }, [activeMethodId]);

  const toggleLayer = (layerKey: string) => {
    setLayerOpenState((prev) => ({ ...prev, [layerKey]: !prev[layerKey] }));
  };

  const handleExpandAllToggle = () => {
    const nextState = !expandAllLayers;
    setExpandAllLayers(nextState);
    setLayerOpenState({
      mechanism: nextState,
      evidence: nextState,
      practice: nextState,
    });
  };

  const handleInsiderSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!insiderEmail) return;

    setInsiderLoading(true);
    try {
      await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: insiderName || "Coach",
          email: insiderEmail,
          phone: "Online Insider",
          company: "8 Weeks Out",
          trade: "BioForce Conditioning Certification Insider",
          crm: `INSIDER LIST ENROLLMENT: 8 Weeks Out | Role: ${insiderRole} | Benefits: $200 Discount + Early Registration Notification`,
        }),
      });
      setInsiderSuccess(true);
    } catch {
      setInsiderSuccess(true);
    } finally {
      setInsiderLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen text-[#15191B] antialiased selection:bg-[#8E2B2B] selection:text-white"
      style={{
        backgroundColor: "#AEB7BC",
        fontFamily: 'Recursive, "Segoe UI", Roboto, system-ui, sans-serif',
      }}
    >
      {/* ─── SITE HEADER ────────────────────────────────────────────────────────── */}
      <header className="sticky top-0 z-40 bg-[#FAFBFB] border-b border-[#4F585D]">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 h-[72px] flex items-center justify-between">
          <a href="#hero" className="flex items-baseline gap-2.5 group">
            <span className="font-bold text-2xl tracking-tight text-[#15191B] font-mono group-hover:text-[#8E2B2B] transition-colors">
              8 WEEKS OUT
            </span>
            <span className="text-[11px] font-mono tracking-widest text-[#5E686E] uppercase font-semibold">
              CONDITIONING · SINCE 2009
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7 text-[15px] font-medium text-[#15191B]">
            <a href="#editorial-standard" className="hover:text-[#8E2B2B] transition-colors">
              Editorial Standard
            </a>
            <a href="#articles" className="hover:text-[#8E2B2B] transition-colors">
              Articles
            </a>
            <a href="#methods" className="hover:text-[#8E2B2B] transition-colors font-semibold text-[#8E2B2B]">
              Methods (8)
            </a>
            <a href="#certification" className="hover:text-[#8E2B2B] transition-colors">
              Certification
            </a>
            <a href="#courses" className="hover:text-[#8E2B2B] transition-colors">
              Courses
            </a>
            <a href="#about" className="hover:text-[#8E2B2B] transition-colors">
              About Joel
            </a>
          </nav>

          {/* Right Action: Insider List CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={() => setInsiderModalOpen(true)}
              className="px-5 py-2.5 bg-[#8E2B2B] hover:bg-[#7A2424] text-[#FAFBFB] text-sm font-semibold rounded-[3px] transition-colors"
            >
              Join the Insider&apos;s List ($200 Off)
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#15191B] text-sm font-bold font-mono border border-[#4F585D] rounded-[3px]"
          >
            {mobileMenuOpen ? "CLOSE" : "MENU"}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#FAFBFB] border-b border-[#4F585D] px-6 py-6 space-y-4 text-base font-medium">
            <a href="#editorial-standard" onClick={() => setMobileMenuOpen(false)} className="block text-[#15191B]">
              Editorial Standard & Basis Lines
            </a>
            <a href="#articles" onClick={() => setMobileMenuOpen(false)} className="block text-[#15191B]">
              Articles (Coaches & Athletes)
            </a>
            <a href="#methods" onClick={() => setMobileMenuOpen(false)} className="block font-bold text-[#8E2B2B]">
              Conditioning Methods Glossary (8)
            </a>
            <a href="#certification" onClick={() => setMobileMenuOpen(false)} className="block text-[#15191B]">
              BioForce Certification (CCC)
            </a>
            <a href="#courses" onClick={() => setMobileMenuOpen(false)} className="block text-[#15191B]">
              Courses (Zone 2, Fit for Life)
            </a>
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block text-[#15191B]">
              About Joel Jamieson
            </a>
            <div className="pt-4 border-t border-[#C9D0D4]">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setInsiderModalOpen(true);
                }}
                className="w-full py-3 bg-[#8E2B2B] text-[#FAFBFB] font-semibold text-center rounded-[3px]"
              >
                Join the Insider&apos;s List
              </button>
            </div>
          </div>
        )}
      </header>

      {/* ─── MAIN CONTENT CONTAINER (DESK GROUND) ─────────────────────────────── */}
      <main className="max-w-[1400px] mx-auto px-3 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12">
        {/* ─── SECTION 1: HERO (THE EVIDENCE ATTACHED) ─────────────────────────── */}
        <section id="hero" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Primary Reading Sheet (Columns 1-8) */}
          <div className="lg:col-span-8 bg-[#FAFBFB] border border-[#4F585D] rounded-none p-6 sm:p-10 lg:p-12">
            <p className="font-mono text-[12px] uppercase tracking-[0.06em] text-[#7A2424] font-bold mb-4">
              CONDITIONING · SINCE 2009
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#15191B] leading-[1.12] mb-6">
              Conditioning, with the evidence attached.
            </h1>
            <p className="text-lg sm:text-xl text-[#4B5459] leading-[1.65] mb-8 font-normal">
              Twenty years of training combat athletes, and a decade of writing about what actually works — with every claim labelled: published research, physiological mechanism, or my own practice.
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
              <a
                href="#articles"
                className="inline-flex justify-center items-center px-6 py-3 border border-[#15191B] text-[#15191B] hover:bg-[#EAEDEF] text-sm font-semibold rounded-[3px] transition-colors"
              >
                Read the Articles (Free Archive)
              </a>
              <button
                onClick={() => setInsiderModalOpen(true)}
                className="inline-flex justify-center items-center px-6 py-3 bg-[#8E2B2B] hover:bg-[#7A2424] text-[#FAFBFB] text-sm font-semibold rounded-[3px] transition-colors"
              >
                Join the Insider&apos;s List ($200 Off)
              </button>
            </div>

            <p className="text-xs font-mono text-[#5E686E]">
              Next certification window opens twice per year · Free 180+ page mailed workbook
            </p>
          </div>

          {/* Right Live Example Sheet: The Basis Line in Action (Columns 9-12) */}
          <div className="lg:col-span-4 bg-[#FAFBFB] border border-[#4F585D] rounded-none p-6 sm:p-8">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#7A2424] font-bold block mb-2">
              LIVE SYSTEM EXAMPLE
            </span>
            <h3 className="font-bold text-base text-[#15191B] mb-3">
              How Claims Are Handled Here:
            </h3>
            <p className="text-sm text-[#4B5459] leading-relaxed mb-2">
              &ldquo;Cardiac power intervals expand left ventricular volume and stroke volume faster than continuous endurance alone.&rdquo;
            </p>
            {/* The Signature Basis Line */}
            <div className="bg-[#EAEDEF] p-2.5 border-l-2 border-[#8E2B2B] mb-4">
              <p className="font-mono text-[11px] uppercase tracking-[0.06em] text-[#7A2424] font-bold">
                BASIS · PEER-REVIEWED
              </p>
              <p className="font-mono text-[11px] text-[#5E686E] mt-0.5">
                Helgerud et al. 2007 (Med Sci Sports Exerc)
              </p>
            </div>
            <p className="text-xs text-[#5E686E] leading-relaxed">
              No unattributed assertions. When something is science, we cite it. When it is experience, we say so.
            </p>
          </div>
        </section>

        {/* ─── AUTHENTIC EVIDENCE GALLERY: 20+ YEARS IN THE TRENCHES ───────────── */}
        <section className="bg-[#FAFBFB] border border-[#4F585D] p-6 sm:p-10">
          <div className="max-w-[800px] mb-6">
            <span className="font-mono text-[11px] uppercase tracking-[0.06em] text-[#7A2424] font-bold block mb-1">
              FIELD APPLICATION &amp; ATHLETE CAMPS
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#15191B] mb-2">
              20+ Years in Elite Sport &amp; Combat Conditioning
            </h2>
            <p className="text-xs sm:text-sm text-[#4B5459]">
              Documentary records from championship fight camps, NFL/NCAA team preparation, and Heart Rate Variability (BioForce HRV) physiological tracking.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="border border-[#4F585D] bg-[#EAEDEF] overflow-hidden">
              <img
                src="https://8weeksout.com/wp-content/uploads/2011/03/R_Franklin_5.8.09_340.jpg"
                alt="Rich Franklin UFC Middleweight Champion conditioning with Joel Jamieson"
                className="w-full h-44 object-cover object-top filter grayscale contrast-125 hover:grayscale-0 transition-all duration-300"
              />
              <div className="p-3 font-mono text-[11px]">
                <strong className="block text-[#15191B]">Rich Franklin (UFC Camp)</strong>
                <span className="text-[#5E686E]">Conditioning Camp &amp; HRV Periodization</span>
              </div>
            </div>

            <div className="border border-[#4F585D] bg-[#EAEDEF] overflow-hidden">
              <img
                src="https://8weeksout.com/wp-content/uploads/2011/07/Chris_Leben_Power.jpg"
                alt="Chris Leben Power Conditioning at 8 Weeks Out"
                className="w-full h-44 object-cover object-top filter grayscale contrast-125 hover:grayscale-0 transition-all duration-300"
              />
              <div className="p-3 font-mono text-[11px]">
                <strong className="block text-[#15191B]">Chris Leben (Power Endurance)</strong>
                <span className="text-[#5E686E]">Alactic &amp; Cardiac Output Protocols</span>
              </div>
            </div>

            <div className="border border-[#4F585D] bg-[#EAEDEF] overflow-hidden">
              <img
                src="https://8weeksout.com/wp-content/uploads/2011/03/HRV-Report.jpg"
                alt="BioForce HRV physiological autonomic report"
                className="w-full h-44 object-cover filter grayscale contrast-125 hover:grayscale-0 transition-all duration-300"
              />
              <div className="p-3 font-mono text-[11px]">
                <strong className="block text-[#15191B]">BioForce HRV System</strong>
                <span className="text-[#5E686E]">Objective Central Nervous System Tracking</span>
              </div>
            </div>

            <div className="border border-[#4F585D] bg-[#EAEDEF] overflow-hidden">
              <img
                src="https://8weeksout.com/wp-content/uploads/2011/07/weightlifting-training-facility1.jpg"
                alt="High performance strength and conditioning training facility"
                className="w-full h-44 object-cover filter grayscale contrast-125 hover:grayscale-0 transition-all duration-300"
              />
              <div className="p-3 font-mono text-[11px]">
                <strong className="block text-[#15191B]">Seattle Facility</strong>
                <span className="text-[#5E686E]">Annual CCC Coach Workshop &amp; Testing</span>
              </div>
            </div>
          </div>
        </section>

        {/* ─── SECTION 2: THE EDITORIAL STANDARD (DESK PROCLAMATION) ───────────── */}
        <section id="editorial-standard" className="py-6 px-4 max-w-[840px]">
          <span className="font-mono text-xs uppercase tracking-widest text-[#15191B] font-bold block mb-2">
            THE EDITORIAL STANDARD
          </span>
          <p className="text-xl sm:text-2xl font-semibold text-[#15191B] leading-relaxed">
            &ldquo;Every claim on this site says what it rests on. Some of it is published research. Some of it is physiology we understand but haven&apos;t tested directly. Some of it is what twenty years with fighters taught me. You should know which is which.&rdquo;
          </p>
          <div className="mt-3 flex items-center gap-4 text-xs font-mono text-[#15191B]">
            <span>— Joel Jamieson, Founder</span>
            <span>·</span>
            <a href="#certification" className="underline hover:text-[#8E2B2B]">
              Read the Full Methodology
            </a>
          </div>
        </section>

        {/* ─── SECTION 3: PROGRESSIVE DEPTH ENGINE (ARTICLE STUDY DEMO) ─────────── */}
        <section id="articles" className="bg-[#FAFBFB] border border-[#4F585D] rounded-none p-6 sm:p-10 lg:p-12">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-8 border-b border-[#C9D0D4]">
            <div>
              <span className="font-mono text-[11px] uppercase tracking-[0.06em] text-[#7A2424] font-bold block mb-1">
                FEATURED TECHNICAL ARTICLE & PROGRESSIVE DEPTH
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#15191B]">
                How to Build an Aerobic Base for High-Intensity Sport
              </h2>
            </div>

            {/* Expand Everything Master Control */}
            <button
              onClick={handleExpandAllToggle}
              className="px-4 py-2 bg-[#EAEDEF] hover:bg-[#C9D0D4] text-[#15191B] font-mono text-xs font-bold border border-[#4F585D] rounded-[3px] transition-colors self-start sm:self-auto"
            >
              {expandAllLayers ? "COLLAPSE ALL LAYERS" : "EXPAND EVERYTHING (STUDY MODE)"}
            </button>
          </div>

          {/* Layer 1: The Short Answer (Always Visible) */}
          <div className="mb-8">
            <span className="font-mono text-[11px] uppercase tracking-wider text-[#5E686E] font-bold block mb-2">
              LAYER 1 · THE SHORT ANSWER
            </span>
            <p className="text-base sm:text-lg text-[#15191B] leading-relaxed mb-3">
              High-intensity athletes need a massive aerobic base not to run marathons, but to rapidly clear cellular metabolites and resynthesize phosphocreatine between explosive bursts. Without sufficient cardiac stroke volume, an athlete redlines in round one and cannot recover.
            </p>
            <div className="font-mono text-[11px] uppercase tracking-[0.06em] text-[#7A2424] font-bold mb-4">
              BASIS · MECHANISM — Intramuscular PCr resynthesis & Left Ventricular Stroke Volume
            </div>
          </div>

          {/* Progressive Depth Accordion Sheets */}
          <div className="space-y-4">
            {/* Layer 2: The Mechanism */}
            <div className="border border-[#4F585D] rounded-none">
              <button
                onClick={() => toggleLayer("mechanism")}
                className="w-full bg-[#EAEDEF] px-5 py-3.5 flex items-center justify-between text-left font-mono text-xs font-bold text-[#15191B] hover:bg-[#C9D0D4] transition-colors"
              >
                <span>LAYER 2 · THE PHYSIOLOGICAL MECHANISM</span>
                <span className="text-sm font-bold">{layerOpenState.mechanism ? "−" : "+"}</span>
              </button>
              {layerOpenState.mechanism && (
                <div className="p-5 bg-[#FAFBFB] border-t border-[#4F585D] text-sm text-[#4B5459] leading-relaxed space-y-3">
                  <p>
                    During submaximal training (Zone 2, 130–150 bpm), the heart fills completely with blood during diastole, stretching the myocardial wall. This stretch stimulates eccentric cardiac hypertrophy—enlarging the chamber cavity itself.
                  </p>
                  <p>
                    Conversely, excessive high-intensity training with high heart rates (&gt;180 bpm) decreases diastolic filling time, leading to concentric hypertrophy (thickening the muscular walls without increasing internal cavity volume).
                  </p>
                  <div className="font-mono text-[11px] uppercase tracking-[0.06em] text-[#7A2424] font-bold pt-2 border-t border-[#EAEDEF]">
                    BASIS · MECHANISM — Frank-Starling Law of the Heart & Myocardial Wall Stress
                  </div>
                </div>
              )}
            </div>

            {/* Layer 3: The Evidence */}
            <div className="border border-[#4F585D] rounded-none">
              <button
                onClick={() => toggleLayer("evidence")}
                className="w-full bg-[#EAEDEF] px-5 py-3.5 flex items-center justify-between text-left font-mono text-xs font-bold text-[#15191B] hover:bg-[#C9D0D4] transition-colors"
              >
                <span>LAYER 3 · THE PUBLISHED RESEARCH & EVIDENCE</span>
                <span className="text-sm font-bold">{layerOpenState.evidence ? "−" : "+"}</span>
              </button>
              {layerOpenState.evidence && (
                <div className="p-5 bg-[#FAFBFB] border-t border-[#4F585D] text-sm text-[#4B5459] leading-relaxed space-y-3">
                  <p>
                    Longitudinal studies by Seiler &amp; Tønnessen (2009) evaluating elite endurance competitors across sports demonstrate that approximately 80% of total training volume must be conducted below the first ventilatory threshold (VT1) to maximize mitochondrial biogenesis and capillary density.
                  </p>
                  <p>
                    When athletes invert this ratio to 50%+ high-intensity work, autonomic nervous system strain escalates without corresponding gains in peak power output.
                  </p>
                  <div className="font-mono text-[11px] uppercase tracking-[0.06em] text-[#7A2424] font-bold pt-2 border-t border-[#EAEDEF]">
                    BASIS · PEER-REVIEWED — Seiler &amp; Tønnessen 2009 (Sports Science Review)
                  </div>
                </div>
              )}
            </div>

            {/* Layer 4: In Practice */}
            <div className="border border-[#4F585D] rounded-none">
              <button
                onClick={() => toggleLayer("practice")}
                className="w-full bg-[#EAEDEF] px-5 py-3.5 flex items-center justify-between text-left font-mono text-xs font-bold text-[#15191B] hover:bg-[#C9D0D4] transition-colors"
              >
                <span>LAYER 4 · IN PRACTICE (COACHING APPLICATION & PROTOCOLS)</span>
                <span className="text-sm font-bold">{layerOpenState.practice ? "−" : "+"}</span>
              </button>
              {layerOpenState.practice && (
                <div className="p-5 bg-[#FAFBFB] border-t border-[#4F585D] text-sm text-[#4B5459] leading-relaxed space-y-3">
                  <p>
                    <strong>How Joel Programs This:</strong> For an MMA fighter 8 weeks out from a fight, program 2 weekly sessions of High-Intensity Continuous Training (HICT) at 130–150 bpm on a high-resistance spin bike, paired with 1 weekly session of Cardiac Power Intervals.
                  </p>
                  <p>
                    <strong>Where Coaches Fail:</strong> Allowing athletes to turn aerobic recovery days into competitive circuits, causing chronic parasympathetic suppression.
                  </p>
                  <div className="font-mono text-[11px] uppercase tracking-[0.06em] text-[#7A2424] font-bold pt-2 border-t border-[#EAEDEF]">
                    BASIS · PRACTICE — 20+ Years with UFC, NFL & Combat Sport Camps (Joel Jamieson)
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* ─── SECTION 4: THE 8 CONDITIONING METHODS GLOSSARY ───────────────────── */}
        <section id="methods" className="bg-[#FAFBFB] border border-[#4F585D] rounded-none p-6 sm:p-10 lg:p-12">
          <div className="max-w-[800px] mb-8">
            <span className="font-mono text-[11px] uppercase tracking-[0.06em] text-[#7A2424] font-bold block mb-1">
              THE METHOD GLOSSARY
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#15191B] mb-3">
              The 8 Conditioning Methods, Fully Specified
            </h2>
            <p className="text-[#4B5459] text-sm sm:text-base">
              The curriculum is public. Select any method below to view its physiological target, protocol parameters, training zone, mechanism, evidence, and when NOT to use it.
            </p>
          </div>

          {/* Method Selector Chips */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-8 font-mono text-xs font-bold">
            {METHODS_DATA.map((m) => (
              <button
                key={m.id}
                onClick={() => setActiveMethodId(m.id)}
                className={`p-3 text-left border rounded-none transition-all ${
                  activeMethodId === m.id
                    ? "bg-[#15191B] text-white border-[#15191B]"
                    : "bg-[#EAEDEF] text-[#15191B] border-[#4F585D] hover:bg-[#C9D0D4]"
                }`}
              >
                <div className="text-[10px] text-[#7A2424]">{m.zoneCode}</div>
                <div className="truncate">{m.name}</div>
              </button>
            ))}
          </div>

          {/* Active Method Deep Sheet */}
          <div className="border border-[#4F585D] p-6 sm:p-8 bg-[#FAFBFB] space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#C9D0D4] gap-3">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#7A2424] font-bold">
                  METHOD SPECIFICATION
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#15191B]">{activeMethod.name}</h3>
                <p className="text-sm text-[#4B5459] font-medium mt-1">{activeMethod.target}</p>
              </div>

              {/* Zone Ramp Badge */}
              <div
                className="px-3.5 py-1.5 font-mono text-xs font-bold self-start sm:self-auto border border-[#4F585D]"
                style={{ backgroundColor: activeMethod.zoneColor, color: activeMethod.zoneText }}
              >
                {activeMethod.zone}
              </div>
            </div>

            {/* Overview */}
            <p className="text-base text-[#15191B] leading-relaxed">
              {activeMethod.whatItIs}
            </p>

            {/* Protocol Table */}
            <div>
              <span className="font-mono text-xs uppercase tracking-wider text-[#5E686E] font-bold block mb-2">
                TYPICAL PROTOCOL PARAMETERS (ILLUSTRATIVE RANGES)
              </span>
              <div className="overflow-x-auto">
                <table className="w-full text-xs font-mono border border-[#4F585D] text-left">
                  <thead className="bg-[#EAEDEF] border-b border-[#4F585D]">
                    <tr>
                      <th className="p-3 border-r border-[#4F585D]">WORK INTERVAL</th>
                      <th className="p-3 border-r border-[#4F585D]">REST INTERVAL</th>
                      <th className="p-3 border-r border-[#4F585D]">INTENSITY</th>
                      <th className="p-3 border-r border-[#4F585D]">SESSION DURATION</th>
                      <th className="p-3">WEEKLY FREQUENCY</th>
                    </tr>
                  </thead>
                  <tbody className="bg-[#FAFBFB]">
                    <tr>
                      <td className="p-3 border-r border-[#4F585D] font-bold">{activeMethod.protocol.work}</td>
                      <td className="p-3 border-r border-[#4F585D]">{activeMethod.protocol.rest}</td>
                      <td className="p-3 border-r border-[#4F585D]">{activeMethod.protocol.intensity}</td>
                      <td className="p-3 border-r border-[#4F585D]">{activeMethod.protocol.duration}</td>
                      <td className="p-3 font-bold">{activeMethod.protocol.frequency}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Mechanism & Evidence */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              <div className="bg-[#EAEDEF] p-4 border border-[#C9D0D4]">
                <span className="font-mono text-[11px] font-bold uppercase text-[#15191B] block mb-1">
                  PHYSIOLOGICAL MECHANISM
                </span>
                <p className="text-xs text-[#4B5459] leading-relaxed mb-3">
                  {activeMethod.mechanism}
                </p>
                <div className="font-mono text-[10px] text-[#7A2424] font-bold">
                  {activeMethod.mechanismBasis}
                </div>
              </div>

              <div className="bg-[#EAEDEF] p-4 border border-[#C9D0D4]">
                <span className="font-mono text-[11px] font-bold uppercase text-[#15191B] block mb-1">
                  EVIDENCE & PRACTICE BASIS
                </span>
                <p className="text-xs text-[#4B5459] leading-relaxed mb-3">
                  {activeMethod.evidence}
                </p>
                <div className="font-mono text-[10px] text-[#7A2424] font-bold">
                  {activeMethod.evidenceBasis}
                </div>
              </div>
            </div>

            {/* When NOT to use this method */}
            <div className="p-4 bg-[#F2E0E0] border-l-4 border-[#8E2B2B]">
              <span className="font-mono text-xs font-bold uppercase text-[#7A2424] block mb-1">
                WHEN NOT TO PROGRAM THIS METHOD (MANDATORY RESTRICTION)
              </span>
              <p className="text-xs text-[#15191B] leading-relaxed">
                {activeMethod.whenNotTo}
              </p>
            </div>
          </div>
        </section>

        {/* ─── SECTION 5: THE TRAINING ZONE RAMP ───────────────────────────────── */}
        <section className="bg-[#FAFBFB] border border-[#4F585D] rounded-none p-6 sm:p-10 lg:p-12">
          <div className="max-w-[760px] mb-8">
            <span className="font-mono text-[11px] uppercase tracking-[0.06em] text-[#7A2424] font-bold block mb-1">
              THE PHYSIOLOGICAL SPECTRUM
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#15191B] mb-2">
              The 5-Zone Conditioning Ramp
            </h2>
            <p className="text-sm text-[#4B5459]">
              Every method in the 8 Weeks Out system maps to an exact physiological heart-rate training zone.
            </p>
          </div>

          <div className="space-y-3 font-mono text-xs">
            {ZONE_RAMP.map((z) => (
              <div
                key={z.code}
                className="p-4 border border-[#4F585D] flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                style={{ backgroundColor: z.color, color: z.text }}
              >
                <div className="flex items-center gap-3">
                  <span className="font-bold text-base px-2 py-0.5 bg-black/10 border border-black/20">
                    {z.code}
                  </span>
                  <div>
                    <span className="font-bold text-sm">{z.name}</span>
                    <span className="ml-2 opacity-80">({z.range})</span>
                  </div>
                </div>
                <div className="text-xs sm:text-right font-sans font-medium">{z.desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ─── SECTION 6: BIOFORCE CONDITIONING CERTIFICATION (CCC) ─────────────── */}
        <section id="certification" className="bg-[#FAFBFB] border border-[#4F585D] rounded-none p-6 sm:p-10 lg:p-12">
          <div className="max-w-[800px] mb-8">
            <span className="font-mono text-[11px] uppercase tracking-[0.06em] text-[#7A2424] font-bold block mb-1">
              FLAGSHIP COACH EDUCATION
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#15191B] mb-4">
              BioForce Conditioning Certification (CCC)
            </h2>
            <p className="text-lg text-[#4B5459] leading-relaxed">
              The complete, practical, self-guided conditioning certification designed for serious coaches. Learn how to assess, program, and individualize conditioning for any athlete without guesswork.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8 font-mono text-xs">
            <div className="bg-[#EAEDEF] p-5 border border-[#4F585D]">
              <span className="text-[10px] uppercase text-[#7A2424] font-bold block mb-1">FORMAT</span>
              <p className="font-bold text-sm text-[#15191B] mb-1">Self-Guided</p>
              <p className="font-sans text-xs text-[#5E686E]">Complete online modules at your own pace with lifetime curriculum updates.</p>
            </div>

            <div className="bg-[#EAEDEF] p-5 border border-[#4F585D]">
              <span className="text-[10px] uppercase text-[#7A2424] font-bold block mb-1">PHYSICAL ASSET</span>
              <p className="font-bold text-sm text-[#15191B] mb-1">180+ Page Workbook</p>
              <p className="font-sans text-xs text-[#5E686E]">Physical comprehensive reference manual printed and shipped free to your door.</p>
            </div>

            <div className="bg-[#EAEDEF] p-5 border border-[#4F585D]">
              <span className="text-[10px] uppercase text-[#7A2424] font-bold block mb-1">ASSESSMENT</span>
              <p className="font-bold text-sm text-[#15191B] mb-1">50-Question Exam</p>
              <p className="font-sans text-xs text-[#5E686E]">Rigorous 80% passing standard followed by official mailed certificate.</p>
            </div>

            <div className="bg-[#EAEDEF] p-5 border border-[#4F585D]">
              <span className="text-[10px] uppercase text-[#7A2424] font-bold block mb-1">ANNUAL EVENT</span>
              <p className="font-bold text-sm text-[#15191B] mb-1">Seattle Workshop</p>
              <p className="font-sans text-xs text-[#5E686E]">Free annual in-person coaching clinic hosted by Joel Jamieson for CCC coaches.</p>
            </div>
          </div>

          {/* Physical Deliverable Visual Banner */}
          <div className="border border-[#4F585D] bg-[#EAEDEF] p-6 mb-10 flex flex-col md:flex-row items-center gap-6">
            <img
              src="https://8weeksout.com/wp-content/uploads/2011/12/BioForce-HRV-Pro-Package.jpg"
              alt="BioForce Conditioning Certification System Package and Physical Workbook"
              className="w-full md:w-64 h-48 object-cover border border-[#4F585D] filter contrast-110"
            />
            <div className="space-y-2">
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#7A2424] font-bold">
                PHYSICAL ARTEFACT SHIPPED FREE
              </span>
              <h4 className="text-xl font-bold text-[#15191B]">
                The 180+ Page BioForce Conditioning Workbook
              </h4>
              <p className="text-xs text-[#4B5459] leading-relaxed">
                Every certified coach receives a physical, coil-bound 180+ page workbook containing complete exercise library templates, periodization charts, and interval programming algorithms to keep in the weight room.
              </p>
            </div>
          </div>

          {/* Who This Is NOT For (Prominent Exclusion) */}
          <div className="p-6 bg-[#EAEDEF] border border-[#4F585D] mb-10">
            <span className="font-mono text-xs font-bold uppercase text-[#7A2424] block mb-2">
              WHO THIS CERTIFICATION IS NOT FOR
            </span>
            <p className="text-sm text-[#15191B] leading-relaxed mb-3">
              &ldquo;This isn&apos;t for you if you&apos;re not coaching anyone yet. Work with a few clients first, find out whether you enjoy this field, then come back. And it isn&apos;t for you if you&apos;re just collecting certificates — a piece of paper is meaningless on its own.&rdquo;
            </p>
            <span className="font-mono text-xs font-bold text-[#5E686E]">— Joel Jamieson</span>
          </div>

          {/* Enrolment Facts & $200 Insider Discount */}
          <div className="p-8 bg-[#15191B] text-[#FAFBFB] flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#8E2B2B] font-bold block mb-1">
                ENROLMENT SCHEDULE
              </span>
              <h3 className="text-2xl font-bold text-white mb-2">
                Opens Twice Per Year
              </h3>
              <p className="text-sm text-[#AEB7BC] max-w-[500px]">
                To ensure every coach receives direct feedback, registration opens only during dedicated semi-annual cohorts. Joining the Insider&apos;s List saves $200 and provides early access.
              </p>
            </div>

            <button
              onClick={() => setInsiderModalOpen(true)}
              className="px-8 py-4 bg-[#8E2B2B] hover:bg-[#7A2424] text-[#FAFBFB] font-mono text-sm font-bold rounded-[3px] transition-colors whitespace-nowrap"
            >
              Get $200 Off on the Insider&apos;s List →
            </button>
          </div>
        </section>

        {/* ─── SECTION 7: VERIFIED TESTIMONIAL (CONFLICT-FREE) ─────────────────── */}
        <section className="bg-[#FAFBFB] border border-[#4F585D] rounded-none p-6 sm:p-10 lg:p-12">
          <span className="font-mono text-[11px] uppercase tracking-[0.06em] text-[#7A2424] font-bold block mb-2">
            VERIFIED GRADUATE FEEDBACK
          </span>
          <div className="max-w-[760px]">
            <p className="text-lg text-[#15191B] italic leading-relaxed mb-4">
              &ldquo;The BioForce Certification gave me a much better lens to view programming. It is incredibly thorough on methodology, practical coaching examples, testing tools, and long-term macrocycle periodization.&rdquo;
            </p>
            <div className="font-mono text-xs text-[#5E686E]">
              <strong>Mike Subach</strong> · Certified Conditioning Coach (CCC) · Strength &amp; Conditioning Specialist
            </div>
          </div>
        </section>
      </main>

      {/* ─── SITE FOOTER ────────────────────────────────────────────────────────── */}
      <footer className="bg-[#15191B] text-[#FAFBFB] py-16 px-6 sm:px-10 border-t border-[#4F585D] mt-16 font-mono text-xs">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div>
            <span className="font-bold text-xl block mb-2 text-white">8 WEEKS OUT</span>
            <p className="text-[#9AA4AA] font-sans text-xs leading-relaxed mb-3">
              The world&apos;s foremost authority on energy systems, Heart Rate Variability (HRV), and conditioning science. Founded by Joel Jamieson in 2009.
            </p>
            <p className="text-[#9AA4AA] font-mono text-[11px]">
              Seattle, WA · info@8weeksout.com
            </p>
          </div>

          <div className="space-y-2">
            <span className="font-bold text-white uppercase block mb-3">Education</span>
            <a href="#certification" className="block text-[#9AA4AA] hover:text-white">BioForce Certification (CCC)</a>
            <a href="#methods" className="block text-[#9AA4AA] hover:text-white">8 Conditioning Methods</a>
            <a href="#articles" className="block text-[#9AA4AA] hover:text-white">Free Article Archive</a>
            <a href="#editorial-standard" className="block text-[#8E2B2B] hover:underline font-bold">The Editorial Standard</a>
          </div>

          <div className="space-y-2">
            <span className="font-bold text-white uppercase block mb-3">Products & Media</span>
            <a href="#courses" className="block text-[#9AA4AA] hover:text-white">Zone 2 Cardio Course</a>
            <a href="#courses" className="block text-[#9AA4AA] hover:text-white">Fit for Life Program</a>
            <a href="#courses" className="block text-[#9AA4AA] hover:text-white">Ultimate MMA Conditioning (Book)</a>
            <a href="#morpheus" className="block text-[#9AA4AA] hover:text-white">Morpheus HRV System</a>
          </div>

          <div className="space-y-2 text-[#9AA4AA]">
            <span className="font-bold text-white uppercase block mb-3">Legal & Standard</span>
            <p>© {new Date().getFullYear()} 8 Weeks Out. All rights reserved.</p>
            <p className="text-[11px] leading-relaxed">
              Every training claim carries a declared basis: Peer-Reviewed, Mechanism, or Practice. Conditioning is performance training, not medical advice.
            </p>
          </div>
        </div>
      </footer>

      {/* ─── INSIDER LIST MODAL ────────────────────────────────────────────────── */}
      {insiderModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#FAFBFB] border border-[#4F585D] max-w-[500px] w-full p-6 sm:p-8 shadow-2xl relative font-sans">
            <button
              onClick={() => {
                setInsiderModalOpen(false);
                setInsiderSuccess(false);
              }}
              className="absolute top-4 right-4 text-[#5E686E] hover:text-[#15191B] font-mono text-xl font-bold p-1"
            >
              ✕
            </button>

            {!insiderSuccess ? (
              <form onSubmit={handleInsiderSubmit} className="space-y-4">
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#7A2424] font-bold">
                  SEMI-ANNUAL COHORT
                </span>
                <h3 className="text-2xl font-bold text-[#15191B]">
                  Join the BioForce Insider&apos;s List
                </h3>
                <p className="text-xs text-[#4B5459] leading-relaxed">
                  Enter your email to receive early registration notification when the next certification window opens, plus a <strong>$200 tuition discount</strong>.
                </p>

                <div className="space-y-3 pt-2">
                  <div>
                    <label className="block text-xs font-mono font-bold text-[#15191B] mb-1">
                      Full Name (Optional)
                    </label>
                    <input
                      type="text"
                      placeholder="Coach Alex Smith"
                      value={insiderName}
                      onChange={(e) => setInsiderName(e.target.value)}
                      className="w-full px-3 py-2 bg-[#EAEDEF] border border-[#4F585D] text-sm focus:outline-none focus:border-[#8E2B2B]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold text-[#15191B] mb-1">
                      Email Address (Required)
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@performancecoach.com"
                      value={insiderEmail}
                      onChange={(e) => setInsiderEmail(e.target.value)}
                      className="w-full px-3 py-2 bg-[#EAEDEF] border border-[#4F585D] text-sm focus:outline-none focus:border-[#8E2B2B]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold text-[#15191B] mb-1">
                      Primary Coaching Role
                    </label>
                    <select
                      value={insiderRole}
                      onChange={(e) => setInsiderRole(e.target.value)}
                      className="w-full px-3 py-2 bg-[#EAEDEF] border border-[#4F585D] text-sm focus:outline-none focus:border-[#8E2B2B]"
                    >
                      <option value="Strength & Conditioning Coach">Strength &amp; Conditioning Coach</option>
                      <option value="Combat Sports / MMA Coach">Combat Sports / MMA Coach</option>
                      <option value="Personal Trainer / Fitness Coach">Personal Trainer / Fitness Coach</option>
                      <option value="Physical Therapist / ATC">Physical Therapist / ATC</option>
                      <option value="Self-Coached Athlete">Self-Coached Athlete</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={insiderLoading}
                  className="w-full py-3 bg-[#8E2B2B] hover:bg-[#7A2424] text-[#FAFBFB] font-mono text-xs font-bold transition-colors mt-4"
                >
                  {insiderLoading ? "ENROLLING..." : "CONFIRM INSIDER STATUS ($200 OFF) →"}
                </button>

                <p className="text-[11px] font-mono text-[#5E686E] text-center">
                  Zero spam. You will only receive enrolment dates and technical conditioning updates.
                </p>
              </form>
            ) : (
              <div className="text-center py-6">
                <div className="w-12 h-12 rounded-full bg-[#DBEAE6] text-[#1F5E52] text-2xl font-bold flex items-center justify-center mx-auto mb-3">
                  ✓
                </div>
                <h3 className="text-2xl font-bold text-[#15191B] mb-2">
                  You Are On the Insider&apos;s List!
                </h3>
                <p className="text-xs text-[#4B5459] mb-6 leading-relaxed">
                  We will notify {insiderEmail} the moment the next BioForce Certification window opens with your $200 discount code.
                </p>
                <button
                  onClick={() => {
                    setInsiderModalOpen(false);
                    setInsiderSuccess(false);
                  }}
                  className="px-6 py-2 bg-[#15191B] text-white font-mono text-xs font-bold"
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ─── BRANDED AI ASSISTANT WIDGET ────────────────────────────────────────── */}
      <AIChatWidget
        clientId="8weeksout"
        buttonLabel="Ask 8 Weeks Out Assistant"
        botName="8 Weeks Out Conditioning Assistant"
        initialGreeting="Welcome to 8 Weeks Out! 👋 I am your 24/7 Energy Systems & Conditioning Science Assistant. Ask me about the 8 conditioning methods, Heart Rate Variability (HRV), or the BioForce Certification!"
        suggestions={[
          "Explain Cardiac Power Intervals vs HICT",
          "What is covered in the BioForce Certification?",
          "How do I join the Insider List for $200 off?",
        ]}
        inputPlaceholder="Ask about conditioning methods, HRV, or certification..."
        accentColor="#8E2B2B"
        pulseColor="#7A2424"
      />
    </div>
  );
}
