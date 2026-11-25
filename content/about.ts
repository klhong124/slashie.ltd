export const aboutIntro = {
  eyebrow: "About",
  title: "The company",
  paragraphs: [
    "Slashie Ltd is registered in England and Wales. We build our own products and we design and engineer the web.",
    "Slashie, at slashie.app, is our local services marketplace. DanPartners is a separate product that trades under the same company.",
  ],
} as const;

/** One short line. The only founder mention on the page. */
export const founderLine = {
  before: "Founded by",
  name: "Ryan Kwan",
  href: "https://ryankwan.dev",
} as const;

/**
 * Company voice from the live Slashie about page.
 * The longer coffee-shop narrative is a personal founder biography, so it is not used here.
 */
export const mission = {
  title: "Why we're building it",
  body: "AI is changing a lot of careers, and not everyone lands on the right side of that shift. We want to help those people find paid work close to home instead of sitting idle. If that brings unemployment down a little, the world gets a little better.",
} as const;
