import Image from "next/image";
import { ArrowRight, FileText } from "lucide-react";
import { AnimatedRole } from "@/components/ui/animated-role";

export function Hero() {
  return (
    <section id="home" aria-labelledby="hero-heading" className="py-12 sm:py-16 lg:py-20">
      <div className="page-container space-y-8">
        <div className="grid max-w-4xl items-center gap-x-10 gap-y-8 md:grid-cols-[minmax(0,1.65fr)_minmax(0,1fr)]">
        <div className="min-w-0">
          <p className="section-label">New-grad Software Engineer · Waterloo Computer Engineering</p>
          <h1 id="hero-heading" className="mt-4 text-4xl leading-tight font-semibold tracking-tight sm:text-5xl lg:text-[3rem]">
            Tae Hong <span className="whitespace-nowrap">(Richard) Kim</span>
          </h1>
          <AnimatedRole />
          <div className="mt-6 flex flex-wrap gap-3" role="group" aria-label="Explore my work">
            <a href="#projects" className="button button-primary hover:border-accent-hover hover:bg-accent-hover">View Projects<ArrowRight size={16} aria-hidden="true" /></a>
            <a href="/documents/TResume.pdf" target="_blank" rel="noopener noreferrer" className="button button-secondary hover:border-accent hover:text-accent">View Resume<FileText size={16} aria-hidden="true" /><span className="sr-only"> (PDF, opens in a new tab)</span></a>
          </div>
        </div>
        <div className="relative mx-auto aspect-square w-48 overflow-hidden rounded-full border border-line bg-surface shadow-panel sm:w-60 md:mx-0 md:w-full md:max-w-72 md:justify-self-end lg:max-w-80">
          <Image
            src="/images/richard-kim.webp"
            alt="Tae Hong (Richard) Kim outdoors"
            fill
            sizes="(min-width: 1024px) 320px, (min-width: 768px) 280px, (min-width: 640px) 240px, 192px"
            preload
            className="object-cover object-[center_25%]"
          />
        </div>
        </div>
        <div className="min-w-0">
          <div className="body-copy max-w-4xl space-y-4">
            <p>Hi, I’m Richard, a fourth-year Computer Engineering student at the University of Waterloo and an incoming new grad. I’m currently a Software Engineer Intern at TD.</p>
            <p>I’m passionate about building end-to-end software that solves real problems, from full-stack applications and backend services to cloud infrastructure and deployment. More recently, I’ve been interested in bringing AI and LLM capabilities into these systems to create smarter, more useful experiences.</p>
            <p>I’ve previously worked at Fundserv, Ford, and KAR Global. I’m always excited to learn, build, and connect. Feel free to reach out!</p>
          </div>
        </div>
      </div>
    </section>
  );
}
