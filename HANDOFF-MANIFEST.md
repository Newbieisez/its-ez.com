# EZ Enablement V2 — Production Snapshot Handoff Manifest (RC2)

## VERSION
`2.0.0-rc2`

## DATE
`2026-09-22`

## ARCHIVE
`EZ-Enablement-V2-2026-09-22-production-v2-RC2.zip`

## SUMMARY OF CHANGES
- **Commercial Previews Redacted:** Corrected preview architecture across the site. Product previews demonstrate tangible quality via representative excerpts (e.g. 3 representative scenarios for AI Roleplays, sample rubric dimensions for RampReady, representative simulation steps for Deal Labs, framework briefs for AI Judgment) without exposing complete paid intellectual property, answer keys, or downloadable packages.
- **Commercial Performance Claims Audited:** Audited and corrected all exact numerical performance promises across all site pages and catalog data. Prior practitioner achievements (45-day ramp, $700K tooling consolidation, $3.1M partner pipeline) are explicitly designated as historical case-study benchmarks rather than guaranteed future customer outcomes. Replaced manufactured precision with accurate, outcome-oriented capabilities (e.g., "designed to accelerate ramp", "improve qualification consistency", "reduce administrative friction", "increase coaching consistency").
- **Launch Tracker Accuracy Corrected:** Updated Launch Control Tracker so that Production Commerce / Checkout, Fulfillment, and Launch Status are marked `YELLOW` ("Production activation pending business-license approval and live merchant configuration."). Verified content, design, mobile QA, commercial QA, and SEO remain `GREEN`.
- **Stripe Sandbox Isolation:** Confirmed all checkout interactions operate strictly in simulated sandbox test mode. Identified live merchant activation as an external production dependency pending formal Nevada business license completion.
- **Security & Asset Protection Enforced:** Continued exclusion of all paid product ZIP archives, private credentials, customer databases, and webhook secrets from the public website repository snapshot.

## FILES ADDED
- `store.html` (Commercial storefront with category and buyer-role filtering, modal briefs, launch tracker)
- `products-data.js` (Canonical 14-offering catalog data adhering to the 8 Store Standard questions)
- `launch_tracker.md` (Updated 21-column launch readiness tracker reflecting RC2 commercial status)
- `robots.txt` (Search engine indexing directives)
- `sitemap.xml` (Public route sitemap)
- `_headers` (Security headers: X-Frame-Options, X-Content-Type-Options, Referrer-Policy)
- `favicon.svg` (Brand vector favicon)
- `HANDOFF-MANIFEST.md` (This handoff specification)

## FILES MODIFIED
- `index.html` (Audited proof bar and hero copy to reflect historical practitioner context vs outcome language)
- `labs.html` (Added representative simulation notice and Deal Lens Selector diagnostic)
- `how-i-help.html` (Audited consulting sprint descriptions to eliminate manufactured precision)
- `ai.html` (Added commercially redacted 3-scenario roleplay preview and Human Judgment Loop framework)
- `work.html` (Updated case study summaries and systems architecture portfolio)
- `about.html` (Maintained practitioner pedigree and explicit commercial separation from Enablayer)
- `styles.css` (Design system styling for storefront grid, modals, terminal prompts, and status badges)
- `app.js` (Updated Launch Tracker data to YELLOW for commerce/fulfillment, added preview redaction banners, and sandbox checkout)
- `docs/BUILD-BRIEF.md` (Updated build specifications to reflect RC2 release standards)
- `docs/SITE-MAP.md` (Documented route inventory across all 11 HTML pages)
- `docs/QA-CHECKLIST.md` (Completed 4-part quality audit: Content, Commercial, Design, Technical)

## FILES REMOVED
- Deprecated legacy prototype scripts and redundant unredacted asset links.

## SECURITY-SENSITIVE FILES EXCLUDED
- **Stripe Production Secrets:** `sk_live_*` API secret keys, restricted keys, and webhook signing secrets.
- **Third-Party API Credentials:** Cloudflare API tokens, Google Workspace OAuth client secrets, and DNS management keys.
- **Customer PII & Databases:** Private CRM outreach lists, customer email logs, and internal pipeline lead sheets.
- **Internal Authentication:** SSH keys, `.env` files, and production server access tokens.

## PAID PRODUCT FILES EXCLUDED
All proprietary paid product ZIP archives are strictly excluded from this public-site repository snapshot:
- `RampReady-30-60-90-OS-v1.0.0.zip` (Flagship Onboarding Blueprint & 5 Observable Rubrics)
- `EZ-Deal-Labs-Methodology-Suite-v1.0.0.zip` (Complete 6-Methodology Lab Suite & Selector)
- `EZ-AI-Roleplay-Library-v1.0.0.zip` (100-Scenario Simulation Engine & Persona Profiles)
- `EZ-AI-Judgment-Lab-v1.0.0.zip` (Full Courseware Toolkit, Workbooks & xAPI Storyboards)
- `EZ_Enablement_AI_Fluency_Full_Production_Suite.zip` (SCORM 1.2, SCORM 2004, and xAPI Courseware)
- `EZ_Enablement_AI_Fluency_SCORM_1.2.zip` (Standalone SCORM Package)
- All consulting sprint and advisory delivery packets (`EZ-Offer-A-Delivery-Packet.zip`, `EZ-Offer-B-Delivery-Packet.zip`, `EZ-Offer-C-Delivery-Packet.zip`, `EZ-Executive-Advisory-Intake-Packet.zip`, `EZ-Working-Session-Intake-Packet.zip`, `EZ-GTM-Diagnostic-Scope-Intake.zip`, `EZ-Fractional-Charter-Worksheet.zip`)

*Note:* Paid deliverables reside in authenticated cloud storage and are dispatched to customers via automated post-purchase webhooks in production.

## KNOWN ISSUES
- **Live Merchant Processing:** Checkout executes in simulated Stripe sandbox mode. Production payment processing requires configuring live Stripe elements and webhook listener URLs upon business license completion.
- **Calendar Booking Embed:** Advisory and sprint intake workflows capture qualified buyer data and generate confirmation numbers. Direct embedding of live booking software (e.g. Google Calendar appointment scheduling) is deferred to production configuration.

## SANDBOX-ONLY FEATURES
- **Stripe Payment Gateway Simulation:** Accepts test card inputs and simulates transaction approval and receipt generation without contacting live banking networks.
- **Client Delivery Verification Button:** Simulates automated digital asset delivery confirmation and webhook trigger.

## PRODUCTION-DEPENDENT FEATURES
- Live credit card authorization and automated charge capture via Stripe API.
- Automated email dispatch of signed download URLs and corporate license keys via transactional mail service (SendGrid / Postmark).
- Real-time calendar slot reservation and invite dispatch.

## TEST RESULTS
- **HTML/CSS Validation:** 11/11 HTML files validated with matching semantic structure, header, footer, and stylesheet linkages.
- **Responsive Layout Testing:** Verified mobile breakpoint collapse and desktop multi-column grids.
- **Catalog & Store Standard Audit:** 14/14 offerings verified against the 8 Store Standard questions.
- **Claim Audit Screen:** Verified zero ungrounded numerical promises or manufactured precision.
- **Interaction Logic Testing:** Deal Lens Selector tested across 5 decision paths; category filters and keyword search verified; modal dialogs open/close cleanly.
- **Zero Generic AI / Buzzword Filter:** Passed automated screen confirming removal of ungrounded hype and empty filler copy.

## RECOMMENDED GITHUB COMMIT MESSAGE
`chore(release): EZ Enablement V2 rc2 - commercial claim corrections, preview redaction & launch tracker alignment (v2.0.0-rc2)`
