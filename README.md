# its-ez.com

Personal portfolio and consulting site for Erez Haimowicz.

Live site: https://its-ez.com

## Homepage direction

The homepage uses a dark personal-brand experience built around **People. Performance. Possibilities.** It combines measurable GTM / enablement impact, real company proof, clear consulting offers, live builds, case studies, recommendations, and contact paths.

## Active homepage architecture

The homepage now has one runtime path instead of stacked legacy loaders:

1. `index.html` provides the page structure and shared navigation / sections.
2. `projects.js` is the single homepage orchestrator. It applies the approved hero, loads the project data layer, enhances the project cards, and keeps live previews scroll-safe.
3. `projects-core.js` contains the case-study data and rendering logic.
4. `hero-2026.css` owns the approved hero and service-strip composition.
5. `homepage-extras.css` owns homepage-only interaction helpers such as live-preview overlays and nav highlighting.
6. `cinematic.css` + `cinematic-v2.css` provide the dark presentation layer for the portfolio sections.
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
- Do not put company names in the hero as styled text when a logo asset exists.
- Put homepage-only visual helpers in `homepage-extras.css` rather than inline JavaScript styles.
- Keep case-study data in `projects-core.js`; keep page orchestration in `projects.js`.
- Preserve the red / black / white personal-brand system across new pages unless a client-specific page intentionally uses another brand.
- Before deleting large media files, verify that no standalone portfolio page or external share link still depends on them.

## Cleanup completed — September 2026

- Removed the obsolete `projects-original.js` nested loader.
- Removed the superseded `assets/ez-hero-black-shirt.jpg` portrait.
- Flattened homepage runtime so the hero, project renderer, previews, and nav behavior are controlled from one script.
- Added actual logo assets for all six companies shown in the hero.
- Separated homepage-only preview / interaction CSS into `homepage-extras.css`.
