import { ExternalLink } from "@/components/external-link";
import { company, registrationLine } from "@/content/company";
import { danPartners, slashie } from "@/content/products";
import { navigation } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t border-line py-12">
      <div className="mx-auto grid w-full max-w-[80rem] gap-10 px-4 md:grid-cols-12 md:px-6 lg:px-8">
        <div className="md:col-span-6">
          <p className="text-lg font-medium tracking-[-0.015em]">Slashie Ltd</p>
          <p className="mt-3 max-w-md text-sm leading-5 text-muted">{registrationLine}</p>
          <p className="mt-3 text-sm">
            <ExternalLink href={company.registerUrl} className="text-link underline underline-offset-4">
              Companies House record
            </ExternalLink>
          </p>
          <address className="mt-3 text-sm not-italic">
            <a href={`mailto:${company.email}`} className="text-link underline underline-offset-4">
              {company.email}
            </a>
          </address>
        </div>
        <nav aria-label="Footer" className="md:col-span-3">
          <p className="text-xs font-medium tracking-[0.08em] text-subtle-text uppercase">On this page</p>
          <ul className="mt-3 space-y-2">
            {navigation.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="text-sm hover:text-link">
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a href="#enquire" className="text-sm hover:text-link">
                Enquire
              </a>
            </li>
          </ul>
        </nav>
        <div className="md:col-span-3">
          <p className="text-xs font-medium tracking-[0.08em] text-subtle-text uppercase">Elsewhere</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <ExternalLink href={slashie.href} className="hover:text-link">
                slashie.app
              </ExternalLink>
            </li>
            <li>
              <ExternalLink href={danPartners.href} className="hover:text-link">
                dan.partners
              </ExternalLink>
            </li>
            <li>
              <ExternalLink href={company.github} className="hover:text-link">
                GitHub
              </ExternalLink>
            </li>
            <li>
              <ExternalLink href={company.linkedin} className="hover:text-link">
                LinkedIn
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
