# Portfolio visual system

The visual system supports a personalized Navbar and Hero. Technical Skills, Experience, and Projects use supplied content. Contact and Footer are complete; project cards include optional interactive video previews.

## Palette and typography

Tokens live in the Tailwind `@theme` block in `src/app/globals.css` and are available as utility classes such as `bg-canvas`, `text-accent`, and `border-line`.

| Token | Value | Purpose |
| --- | --- | --- |
| `canvas` | `#101215` | Charcoal page background |
| `surface` | `#1b2027` | Dark slate panels and future cards |
| `ink` | `#f0f2f4` | Off-white headings and primary text |
| `muted` | `#a7afb9` | Supporting text |
| `line` | `#303741` | Subtle dividers and borders |
| `accent` | `#8dcabb` | Muted teal links, section labels, focus rings |
| `accent-hover` | `#b2e1d5` | Interactive hover state |
| `accent-soft` | `#203b35` | Optional accent badge background |

System fonts keep rendering fast and avoid external font requests. Segoe UI with Arial/Helvetica fallbacks is used for the main text; Cascadia Code/Consolas for small section labels. Body text uses 16px with 28px line height. The hero heading ranges from 36px to 48px. Section headings range from 24px to 30px.

## Reusable conventions

| Class/component | Usage |
| --- | --- |
| `.page-container` | Shared 1152px maximum outer width, including responsive gutters of 24/40/64px |
| `.section-spacing` | Vertical section padding of 56/80/96px |
| `Section` | Section heading and optional content; split or stacked layout |
| `.section-heading` | Consistent section heading typography |
| `.section-label` | Small uppercase monospace label in the accent color |
| `.body-copy` | Readable line length, relaxed leading, muted color, safe long-text wrapping |
| `.button`, `.button-primary`, `.button-secondary` | Shared control styles, also usable on real link elements when URLs exist |
| `.badge`, `.badge-accent` | Neutral or softly accented tags; do not use color alone to communicate meaning |
| `.surface-panel` | Reusable card surface: 8px radius, thin border, very light shadow, responsive padding |
| `.text-link` | Underlined accent link with visible hover/focus states |
| `.nav-link` | 44px-high navigation target with understated hover border |
| Hero portrait | Next.js Image with a circular crop beside the hero on desktop; between identity and introduction on mobile |
| `SkillGroup`, `.skills-grid`, `.skill-tile` | Reusable technology groups with equal-size local logo tiles, centered wrapping, and hover motion |
| `AnimatedRole` | Typing/deleting animation cycling all five supplied titles, with pause/resume and reduced-motion support |
| `Experience` | Alternating timeline cards with prominent roles, company names, dates opposite each card, and exact accomplishment bullets |

Technical Skills, Languages, Frameworks & Tools, Cloud & DevOps, and Projects headings are centered. Skill tile groups are centered within the page container. Projects uses four reusable cards in the original two-column grid from 768px and a single stacked column below that, with 24px gaps. Featured cards have a lightly accented border, a Featured badge, and an authentic demo still. Cards without images omit the media area entirely. Original image proportions are retained within a 16:9 frame. Titles and short descriptions lead, followed by four small tags and a GitHub link. Descriptions wrap naturally rather than being truncated. Cards stretch to equal height within each row and align their GitHub actions. Hover changes only border and shadow; reduced motion disables transitions. `Section` supports `headingAlign="center"` with its stacked layout for centered section headers.

## Responsive behavior and interaction

Navigation stays compact with Richard Kim on the left and desktop links on the right from 768px. Below that, a disclosure button opens the menu. Escape closes it and restores toggle focus; outside clicks and link selection close it, and resizing to desktop resets it. Active-section links use a subtle accent border and `aria-current`. Explicit anchor selection stays highlighted when the end of the page limits scroll position; manual scrolling restores the scroll spy. Split sections and the hero stack below 768px. Experience uses the original alternating timeline schematic from 768px, with centered markers, dates opposite each card, and small card notches pointing toward the line. Below 768px, cards stack beside a left-hand line with dates above them. Bullet text stays left-aligned. Skill tiles use two columns on phones. From 640px, Languages uses 4 + 4, Frameworks & Tools uses the approved centered 4 + 3, and Cloud & DevOps uses 3 + 3. From 1152px, every group fits in a single row (8, 7, and 6 tiles respectively). On phones the last Frameworks & Tools tile is centered. Buttons wrap naturally.

Use native anchors for same-page navigation. The scroll offset follows the measured sticky-header height plus a 16px gap. Negative scroll margins compensate for section top padding so headings align below the header. Contact reserves enough height to allow this alignment at the end of the page. Keyboard focus uses a teal outline, and a skip link bypasses navigation. View Projects goes to the Projects section. View Resume opens the supplied local PDF in a new tab. GitHub and LinkedIn use the supplied profile URLs; Email uses a mailto link. External links and the resume announce their new-tab behavior to screen readers.

Hover transitions use 150ms color and border changes. Software Engineer is the primary title. Cloud Developer, DevOps Engineer, AI enthusiast, and Quality Engineer are supporting titles. The role types and deletes through all five supplied titles, with a blinking cursor and pause/resume control. Space is reserved for the longest title to avoid layout shifts; screen readers receive a static list of all roles. Reduced-motion preferences show Software Engineer without animation and disable transitions and smooth scrolling. The server and initial client render use static titles to avoid hydration mismatches. No gradients, background animations, decorative blobs, or skill meters are used.

## Validation

Lint, TypeScript, and the production build are checked with the scripts in `package.json`. Navbar/Hero browser review covers 1440px desktop, 768px tablet, and 390px/320px mobile widths, including overflow, portrait loading, CTA destinations, mobile menu interactions, active navigation, sticky-header anchor visibility, reduced motion, and browser errors. The supplied PDF is served with the correct MIME type and unchanged bytes. All five typed titles, pause/resume, and live reduced-motion changes are checked with motion enabled. Email copy success and clipboard-denied fallbacks are exercised without launching a mail application. GitHub returned HTTP 200; LinkedIn blocked automated access with HTTP 999, so its configured URL is checked against the supplied value. Screenshots are inspected for alignment and spacing.

Social links have moved from the Hero to the centered Contact section. Email, LinkedIn, and GitHub appear as three evenly spaced contact methods, each with a circular outlined icon, label, and address or profile URL. They stack on mobile. The Hero retains its project/resume CTAs. The portrait shares only the top identity row; the introduction spans below both columns. Email uses a native mailto link, whose compose window depends on the visitor's configured handler. Clicking Email also reveals the selectable address, a copy button with success feedback, and a manual-copy fallback if clipboard access fails.


## Technology tiles

Each tile is 112px wide with a 44px local SVG icon and consistent space for two-line labels. Row gaps are 12px. Fine-pointer hover lifts a tile 4px, scales its icon to 1.06, and accents its border over 180ms. Informational tiles are not added to keyboard tab order or styled as links. Reduced-motion preferences disable movement and transitions; touch devices have no hover motion. SQL uses a generic database icon rather than a vendor logo. Devicon and Simple Icons attribution, pinned revisions, and licenses are in public/icons/tech/.

Browser checks passed at 320, 390, 640, 768, 1024, 1152, and 1440px, verifying all 21 icons, equal tile sizes, row counts, centered rows, no overflow, no browser errors, and hover/reduced-motion behavior. Lint, TypeScript, and production build checks also pass.


Numbered section labels remain removed. About, Experience, Projects, and Contact have short editable introductions directly below their titles, editable in src/data/section-descriptions.ts. SectionHeading shares typography and spacing for these introductions. Experience uses six supplied roles with exact dates and accomplishment bullets; Projects uses the four supplied projects with reusable cards. The Hero photo and introduction are retained.


## Experience content and validation

The supplied TD Bank, Fundserv (two terms), Ford Pro (two terms), and KAR Global roles appear newest first. Company names, positions, dates, and all twelve bullets are preserved exactly. No additional metrics, tags, or inferred accomplishments are included. The original alternating card schematic is retained and populated with the supplied content. No entrance animation was needed.

Lint, TypeScript, production build, and browser checks pass. Browser verification covers 1440, 768, 640, 390, and 320px, checking all six roles, twelve bullets, exact date labels, no overlapping company/date headers, no horizontal overflow, and no runtime errors.


The Experience timeline matches the supplied video layout: alternating dark cards, central line and markers, dates across the line, prominent role headings, company names, and two supplied bullets per role. Company logos replace the generic building markers, with local assets on white circular backgrounds for consistent contrast. Repeated employers share the same logo asset. Mobile cards use compact padding and a narrower marker column. Content and responsive timeline checks pass from 320px through 1440px.


Navigation alignment checks pass at 1440, 768, 390, and 320px for all four links, mobile menu dismissal, active links, description visibility, direct hash navigation, and horizontal overflow. Lint, TypeScript, and production build checks pass.

Project card checks pass at 320, 390, 640, 768, 1024, and 1440px: exact supplied names/descriptions/stacks/links, two featured cards, two loaded thumbnails, aligned row heights and GitHub actions, no overflow or browser errors, and no unsolicited MP4 requests. Lint, TypeScript, and production build pass. Media provenance is recorded in public/images/projects/SOURCES.md.


## Project grid and video previews

The original grid is restored: two columns from 768px and one column on mobile. ProjectCard plays muted inline video on fine-pointer mouse hover; leaving pauses. Mobile taps on a video card toggle playback, while GitHub and other controls retain their own actions. Explicit Play/Pause buttons support keyboard and touch. AI-Agent Search Engine has an optional hasAudio flag and an Unmute/Mute button. Sound activation is a user gesture; enabling it on a paused video also starts playback. Pausing restores mute for quiet future previews. Only one video plays at a time. IntersectionObserver pauses cards less than 35% visible, and hiding the tab pauses playback. Videos use preload="none", authentic posters, and an error fallback. Reduced motion disables automatic hover playback while explicit playback remains available. Cards without video have no playback controls.

Grid and audio checks pass at 320, 390, 768, and 1440px: restored layout, aligned row heights, no overflow or browser errors, both videos playing, decoded audio present, working Unmute/Mute controls, keyboard playback, and muted resume after pause. Lint, TypeScript, and production build pass.


## Contact and Footer

Contact uses a centered Contact Information heading, the existing recruiting description, and a ContactLinks component styled after the supplied reference. Three open columns display circular icons, labels, and contact details from 768px; smaller screens stack them. Subtle accent changes appear on hover and keyboard focus. Email uses mailto:th32kim@uwaterloo.ca and retains the existing copy/manual-copy fallback. LinkedIn and GitHub use the supplied URLs and accessible external-link labels. There is no form or backend. Controls wrap on narrow screens. The compact footer centers the full name and a year generated with new Date().getFullYear(). Contact minimum height preserves heading alignment below the sticky header while making room for the 72px footer at the bottom.

Checks pass at 320, 390, 768, and 1440px: centered email CTA, exact contact destinations, no duplicate social links in the Hero, footer year/name, footer visible on Contact navigation, no forms or horizontal overflow, and no browser errors. Email copy success, clipboard-denied fallback, and closing email options were tested without opening an external mail application. Lint, TypeScript, and production build pass.

Reference-style Contact checks pass at 320, 390, 768, and 1440px: icon columns align, mobile methods stack, existing description remains, exact link destinations and email copy fallback work, and no page overflow or browser errors occur. Lint, TypeScript, and production build pass.


## Recruiter review refinements

The hero eyebrow now explicitly and persistently states New-grad Software Engineer alongside Waterloo Computer Engineering. The sticky header includes a compact Resume link at all widths, profile icons from 768px, and labeled GitHub/LinkedIn links in the mobile disclosure menu. Contact retains its full social details. Existing sections, portrait alignment, role animation, project emphasis, and videos are preserved. Skills/Projects introductions have more direct wording and Contact punctuation is corrected. No new biographical or accomplishment claims were added. See RECRUITER_REVIEW.md for the twelve-point assessment and completed regression checks.


## Production readiness

SEO uses the confirmed https://richardkim.me origin, full Open Graph/Twitter metadata, a generated sharing image, favicon/Apple icons, robots.txt, and sitemap.xml. Heading levels remain h1 for identity, h2 for sections, and h3 for skill groups/roles/projects.

Portrait and project stills use WebP, with reserved dimensions and lazy Next.js Image for below-fold thumbnails. Video URLs attach on first playback interaction only. Optimized H.264/AAC MP4s preserve dimensions, narration, and duration, use 30fps and fast-start metadata, and reduce the two demos from 147.1 MB combined to about 6.1 MB. Inline previews retain the existing hover/tap and audio controls. Expand controls open a native dialog with native video controls, keyboard focus containment, Escape/close support, focus restoration, and body scroll locking. AI-Agent English captions were locally transcribed and technical names corrected; they should receive a final narration/timing review before publishing. Cursor blinking uses CSS instead of a client animation library. The unused Button component and portrait placeholder styles were removed.
