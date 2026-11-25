import { ExternalLink } from "@/components/external-link";
import { SectionHeading } from "@/components/section-heading";
import type { SiteCopy } from "@/content/types";

export function About({ copy }: { copy: SiteCopy }) {
  const { about } = copy;

  return (
    <section id="about" className="view-rise scroll-mt-20 py-16 md:py-24 lg:py-32">
      <div className="mx-auto grid w-full max-w-[80rem] gap-12 px-4 md:px-6 lg:grid-cols-12 lg:px-8">
        <div className="lg:col-span-5">
          <SectionHeading eyebrow={about.eyebrow} title={about.title} />
        </div>
        <div className="max-w-[46rem] space-y-5 text-lg leading-8 text-muted lg:col-span-7">
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <p>
            {about.founderBefore}{" "}
            <ExternalLink
              href={about.founderHref}
              className="font-medium text-link underline decoration-transparent underline-offset-4 hover:decoration-link"
            >
              {about.founderName}
            </ExternalLink>
            {about.founderAfter}
          </p>
          <h3 className="pt-4 text-[28px] leading-9 font-medium tracking-[-0.03em] text-ink">{about.missionTitle}</h3>
          <p>{about.missionBody}</p>
        </div>
      </div>
    </section>
  );
}
