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

const optionValues = <T extends readonly { value: string }[]>(options: T) =>
  options.map((option) => option.value) as [string, ...string[]];

export const leadSchema = z.object({
  name: z.string().trim().min(1, "Enter your name").max(80),
  email: z
    .string()
    .trim()
    .min(1, "Enter your work email")
    .max(160)
    .email("Enter a valid work email"),
  company: z.string().trim().min(1, "Enter your company name").max(120),
  websiteUrl: z.string().trim().max(200).optional(),
  primaryNeed: z.enum(optionValues(primaryNeedOptions), {
    errorMap: () => ({ message: "Select what you need help with" }),
  }),
  problem: z
    .string()
    .trim()
    .min(10, "Tell us what is not working today, in a sentence or two")
    .max(2000),
  desiredOutcome: z
    .string()
    .trim()
    .min(10, "Describe what should be different after the project")
    .max(2000),
  budgetRange: z.enum(optionValues(budgetRangeOptions)).optional(),
  timing: z.enum(optionValues(timingOptions)).optional(),
  tools: z.string().trim().max(300).optional(),
  context: z.string().trim().max(2000).optional(),
  consent: z.literal(true, {
    errorMap: () => ({ message: "Please confirm we may contact you about this inquiry" }),
  }),
  /** Honeypot. Must stay empty. */
  nickname: z.string().max(0).optional(),
});

export type LeadInput = z.infer<typeof leadSchema>;

export type LeadField = keyof LeadInput;

export type LeadFieldErrors = Partial<Record<LeadField, string>>;

/** Fields validated on each step of the intake form, in order. */
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

/** Fields the browser submits as "" when left blank. */
export const optionalLeadFields: readonly LeadField[] = [
  "websiteUrl",
  "budgetRange",
  "timing",
  "tools",
  "context",
];

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

/** Validates one step client-side so a visitor never advances into an error. */
export function validateStep(
  fields: readonly LeadField[],
  values: Record<string, unknown>,
): LeadFieldErrors {
  const parsed = leadSchema.safeParse(values);
  if (parsed.success) return {};
  const all = toFieldErrors(parsed.error);
  const errors: LeadFieldErrors = {};
  for (const field of fields) {
    if (all[field]) errors[field] = all[field];
  }
  return errors;
}
