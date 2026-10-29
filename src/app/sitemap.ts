import type { MetadataRoute } from "next";
import { navItems, siteContent } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    { url: siteContent.url, lastModified: now, changeFrequency: "monthly", priority: 1 },
    ...navItems.map((item) => ({
      url: `${siteContent.url}${item.href}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
