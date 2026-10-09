import Image from "next/image";
import type { CSSProperties } from "react";
import { skillGroups } from "@/data/skills";

type SkillGroupProps = {
  group: (typeof skillGroups)[number];
};

export function SkillGroup({ group }: SkillGroupProps) {
  const headingId = `skills-${group.layout}-heading`;
  return (
    <div>
      <h3 id={headingId} className="text-center text-xl font-semibold tracking-tight">{group.title}</h3>
      <ul className="skills-grid mx-auto mt-6" style={{ "--skill-desktop-columns": Math.min(group.items.length, 8) } as CSSProperties} aria-labelledby={headingId}>
        {group.items.map(({ name, icon, treatment }) => (
          <li key={name} className="skill-tile">
            <Image
              src={`/icons/tech/${icon}.svg`}
              width={44}
              height={44}
              alt=""
              unoptimized
              className={`skill-icon ${treatment === "monochrome" ? "skill-icon-monochrome" : ""} ${treatment === "light" ? "rounded-md bg-zinc-100 p-1" : ""}`}
            />
            <span className="flex min-h-10 items-center justify-center text-sm leading-5 font-medium text-ink">{name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
