import type { SiteCopy } from "@/content/types";
import { company, registeredOffice } from "@/content/company";

/**
 * Hong Kong Traditional Chinese. Body copy is written Chinese (書面語);
 * headlines and calls to action use a spoken Cantonese tone on purpose.
 * Slashie product lines are faithful translations of the locked English copy,
 * and "Slashie Pro" stays the product name.
 */
export const zhHk: SiteCopy = {
  locale: "zh-hk",
  htmlLang: "zh-HK",
  ogLocale: "zh_HK",
  chrome: {
    skip: "跳至主要內容",
    menu: "選單",
    close: "關閉",
    navAria: "主要導覽",
    languageLabel: "語言",
    nav: [
      { href: "/services", label: "服務" },
      { href: "/products", label: "產品" },
      { href: "/pricing", label: "收費" },
      { href: "/team", label: "團隊" },
      { href: "/contact", label: "聯絡" },
    ],
    cta: { href: "/contact", label: "同我哋傾吓" },
    footer: {
      tagline: "為在英國做生意的廣東話老闆，設計及建造網站、應用程式和網上系統。",
      pages: "頁面",
      products: "產品",
      contact: "聯絡",
      register: "公司註冊紀錄",
      registration: `${company.name} 是一間在英格蘭及威爾斯註冊的公司。公司編號 ${company.number}。註冊辦事處：${registeredOffice}。`,
      privacy: "私隱",
    },
    mobileCta: "同我哋傾吓",
    newTab: "於新分頁開啟",
  },
  ctaBand: {
    title: "講吓你盤生意。",
    body: "用廣東話或英文寫信都得。我們會由 hello@slashie.ltd 回覆，再用你喜歡的語言約時間傾。",
    primary: { href: "/contact", label: "開始傾" },
    secondary: { href: "/pricing", label: "睇吓套餐" },
  },
  home: {
    meta: {
      title: "英國廣東話網頁設計及 App 開發 | Slashie Ltd",
      description:
        "專為在英國做生意的廣東話老闆，設計及建造網站、App 和網上系統。可用廣東話或英語合作：套餐清晰、網站快、中英雙語，幫你盤生意增長。",
    },
    hero: {
      eyebrow: "專為英國的廣東話生意人",
      title: "用廣東話，幫你盤生意做大。",
      lede: "Slashie Ltd 是一間英國公司。我們設計及建造網站、應用程式和網上系統，幫你的生意增長。由第一次傾偈到正式上線，都可以用廣東話或英語同我們溝通。",
      primary: { href: "/contact", label: "同我哋傾吓" },
      secondary: { href: "/services", label: "我哋做乜" },
      chips: ["廣東話或英語", "英國註冊公司", "網站・App・系統"],
    },
    brief: {
      title: "新項目",
      status: "傾緊",
      rows: [
        { label: "語言", value: "廣東話 · English" },
        { label: "目標", value: "多啲查詢同預約" },
        { label: "建造", value: "網站 · 預約 · 搜尋" },
        { label: "下一步", value: "先傾一次" },
      ],
    },
    trust: [
      { label: "英國公司註冊處", value: `編號 ${company.number}`, href: company.registerUrl },
      { label: "創辦人", value: "Ryan Kwan", href: "/team" },
      { label: "自家產品", value: "slashie.app", href: "https://slashie.app" },
      {
        label: "測試本網站速度",
        value: "PageSpeed Insights",
        href: `https://pagespeed.web.dev/analysis?url=${encodeURIComponent(`${company.url}/zh-hk`)}`,
      },
    ],
    stuck: {
      eyebrow: "你係咪都遇到？",
      title: "生意想做大，但卡喺呢度？",
      lede: "這些是老闆們最常遇到的問題，以及我們的做法。",
      items: [
        {
          title: "有網站，但冇生意",
          body: "網站看起來不錯，電話卻很少響。我們會圍繞客人的下一步重新設計：打電話、預約或購買。",
        },
        {
          title: "訂單仲靠電話同 WhatsApp",
          body: "訊息容易漏掉，資料又分散。我們把它們變成一套由你掌握的簡單系統。",
        },
        {
          title: "用英文講科技好攰",
          body: "改用廣東話傾就得。每個選擇我們都會用淺白的說話解釋，不講術語。",
        },
        {
          title: "品牌周圍都唔同樣",
          body: "網站、餐牌、App 和社交媒體各有各樣。我們為你建立一套統一的設計元件。",
        },
      ],
    },
    sectors: {
      eyebrow: "我哋幫邊類生意",
      title: "為華人社區常見嘅生意而設",
      lede: "揀你的行業，看看我們會先做甚麼，以及原因。",
      problemLabel: "問題",
      buildLabel: "我們會做",
      outcomeLabel: "目標",
      note: "以下是起步構思，並非過往項目。每個方案都會按你的生意度身訂造。",
      items: [
        {
          id: "restaurants",
          name: "餐廳及外賣",
          problem: "訂單靠電話，或經收取佣金的外賣平台；網上餐牌又未更新。",
          build: ["中英雙語餐牌網站", "直接網上落單或訂枱", "Google 商家檔案及地圖設定"],
          outcome: "多啲直接訂單，少啲時間聽電話。",
        },
        {
          id: "beauty",
          name: "美容、髮型及保健",
          problem: "預約分散在 Instagram 私訊、WhatsApp 和電話之間。",
          build: ["網上預約", "中英文療程價目", "針對你所在地區的搜尋頁面"],
          outcome: "預約表自己填滿。",
        },
        {
          id: "education",
          name: "補習及興趣班",
          problem: "家長不停問同樣的問題，報名又靠紙張或訊息。",
          build: ["課程及時間表頁面", "報名及付款表格", "中英雙語家長常見問題"],
          outcome: "少啲行政，多啲報名。",
        },
        {
          id: "property",
          name: "地產及租務",
          problem: "盤源散落在群組對話和 PDF 檔案，難以分享。",
          build: ["附相片的盤源頁面", "每個物業都有查詢表格", "中英文業主及租客指南"],
          outcome: "多啲認真查詢，少啲重複問題。",
        },
        {
          id: "professional",
          name: "會計、律師及顧問",
          problem: "新客人要先信任你，才會拿起電話。",
          build: ["中英文清晰服務頁面", "網上預約會面", "利於搜尋的實用文章"],
          outcome: "未打電話之前，已經建立信任。",
        },
        {
          id: "retail",
          name: "零售及網店",
          problem: "貨品在店舖賣得到，但關門後就賣不到。",
          build: ["網上商店", "中英雙語產品頁", "經你的支付商收款"],
          outcome: "關咗門都照樣有生意。",
        },
      ],
    },
    services: {
      eyebrow: "服務與方案",
      title: "幫你生意增長嘅服務",
      lede: "每項服務都由生意目標出發，再選擇合適的技術。",
      more: { href: "/services", label: "睇晒所有服務" },
    },
    cantonese: {
      eyebrow: "點解揀 Slashie",
      title: "廣東話係我哋嘅工作方式，唔係附加服務。",
      lede: "我哋嘅網頁同資訊科技服務支援廣東話，客戶可以用廣東話或者英文同我哋合作。同一間公司、同一份工作，語言你揀。",
      points: [
        "通話和訊息可用廣東話或英語",
        "網站可做中英雙語：英文及繁體中文",
        "解釋淺白，不講術語",
        "英國註冊公司，正式發票",
      ],
    },
    why: {
      eyebrow: "點解揀 Slashie Ltd",
      title: "喺我哋度，你會得到人哋好難俾到嘅嘢",
      items: [
        {
          title: "正宗香港中文",
          body: "以自然的香港語氣書寫繁體中文：不是機器翻譯，也不是台灣或內地用語。",
        },
        {
          title: "每一頁都中英雙語",
          body: "整個網站中英並行，並正確標示語言，讓 Google 向每位客人顯示合適的版本。",
        },
        {
          title: "價錢一早講清楚",
          body: "套餐和內容清清楚楚，開工前先與你確認價錢。",
        },
        {
          title: "網站夠快",
          body: "用現代 Next.js 建造，不用笨重的網頁建構工具。你可以用 Google PageSpeed Insights 親自測試本網站。",
        },
        {
          title: "直接同做嘢嘅人傾",
          body: "中間沒有客戶經理。與你通話的人，就是設計和建造你項目的人。",
        },
        {
          title: "我們有自家產品",
          body: "Slashie 已在 slashie.app 上線，所以我們親身知道要令網上業務增長需要甚麼。",
        },
      ],
    },
    process: {
      eyebrow: "合作方式",
      title: "四步，由傾偈到增長",
      lede: "每個項目都按同一個流程進行，你隨時知道下一步是甚麼。",
      steps: [
        {
          title: "傾",
          body: "用廣東話或英語，講講你的生意和目標。我們會一直問，直到清楚為止。",
        },
        {
          title: "計劃與設計",
          body: "先確定範圍和價錢，再在動工前設計好頁面和流程。",
        },
        {
          title: "建造與上線",
          body: "我們負責建造，在真實手機上測試，再和你一起正式上線。",
        },
        {
          title: "增長",
          body: "上線之後，如你需要，我們會繼續改善帶來客人的部分。",
        },
      ],
    },
    products: {
      eyebrow: "產品",
      title: "我們亦有自家產品",
      lede: "親身經營產品，令我們清楚知道要令一盤生意增長需要甚麼。",
      more: { href: "/products", label: "睇吓產品" },
    },
    pricing: {
      eyebrow: "收費",
      title: "套餐清楚，開工前先確認",
      lede: "一次性建造及每月保養。套餐價錢正在落實。",
      more: { href: "/pricing", label: "睇收費" },
    },
    faq: {
      eyebrow: "常見問題",
      title: "老闆們常問",
      items: [
        {
          question: "可以全程用廣東話傾嗎？",
          answer: "可以。你可以用廣東話或英語同我們合作，哪種方便就用哪種。中英夾雜都完全沒問題。",
        },
        {
          question: "你們只做廣東話客戶嗎？",
          answer: "不是。我們專注服務在英國的廣東話老闆，但亦會用英語與任何客戶合作。",
        },
        {
          question: "收費多少？",
          answer: "套餐列在收費頁。金額仍在確認中，歡迎電郵我們，我們會按你的項目報價。",
        },
        {
          question: "會由誰跟進我的項目？",
          answer: "你會直接與 Slashie Ltd 合作，公司由 Ryan Kwan 創立。詳情請看團隊頁。",
        },
        {
          question: "開始之前要準備甚麼？",
          answer: "一封簡短的電郵：你的生意做甚麼、想改變甚麼，以及大概時間。我們會回覆並約時間通話。",
        },
      ],
    },
  },
  services: {
    meta: {
      title: "英國網頁設計、App 及系統開發服務",
      description:
        "Slashie Ltd 提供網站、網上系統、手機 App、網店、設計系統及效能優化，幫英國的生意增長，可用廣東話或英語合作。",
    },
    hero: {
      eyebrow: "服務與方案",
      title: "你盤生意下一步要乜，我哋就做乜。",
      lede: "我們不是為技術而賣技術。以下每項服務都由一個成果出發 —— 更多查詢、更少漏單、令人記得的品牌 —— 再倒推出要建造甚麼。",
      primary: { href: "/contact", label: "同我哋傾吓" },
      secondary: { href: "/pricing", label: "睇吓套餐" },
    },
    includesLabel: "包括",
    items: [
      {
        id: "websites",
        title: "帶來查詢的網站",
        outcome: "網站帶來更多電話、預約和訊息。",
        body: "清楚介紹你的生意，在手機上快速載入，並令下一步一目了然。",
        includes: ["設計及建造", "英文及繁體中文頁面", "聯絡及查詢表格", "利於搜尋的設定"],
      },
      {
        id: "web-apps",
        title: "網上應用與系統",
        outcome: "訂單和預約集中一處，不再散落在對話之中。",
        body: "預約、落單及客戶專區，由最初的想法做到正式上線。",
        includes: ["事先確定範圍和流程", "React、Next.js、TypeScript", "團隊專用的管理頁面", "上線及交接"],
      },
      {
        id: "apps",
        title: "給客人用的 App",
        outcome: "出現在客人每天都用的手機上。",
        body: "為熟客、積分或預約而設的 App，設計得快捷簡單。",
        includes: ["App 設計及原型", "React Native 及 Expo", "與你的網站配合", "協助上架"],
      },
      {
        id: "ecommerce",
        title: "網店與內容管理",
        outcome: "在網上賣貨，自己更新內容，不用每次找開發人員。",
        body: "產品目錄、內容與落單平台，規模變大時依然井井有條。",
        includes: ["網店及目錄設定", "可自行編輯的內容管理系統", "經你的支付商收款", "中英雙語產品頁"],
      },
      {
        id: "design-systems",
        title: "設計系統",
        outcome: "每個畫面都是同一個品牌。",
        body: "共用的元件與設計語彙，以 Storybook 記錄，令設計和程式保持一致。",
        includes: ["顏色、字體與間距規範", "可重用元件", "由 Figma 到無障礙介面", "Storybook 文件"],
      },
      {
        id: "performance",
        title: "效能與無障礙",
        outcome: "頁面快、人人都用得到，訪客自然少流失。",
        body: "速度和無障礙是建造的一部分，而不是上線後才補做。",
        includes: ["速度檢查及修正", "無障礙檢查", "動效並照顧減少動效設定", "上線後持續檢查"],
      },
    ],
    stack: {
      eyebrow: "工具",
      title: "現代而有長期支援的技術",
      lede: "選用這些技術，令你的網站或 App 容易維護，亦容易交接。",
      items: ["React", "Next.js", "TypeScript", "React Native", "Expo", "Storybook", "Figma", "Vercel"],
    },
  },
  products: {
    meta: {
      title: "產品：Slashie 及 DanPartners",
      description: "Slashie Ltd 的產品：slashie.app 上的本地服務市集 Slashie，以及 DanPartners。",
    },
    hero: {
      eyebrow: "產品",
      title: "我哋自己做、自己營運嘅產品。",
      lede: "除了客戶項目，Slashie Ltd 亦開發自家產品。兩者都以同一間公司經營。",
    },
    slashie: {
      name: "Slashie",
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
          title: "工作者每月免費報價",
          body: "每位工作者每月都有免費報價額度；訂閱 Slashie Pro 即可無限報價。",
        },
        {
          title: "不抽佣金",
          body: "客戶在 Slashie 以外直接付款給工作者，我們不會從工作中抽取任何佣金。",
        },
      ],
      link: "前往 slashie.app",
      howTitle: "Slashie 如何運作",
      customers: {
        title: "客戶",
        steps: [
          "發佈任務，附上描述、相片、地點和預算。",
          "附近的工作者向你報價。",
          "比較報價，選擇你想要的工作者。",
          "工作完成後，直接付款給工作者。",
        ],
      },
      workers: {
        title: "工作者",
        steps: [
          "按類別、預算和距離瀏覽附近的任務。",
          "提交報價，附上價錢、留言和時間。",
          "客戶選中你之後開工。",
          "由客戶直接付款給你。",
        ],
      },
      missionTitle: "我們為何要做 Slashie",
      missionBody:
        "AI 正在改變很多行業，並非每個人都站在有利的一方。我們希望幫助這些人在附近找到有薪工作，而不是賦閒在家。如果能令失業率降低一點，世界也會好一點。",
    },
    dan: {
      kicker: "同屬 Slashie Ltd",
      name: "DanPartners",
      /**
       * TODO(owner): Replace with approved DanPartners public copy.
       * Do not add features, technology, customers, pricing or metrics
       * until that copy exists. Public site: https://dan.partners
       */
      summary: "另一項以 Slashie Ltd 名義經營的產品。",
      link: "dan.partners",
    },
  },
  pricing: {
    meta: {
      title: "網站及 App 套餐收費",
      description: "Slashie Ltd 的網站、App 及每月保養套餐。價錢正在落實，歡迎電郵 hello@slashie.ltd 索取報價。",
    },
    hero: {
      eyebrow: "收費",
      title: "跟住你盤生意一齊大嘅套餐。",
      lede: "先做一次性建造，再以每月保養持續改善。所有價錢都會在開工前與你確認。",
      primary: { href: "/contact", label: "攞個報價" },
    },
    /**
     * TODO(owner): Every `price: "£TBC"` below is a placeholder. Replace with
     * approved prices (and confirm each tier's inclusions) before publishing
     * real amounts. Do not invent prices, discounts or payment terms.
     */
    notice: "價錢正在落實。標示為 £TBC 的金額將由 Slashie Ltd 確認，期間歡迎電郵我們索取報價。",
    featuredLabel: "推介",
    tierCta: { href: "/contact", label: "查詢呢個" },
    groups: [
      {
        eyebrow: "一次性建造",
        title: "網站與 App",
        lede: "固定範圍，開工前與你確認。",
        tiers: [
          {
            name: "起步網站",
            audience: "適合小生意、清楚易明的雙語網站。",
            price: "£TBC",
            cadence: "一次性",
            includes: ["設計及建造", "英文及繁體中文", "聯絡表格", "利於搜尋的設定"],
          },
          {
            name: "增長網站",
            audience: "適合需要預約或網上銷售的生意。",
            price: "£TBC",
            cadence: "一次性",
            featured: true,
            includes: ["包括起步網站全部內容", "預約或網店", "可自行編輯內容", "設定流量分析"],
          },
          {
            name: "訂製系統或 App",
            audience: "客戶專區、落單系統及手機 App。",
            price: "£TBC",
            cadence: "按項目報價",
            includes: ["需求探索及範圍", "設計系統", "網頁或手機開發", "上線及交接"],
          },
        ],
      },
      {
        eyebrow: "每月",
        title: "保養與增長",
        lede: "上線後保持網站健康，並持續改善。",
        tiers: [
          {
            name: "保養",
            audience: "保持一切運作正常、內容最新。",
            price: "£TBC",
            cadence: "每月",
            includes: ["更新及修正", "運作及速度檢查", "細小內容修改", "廣東話或英語支援"],
          },
          {
            name: "增長夥伴",
            audience: "持續改善，爭取更多客人。",
            price: "£TBC",
            cadence: "每月",
            featured: true,
            includes: ["包括保養全部內容", "新增頁面及功能", "定期檢討通話", "優先回覆"],
          },
        ],
      },
    ],
    included: {
      eyebrow: "所有套餐",
      title: "標準包括",
      items: [
        "全程廣東話或英語",
        "英文及繁體中文頁面",
        "手機優先設計",
        "利於搜尋的設定：標題、網站地圖、Google 商家",
        "快速安全的寄存設定",
        "交接時逐步講解",
      ],
    },
    /** TODO(owner): Confirm which features each build tier includes. */
    compare: {
      eyebrow: "比較",
      title: "邊個方案啱你？",
      featureLabel: "功能",
      yes: "包括",
      no: "不包括",
      rows: [
        { label: "英文及繁體中文", values: [true, true, true] },
        { label: "手機優先設計", values: [true, true, true] },
        { label: "聯絡及查詢表格", values: [true, true, true] },
        { label: "利於搜尋的設定", values: [true, true, true] },
        { label: "預約或網店", values: [false, true, "按需要"] },
        { label: "自行編輯內容", values: [false, true, true] },
        { label: "流量分析", values: [false, true, true] },
        { label: "客戶帳戶、專區或 App", values: [false, false, true] },
        { label: "設計系統", values: [false, false, true] },
        { label: "價錢", values: ["£TBC", "£TBC", "£TBC"] },
      ],
    },
    how: {
      eyebrow: "收費方式",
      title: "冇意外",
      steps: [
        {
          title: "話我哋知",
          body: "用廣東話或英語電郵我們，講講你的生意和目標。",
        },
        {
          title: "清楚報價",
          body: "我們會推薦合適套餐，或度身訂造範圍，並在開工前確認價錢。",
        },
        {
          title: "過程看得見",
          body: "我們會分階段分享進度，上線時不會有意外。",
        },
      ],
    },
    faq: {
      eyebrow: "收費問題",
      title: "關於價錢",
      items: [
        {
          question: "點解寫住 £TBC？",
          answer: "我們仍在確認套餐價錢。電郵告訴我們你的項目，我們會為你報價。",
        },
        {
          question: "哪個套餐適合我？",
          answer: "告訴我們你的生意做甚麼、想改善甚麼，我們會推薦合適的套餐，或按需要另行報價。",
        },
        {
          question: "可以用廣東話傾價錢嗎？",
          answer: "可以。報價和通話都可以用廣東話或英語。",
        },
      ],
    },
  },
  team: {
    meta: {
      title: "團隊：由 Ryan Kwan 創立",
      description: "Slashie Ltd 背後的人。由 Ryan Kwan 創立，可用廣東話或英語合作。",
    },
    hero: {
      eyebrow: "團隊",
      title: "同你傾嘅，就係做嘅人。",
      lede: "Slashie Ltd 刻意保持精簡。與你溝通的，就是設計和建造你項目的人。",
    },
    founderSection: {
      eyebrow: "創辦人",
      title: "帶領 Slashie Ltd 的人",
    },
    founder: {
      name: "Ryan Kwan",
      role: "創辦人",
      body: "Ryan 創立了 Slashie Ltd，帶領公司的設計與工程工作，亦親自開發公司旗下的本地服務市集 Slashie。",
      href: "https://ryankwan.dev",
      linkLabel: "ryankwan.dev",
      tags: ["React", "Next.js", "TypeScript", "設計系統", "動效"],
    },
    /**
     * TODO(owner): Add other team members here only once they are real, have
     * agreed to be listed, and have approved their name, role and bio.
     * Nothing renders while this list is empty — do not add placeholder people.
     */
    members: [],
    principles: {
      eyebrow: "與你合作的方式",
      title: "你可以期望",
      items: [
        {
          title: "直接同做嘢嘅人傾",
          body: "中間沒有客戶經理。通話中的人，就是負責工作的人。",
        },
        {
          title: "用你的語言",
          body: "通話、訊息和文件，都可以用廣東話或英語，哪種方便就用哪種。",
        },
        {
          title: "答案淺白",
          body: "我們用日常說話解釋每個選擇和取捨，讓你有信心作決定。",
        },
      ],
    },
  },
  contact: {
    meta: {
      title: "聯絡我們（廣東話 / English）",
      description: "電郵 hello@slashie.ltd 聯絡 Slashie Ltd。可用廣東話或英語查詢網站、App 或系統。",
    },
    hero: {
      eyebrow: "聯絡",
      title: "傾吓你盤生意。",
      lede: "用廣東話或英語電郵給我們。我們會回覆，並用你喜歡的語言約時間通話。",
    },
    emailLabel: "電郵",
    subject: "項目查詢",
    include: {
      eyebrow: "寫甚麼",
      title: "幾句就夠",
      items: ["你的生意做甚麼", "想改變或建造甚麼", "大概的時間或預算", "想用廣東話還是英語"],
    },
    languages: {
      title: "廣東話 or English",
      body: "用哪種語言寫都可以，我們會用同一種語言回覆。",
    },
    companyTitle: "公司資料",
    numberLabel: "公司編號（英格蘭及威爾斯）",
    officeLabel: "註冊辦事處",
    builder: {
      title: "喺度寫低你嘅查詢",
      lede: "填寫你知道的資料即可。我們會在你的電郵程式中開啟一封寄給我們的電郵，本網站不會儲存任何資料。",
      name: "你的名字",
      business: "你的生意",
      need: "你需要甚麼？",
      needs: ["新網站", "預約或網上落單", "網上商店", "App", "設計系統", "現有網站提速或保養", "未確定"],
      language: "想用的語言",
      languages: ["廣東話", "English 英語"],
      message: "仲有咩想講？",
      messagePlaceholder: "你的目標、時間、預算、現有網站連結……",
      submit: "用電郵程式開啟",
      copy: "複製電郵地址",
      copied: "已複製",
      bodyLabels: { name: "名字", business: "生意", need: "需要", language: "語言" },
    },
  },
  privacy: {
    meta: {
      title: "私隱",
      description: "Slashie Ltd 如何在 slashie.ltd 及你電郵我們時處理個人資料。",
    },
    hero: {
      eyebrow: "私隱",
      title: "私隱聲明",
      lede: "簡短清楚：本網站收集甚麼，以及我們如何處理你的電郵。",
    },
    /** TODO(owner): Have this notice reviewed before relying on it. */
    sections: [
      {
        title: "瀏覽本網站",
        body: "本網站不設 cookies，亦沒有任何分析或廣告追蹤程式。我們的寄存服務供應商 Vercel 可能會保留標準伺服器記錄（例如 IP 地址），以運作及保護網站。",
      },
      {
        title: "當你電郵我們",
        body: "如你電郵 hello@slashie.ltd，我們會使用你的訊息和聯絡資料回覆你及商討項目。我們不會出售這些資料，亦不會用於無關的推廣。",
      },
      {
        title: "你的權利",
        body: "根據英國資料保護法例，你可以查詢我們持有你的哪些資料，並要求更正或刪除。請電郵 hello@slashie.ltd。",
      },
      {
        title: "負責機構",
        body: `${company.name}，公司編號 ${company.number}，註冊辦事處：${registeredOffice}。`,
      },
    ],
    updated: "最後更新：2026 年 11 月 25 日",
  },
};
