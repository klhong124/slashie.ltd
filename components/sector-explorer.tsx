"use client";

import { useId, useRef, useState, type KeyboardEvent } from "react";
import type { SiteCopy } from "@/content/types";

type Sectors = SiteCopy["home"]["sectors"];

export function SectorExplorer({ sectors }: { sectors: Sectors }) {
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const baseId = useId();
  const sector = sectors.items[active];

  function onKeyDown(event: KeyboardEvent<HTMLButtonElement>) {
    const last = sectors.items.length - 1;
    const next =
      event.key === "ArrowDown" || event.key === "ArrowRight"
        ? active === last ? 0 : active + 1
        : event.key === "ArrowUp" || event.key === "ArrowLeft"
          ? active === 0 ? last : active - 1
          : event.key === "Home"
            ? 0
            : event.key === "End"
              ? last
              : null;
    if (next === null) return;
    event.preventDefault();
    setActive(next);
    tabs.current[next]?.focus();
  }

  return (
    <div className="grid gap-4 lg:grid-cols-12">
      <div
        role="tablist"
        aria-orientation="vertical"
        aria-label={sectors.eyebrow}
        className="-mx-4 flex snap-x gap-2 overflow-x-auto px-4 pb-1 [scrollbar-width:none] lg:col-span-4 lg:mx-0 lg:flex-col lg:overflow-visible lg:px-0 lg:pb-0"
      >
        {sectors.items.map((item, index) => {
          const selected = index === active;
          return (
            <button
              key={item.id}
              ref={(node) => {
                tabs.current[index] = node;
              }}
              id={`${baseId}-tab-${item.id}`}
              role="tab"
              type="button"
              aria-selected={selected}
              aria-controls={`${baseId}-panel`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActive(index)}
              onKeyDown={onKeyDown}
              className={`flex min-h-12 shrink-0 snap-start items-center justify-between gap-3 rounded-full border px-4 text-left text-base font-medium transition-[background-color,border-color,color,transform] duration-200 ease-[cubic-bezier(0.2,0,0,1)] active:scale-[0.98] motion-reduce:transform-none lg:rounded-xl lg:px-5 ${
                selected
                  ? "border-ink bg-ink text-white"
                  : "border-line bg-surface text-ink hover:border-line-strong"
              }`}
            >
              {item.name}
              <span
                aria-hidden="true"
                className={`hidden size-2 rounded-full transition-colors lg:block ${selected ? "bg-action" : "bg-line"}`}
              />
            </button>
          );
        })}
      </div>
      <div
        id={`${baseId}-panel`}
        role="tabpanel"
        aria-labelledby={`${baseId}-tab-${sector.id}`}
        tabIndex={0}
        className="rounded-2xl border border-line bg-surface p-6 shadow-e2 md:p-10 lg:col-span-8"
      >
        <div key={sector.id} className="rise grid gap-8 md:grid-cols-2">
          <div>
            <p className="text-xs font-medium tracking-[0.08em] text-subtle-text uppercase">{sectors.problemLabel}</p>
            <p className="mt-3 text-xl leading-8 font-medium tracking-[-0.015em] text-pretty">{sector.problem}</p>
          </div>
          <div>
            <p className="text-xs font-medium tracking-[0.08em] text-subtle-text uppercase">{sectors.buildLabel}</p>
            <ol className="mt-3 space-y-2">
              {sector.build.map((item, index) => (
                <li
                  key={item}
                  className="flex items-center gap-3 rounded-lg border border-line px-3 py-2.5 text-base"
                >
                  <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-[#e7fbf0] text-xs font-medium text-link tabular-nums">
                    {index + 1}
                  </span>
                  {item}
                </li>
              ))}
            </ol>
          </div>
          <div className="flex flex-col gap-1 rounded-xl bg-[#0c1310] p-5 text-white md:col-span-2 md:flex-row md:items-center md:gap-4">
            <p className="text-xs font-medium tracking-[0.08em] text-[#54dd9d] uppercase">{sectors.outcomeLabel}</p>
            <p className="text-lg leading-7 font-medium">{sector.outcome}</p>
          </div>
        </div>
        <p className="mt-6 text-sm leading-6 text-muted">{sectors.note}</p>
      </div>
    </div>
  );
}
