import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import { notFound } from "next/navigation";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { company } from "@/content/company";
import { getCopy, isLocale } from "@/content/get-copy";
import { locales } from "@/content/types";
import { MobileCta } from "@/components/mobile-cta";
import { JsonLd, organizationJsonLd } from "@/lib/json-ld";
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

  return {
    metadataBase: new URL(company.url),
    title: { default: copy.home.meta.title, template: `%s · ${company.name}` },
    description: copy.home.meta.description,
    applicationName: company.name,
    authors: [{ name: company.name, url: company.url }],
    creator: company.name,
    robots: { index: true, follow: true },
  };
}

export default async function RootLayout({ children, params }: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const copy = getCopy(lang);

  return (
    <html lang={copy.htmlLang} className={`${geist.variable} h-full antialiased`}>
      <body className="min-h-full pb-[76px] lg:pb-0">
        <a href="#main" className="skip-link">
          {copy.chrome.skip}
        </a>
        <JsonLd data={organizationJsonLd(copy)} />
        <Header copy={copy} />
        <div className="relative">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 right-0 left-0 z-[1] hidden lg:block"
          >
            <div className="mx-auto h-full max-w-[80rem] border-x border-line" />
          </div>
          <main id="main" className="relative">
            {children}
          </main>
        </div>
        <Footer copy={copy} />
        <MobileCta locale={lang} label={copy.chrome.mobileCta} />
      </body>
    </html>
  );
}
