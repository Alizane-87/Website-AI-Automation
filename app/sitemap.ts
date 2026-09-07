import type { MetadataRoute } from "next";

import { siteUrl } from "@/lib/env";

const routes = [
  { path: "/", priority: 1 },
  { path: "/conversion-chat", priority: 0.95 },
  { path: "/product", priority: 0.95 },
  { path: "/pricing", priority: 0.9 },
  { path: "/services/websites", priority: 0.8 },
  { path: "/services/ai-automation", priority: 0.8 },
  { path: "/work", priority: 0.7 },
  { path: "/process", priority: 0.7 },
  { path: "/about", priority: 0.6 },
  { path: "/contact", priority: 0.9 },
  { path: "/ai-disclosure", priority: 0.4 },
  { path: "/privacy", priority: 0.3 },
  { path: "/terms", priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return routes.map((route) => ({
    url: `${siteUrl}${route.path === "/" ? "" : route.path}`,
    lastModified,
    changeFrequency: "monthly",
    priority: route.priority,
  }));
}
