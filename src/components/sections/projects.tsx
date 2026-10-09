import { Section } from "@/components/ui/section";
import { sectionDescriptions } from "@/data/section-descriptions";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ui/project-card";

export function Projects() {
  return (
    <Section id="projects" title="Projects" description={sectionDescriptions.projects} layout="stacked" headingAlign="center">
      <ul className="grid grid-cols-1 gap-6 md:grid-cols-2" aria-label="Projects">
        {projects.map((project) => (
          <li key={project.id} className="min-w-0"><ProjectCard project={project} /></li>
        ))}
      </ul>
    </Section>
  );
}
