import type { Metadata } from "next";

import { LegalPage } from "@/components/legal-page";
import { privacySections } from "@/content/legal";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = {
  ...pageMetadata({
    title: "Privacy",
    description:
      "How Alizane Labs handles information submitted through this website, including project inquiries, analytics events, retention, and your choices.",
    path: "/privacy",
  }),
};

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Privacy"
      title="Privacy policy"
      intro="What this website collects, why, and what you can ask us to do with it."
      sections={privacySections}
    />
  );
}
