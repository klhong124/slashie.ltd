import { Eyebrow } from "@/components/section";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  lede?: string;
  align?: "start" | "center";
};

export function SectionHeading({ eyebrow, title, lede, align = "start" }: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-2xl"}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="mt-3 text-[30px] leading-[38px] font-medium tracking-[-0.03em] text-balance md:text-[34px] md:leading-[41px] lg:text-[44px] lg:leading-[48px] lg:tracking-[-0.035em]">
        {title}
      </h2>
      {lede ? (
        <p
          className={`mt-4 max-w-[60ch] text-lg leading-7 text-pretty text-muted ${centered ? "mx-auto" : ""}`}
        >
          {lede}
        </p>
      ) : null}
    </div>
  );
}
