import type { ReactNode } from "react";
import { SectionHeading } from "@/components/ui/section-heading";

type SectionProps = {
  id: string;
  title: string;
  description?: string;
  layout?: "split" | "stacked";
  headingAlign?: "left" | "center";
  children?: ReactNode;
};

export function Section({ id, title, description, layout = "split", headingAlign = "left", children }: SectionProps) {
  return (
    <section id={id} aria-labelledby={`${id}-heading`} className="section-spacing border-t border-line">
      <div className={`page-container grid gap-7 ${layout === "split" ? "md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] md:gap-12" : "md:gap-8"}`}>
        <SectionHeading id={id} title={title} description={description} align={headingAlign} />
        {children && <div className={layout === "split" ? "body-copy min-w-0" : "min-w-0"}>{children}</div>}
      </div>
    </section>
  );
}
