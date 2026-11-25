"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { MouseEvent } from "react";
import { ButtonLink } from "@/components/button-link";
import { LanguageSwitch } from "@/components/language-switch";
import { Logo } from "@/components/logo";
import { localeHref, unprefixedPath } from "@/content/get-copy";
import type { SiteCopy } from "@/content/types";

function closeMenu(event: MouseEvent<HTMLAnchorElement>) {
  event.currentTarget.closest("details")?.removeAttribute("open");
}

export function Header({ copy }: { copy: SiteCopy }) {
  const { chrome, locale } = copy;
  const current = unprefixedPath(usePathname());

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-surface/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-[80rem] items-center justify-between gap-4 px-4 md:px-6 lg:px-8">
        <Link href={localeHref(locale, "/")} className="inline-flex items-center" aria-label="Slashie Ltd">
          <Logo />
        </Link>
        <div className="hidden items-center gap-6 lg:flex">
          <nav aria-label={chrome.navAria}>
            <ul className="flex items-center gap-1">
              {chrome.nav.map((item) => {
                const active = current === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={localeHref(locale, item.href)}
                      aria-current={active ? "page" : undefined}
                      className={`relative inline-flex min-h-11 items-center rounded-full px-3 text-sm font-medium transition-colors duration-200 ${
                        active ? "bg-subtle text-ink" : "text-muted hover:text-ink"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          <LanguageSwitch locale={locale} label={chrome.languageLabel} />
          <ButtonLink href={localeHref(locale, chrome.cta.href)} size="sm">
            {chrome.cta.label}
          </ButtonLink>
        </div>
        <details className="group lg:hidden">
          <summary className="flex min-h-11 cursor-pointer items-center rounded-full border border-line-strong px-4 text-sm font-medium">
            <span className="group-open:hidden">{chrome.menu}</span>
            <span className="hidden group-open:inline">{chrome.close}</span>
          </summary>
          <nav
            aria-label={chrome.navAria}
            className="absolute inset-x-0 top-full z-50 hidden border-b border-line bg-surface px-4 py-3 shadow-e2 group-open:block"
          >
            <ul className="flex flex-col">
              {chrome.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={localeHref(locale, item.href)}
                    onClick={closeMenu}
                    aria-current={current === item.href ? "page" : undefined}
                    className="flex min-h-12 items-center rounded-lg px-3 text-base font-medium hover:bg-subtle aria-[current=page]:bg-subtle"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex items-center justify-between px-3 pt-3 pb-2">
              <LanguageSwitch locale={locale} label={chrome.languageLabel} />
              <ButtonLink href={localeHref(locale, chrome.cta.href)} size="sm" onClick={closeMenu}>
                {chrome.cta.label}
              </ButtonLink>
            </div>
          </nav>
        </details>
      </div>
    </header>
  );
}
