import type { Metadata } from "next";
import { company } from "@/content/company";
import { en } from "@/content/en";
import type { Locale, Meta, PagePath, SiteCopy } from "@/content/types";
import { locales } from "@/content/types";
import { zhHk } from "@/content/zh-hk";

const copies: Record<Locale, SiteCopy> = {
  en,
  "zh-hk": zhHk,
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export function getCopy(locale: Locale): SiteCopy {
  return copies[locale];
}

/**
 * Public URL for an unprefixed path. English stays on the bare domain;
 * Traditional Chinese lives under /zh-hk. Hashes and external URLs pass through.
 */
export function localeHref(locale: Locale, href: string): string {
  if (!href.startsWith("/")) return href;
  if (locale === "en") return href;
  if (href === "/") return "/zh-hk";
  if (href.startsWith("/#")) return `/zh-hk${href.slice(1)}`;
  return `/zh-hk${href}`;
}

/**
 * Strips the locale prefix from a pathname. The server sees the rewritten
 * /en/... path while the browser sees the public one, so both must map alike.
 */
export function unprefixedPath(pathname: string): string {
  for (const prefix of ["/zh-hk", "/en"]) {
    if (pathname === prefix || pathname === `${prefix}/`) return "/";
    if (pathname.startsWith(`${prefix}/`)) return pathname.slice(prefix.length);
  }
  return pathname || "/";
}

export function pageMetadata(locale: Locale, path: PagePath, meta: Meta): Metadata {
  const copy = getCopy(locale);
  const canonical = localeHref(locale, path);
  const isHome = path === "/";
  return {
    title: isHome ? { absolute: meta.title } : meta.title,
    description: meta.description,
    alternates: {
      canonical,
      languages: {
        "en-GB": `${company.url}${path === "/" ? "" : path}`,
        "zh-HK": localeHref("zh-hk", path),
        "x-default": `${company.url}${path === "/" ? "" : path}`,
      },
    },
    openGraph: {
      type: "website",
      url: canonical,
      siteName: company.name,
      title: meta.title,
      description: meta.description,
      locale: copy.ogLocale,
      alternateLocale: locale === "en" ? ["zh_HK"] : ["en_GB"],
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
    },
  };
}
