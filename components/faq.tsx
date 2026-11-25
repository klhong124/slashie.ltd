import { SectionHeading } from "@/components/section-heading";
import type { Faq as FaqItem, SectionIntro } from "@/content/types";

export function Faq({ intro, items }: { intro: SectionIntro; items: FaqItem[] }) {
  return (
    <div className="grid gap-10 lg:grid-cols-12">
      <div className="lg:col-span-4">
        <SectionHeading eyebrow={intro.eyebrow} title={intro.title} lede={intro.lede} />
      </div>
      <ul className="divide-y divide-line border-y border-line lg:col-span-8">
        {items.map((item) => (
          <li key={item.question}>
            <details className="faq group">
              <summary className="flex min-h-16 cursor-pointer items-center justify-between gap-6 py-5 text-lg leading-7 font-medium tracking-[-0.01em] hover:text-link">
                {item.question}
                <span
                  aria-hidden="true"
                  className="relative size-5 shrink-0 text-accent before:absolute before:inset-x-0 before:top-1/2 before:h-[1.5px] before:-translate-y-1/2 before:bg-current after:absolute after:inset-y-0 after:left-1/2 after:w-[1.5px] after:-translate-x-1/2 after:bg-current after:transition-transform after:duration-200 group-open:after:scale-y-0 motion-reduce:after:transition-none"
                />
              </summary>
              <p className="max-w-[62ch] pb-6 text-base leading-7 text-pretty text-muted">{item.answer}</p>
            </details>
          </li>
        ))}
      </ul>
    </div>
  );
}
