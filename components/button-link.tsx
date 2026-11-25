import type { MouseEvent, ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
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
} as const;

export function ButtonLink({
  href,
  children,
  variant = "primary",
  size = "lg",
  className = "",
  onClick,
}: ButtonLinkProps) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`inline-flex items-center justify-center rounded-full font-medium transition-[background-color,border-color,transform] duration-150 ease-[cubic-bezier(0.2,0,0,1)] active:scale-[0.97] motion-reduce:transform-none ${sizes[size]} ${variants[variant]} ${className}`}
    >
      {children}
    </a>
  );
}
