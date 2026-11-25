import { company, registeredOffice } from "@/content/company";
import type { SiteCopy } from "@/content/types";

export function organizationJsonLd(copy: SiteCopy) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: company.name,
    legalName: company.legalName,
    url: company.url,
    email: company.email,
    description: copy.meta.description,
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
    founder: {
      "@type": "Person",
      name: copy.about.founderName,
      url: copy.about.founderHref,
    },
    brand: [
      { "@type": "Brand", name: "Slashie", url: "https://slashie.app" },
      { "@type": "Brand", name: "DanPartners", url: "https://dan.partners" },
    ],
    sameAs: [company.linkedin, company.githubOrg],
    location: {
      "@type": "Place",
      address: registeredOffice,
    },
  };
}
