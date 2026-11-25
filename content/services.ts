export type Offering = {
  title: string;
  body: string;
};

export const servicesIntro = {
  eyebrow: "Services",
  title: "Web and frontend",
  lede: "Design and engineering from Slashie Ltd. Design-focused web apps, from concept to production.",
} as const;

export const offerings: Offering[] = [
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
];

export const servicesEnquiry = {
  href: "mailto:hello@slashie.ltd?subject=Web%20and%20frontend%20enquiry",
  label: "Enquire",
  email: "hello@slashie.ltd",
  body: "For web and frontend design and engineering from Slashie Ltd.",
} as const;
