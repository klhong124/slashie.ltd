import { ButtonLink } from "@/components/button-link";
import { SectionHeading } from "@/components/section-heading";
import { offerings, servicesEnquiry, servicesIntro } from "@/content/services";

export function Services() {
  return (
    <section id="services" className="scroll-mt-20 py-14 md:py-20 lg:py-24 xl:py-32">
      <div className="mx-auto w-full max-w-[80rem] px-4 md:px-6 lg:px-8">
        <SectionHeading
          eyebrow={servicesIntro.eyebrow}
          title={servicesIntro.title}
          lede={servicesIntro.lede}
        />
        <ul className="mt-10 grid gap-4 sm:grid-cols-2">
          {offerings.map((offering) => (
            <li
              key={offering.title}
              className="rounded-xl border border-line bg-surface p-6 shadow-e1 transition-shadow duration-200 hover:shadow-e2"
            >
              <h3 className="text-lg leading-6 font-medium tracking-[-0.015em]">{offering.title}</h3>
              <p className="mt-2 text-sm leading-5 text-muted">{offering.body}</p>
            </li>
          ))}
        </ul>
        <div className="mt-10 flex flex-col items-start gap-4 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-md text-base leading-6 text-muted">{servicesEnquiry.body}</p>
          <ButtonLink href="#enquire">{servicesEnquiry.label}</ButtonLink>
        </div>
      </div>
    </section>
  );
}
