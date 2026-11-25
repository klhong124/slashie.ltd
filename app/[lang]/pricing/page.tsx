import { notFound } from "next/navigation";
import { CompareTable } from "@/components/compare-table";
import { CtaBand } from "@/components/cta-band";
import { Faq } from "@/components/faq";
import { PageHero } from "@/components/page-hero";
import { Check, Section } from "@/components/section";
import { SectionHeading } from "@/components/section-heading";
import { TierCard } from "@/components/tier-card";
import { getCopy, isLocale, localeHref, pageMetadata } from "@/content/get-copy";
import { JsonLd, breadcrumbJsonLd, faqJsonLd } from "@/lib/json-ld";

export async function generateMetadata({ params }: PageProps<"/[lang]/pricing">) {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  return pageMetadata(lang, "/pricing", getCopy(lang).pricing.meta);
}

export default async function PricingPage({ params }: PageProps<"/[lang]/pricing">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const copy = getCopy(lang);
  const { pricing } = copy;
  const cta = { href: localeHref(lang, pricing.tierCta.href), label: pricing.tierCta.label };
  const [builds, ...others] = pricing.groups;

  const groupSection = (group: typeof builds, tone: "canvas" | "surface") => (
    <Section key={group.title} tone={tone}>
      <SectionHeading eyebrow={group.eyebrow} title={group.title} lede={group.lede} />
      <ul className={`mt-12 grid gap-4 ${group.tiers.length === 3 ? "md:grid-cols-2 lg:grid-cols-3" : "md:grid-cols-2"}`}>
        {group.tiers.map((tier) => (
          <li key={tier.name}>
            <TierCard tier={tier} featuredLabel={pricing.featuredLabel} cta={cta} />
          </li>
        ))}
      </ul>
    </Section>
  );

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(copy, "/pricing", pricing.meta.title)} />
      <JsonLd data={faqJsonLd(pricing.faq.items, copy.htmlLang)} />
      <PageHero
        hero={pricing.hero}
        locale={lang}
        aside={
          <p
            role="note"
            className="flex gap-3 rounded-xl border border-[#c6f6dd] bg-[#e7fbf0] p-5 text-base leading-6 text-[#053d27]"
          >
            <span aria-hidden="true" className="mt-1.5 size-2 shrink-0 rounded-full bg-action" />
            {pricing.notice}
          </p>
        }
      />

      <Section tone="canvas">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-4">
            <SectionHeading eyebrow={pricing.included.eyebrow} title={pricing.included.title} />
          </div>
          <ul className="grid gap-3 sm:grid-cols-2 lg:col-span-8">
            {pricing.included.items.map((item) => (
              <li key={item} className="flex gap-3 rounded-xl border border-line bg-surface p-4 text-base leading-6 font-medium">
                <Check />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {groupSection(builds, "surface")}

      <Section tone="canvas">
        <SectionHeading eyebrow={pricing.compare.eyebrow} title={pricing.compare.title} />
        <div className="mt-12">
          <CompareTable compare={pricing.compare} tiers={builds.tiers} />
        </div>
      </Section>

      {others.map((group, index) => groupSection(group, index % 2 === 0 ? "surface" : "canvas"))}

      <Section tone={others.length % 2 === 0 ? "surface" : "canvas"}>
        <SectionHeading eyebrow={pricing.how.eyebrow} title={pricing.how.title} />
        <ol className="mt-12 grid gap-4 md:grid-cols-3">
          {pricing.how.steps.map((step, index) => (
            <li key={step.title} className="rounded-xl border border-line bg-surface p-6 shadow-e1">
              <span className="flex size-9 items-center justify-center rounded-full bg-action text-sm font-medium text-ink tabular-nums">
                {index + 1}
              </span>
              <h3 className="mt-5 text-xl leading-7 font-medium tracking-[-0.02em]">{step.title}</h3>
              <p className="mt-2 text-base leading-6 text-pretty text-muted">{step.body}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section tone={others.length % 2 === 0 ? "canvas" : "surface"}>
        <Faq intro={pricing.faq} items={pricing.faq.items} />
      </Section>
      <CtaBand copy={copy} />
    </>
  );
}
