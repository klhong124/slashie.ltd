"use client";

import { usePathname } from "next/navigation";
import { localeHref, unprefixedPath } from "@/content/get-copy";
import type { Locale } from "@/content/types";

const options: { locale: Locale; label: string; hrefLang: string }[] = [
  { locale: "zh-hk", label: "繁中", hrefLang: "zh-HK" },
  { locale: "en", label: "EN", hrefLang: "en-GB" },
];

/**
 * Links to the same page in the other locale. Plain anchors on purpose: each
 * locale is its own root layout (a full load either way), and the client router
 * cannot see the proxy rewrite, so prefetching "/pricing" would hit /[lang].
 */
export function LanguageSwitch({ locale, label }: { locale: Locale; label: string }) {
  const path = unprefixedPath(usePathname());

  return (
    <nav aria-label={label} className="flex items-center rounded-full border border-line p-0.5">
      {options.map((option) => {
        const active = option.locale === locale;
        return (
          <a
            key={option.locale}
            href={localeHref(option.locale, path)}
            hrefLang={option.hrefLang}
            lang={option.hrefLang}
            aria-current={active ? "true" : undefined}
            className={`inline-flex min-h-10 min-w-11 items-center justify-center rounded-full px-3 text-sm font-medium transition-colors duration-200 ${
              active ? "bg-ink text-white" : "text-muted hover:text-ink"
            }`}
          >
            {option.label}
          </a>
        );
      })}
    </nav>
  );
}
