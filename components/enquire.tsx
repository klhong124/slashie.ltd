import { company } from "@/content/company";
import type { SiteCopy } from "@/content/types";

export function Enquire({ copy }: { copy: SiteCopy }) {
  return (
    <section id="enquire" className="view-rise scroll-mt-20 py-20 md:py-28 lg:py-36">
      <div className="mx-auto w-full max-w-[80rem] px-4 md:px-6 lg:px-8">
        <h2 className="max-w-[12ch] text-[44px] leading-[1.05] font-medium tracking-[-0.04em] text-balance md:text-[72px] md:leading-[1]">
          {copy.enquire.title}
        </h2>
        <p className="mt-6 max-w-[36rem] text-lg leading-7 text-muted">{copy.enquire.body}</p>
        <a
          href={`mailto:${company.email}?subject=${encodeURIComponent(copy.locale === "zh-hk" ? "網頁與前端查詢" : "Web and frontend enquiry")}`}
          className="mt-8 inline-flex min-h-[52px] items-center justify-center rounded-full bg-action px-6 text-base font-medium text-ink transition-[transform,background-color] duration-150 hover:bg-action-hover active:scale-[0.97] motion-reduce:transform-none"
        >
          {company.email}
        </a>
      </div>
    </section>
  );
}
