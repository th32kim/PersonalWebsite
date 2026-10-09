# Project media

website-generator.jpg is an unaltered still at 75% of WebsiteGeneratorDemo.mp4.
ai-agent-search.jpg is an unaltered still at 75% of AIAgentSearch.mp4.
Stills are resized to 1200px wide with their original proportions retained.
Both videos were supplied by Richard Kim. Optimized production copies are stored under public/media/projects/; originals remain unchanged in the supplied external source directory.

The linked repositories were checked for existing project screenshots. No suitable screenshots or live demo URLs were available. RAG AI Chatbot and Eventbook therefore have text-only cards, without fabricated screenshots or unrelated stock imagery.

MP4 paths are retained in src/data/projects.ts. Video cards now support muted inline hover previews on desktop and tap-to-toggle playback on mobile, with explicit Play/Pause buttons. preload="none" defers loading until interaction. Optional demoUrl remains reserved for an actual live demo URL.

The original audio track in AIAgentSearch.mp4 is retained and can be enabled using the card speaker button. Hover playback starts muted.

Production stills are WebP versions of the same authentic frames. Video optimization uses H.264 CRF 23 at 30fps, AAC audio at 96 kbps, and fast-start MP4 metadata, preserving original dimensions and audio. AI-Agent captions were transcribed locally with Whisper small.en, with technical vocabulary corrected. They are not a substitute for final human caption review.

Expanded demos use separate `*-hq.mp4` copies encoded directly from the original recordings with H.264 CRF 17, preset slow, fast-start metadata, and the original AAC audio copied without re-encoding. AI-Agent Search retains 1920×1080 and Website Generator retains 1912×852, both at 30fps. HQ files are approximately 9.4 MB and 2.3 MB respectively. The lightweight CRF 23 copies remain for inline previews. HQ URLs are mounted only when the expanded player opens; metadata preloading then prepares playback and mobile native fullscreen.

The expanded player provides an explicit Fullscreen button, using the video Fullscreen API with an iOS `webkitEnterFullscreen` fallback, and a direct-video link if fullscreen is unavailable or denied. A local two-second AI-Agent segment comparison against the original gave SSIM 0.998729 for HQ versus 0.996896 for the preview; this measures compression fidelity, not added source detail.
