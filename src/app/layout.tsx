import type { Metadata } from "next";
import { site } from "@/data/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: site.url,
  title: site.title,
  description: site.description,
  alternates: { canonical: "/" },
  authors: [{ name: site.name }],
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "/",
    siteName: site.name,
    title: site.title,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
    images: [{ url: "/opengraph-image", alt: "Richard Kim — New-Grad Software Engineer, University of Waterloo" }],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <a
          href="#main-content"
          className="sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:not-sr-only focus:rounded-md focus:bg-surface focus:px-4 focus:py-3 focus:text-accent focus:shadow-panel"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
