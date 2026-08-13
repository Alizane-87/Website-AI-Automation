# Analytics events

Events are provider-agnostic (`lib/analytics.ts`): Plausible if present,
otherwise `window.dataLayer` if configured, otherwise discarded. **No event ever
carries a name, email address, message body, or any other personal data** — only
aggregate context such as a page location or step number.

| Event | Fired from | Properties |
| --- | --- | --- |
| `primary_cta_click` | Primary CTAs across all pages | `location` |
| `secondary_cta_click` | Secondary CTAs and cross-links | `location` |
| `service_page_view` | `/services/*` on mount | `service` |
| `project_form_start` | First interaction with `/contact` form | — |
| `form_step_complete` | Each validated intake step | `step` |
| `form_submit` | Successful submission | — |
| `form_error` | Validation or delivery failure | `reason` |
| `booking_start` | Scheduling CTA (only when configured) | `location` |
| `booking_complete` | Reserved for scheduler callbacks | — |
| `automation_demo_interact` | Illustrative walkthrough steps | `step` |
| `case_study_view` | Reserved for published case studies | — |
| `faq_open` | FAQ disclosure opened | `location`, `position` |
