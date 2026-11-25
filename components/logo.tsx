import Image from "next/image";

export function Logo({ className = "h-8 w-auto" }: { className?: string }) {
  return (
    <Image
      src="/brand/slashie-logo-light.svg"
      alt="Slashie"
      width={141}
      height={32}
      priority
      className={className}
    />
  );
}
