import { ButtonLink } from "@/components/button-link";
import { Check } from "@/components/section";
import type { Tier } from "@/content/types";

export function TierCard({
  tier,
  featuredLabel,
  cta,
}: {
  tier: Tier;
  featuredLabel: string;
  cta: { href: string; label: string };
}) {
  return (
    <article
      className={`relative flex h-full flex-col rounded-2xl border bg-surface p-6 transition-[transform,box-shadow] duration-200 ease-[cubic-bezier(0.2,0,0,1)] hover:-translate-y-0.5 hover:shadow-e2 motion-reduce:transform-none md:p-7 ${
        tier.featured ? "border-action shadow-e2 ring-1 ring-action" : "border-line shadow-e1"
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-xl leading-7 font-medium tracking-[-0.02em]">{tier.name}</h3>
        {tier.featured ? (
          <span className="shrink-0 rounded-full bg-[#e7fbf0] px-2.5 py-1 text-xs font-medium text-link">
            {featuredLabel}
          </span>
        ) : null}
      </div>
      <p className="mt-2 text-base leading-6 text-pretty text-muted">{tier.audience}</p>
      <p className="mt-6 flex items-baseline gap-2">
        <span className="text-[40px] leading-none font-medium tracking-[-0.04em]">{tier.price}</span>
        <span className="text-sm text-subtle-text">{tier.cadence}</span>
      </p>
      <ul className="mt-6 flex-1 space-y-3 border-t border-line pt-6">
        {tier.includes.map((item) => (
          <li key={item} className="flex gap-3 text-base leading-6">
            <Check />
            {item}
          </li>
        ))}
      </ul>
      <ButtonLink
        href={cta.href}
        size="sm"
        variant={tier.featured ? "primary" : "secondary"}
        className="mt-8 w-full"
      >
        {cta.label}
      </ButtonLink>
    </article>
  );
}
