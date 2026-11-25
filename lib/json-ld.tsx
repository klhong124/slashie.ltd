import { company, registeredOffice } from "@/content/company";
import { localeHref } from "@/content/get-copy";
import type { Faq, SiteCopy } from "@/content/types";

const orgId = `${company.url}/#organization`;

const absolute = (path: string) => `${company.url}${path === "/" ? "" : path}`;

/** Company-wide graph: the business, its services and the website. */
export function organizationJsonLd(copy: SiteCopy) {
  const inLanguage = copy.htmlLang;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "ProfessionalService"],
        "@id": orgId,
        name: company.name,
        legalName: company.legalName,
        url: company.url,
        logo: `${company.url}/brand/slashie-mark.svg`,
        image: `${company.url}/brand/slashie-logo-light.svg`,
        email: company.email,
        description: copy.home.meta.description,
        slogan: copy.home.hero.title,
        knowsLanguage: ["en-GB", "yue", "zh-Hant-HK"],
        availableLanguage: [
          { "@type": "Language", name: "English", alternateName: "en" },
          { "@type": "Language", name: "Cantonese", alternateName: "yue" },
          { "@type": "Language", name: "Traditional Chinese", alternateName: "zh-Hant" },
        ],
        areaServed: { "@type": "Country", name: "United Kingdom" },
        identifier: {
          "@type": "PropertyValue",
          propertyID: "UK Companies House number",
          value: company.number,
        },
        address: {
          "@type": "PostalAddress",
          streetAddress: company.office.street,
          addressLocality: company.office.locality,
          postalCode: company.office.postalCode,
          addressCountry: company.office.country,
        },
        location: { "@type": "Place", address: registeredOffice },
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "sales",
          email: company.email,
          areaServed: "GB",
          availableLanguage: ["English", "Cantonese"],
        },
        founder: {
          "@type": "Person",
          name: copy.team.founder.name,
          url: copy.team.founder.href,
        },
        brand: [
          { "@type": "Brand", name: "Slashie", url: "https://slashie.app" },
          { "@type": "Brand", name: "DanPartners", url: "https://dan.partners" },
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: copy.services.hero.eyebrow,
          itemListElement: copy.services.items.map((service) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: service.title,
              description: service.outcome,
              url: absolute(localeHref(copy.locale, `/services#${service.id}`)),
              areaServed: { "@type": "Country", name: "United Kingdom" },
              availableLanguage: ["en-GB", "yue", "zh-Hant-HK"],
              provider: { "@id": orgId },
            },
          })),
        },
        sameAs: [company.linkedin, company.githubOrg, company.registerUrl],
      },
      {
        "@type": "WebSite",
        "@id": `${company.url}/#website-${copy.locale}`,
        url: absolute(localeHref(copy.locale, "/")),
        name: company.name,
        inLanguage,
        publisher: { "@id": orgId },
      },
    ],
  };
}

export function faqJsonLd(items: Faq[], locale: SiteCopy["htmlLang"]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage: locale,
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}

export function breadcrumbJsonLd(copy: SiteCopy, path: string, name: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: company.name, item: absolute(localeHref(copy.locale, "/")) },
      { "@type": "ListItem", position: 2, name, item: absolute(localeHref(copy.locale, path)) },
    ],
  };
}

export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
