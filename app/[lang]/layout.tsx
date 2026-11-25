import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import { notFound } from "next/navigation";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { company } from "@/content/company";
import { getCopy, isLocale, localePath } from "@/content/get-copy";
import { locales } from "@/content/types";
import { organizationJsonLd } from "@/lib/json-ld";
import "../globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#ffffff",
  colorScheme: "light",
};

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const copy = getCopy(lang);
  const canonical = new URL(localePath(lang), company.url).toString();

  return {
    metadataBase: new URL(company.url),
    title: copy.meta.title,
    description: copy.meta.description,
    applicationName: company.name,
    authors: [{ name: company.name, url: company.url }],
    creator: company.name,
    alternates: {
      canonical,
      languages: {
        "en-GB": company.url,
        "zh-HK": new URL("/zh-hk", company.url).toString(),
        "x-default": company.url,
      },
    },
    openGraph: {
      type: "website",
      url: canonical,
      siteName: company.name,
      title: copy.meta.title,
      description: copy.meta.description,
      locale: copy.meta.ogLocale,
      alternateLocale: lang === "en" ? ["zh_HK"] : ["en_GB"],
    },
    twitter: {
      card: "summary_large_image",
      title: copy.meta.title,
      description: copy.meta.description,
    },
    robots: { index: true, follow: true },
  };
}

export default async function RootLayout({ children, params }: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const copy = getCopy(lang);

  return (
    <html lang={copy.htmlLang} className={`${geist.variable} h-full antialiased`}>
      <body className="min-h-full">
        <a href="#main" className="skip-link">
          {copy.skip}
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd(copy)) }}
        />
        <Header copy={copy} />
        {children}
        <Footer copy={copy} />
      </body>
    </html>
  );
}
