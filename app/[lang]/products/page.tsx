import { notFound } from "next/navigation";
import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import { DanCard, SlashieCard, SlashieHowItWorks } from "@/components/product-cards";
import { Eyebrow, Section } from "@/components/section";
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
        <SlashieCard slashie={slashie} detailed headingLevel="h2" />
      </Section>
      <Section>
        <h2 className="text-[30px] leading-[38px] font-medium tracking-[-0.03em] md:text-[34px] md:leading-[41px]">
          {slashie.howTitle}
        </h2>
        <div className="mt-10">
          <SlashieHowItWorks slashie={slashie} />
        </div>
        <div className="mt-4 rounded-2xl bg-[#0c1310] p-6 text-white md:p-10">
          <Eyebrow tone="inverse">{slashie.missionTitle}</Eyebrow>
          <p className="mt-4 max-w-[60ch] text-xl leading-8 text-pretty text-white/85 md:text-2xl md:leading-9">
            {slashie.missionBody}
          </p>
        </div>
      </Section>
      <Section tone="canvas">
        <DanCard dan={products.dan} headingLevel="h2" />
      </Section>
      <CtaBand copy={copy} />
    </>
  );
}
