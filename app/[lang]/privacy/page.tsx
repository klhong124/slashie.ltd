import { notFound } from "next/navigation";
import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/section";
import { getCopy, isLocale, pageMetadata } from "@/content/get-copy";
import { JsonLd, breadcrumbJsonLd } from "@/lib/json-ld";

export async function generateMetadata({ params }: PageProps<"/[lang]/privacy">) {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  return pageMetadata(lang, "/privacy", getCopy(lang).privacy.meta);
}

export default async function PrivacyPage({ params }: PageProps<"/[lang]/privacy">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const copy = getCopy(lang);
  const { privacy } = copy;

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(copy, "/privacy", privacy.meta.title)} />
      <PageHero hero={privacy.hero} locale={lang} />
      <Section tone="canvas">
        <div className="max-w-3xl space-y-4">
          {privacy.sections.map((section) => (
            <section key={section.title} className="rounded-xl border border-line bg-surface p-6 md:p-8">
              <h2 className="text-xl leading-7 font-medium tracking-[-0.02em]">{section.title}</h2>
              <p className="mt-3 text-base leading-7 text-pretty text-muted">{section.body}</p>
            </section>
          ))}
          <p className="pt-2 text-sm text-subtle-text">{privacy.updated}</p>
        </div>
      </Section>
    </>
  );
}
