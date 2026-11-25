import type { ReactNode } from "react";

type ExternalLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  newTab?: string;
};

export function ExternalLink({ href, children, className, newTab = "opens in a new tab" }: ExternalLinkProps) {
  return (
    <a href={href} className={className} target="_blank" rel="noopener noreferrer">
      {children}
      <span className="sr-only"> ({newTab})</span>
    </a>
  );
}
