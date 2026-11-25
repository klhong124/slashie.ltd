import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  tone?: "surface" | "canvas";
  reveal?: boolean;
};

/** A full-width band with the marketing frame's top rule and standard padding. */
export function Section({ id, children, className = "", tone = "surface", reveal = true }: SectionProps) {
  return (
    <section
      id={id}
      className={`scroll-mt-20 border-t border-line ${tone === "canvas" ? "bg-canvas" : ""} ${className}`}
    >
      <div
        className={`mx-auto w-full max-w-[80rem] px-4 py-16 md:px-6 md:py-24 lg:px-8 lg:py-28 ${reveal ? "view-rise" : ""}`}
      >
        {children}
      </div>
    </section>
  );
}

const eyebrowTones = {
  default: "text-subtle-text",
  accent: "text-link",
  inverse: "text-[#54dd9d]",
  muted: "text-white/70",
} as const;

export function Eyebrow({
  children,
  className = "",
  tone = "default",
}: {
  children: ReactNode;
  className?: string;
  tone?: keyof typeof eyebrowTones;
}) {
  return (
    <p className={`text-xs font-medium tracking-[0.08em] uppercase ${eyebrowTones[tone]} ${className}`}>
      {children}
    </p>
  );
}

export function Index({ value }: { value: number }) {
  return (
    <span className="text-sm font-medium text-accent tabular-nums">{String(value).padStart(2, "0")}</span>
  );
}

export function Check() {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16" className="mt-1 size-4 shrink-0 text-accent">
      <path
        d="M3.5 8.5l3 3 6-7"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
