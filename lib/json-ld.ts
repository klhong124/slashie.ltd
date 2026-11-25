import { founderLine } from "@/content/about";
import { company, registeredOffice } from "@/content/company";
import { site } from "@/content/site";

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: company.name,
  legalName: company.legalName,
  url: site.url,
  email: company.email,
  description: site.description,
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
    name: founderLine.name,
    url: founderLine.href,
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
