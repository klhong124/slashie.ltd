import { SectionHeading } from "@/components/section-heading";
import type { SiteCopy } from "@/content/types";

export function Process({ copy }: { copy: SiteCopy }) {
  const { process } = copy;

  return (
    <section id="process" className="view-rise scroll-mt-20 py-16 md:py-24 lg:py-32">
      <div className="mx-auto w-full max-w-[80rem] px-4 md:px-6 lg:px-8">
        <SectionHeading eyebrow={process.eyebrow} title={process.title} lede={process.lede} />
        <ol className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {process.steps.map((step, index) => (
            <li key={step.title} className="bg-surface p-6 md:p-8">
              <p className="text-[40px] leading-none font-medium tracking-[-0.04em] text-action">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-6 text-xl leading-7 font-medium tracking-[-0.02em]">{step.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
