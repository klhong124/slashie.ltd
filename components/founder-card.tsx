import { Arrow } from "@/components/button-link";
import type { TeamMember } from "@/content/types";

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2);
}

export function MemberCard({ member }: { member: TeamMember }) {
  return (
    <article className="grid gap-8 rounded-2xl border border-line bg-surface p-6 shadow-e1 md:grid-cols-12 md:p-10">
      <div className="md:col-span-4">
        <div
          aria-hidden="true"
          className="flex aspect-square w-28 items-center justify-center rounded-2xl bg-[#e7fbf0] text-[40px] font-medium tracking-[-0.04em] text-link md:w-36 md:text-[52px]"
        >
          {initials(member.name)}
        </div>
      </div>
      <div className="md:col-span-8">
        <p className="text-sm font-medium text-accent">{member.role}</p>
        <h3 className="mt-1 text-[34px] leading-[41px] font-medium tracking-[-0.03em]">{member.name}</h3>
        <p className="mt-4 max-w-[56ch] text-lg leading-7 text-pretty text-muted">{member.body}</p>
        <ul className="mt-6 flex flex-wrap gap-2">
          {member.tags.map((tag) => (
            <li key={tag} className="rounded-full border border-line px-3 py-1 text-sm text-muted">
              {tag}
            </li>
          ))}
        </ul>
        <a
          href={member.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group/link mt-6 inline-flex min-h-11 items-center gap-1.5 text-base font-medium text-link underline-offset-4 hover:underline"
        >
          {member.linkLabel}
          <Arrow />
        </a>
      </div>
    </article>
  );
}
