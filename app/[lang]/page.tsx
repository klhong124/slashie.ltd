import { notFound } from "next/navigation";
import { TextLink } from "@/components/button-link";
import { CtaBand } from "@/components/cta-band";
import { Faq } from "@/components/faq";
import { HomeHero } from "@/components/home-hero";
import { DanCard, SlashieCard } from "@/components/product-cards";
import { Check, Eyebrow, Index, Section } from "@/components/section";
import { SectionHeading } from "@/components/section-heading";
import { SectorExplorer } from "@/components/sector-explorer";
import { ServiceSummary } from "@/components/service-card";
import { TrustStrip } from "@/components/trust-strip";
import { getCopy, isLocale, localeHref, pageMetadata } from "@/content/get-copy";
import { JsonLd, faqJsonLd } from "@/lib/json-ld";

export async function generateMetadata({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  return pageMetadata(lang, "/", getCopy(lang).home.meta);
}

export default async function HomePage({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const copy = getCopy(lang);
  const { home, services, products, pricing } = copy;
  const tiers = pricing.groups.flatMap((group) => group.tiers.map((tier) => ({ ...tier, group: group.eyebrow })));

  return (
    <>
      <HomeHero copy={copy} />
      <div className="mx-auto w-full max-w-[80rem]">
        <TrustStrip items={home.trust} locale={lang} newTab={copy.chrome.newTab} />
      </div>

      <Section id="problems" tone="canvas">
        <SectionHeading eyebrow={home.stuck.eyebrow} title={home.stuck.title} lede={home.stuck.lede} />
        <ul className="mt-12 grid gap-4 md:grid-cols-2">
          {home.stuck.items.map((item, index) => (
            <li key={item.title} className="flex gap-5 rounded-xl border border-line bg-surface p-6 shadow-e1 md:p-8">
              <Index value={index + 1} />
              <div>
                <h3 className="text-xl leading-7 font-medium tracking-[-0.02em]">{item.title}</h3>
                <p className="mt-2 text-base leading-6 text-pretty text-muted">{item.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="sectors">
        <SectionHeading eyebrow={home.sectors.eyebrow} title={home.sectors.title} lede={home.sectors.lede} />
        <div className="mt-12">
          <SectorExplorer sectors={home.sectors} />
        </div>
      </Section>

      <Section id="services" tone="canvas">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading eyebrow={home.services.eyebrow} title={home.services.title} lede={home.services.lede} />
          <TextLink href={localeHref(lang, home.services.more.href)}>{home.services.more.label}</TextLink>
        </div>
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.items.map((service, index) => (
            <li key={service.id}>
              <ServiceSummary service={service} index={index + 1} />
            </li>
          ))}
        </ul>
      </Section>

      <section id="cantonese" className="scroll-mt-20 border-t border-line">
        <div className="view-rise mx-auto w-full max-w-[80rem] px-4 py-16 md:px-6 md:py-24 lg:px-8 lg:py-28">
          <div className="relative overflow-hidden rounded-2xl border border-[#c6f6dd] bg-[#e7fbf0] p-6 md:p-12">
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -right-6 -bottom-16 text-[220px] leading-none font-medium tracking-[-0.06em] text-[#c6f6dd] select-none md:text-[320px]"
              lang="zh-HK"
            >
              粵
            </span>
            <div className="relative grid gap-10 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <Eyebrow tone="accent">{home.cantonese.eyebrow}</Eyebrow>
                <h2 className="mt-3 max-w-[18ch] text-[30px] leading-[1.15] font-medium tracking-[-0.035em] text-balance md:text-[44px]">
                  {home.cantonese.title}
                </h2>
                <p className="mt-5 max-w-[48ch] text-lg leading-7 text-pretty text-[#053d27]">
                  {home.cantonese.lede}
                </p>
              </div>
              <ul className="space-y-3 self-end lg:col-span-5">
                {home.cantonese.points.map((point) => (
                  <li
                    key={point}
                    className="flex gap-3 rounded-xl border border-[#c6f6dd] bg-white/80 p-4 text-base leading-6 font-medium backdrop-blur-sm"
                  >
                    <Check />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Section id="why" tone="canvas">
        <SectionHeading eyebrow={home.why.eyebrow} title={home.why.title} />
        <ul className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {home.why.items.map((item, index) => (
            <li key={item.title} className="group bg-surface p-6 transition-colors duration-200 hover:bg-[#fbfefc] md:p-8">
              <span
                aria-hidden="true"
                className="flex size-10 items-center justify-center rounded-xl bg-[#e7fbf0] text-sm font-medium text-link tabular-nums transition-[background-color,color,transform] duration-200 group-hover:-rotate-6 group-hover:bg-action group-hover:text-ink motion-reduce:transform-none"
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-5 text-xl leading-7 font-medium tracking-[-0.02em]">{item.title}</h3>
              <p className="mt-2 text-base leading-6 text-pretty text-muted">{item.body}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="process">
        <SectionHeading eyebrow={home.process.eyebrow} title={home.process.title} lede={home.process.lede} />
        <ol className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {home.process.steps.map((step, index) => (
            <li key={step.title} className="relative rounded-xl border border-line bg-surface p-6 shadow-e1">
              <div className="flex items-center gap-3">
                <span className="flex size-9 items-center justify-center rounded-full bg-action text-sm font-medium text-ink tabular-nums">
                  {index + 1}
                </span>
                <span aria-hidden="true" className="h-px flex-1 bg-line" />
              </div>
              <h3 className="mt-5 text-xl leading-7 font-medium tracking-[-0.02em]">{step.title}</h3>
              <p className="mt-2 text-base leading-6 text-pretty text-muted">{step.body}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section id="products" tone="canvas">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading eyebrow={home.products.eyebrow} title={home.products.title} lede={home.products.lede} />
          <TextLink href={localeHref(lang, home.products.more.href)}>{home.products.more.label}</TextLink>
        </div>
        <div className="mt-12 space-y-4">
          <SlashieCard slashie={products.slashie} />
          <DanCard dan={products.dan} />
        </div>
      </Section>

      <Section id="pricing">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading eyebrow={home.pricing.eyebrow} title={home.pricing.title} lede={home.pricing.lede} />
          <TextLink href={localeHref(lang, home.pricing.more.href)}>{home.pricing.more.label}</TextLink>
        </div>
        <ul className="mt-12 divide-y divide-line overflow-hidden rounded-xl border border-line bg-surface shadow-e1">
          {tiers.map((tier) => (
            <li key={tier.name} className="grid gap-2 px-6 py-5 sm:grid-cols-12 sm:items-center">
              <p className="text-xs font-medium tracking-[0.08em] text-subtle-text uppercase sm:col-span-3">
                {tier.group}
              </p>
              <p className="text-lg font-medium tracking-[-0.015em] sm:col-span-5">{tier.name}</p>
              <p className="flex items-baseline gap-2 sm:col-span-4 sm:justify-end">
                <span className="text-xl font-medium tracking-[-0.02em]">{tier.price}</span>
                <span className="text-sm text-subtle-text">{tier.cadence}</span>
              </p>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="faq" tone="canvas">
        <JsonLd data={faqJsonLd(home.faq.items, copy.htmlLang)} />
        <Faq intro={home.faq} items={home.faq.items} />
      </Section>

      <CtaBand copy={copy} />
    </>
  );
}
