import { experiences } from "@/data/experience";
import Image from "next/image";
import { SectionHeading } from "@/components/ui/section-heading";
import { sectionDescriptions } from "@/data/section-descriptions";

const companyLogos: Record<string, string> = {
  "TD Bank": "/images/companies/td.png",
  Fundserv: "/images/companies/fundserv.svg",
  "Ford Pro": "/images/companies/ford-pro.png",
  "KAR Global": "/images/companies/kar-global.jpg",
};

export function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-heading" className="section-spacing border-t border-line">
      <div className="page-container">
        <SectionHeading id="experience" title="Work Experience" description={sectionDescriptions.experience} align="center" />
        <ol className="experience-timeline" aria-label="Work experience, most recent first">
          {experiences.map((entry) => (
            <li key={entry.id} className="timeline-item">
              <span className="timeline-marker" aria-hidden="true">
                <Image
                  src={companyLogos[entry.company]}
                  alt=""
                  width={48}
                  height={48}
                  className="timeline-company-logo"
                />
              </span>
              <p className="timeline-date">
                    <time dateTime={entry.startDate}>{entry.startLabel}</time>
                    {" - "}
                    {entry.endDate ? <time dateTime={entry.endDate}>{entry.endLabel}</time> : entry.endLabel}
              </p>
              <article className="timeline-card surface-panel p-4 sm:p-6" aria-labelledby={`${entry.id}-heading`}>
                <header>
                  <h3 id={`${entry.id}-heading`} className="text-lg leading-7 font-semibold tracking-tight text-ink sm:text-xl">{entry.role}</h3>
                  <p className="mt-2 text-sm leading-6 font-medium text-accent">{entry.company}</p>
                </header>
                <ul className="body-copy mt-5 list-disc space-y-3 pl-4 text-sm leading-6 marker:text-accent">
                  {entry.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                </ul>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
