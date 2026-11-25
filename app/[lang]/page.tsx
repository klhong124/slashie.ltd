import { notFound } from "next/navigation";
import { About } from "@/components/about";
import { Enquire } from "@/components/enquire";
import { Hero } from "@/components/hero";
import { Process } from "@/components/process";
import { Products } from "@/components/products";
import { Services } from "@/components/services";
import { getCopy, isLocale } from "@/content/get-copy";

function Rule() {
  return <div aria-hidden="true" className="h-px w-full bg-line" />;
}

export default async function HomePage({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const copy = getCopy(lang);

  return (
    <div className="relative">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 left-0 z-[1] hidden lg:block"
      >
        <div className="mx-auto h-full max-w-[80rem] border-x border-line" />
      </div>
      <main id="main" className="relative">
        <Hero copy={copy} />
        <Rule />
        <Products copy={copy} />
        <Rule />
        <Services copy={copy} />
        <Rule />
        <Process copy={copy} />
        <Rule />
        <About copy={copy} />
        <Rule />
        <Enquire copy={copy} />
      </main>
    </div>
  );
}
