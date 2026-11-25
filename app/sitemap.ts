import type { MetadataRoute } from "next";
import { company } from "@/content/company";

export default function sitemap(): MetadataRoute.Sitemap {
  const updated = "2026-11-25";
  return [
    {
      url: company.url,
      lastModified: updated,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${company.url}/zh-hk`,
      lastModified: updated,
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
