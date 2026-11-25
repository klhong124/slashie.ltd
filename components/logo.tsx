import Image from "next/image";

/**
 * The wordmark PNG sits on a padded 2048×1152 canvas; the artwork spans
 * x 187–1862 and y 434–727. The wrapper crops to that box so `className`
 * sizes the visible wordmark, not the padding.
 */
export function Logo({ className = "h-8" }: { className?: string }) {
  return (
    <span className={`relative inline-block aspect-[1676/294] overflow-hidden ${className}`}>
      <Image
        src="/brand/slashie-ltd.png"
        alt="Slashie Ltd"
        width={2048}
        height={1152}
        sizes="240px"
        priority
        className="absolute max-w-none"
        style={{ width: "122.2%", height: "auto", left: "-11.16%", top: "-147.6%" }}
      />
    </span>
  );
}
