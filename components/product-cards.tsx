import Image from "next/image";
import Link from "next/link";
import { Bodoni_Moda, IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
import localFont from "next/font/local";
import { Arrow } from "@/components/button-link";
import { Check, Eyebrow } from "@/components/section";
import { localeHref } from "@/content/get-copy";
import type { Action, Locale, SiteCopy } from "@/content/types";

const danSans = IBM_Plex_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dan-sans",
});

const danMark = Bodoni_Moda({
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz"],
  variable: "--font-dan-mark",
});

const danMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-dan-mono",
});

const danCjk = localFont({
  src: "../fonts/noto-sans-tc-dan.woff2",
  weight: "400 600",
  display: "swap",
  variable: "--font-dan-cjk",
  preload: false,
});

const danFonts = `${danSans.variable} ${danCjk.variable} ${danMark.variable} ${danMono.variable}`;

type Products = SiteCopy["products"];

function OutboundLink({ href, children, newTab }: { href: string; children: string; newTab: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group/link inline-flex min-h-11 items-center gap-1.5 text-base font-medium text-link underline-offset-4 hover:underline"
    >
      {children}
      <Arrow />
      <span className="sr-only"> ({newTab})</span>
    </a>
  );
}

function PricingMention({ text, newTab }: { text: string; newTab: string }) {
  const token = "slashie.app/pricing";
  const index = text.indexOf(token);
  if (index === -1) return text;
  return (
    <>
      {text.slice(0, index)}
      <a
        href={`https://${token}`}
        target="_blank"
        rel="noopener noreferrer"
        className="underline underline-offset-4 hover:text-ink"
      >
        {token}
        <span className="sr-only"> ({newTab})</span>
      </a>
      {text.slice(index + token.length)}
    </>
  );
}

export function SlashieCard({
  slashie,
  detailed = false,
  headingLevel = "h3",
  more,
  locale,
  newTab,
}: {
  slashie: Products["slashie"];
  detailed?: boolean;
  headingLevel?: "h2" | "h3";
  more?: Action;
  locale: Locale;
  newTab: string;
}) {
  const Heading = headingLevel;
  const points = detailed
    ? slashie.points
    : slashie.highlights.map((title) => ({ title, body: "" }));

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
          <p className="mt-3 max-w-[52ch] text-sm leading-6 text-muted">{slashie.category}</p>
          <div className="mt-6 flex flex-col items-start gap-1 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-6">
            <OutboundLink href="https://slashie.app" newTab={newTab}>
              {slashie.link}
            </OutboundLink>
            {more ? (
              <Link
                href={localeHref(locale, more.href)}
                className="group/link inline-flex min-h-11 items-center gap-1.5 text-base font-medium text-link underline-offset-4 hover:underline"
              >
                {more.label}
                <Arrow />
              </Link>
            ) : null}
          </div>
        </div>
        <ul className="space-y-3 lg:col-span-5">
          {points.map((point) => (
            <li key={point.title} className="rounded-xl border border-line bg-surface/80 p-5 backdrop-blur-sm">
              <p className="flex gap-3 text-base font-medium">
                <Check />
                {point.title}
              </p>
              {detailed && point.body ? (
                <p className="mt-1.5 pl-7 text-sm leading-6 text-muted">
                  <PricingMention text={point.body} newTab={newTab} />
                </p>
              ) : null}
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

function DanButton({
  href,
  children,
  tone,
  locale,
  newTab,
}: {
  href: string;
  children: string;
  tone: "seal" | "ink";
  locale: Locale;
  newTab: string;
}) {
  const className =
    tone === "seal"
      ? "inline-flex min-h-12 items-center justify-center border-[3px] border-[#1B1916] bg-[#B83A2E] px-5 text-base font-medium text-white transition-colors duration-150 hover:bg-[#902D24]"
      : "inline-flex min-h-12 items-center justify-center border-[3px] border-[#1B1916] bg-transparent px-5 text-base font-medium text-[#1B1916] transition-colors duration-150 hover:bg-[#1B1916] hover:text-white";

  if (href.startsWith("/")) {
    return (
      <Link href={localeHref(locale, href)} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
      <span className="sr-only"> ({newTab})</span>
    </a>
  );
}

export function DanCard({
  dan,
  variant,
  headingLevel = "h3",
  more,
  locale,
  newTab,
}: {
  dan: Products["dan"];
  variant: "home" | "detail";
  headingLevel?: "h2" | "h3";
  more?: Action;
  locale: Locale;
  newTab: string;
}) {
  const Heading = headingLevel;
  const sublabel = variant === "home" ? dan.homeSublabel : dan.sublabel;
  const paragraphs = variant === "home" ? [dan.homeBody] : dan.paragraphs;

  return (
    <article className={`dan-panel ${danFonts} p-6 md:p-10`}>
      <div className="border-b-[3px] border-dashed border-[#1B1916] pb-6">
        <div className="flex items-center gap-4">
          <Image src="/brand/dan-mark.svg" alt="" width={56} height={56} className="size-12 shrink-0 md:size-14" />
          <div>
            <p className="dan-wordmark text-[48px] leading-none md:text-[64px]">{dan.wordmark}</p>
            <p className="mt-2 max-w-[40ch] text-base leading-6">{sublabel}</p>
          </div>
        </div>
        <p className="mt-5 flex flex-wrap items-baseline gap-x-2 text-sm leading-6">
          <span lang="zh-Hant">{dan.dictionary.character}</span>
          <span className="dan-mono">{dan.dictionary.reading}</span>
          <span aria-hidden="true">·</span>
          <span>{dan.dictionary.pos}</span>
          <span aria-hidden="true">·</span>
          <span>{dan.dictionary.gloss}</span>
        </p>
      </div>
      <Heading className="mt-6 max-w-[18ch] text-[30px] leading-[1.2] font-medium md:text-[40px]">
        {dan.title}
      </Heading>
      <div className="mt-5 max-w-[68ch] space-y-4 text-base leading-7">
        {paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      <p className="mt-6 max-w-[68ch] border-l-[3px] border-[#B83A2E] bg-[#FFFEF8] px-4 py-3 text-base leading-7">
        {dan.status}
      </p>
      <div className="mt-6 flex flex-col items-start gap-3 sm:flex-row sm:flex-wrap">
        <DanButton href="https://dan.partners" tone="seal" locale={locale} newTab={newTab}>
          {dan.link}
        </DanButton>
        {variant === "home" && more ? (
          <DanButton href={more.href} tone="ink" locale={locale} newTab={newTab}>
            {more.label}
          </DanButton>
        ) : null}
        {variant === "detail" ? (
          <DanButton href={dan.contact.href} tone="ink" locale={locale} newTab={newTab}>
            {dan.contact.label}
          </DanButton>
        ) : null}
      </div>
    </article>
  );
}
