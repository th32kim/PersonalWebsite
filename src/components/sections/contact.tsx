import { Section } from "@/components/ui/section";
import { sectionDescriptions } from "@/data/section-descriptions";
import { ContactLinks } from "@/components/ui/contact-links";

export function Contact() {
  return (
    <Section id="contact" title="Contact Information" description={sectionDescriptions.contact} layout="stacked" headingAlign="center">
      <ContactLinks />
    </Section>
  );
}
