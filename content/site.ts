import { company } from "@/content/company";

export const site = {
  name: company.name,
  url: company.url,
  title: "Slashie Ltd",
  description:
    "Slashie Ltd is a UK company building products and providing web and frontend services. Home of Slashie and DanPartners.",
  locale: "en_GB",
} as const;

export const navigation = [
  { href: "#products", label: "Products" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
] as const;

export const enquire = {
  href: "#enquire",
  label: "Enquire",
} as const;
