import { notFound } from "next/navigation";
import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/section";
import { SectionHeading } from "@/components/section-heading";
import { ServiceDetail } from "@/components/service-card";
import { getCopy, isLocale, pageMetadata } from "@/content/get-copy";
import { JsonLd, breadcrumbJsonLd } from "@/lib/json-ld";

export async function generateMetadata({ params }: PageProps<"/[lang]/services">) {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  return pageMetadata(lang, "/services", getCopy(lang).services.meta);
}

export default async function ServicesPage({ params }: PageProps<"/[lang]/services">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const copy = getCopy(lang);
  const { services } = copy;

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(copy, "/services", services.meta.title)} />
      <PageHero
        hero={services.hero}
        locale={lang}
        aside={
          <nav aria-label={services.hero.eyebrow} className="rounded-xl border border-line bg-surface p-2 shadow-e1">
            <ol>
              {services.items.map((service, index) => (
                <li key={service.id}>
                  <a
                    href={`#${service.id}`}
                    className="flex min-h-11 items-center gap-3 rounded-lg px-3 text-base font-medium hover:bg-subtle"
                  >
                    <span className="text-sm text-accent tabular-nums">{String(index + 1).padStart(2, "0")}</span>
                    {service.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        }
      />
      <Section tone="canvas" reveal={false}>
        <ol className="space-y-4">
          {services.items.map((service, index) => (
            <li key={service.id} className="view-rise">
              <ServiceDetail service={service} index={index + 1} includesLabel={services.includesLabel} />
            </li>
          ))}
        </ol>
        <p className="mt-8 max-w-[70ch] border-t border-line pt-8 text-base leading-7 text-pretty text-muted">
          {services.danNote}
        </p>
      </Section>
      <Section>
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-6">
            <SectionHeading eyebrow={services.stack.eyebrow} title={services.stack.title} lede={services.stack.lede} />
          </div>
          <ul className="flex flex-wrap gap-2 lg:col-span-6 lg:justify-end">
            {services.stack.items.map((item) => (
              <li
                key={item}
                className="rounded-full border border-line-strong bg-surface px-4 py-2 text-base font-medium"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Section>
      <CtaBand copy={copy} />
    </>
  );
}
