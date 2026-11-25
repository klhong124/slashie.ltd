import { Arrow, ButtonLink } from "@/components/button-link";
import { Eyebrow } from "@/components/section";
import { localeHref } from "@/content/get-copy";
import type { SiteCopy } from "@/content/types";

function ProjectBrief({ brief }: { brief: SiteCopy["home"]["brief"] }) {
  return (
    <div aria-hidden="true" className="brief relative mx-auto w-full max-w-md lg:max-w-none">
      <div className="absolute inset-x-6 -bottom-3 h-full rounded-2xl border border-line bg-subtle" />
      <div className="relative rounded-2xl border border-line bg-surface p-5 shadow-e2 md:p-6">
        <div className="flex items-center justify-between gap-4">
          <p className="text-sm font-medium">{brief.title}</p>
          <span className="inline-flex items-center gap-2 rounded-full bg-[#e7fbf0] px-3 py-1 text-xs font-medium text-link">
            <span className="pulse-dot relative size-2 rounded-full bg-action" />
            {brief.status}
          </span>
        </div>
        <dl className="mt-5 divide-y divide-line border-t border-line">
          {brief.rows.map((row, index) => (
            <div
              key={row.label}
              className="brief-row grid grid-cols-[6.5rem_1fr] items-baseline gap-4 py-3.5"
              style={{ animationDelay: `${360 + index * 90}ms` }}
            >
              <dt className="text-xs font-medium tracking-[0.06em] text-subtle-text uppercase">{row.label}</dt>
              <dd className="text-base font-medium">{row.value}</dd>
            </div>
          ))}
        </dl>
        <div className="mt-5 h-1.5 overflow-hidden rounded-full bg-subtle">
          <div className="brief-progress h-full w-3/5 rounded-full bg-action" />
        </div>
      </div>
    </div>
  );
}

export function HomeHero({ copy }: { copy: SiteCopy }) {
  const { hero, brief } = copy.home;
  const { locale } = copy;

  return (
    <section id="top" className="relative overflow-hidden">
      <div className="hero-glow pointer-events-none absolute inset-0 -z-10" aria-hidden="true" />
      <div className="mx-auto grid w-full max-w-[80rem] items-center gap-12 px-4 pt-14 pb-16 md:px-6 md:pt-20 md:pb-20 lg:grid-cols-12 lg:gap-8 lg:px-8 lg:pt-24 lg:pb-28">
        <div className="lg:col-span-7">
          <Eyebrow className="rise inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1.5 tracking-[0.06em] normal-case">
            <span className="size-1.5 rounded-full bg-action" aria-hidden="true" />
            {hero.eyebrow}
          </Eyebrow>
          <h1 className="rise rise-2 mt-6 max-w-[14ch] text-[44px] leading-[1.04] font-medium tracking-[-0.045em] text-balance md:text-[64px] lg:text-[72px] lg:leading-[1]">
            {hero.title}
          </h1>
          <p className="rise rise-3 mt-6 max-w-[40rem] text-lg leading-7 text-pretty text-muted md:text-xl md:leading-8">
            {hero.lede}
          </p>
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
          <ul className="rise rise-4 mt-10 flex flex-wrap gap-x-6 gap-y-3">
            {hero.chips.map((chip) => (
              <li key={chip} className="inline-flex items-center gap-2 text-sm font-medium text-muted">
                <svg aria-hidden="true" viewBox="0 0 16 16" className="size-4 text-accent">
                  <path
                    d="M3.5 8.5l3 3 6-7"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {chip}
              </li>
            ))}
          </ul>
        </div>
        <div className="rise rise-4 lg:col-span-5">
          <ProjectBrief brief={brief} />
        </div>
      </div>
    </section>
  );
}
