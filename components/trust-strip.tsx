import Link from "next/link";
import { Arrow } from "@/components/button-link";
import { localeHref } from "@/content/get-copy";
import type { Locale, TrustItem } from "@/content/types";

/** Verifiable facts only: every item links to where it can be checked. */
export function TrustStrip({ items, locale, newTab }: { items: TrustItem[]; locale: Locale; newTab: string }) {
  return (
    <ul className="grid grid-cols-2 divide-line border-y border-line lg:grid-cols-4 lg:divide-x">
      {items.map((item, index) => {
        const internal = item.href.startsWith("/");
        const content = (
          <>
            <span className="text-xs font-medium tracking-[0.06em] text-subtle-text uppercase">{item.label}</span>
            <span className="flex items-center gap-1.5 text-base font-medium text-ink group-hover/link:text-link">
              {item.value}
              <Arrow className="text-accent" />
            </span>
          </>
        );
        const className =
          "group/link flex min-h-20 flex-col justify-center gap-1 px-4 py-4 transition-colors hover:bg-subtle md:px-6";
        return (
          <li key={item.label} className={`${index % 2 === 1 ? "border-l border-line lg:border-l-0" : ""} ${index > 1 ? "border-t border-line lg:border-t-0" : ""}`}>
            {internal ? (
              <Link href={localeHref(locale, item.href)} className={className}>
                {content}
              </Link>
            ) : (
              <a href={item.href} target="_blank" rel="noopener noreferrer" className={className}>
                {content}
                <span className="sr-only"> ({newTab})</span>
              </a>
            )}
          </li>
        );
      })}
    </ul>
  );
}
