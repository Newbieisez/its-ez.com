# Revenue Performance Hub — Pre-Deletion QA Gate

This checklist is the required verification gate before `revenue-performance-v4.js` can be deleted.

## Automated verification — engineering owned

- JavaScript syntax checks pass for base, v2, v3, and v4.
- Required Revenue Hub assets exist.
- v3 continues to reference v4 while the transition gate is active.
- No KPI `MutationObserver` exists in consolidated v2.
- No `stopImmediatePropagation()` exists in consolidated v2.
- No runtime-created `<style>` exists in consolidated v2.
- No old `task()` prompt function remains in consolidated v2.
- `buildPromptContext()` preserves metric, program, cadence, diagnostic, resource, and explicit role behavior.
- ChatGPT, Claude, Gemini, and Copilot prompt formats remain distinct.
- No repository references to Revenue Hub globals/custom events were found that would create a hidden file-scoped dependency.
- No Playwright/Puppeteer/browser automation currently exists in this repository; interactive browser checks remain manual unless a preview environment supplies scriptable tooling.

## Manual verification — @Newbieisez

Verify the consolidated v2 path directly, not v4's capture-phase override.

- Role switching: Seller, Manager, Operations, Enablement.
- Role-specific learning content and role AI prompt.
- KPI rendering for each role.
- KPI role/type filtering.
- KPI search and empty-result fallback.
- Show More / Show Less.
- `Analyze [metric]` opens the existing native v2 prompt dialog.
- `How to use [metric]` opens/closes the four-part guidance.
- Guidance survives KPI rerenders/search/filter/role changes.
- ChatGPT prompt output.
- Claude prompt output.
- Gemini prompt output.
- Copilot prompt output.
- Four model outputs are visibly distinct.
- Dialog close button.
- Dialog footer Close button.
- Backdrop click close.
- Escape close.
- Copy prompt.
- Diagnostics render/search/category filters/AI analysis.
- Signal scoring and reset.
- Program filtering, AI build prompt, and operating guidance.
- Resource filtering and resource prompt behavior.
- Light/dark mode.
- Collapsible sections.
- Page Guide navigation.
- Desktop, tablet, and mobile layouts.
- No duplicate buttons, guidance panels, modals, or click behavior.
- No visible console errors during the walkthrough.

## Important transition note

`revenue-performance-v4.js` is intentionally still loaded through v3 until this gate is approved. v4 currently uses a document-level capture listener, so it can mask v2 KPI clicks. Manual QA must therefore exercise a preview/test state where the v4 request is disabled or blocked without deleting the file or changing `main`. Once @Newbieisez signs off that v2 works independently, Step 5 may remove v4 and its loader atomically, followed by the same verification again.
