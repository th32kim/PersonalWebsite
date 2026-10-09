# Software Engineer Portfolio

Single-page portfolio with a personalized Navbar and Hero. Technical Skills, Experience, and Projects use supplied information. Contact and Footer are complete with centered professional links, a mailto CTA, and an automatically generated copyright year. No backend.

## Local development

Use Node.js 20.9 or newer and npm.

```sh
npm install
npm run dev
```

Open http://localhost:3000.

```sh
npm run lint
npm run typecheck
npm run build
npm start
```

`npm start` serves the production build after `npm run build`.

## Structure

- `src/app/`: App Router home page, root layout, metadata, and global Tailwind styling.
- `src/components/layout/`: Sticky Navbar and Footer.
- `src/components/sections/`: Hero, Technical Skills (About), Experience, Projects, and Contact sections.
- `src/components/ui/`: Shared section layout, social icons, typing titles, video dialog, and email fallback controls.
- `src/data/navigation.ts`: Same-page navigation labels and anchors.
- `src/types/project.ts`: Project content type with optional image, video asset, and live demo fields.
- `src/data/projects.ts`: Four projects with supplied descriptions, technology lists, GitHub links, and optional media.
- `src/components/ui/project-card.tsx`: Reusable project cards supporting image and text-only layouts.
- `public/`: Resume, portrait, logos, project stills, and supplied MP4 assets.

## Scope

Tailwind CSS uses the v4 PostCSS integration and CSS-based theme configuration in `globals.css`. Navigation uses native anchor links with smooth scrolling and a sticky-header offset. Reduced-motion preferences disable smooth scrolling. Layouts wrap on smaller screens; keyboard users have a skip link and visible focus indicators.

The visual system uses charcoal backgrounds, off-white text, a muted teal accent, and shared styling conventions. See [DESIGN.md](./DESIGN.md) for tokens and usage. The Navbar has a mobile disclosure menu and active-section highlighting. The Hero contains Richard's supplied introduction, profile photo, all five titles, and project/resume CTAs. Titles type and delete through all five roles, with pause/resume and a static reduced-motion alternative. Professional links now appear in the centered Contact section, with three circular icon links for Email, LinkedIn, and GitHub. The introduction spans beneath the identity block and portrait to avoid an empty photo column. Email opens the configured mail app and reveals a copy-address fallback. Technical Skills contains 21 supplied technologies under Languages, Frameworks & Tools, and Cloud & DevOps. Equal-size logo tiles wrap into centered rows and use a restrained hover lift with reduced-motion support. Work Experience fills the original alternating timeline with six supplied roles in reverse chronological order, exact dates, and two supplied accomplishment bullets per role. It stacks beside a left-hand timeline on mobile. Projects uses the supplied four-project card layout; Contact and Footer are complete with centered professional links, a mailto CTA, and an automatically generated copyright year.

The portrait is served from `public/images/richard-kim.webp` using Next.js Image. The supplied resume is served unchanged from `public/documents/TResume.pdf`.

Projects now shows AI Website Generator, AI-Agent Search Engine, RAG AI Chatbot, and Eventbook. The first two have subtle featured borders and stills from the supplied recordings. Cards use the original two-column grid from 768px and stack in one column below that. Descriptions wrap naturally without truncation; each card has four compact technology tags and a GitHub link. MP4s are stored under `public/media/projects/`. Videos use muted inline playback: fine-pointer hover plays, leaving the card pauses, and mobile taps toggle playback. Each video has an accessible Play/Pause button. AI-Agent Search Engine also has an Unmute/Mute button for its original audio. Explicit sound activation starts playback when paused; pausing restores mute so future hover previews stay quiet. Preload is disabled until interaction, scrolling out of view or hiding the tab pauses playback, and only one preview plays at a time. Reduced motion disables hover autoplay. No live demo URLs were supplied, so no live demo links are shown. Production MP4s are H.264/AAC with fast-start metadata: AI-Agent Search is about 5.1 MB and Website Generator about 1 MB. The original supplied files are unchanged outside the project.

## Dependency audit

At setup, npm reported five high-severity development-tool advisories in the Next.js ESLint config's `fast-glob` / `micromatch` / `braces` dependency chain. npm's suggested fix downgrades the Next.js lint config to a different major version, so it was not applied. The production dependencies had no reported advisories. Recheck when upstream tooling is updated.


Technology data lives in src/data/skills.ts, rendered by the reusable SkillGroup component. Local icons and their licenses/source references are in public/icons/tech/.


Experience content lives in src/data/experience.ts and is rendered by src/components/sections/experience.tsx. No accomplishments or metrics were added beyond the supplied content.



Recruiter-focused review and validation are documented in [RECRUITER_REVIEW.md](./RECRUITER_REVIEW.md). The sticky header now keeps Resume accessible at all widths and offers GitHub/LinkedIn shortcuts on desktop/tablet or in the mobile menu. A static hero label preserves the new-grad software engineering focus while supporting titles animate.

## Production metadata and media

Canonical, Open Graph, and Twitter metadata use https://richardkim.me. Override NEXT_PUBLIC_SITE_URL at build time if the public origin changes; .env.example shows the setting. The app includes favicon/Apple icons, a generated 1200x630 sharing image, robots.txt, and a sitemap.

Project thumbnails use lazy Next.js Image and WebP assets. Inline MP4 URLs attach only after playback interaction, with preload="none". Expanded demos use a native dialog with native playback controls, Escape/close controls, focus containment/restoration, and scroll locking. AI-Agent Search has English captions generated locally from narration; technical names were corrected. Review caption wording/timing before publishing. The cursor blink uses CSS; Framer Motion is not imported into the page runtime.

Expanded demos load separate higher-quality CRF 17 copies only when the player opens, with metadata preloading at that point. They retain original recording dimensions and audio (AI-Agent: 1920×1080, approximately 9.4 MB; Website Generator: 1912×852, approximately 2.3 MB). The player provides an explicit Fullscreen button, an iOS native-video fallback, and a direct-video link if fullscreen is unavailable. Lightweight inline previews remain unchanged.

Production validation details are in [PRODUCTION_READINESS.md](./PRODUCTION_READINESS.md).
