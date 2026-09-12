# Revenue Performance Hub — Rollback Rule

This rollback rule is load-bearing and applies to the v4 deletion gate.

If verification fails after `revenue-performance-v4.js` is deleted or `loadInteractionRepair()` is removed:

1. Do not patch forward.
2. Revert the deletion commit in one revert commit.
3. Restore `revenue-performance-v4.js`, `loadInteractionRepair()`, and its `init()` call.
4. Re-run the complete automated verification suite on the reverted state.
5. Re-run the required manual verification and confirm the known-good state.
6. Only after the revert is green may a new consolidation attempt begin.
7. Treat the failed verification as new input to the behavior/dependency audit.

Never leave the repository with v4 partially removed while verification is failing.
