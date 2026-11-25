import { ExternalLink } from "@/components/external-link";
import { SectionHeading } from "@/components/section-heading";
import type { SiteCopy } from "@/content/types";

export function Products({ copy }: { copy: SiteCopy }) {
  const { products } = copy;

  return (
    <section id="products" className="view-rise scroll-mt-20 py-16 md:py-24 lg:py-32">
      <div className="mx-auto w-full max-w-[80rem] px-4 md:px-6 lg:px-8">
        <SectionHeading eyebrow={products.eyebrow} title={products.title} lede={products.lede} />
        <div className="mt-12 grid gap-4 lg:grid-cols-5">
          <article className="flex h-full flex-col rounded-xl border border-line bg-surface p-6 shadow-e1 transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-e2 motion-reduce:transform-none md:p-8 lg:col-span-3">
            <p className="text-xs font-medium tracking-[0.08em] text-accent uppercase">{products.slashieName}</p>
            <h3 className="mt-3 text-2xl leading-8 font-medium tracking-[-0.02em] text-balance md:text-[28px] md:leading-9">
              {products.tagline}
            </h3>
            <p className="mt-4 max-w-prose text-base leading-6">{products.summary}</p>
            <p className="mt-3 text-sm leading-5 text-muted">{products.category}</p>
            <ul className="mt-6 space-y-4 border-t border-line pt-5">
              {products.points.map((point) => (
                <li key={point.title}>
                  <p className="text-sm font-medium">{point.title}</p>
                  <p className="mt-1 text-sm leading-5 text-muted">{point.body}</p>
                </li>
              ))}
            </ul>
            <ExternalLink
              href="https://slashie.app"
              className="mt-6 inline-flex min-h-11 items-center text-sm font-medium text-link underline decoration-transparent underline-offset-4 hover:decoration-link"
            >
              {products.slashieLink}
            </ExternalLink>
          </article>
          <article className="flex h-full flex-col justify-between rounded-xl border border-line bg-surface p-6 shadow-e1 transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-e2 motion-reduce:transform-none md:p-8 lg:col-span-2">
            <div>
              <p className="text-xs font-medium tracking-[0.08em] text-subtle-text uppercase">{products.danKicker}</p>
              <h3 className="mt-3 text-[34px] leading-[41px] font-medium tracking-[-0.03em]">{products.danName}</h3>
              <p className="mt-4 leading-6 text-muted">{products.danSummary}</p>
            </div>
            <ExternalLink
              href="https://dan.partners"
              className="mt-8 inline-flex min-h-11 items-center text-sm font-medium text-link underline decoration-transparent underline-offset-4 hover:decoration-link"
            >
              {products.danLink}
            </ExternalLink>
          </article>
        </div>
      </div>
    </section>
  );
}
