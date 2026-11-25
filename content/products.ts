export type ProductPoint = {
  title: string;
  body: string;
};

export type Product = {
  id: string;
  name: string;
  href: string;
  linkLabel: string;
  summary: string;
  tagline?: string;
  category?: string;
  points?: ProductPoint[];
};

export const productsIntro = {
  eyebrow: "Products",
  title: "What we build",
  lede: "Software built by Slashie Ltd, and traded under the company.",
} as const;

/**
 * Slashie product copy is locked.
 * Intro, tagline and category line come from the marketing pitch.
 * Slashie Pro is the paid plan name.
 */
export const slashie: Product = {
  id: "slashie",
  name: "Slashie",
  href: "https://slashie.app",
  linkLabel: "Open slashie.app",
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
};

/**
 * TODO(owner): Replace `summary` with approved DanPartners public copy.
 * Do not add product features, technology, customers, pricing or metrics
 * until that copy exists. Public site: https://dan.partners
 */
export const danPartners: Product = {
  id: "danpartners",
  name: "DanPartners",
  href: "https://dan.partners",
  linkLabel: "dan.partners",
  summary: "A separate product that trades under Slashie Ltd.",
};
