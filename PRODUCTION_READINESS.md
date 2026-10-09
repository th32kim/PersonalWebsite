# Production-readiness pass

## SEO

- Updated the page title and description for new-grad software engineering recruiting, using only supplied background.
- Confirmed canonical origin: https://richardkim.me. `NEXT_PUBLIC_SITE_URL` can override it at build time.
- Added Open Graph and Twitter metadata, including a generated 1200×630 sharing image and descriptive alt text.
- Added SVG/ICO favicons, an Apple touch icon, robots.txt, and a one-page sitemap.
- Verified one h1, h2 section headings, h3 skill/role/project headings, English document language, and named sections.

## Performance

| Asset | Before | After |
| --- | ---: | ---: |
| AI-Agent Search demo | 139,284,721 bytes | 5,107,084 bytes |
| Website Generator demo | 7,790,139 bytes | 991,342 bytes |
| Portrait source | 214,913 bytes | 104,376 bytes |
| AI-Agent still | 240,929 bytes | 91,570 bytes |
| Website Generator still | 118,402 bytes | 38,568 bytes |

Videos retain original dimensions and audio, using H.264, 30fps, AAC at 96 kbps, and fast-start MP4 metadata. Original user-supplied files outside the project are unchanged. Redundant original public video copies were removed.

Fullscreen follow-up: the table above describes inline previews. Expanded demos now use higher-quality CRF 17 copies (AI-Agent: 9,413,927 bytes; Website Generator: 2,304,192 bytes), preserving native resolution and copying original audio. They load only after opening the player, with metadata preloading at that point. An explicit video fullscreen action, iOS API fallback, and direct-video fallback link were added. Fullscreen entry/exit and playback were tested in Edge at 320, 390, 768, and 1440px; the iOS API branch was simulated, not tested on a physical iPhone.

Development-mode regression: React Strict Mode's effect cleanup queued a dialog close event that arrived after the dialog reopened, immediately unmounting the expanded player. The close handler now ignores stale events when the dialog is open again. Card media controls also stop click propagation into card playback. Verified actual SVG-icon clicks at all four widths in development and production, repeated touch-icon/fullscreen/close cycles, keyboard Enter/Escape, focus restoration, and scroll unlocking.

Portrait and thumbnails use WebP through Next.js Image. The portrait is preloaded; below-fold thumbnails load lazily. Reserved aspect ratios prevent media layout shifts. Inline video URLs are attached only on playback interaction, and videos use preload="none". Verified no MP4 requests on page load or merely scrolling media into view. Byte-range playback returns HTTP 206.

Replaced the cursor's Framer Motion import with a CSS blink while keeping pause and reduced-motion behavior. The animation library is no longer imported into the page runtime. Removed the unused Button component and portrait placeholder styles. No console logs or placeholder content remain in src.

## Accessibility

- Retained meaningful portrait/thumbnail alt text and empty alt text for decorative logos beside visible labels.
- Verified visible keyboard focus, skip-to-content behavior, mobile-menu Escape/focus restoration, and section-anchor offsets.
- Added an expanded video view using native dialog and video controls, with a named dialog, focus containment, Escape/close control, focus restoration, background scroll lock, and video pause on close.
- Retained inline hover/tap playback, explicit keyboard-accessible Play/Pause controls, and AI-Agent mute/unmute controls.
- Added English WebVTT captions transcribed locally from the AI-Agent narration; corrected technical vocabulary. Caption wording/timing still needs final human review before publishing.
- Removed an unnecessary aria-label on an unnamed generic navigation container.

## Verification

- `npm run lint`, `npm run typecheck`, and `npm run build` pass.
- Production app tested in headless Microsoft Edge at 320, 390, 768, and 1440px, with navigation additionally checked at 640 and 1024px.
- axe WCAG 2 A/AA and WCAG 2.1 AA scans report zero violations on the main page and expanded video dialog at all four audit widths. The open mobile menu also reports zero violations.
- Observed cumulative layout shift was 0 in the automated audit sessions. This is a local result, not a field Core Web Vitals measurement.
- Both video streams decode/play, audio is retained, captions load and display, and inline mute/pause controls work.
- Metadata, canonical URL, favicon/Apple assets, sharing image, robots.txt, sitemap.xml, PDF content type, and MP4 range responses were verified against the production server.
- Existing experience, navigation, portrait alignment, Contact links, and email copy/clipboard-denied fallbacks pass regression checks.

This pass does not deploy the site or configure DNS. Automated accessibility checks do not replace a full assistive-technology review.
