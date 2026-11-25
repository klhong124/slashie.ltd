import { ExternalLink } from "@/components/external-link";
import { company } from "@/content/company";
import type { SiteCopy } from "@/content/types";

export function Footer({ copy }: { copy: SiteCopy }) {
  const { footer } = copy;

  return (
    <footer className="border-t border-line py-12">
      <div className="mx-auto grid w-full max-w-[80rem] gap-10 px-4 md:grid-cols-12 md:px-6 lg:px-8">
        <div className="md:col-span-6">
          <p className="text-lg font-medium tracking-[-0.015em]">Slashie Ltd</p>
          <p className="mt-3 max-w-md text-sm leading-6 text-muted">{footer.registration}</p>
          <p className="mt-3 text-sm">
            <ExternalLink href={company.registerUrl} className="text-link underline underline-offset-4">
              {footer.register}
            </ExternalLink>
          </p>
          <address className="mt-3 text-sm not-italic">
            <a href={`mailto:${company.email}`} className="text-link underline underline-offset-4">
              {company.email}
            </a>
          </address>
        </div>
        <nav aria-label={footer.onThisPage} className="md:col-span-3">
          <p className="text-xs font-medium tracking-[0.08em] text-subtle-text uppercase">{footer.onThisPage}</p>
          <ul className="mt-3 space-y-2">
            {copy.nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="text-sm hover:text-link">
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a href="#enquire" className="text-sm hover:text-link">
                {copy.enquireLabel}
              </a>
            </li>
          </ul>
        </nav>
        <div className="md:col-span-3">
          <p className="text-xs font-medium tracking-[0.08em] text-subtle-text uppercase">{footer.elsewhere}</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <ExternalLink href="https://slashie.app" className="hover:text-link">
                slashie.app
              </ExternalLink>
            </li>
            <li>
              <ExternalLink href="https://dan.partners" className="hover:text-link">
                dan.partners
              </ExternalLink>
            </li>
            <li>
              <ExternalLink href={company.github} className="hover:text-link">
                {footer.github}
              </ExternalLink>
            </li>
            <li>
              <ExternalLink href={company.linkedin} className="hover:text-link">
                {footer.linkedin}
              </ExternalLink>
            </li>
          </ul>
        </div>
      </div>
      <p className="mx-auto mt-10 w-full max-w-[80rem] px-4 text-xs text-subtle-text md:px-6 lg:px-8">
        © 2026 {company.name}
      </p>
    </footer>
  );
}
