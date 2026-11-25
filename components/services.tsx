import { SectionHeading } from "@/components/section-heading";
import type { SiteCopy } from "@/content/types";

export function Services({ copy }: { copy: SiteCopy }) {
  const { services } = copy;

  return (
    <section id="services" className="view-rise scroll-mt-20 py-16 md:py-24 lg:py-32">
      <div className="mx-auto w-full max-w-[80rem] px-4 md:px-6 lg:px-8">
        <SectionHeading eyebrow={services.eyebrow} title={services.title} lede={services.lede} />
        <aside className="mt-10 rounded-2xl border border-[#c6f6dd] bg-[#e7fbf0] p-6 md:p-10">
          <p className="text-xs font-medium tracking-[0.08em] text-link uppercase">{services.cantoneseEyebrow}</p>
          <h3 className="mt-3 max-w-[16ch] text-[34px] leading-[41px] font-medium tracking-[-0.03em] text-balance md:text-[44px] md:leading-[48px]">
            {services.cantoneseTitle}
          </h3>
          <p className="mt-4 max-w-[46rem] text-lg leading-7">{services.cantoneseBody}</p>
        </aside>
        <ul className="mt-4 grid gap-4 sm:grid-cols-2">
          {services.offerings.map((offering, index) => (
            <li
              key={offering.title}
              className="rounded-xl border border-line bg-surface p-6 shadow-e1 transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-e2 motion-reduce:transform-none"
            >
              <p className="text-sm font-medium text-accent tabular-nums">{String(index + 1).padStart(2, "0")}</p>
              <h3 className="mt-3 text-xl leading-7 font-medium tracking-[-0.02em]">{offering.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{offering.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
