"use client";

import { useRouter } from "next/navigation";
import { useId, useRef, useState, type FormEvent, type ReactNode } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/components/ui/cn";
import { analyticsEvents, trackEvent } from "@/lib/analytics";
import {
  budgetRangeOptions,
  leadSteps,
  primaryNeedOptions,
  timingOptions,
  validateStep,
  type LeadField,
  type LeadFieldErrors,
} from "@/lib/lead-schema";

type SubmitState = "idle" | "submitting" | "error";

type Values = {
  name: string;
  email: string;
  company: string;
  websiteUrl: string;
  primaryNeed: string;
  problem: string;
  desiredOutcome: string;
  budgetRange: string;
  timing: string;
  tools: string;
  context: string;
  consent: boolean;
  nickname: string;
};

const initialValues: Values = {
  name: "",
  email: "",
  company: "",
  websiteUrl: "",
  primaryNeed: "",
  problem: "",
  desiredOutcome: "",
  budgetRange: "",
  timing: "",
  tools: "",
  context: "",
  consent: false,
  nickname: "",
};

const controlClass =
  "w-full rounded-lg border border-ink/20 bg-paper px-3.5 py-3 text-base text-ink transition-colors placeholder:text-graphite-light focus:border-cobalt";

function Field({
  label,
  htmlFor,
  optional,
  hint,
  error,
  children,
  className,
}: {
  label: string;
  htmlFor: string;
  optional?: boolean;
  hint?: string;
  error?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <label htmlFor={htmlFor} className="text-sm font-medium text-ink">
        {label}
        {optional ? <span className="ml-1.5 font-normal text-graphite">(optional)</span> : null}
      </label>
      {hint ? <p className="mt-1 text-sm text-graphite">{hint}</p> : null}
      <div className="mt-2">{children}</div>
      {error ? (
        <p id={`${htmlFor}-error`} className="mt-1.5 text-sm text-alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}

/**
 * Progressive-disclosure project intake. Steps are validated in the browser
 * with the same schema the API uses, so nobody advances into an error state
 * and the server stays the source of truth.
 */
export function ProjectForm() {
  const router = useRouter();
  const formId = useId();
  const started = useRef(false);
  const [stepIndex, setStepIndex] = useState(0);
  const [values, setValues] = useState<Values>(initialValues);
  const [errors, setErrors] = useState<LeadFieldErrors>({});
  const [state, setState] = useState<SubmitState>("idle");
  const [formError, setFormError] = useState<string | null>(null);

  const step = leadSteps[stepIndex];
  const isLastStep = stepIndex === leadSteps.length - 1;

  function set<K extends keyof Values>(field: K, value: Values[K]) {
    if (!started.current) {
      started.current = true;
      trackEvent(analyticsEvents.projectFormStart, { location: "contact" });
    }
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field as LeadField]: undefined }));
  }

  function fieldProps(field: LeadField) {
    return {
      id: `${formId}-${field}`,
      name: field,
      "aria-invalid": Boolean(errors[field]),
      "aria-describedby": errors[field] ? `${formId}-${field}-error` : undefined,
      className: cn(controlClass, errors[field] && "border-alert"),
    };
  }

  function goNext() {
    const stepErrors = validateStep(step.fields, values);
    if (Object.keys(stepErrors).length > 0) {
      setErrors(stepErrors);
      return;
    }
    trackEvent(analyticsEvents.formStepComplete, { step: stepIndex + 1 });
    setStepIndex((index) => Math.min(index + 1, leadSteps.length - 1));
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!isLastStep) {
      goNext();
      return;
    }

    const stepErrors = validateStep(step.fields, values);
    if (Object.keys(stepErrors).length > 0) {
      setErrors(stepErrors);
      trackEvent(analyticsEvents.formError, { reason: "validation" });
      return;
    }

    setState("submitting");
    setFormError(null);

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        trackEvent(analyticsEvents.formSubmit, { location: "contact" });
        router.push("/thank-you");
        return;
      }

      const body = (await response.json().catch(() => null)) as {
        message?: string;
        fieldErrors?: LeadFieldErrors;
      } | null;

      const fieldErrors = body?.fieldErrors ?? {};
      setErrors(fieldErrors);
      const firstInvalidStep = leadSteps.findIndex((candidate) =>
        candidate.fields.some((field) => fieldErrors[field]),
      );
      if (firstInvalidStep >= 0) setStepIndex(firstInvalidStep);
      setFormError(
        body?.message ??
          "We could not send your details. Please try again in a moment, or email us instead.",
      );
      setState("error");
      trackEvent(analyticsEvents.formError, { reason: "server" });
    } catch {
      setFormError("We could not reach the server. Check your connection and try again.");
      setState("error");
      trackEvent(analyticsEvents.formError, { reason: "network" });
    }
  }

  return (
    <form
      noValidate
      onSubmit={onSubmit}
      className="flex flex-col gap-7"
      aria-describedby={formError ? `${formId}-form-error` : undefined}
    >
      <ol className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5">
        {leadSteps.map((item, index) => (
          <li key={item.title} className="flex flex-1 items-center gap-3">
            <span
              className={cn(
                "flex h-7 w-7 shrink-0 items-center justify-center rounded-full font-mono text-[0.6875rem]",
                index === stepIndex
                  ? "bg-cobalt text-white"
                  : index < stepIndex
                    ? "bg-ink text-white"
                    : "border border-ink/20 text-graphite",
              )}
            >
              {index + 1}
            </span>
            <span
              className={cn(
                "text-sm",
                index === stepIndex ? "font-medium text-ink" : "text-graphite",
              )}
            >
              {item.title}
            </span>
            {index < leadSteps.length - 1 ? (
              <span aria-hidden="true" className="hidden h-px flex-1 bg-ink/12 sm:block" />
            ) : null}
          </li>
        ))}
      </ol>

      {formError ? (
        <div
          id={`${formId}-form-error`}
          role="alert"
          className="rounded-lg border border-alert/40 bg-alert/5 px-4 py-3 text-sm text-alert"
        >
          {formError}
        </div>
      ) : null}

      <div className="flex flex-col gap-1">
        <h2 className="display-face text-title text-ink">{step.title}</h2>
        <p className="text-graphite">{step.description}</p>
      </div>

      {stepIndex === 0 ? (
        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Your name" htmlFor={`${formId}-name`} error={errors.name}>
            <input
              {...fieldProps("name")}
              autoComplete="name"
              value={values.name}
              onChange={(event) => set("name", event.target.value)}
            />
          </Field>
          <Field label="Work email" htmlFor={`${formId}-email`} error={errors.email}>
            <input
              {...fieldProps("email")}
              type="email"
              inputMode="email"
              autoComplete="email"
              value={values.email}
              onChange={(event) => set("email", event.target.value)}
            />
          </Field>
          <Field label="Company" htmlFor={`${formId}-company`} error={errors.company}>
            <input
              {...fieldProps("company")}
              autoComplete="organization"
              value={values.company}
              onChange={(event) => set("company", event.target.value)}
            />
          </Field>
          <Field
            label="Current website"
            htmlFor={`${formId}-websiteUrl`}
            optional
            error={errors.websiteUrl}
          >
            <input
              {...fieldProps("websiteUrl")}
              autoComplete="url"
              placeholder="example.com"
              value={values.websiteUrl}
              onChange={(event) => set("websiteUrl", event.target.value)}
            />
          </Field>
        </div>
      ) : null}

      {stepIndex === 1 ? (
        <div className="flex flex-col gap-6">
          <fieldset>
            <legend className="text-sm font-medium text-ink">What do you need help with?</legend>
            <div className="mt-3 grid gap-2.5 sm:grid-cols-2">
              {primaryNeedOptions.map((option) => (
                <label
                  key={option.value}
                  className={cn(
                    "flex cursor-pointer items-center gap-3 rounded-lg border px-4 py-3 text-[0.9375rem] transition-colors",
                    values.primaryNeed === option.value
                      ? "border-cobalt bg-cobalt-soft text-ink"
                      : "border-ink/15 bg-paper text-graphite hover:border-ink/35",
                  )}
                >
                  <input
                    type="radio"
                    name="primaryNeed"
                    value={option.value}
                    checked={values.primaryNeed === option.value}
                    onChange={() => set("primaryNeed", option.value)}
                    className="h-4 w-4 accent-[#2438e0]"
                  />
                  {option.label}
                </label>
              ))}
            </div>
            {errors.primaryNeed ? (
              <p className="mt-2 text-sm text-alert">{errors.primaryNeed}</p>
            ) : null}
          </fieldset>

          <Field
            label="What is not working today?"
            htmlFor={`${formId}-problem`}
            error={errors.problem}
          >
            <textarea
              {...fieldProps("problem")}
              rows={4}
              value={values.problem}
              onChange={(event) => set("problem", event.target.value)}
            />
          </Field>

          <Field
            label="What should be different after the project?"
            htmlFor={`${formId}-desiredOutcome`}
            error={errors.desiredOutcome}
          >
            <textarea
              {...fieldProps("desiredOutcome")}
              rows={4}
              value={values.desiredOutcome}
              onChange={(event) => set("desiredOutcome", event.target.value)}
            />
          </Field>
        </div>
      ) : null}

      {stepIndex === 2 ? (
        <div className="flex flex-col gap-6">
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Budget range" htmlFor={`${formId}-budgetRange`} optional>
              <select
                {...fieldProps("budgetRange")}
                value={values.budgetRange}
                onChange={(event) => set("budgetRange", event.target.value)}
              >
                <option value="">Prefer not to say</option>
                {budgetRangeOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </Field>
            <Field label="Timing" htmlFor={`${formId}-timing`} optional>
              <select
                {...fieldProps("timing")}
                value={values.timing}
                onChange={(event) => set("timing", event.target.value)}
              >
                <option value="">Not sure yet</option>
                {timingOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </Field>
          </div>

          <Field
            label="Tools you already use"
            htmlFor={`${formId}-tools`}
            optional
            hint="CRM, calendar, email platform, or anything the system must connect to."
          >
            <input
              {...fieldProps("tools")}
              value={values.tools}
              onChange={(event) => set("tools", event.target.value)}
            />
          </Field>

          <Field label="Anything else we should know?" htmlFor={`${formId}-context`} optional>
            <textarea
              {...fieldProps("context")}
              rows={3}
              value={values.context}
              onChange={(event) => set("context", event.target.value)}
            />
          </Field>

          <div>
            <div className="flex items-start gap-3">
              <input
                id={`${formId}-consent`}
                name="consent"
                type="checkbox"
                checked={values.consent}
                onChange={(event) => set("consent", event.target.checked)}
                aria-invalid={Boolean(errors.consent)}
                aria-describedby={errors.consent ? `${formId}-consent-error` : undefined}
                className="mt-1 h-4 w-4 shrink-0 accent-[#2438e0]"
              />
              <label
                htmlFor={`${formId}-consent`}
                className="text-[0.9375rem] leading-relaxed text-ink"
              >
                Alizane Labs may contact me about this inquiry.
              </label>
            </div>
            {errors.consent ? (
              <p id={`${formId}-consent-error`} className="mt-1.5 text-sm text-alert">
                {errors.consent}
              </p>
            ) : null}
          </div>
        </div>
      ) : null}

      {/* Honeypot: hidden from users and assistive technology. */}
      <div aria-hidden="true" className="absolute left-[-10000px] h-px w-px overflow-hidden">
        <label htmlFor={`${formId}-nickname`}>Nickname</label>
        <input
          id={`${formId}-nickname`}
          name="nickname"
          tabIndex={-1}
          autoComplete="off"
          value={values.nickname}
          onChange={(event) => set("nickname", event.target.value)}
        />
      </div>

      <div className="flex flex-wrap items-center gap-3">
        {stepIndex > 0 ? (
          <Button variant="secondary" size="lg" onClick={() => setStepIndex(stepIndex - 1)}>
            Back
          </Button>
        ) : null}
        <Button type="submit" size="lg" disabled={state === "submitting"}>
          {isLastStep
            ? state === "submitting"
              ? "Sending…"
              : "Send project details"
            : "Continue"}
        </Button>
        <p className="text-sm text-graphite">
          Step {stepIndex + 1} of {leadSteps.length}
        </p>
      </div>

      <p aria-live="polite" className="sr-only">
        {state === "submitting" ? "Sending your project details" : ""}
      </p>
    </form>
  );
}
