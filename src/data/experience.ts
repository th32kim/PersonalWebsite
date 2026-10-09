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
      "Building a C# and Angular change management platform that reviews system change requests with GitHub Copilot, reducing manual document validation by 60%.",
      "Developing CI/CD and user-account validation workflows that automate software releases and reduce failures across TD Wealth services.",
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
      "Built and deployed secure microservices on Azure Kubernetes Service to support communication between financial institutions.",
      "Automated application deployments with GitHub Actions and ArgoCD, reducing release effort by approximately 70% while adding security and quality checks.",
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
      "Built a full-stack onboarding application with Java, Spring Boot, Angular, and Oracle DB to replace manual workflows used for financial institution onboarding.",
      "Added CSV upload, validation, and database processing features to the onboarding application, reducing onboarding errors by approximately 40%.",
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
      "Improved CI/CD workflows for Ford Pro services using Tekton, Docker, and Azure DevOps to make builds and deployments more reliable.",
      "Built automated API and end-to-end tests with Playwright, Cypress, and Postman, while using Datadog to investigate production issues.",
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
      "Developed reusable automated tests for APIs, database operations, and end-to-end application workflows using TypeScript-based tools.",
      "Integrated automated validation into CI/CD workflows and worked with developers to debug issues across frontend, backend, database, and infrastructure layers.",
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
      "Developed automated tests for database operations, backend services, and file-verification workflows using SQL, JavaScript, and TypeScript.",
      "Built end-to-end automated testing for automobile auction applications and integrated test execution into Azure DevOps CI/CD pipelines.",
    ],
  },
];
