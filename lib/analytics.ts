"use client";

/**
 * Provider-agnostic event layer. Events are aggregate: never attach a name,
 * email address, phone number, or free-text answer to an analytics event.
 *
 * Delivery order: Plausible if present, otherwise a `dataLayer` push. With
 * neither provider configured, events are discarded rather than queued.
 *
 * | Event                       | Fired when                                    |
 * | --------------------------- | --------------------------------------------- |
 * | `primary_cta_click`         | A primary "Start a project" CTA is clicked    |
 * | `secondary_cta_click`       | A secondary CTA (work, capabilities) is clicked |
 * | `service_page_view`         | A service page is opened                      |
 * | `project_form_start`        | First interaction with the intake form        |
 * | `form_step_complete`        | An intake step is validated and left          |
 * | `form_submit`               | A submission is accepted by the API           |
 * | `form_error`                | Validation or delivery returns an error       |
 * | `booking_start`             | A scheduling link is opened                   |
 * | `booking_complete`          | The scheduler reports a completed booking     |
 * | `automation_demo_interact`  | A step of the illustrative demo is opened     |
 * | `case_study_view`           | A case study or example engagement is opened  |
 * | `faq_open`                  | An FAQ answer is expanded                     |
 */
export const analyticsEvents = {
  primaryCtaClick: "primary_cta_click",
  secondaryCtaClick: "secondary_cta_click",
  servicePageView: "service_page_view",
  projectFormStart: "project_form_start",
  formStepComplete: "form_step_complete",
  formSubmit: "form_submit",
  formError: "form_error",
  bookingStart: "booking_start",
  bookingComplete: "booking_complete",
  automationDemoInteract: "automation_demo_interact",
  caseStudyView: "case_study_view",
  faqOpen: "faq_open",
} as const;

export type AnalyticsEvent = (typeof analyticsEvents)[keyof typeof analyticsEvents];

type AnalyticsProps = Record<string, string | number | boolean>;

type AnalyticsWindow = Window & {
  plausible?: (event: string, options?: { props?: AnalyticsProps }) => void;
  dataLayer?: Array<Record<string, unknown>>;
};

export function trackEvent(event: AnalyticsEvent, props?: AnalyticsProps): void {
  if (typeof window === "undefined") return;

  const target = window as AnalyticsWindow;

  if (typeof target.plausible === "function") {
    target.plausible(event, props ? { props } : undefined);
    return;
  }

  if (Array.isArray(target.dataLayer)) {
    target.dataLayer.push({ event, ...props });
  }
}
