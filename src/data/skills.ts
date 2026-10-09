type Skill = {
  name: string;
  icon: string;
  treatment?: "light" | "monochrome";
};

type SkillGroup = {
  title: string;
  layout: "languages" | "frameworks" | "cloud";
  items: readonly Skill[];
};

export const skillGroups: readonly SkillGroup[] = [
  {
    title: "Languages",
    layout: "languages",
    items: [
      { name: "Java", icon: "java" },
      { name: "C#", icon: "csharp" },
      { name: "TypeScript", icon: "typescript" },
      { name: "JavaScript", icon: "javascript" },
      { name: "Python", icon: "python" },
      { name: "SQL", icon: "sql" },
      { name: "PowerShell", icon: "powershell" },
      { name: "YAML", icon: "yaml", treatment: "monochrome" },
    ],
  },
  {
    title: "Frameworks & Tools",
    layout: "frameworks",
    items: [
      { name: "Angular", icon: "angular" },
      { name: "React", icon: "react" },
      { name: "Spring Boot", icon: "spring" },
      { name: "ASP.NET Core", icon: "dotnetcore" },
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "LangChain", icon: "langchain", treatment: "monochrome" },
      { name: "LangGraph", icon: "langgraph", treatment: "monochrome" },
    ],
  },
  {
    title: "Cloud & DevOps",
    layout: "cloud",
    items: [
      { name: "Docker", icon: "docker" },
      { name: "Kubernetes", icon: "kubernetes" },
      { name: "Terraform", icon: "terraform" },
      { name: "GitHub Actions", icon: "githubactions" },
      { name: "AWS", icon: "amazonwebservices", treatment: "light" },
      { name: "Azure", icon: "azure" },
    ],
  },
];
