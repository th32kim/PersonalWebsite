import { Section } from "@/components/ui/section";
import { SkillGroup } from "@/components/ui/skill-group";
import { skillGroups } from "@/data/skills";
import { sectionDescriptions } from "@/data/section-descriptions";

export function About() {
  return (
    <Section id="about" title="Technical Skills" description={sectionDescriptions.about} layout="stacked" headingAlign="center">
      <div className="space-y-12">
        {skillGroups.map((group) => <SkillGroup key={group.layout} group={group} />)}
      </div>
    </Section>
  );
}
