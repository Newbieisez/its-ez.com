# Revenue Performance Hub — Step 2b Decision Record

**Status:** SIGNED OFF  
**Manual QA owner:** @Newbieisez  
**Implementation branch:** `revenue-hub-v4-prep`

## Approved architecture

- Deterministic `renderKpis() → enhanceMetric()` enhancement path.
- Prompt business logic separated from visible metric guidance.
- Preserve all supported prompt contexts: metric, program, cadence, diagnostic, resource, and role learning.
- Normalize `role` explicitly while keeping defensive fallback behavior for unknown kinds.
- Preserve four observably distinct prompt formats: ChatGPT, Claude, Gemini, and Copilot.
- Keep the existing native `<dialog>` implementation and its current close, backdrop, Escape, copy, and model-switching behavior.
- Scope KPI interaction handling to `#kpi-grid` in the normal bubble phase.
- No document-level KPI capture workaround.
- No `stopImmediatePropagation()` in the consolidated v2 implementation.
- No KPI `MutationObserver`; use the deterministic render/enhance path unless verification proves another mutation path exists.
- No custom Escape listener for the prompt dialog.
- No runtime CSS injection in the consolidated v2 implementation; required styles live in `revenue-performance-v2.css`.
- No v4 modal in the consolidated target architecture.
- Component C lifecycle manager is intentionally eliminated rather than rebuilt.

## Separation of concerns

1. `buildPromptContext(ctx)` owns prompt business logic.
2. `formatPrompt(promptData, model)` owns model-specific text formatting.
3. `buildMetricGuidance(ctx)` owns visible KPI guidance UI only.

`buildMetricGuidance()` must never feed HTML into prompt generation.

## Step 3 acceptance criteria

- Consolidate v4 metric behavior into v2 without deleting v4.
- Preserve the existing non-metric prompt depth and all non-KPI Revenue Hub behavior.
- Make `ctx.kind === 'role'` explicit.
- Preserve four distinct model prompt structures and their evidence/verification safeguards.
- Preserve the existing v2 native dialog rather than replacing it.
- Render metric-specific labels and guidance through `renderKpis() → enhanceMetric()`.
- Use only one KPI interaction path in consolidated v2.
- Keep required metric guidance styles in static v2 CSS.
- Do not add a KPI MutationObserver, custom prompt Escape handler, runtime style injection, or replacement modal.
- Keep `revenue-performance-v4.js` and the v3 loader intact through Step 3.

## Verification gates

### Automated verification

Engineering-owned checks include JavaScript syntax, existing automated browser tests if present, dependency/reference audits, console/runtime checks where scriptable, prompt-format preservation, and duplicate-handler review.

### Manual verification

@Newbieisez owns visual and interactive QA, including role switching, filters/search, Show More/Less, KPI prompts/guidance, dialog interactions, diagnostics, signal scoring/reset, programs, resources, themes, collapsibles, Page Guide, responsive layouts, and duplicate/conflicting UI checks.

**Both tracks must pass before pre-deletion or post-deletion gates are cleared.**

## Hard stop and rollback

Do not delete `revenue-performance-v4.js` or remove `loadInteractionRepair()` until @Newbieisez explicitly approves the pre-deletion manual QA gate.

If post-deletion verification later fails, do not patch forward. Revert the deletion commit in one revert commit, restore the known-good v4 file/loader/init state, rerun verification, and only then begin a new consolidation attempt.
