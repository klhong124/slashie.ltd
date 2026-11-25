import type { SiteCopy } from "@/content/types";
import { company, registeredOffice } from "@/content/company";

/**
 * Hong Kong Traditional Chinese (書面語).
 * The Cantonese-service lines use a spoken Hong Kong tone on purpose.
 * Slashie product lines are faithful translations of the locked English copy.
 * Slashie Pro stays the product name.
 *
 * TODO(owner): Replace danSummary with approved DanPartners public copy.
 * Do not add product features, technology, customers, pricing or metrics
 * until that copy exists. Public site: https://dan.partners
 */
export const zhHk: SiteCopy = {
  locale: "zh-hk",
  htmlLang: "zh-HK",
  meta: {
    title: "Slashie Ltd — 產品，以及圍繞產品的網頁",
    description:
      "Slashie Ltd 是一間英國公司，開發自家產品，並提供網頁與前端服務。客戶可以用廣東話或英語合作。旗下有 Slashie 及 DanPartners。",
    ogLocale: "zh_HK",
  },
  skip: "跳至主要內容",
  navAria: "主要導覽",
  menu: "選單",
  close: "關閉",
  nav: [
    { href: "#products", label: "產品" },
    { href: "#services", label: "服務" },
    { href: "#process", label: "合作方式" },
    { href: "#about", label: "關於" },
  ],
  enquireLabel: "查詢",
  languageLabel: "語言",
  hero: {
    eyebrow: "英格蘭及威爾斯",
    title: "產品，以及圍繞產品的網頁。",
    lede: "Slashie Ltd 是一間英國公司。我們開發自己的產品，也為其他公司做網頁與前端的設計和工程。",
    primary: { href: "#products", label: "看看產品" },
    secondary: { href: "#services", label: "我們的服務" },
    chips: ["廣東話及英語", "網頁與前端", "自家產品"],
  },
  products: {
    eyebrow: "01 — 產品",
    title: "我們推出的產品",
    lede: "兩項產品，都以 Slashie Ltd 的名義經營。",
    slashieName: "Slashie",
    tagline: "幫手就在街角。發佈任務。收取本地報價。直接付款。",
    summary:
      "發佈任務，向附近的工作者收取報價，再選擇你想要的人。你直接付款給工作者 —— Slashie 不會從工作中抽成。",
    category: "我們是本地服務市集。",
    points: [
      {
        title: "客戶免費",
        body: "發佈任務、比較報價和選擇工作者，全部免費。",
      },
      {
        title: "Slashie Pro",
        body: "每位工作者每月都有免費報價額度。Slashie Pro 取消這個上限。",
      },
      {
        title: "不從工作抽成",
        body: "客戶在 Slashie 以外直接付款給工作者。我們不會從工作中抽取任何分成。",
      },
    ],
    slashieLink: "前往 slashie.app",
    danKicker: "同屬本公司",
    danName: "DanPartners",
    danSummary: "另一項以 Slashie Ltd 名義經營的產品。",
    danLink: "dan.partners",
  },
  services: {
    eyebrow: "02 — 服務",
    title: "網頁與前端",
    lede: "由 Slashie Ltd 提供的設計與工程，由第一個介面做到正式上線。",
    cantoneseEyebrow: "語言",
    cantoneseTitle: "可以用廣東話合作",
    cantoneseBody:
      "我哋嘅網頁同資訊科技服務支援廣東話，客戶可以用廣東話或者英文同我哋合作。同一間公司、同一份工作，語言你揀。",
    offerings: [
      {
        title: "由概念到上線",
        body: "以設計為先的網頁應用，由最初的想法做到正式發布。",
      },
      {
        title: "React、Next.js、TypeScript",
        body: "以現代 React 技術做介面工程，並在資料邊界加上類型。",
      },
      {
        title: "設計系統",
        body: "元件庫與共用設計語彙，以 Storybook 記錄，讓設計與工程在同一處會合。",
      },
      {
        title: "富有動效的介面",
        body: "動效用來說明你在哪裡、什麼改變了，並為減少動效的設定留出路徑。",
      },
      {
        title: "電子商務與內容管理",
        body: "目錄、內容與下單的平台，規模變大時仍然保持一致。",
      },
      {
        title: "由 Figma 到無障礙介面",
        body: "把複雜的設計稿做成精緻、適應不同螢幕、而且無障礙的介面。",
      },
      {
        title: "效能",
        body: "速度是建造的一部分，而不是上線之後才補做的工序。",
      },
    ],
  },
  process: {
    eyebrow: "03 — 合作方式",
    title: "由第一次對話開始",
    lede: "與 Slashie Ltd 合作網頁與前端，過程都是這個形狀。",
    steps: [
      {
        title: "先聽產品",
        body: "由它要完成什麼、給誰用開始。",
      },
      {
        title: "定下介面",
        body: "結構、字體與動效先決定，建造才不會走樣。",
      },
      {
        title: "建造",
        body: "以 React、Next.js 與 TypeScript，由設計做到正式上線。",
      },
      {
        title: "交到你手上",
        body: "做出來的東西由你運作。如果想繼續，寫信給我們。",
      },
    ],
  },
  about: {
    eyebrow: "04 — 公司",
    title: "我們為何要做",
    paragraphs: [
      "Slashie Ltd 在英格蘭及威爾斯註冊。我們開發自己的產品，也設計和建造網頁。",
      "slashie.app 上的 Slashie 是我們的本地服務市集。DanPartners 是另一項以同一間公司名義經營的產品。",
    ],
    founderBefore: "由",
    founderName: "Ryan Kwan",
    founderAfter: " 創立。",
    founderHref: "https://ryankwan.dev",
    missionTitle: "Slashie 的緣由",
    missionBody:
      "AI 正在改變很多行業，並非每個人都站在有利的一方。我們希望幫助這些人在附近找到有薪工作，而不是賦閒在家。如果能令失業率降低一點，世界也會好一點。",
  },
  enquire: {
    title: "開始談談",
    body: "告訴我們那個產品，或你需要的網頁與前端工作。我們會由公司電郵回覆。",
  },
  footer: {
    onThisPage: "本頁",
    elsewhere: "其他地方",
    register: "公司註冊紀錄",
    registration: `${company.name} 是一間在${company.jurisdiction === "England and Wales" ? "英格蘭及威爾斯" : company.jurisdiction}註冊的公司。公司編號 ${company.number}。註冊辦事處：${registeredOffice}。`,
    github: "GitHub",
    linkedin: "LinkedIn",
  },
};
