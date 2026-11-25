import type { MetadataRoute } from "next";
import { company } from "@/content/company";
import { localeHref } from "@/content/get-copy";
import { locales, pagePaths } from "@/content/types";

export default function sitemap(): MetadataRoute.Sitemap {
  const updated = "2026-11-25";
  const absolute = (path: string) => `${company.url}${path === "/" ? "" : path}`;

  return pagePaths.flatMap((path) =>
    locales.map((locale) => ({
      url: absolute(localeHref(locale, path)),
      lastModified: updated,
      changeFrequency: "monthly" as const,
      priority: path === "/" ? 1 : 0.8,
      alternates: {
        languages: {
          "en-GB": absolute(localeHref("en", path)),
          "zh-HK": absolute(localeHref("zh-hk", path)),
        },
      },
    })),
  );
}
