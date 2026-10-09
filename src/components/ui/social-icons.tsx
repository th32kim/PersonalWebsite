import type { SVGProps } from "react";

export function GitHubIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M9 19c-4.3 1.3-4.3-2.2-6-2.7M15 22v-3.9a3.4 3.4 0 0 0-.9-2.6c3-.3 6.2-1.5 6.2-6.8a5.3 5.3 0 0 0-1.5-3.7 4.9 4.9 0 0 0-.1-3.7s-1.2-.4-3.9 1.4a13.4 13.4 0 0 0-7 0C5.1.9 3.9 1.3 3.9 1.3A4.9 4.9 0 0 0 3.8 5a5.3 5.3 0 0 0-1.5 3.7c0 5.3 3.2 6.5 6.2 6.8a3.4 3.4 0 0 0-.9 2.6V22" />
    </svg>
  );
}

export function LinkedInIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="2" fill="none" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="7.25" cy="7.2" r="1.35" />
      <path d="M6 10h2.5v8H6zM10 10h2.5v1.1c.6-.9 1.5-1.3 2.6-1.3 2.3 0 3.4 1.4 3.4 4V18H16v-3.7c0-1.4-.4-2.1-1.5-2.1-1.2 0-1.8.8-1.8 2.3V18H10z" />
    </svg>
  );
}
