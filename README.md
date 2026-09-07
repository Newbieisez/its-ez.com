# its-ez.com

Personal portfolio and consulting site for Erez Haimowicz.

Live site: https://its-ez.com

## Homepage direction

The homepage uses a dark personal-brand experience built around **People. Performance. Possibilities.** It combines measurable GTM / enablement impact, real company proof, clear consulting offers, live builds, case studies, recommendations, and contact paths.

## Active homepage architecture

The homepage is intentionally simple now:

1. `index.html` contains the real homepage markup, including the approved hero, impact metrics, company logos, offers, portfolio sections, and navigation. There is no replacement hero waiting for JavaScript.
2. `projects-core.js` owns the case-study data and renders the expandable work cards.
3. `projects.js` is enhancement-only: it styles the first case studies as featured journeys, adds company marks, makes live previews scroll-safe, and highlights the current nav section.
4. `hero-2026.css` owns the approved hero and service-strip composition.
5. `homepage-extras.css` owns homepage-only interaction helpers such as live-preview overlays and section scroll offsets.
6. `cinematic.css`, `cinematic-v2.css`, and `site-final.css` provide the dark portfolio presentation layer.
7. `projects.css`, `wow.css`, and `contrast.css` remain shared base / component / compatibility styles used by the homepage and `work-with-me.html`.

## Main pages

- `index.html` — homepage / portfolio
- `work-with-me.html` — consulting and engagement offers
- `recommendations.html` — recommendation archive
- `ai-systems.html` — AI Revenue System
- `audio-event-production.html` — creative production capability page
- `ggw-options.html` — GGW-specific options page

## Important assets

- `assets/ez-hero-black-shirt-v2.jpg` — approved homepage portrait
- `sentinelone-logo.svg` — current SentinelOne mark used on the homepage
- `assets/twilio-logo.svg`
- `assets/tessian-logo.svg`
- `assets/cofense-logo.svg`
- `assets/mimecast-logo.svg`
- `assets/proofpoint-logo.svg`
- `Erez-Haimowicz-Executive-Resume.pdf`

## Repo rules

- Do not add another hero loader or duplicate portrait asset.
- Do not rebuild static homepage sections from JavaScript unless there is a genuine interaction need.
- Do not put company names in the hero as styled text when a logo asset exists.
- Put homepage-only visual helpers in `homepage-extras.css` rather than inline JavaScript styles.
- Keep case-study data in `projects-core.js`; keep progressive enhancement in `projects.js`.
- Preserve the red / black / white personal-brand system across new pages unless a client-specific page intentionally uses another brand.
- Before deleting large media files, verify that no standalone portfolio page or external share link still depends on them.

## Cleanup completed — September 2026

- Made the approved hero, logos, metrics, and AI Revenue navigation part of `index.html` instead of a runtime replacement.
- Removed the obsolete `projects-original.js` nested loader.
- Reduced `projects.js` to enhancement-only behavior.
- Removed the superseded `assets/ez-hero-black-shirt.jpg` portrait.
- Removed the legacy `headshot 2025.jpg` after the homepage stopped referencing it.
- Added actual logo assets for all six companies shown in the hero.
- Separated homepage-only preview / interaction CSS into `homepage-extras.css`.
- Added cache-busted CSS / JS references in the homepage so production picks up the cleaned files reliably.
