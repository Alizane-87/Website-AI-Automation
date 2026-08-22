import { getClientChatbotConfig } from "@/lib/supabase-chat";
import { DemoShowcase } from "@/components/demo-showcase";
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
  const clientId = searchParams.client || searchParams.id || "alizane-agency";
  const config = await getClientChatbotConfig(clientId);

  const businessName = config?.businessName || "Contractor Demo";

  return {
    title: `${businessName} | 24/7 Emergency Dispatch & Restoration`,
    description: `Live interactive Next.js 16 build for ${businessName} with sub-second speeds and 24/7 AI speed-to-lead.`,
  };
}

export default async function DemoPage(props: DemoPageProps) {
  const searchParams = await props.searchParams;
  const clientId = searchParams.client || searchParams.id || "alizane-agency";

  const config = await getClientChatbotConfig(clientId);

  return (
    <DemoShowcase
      clientId={config?.clientId || clientId}
      businessName={config?.businessName || "Contractor Demo"}
      phone={config?.phone || "(303) 232-8888"}
      tollFree={config?.tollFree || "(866) 344-4WET"}
      address={config?.address || "4191 Inca St, Denver, CO 80211"}
      serviceCity={config?.serviceCity || "Denver Metro & Front Range"}
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
