import { z } from "zod";

export const primaryNeedOptions = [
  { value: "website", label: "Website" },
  { value: "automation", label: "AI automation" },
  { value: "both", label: "Both" },
  { value: "unsure", label: "Not sure yet" },
] as const;

export const budgetRangeOptions = [
  { value: "undecided", label: "Not decided yet" },
  { value: "under-5k", label: "Under 5k" },
  { value: "5k-15k", label: "5k – 15k" },
  { value: "15k-40k", label: "15k – 40k" },
  { value: "40k-plus", label: "40k or more" },
] as const;

export const timingOptions = [
  { value: "asap", label: "As soon as possible" },
  { value: "1-3-months", label: "Within one to three months" },
  { value: "3-plus-months", label: "In three months or later" },
  { value: "exploring", label: "Exploring options" },
] as const;

export const leadSchema = z.object({
  name: z.string().trim().min(1, "Enter your name").max(100),
  email: z
    .string()
    .trim()
    .min(1, "Enter your email")
    .max(160)
    .email("Enter a valid email address"),
  company: z.string().trim().max(160).optional(),
  businessName: z.string().trim().max(160).optional(),
  phone: z.string().trim().max(50).optional(),
  websiteUrl: z.string().trim().max(200).optional(),
  businessType: z.string().trim().max(100).optional(),
  challenge: z.string().trim().max(500).optional(),
  customNotes: z.string().trim().max(2000).optional(),
  selectedFeatures: z.array(z.string()).optional(),
  smsConsent: z.boolean().optional(),
  consent: z.boolean().optional(),
  primaryNeed: z.string().optional(),
  problem: z.string().optional(),
  desiredOutcome: z.string().optional(),
  budgetRange: z.string().optional(),
  timing: z.string().optional(),
  tools: z.string().optional(),
  context: z.string().optional(),
  /** Honeypot. Must stay empty. */
  nickname: z.string().max(0).optional(),
});

export type LeadInput = z.infer<typeof leadSchema>;

export type LeadField = keyof LeadInput;

export type LeadFieldErrors = Partial<Record<LeadField, string>>;

export const optionalLeadFields: readonly LeadField[] = [
  "company",
  "businessName",
  "phone",
  "websiteUrl",
  "businessType",
  "challenge",
  "customNotes",
  "selectedFeatures",
  "smsConsent",
  "consent",
  "primaryNeed",
  "problem",
  "desiredOutcome",
  "budgetRange",
  "timing",
  "tools",
  "context",
];

export const leadSteps: readonly {
  title: string;
  description: string;
  fields: readonly LeadField[];
}[] = [
  {
    title: "You",
    description: "So we know who we are talking to.",
    fields: ["name", "email", "company", "websiteUrl"],
  },
  {
    title: "The problem",
    description: "The part that actually decides the recommendation.",
    fields: ["primaryNeed", "problem", "desiredOutcome"],
  },
  {
    title: "Practicalities",
    description: "Optional, but it helps us scope the right starting point.",
    fields: ["budgetRange", "timing", "tools", "context", "consent"],
  },
];

export function normalizeLeadInput(values: Record<string, unknown>): Record<string, unknown> {
  const normalized = { ...values };
  for (const field of optionalLeadFields) {
    if (typeof normalized[field] === "string" && normalized[field].trim() === "") {
      delete normalized[field];
    }
  }
  return normalized;
}

export function toFieldErrors(error: z.ZodError): LeadFieldErrors {
  const errors: LeadFieldErrors = {};
  for (const issue of error.issues) {
    const key = issue.path[0];
    if (typeof key === "string" && !(key in errors)) {
      errors[key as LeadField] = issue.message;
    }
  }
  return errors;
}

export function validateStep(
  fields: readonly LeadField[],
  values: Record<string, unknown>,
): LeadFieldErrors {
  const parsed = leadSchema.safeParse(normalizeLeadInput(values));
  if (parsed.success) return {};
  const all = toFieldErrors(parsed.error);
  const errors: LeadFieldErrors = {};
  for (const field of fields) {
    if (all[field]) errors[field] = all[field];
  }
  return errors;
}
