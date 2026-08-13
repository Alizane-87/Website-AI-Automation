import { NextResponse } from "next/server";

import { getLeadDestination, type LeadRecord } from "@/lib/lead-delivery";
import { leadSchema, normalizeLeadInput, toFieldErrors } from "@/lib/lead-schema";
import { checkRateLimit, clientKeyFromHeaders } from "@/lib/rate-limit";

const GENERIC_ERROR =
  "We could not submit the request right now. Please try again shortly.";

export async function POST(request: Request) {
  const limit = checkRateLimit(clientKeyFromHeaders(request.headers));
  if (!limit.allowed) {
    return NextResponse.json(
      { message: "Too many requests. Please try again later." },
      { status: 429, headers: { "retry-after": String(limit.retryAfterSeconds) } },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ message: GENERIC_ERROR }, { status: 400 });
  }

  // Optional fields arrive as "" from the browser; required fields keep their
  // empty value so the schema reports its own copy rather than "Required".
  const normalised =
    typeof body === "object" && body !== null
      ? normalizeLeadInput(body as Record<string, unknown>)
      : body;

  // Honeypot filled: accept silently so bots learn nothing from the response.
  if (
    typeof normalised === "object" &&
    normalised !== null &&
    typeof (normalised as Record<string, unknown>).nickname === "string" &&
    (normalised as Record<string, unknown>).nickname !== ""
  ) {
    return NextResponse.json({ ok: true }, { status: 202 });
  }

  const parsed = leadSchema.safeParse(normalised);
  if (!parsed.success) {
    return NextResponse.json(
      { message: "Please check the highlighted fields.", fieldErrors: toFieldErrors(parsed.error) },
      { status: 400 },
    );
  }

  const lead = { ...parsed.data };
  delete lead.nickname;
  const record: LeadRecord = { ...lead, submittedAt: new Date().toISOString() };

  const destination = getLeadDestination();
  try {
    await destination.deliver(record);
  } catch (error) {
    // Log for operators without echoing contact details or stack traces to the client.
    console.error(
      `[lead] delivery via "${destination.name}" failed: ${
        error instanceof Error ? error.message : "unknown error"
      }`,
    );
    return NextResponse.json({ message: GENERIC_ERROR }, { status: 502 });
  }

  return NextResponse.json({ ok: true }, { status: 201 });
}
