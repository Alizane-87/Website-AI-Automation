import type { Metadata } from "next";

import { LegalPage } from "@/components/legal-page";
import { aiDisclosureSections } from "@/content/legal";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = {
  ...pageMetadata({
    title: "AI disclosure",
    description:
      "How Alizane Labs uses automation in the systems it builds, and the constraints every deployment is designed around.",
    path: "/ai-disclosure",
  }),
};

export default function AiDisclosurePage() {
  return (
    <LegalPage
      eyebrow="AI disclosure"
      title="How we use automation"
      intro="The constraints we design into every automated workflow we build."
      sections={aiDisclosureSections}
      showContact={false}
    />
  );
}
