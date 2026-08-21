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
  lastUpdated: "August 21, 2026",
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
    paragraphs: ["We collect the following types of information:"],
    bullets: [
      "Personal Information: Name, email address, phone number, physical address, payment information when you make a purchase or request a quote, and opt-in records and timestamps for all communication channels (automated calls, SMS, email, etc.).",
      "Non-Personal Information: IP address, browser type, device information, website usage patterns and analytics, and cookies and similar technologies.",
      "Customer Communication: Records of inquiries and service requests, appointment details and preferences, call transcripts, and service history and feedback.",
    ],
  },
  {
    heading: "2. How We Use Your Information",
    paragraphs: ["We use collected data for:"],
    bullets: [
      "Providing and improving our bespoke web design and AI automation services",
      "Processing transactions and payments",
      "Communicating with you about your inquiries, automated appointments, and proposal updates via phone, AI voice, and SMS",
      "Enhancing website functionality and user experience",
      "Ensuring security and fraud prevention",
      "Maintaining records of your communication preferences and consent",
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
    heading: "4. Information Sharing & Disclosure",
    paragraphs: [
      "We do not sell, rent, or trade personal information. We may share information with:",
    ],
    bullets: [
      "Service Providers: Third-party vendors who assist in our operations (e.g., payment processing, appointment scheduling, telephony/SMS delivery). All service providers are contractually obligated to maintain confidentiality and security.",
      "Legal Compliance: If required by law, legal process, or to protect our rights, or in response to valid law enforcement requests or court orders.",
      "Business Transfers: In case of mergers, acquisitions, or sale of assets. In such cases, your data remains protected under the terms of this policy.",
      "Important Exclusion: All the above categories exclude text and voice messaging originator opt-in data and consent; this information will not be shared with any third parties, excluding aggregators and telephony providers delivering the requested communications.",
    ],
  },
  {
    heading: "5. Data Security",
    paragraphs: [
      "We implement and maintain reasonable security measures to protect your personal information, including encryption of sensitive data in transit and at rest, secure access controls and authentication mechanisms, regular security assessments, employee data protection training, breach notification protocols in accordance with applicable laws, and secure backup and disaster recovery procedures.",
      "Despite these measures, no method of transmission over the Internet or electronic storage is 100% secure. We strive to use commercially acceptable means to protect your personal information but cannot guarantee absolute security.",
    ],
  },
  {
    heading: "6. Cookies & Tracking Technologies",
    paragraphs: [
      "We use cookies and similar technologies to analyze site traffic and user behavior, remember your preferences, improve website functionality and user experience, and measure the effectiveness of our services.",
      "You may control cookies through your browser settings. Disabling cookies may limit your ability to use certain features of our website.",
    ],
  },
  {
    heading: "7. Your Rights & Choices",
    paragraphs: ["You have the right to:"],
    bullets: [
      "Access, update, or delete your personal information",
      "Opt-out of marketing emails by clicking 'unsubscribe' in our emails",
      "Opt-out of SMS messages by replying 'STOP'",
      "Request information on how we process your data",
      "Withdraw consent at any time for future communications",
      "Lodge a complaint with a supervisory authority if you believe your rights have been violated",
      "To exercise these rights, please contact us at hello@alizanelabs.site.",
    ],
  },
  {
    heading: "8. Third-Party Links",
    paragraphs: [
      "Our website may contain links to third-party websites. We are not responsible for their privacy practices and encourage you to review their policies. This privacy policy applies only to information collected by Alizane Labs.",
    ],
  },
  {
    heading: "9. Changes to This Privacy Policy",
    paragraphs: [
      "We may update this policy periodically. The latest version will always be available on our website with the effective date. For significant changes, we will notify you by email or through a notice on our website.",
    ],
  },
  {
    heading: "10. Contact Us",
    paragraphs: [
      "If you have questions about this Privacy Policy or how your information is handled, contact us at:",
    ],
    bullets: [
      "Entity: Alizane Labs",
      "Email: hello@alizanelabs.site",
      "Website: https://alizanelabs.site",
      "By using our website and services, you consent to this Privacy Policy.",
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
    heading: "5. Online Commerce",
    paragraphs: [
      "Certain sections of the Site may allow you to purchase products and services from third-party vendors. We are not responsible for the quality, accuracy, timeliness, reliability, or any other aspect of these products and services. If you make a purchase from a third party linked through the Site, the information obtained during your visit, including payment information, may be collected by both the merchant and us.",
      "Your participation in any dealings with third-party vendors is solely between you and the third party. Alizane Labs shall not be responsible for any loss or damage incurred as a result of such dealings.",
    ],
  },
  {
    heading: "6. Registration & Passwords",
    paragraphs: [
      "To access certain features of the Site, you may be required to register and create an account. You agree to provide accurate, current, and complete information during the registration process. You are responsible for maintaining the confidentiality of your login credentials and for all activities conducted under your account.",
      "If you suspect unauthorized use of your account, notify us immediately at hello@alizanelabs.site. We are not liable for any loss or damage arising from your failure to comply with this obligation.",
    ],
  },
  {
    heading: "7. Termination",
    paragraphs: [
      "We reserve the right to terminate or suspend your access to the Site, without notice, if we determine that you have violated these Terms of Service or engaged in conduct that we deem inappropriate or unlawful. Upon termination, you must cease all use of the Site and any content obtained from it.",
    ],
  },
  {
    heading: "8. Governing Law & Dispute Resolution",
    paragraphs: [
      "These Terms of Service shall be governed by and construed in accordance with the laws of the state and jurisdiction in which Alizane Labs operates. Any dispute arising under these Terms shall be resolved exclusively through binding arbitration in that jurisdiction.",
    ],
  },
  {
    heading: "9. Changes to Terms of Service",
    paragraphs: [
      "We may update these Terms of Service from time to time. The latest version will always be available on our website with the effective date.",
    ],
  },
  {
    heading: "10. Contact Us",
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
