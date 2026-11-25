import type { ReactNode } from "react";
import { Arrow, ButtonLink } from "@/components/button-link";
import { Eyebrow } from "@/components/section";
import { localeHref } from "@/content/get-copy";
import type { Hero, Locale } from "@/content/types";

/** Opening band for inner pages. */
export function PageHero({ hero, locale, aside }: { hero: Hero; locale: Locale; aside?: ReactNode }) {
  return (
    <section className="relative overflow-hidden">
      <div className="hero-glow pointer-events-none absolute inset-0 -z-10" aria-hidden="true" />
      <div className="mx-auto grid w-full max-w-[80rem] gap-10 px-4 pt-14 pb-14 md:px-6 md:pt-20 md:pb-20 lg:grid-cols-12 lg:items-end lg:px-8 lg:pt-24 lg:pb-24">
        <div className="lg:col-span-8">
          <Eyebrow className="rise">{hero.eyebrow}</Eyebrow>
          <h1 className="rise rise-2 mt-4 max-w-[18ch] text-[40px] leading-[1.08] font-medium tracking-[-0.04em] text-balance md:text-[56px] md:leading-[1.04] lg:text-[64px]">
            {hero.title}
          </h1>
          {hero.lede ? (
            <p className="rise rise-3 mt-6 max-w-[42rem] text-lg leading-7 text-pretty text-muted md:text-xl md:leading-8">
              {hero.lede}
            </p>
          ) : null}
          {hero.primary || hero.secondary ? (
            <div className="rise rise-4 mt-8 flex flex-col gap-3 sm:flex-row">
              {hero.primary ? (
                <ButtonLink href={localeHref(locale, hero.primary.href)}>
                  {hero.primary.label}
                  <Arrow />
                </ButtonLink>
              ) : null}
              {hero.secondary ? (
                <ButtonLink href={localeHref(locale, hero.secondary.href)} variant="secondary">
                  {hero.secondary.label}
                </ButtonLink>
              ) : null}
            </div>
          ) : null}
        </div>
        {aside ? <div className="rise rise-4 lg:col-span-4">{aside}</div> : null}
      </div>
    </section>
  );
}
