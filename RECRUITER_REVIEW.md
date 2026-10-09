# New-grad software engineer recruiter review

Reviewed the rendered desktop and mobile portfolio before editing. Changes preserve the existing visual system and supplied personal, experience, and project information.

| Question | Finding and action |
| --- | --- |
| Identity within five seconds | Name, Waterloo background, and new-grad status are prominent. Kept the existing hierarchy and portrait. |
| Software engineering focus | Rotating titles sometimes hide the main discipline. The static hero label now says New-grad Software Engineer. |
| Resume discoverability | Already visible in the hero. Added a persistent Resume link to the sticky header at every width. |
| GitHub and LinkedIn | Previously required reaching Contact. Added desktop/tablet header icons and labeled links in the mobile menu; retained full details in Contact. |
| Experience scanning | Six roles have visible dates, prominent role headings, company names/logos, and two bullets each. Preserved the timeline and supplied content. |
| Project prioritization | Two featured projects already appear first, with preview media and restrained emphasis. Preserved this. |
| Project comprehension | Descriptions say what each project does without lengthy tool lists. Preserved all four descriptions. |
| Technology stacks | Four compact tags per project stay secondary to titles and descriptions. No change needed. |
| Demo discovery | Visible Play demo controls support mouse, touch, and keyboard; AI-Agent has a sound toggle. No change needed. |
| Distractions | No animated backgrounds or dramatic effects. Role animation can be paused; reduced motion and quiet hover previews are supported. Kept existing behavior. |
| Mobile usability | Stacked layouts, readable cards, and touch controls work. Persistent Resume and mobile profile shortcuts reduce navigation effort. |
| Generic presentation | Personal photo, supplied internships, and authentic demo stills distinguish the page. Reworded awkward Skills/Projects introductions and fixed Contact sentence punctuation. |

## Validation

- Lint, TypeScript, and production build pass.
- Navigation checks pass at 320, 390, 640, 768, 1024, and 1440px: visible shortcuts, mobile menu/Escape/focus, section heading offsets, active states, no horizontal overflow or browser errors.
- Experience checks confirm all six roles, supplied dates and current bullets, loaded company logos, and responsive alignment.
- Project checks verify both videos decode/play, mute/unmute and keyboard controls work, and previews resume muted after pause.
- Contact checks verify exact link destinations, centered responsive methods, email-copy success and denied-clipboard fallback.
- Hero checks confirm portrait loading and its right edge aligned with the introduction on larger screens, centered on mobile.

The five-second assessment is a visual judgment; no recruiter user study was performed. External profile URLs are unchanged and their destinations are checked in the rendered page.
