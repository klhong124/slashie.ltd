import { ExternalLink } from "@/components/external-link";
import { SectionHeading } from "@/components/section-heading";
import { danPartners, productsIntro, slashie } from "@/content/products";

export function Products() {
  return (
    <section id="products" className="scroll-mt-20 py-14 md:py-20 lg:py-24 xl:py-32">
      <div className="mx-auto w-full max-w-[80rem] px-4 md:px-6 lg:px-8">
        <SectionHeading
          eyebrow={productsIntro.eyebrow}
          title={productsIntro.title}
          lede={productsIntro.lede}
        />
        <div className="mt-10 grid gap-4 lg:grid-cols-5">
          <article className="flex h-full flex-col rounded-xl border border-line bg-surface p-6 shadow-e1 transition-shadow duration-200 hover:shadow-e2 lg:col-span-3 md:p-8">
            <p className="text-xs font-medium tracking-[0.08em] text-accent uppercase">{slashie.name}</p>
            <h3 className="mt-3 text-2xl leading-8 font-medium tracking-[-0.02em] text-balance">
              {slashie.tagline}
            </h3>
            <p className="mt-4 max-w-prose text-base leading-6 text-ink">{slashie.summary}</p>
            <p className="mt-3 text-sm leading-5 text-muted">{slashie.category}</p>
            <ul className="mt-6 space-y-4 border-t border-line pt-4">
              {slashie.points?.map((point) => (
                <li key={point.title}>
                  <p className="text-sm font-medium">{point.title}</p>
                  <p className="mt-1 text-sm leading-5 text-muted">{point.body}</p>
                </li>
              ))}
            </ul>
            <ExternalLink
              href={slashie.href}
              className="mt-6 inline-flex min-h-11 items-center text-sm font-medium text-link underline decoration-transparent underline-offset-4 hover:decoration-link"
            >
              {slashie.linkLabel}
            </ExternalLink>
          </article>
          <article className="flex h-full flex-col justify-between rounded-xl border border-line bg-surface p-6 shadow-e1 transition-shadow duration-200 hover:shadow-e2 lg:col-span-2 md:p-8">
            <div>
              <p className="text-xs font-medium tracking-[0.08em] text-subtle-text uppercase">
                Also trading as
              </p>
              <h3 className="mt-3 text-[34px] leading-[41px] font-medium tracking-[-0.03em]">
                {danPartners.name}
              </h3>
              <p className="mt-4 leading-6 text-muted">{danPartners.summary}</p>
            </div>
            <ExternalLink
              href={danPartners.href}
              className="mt-8 inline-flex min-h-11 items-center text-sm font-medium text-link underline decoration-transparent underline-offset-4 hover:decoration-link"
            >
              {danPartners.linkLabel}
            </ExternalLink>
          </article>
        </div>
      </div>
    </section>
  );
}
