import { servicesEnquiry } from "@/content/services";

export function Enquire() {
  return (
    <section id="enquire" className="scroll-mt-20 py-14 md:py-20 lg:py-24 xl:py-32">
      <div className="mx-auto flex w-full max-w-[40rem] flex-col items-center px-4 text-center md:px-6">
        <h2 className="text-[34px] leading-[41px] font-medium tracking-[-0.03em] text-balance md:text-[44px] md:leading-[48px] md:tracking-[-0.035em]">
          Enquire
        </h2>
        <p className="mt-4 text-lg leading-7 text-pretty text-muted">{servicesEnquiry.body}</p>
        <a
          href={servicesEnquiry.href}
          className="mt-8 inline-flex min-h-[52px] items-center justify-center rounded-full bg-action px-6 text-base font-medium text-ink transition-transform duration-100 active:scale-[0.97] motion-reduce:transform-none hover:bg-action-hover"
        >
          {servicesEnquiry.email}
        </a>
      </div>
    </section>
  );
}
