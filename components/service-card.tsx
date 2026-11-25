import { Check, Index } from "@/components/section";
import type { Service } from "@/content/types";

const cardClass =
  "rounded-xl border border-line bg-surface shadow-e1 transition-[transform,box-shadow,border-color] duration-200 ease-[cubic-bezier(0.2,0,0,1)] hover:-translate-y-0.5 hover:border-line-strong hover:shadow-e2 motion-reduce:transform-none";

/** Compact card used on the home page. */
export function ServiceSummary({ service, index }: { service: Service; index: number }) {
  return (
    <article className={`${cardClass} flex h-full flex-col p-6`}>
      <Index value={index} />
      <h3 className="mt-4 text-xl leading-7 font-medium tracking-[-0.02em]">{service.title}</h3>
      <p className="mt-2 text-base leading-6 text-pretty text-muted">{service.outcome}</p>
    </article>
  );
}

/** Full card used on the services page. */
export function ServiceDetail({
  service,
  index,
  includesLabel,
}: {
  service: Service;
  index: number;
  includesLabel: string;
}) {
  return (
    <article id={service.id} className={`${cardClass} scroll-mt-24 grid gap-8 p-6 md:grid-cols-12 md:p-8`}>
      <div className="md:col-span-7">
        <Index value={index} />
        <h2 className="mt-4 text-[26px] leading-8 font-medium tracking-[-0.025em] text-balance md:text-[30px] md:leading-9">
          {service.title}
        </h2>
        <p className="mt-3 inline-flex rounded-lg bg-[#e7fbf0] px-3 py-2 text-base leading-6 font-medium text-[#053d27]">
          {service.outcome}
        </p>
        <p className="mt-4 max-w-[52ch] text-base leading-7 text-pretty text-muted">{service.body}</p>
      </div>
      <div className="md:col-span-5 md:border-l md:border-line md:pl-8">
        <p className="text-xs font-medium tracking-[0.08em] text-subtle-text uppercase">{includesLabel}</p>
        <ul className="mt-4 space-y-3">
          {service.includes.map((item) => (
            <li key={item} className="flex gap-3 text-base leading-6">
              <Check />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
