import Link from "next/link";
import type { MouseEvent, ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "inverse";
  size?: "sm" | "lg";
  className?: string;
  onClick?: (event: MouseEvent<HTMLAnchorElement>) => void;
};

const sizes = {
  sm: "min-h-11 px-4 text-sm",
  lg: "min-h-[52px] px-6 text-base",
} as const;

const variants = {
  primary: "border border-transparent bg-action text-ink hover:bg-action-hover active:bg-action-pressed",
  secondary:
    "border border-line-strong bg-surface text-ink hover:border-line-hover active:bg-subtle",
  inverse: "border border-white/20 bg-transparent text-white hover:border-white/50 active:bg-white/10",
} as const;

export function ButtonLink({
  href,
  children,
  variant = "primary",
  size = "lg",
  className = "",
  onClick,
}: ButtonLinkProps) {
  const classes = `group/button inline-flex items-center justify-center gap-2 rounded-full font-medium whitespace-nowrap transition-[background-color,border-color,transform] duration-150 ease-[cubic-bezier(0.2,0,0,1)] active:scale-[0.97] motion-reduce:transform-none ${sizes[size]} ${variants[variant]} ${className}`;

  if (href.startsWith("/")) {
    return (
      <Link href={href} onClick={onClick} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} onClick={onClick} className={classes}>
      {children}
    </a>
  );
}

export function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 16 16"
      className={`size-4 transition-transform duration-200 ease-[cubic-bezier(0.2,0,0,1)] group-hover/button:translate-x-0.5 group-hover/link:translate-x-0.5 motion-reduce:transition-none ${className}`}
    >
      <path
        d="M3 8h10M9 4l4 4-4 4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function TextLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      className="group/link inline-flex min-h-11 items-center gap-1.5 text-base font-medium text-link underline-offset-4 hover:underline"
    >
      {children}
      <Arrow />
    </Link>
  );
}
