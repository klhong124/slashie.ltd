export const locales = ["en", "zh-hk"] as const;

export type Locale = (typeof locales)[number];

export const pagePaths = ["/", "/services", "/products", "/pricing", "/team", "/contact", "/privacy"] as const;

export type PagePath = (typeof pagePaths)[number];

/** Internal hrefs are written without a locale prefix ("/pricing", "/#faq"). */
export type Action = {
  href: string;
  label: string;
};

export type Meta = {
  title: string;
  description: string;
};

export type Card = {
  title: string;
  body: string;
};

export type Faq = {
  question: string;
  answer: string;
};

export type SectionIntro = {
  eyebrow: string;
  title: string;
  lede?: string;
};

export type Hero = SectionIntro & {
  primary?: Action;
  secondary?: Action;
};

export type Service = {
  id: string;
  title: string;
  outcome: string;
  body: string;
  includes: string[];
};

export type Tier = {
  name: string;
  audience: string;
  price: string;
  cadence: string;
  includes: string[];
  featured?: boolean;
};

export type TierGroup = SectionIntro & {
  tiers: Tier[];
};

export type TeamMember = {
  name: string;
  role: string;
  body: string;
  href: string;
  linkLabel: string;
  tags: string[];
};

export type Sector = {
  id: string;
  name: string;
  problem: string;
  build: string[];
  outcome: string;
  /** Optional aim shown under one sector. Not a past project. */
  addon?: string;
};

export type TrustItem = {
  label: string;
  value: string;
  href: string;
};

export type StepList = {
  title: string;
  steps: string[];
};

export type SiteCopy = {
  locale: Locale;
  htmlLang: "en-GB" | "zh-HK";
  ogLocale: "en_GB" | "zh_HK";
  chrome: {
    skip: string;
    menu: string;
    close: string;
    navAria: string;
    languageLabel: string;
    nav: Action[];
    cta: Action;
    footer: {
      tagline: string;
      pages: string;
      products: string;
      contact: string;
      register: string;
      registration: string;
      privacy: string;
    };
    mobileCta: string;
    newTab: string;
  };
  ctaBand: {
    title: string;
    body: string;
    primary: Action;
    secondary: Action;
  };
  home: {
    meta: Meta;
    hero: Hero & { chips: string[]; continuation: string };
    brief: {
      title: string;
      status: string;
      rows: { label: string; value: string }[];
    };
    trust: TrustItem[];
    stuck: SectionIntro & { items: Card[] };
    sectors: SectionIntro & {
      problemLabel: string;
      buildLabel: string;
      outcomeLabel: string;
      note: string;
      items: Sector[];
    };
    services: SectionIntro & { more: Action };
    cantonese: SectionIntro & { points: string[] };
    why: SectionIntro & { items: Card[] };
    process: SectionIntro & { steps: Card[] };
    products: SectionIntro & { more: Action };
    pricing: SectionIntro & { more: Action };
    faq: SectionIntro & { items: Faq[] };
  };
  services: {
    meta: Meta;
    hero: Hero;
    includesLabel: string;
    items: Service[];
    /** Short note after the service list. Corporate styling, not the Dan theme. */
    danNote: string;
    stack: SectionIntro & { items: string[] };
  };
  products: {
    meta: Meta;
    hero: Hero;
    slashie: {
      name: string;
      tagline: string;
      summary: string;
      category: string;
      /** Short labels for the home teaser. */
      highlights: string[];
      points: Card[];
      link: string;
      howTitle: string;
      customers: StepList;
      workers: StepList;
    };
    dan: {
      wordmark: string;
      /** Short label under the wordmark on Home. */
      homeSublabel: string;
      /** Longer label on the products page. */
      sublabel: string;
      dictionary: {
        character: string;
        reading: string;
        pos: string;
        gloss: string;
      };
      title: string;
      /** Single intro used on Home, including the 0% commission line. */
      homeBody: string;
      paragraphs: string[];
      status: string;
      link: string;
      contact: Action;
    };
  };
  pricing: {
    meta: Meta;
    hero: Hero;
    notice: string;
    featuredLabel: string;
    tierCta: Action;
    groups: TierGroup[];
    included: SectionIntro & { items: string[] };
    compare: SectionIntro & {
      featureLabel: string;
      yes: string;
      no: string;
      rows: { label: string; values: (boolean | string)[] }[];
    };
    how: SectionIntro & { steps: Card[] };
    faq: SectionIntro & { items: Faq[] };
  };
  team: {
    meta: Meta;
    hero: Hero;
    founderSection: SectionIntro;
    founder: TeamMember;
    /** Rendered only when non-empty. */
    members: TeamMember[];
    principles: SectionIntro & { items: Card[] };
  };
  contact: {
    meta: Meta;
    hero: Hero;
    emailLabel: string;
    subject: string;
    include: SectionIntro & { items: string[] };
    languages: Card;
    companyTitle: string;
    numberLabel: string;
    officeLabel: string;
    builder: {
      title: string;
      lede: string;
      name: string;
      business: string;
      need: string;
      needs: string[];
      language: string;
      languages: string[];
      message: string;
      messagePlaceholder: string;
      submit: string;
      copy: string;
      copied: string;
      bodyLabels: { name: string; business: string; need: string; language: string };
    };
  };
  privacy: {
    meta: Meta;
    hero: Hero;
    sections: Card[];
    updated: string;
  };
};
