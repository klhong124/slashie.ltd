import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main id="main" className="mx-auto flex min-h-[70svh] w-full max-w-[40rem] flex-col items-center justify-center px-4 py-24 text-center">
      <p className="text-xs font-medium tracking-[0.08em] text-subtle-text uppercase">404</p>
      <h1 className="mt-3 text-[44px] leading-[48px] font-medium tracking-[-0.035em]">This page is not here.</h1>
      <p className="mt-4 text-lg leading-7 text-muted">The rest of Slashie Ltd is on the homepage.</p>
      <Link
        href="/"
        className="mt-8 inline-flex min-h-[52px] items-center rounded-full bg-action px-6 text-base font-medium text-ink"
      >
        Back home
      </Link>
    </main>
  );
}
