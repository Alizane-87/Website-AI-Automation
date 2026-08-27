"use client";

import React, { useState } from "react";
import Link from "next/link";

// 20 Heros
import {
  TerminalAuditHero,
  SpatialHologramHero,
  RadarCircuitHero,
  KineticMorphHero,
  DualRealityHero,
  InlineEstimatorHero,
  BioluminescentMeshHero,
  CommandMatrixHero,
  DynamicIslandHero,
  RaytracedLightbeamHero,
  MechanicalSynthHero,
  SovereignVaultHero,
  GlassPrismHero,
  AudioOscilloscopeHero,
  EdgeLatencyGlobeHero,
  MatrixSolidifyHero,
  BlueprintDraftingHero,
  HorologicalClockworkHero,
  RetroCrtScanlineHero,
  ParticleMorphHero,
} from "@/components/heros";

// 20 Backgrounds
import {
  ArchitecturalDotGrid,
  AuroraPlasmaWave,
  BlueprintCoordinateGrid,
  NeuralConstellationField,
  LaserHorizonGround,
  PhosphorHeatfield,
  ChromaDriftCanvas,
  StudioGrainOverlay,
  VolumetricFogCanvas,
  LiquidMercuryCanvas,
  TopographicContourMap,
  NeonGridTunnel,
  MagneticFilingsField,
  VoronoiTessellation,
  QuantumHexLattice,
  OceanPlanktonBloom,
  PrismaticCaustics,
  DigitalHexStream,
  WireframeMeshMatrix,
  WarpSpeedStarfield,
} from "@/components/backgrounds";

// 18 Storytelling Devices
import {
  TimeStampedPipeline,
  DeconstructedAssembly,
  MetamorphosisSplit,
  AltitudeCameraFlight,
  SplitScreenDirector,
  HorizontalPanPipeline,
  TurbineCoreDisassembly,
  DynoBenchmarkRace,
  LeadJourneyPinballMap,
  EscrowCashflowLedger,
  OrbitalSatelliteRelay,
  CadToFacadeMorph,
  MultiTierAccordionShutter,
  AudioTranscriptionScrubber,
  ReputationFlywheelMatrix,
  DnaHelixNarrative,
  XRayScannerWipe,
  ParallaxElevatorShaft,
} from "@/components/storytelling";

// 21 Scroll Effects
import {
  KineticType,
  ClipPathReveal,
  TabularCount,
  DifferentialParallax,
  MagneticButton,
  SplitFlap,
  Exploded3DLayers,
  VelocityTypography,
  StackingDeck,
  LaserCircuitRing,
  TextHighlightFill,
  Device3DScrub,
  AcceleratedMarquee,
  VerticalSlats,
  ZoomScreenStage,
  ParticleSwarm,
  SplitCurtain,
  WaypointBeacon,
  CipherDecrypt,
  CylinderCarousel,
  PhosphorTrace,
} from "@/components/motion";

// 20 Premium Fonts Matrix
import { FontSpecimenMatrix } from "@/components/fonts";

type StudioTab = "heros" | "backgrounds" | "storytelling" | "scroll" | "fonts";

export default function MasterDesignStudioPage() {
  const [activeTab, setActiveTab] = useState<StudioTab>("heros");

  return (
    <div className="bg-[#0A0D10] text-[#F4F2EF] font-sans antialiased selection:bg-[#34D399] selection:text-[#065F46] min-h-screen">
      {/* Top Floating Studio Header */}
      <header className="fixed top-0 left-0 right-0 z-50 flex flex-wrap items-center justify-between gap-4 border-b border-white/10 bg-[#0A0D10]/95 px-6 py-3 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="flex items-center gap-1.5 font-mono text-xs text-gray-400 hover:text-white transition-colors"
          >
            <span>←</span>
            <span>Return to Site</span>
          </Link>
          <span className="text-white/20">|</span>
          <span className="font-serif text-sm font-semibold tracking-tight text-white">
            Alizane Master Studio
          </span>
        </div>

        {/* 5-Tab Switcher Bar */}
        <div className="flex flex-wrap items-center gap-1 rounded-xl bg-white/10 p-1 font-mono text-xs">
          <button
            onClick={() => setActiveTab("heros")}
            className={`rounded-lg px-3 py-1.5 transition-all cursor-pointer ${
              activeTab === "heros"
                ? "bg-emerald-500 text-black font-semibold shadow"
                : "text-gray-400 hover:text-white"
            }`}
          >
            🏛️ Heros (20)
          </button>
          <button
            onClick={() => setActiveTab("backgrounds")}
            className={`rounded-lg px-3 py-1.5 transition-all cursor-pointer ${
              activeTab === "backgrounds"
                ? "bg-emerald-500 text-black font-semibold shadow"
                : "text-gray-400 hover:text-white"
            }`}
          >
            🎨 Backgrounds (20)
          </button>
          <button
            onClick={() => setActiveTab("storytelling")}
            className={`rounded-lg px-3 py-1.5 transition-all cursor-pointer ${
              activeTab === "storytelling"
                ? "bg-emerald-500 text-black font-semibold shadow"
                : "text-gray-400 hover:text-white"
            }`}
          >
            📜 Storytelling (18)
          </button>
          <button
            onClick={() => setActiveTab("scroll")}
            className={`rounded-lg px-3 py-1.5 transition-all cursor-pointer ${
              activeTab === "scroll"
                ? "bg-emerald-500 text-black font-semibold shadow"
                : "text-gray-400 hover:text-white"
            }`}
          >
            ⚡ Scroll Effects (21)
          </button>
          <button
            onClick={() => setActiveTab("fonts")}
            className={`rounded-lg px-3 py-1.5 transition-all cursor-pointer ${
              activeTab === "fonts"
                ? "bg-emerald-500 text-black font-semibold shadow"
                : "text-gray-400 hover:text-white"
            }`}
          >
            🔤 Fonts (40)
          </button>
        </div>
      </header>

      {/* Main Studio Viewport */}
      <div className="pt-20">
        {/* =========================================================================
            TAB 1: HEROS SUITE (20 TOTAL)
            ========================================================================= */}
        {activeTab === "heros" && (
          <div className="space-y-16">
            <div className="border-b border-white/10 py-10 px-6 sm:px-16 text-center bg-[#07090C]">
              <h1 className="font-serif text-3xl sm:text-5xl text-white">20 Master Hero Architectures</h1>
              <p className="mt-2 text-sm text-gray-400 font-mono">
                Full technical recipes documented in docs/HEROS_DATABASE.md
              </p>
            </div>

            <div><TerminalAuditHero /></div>
            <div><SpatialHologramHero /></div>
            <div><RadarCircuitHero /></div>
            <div><KineticMorphHero /></div>
            <div><DualRealityHero /></div>
            <div><InlineEstimatorHero /></div>
            <div><BioluminescentMeshHero /></div>
            <div><CommandMatrixHero /></div>
            <div><DynamicIslandHero /></div>
            <div><RaytracedLightbeamHero /></div>
            <div><MechanicalSynthHero /></div>
            <div><SovereignVaultHero /></div>
            <div><GlassPrismHero /></div>
            <div><AudioOscilloscopeHero /></div>
            <div><EdgeLatencyGlobeHero /></div>
            <div><MatrixSolidifyHero /></div>
            <div><BlueprintDraftingHero /></div>
            <div><HorologicalClockworkHero /></div>
            <div><RetroCrtScanlineHero /></div>
            <div><ParticleMorphHero /></div>
          </div>
        )}

        {/* =========================================================================
            TAB 2: BACKGROUNDS & CANVASES SUITE (20 TOTAL)
            ========================================================================= */}
        {activeTab === "backgrounds" && (
          <div className="space-y-12 py-10 px-6 sm:px-16 max-w-6xl mx-auto">
            <div className="text-center pb-6 border-b border-white/10">
              <h1 className="font-serif text-3xl sm:text-5xl text-white">20 Ambient Backgrounds &amp; Canvases</h1>
              <p className="mt-2 text-sm text-gray-400 font-mono">
                Full tactile environments documented in docs/BACKGROUNDS_DATABASE.md
              </p>
            </div>

            <div className="space-y-8">
              <div>
                <div className="font-mono text-xs text-emerald-400 mb-2 font-semibold">B01 · Architectural Dot Grid</div>
                <ArchitecturalDotGrid>
                  <h3 className="font-serif text-2xl text-white">Subtle 24px Coordinate Dots</h3>
                  <p className="text-xs text-gray-400 mt-1">Move your mouse to reveal the spotlight mask.</p>
                </ArchitecturalDotGrid>
              </div>

              <div>
                <div className="font-mono text-xs text-emerald-400 mb-2 font-semibold">B02 · Aurora Plasma Wave</div>
                <AuroraPlasmaWave>
                  <h3 className="font-serif text-2xl text-white">Luminous Undulating Plasma Orbs</h3>
                  <p className="text-xs text-gray-300 mt-1">Deep emerald, slate blue, and teal ambient glow.</p>
                </AuroraPlasmaWave>
              </div>

              <div>
                <div className="font-mono text-xs text-emerald-400 mb-2 font-semibold">B03 · CAD Blueprint Grid</div>
                <BlueprintCoordinateGrid>
                  <h3 className="font-serif text-2xl text-white">Engineering CAD Subdivision Lines</h3>
                  <p className="text-xs text-gray-300 mt-1">Subtle technical crosshairs and telemetry readouts.</p>
                </BlueprintCoordinateGrid>
              </div>

              <div>
                <div className="font-mono text-xs text-emerald-400 mb-2 font-semibold">B04 · Neural Constellation Field</div>
                <NeuralConstellationField>
                  <h3 className="font-serif text-2xl text-white">Interconnected Particle Network</h3>
                  <p className="text-xs text-gray-300 mt-1">HTML5 Canvas proximity lasers connecting floating nodes.</p>
                </NeuralConstellationField>
              </div>

              <div>
                <div className="font-mono text-xs text-emerald-400 mb-2 font-semibold">B05 · Laser Horizon Ground</div>
                <LaserHorizonGround>
                  <h3 className="font-serif text-2xl text-white">3D Perspective Wireframe Horizon</h3>
                  <p className="text-xs text-gray-300 mt-1">Receding ground plane grid extending to the horizon.</p>
                </LaserHorizonGround>
              </div>

              <div>
                <div className="font-mono text-xs text-emerald-400 mb-2 font-semibold">B06 · Thermochromic Phosphor Heatfield</div>
                <PhosphorHeatfield>
                  <h3 className="font-serif text-2xl text-white">Move cursor across box to leave heat trail</h3>
                  <p className="text-xs text-gray-300 mt-1">Bioluminescent thermal stamps cooling over time.</p>
                </PhosphorHeatfield>
              </div>

              <div>
                <div className="font-mono text-xs text-emerald-400 mb-2 font-semibold">B07 · Chroma Drift Canvas</div>
                <ChromaDriftCanvas>
                  <h3 className="font-serif text-2xl text-white">Continuous Chroma Shift</h3>
                  <p className="text-xs text-gray-300 mt-1">Backdrop color interpolates dynamically as you scroll.</p>
                </ChromaDriftCanvas>
              </div>

              <div>
                <div className="font-mono text-xs text-emerald-400 mb-2 font-semibold">B08 · Studio Grain Noise Overlay</div>
                <StudioGrainOverlay>
                  <h3 className="font-serif text-2xl text-white">Analog Tactile Micro-Texture</h3>
                  <p className="text-xs text-gray-300 mt-1">SVG turbulence noise removing gradient banding.</p>
                </StudioGrainOverlay>
              </div>

              <div>
                <div className="font-mono text-xs text-emerald-400 mb-2 font-semibold">B09 · Volumetric Fog Canvas</div>
                <VolumetricFogCanvas>
                  <h3 className="font-serif text-2xl text-white">Drifting Atmospheric Volumetric Mist</h3>
                  <p className="text-xs text-gray-300 mt-1">Multi-layered smoky fog gently drifting across canvas.</p>
                </VolumetricFogCanvas>
              </div>

              <div>
                <div className="font-mono text-xs text-emerald-400 mb-2 font-semibold">B10 · Liquid Mercury Surface</div>
                <LiquidMercuryCanvas>
                  <h3 className="font-serif text-2xl text-white">Click anywhere to generate mercury ripples</h3>
                  <p className="text-xs text-gray-300 mt-1">Viscous metallic fluid surface physics.</p>
                </LiquidMercuryCanvas>
              </div>

              <div>
                <div className="font-mono text-xs text-emerald-400 mb-2 font-semibold">B11 · Topographic Contour Map</div>
                <TopographicContourMap>
                  <h3 className="font-serif text-2xl text-white">Vector Elevation Contour Curves</h3>
                  <p className="text-xs text-gray-300 mt-1">Subtle architectural elevation lines.</p>
                </TopographicContourMap>
              </div>

              <div>
                <div className="font-mono text-xs text-emerald-400 mb-2 font-semibold">B12 · Neon Grid Tunnel</div>
                <NeonGridTunnel>
                  <h3 className="font-serif text-2xl text-white">3D Perspective Wireframe Tunnel</h3>
                  <p className="text-xs text-gray-300 mt-1">Infinite cyber grid perspective illusion.</p>
                </NeonGridTunnel>
              </div>

              <div>
                <div className="font-mono text-xs text-emerald-400 mb-2 font-semibold">B13 · Magnetic Filings Vector Field</div>
                <MagneticFilingsField>
                  <h3 className="font-serif text-2xl text-white">Move cursor to pull magnetic needles</h3>
                  <p className="text-xs text-gray-300 mt-1">200 directional vectors tracking cursor gravity.</p>
                </MagneticFilingsField>
              </div>

              <div>
                <div className="font-mono text-xs text-emerald-400 mb-2 font-semibold">B14 · Voronoi Geometric Cells</div>
                <VoronoiTessellation>
                  <h3 className="font-serif text-2xl text-white">Spatial Cellular Tessellation</h3>
                  <p className="text-xs text-gray-300 mt-1">Subdivided geometric data matrices.</p>
                </VoronoiTessellation>
              </div>

              <div>
                <div className="font-mono text-xs text-emerald-400 mb-2 font-semibold">B15 · Quantum Hex Honeycomb</div>
                <QuantumHexLattice>
                  <h3 className="font-serif text-2xl text-white">Graphene Hexagonal Lattice</h3>
                  <p className="text-xs text-gray-300 mt-1">Carbon-fiber precision matrix.</p>
                </QuantumHexLattice>
              </div>

              <div>
                <div className="font-mono text-xs text-emerald-400 mb-2 font-semibold">B16 · Ocean Plankton Bloom</div>
                <OceanPlanktonBloom>
                  <h3 className="font-serif text-2xl text-white">Move cursor to agitate bioluminescent plankton</h3>
                  <p className="text-xs text-gray-300 mt-1">Deep oceanic glowing sparks that drift and fade.</p>
                </OceanPlanktonBloom>
              </div>

              <div>
                <div className="font-mono text-xs text-emerald-400 mb-2 font-semibold">B17 · Prismatic Caustics</div>
                <PrismaticCaustics>
                  <h3 className="font-serif text-2xl text-white">Chromatic Glass Caustics</h3>
                  <p className="text-xs text-gray-300 mt-1">Refracted ambient light shimmer.</p>
                </PrismaticCaustics>
              </div>

              <div>
                <div className="font-mono text-xs text-emerald-400 mb-2 font-semibold">B18 · Digital Hex Stream</div>
                <DigitalHexStream>
                  <h3 className="font-serif text-2xl text-white">Cascading Hex Memory Addresses</h3>
                  <p className="text-xs text-gray-300 mt-1">Cybersecurity &amp; encrypted ledger background stream.</p>
                </DigitalHexStream>
              </div>

              <div>
                <div className="font-mono text-xs text-emerald-400 mb-2 font-semibold">B19 · Wireframe Mesh Sine Waves</div>
                <WireframeMeshMatrix>
                  <h3 className="font-serif text-2xl text-white">3D Undulating Sine-Wave Surface</h3>
                  <p className="text-xs text-gray-300 mt-1">Continuous harmonic mathematical wave canvas.</p>
                </WireframeMeshMatrix>
              </div>

              <div>
                <div className="font-mono text-xs text-emerald-400 mb-2 font-semibold">B20 · Warp Speed Starfield</div>
                <WarpSpeedStarfield>
                  <h3 className="font-serif text-2xl text-white">Hyperspace Depth Starfield</h3>
                  <p className="text-xs text-gray-300 mt-1">3D projected stars flying toward camera viewport.</p>
                </WarpSpeedStarfield>
              </div>
            </div>
          </div>
        )}

        {/* =========================================================================
            TAB 3: STORYTELLING SUITE (18 TOTAL)
            ========================================================================= */}
        {activeTab === "storytelling" && (
          <div className="space-y-16">
            <div className="border-b border-white/10 py-10 px-6 sm:px-16 text-center bg-[#07090C]">
              <h1 className="font-serif text-3xl sm:text-5xl text-white">18 Narrative Progression Devices</h1>
              <p className="mt-2 text-sm text-gray-400 font-mono">
                Full conversion storylines documented in docs/STORYTELLING_DATABASE.md
              </p>
            </div>

            <div><TimeStampedPipeline /></div>
            <div><DeconstructedAssembly /></div>
            <div><MetamorphosisSplit /></div>
            <div><AltitudeCameraFlight /></div>
            <div><SplitScreenDirector /></div>
            <div><HorizontalPanPipeline /></div>
            <div><TurbineCoreDisassembly /></div>
            <div><DynoBenchmarkRace /></div>
            <div><LeadJourneyPinballMap /></div>
            <div><EscrowCashflowLedger /></div>
            <div><OrbitalSatelliteRelay /></div>
            <div><CadToFacadeMorph /></div>
            <div><MultiTierAccordionShutter /></div>
            <div><AudioTranscriptionScrubber /></div>
            <div><ReputationFlywheelMatrix /></div>
            <div><DnaHelixNarrative /></div>
            <div><XRayScannerWipe /></div>
            <div><ParallaxElevatorShaft /></div>
          </div>
        )}

        {/* =========================================================================
            TAB 4: SCROLL EFFECTS SUITE (21 TOTAL)
            ========================================================================= */}
        {activeTab === "scroll" && (
          <div className="space-y-16">
            <div className="border-b border-white/10 py-10 px-6 sm:px-16 text-center bg-[#07090C]">
              <h1 className="font-serif text-3xl sm:text-5xl text-white">21 Modular ScrollCraft Motion Devices</h1>
              <p className="mt-2 text-sm text-gray-400 font-mono">
                Full physics formulas documented in docs/SCROLL_EFFECTS_DATABASE.md
              </p>
            </div>

            <div><KineticType /></div>
            <div><ClipPathReveal /></div>
            <div><TabularCount /></div>
            <div><DifferentialParallax /></div>
            <div><MagneticButton /></div>
            <div><SplitFlap /></div>
            <div><Exploded3DLayers /></div>
            <div><VelocityTypography /></div>
            <div><StackingDeck /></div>
            <div><LaserCircuitRing /></div>
            <div><TextHighlightFill /></div>
            <div><Device3DScrub /></div>
            <div><AcceleratedMarquee /></div>
            <div><VerticalSlats /></div>
            <div><ZoomScreenStage /></div>
            <div><ParticleSwarm /></div>
            <div><SplitCurtain /></div>
            <div><WaypointBeacon /></div>
            <div><CipherDecrypt /></div>
            <div><CylinderCarousel /></div>
            <div><PhosphorTrace /></div>
          </div>
        )}

        {/* =========================================================================
            TAB 5: PREMIUM FONTS MATRIX (20 TOTAL)
            ========================================================================= */}
        {activeTab === "fonts" && (
          <div>
            <FontSpecimenMatrix />
          </div>
        )}
      </div>
    </div>
  );
}
