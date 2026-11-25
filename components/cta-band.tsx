import { Arrow, ButtonLink } from "@/components/button-link";
import { company } from "@/content/company";
import { localeHref } from "@/content/get-copy";
import type { SiteCopy } from "@/content/types";

/** Dark closing band shared by every page. */
export function CtaBand({ copy }: { copy: SiteCopy }) {
  const { ctaBand, locale } = copy;

  return (
    <section className="border-t border-line px-4 py-16 md:px-6 md:py-24 lg:px-8">
      <div className="view-rise relative mx-auto w-full max-w-[80rem] overflow-hidden rounded-2xl bg-[#0c1310] px-6 py-14 text-white md:px-12 md:py-20">
        <div
          aria-hidden="true"
          className="cta-glow pointer-events-none absolute -top-1/2 right-[-10%] h-[160%] w-[70%]"
        />
        <div className="relative grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <h2 className="max-w-[16ch] text-[34px] leading-[1.1] font-medium tracking-[-0.035em] text-balance md:text-[52px]">
              {ctaBand.title}
            </h2>
            <p className="mt-5 max-w-[46ch] text-lg leading-7 text-pretty text-white/70">{ctaBand.body}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:col-span-4 lg:justify-end">
            <ButtonLink href={localeHref(locale, ctaBand.primary.href)}>
              {ctaBand.primary.label}
              <Arrow />
            </ButtonLink>
            <ButtonLink href={localeHref(locale, ctaBand.secondary.href)} variant="inverse">
              {ctaBand.secondary.label}
            </ButtonLink>
          </div>
        </div>
        <a
          href={`mailto:${company.email}`}
          className="relative mt-12 inline-flex min-h-11 items-center text-base font-medium text-[#54dd9d] underline-offset-4 hover:underline"
        >
          {company.email}
        </a>
      </div>
    </section>
  );
}
