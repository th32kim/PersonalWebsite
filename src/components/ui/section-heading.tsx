type SectionHeadingProps = {
  id: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({ id, title, description, align = "left" }: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "text-center" : undefined}>
      <h2 id={`${id}-heading`} className="section-heading">{title}</h2>
      {description && (
        <p className={`body-copy mt-4 ${align === "center" ? "mx-auto" : ""}`}>{description}</p>
      )}
    </div>
  );
}
