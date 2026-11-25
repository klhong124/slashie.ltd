type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  lede?: string;
  align?: "start" | "center";
  level?: "h1" | "h2";
};

export function SectionHeading({
  eyebrow,
  title,
  lede,
  align = "start",
  level = "h2",
}: SectionHeadingProps) {
  const Heading = level;
  const centered = align === "center";

  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-2xl text-left"}>
      <p className="text-xs font-medium tracking-[0.08em] text-subtle-text uppercase">{eyebrow}</p>
      <Heading className="mt-3 text-[34px] leading-[41px] font-medium tracking-[-0.03em] text-balance lg:text-[44px] lg:leading-[48px] lg:tracking-[-0.035em]">
        {title}
      </Heading>
      {lede ? (
        <p className="mt-4 max-w-[60ch] text-lg leading-7 text-pretty text-muted">{lede}</p>
      ) : null}
    </div>
  );
}
