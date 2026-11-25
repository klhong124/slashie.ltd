import { ExternalLink } from "@/components/external-link";
import { SectionHeading } from "@/components/section-heading";
import { aboutIntro, founderLine, mission } from "@/content/about";

export function About() {
  return (
    <section id="about" className="scroll-mt-20 py-14 md:py-20 lg:py-24 xl:py-32">
      <div className="mx-auto w-full max-w-[80rem] px-4 md:px-6 lg:px-8">
        <SectionHeading eyebrow={aboutIntro.eyebrow} title={aboutIntro.title} />
        <div className="mt-6 max-w-[60ch] space-y-4 text-lg leading-7 text-muted">
          {aboutIntro.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <p>
            {founderLine.before}{" "}
            <ExternalLink
              href={founderLine.href}
              className="font-medium text-link underline decoration-transparent underline-offset-4 hover:decoration-link"
            >
              {founderLine.name}
            </ExternalLink>
            .
          </p>
        </div>
        <div className="mt-14 max-w-[60ch] border-t border-line pt-10">
          <h3 className="text-[34px] leading-[41px] font-medium tracking-[-0.03em]">{mission.title}</h3>
          <p className="mt-4 text-lg leading-7 text-muted">{mission.body}</p>
        </div>
      </div>
    </section>
  );
}
