import { getClientChatbotConfig } from "@/lib/supabase-chat";
import { DemoShowcase } from "@/components/demo-showcase";
import { SixPackMacrosShowcase } from "@/components/six-pack-macros-showcase";
import { EightWeeksOutShowcase } from "@/components/eight-weeks-out-showcase";
import { Metadata } from "next";

export const dynamic = "force-dynamic";

interface DemoPageProps {
  searchParams: Promise<{
    client?: string;
    id?: string;
  }>;
}

export async function generateMetadata(props: DemoPageProps): Promise<Metadata> {
  const searchParams = await props.searchParams;
  const clientId = searchParams.client || searchParams.id || "water-extraction-team";
  const config = await getClientChatbotConfig(clientId);

  const businessName = config?.businessName || "Water Extraction Team";

  if (clientId === "6packmacros" || clientId === "6-pack-macros") {
    return {
      title: "6 Pack Macros | Online Nutrition & Fitness Coaching",
      description: "Personal nutrition and training coaching from a coach you choose yourself from our 170+ certified roster. Weekly calls, daily texts, and no crash diets.",
    };
  }

  if (clientId === "8weeksout" || clientId === "8-weeks-out") {
    return {
      title: "8 Weeks Out | Conditioning, With the Evidence Attached",
      description: "Joel Jamieson's conditioning science, the 8 conditioning methods glossary, and the BioForce Conditioning Certification (CCC).",
    };
  }

  return {
    title: `${businessName} | 24/7 Emergency Dispatch & Structural Drying`,
    description: `Official website for ${businessName} — 24/7 emergency water extraction, fire restoration, mold remediation, and direct insurance billing in Denver & the Front Range.`,
  };
}

export default async function DemoPage(props: DemoPageProps) {
  const searchParams = await props.searchParams;
  const clientId = searchParams.client || searchParams.id || "water-extraction-team";

  if (clientId === "6packmacros" || clientId === "6-pack-macros") {
    return <SixPackMacrosShowcase />;
  }

  if (clientId === "8weeksout" || clientId === "8-weeks-out") {
    return <EightWeeksOutShowcase />;
  }

  const config = await getClientChatbotConfig(clientId);

  return (
    <DemoShowcase
      clientId={config?.clientId || clientId}
      businessName={config?.businessName || "Water Extraction Team"}
      phone={config?.phone || "(303) 232-8888"}
      tollFree={config?.tollFree || "(866) 344-4WET"}
      address={config?.address || "4191 Inca St, Denver, CO 80211"}
      serviceCity={config?.serviceCity || "Denver Metro & Colorado Front Range"}
      tagline={config?.tagline || "Denver’s Premier Water Mitigation Contractor 〰️ Open 24 Hours A Day"}
      subheadline={config?.subheadline || "SBA Certified Women-Owned Small Business (WOSB) & IICRC Certified. Over 30 years of excellence in truck-mounted water extraction, fire restoration, mold remediation, and Property Solutions Team (PST) rebuilds."}
      trade={config?.trade || "Water Extraction & Environmental Remediation"}
      trustBadges={config?.trustBadges || ["SBA Certified Women-Owned Small Business", "Colorado Health Links Certified Partner", "Foundation 1023 Supporter"]}
      services={config?.services || []}
      serviceAreas={config?.serviceAreas || []}
      reviews={config?.reviews || []}
      leadership={config?.leadership || []}
      foundationMission={config?.foundationMission}
      themeAccent={config?.themeAccent || "#005691"}
      themePulse={config?.themePulse || "#38BDF8"}
      themeBorder={config?.themeBorder || "#071526"}
      themeOnAccent={config?.themeOnAccent || "#FFFFFF"}
    />
  );
}
