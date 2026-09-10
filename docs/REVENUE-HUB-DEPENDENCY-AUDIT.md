# Revenue Performance Hub — Step 9 Dependency Audit

## Scope

Audit performed before any v4 deletion. This document records the known production loading chain and hidden-dependency checks relevant to the Revenue Hub.

## Current production loading chain

`revenue-performance.html` directly loads:

- `revenue-performance.css`
- `revenue-performance-v2.css`
- `revenue-performance-v3.css`
- `global-nav.js`
- `revenue-performance.js`
- `revenue-performance-v2.js`
- `revenue-performance-v3.js`

`revenue-performance-v3.js` dynamically loads:

- `revenue-performance-v4.js`

The v4 dynamic loader remains intentionally intact during Step 3.

## Dependency checks completed

- Exact `revenue-performance-v4.js` reference search: found in the v3 dynamic loader.
- `loadInteractionRepair` search: found in v3 only.
- `rp4Ready` search: found in v4 only.
- `rp4-modal` search: found in v4 only.
- `RPHub` search: no repository matches.
- `window.RP` search: no repository matches.
- `CustomEvent` search: no repository matches.
- `gtag(` search: no repository matches.
- `dataLayer` search: no repository matches.
- Revenue Hub HTML bottom section inspected: no inline `<script>` block is present after the directly referenced script tags in `<head>`.
- Repository `dispatchEvent(` matches are navigation/page-map events in `global-nav.js` / `projects.js`, not Revenue Hub v4 globals or KPI contracts.

## Consolidated v2 checks

- No `MutationObserver` in consolidated v2.
- No `stopImmediatePropagation()` in consolidated v2.
- No runtime `document.createElement('style')` in consolidated v2.
- No legacy `function task(` remains; prompt business logic now routes through `buildPromptContext()`.
- KPI interactions are scoped to `#kpi-grid` using a single bubble-phase listener.
- Existing non-KPI systems remain in v2 rather than being rewritten as part of this consolidation.

## Browser-test coverage

Repository search found no existing Playwright or Puppeteer test harness and no `package.json`-based browser test setup. The current GitHub Actions smoke workflow covers syntax and required assets, but visual/interactive verification remains a manual gate owned by @Newbieisez.

## Deletion rule

This audit does **not** authorize deletion of v4. `revenue-performance-v4.js` and `loadInteractionRepair()` remain until automated verification and @Newbieisez manual QA both pass. Post-deletion verification must repeat the dependency audit and interactive checklist.
