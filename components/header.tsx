"use client";

import type { MouseEvent } from "react";
import { ButtonLink } from "@/components/button-link";
import { Logo } from "@/components/logo";
import { enquire, navigation } from "@/content/site";

function closeMenu(event: MouseEvent<HTMLAnchorElement>) {
  event.currentTarget.closest("details")?.removeAttribute("open");
}

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-surface/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-[80rem] items-center justify-between gap-4 px-4 md:px-6 lg:px-8">
        <a href="#top" className="inline-flex items-center">
          <Logo />
        </a>
        <nav aria-label="Primary" className="hidden items-center gap-6 lg:flex">
          <ul className="flex items-center gap-6">
            {navigation.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="inline-flex min-h-11 items-center text-sm font-medium text-ink transition-colors duration-200 hover:text-link"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <ButtonLink href={enquire.href} size="sm" variant="secondary">
            {enquire.label}
          </ButtonLink>
        </nav>
        <details className="group lg:hidden">
          <summary className="flex min-h-11 cursor-pointer items-center rounded-full border border-line-strong px-4 text-sm font-medium">
            <span className="group-open:hidden">Menu</span>
            <span className="hidden group-open:inline">Close</span>
          </summary>
          <nav
            aria-label="Menu"
            className="absolute inset-x-0 top-full z-50 hidden border-b border-line bg-surface px-4 py-3 group-open:block"
          >
            <ul className="flex flex-col">
              {navigation.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={closeMenu}
                    className="flex min-h-11 items-center rounded-lg px-3 text-sm font-medium hover:bg-subtle"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="px-3 pt-2 pb-1">
              <ButtonLink href={enquire.href} size="sm" className="w-full" onClick={closeMenu}>
                {enquire.label}
              </ButtonLink>
            </div>
          </nav>
        </details>
      </div>
    </header>
  );
}
