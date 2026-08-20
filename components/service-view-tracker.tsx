"use client";

import { useEffect } from "react";

import { analyticsEvents, trackEvent } from "@/lib/analytics";

/** Records an aggregate service-page view. No visitor detail is attached. */
export function ServiceViewTracker({ service }: { service: string }) {
  useEffect(() => {
    trackEvent(analyticsEvents.servicePageView, { service });
  }, [service]);

  return null;
}
