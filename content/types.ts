export const locales = ["en", "zh-hk"] as const;

export type Locale = (typeof locales)[number];

export type NavItem = {
  href: string;
  label: string;
};

export type Offering = {
  title: string;
  body: string;
};

export type Step = {
  title: string;
  body: string;
};

export type SiteCopy = {
  locale: Locale;
  htmlLang: "en-GB" | "zh-HK";
  meta: {
    title: string;
    description: string;
    ogLocale: "en_GB" | "zh_HK";
  };
  skip: string;
  navAria: string;
  menu: string;
  close: string;
  nav: NavItem[];
  enquireLabel: string;
  languageLabel: string;
  hero: {
    eyebrow: string;
    title: string;
    lede: string;
    primary: NavItem;
    secondary: NavItem;
    chips: string[];
  };
  products: {
    eyebrow: string;
    title: string;
    lede: string;
    slashieName: string;
    tagline: string;
    summary: string;
    category: string;
    points: { title: string; body: string }[];
    slashieLink: string;
    danKicker: string;
    danName: string;
    danSummary: string;
    danLink: string;
  };
  services: {
    eyebrow: string;
    title: string;
    lede: string;
    cantoneseEyebrow: string;
    cantoneseTitle: string;
    cantoneseBody: string;
    offerings: Offering[];
  };
  process: {
    eyebrow: string;
    title: string;
    lede: string;
    steps: Step[];
  };
  about: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    founderBefore: string;
    founderName: string;
    founderAfter: string;
    founderHref: string;
    missionTitle: string;
    missionBody: string;
  };
  enquire: {
    title: string;
    body: string;
  };
  footer: {
    onThisPage: string;
    elsewhere: string;
    register: string;
    registration: string;
    github: string;
    linkedin: string;
  };
};
