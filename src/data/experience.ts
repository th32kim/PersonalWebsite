type ExperienceEntry = {
  id: string;
  company: string;
  role: string;
  startDate: string;
  endDate: string | null;
  startLabel: string;
  endLabel: string;
  bullets: readonly string[];
};

export const experiences: readonly ExperienceEntry[] = [
  {
    id: "td-2026",
    company: "TD Bank",
    role: "Software Engineer Intern",
    startDate: "2026-09",
    endDate: null,
    startLabel: "September 2026",
    endLabel: "Current",
    bullets: [
      "Building a C#/ASP.NET Core and Angular change-management platform that applies application-specific validation rules and integrates the GitHub Copilot SDK for AI-assisted document review.",
      "Developing backend automation across TD Wealth for account validation and application delivery using SQL Server, PowerShell, GitHub Actions, SonarQube, and Nexus.",
    ],
  },
  {
    id: "fundserv-2026",
    company: "Fundserv",
    role: "Software Developer Intern",
    startDate: "2026-01",
    endDate: "2026-04",
    startLabel: "January 2026",
    endLabel: "April 2026",
    bullets: [
      "Worked on secure cloud-native microservices deployed to Azure Kubernetes Service, using APIM, MSAL, PKCE, and JWT for authenticated B2B communication.",
      "Supported automated application delivery through GitHub Actions, ArgoCD, Terraform, Helm, and ACR, with integrated security and quality checks.",
    ],
  },
  {
    id: "fundserv-2025",
    company: "Fundserv",
    role: "Software Developer Intern",
    startDate: "2025-01",
    endDate: "2025-04",
    startLabel: "January 2025",
    endLabel: "April 2025",
    bullets: [
      "Built a full-stack financial onboarding application with Java, Spring Boot, Angular, TypeScript, and Oracle DB to replace manual support workflows.",
      "Developed backend workflows for ingesting, validating, and storing financial data using Spring JPA, SQL, REST APIs, and Unix-based file processing.",
    ],
  },
  {
    id: "ford-2024",
    company: "Ford Pro",
    role: "Software Engineer in Test",
    startDate: "2024-05",
    endDate: "2024-08",
    startLabel: "May 2024",
    endLabel: "August 2024",
    bullets: [
      "Built automated validation across frontend, backend, APIs, and databases using TypeScript, Playwright, Cypress, Postman, and SQL.",
      "Supported CI/CD and production debugging with Tekton, Docker, Azure DevOps, Linux, and Datadog across distributed Ford Pro services.",
    ],
  },
  {
    id: "ford-2023",
    company: "Ford Pro",
    role: "Software Engineer in Test",
    startDate: "2023-09",
    endDate: "2023-12",
    startLabel: "September 2023",
    endLabel: "December 2023",
    bullets: [
      "Developed reusable automation for API, database, and end-to-end application testing using TypeScript-based tooling.",
      "Worked with developers to investigate failures across application, database, and deployment layers."
    ],
  },
  {
    id: "kar-2023",
    company: "KAR Global",
    role: "Quality Engineer",
    startDate: "2023-01",
    endDate: "2023-04",
    startLabel: "January 2023",
    endLabel: "April 2023",
    bullets: [
      "Built automated validation for backend services, database operations, and file-processing workflows using SQL, JavaScript, and TypeScript.",
      "Integrated API and end-to-end testing into Azure DevOps CI/CD pipelines using SoapUI, Testim, and Linux/Unix tooling.",
    ],
  },
];
