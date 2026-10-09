// Vercel supplies these hosts automatically; no user-configured variables are required.
const vercelHost = process.env.VERCEL_PROJECT_PRODUCTION_URL || process.env.VERCEL_URL;

export const site = {
  name: "Tae Hong (Richard) Kim",
  title: "Tae Hong (Richard) Kim | New-Grad Software Engineer",
  description: "Richard Kim is a new-grad Software Engineer and Waterloo Computer Engineering student. Explore his internships, AI and full-stack projects, and resume.",
  url: new URL(process.env.NEXT_PUBLIC_SITE_URL || (vercelHost ? `https://${vercelHost}` : "http://localhost:3000")),
};
