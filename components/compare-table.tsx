import type { SiteCopy, Tier } from "@/content/types";

type Compare = SiteCopy["pricing"]["compare"];

function Cell({ value, compare }: { value: boolean | string; compare: Compare }) {
  if (typeof value === "string") return <span className="font-medium">{value}</span>;
  return value ? (
    <span className="inline-flex size-6 items-center justify-center rounded-full bg-[#e7fbf0] text-link">
      <svg viewBox="0 0 16 16" className="size-3.5" role="img" aria-label={compare.yes}>
        <path d="M3.5 8.5l3 3 6-7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  ) : (
    <span className="text-line-hover" role="img" aria-label={compare.no}>
      —
    </span>
  );
}

export function CompareTable({ compare, tiers }: { compare: Compare; tiers: Tier[] }) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-line bg-surface shadow-e1">
      <table className="w-full min-w-[40rem] border-collapse text-left text-base">
        <caption className="sr-only">{compare.title}</caption>
        <thead>
          <tr className="border-b border-line">
            <th scope="col" className="px-5 py-4 text-xs font-medium tracking-[0.08em] text-subtle-text uppercase md:px-6">
              {compare.featureLabel}
            </th>
            {tiers.map((tier) => (
              <th
                key={tier.name}
                scope="col"
                className={`px-5 py-4 text-center text-base font-medium md:px-6 ${tier.featured ? "bg-[#e7fbf0]" : ""}`}
              >
                {tier.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-line">
          {compare.rows.map((row) => (
            <tr key={row.label} className="transition-colors hover:bg-canvas">
              <th scope="row" className="px-5 py-3.5 font-normal text-muted md:px-6">
                {row.label}
              </th>
              {row.values.map((value, index) => (
                <td
                  key={`${row.label}-${tiers[index]?.name}`}
                  className={`px-5 py-3.5 text-center md:px-6 ${tiers[index]?.featured ? "bg-[#e7fbf0]/50" : ""}`}
                >
                  <Cell value={value} compare={compare} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
