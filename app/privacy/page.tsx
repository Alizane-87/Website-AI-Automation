import type { Metadata } from "next";

import { LegalPage } from "@/components/legal-page";
import { privacyNotice, privacySections } from "@/content/legal";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = {
  ...pageMetadata({
    title: "Privacy Policy",
    description:
      "Alizane Labs Privacy Policy detailing data collection, use, security, and our strict SMS Text Messaging data protection standards.",
    path: "/privacy",
  }),
};

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Privacy Policy"
      title="Privacy Policy"
      intro="How Alizane Labs handles information collected through this website and our strict commitment to text messaging data protection."
      bannerNotice={privacyNotice}
      sections={privacySections}
    />
  );
}
