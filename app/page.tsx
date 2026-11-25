import { About } from "@/components/about";
import { Enquire } from "@/components/enquire";
import { Hero } from "@/components/hero";
import { Products } from "@/components/products";
import { Services } from "@/components/services";

function Rule() {
  return <div aria-hidden="true" className="h-px w-full bg-line" />;
}

export default function HomePage() {
  return (
    <div className="relative">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 left-0 z-[1] hidden lg:block"
      >
        <div className="mx-auto h-full max-w-[80rem] border-x border-line" />
      </div>
      <main id="main" className="relative">
        <Hero />
        <Rule />
        <Products />
        <Rule />
        <Services />
        <Rule />
        <About />
        <Rule />
        <Enquire />
      </main>
    </div>
  );
}
