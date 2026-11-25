"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import type { MouseEvent } from "react";
import type { Locale } from "@/content/types";

export function LanguageSwitch({
  locale,
  label,
}: {
  locale: Locale;
  label: string;
}) {
  const router = useRouter();

  function go(event: MouseEvent<HTMLAnchorElement>, path: string) {
    event.preventDefault();
    router.push(`${path}${window.location.hash}`);
  }

  const item = (active: boolean) =>
    `inline-flex min-h-11 items-center px-1 text-sm font-medium ${active ? "text-ink" : "text-muted hover:text-link"}`;

  return (
    <nav aria-label={label} className="flex items-center gap-1">
      <Link
        href="/"
        hrefLang="en-GB"
        lang="en-GB"
        aria-current={locale === "en" ? "true" : undefined}
        className={item(locale === "en")}
        onClick={(event) => go(event, "/")}
      >
        EN
      </Link>
      <span aria-hidden="true" className="text-line-strong">
        /
      </span>
      <Link
        href="/zh-hk"
        hrefLang="zh-HK"
        lang="zh-HK"
        aria-current={locale === "zh-hk" ? "true" : undefined}
        className={item(locale === "zh-hk")}
        onClick={(event) => go(event, "/zh-hk")}
      >
        繁中
      </Link>
    </nav>
  );
}
