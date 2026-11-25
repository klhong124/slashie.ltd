import { notFound } from "next/navigation";
import { Arrow } from "@/components/button-link";
import { EnquiryBuilder } from "@/components/enquiry-builder";
import { ExternalLink } from "@/components/external-link";
import { PageHero } from "@/components/page-hero";
import { Check, Eyebrow, Section } from "@/components/section";
import { company, registeredOffice } from "@/content/company";
import { getCopy, isLocale, pageMetadata } from "@/content/get-copy";
import { JsonLd, breadcrumbJsonLd } from "@/lib/json-ld";

export async function generateMetadata({ params }: PageProps<"/[lang]/contact">) {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  return pageMetadata(lang, "/contact", getCopy(lang).contact.meta);
}

export default async function ContactPage({ params }: PageProps<"/[lang]/contact">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const copy = getCopy(lang);
  const { contact } = copy;
  const mailto = `mailto:${company.email}?subject=${encodeURIComponent(contact.subject)}`;

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(copy, "/contact", contact.meta.title)} />
      <PageHero hero={contact.hero} locale={lang} />
      <Section tone="canvas">
        <div className="grid gap-4 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <EnquiryBuilder builder={contact.builder} subject={contact.subject} />
          </div>
          <div className="flex flex-col gap-4 lg:col-span-5">
            <a
              href={mailto}
              className="group/link relative overflow-hidden rounded-2xl bg-[#0c1310] p-6 text-white transition-transform duration-200 ease-[cubic-bezier(0.2,0,0,1)] hover:-translate-y-0.5 motion-reduce:transform-none md:p-8"
            >
              <div aria-hidden="true" className="cta-glow pointer-events-none absolute -top-1/2 right-[-20%] h-[200%] w-[80%]" />
              <Eyebrow tone="muted" className="relative">
                {contact.emailLabel}
              </Eyebrow>
              <p className="relative mt-3 flex items-center gap-3 text-[28px] leading-tight font-medium tracking-[-0.035em] break-all text-[#54dd9d] md:text-[34px]">
                {company.email}
                <Arrow className="size-6 shrink-0" />
              </p>
              <p className="relative mt-5 text-base leading-6 text-white/70">
                <span className="font-medium text-white">{contact.languages.title}</span> — {contact.languages.body}
              </p>
            </a>
            <div className="rounded-2xl border border-line bg-surface p-6 md:p-8">
              <Eyebrow>{contact.include.eyebrow}</Eyebrow>
              <h2 className="mt-3 text-xl font-medium tracking-[-0.02em]">{contact.include.title}</h2>
              <ul className="mt-5 space-y-3">
                {contact.include.items.map((item) => (
                  <li key={item} className="flex gap-3 text-base leading-6">
                    <Check />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-4 rounded-2xl border border-line bg-surface p-6 md:p-8">
          <Eyebrow>{contact.companyTitle}</Eyebrow>
          <dl className="mt-6 grid gap-6 text-base sm:grid-cols-3">
            <div>
              <dt className="text-sm text-subtle-text">{contact.numberLabel}</dt>
              <dd className="mt-1 font-medium">
                <ExternalLink
                  href={company.registerUrl}
                  newTab={copy.chrome.newTab}
                  className="text-link underline underline-offset-4"
                >
                  {company.number}
                </ExternalLink>
              </dd>
            </div>
            <div>
              <dt className="text-sm text-subtle-text">{contact.officeLabel}</dt>
              <dd className="mt-1 font-medium">{registeredOffice}</dd>
            </div>
            <div>
              <dt className="text-sm text-subtle-text">{contact.emailLabel}</dt>
              <dd className="mt-1 font-medium">
                <a href={`mailto:${company.email}`} className="text-link underline underline-offset-4">
                  {company.email}
                </a>
              </dd>
            </div>
          </dl>
        </div>
      </Section>
    </>
  );
}
