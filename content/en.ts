import type { SiteCopy } from "@/content/types";
import { company, registeredOffice } from "@/content/company";

/**
 * English copy. Slashie product lines below are locked and must stay verbatim.
 */
export const en: SiteCopy = {
  locale: "en",
  htmlLang: "en-GB",
  meta: {
    title: "Slashie Ltd — products, and the web around them",
    description:
      "Slashie Ltd is a UK company building products and providing web and frontend services. Clients can work with us in Cantonese or English. Home of Slashie and DanPartners.",
    ogLocale: "en_GB",
  },
  skip: "Skip to content",
  navAria: "Primary",
  menu: "Menu",
  close: "Close",
  nav: [
    { href: "#products", label: "Products" },
    { href: "#services", label: "Services" },
    { href: "#process", label: "How we work" },
    { href: "#about", label: "About" },
  ],
  enquireLabel: "Enquire",
  languageLabel: "Language",
  hero: {
    eyebrow: "England and Wales",
    title: "Products, and the web around them.",
    lede: "Slashie Ltd is a UK company. We build our own products, and we design and engineer web and frontend work for others.",
    primary: { href: "#products", label: "See the products" },
    secondary: { href: "#services", label: "Our services" },
    chips: ["Cantonese and English", "Web and frontend", "Our own products"],
  },
  products: {
    eyebrow: "01 — Products",
    title: "What we ship",
    lede: "Two products, both traded under Slashie Ltd.",
    slashieName: "Slashie",
    tagline:
      "Help around the corner. Post a task. Get local quotes. Pay directly.",
    summary:
      "Post a task, get quotes from nearby workers, pick who you want. You pay the worker directly — Slashie takes no cut of the job.",
    category: "We're a local services marketplace.",
    points: [
      {
        title: "Free for customers",
        body: "Posting a task, comparing quotes and choosing a worker cost nothing.",
      },
      {
        title: "Slashie Pro",
        body: "Every worker gets free quotes each month. Slashie Pro removes the limit.",
      },
      {
        title: "No cut of the job",
        body: "Customers pay workers directly, outside Slashie. We never take a share of the job.",
      },
    ],
    slashieLink: "Open slashie.app",
    danKicker: "Also trading as",
    danName: "DanPartners",
    /**
     * TODO(owner): Replace danSummary with approved DanPartners public copy.
     * Do not add product features, technology, customers, pricing or metrics
     * until that copy exists. Public site: https://dan.partners
     */
    danSummary: "A separate product that trades under Slashie Ltd.",
    danLink: "dan.partners",
  },
  services: {
    eyebrow: "02 — Services",
    title: "Web and frontend",
    lede: "Design and engineering sold by Slashie Ltd, from the first interface through a production release.",
    cantoneseEyebrow: "Languages",
    cantoneseTitle: "Work with us in Cantonese",
    cantoneseBody:
      "Our web and IT services support Cantonese, so clients can work with us in Cantonese as well as English. Same company, same work — you choose the language.",
    offerings: [
      {
        title: "Concept to production",
        body: "Design-focused web apps, taken from the first idea through a production release.",
      },
      {
        title: "React, Next.js, TypeScript",
        body: "Interface engineering on the modern React stack, with types at the boundary.",
      },
      {
        title: "Design systems",
        body: "Component libraries and shared tokens, documented in Storybook so design and engineering meet in one place.",
      },
      {
        title: "Animation-rich interfaces",
        body: "Motion that explains where you are and what changed, with a reduced-motion path.",
      },
      {
        title: "Ecommerce and CMS",
        body: "Platforms for catalogues, content and ordering that stay coherent as they grow.",
      },
      {
        title: "Figma to accessible UI",
        body: "Complex design files built into polished, responsive, accessible interfaces.",
      },
      {
        title: "Performance",
        body: "Speed treated as part of the build, not a pass that happens after launch.",
      },
    ],
  },
  process: {
    eyebrow: "03 — How we work",
    title: "From the first conversation",
    lede: "A web and frontend engagement with Slashie Ltd follows the same shape.",
    steps: [
      {
        title: "Hear the product",
        body: "We start with what it has to do, and who it is for.",
      },
      {
        title: "Decide the interface",
        body: "Structure, type and motion are settled before the build spreads.",
      },
      {
        title: "Build it",
        body: "React, Next.js and TypeScript, from the design through a production release.",
      },
      {
        title: "Leave it with you",
        body: "The result is yours to run. Write to us if you want to keep going.",
      },
    ],
  },
  about: {
    eyebrow: "04 — The company",
    title: "Why we're building it",
    paragraphs: [
      "Slashie Ltd is registered in England and Wales. We build our own products and we design and engineer the web.",
      "Slashie, at slashie.app, is our local services marketplace. DanPartners is a separate product that trades under the same company.",
    ],
    founderBefore: "Founded by",
    founderName: "Ryan Kwan",
    founderAfter: ".",
    founderHref: "https://ryankwan.dev",
    missionTitle: "The reason for Slashie",
    missionBody:
      "AI is changing a lot of careers, and not everyone lands on the right side of that shift. We want to help those people find paid work close to home instead of sitting idle. If that brings unemployment down a little, the world gets a little better.",
  },
  enquire: {
    title: "Start a conversation",
    body: "Tell us about the product, or the web and frontend work. We reply at the company address.",
  },
  footer: {
    onThisPage: "On this page",
    elsewhere: "Elsewhere",
    register: "Companies House record",
    registration: `${company.name} is a company registered in ${company.jurisdiction}. Company no. ${company.number}. Registered office: ${registeredOffice}.`,
    github: "GitHub",
    linkedin: "LinkedIn",
  },
};
