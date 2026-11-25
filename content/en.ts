import type { SiteCopy } from "@/content/types";
import { company, registeredOffice } from "@/content/company";

/**
 * English copy. The Slashie product lines (tagline, summary, category, Slashie Pro)
 * are locked and must stay verbatim.
 */
export const en: SiteCopy = {
  locale: "en",
  htmlLang: "en-GB",
  ogLocale: "en_GB",
  chrome: {
    skip: "Skip to content",
    menu: "Menu",
    close: "Close",
    navAria: "Primary",
    languageLabel: "Language",
    nav: [
      { href: "/services", label: "Services" },
      { href: "/products", label: "Products" },
      { href: "/pricing", label: "Pricing" },
      { href: "/team", label: "Team" },
      { href: "/contact", label: "Contact" },
    ],
    cta: { href: "/contact", label: "Talk to us" },
    footer: {
      tagline:
        "Websites, apps and online systems for Cantonese-speaking business owners in the UK.",
      pages: "Pages",
      products: "Products",
      contact: "Contact",
      register: "Companies House record",
      registration: `${company.name} is a company registered in ${company.jurisdiction}. Company no. ${company.number}. Registered office: ${registeredOffice}.`,
      privacy: "Privacy",
    },
    mobileCta: "Talk to us",
    newTab: "opens in a new tab",
  },
  ctaBand: {
    title: "Tell us about your business.",
    body: "Write in Cantonese or English. We reply from hello@slashie.ltd and arrange a call in the language you prefer.",
    primary: { href: "/contact", label: "Start a conversation" },
    secondary: { href: "/pricing", label: "See packages" },
  },
  home: {
    meta: {
      title: "Cantonese web design and apps for UK businesses | Slashie Ltd",
      description:
        "Websites, apps and online systems for Cantonese-speaking business owners in the UK. Work with Slashie Ltd in Cantonese (廣東話) or English: clear packages, fast bilingual sites, built to grow your business.",
    },
    hero: {
      eyebrow: "For Cantonese-speaking businesses in the UK",
      title: "Grow your business. Talk it through in Cantonese.",
      lede: "Slashie Ltd is a UK company. We design and build websites, apps and online systems that help your business grow — and you can work with us in Cantonese or English, from the first chat to launch.",
      primary: { href: "/contact", label: "Talk to us" },
      secondary: { href: "/services", label: "What we build" },
      chips: ["Cantonese or English", "UK registered company", "Websites, apps, systems"],
    },
    brief: {
      title: "New project",
      status: "In conversation",
      rows: [
        { label: "Language", value: "廣東話 · English" },
        { label: "Goal", value: "More enquiries and bookings" },
        { label: "Build", value: "Website · Bookings · Search" },
        { label: "Next", value: "A first call" },
      ],
    },
    trust: [
      { label: "Companies House", value: `No. ${company.number}`, href: company.registerUrl },
      { label: "Founder", value: "Ryan Kwan", href: "/team" },
      { label: "Our live product", value: "slashie.app", href: "https://slashie.app" },
      {
        label: "Check our speed",
        value: "PageSpeed Insights",
        href: `https://pagespeed.web.dev/analysis?url=${encodeURIComponent(company.url)}`,
      },
    ],
    stuck: {
      eyebrow: "Where it hurts",
      title: "Sound familiar?",
      lede: "The problems we hear most from owners who want to grow — and what we do about them.",
      items: [
        {
          title: "The website doesn't bring customers",
          body: "It looks fine, but the phone stays quiet. We rebuild it around what your customers need to do next: call, book or buy.",
        },
        {
          title: "Orders still arrive by phone and WhatsApp",
          body: "Messages get lost and nothing is in one place. We turn them into a simple system you control.",
        },
        {
          title: "Tech talk in English is tiring",
          body: "Talk it through in Cantonese instead. We explain every choice in plain words, without the jargon.",
        },
        {
          title: "Your brand looks different everywhere",
          body: "Website, menu, app and social each look a bit different. We give you one consistent set of building blocks.",
        },
      ],
    },
    sectors: {
      eyebrow: "Who we help",
      title: "Built for the businesses our community runs",
      lede: "Pick your type of business to see what we'd build first, and why.",
      problemLabel: "The problem",
      buildLabel: "What we'd build",
      outcomeLabel: "The aim",
      note: "These are starting ideas, not past projects. Every plan is shaped around your business.",
      items: [
        {
          id: "restaurants",
          name: "Restaurants & takeaways",
          problem: "Orders come by phone or through delivery apps that charge commission, and the menu online is out of date.",
          build: ["Bilingual menu site", "Direct online ordering or table booking", "Google Business Profile and map setup"],
          outcome: "More direct orders, less time on the phone.",
        },
        {
          id: "beauty",
          name: "Beauty, hair & wellness",
          problem: "Bookings are juggled across Instagram messages, WhatsApp and calls.",
          build: ["Online booking", "Treatment menu in English and Chinese", "Local search pages for your area"],
          outcome: "A diary that fills itself.",
        },
        {
          id: "education",
          name: "Tutoring & classes",
          problem: "Parents ask the same questions, and sign-ups arrive on paper or in chat.",
          build: ["Course and timetable pages", "Sign-up and payment forms", "Bilingual parent FAQ"],
          outcome: "Less admin, more sign-ups.",
        },
        {
          id: "property",
          name: "Property & lettings",
          problem: "Listings live in group chats and PDFs that are hard to share.",
          build: ["Listing pages with photos", "An enquiry form on every property", "Landlord and tenant guides in both languages"],
          outcome: "More serious enquiries, fewer repeat questions.",
        },
        {
          id: "professional",
          name: "Accountants, lawyers & advisers",
          problem: "New clients need to trust you before they pick up the phone.",
          build: ["Clear service pages in both languages", "Appointment booking", "Search-friendly guides"],
          outcome: "A site that earns trust before the first call.",
        },
        {
          id: "retail",
          name: "Shops & online retail",
          problem: "Stock sells in the shop, but not after closing time.",
          build: ["Online shop", "Bilingual product pages", "Payments through your provider"],
          outcome: "Sales while the shop is closed.",
        },
      ],
    },
    services: {
      eyebrow: "Services & solutions",
      title: "What we build to grow your business",
      lede: "Each service starts from a business outcome, then picks the technology to get there.",
      more: { href: "/services", label: "All services" },
    },
    cantonese: {
      eyebrow: "Why Slashie",
      title: "Cantonese is how we work, not an add-on.",
      lede: "Our web and IT services support Cantonese, so you can work with us in Cantonese as well as English. Same company, same work — you choose the language.",
      points: [
        "Calls and messages in Cantonese or English",
        "Sites can be bilingual: English and Traditional Chinese",
        "Plain explanations, no jargon",
        "A UK registered company, with proper invoices",
      ],
    },
    why: {
      eyebrow: "Why Slashie Ltd",
      title: "What you get here that's hard to find elsewhere",
      items: [
        {
          title: "Hong Kong Chinese, written properly",
          body: "Traditional Chinese in a natural Hong Kong voice: not machine translation, and not Taiwan or Mainland wording.",
        },
        {
          title: "Bilingual on every page",
          body: "English and 繁中 side by side across the whole site, tagged correctly so Google shows each customer the right language.",
        },
        {
          title: "Prices laid out up front",
          body: "Clear packages and what each one includes, with the price agreed before any work starts.",
        },
        {
          title: "Fast by default",
          body: "Modern Next.js builds with no heavy page builders. Run this site through Google PageSpeed Insights and see for yourself.",
        },
        {
          title: "You talk to the builder",
          body: "No account managers in between. The person on your call designs and builds your project.",
        },
        {
          title: "We run our own product",
          body: "Slashie is live at slashie.app, so we know first-hand what it takes to grow something online.",
        },
      ],
    },
    process: {
      eyebrow: "How we work",
      title: "Four steps, from chat to growth",
      lede: "Every project follows the same shape, so you always know what happens next.",
      steps: [
        {
          title: "Talk",
          body: "Tell us about the business and the goal, in Cantonese or English. We ask until it's clear.",
        },
        {
          title: "Plan and design",
          body: "We agree the scope and price, then design the pages and flows before building.",
        },
        {
          title: "Build and launch",
          body: "We build it, test it on real phones and put it live with you.",
        },
        {
          title: "Grow",
          body: "After launch we keep improving what brings in customers, if you want us to.",
        },
      ],
    },
    products: {
      eyebrow: "Products",
      title: "We build our own products too",
      lede: "Running our own products keeps us honest about what it takes to grow one.",
      more: { href: "/products", label: "See the products" },
    },
    pricing: {
      eyebrow: "Pricing",
      title: "Clear packages, confirmed before we start",
      lede: "One-off builds and monthly care. Package prices are being finalised.",
      more: { href: "/pricing", label: "See pricing" },
    },
    faq: {
      eyebrow: "FAQ",
      title: "Questions owners ask",
      items: [
        {
          question: "Can I do the whole project in Cantonese?",
          answer:
            "Yes. You can work with us in Cantonese or English, whichever is easier for you. Many owners mix both, and that's fine.",
        },
        {
          question: "Do you only work with Cantonese-speaking businesses?",
          answer:
            "No. Our focus is Cantonese-speaking business owners in the UK, but we work in English with anyone.",
        },
        {
          question: "How much does it cost?",
          answer:
            "Our packages are on the pricing page. Amounts are still being confirmed, so email us and we'll quote for your project.",
        },
        {
          question: "Who will I work with?",
          answer:
            "You work directly with Slashie Ltd, founded by Ryan Kwan. See the team page.",
        },
        {
          question: "What do you need from me to start?",
          answer:
            "A short email: what your business does, what you want to change, and any timing. We'll reply and arrange a call.",
        },
      ],
    },
  },
  services: {
    meta: {
      title: "Web design, apps and systems for UK businesses",
      description:
        "Websites, web apps, mobile apps, online shops, design systems and performance work from Slashie Ltd — built to help UK businesses grow, in Cantonese or English.",
    },
    hero: {
      eyebrow: "Services & solutions",
      title: "Built around what your business needs next.",
      lede: "We don't sell technology for its own sake. Each service below starts from an outcome — more enquiries, fewer lost orders, a brand people recognise — and works back to the build.",
      primary: { href: "/contact", label: "Talk to us" },
      secondary: { href: "/pricing", label: "See packages" },
    },
    includesLabel: "What's included",
    items: [
      {
        id: "websites",
        title: "Websites that bring enquiries",
        outcome: "More calls, bookings and messages from your site.",
        body: "A site that explains your business clearly, loads quickly on phones and makes the next step obvious.",
        includes: [
          "Design and build",
          "English and Traditional Chinese pages",
          "Contact and enquiry forms",
          "Search-friendly setup",
        ],
      },
      {
        id: "web-apps",
        title: "Web apps and systems",
        outcome: "Orders and bookings in one place, not scattered across chats.",
        body: "Booking, ordering and customer portals, taken from the first idea through a production release.",
        includes: [
          "Scope and flows agreed up front",
          "React, Next.js and TypeScript",
          "Admin pages for your team",
          "Launch and handover",
        ],
      },
      {
        id: "apps",
        title: "Apps for your customers",
        outcome: "Be on your customers' phones, where they already are.",
        body: "Apps for repeat customers, loyalty or bookings, designed to feel quick and simple.",
        includes: [
          "App design and prototyping",
          "React Native and Expo",
          "Works with your website",
          "Store release support",
        ],
      },
      {
        id: "ecommerce",
        title: "Online shops and content",
        outcome: "Sell online and update your own content without calling a developer.",
        body: "Catalogues, content and ordering platforms that stay coherent as they grow.",
        includes: [
          "Shop and catalogue setup",
          "A CMS you can edit",
          "Payments through your provider",
          "Bilingual product pages",
        ],
      },
      {
        id: "design-systems",
        title: "Design systems",
        outcome: "One consistent brand across every screen.",
        body: "Shared components and tokens, documented in Storybook so design and code stay in step.",
        includes: [
          "Colours, type and spacing tokens",
          "Reusable components",
          "Figma to accessible UI",
          "Documentation in Storybook",
        ],
      },
      {
        id: "performance",
        title: "Performance and accessibility",
        outcome: "Fast pages that work for everyone, so fewer visitors leave.",
        body: "Speed and accessibility treated as part of the build, not a pass after launch.",
        includes: [
          "Speed review and fixes",
          "Accessibility review",
          "Motion with a reduced-motion path",
          "Ongoing checks after launch",
        ],
      },
    ],
    stack: {
      eyebrow: "Tools",
      title: "Modern, well-supported technology",
      lede: "Picked so your site or app is easy to maintain and easy to hand over.",
      items: ["React", "Next.js", "TypeScript", "React Native", "Expo", "Storybook", "Figma", "Vercel"],
    },
  },
  products: {
    meta: {
      title: "Products: Slashie and DanPartners",
      description:
        "Products from Slashie Ltd: Slashie, a local services marketplace at slashie.app, and DanPartners.",
    },
    hero: {
      eyebrow: "Products",
      title: "Products we build and run.",
      lede: "Slashie Ltd builds its own products alongside client work. Both trade under the same company.",
    },
    slashie: {
      name: "Slashie",
      tagline: "Help around the corner. Post a task. Get local quotes. Pay directly.",
      summary:
        "Post a task, get quotes from nearby workers, pick who you want. You pay the worker directly — Slashie takes no cut of the job.",
      category: "We're a local services marketplace.",
      points: [
        {
          title: "Free for customers",
          body: "Posting a task, comparing quotes and choosing a worker cost nothing.",
        },
        {
          title: "Free quotes for workers",
          body: "Every worker gets free quotes each month. Slashie Pro removes the limit.",
        },
        {
          title: "No cut of the job",
          body: "Customers pay workers directly, outside Slashie. We never take a share of the job.",
        },
      ],
      link: "Open slashie.app",
      howTitle: "How Slashie works",
      customers: {
        title: "For customers",
        steps: [
          "Post your task with a description, photos, location and budget.",
          "Workers nearby send you quotes.",
          "Compare quotes and pick the worker you want.",
          "Pay the worker directly once the job is done.",
        ],
      },
      workers: {
        title: "For workers",
        steps: [
          "Browse tasks near you by category, budget and distance.",
          "Send a quote with your price, message and timeline.",
          "Do the job once a customer picks you.",
          "Get paid directly by the customer.",
        ],
      },
      missionTitle: "Why we're building it",
      missionBody:
        "AI is changing a lot of careers, and not everyone lands on the right side of that shift. We want to help those people find paid work close to home instead of sitting idle. If that brings unemployment down a little, the world gets a little better.",
    },
    dan: {
      kicker: "Also from Slashie Ltd",
      name: "DanPartners",
      /**
       * TODO(owner): Replace with approved DanPartners public copy.
       * Do not add features, technology, customers, pricing or metrics
       * until that copy exists. Public site: https://dan.partners
       */
      summary: "A separate product that trades under Slashie Ltd.",
      link: "dan.partners",
    },
  },
  pricing: {
    meta: {
      title: "Website and app packages for UK businesses",
      description:
        "Website, app and monthly care packages from Slashie Ltd. Prices are being finalised — email hello@slashie.ltd for a quote.",
    },
    hero: {
      eyebrow: "Pricing",
      title: "Packages that grow with your business.",
      lede: "Start with a one-off build, then keep improving with monthly care. Every price is agreed with you before work starts.",
      primary: { href: "/contact", label: "Ask for a quote" },
    },
    /**
     * TODO(owner): Every `price: "£TBC"` below is a placeholder. Replace with
     * approved prices (and confirm each tier's inclusions) before publishing
     * real amounts. Do not invent prices, discounts or payment terms.
     */
    notice:
      "Prices are being finalised. Amounts shown as £TBC will be confirmed by Slashie Ltd — email us for a quote in the meantime.",
    featuredLabel: "Recommended",
    tierCta: { href: "/contact", label: "Ask about this" },
    groups: [
      {
        eyebrow: "One-off builds",
        title: "Websites and apps",
        lede: "A fixed scope, agreed with you before we start.",
        tiers: [
          {
            name: "Starter site",
            audience: "A clear, bilingual site for a small business.",
            price: "£TBC",
            cadence: "one-off",
            includes: [
              "Design and build",
              "English and Traditional Chinese",
              "Contact form",
              "Search-friendly setup",
            ],
          },
          {
            name: "Growth site",
            audience: "For businesses that take bookings or sell online.",
            price: "£TBC",
            cadence: "one-off",
            featured: true,
            includes: [
              "Everything in Starter site",
              "Bookings or online shop",
              "Content you can edit",
              "Analytics set up",
            ],
          },
          {
            name: "Custom system or app",
            audience: "Portals, ordering systems and mobile apps.",
            price: "£TBC",
            cadence: "quoted per project",
            includes: [
              "Discovery and scope",
              "Design system",
              "Web or mobile build",
              "Launch and handover",
            ],
          },
        ],
      },
      {
        eyebrow: "Monthly",
        title: "Care and growth",
        lede: "Keep your site healthy and keep improving it after launch.",
        tiers: [
          {
            name: "Care",
            audience: "Keep everything running and up to date.",
            price: "£TBC",
            cadence: "a month",
            includes: [
              "Updates and fixes",
              "Uptime and speed checks",
              "Small content changes",
              "Support in Cantonese or English",
            ],
          },
          {
            name: "Growth partner",
            audience: "Ongoing improvements to win more customers.",
            price: "£TBC",
            cadence: "a month",
            featured: true,
            includes: [
              "Everything in Care",
              "New pages and features",
              "Regular review call",
              "Priority replies",
            ],
          },
        ],
      },
    ],
    included: {
      eyebrow: "Every package",
      title: "Included as standard",
      items: [
        "Cantonese or English, throughout",
        "English and Traditional Chinese pages",
        "Mobile-first design",
        "Search-friendly setup: titles, sitemap, Google listing",
        "Fast, secure hosting setup",
        "A walkthrough at handover",
      ],
    },
    /** TODO(owner): Confirm which features each build tier includes. */
    compare: {
      eyebrow: "Compare",
      title: "Which build fits?",
      featureLabel: "Feature",
      yes: "Included",
      no: "Not included",
      rows: [
        { label: "English and Traditional Chinese", values: [true, true, true] },
        { label: "Mobile-first design", values: [true, true, true] },
        { label: "Contact and enquiry forms", values: [true, true, true] },
        { label: "Search-friendly setup", values: [true, true, true] },
        { label: "Bookings or online shop", values: [false, true, "As scoped"] },
        { label: "Edit your own content", values: [false, true, true] },
        { label: "Analytics", values: [false, true, true] },
        { label: "Customer accounts, portals or apps", values: [false, false, true] },
        { label: "Design system", values: [false, false, true] },
        { label: "Price", values: ["£TBC", "£TBC", "£TBC"] },
      ],
    },
    how: {
      eyebrow: "How pricing works",
      title: "No surprises",
      steps: [
        {
          title: "Tell us",
          body: "Email us in Cantonese or English about your business and what you want to achieve.",
        },
        {
          title: "Get a clear quote",
          body: "We recommend a package, or scope a custom one, and confirm the price before any work starts.",
        },
        {
          title: "See progress as we go",
          body: "We share the work in stages, so nothing at launch comes as a surprise.",
        },
      ],
    },
    faq: {
      eyebrow: "Pricing FAQ",
      title: "About the numbers",
      items: [
        {
          question: "Why does it say £TBC?",
          answer:
            "We're still confirming our package prices. Email us about your project and we'll give you a quote.",
        },
        {
          question: "Which package is right for me?",
          answer:
            "Tell us what your business does and what you want to improve. We'll recommend a package, or quote a custom scope.",
        },
        {
          question: "Can we talk about pricing in Cantonese?",
          answer: "Yes. Quotes and calls can be in Cantonese or English.",
        },
      ],
    },
  },
  team: {
    meta: {
      title: "Team: founded by Ryan Kwan",
      description:
        "The people behind Slashie Ltd. Founded by Ryan Kwan. Work with us in Cantonese or English.",
    },
    hero: {
      eyebrow: "Team",
      title: "The people you'll talk to.",
      lede: "Slashie Ltd is small on purpose. You speak with the people who design and build your project.",
    },
    founderSection: {
      eyebrow: "Founder",
      title: "Who leads Slashie Ltd",
    },
    founder: {
      name: "Ryan Kwan",
      role: "Founder",
      body: "Ryan founded Slashie Ltd and leads its design and engineering. He also builds Slashie, the company's local services marketplace.",
      href: "https://ryankwan.dev",
      linkLabel: "ryankwan.dev",
      tags: ["React", "Next.js", "TypeScript", "Design systems", "Motion"],
    },
    /**
     * TODO(owner): Add other team members here only once they are real, have
     * agreed to be listed, and have approved their name, role and bio.
     * Nothing renders while this list is empty — do not add placeholder people.
     */
    members: [],
    principles: {
      eyebrow: "How we work with you",
      title: "What you can expect",
      items: [
        {
          title: "You talk to the builders",
          body: "No account managers in between. The people on your call are the people doing the work.",
        },
        {
          title: "Your language",
          body: "Cantonese or English, in calls, messages and documents — whichever is easier for you.",
        },
        {
          title: "Plain answers",
          body: "We explain choices and trade-offs in everyday words, so you can decide with confidence.",
        },
      ],
    },
  },
  contact: {
    meta: {
      title: "Contact us in Cantonese or English",
      description:
        "Email Slashie Ltd at hello@slashie.ltd. Write in Cantonese or English about your website, app or system.",
    },
    hero: {
      eyebrow: "Contact",
      title: "Let's talk about your business.",
      lede: "Email us in Cantonese or English. We'll reply and arrange a call in the language you prefer.",
    },
    emailLabel: "Email",
    subject: "Project enquiry",
    include: {
      eyebrow: "What to send",
      title: "A few lines is enough",
      items: [
        "What your business does",
        "What you want to change or build",
        "Any timing or budget you have in mind",
        "Whether you prefer Cantonese or English",
      ],
    },
    languages: {
      title: "廣東話 or English",
      body: "Write in whichever language is easier. We'll reply in the same one.",
    },
    companyTitle: "Company details",
    numberLabel: "Company no. (England and Wales)",
    officeLabel: "Registered office",
    builder: {
      title: "Write your enquiry here",
      lede: "Fill in what you can. We'll open it in your email app, addressed to us. Nothing is stored on this site.",
      name: "Your name",
      business: "Your business",
      need: "What do you need?",
      needs: [
        "A new website",
        "Bookings or online orders",
        "An online shop",
        "An app",
        "A design system",
        "Speed or care for an existing site",
        "Not sure yet",
      ],
      language: "Preferred language",
      languages: ["廣東話 Cantonese", "English"],
      message: "Anything else?",
      messagePlaceholder: "Your goals, timing, budget, links to your current site…",
      submit: "Open in email app",
      copy: "Copy email address",
      copied: "Copied",
      bodyLabels: { name: "Name", business: "Business", need: "Need", language: "Preferred language" },
    },
  },
  privacy: {
    meta: {
      title: "Privacy",
      description: "How Slashie Ltd handles personal data on slashie.ltd and when you email us.",
    },
    hero: {
      eyebrow: "Privacy",
      title: "Privacy notice",
      lede: "Short and plain: what this site collects, and what we do with your emails.",
    },
    /** TODO(owner): Have this notice reviewed before relying on it. */
    sections: [
      {
        title: "Browsing this site",
        body: "This site sets no cookies and runs no analytics or advertising trackers. Our hosting provider, Vercel, may keep standard server logs such as IP addresses to run and protect the site.",
      },
      {
        title: "When you email us",
        body: "If you email hello@slashie.ltd, we use your message and contact details to reply and to discuss your project. We do not sell them or use them for unrelated marketing.",
      },
      {
        title: "Your rights",
        body: "Under UK data protection law you can ask what we hold about you, and ask us to correct or delete it. Email hello@slashie.ltd.",
      },
      {
        title: "Who is responsible",
        body: `${company.name}, company no. ${company.number}, registered office ${registeredOffice}.`,
      },
    ],
    updated: "Last updated 25 November 2026",
  },
};
