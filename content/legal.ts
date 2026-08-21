/**
 * Legal Content for Alizane Labs (Privacy Policy, Terms of Service, and AI Disclosure).
 */

export const legalIdentity = {
  /** Registered legal entity name */
  entityName: "Alizane Labs",
  /** Business address or operating region */
  address: "Alizane Labs Digital Studio · Global Operations",
  /** Privacy contact mailbox */
  privacyEmail: "hello@alizanelabs.site",
  /** General contact mailbox */
  contactEmail: "hello@alizanelabs.site",
  /** Jurisdiction whose law governs the terms */
  governingLaw: "Republic of India & International Commercial Law",
  /** Last updated date string */
  lastUpdated: "August 22, 2026",
};

export const pendingValueLabel = "Available upon request";

export type LegalSection = { heading: string; paragraphs: string[]; bullets?: string[] };

export const privacyNotice = {
  title: "IMPORTANT NOTICE REGARDING TELEPHONY & TEXT MESSAGING DATA",
  body: "Alizane Labs (\"we,\" \"us,\" or \"our\") DOES NOT share customer opt-in information, including phone numbers and consent records, with any affiliates or third parties for marketing, promotional, or any other purposes unrelated to providing our direct services. All text messaging and voice originator opt-in data is kept strictly confidential.",
};

export const privacySections: LegalSection[] = [
  {
    heading: "1. Information We Collect",
    paragraphs: ["We collect the following types of information when you interact with our website:"],
    bullets: [
      "Personal Information: Name, business name, work email address, phone number, website URL, and timestamped opt-in records for communications (automated calls, SMS, email). We DO NOT collect or store credit card, debit card, or bank account information on this website.",
      "Non-Personal Information: IP address, browser type, device information, and anonymous website analytics to improve site performance.",
      "Communication Records: Details of your project inquiries, requested feature scopes, call transcripts, and appointment details.",
    ],
  },
  {
    heading: "2. How We Use Your Information",
    paragraphs: ["We use collected data solely for:"],
    bullets: [
      "Preparing and delivering your custom website and automation build plan",
      "Communicating with you regarding your inquiry, proposal discussions, and appointment scheduling via phone, AI voice, and SMS",
      "Delivering project agreements, milestone scopes, and invoices payable via ACH bank transfer or wire to our designated U.S. bank account",
      "Maintaining accurate records of your communication preferences and consent",
      "Ensuring website security and preventing automated form spam",
    ],
  },
  {
    heading: "3. Automated Calls, Voice AI & SMS Messaging Compliance",
    paragraphs: [
      "Communications Program Terms & Conditions: By opting into our communication services, you agree to receive automated phone calls, AI voice interactions, and text messages related to our services, including proposal discussions, scheduling confirmations, appointment reminders, and customer support.",
    ],
    bullets: [
      "Opt-In & Consent: You will only receive automated calls or text messages if you have explicitly opted in via our website form. Consent is not a condition of purchase. We maintain timestamped records of all opt-in actions and comply with the Telephone Consumer Protection Act (TCPA) and all applicable laws.",
      "Opt-Out Instructions: You can cancel SMS notifications at any time by replying 'STOP'. You will receive a final confirmation message, and no further messages will be sent unless you re-opt in. All opt-out requests are processed immediately.",
      "Message Frequency & Content: Message and call frequency varies based on your interactions with our business. Communications will be directly related to the services you have requested. We do not send promotional content without specific consent.",
      "Help & Support: Reply 'HELP' for assistance or contact us at hello@alizanelabs.site. Customer support is available during regular business hours.",
      "Carrier Information: Standard message and data rates may apply. Carriers are not liable for delayed or undelivered messages. Supported carriers include AT&T, Verizon, T-Mobile, Sprint, and most regional carriers.",
      "Data Protection Statement: No mobile or telephony information will be shared with third parties/affiliates for marketing/promotional purposes. Information sharing to subcontractors in support services, such as customer service is permitted. All other use case categories exclude voice and text messaging originator opt-in data and consent; this information will not be shared with any third parties.",
    ],
  },
  {
    heading: "4. Information Sharing & Third-Party Service Providers",
    paragraphs: [
      "We do not sell, rent, or trade your personal information. We only share information with trusted infrastructure and service providers necessary to operate our studio:",
    ],
    bullets: [
      "Invoicing & Payments: All client billing, retainers, and project fees are invoiced directly and payable via ACH bank transfer or wire to our designated U.S. bank account. We do not collect, view, or store payment card numbers or banking credentials on our website.",
      "Telephony & Messaging Providers: Telephony networks and SMS providers solely for the purpose of transmitting authorized text messages and voice calls you have requested.",
      "Cloud Infrastructure: Secure edge hosting and database providers (Vercel) to maintain website availability and performance.",
      "Legal Compliance: If required by law, legal process, or in response to valid court orders.",
      "Important Exclusion: All text messaging and voice originator opt-in data and consent records are excluded from third-party sharing and are never shared for promotional purposes.",
    ],
  },
  {
    heading: "5. Data Security",
    paragraphs: [
      "We take data protection seriously and apply industry-standard technical measures to safeguard your information:",
      "All traffic and form submissions are encrypted in transit using HTTPS / TLS 1.3 encryption. Administrative access to project data is secured with strong authentication and least-privilege credentials. We do not maintain unencrypted local copies of sensitive prospect data.",
      "While no Internet transmission or digital storage method is 100% immune from risk, we follow rigorous security best practices to protect your data from unauthorized access, alteration, or disclosure.",
    ],
  },
  {
    heading: "6. Cookies & Analytics",
    paragraphs: [
      "We use privacy-friendly, cookieless web analytics (Vercel Web Analytics) to understand aggregate site traffic and page performance without tracking individual personal identities.",
      "You may manage your browser cookie settings at any time.",
    ],
  },
  {
    heading: "7. Your Rights & Choices",
    paragraphs: ["You have full control over your data:"],
    bullets: [
      "You may request access to, correction of, or complete deletion of your personal contact records at any time.",
      "You can opt out of SMS communications at any time by replying 'STOP'.",
      "To exercise any of these rights, contact us directly at hello@alizanelabs.site.",
    ],
  },
  {
    heading: "8. Third-Party Links",
    paragraphs: [
      "Our website may contain links to external sites. We are not responsible for the privacy practices of external platforms and encourage you to review their respective policies.",
    ],
  },
  {
    heading: "9. Changes to This Privacy Policy",
    paragraphs: [
      "We may update this policy periodically to reflect operational changes. The latest version will always be posted here with the effective date.",
    ],
  },
  {
    heading: "10. Contact Us",
    paragraphs: [
      "If you have questions about this Privacy Policy or how your data is handled, please contact:",
    ],
    bullets: [
      "Studio: Alizane Labs",
      "Email: hello@alizanelabs.site",
      "Website: https://alizanelabs.site",
      "By using our website, you acknowledge this Privacy Policy.",
    ],
  },
];

export const termsNotice = {
  title: "AUTOMATED CALLS & SMS MESSAGING TERMS (TCPA / CTIA)",
  body: "This communications program sends automated calls, AI voice interactions, and appointment confirmations to customers who have requested a website plan from Alizane Labs through https://alizanelabs.site and have explicitly opted in via our dedicated consent checkbox. Text 'STOP' to cancel SMS at any time, or text 'HELP' for support.",
};

export const termsSections: LegalSection[] = [
  {
    heading: "1. Automated Calls, Voice AI & SMS Terms",
    paragraphs: [
      "We comply with all applicable laws and regulations, including the Telephone Consumer Protection Act (TCPA) and CTIA guidelines, regarding the use of automated voice and SMS communications.",
    ],
    bullets: [
      "Program Description: This communication program sends automated calls, AI voice interactions, and appointment confirmation and reminder messages to customers who have requested a proposal or booked an appointment with Alizane Labs through our website at https://alizanelabs.site, and have explicitly opted in to receive telephony and SMS communications. Consent is not a condition of purchase.",
      "Cancellation Instructions: You can cancel SMS notifications at any time by texting 'STOP' to the same number that sent you messages. Following this confirmation, you will no longer receive SMS messages from us. To rejoin, sign up as you did initially, and we will resume communications.",
      "Support Information: If you experience issues with the messaging program, reply with the keyword 'HELP' for more assistance, or reach out directly to hello@alizanelabs.site during business hours.",
      "Carrier Liability: Carriers are not liable for delayed or undelivered messages.",
      "Message & Data Rates: Message and data rates may apply for calls and messages sent to you from us. Communication frequency varies based on your service usage and proposal request.",
      "Supported Carriers: Our program works with all major U.S. wireless carriers, including AT&T, T-Mobile, Verizon, Sprint, and most regional carriers.",
      "Age Restriction: You must be 18 years or older to participate in our communications program.",
      "Privacy Policy: For privacy-related inquiries, please refer to our Privacy Policy at https://alizanelabs.site/privacy.",
    ],
  },
  {
    heading: "2. General Terms",
    paragraphs: [
      "This website (the 'Site') is owned and operated by Alizane Labs ('COMPANY,' 'we' or 'us'). By using the Site, you agree to be bound by these Terms of Service and to use the Site in accordance with these Terms of Service, our Privacy Policy, and any additional terms and conditions that may apply to specific sections of the Site or to products and services available through the Site or from Alizane Labs.",
      "Accessing the Site, in any manner, whether automated or otherwise, constitutes use of the Site and your agreement to be bound by these Terms of Service.",
      "We reserve the right to change these Terms of Service or to impose new conditions on the use of the Site from time to time, in which case we will post the revised Terms of Service on this website. By continuing to use the Site after we post any such changes, you accept the Terms of Service, as modified.",
    ],
  },
  {
    heading: "3. Intellectual Property Rights",
    paragraphs: [
      "Our Limited License to You: This Site and all the materials available on the Site are the property of Alizane Labs and/or our affiliates or licensors and are protected by copyright, trademark, and other intellectual property laws. The Site is provided solely for your personal non-commercial use.",
      "You may not use the Site or the materials available on the Site in a manner that constitutes an infringement of our rights or that has not been authorized by us. Unless explicitly authorized, you may not modify, copy, reproduce, republish, upload, post, transmit, translate, sell, create derivative works, exploit, or distribute in any manner or medium any material from the Site. However, you may download and/or print one copy of individual pages for your personal, non-commercial use, provided that you keep intact all copyright and other proprietary notices.",
      "Your License to Us: By posting or submitting any material (including comments, blog entries, social media posts, photos, and videos) to us via the Site, internet groups, or other digital venues, you represent that you own the material or have obtained the necessary permissions. You grant us a royalty-free, perpetual, irrevocable, non-exclusive, worldwide license to use, modify, transmit, sell, exploit, create derivative works from, distribute, and publicly perform or display such material.",
    ],
  },
  {
    heading: "4. Disclaimers & Indemnification",
    paragraphs: [
      "Throughout the Site, we may provide links and pointers to Internet sites maintained by third parties. Our linking to such third-party sites does not imply an endorsement or sponsorship of such sites or the information, products, or services offered on or through the sites.",
      "The information, products, and services offered on or through the Site are provided 'as is' and without warranties of any kind, either express or implied. To the fullest extent permissible pursuant to applicable law, we disclaim all warranties, including implied warranties of merchantability and fitness for a particular purpose.",
      "You agree at all times to indemnify and hold harmless Alizane Labs, its affiliates, and their respective officers, directors, agents, and employees from any claims, causes of action, damages, liabilities, costs, and expenses arising out of or related to your breach of any obligation, warranty, or representation under these Terms of Service.",
    ],
  },
  {
    heading: "5. Invoicing & Commercial Terms",
    paragraphs: [
      "All project retainers, build fees, and ongoing maintenance subscriptions are invoiced electronically and payable via ACH bank transfer or wire to our designated U.S. bank account. We do not collect or store credit card details directly on our website.",
      "Project scopes, timelines, and payment milestone schedules are specified directly within your formal project agreement prior to kickoff.",
    ],
  },
  {
    heading: "6. Termination",
    paragraphs: [
      "All ongoing website maintenance and retainer plans are month-to-month unless otherwise agreed in writing. You may cancel your monthly maintenance retainer at any time with 30 days written notice.",
      "Your domain name always remains your exclusive property and will be transferred or pointed wherever you direct upon conclusion of services.",
    ],
  },
  {
    heading: "7. Governing Law & Dispute Resolution",
    paragraphs: [
      "These Terms of Service shall be governed by and construed in accordance with the laws of the jurisdiction in which Alizane Labs operates. Any dispute arising under these Terms shall be resolved in good faith through binding arbitration or commercial mediation.",
    ],
  },
  {
    heading: "8. Changes to Terms of Service",
    paragraphs: [
      "We may update these Terms of Service from time to time. The latest version will always be available on our website with the effective date.",
    ],
  },
  {
    heading: "9. Contact Us",
    paragraphs: [
      "For any questions regarding these Terms of Service, please contact us at:",
    ],
    bullets: [
      "Entity: Alizane Labs",
      "Email: hello@alizanelabs.site",
      "Website: https://alizanelabs.site",
      "By using our website and services, you consent to these Terms of Service.",
    ],
  },
];

export const aiDisclosureSections: LegalSection[] = [
  {
    heading: "1. Our AI Engineering Philosophy",
    paragraphs: [
      "At Alizane Labs, we design and deploy intelligent AI employees and automated workflows (voice dispatch agents, chat triage assistants, and n8n webhook pipelines) to help local and commercial businesses capture leads 24/7.",
      "We believe AI should augment human teams with total transparency, speed, and accuracy.",
    ],
  },
  {
    heading: "2. Transparency & Disclosure Principles",
    paragraphs: [
      "We design all client automation systems in accordance with the following core principles:",
    ],
    bullets: [
      "Clear Identity: Automated conversational agents do not misrepresent themselves and clearly indicate their AI nature when interacting with consumers.",
      "Human Escalation: A live human contact path or phone escalation is always embedded into every triage flow for complex or high-priority emergencies.",
      "Grounded Knowledge: Our AI assistants operate strictly on verified client business data (hours, service areas, emergency pricing policies) rather than improvising unvetted claims.",
      "Data Confidentiality: Audio recordings and conversation transcripts are encrypted in transit and at rest, and are never used to train public third-party AI models without explicit client consent.",
    ],
  },
];
