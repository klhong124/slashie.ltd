import { ButtonLink } from "@/components/button-link";
import { ExternalLink } from "@/components/external-link";
import { company } from "@/content/company";
import type { SiteCopy } from "@/content/types";

export function Hero({ copy }: { copy: SiteCopy }) {
  const { hero } = copy;

  return (
    <section id="top" className="relative overflow-hidden">
      <div className="hero-glow pointer-events-none absolute inset-0 -z-10" aria-hidden="true" />
      <div className="mx-auto grid w-full max-w-[80rem] items-end gap-10 px-4 pt-16 pb-16 md:px-6 md:pt-24 md:pb-20 lg:grid-cols-12 lg:px-8 lg:pt-28 lg:pb-28">
        <div className="lg:col-span-8">
          <p className="rise text-xs font-medium tracking-[0.08em] text-subtle-text uppercase">
            {hero.eyebrow}
            <span> · </span>
            <ExternalLink href={company.registerUrl} className="hover:text-link">
              {company.number}
            </ExternalLink>
          </p>
          <h1 className="rise rise-2 mt-5 max-w-[12ch] text-[44px] leading-[1.05] font-medium tracking-[-0.045em] text-balance md:text-[72px] md:leading-[1]">
            {hero.title}
          </h1>
          <p className="rise rise-3 mt-6 max-w-[42rem] text-lg leading-7 text-pretty text-muted md:text-xl md:leading-8">
            {hero.lede}
          </p>
          <div className="rise rise-4 mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={hero.primary.href}>{hero.primary.label}</ButtonLink>
            <ButtonLink href={hero.secondary.href} variant="secondary">
              {hero.secondary.label}
            </ButtonLink>
          </div>
        </div>
        <ul className="rise rise-4 divide-y divide-line border-y border-line lg:col-span-4">
          {hero.chips.map((chip, index) => (
            <li key={chip} className="flex items-center gap-4 py-4">
              <span className="font-medium text-accent tabular-nums">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="text-base font-medium">{chip}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
