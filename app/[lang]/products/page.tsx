import { notFound } from "next/navigation";
import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import { DanCard, SlashieCard, SlashieHowItWorks } from "@/components/product-cards";
import { Section } from "@/components/section";
import { getCopy, isLocale, pageMetadata } from "@/content/get-copy";
import { JsonLd, breadcrumbJsonLd } from "@/lib/json-ld";

export async function generateMetadata({ params }: PageProps<"/[lang]/products">) {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  return pageMetadata(lang, "/products", getCopy(lang).products.meta);
}

export default async function ProductsPage({ params }: PageProps<"/[lang]/products">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const copy = getCopy(lang);
  const { products } = copy;
  const { slashie } = products;

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(copy, "/products", products.meta.title)} />
      <PageHero hero={products.hero} locale={lang} />
      <Section tone="canvas">
        <SlashieCard slashie={slashie} detailed headingLevel="h2" locale={lang} newTab={copy.chrome.newTab} />
      </Section>
      <Section>
        <h3 className="text-[30px] leading-[38px] font-medium tracking-[-0.03em] md:text-[34px] md:leading-[41px]">
          {slashie.howTitle}
        </h3>
        <div className="mt-10">
          <SlashieHowItWorks slashie={slashie} />
        </div>
      </Section>
      <Section tone="canvas">
        <DanCard dan={products.dan} variant="detail" headingLevel="h2" locale={lang} newTab={copy.chrome.newTab} />
      </Section>
      <CtaBand copy={copy} />
    </>
  );
}
