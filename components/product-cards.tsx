import Image from "next/image";
import { Arrow } from "@/components/button-link";
import { Check, Eyebrow } from "@/components/section";
import type { SiteCopy } from "@/content/types";

type Products = SiteCopy["products"];

function OutboundLink({ href, children }: { href: string; children: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group/link inline-flex min-h-11 items-center gap-1.5 text-base font-medium text-link underline-offset-4 hover:underline"
    >
      {children}
      <Arrow />
    </a>
  );
}

export function SlashieCard({
  slashie,
  detailed = false,
  headingLevel = "h3",
}: {
  slashie: Products["slashie"];
  detailed?: boolean;
  headingLevel?: "h2" | "h3";
}) {
  const Heading = headingLevel;
  return (
    <article className="relative overflow-hidden rounded-2xl border border-line bg-surface p-6 shadow-e1 md:p-10">
      <div aria-hidden="true" className="product-glow pointer-events-none absolute inset-0" />
      <div className="relative grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <div className="flex items-center gap-3">
            <Image src="/brand/slashie-mark.svg" alt="" width={36} height={36} className="size-9" />
            <Heading className="text-2xl font-medium tracking-[-0.025em]">{slashie.name}</Heading>
          </div>
          <p className="mt-6 max-w-[22ch] text-[28px] leading-[1.15] font-medium tracking-[-0.03em] text-balance md:text-[36px]">
            {slashie.tagline}
          </p>
          <p className="mt-5 max-w-[52ch] text-lg leading-7 text-pretty text-muted">{slashie.summary}</p>
          <p className="mt-3 text-base font-medium">{slashie.category}</p>
          <div className="mt-6">
            <OutboundLink href="https://slashie.app">{slashie.link}</OutboundLink>
          </div>
        </div>
        <ul className="space-y-3 lg:col-span-5">
          {slashie.points.map((point) => (
            <li key={point.title} className="rounded-xl border border-line bg-surface/80 p-5 backdrop-blur-sm">
              <p className="flex gap-3 text-base font-medium">
                <Check />
                {point.title}
              </p>
              {detailed ? <p className="mt-1.5 pl-7 text-sm leading-6 text-muted">{point.body}</p> : null}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export function SlashieHowItWorks({ slashie }: { slashie: Products["slashie"] }) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {[slashie.customers, slashie.workers].map((list) => (
        <div key={list.title} className="rounded-xl border border-line bg-surface p-6 shadow-e1 md:p-8">
          <Eyebrow>{list.title}</Eyebrow>
          <ol className="mt-5 space-y-4">
            {list.steps.map((step, index) => (
              <li key={step} className="flex gap-4 text-base leading-6">
                <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-[#e7fbf0] text-sm font-medium text-link tabular-nums">
                  {index + 1}
                </span>
                <span className="pt-0.5">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      ))}
    </div>
  );
}

export function DanCard({ dan, headingLevel = "h3" }: { dan: Products["dan"]; headingLevel?: "h2" | "h3" }) {
  const Heading = headingLevel;
  return (
    <article className="flex flex-col justify-between gap-6 rounded-2xl border border-line bg-subtle p-6 md:flex-row md:items-center md:p-8">
      <div>
        <Eyebrow>{dan.kicker}</Eyebrow>
        <Heading className="mt-2 text-2xl font-medium tracking-[-0.025em]">{dan.name}</Heading>
        <p className="mt-2 max-w-[52ch] text-base leading-6 text-muted">{dan.summary}</p>
      </div>
      <OutboundLink href="https://dan.partners">{dan.link}</OutboundLink>
    </article>
  );
}
