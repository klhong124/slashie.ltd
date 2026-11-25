import Link from "next/link";

export default function NotFound() {
  return (
    <main id="main" className="mx-auto flex min-h-[70svh] w-full max-w-[40rem] flex-col justify-center px-4 py-24">
      <p className="text-xs font-medium tracking-[0.08em] text-subtle-text uppercase">404</p>
      <h1 className="mt-3 text-[44px] leading-[1.05] font-medium tracking-[-0.035em]">This page is not here.</h1>
      <p className="mt-3 text-lg text-muted">找不到這一頁。</p>
      <Link
        href="/"
        className="mt-8 inline-flex min-h-[52px] w-fit items-center rounded-full bg-action px-6 text-base font-medium text-ink"
      >
        Slashie Ltd
      </Link>
    </main>
  );
}
