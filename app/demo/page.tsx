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
    title: `${businessName} | Interactive High-Performance Demo`,
    description: `Live interactive Next.js 16 prototype built for ${businessName} with sub-second speeds and 24/7 AI speed-to-lead.`,
  };
}

export default async function DemoPage(props: DemoPageProps) {
  const searchParams = await props.searchParams;
  const clientId = searchParams.client || searchParams.id || "alizane-agency";

  const config = await getClientChatbotConfig(clientId);

  return (
    <DemoShowcase
      clientId={config?.clientId || clientId}
      businessName={config?.businessName || "Custom Contractor Demo"}
      themeAccent={config?.themeAccent || "#065F46"}
      themePulse={config?.themePulse || "#34D399"}
      themeBorder={config?.themeBorder || "#064E3B"}
      themeOnAccent={config?.themeOnAccent || "#FFFFFF"}
    />
  );
}
