/**
 * Public company facts.
 * Registered office is the address Slashie Ltd already publishes on
 * https://slashie.app/terms and the Companies House record for 17276315.
 */
export const company = {
  name: "Slashie Ltd",
  legalName: "SLASHIE LTD",
  number: "17276315",
  jurisdiction: "England and Wales",
  email: "hello@slashie.ltd",
  url: "https://slashie.ltd",
  registerUrl:
    "https://find-and-update.company-information.service.gov.uk/company/17276315",
  office: {
    street: "66 Paul Street",
    locality: "London",
    postalCode: "EC2A 4NA",
    country: "GB",
  },
  linkedin: "https://www.linkedin.com/company/slashie-app",
  github: "https://github.com/SlashieApp/web",
  githubOrg: "https://github.com/SlashieApp",
  /**
   * TODO(owner): Add a real WhatsApp Business number in international format
   * without "+" or spaces (e.g. "447..."). WhatsApp buttons render only when set.
   */
  whatsapp: "" as string,
} as const;

export const whatsappUrl = company.whatsapp ? `https://wa.me/${company.whatsapp}` : null;

export const registeredOffice = `${company.office.street}, ${company.office.locality}, ${company.office.postalCode}`;

export const registrationLine = `${company.name} is a company registered in ${company.jurisdiction}. Company no. ${company.number}. Registered office: ${registeredOffice}.`;
