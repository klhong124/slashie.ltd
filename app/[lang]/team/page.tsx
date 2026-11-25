import { notFound } from "next/navigation";
import { CtaBand } from "@/components/cta-band";
import { MemberCard } from "@/components/founder-card";
import { PageHero } from "@/components/page-hero";
import { Index, Section } from "@/components/section";
import { SectionHeading } from "@/components/section-heading";
import { getCopy, isLocale, pageMetadata } from "@/content/get-copy";
import { JsonLd, breadcrumbJsonLd } from "@/lib/json-ld";

export async function generateMetadata({ params }: PageProps<"/[lang]/team">) {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  return pageMetadata(lang, "/team", getCopy(lang).team.meta);
}

export default async function TeamPage({ params }: PageProps<"/[lang]/team">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const copy = getCopy(lang);
  const { team } = copy;

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(copy, "/team", team.meta.title)} />
      <PageHero hero={team.hero} locale={lang} />
      <Section tone="canvas">
        <SectionHeading eyebrow={team.founderSection.eyebrow} title={team.founderSection.title} />
        <div className="mt-12 space-y-4">
          <MemberCard member={team.founder} />
          {team.members.map((member) => (
            <MemberCard key={member.name} member={member} />
          ))}
        </div>
      </Section>
      <Section>
        <SectionHeading eyebrow={team.principles.eyebrow} title={team.principles.title} />
        <ul className="mt-12 grid gap-4 md:grid-cols-3">
          {team.principles.items.map((item, index) => (
            <li key={item.title} className="rounded-xl border border-line bg-surface p-6 shadow-e1">
              <Index value={index + 1} />
              <h3 className="mt-4 text-xl leading-7 font-medium tracking-[-0.02em]">{item.title}</h3>
              <p className="mt-2 text-base leading-6 text-pretty text-muted">{item.body}</p>
            </li>
          ))}
        </ul>
      </Section>
      <CtaBand copy={copy} />
    </>
  );
}
