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
      serviceCity={config?.serviceCity || "Denver Metro & Front Range"}
      tagline={config?.tagline || "Expert Craftsmanship & Fast 24/7 Emergency Service"}
      subheadline={config?.subheadline || "Licensed & insured contractors delivering upfront flat-rate pricing, master technicians, and guaranteed workmanship."}
      trade={config?.trade || "Restoration & General Contracting"}
      trustBadges={config?.trustBadges || ["Licensed & Insured", "24/7 Emergency Dispatch", "Upfront Flat-Rate Pricing"]}
      services={config?.services || []}
      serviceAreas={config?.serviceAreas || []}
      reviews={config?.reviews || []}
      themeAccent={config?.themeAccent || "#005691"}
      themePulse={config?.themePulse || "#38BDF8"}
      themeBorder={config?.themeBorder || "#071526"}
      themeOnAccent={config?.themeOnAccent || "#FFFFFF"}
    />
  );
}
