import Link from "next/link";
import { ExternalLink } from "@/components/external-link";
import { Logo } from "@/components/logo";
import { Eyebrow } from "@/components/section";
import { company } from "@/content/company";
import { localeHref } from "@/content/get-copy";
import type { SiteCopy } from "@/content/types";

export function Footer({ copy }: { copy: SiteCopy }) {
  const { chrome, locale } = copy;
  const { footer } = chrome;

  return (
    <footer className="border-t border-line bg-canvas py-14">
      <div className="mx-auto grid w-full max-w-[80rem] gap-10 px-4 md:grid-cols-12 md:px-6 lg:px-8">
        <div className="md:col-span-5">
          <Logo className="h-7" />
          <p className="mt-4 max-w-sm text-base leading-6 text-pretty text-muted">{footer.tagline}</p>
          <a
            href={`mailto:${company.email}`}
            className="mt-4 inline-flex min-h-11 items-center text-base font-medium text-link underline underline-offset-4"
          >
            {company.email}
          </a>
        </div>
        <nav aria-label={footer.pages} className="md:col-span-2">
          <Eyebrow>{footer.pages}</Eyebrow>
          <ul className="mt-3 space-y-1">
            {chrome.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={localeHref(locale, item.href)}
                  className="inline-flex min-h-9 items-center text-sm hover:text-link"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="md:col-span-2">
          <Eyebrow>{footer.products}</Eyebrow>
          <ul className="mt-3 space-y-1 text-sm">
            <li>
              <ExternalLink newTab={chrome.newTab} href="https://slashie.app" className="inline-flex min-h-9 items-center hover:text-link">
                slashie.app
              </ExternalLink>
            </li>
            <li>
              <ExternalLink newTab={chrome.newTab} href="https://dan.partners" className="inline-flex min-h-9 items-center hover:text-link">
                dan.partners
              </ExternalLink>
            </li>
          </ul>
        </div>
        <div className="md:col-span-3">
          <Eyebrow>{footer.contact}</Eyebrow>
          <ul className="mt-3 space-y-1 text-sm">
            <li>
              <ExternalLink newTab={chrome.newTab} href={company.linkedin} className="inline-flex min-h-9 items-center hover:text-link">
                LinkedIn
              </ExternalLink>
            </li>
            <li>
              <ExternalLink newTab={chrome.newTab} href={company.github} className="inline-flex min-h-9 items-center hover:text-link">
                GitHub
              </ExternalLink>
            </li>
            <li>
              <ExternalLink
                href={company.registerUrl}
                className="inline-flex min-h-9 items-center hover:text-link"
              >
                {footer.register}
              </ExternalLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-12 flex w-full max-w-[80rem] flex-col gap-3 border-t border-line px-4 pt-6 text-xs leading-5 text-subtle-text md:flex-row md:justify-between md:px-6 lg:px-8">
        <p className="max-w-3xl">{footer.registration}</p>
        <p className="flex shrink-0 gap-4">
          <Link href={localeHref(locale, "/privacy")} className="hover:text-link">
            {footer.privacy}
          </Link>
          <span>© 2026 {company.name}</span>
        </p>
      </div>
    </footer>
  );
}
