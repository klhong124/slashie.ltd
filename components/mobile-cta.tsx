"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Arrow } from "@/components/button-link";
import { company, whatsappUrl } from "@/content/company";
import { localeHref, unprefixedPath } from "@/content/get-copy";
import type { Locale } from "@/content/types";

/** Thumb-reach call to action on small screens; hidden on the contact page itself. */
export function MobileCta({ locale, label }: { locale: Locale; label: string }) {
  if (unprefixedPath(usePathname()) === "/contact") return null;

  return (
    <div className="mobile-cta fixed inset-x-0 bottom-0 z-40 border-t border-line bg-surface/95 px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur-md lg:hidden">
      <div className="flex items-center gap-2">
        <Link
          href={localeHref(locale, "/contact")}
          className="group/button inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-full bg-action px-5 text-base font-medium text-ink active:scale-[0.97] active:bg-action-pressed motion-reduce:transform-none"
        >
          {label}
          <Arrow />
        </Link>
        {whatsappUrl ? (
          <a
            href={whatsappUrl}
            aria-label="WhatsApp"
            className="inline-flex size-12 shrink-0 items-center justify-center rounded-full border border-line-strong active:scale-[0.97] motion-reduce:transform-none"
          >
            <svg aria-hidden="true" viewBox="0 0 20 20" className="size-5">
              <path
                d="M10 2.5a7.5 7.5 0 0 0-6.5 11.2L2.5 17.5l3.9-1A7.5 7.5 0 1 0 10 2.5Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        ) : null}
        <a
          href={`mailto:${company.email}`}
          aria-label={company.email}
          className="inline-flex size-12 shrink-0 items-center justify-center rounded-full border border-line-strong active:scale-[0.97] motion-reduce:transform-none"
        >
          <svg aria-hidden="true" viewBox="0 0 20 20" className="size-5">
            <rect x="2.5" y="4.5" width="15" height="11" rx="2" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <path d="M3 5.5l7 5.5 7-5.5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
    </div>
  );
}
