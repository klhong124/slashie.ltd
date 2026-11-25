import { en } from "@/content/en";
import type { Locale, SiteCopy } from "@/content/types";
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

/** Public URL for a locale. English stays on the bare domain. */
export function localePath(locale: Locale): string {
  return locale === "en" ? "/" : "/zh-hk";
}
