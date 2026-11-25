import { ButtonLink } from "@/components/button-link";
import { company } from "@/content/company";
import { hero } from "@/content/hero";
import { ExternalLink } from "@/components/external-link";

export function Hero() {
  return (
    <section id="top" className="relative">
      <div className="hero-glow pointer-events-none absolute inset-0 -z-10" aria-hidden="true" />
      <div className="mx-auto flex w-full max-w-[54rem] flex-col items-center px-4 pt-14 pb-14 text-center md:px-6 md:pt-20 md:pb-16 lg:px-8 lg:pt-24 lg:pb-20">
        <p className="rise text-xs font-medium tracking-[0.08em] text-subtle-text uppercase">
          {hero.eyebrow}
          <span> · </span>
          <ExternalLink href={company.registerUrl} className="hover:text-link">
            {company.number}
          </ExternalLink>
        </p>
        <h1 className="rise rise-2 mt-5 text-[44px] leading-[46px] font-medium tracking-[-0.045em] text-balance md:text-[72px] md:leading-[72px]">
          {hero.title}
        </h1>
        <p className="rise rise-3 mt-5 max-w-[56ch] text-lg leading-7 text-pretty text-muted">
          {hero.lede}
        </p>
        <div className="rise rise-4 mt-8 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href={hero.primary.href}>{hero.primary.label}</ButtonLink>
          <ButtonLink href={hero.secondary.href} variant="secondary">
            {hero.secondary.label}
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
