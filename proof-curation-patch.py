from pathlib import Path


def replace_once(path, old, new, label):
    p = Path(path)
    text = p.read_text(encoding='utf-8')
    count = text.count(old)
    if count != 1:
        raise SystemExit(f'{label}: expected 1 match, found {count}')
    p.write_text(text.replace(old, new, 1), encoding='utf-8')

# Load the proof gallery on the homepage.
replace_once(
    'index.html',
    '<script src="global-nav.js?v=20260911-impact-nav-1" defer></script>',
    '<script src="global-nav.js?v=20260911-impact-nav-1" defer></script>\n<script src="proof-preview.js?v=20260911-proof-curation-1" defer></script>',
    'proof script tag'
)

# Remove the conversion claim that the evidence register says is not yet verified.
replace_once(
    'index.html',
    '<p><strong>Proof from prior MEDDPICC work:</strong> 82% adoption · +40% stage conversion lift.</p>',
    '<p><strong>Prior MEDDPICC work:</strong> methodology rollout, CRM evidence standards, manager coaching, and field reinforcement.</p>',
    'MEDDPICC homepage proof line'
)

# Keep the top-level Twilio story strong without elevating an unresolved conversion claim.
replace_once(
    'global-nav.js',
    '<div class="ez-org-metric"><strong>+40%</strong><span>Deal conversion lift</span></div>',
    '<div class="ez-org-metric"><strong>Global</strong><span>Readiness system spanning training, methodology, coaching, and workflow</span></div>',
    'Twilio career impact metric'
)

# Tighten the Twilio SOAR case study to claims we are comfortable presenting publicly today.
replace_once(
    'projects-core.js',
    "metrics:['$8M pipeline growth','82% MEDDPICC adoption','+40% conversion']",
    "metrics:['$8M pipeline growth','82% MEDDPICC adoption','Global readiness system']",
    'Twilio SOAR metric chips'
)
replace_once(
    'projects-core.js',
    "after:'A measurable competency engine embedded MEDDPICC into workflow and manager inspection — supporting $8M in pipeline growth, 82% adoption, and a 40% conversion lift.'",
    "after:'A measurable competency engine embedded MEDDPICC into workflow and manager inspection, supporting $8M in pipeline growth and 82% MEDDPICC adoption while creating a common readiness system.'",
    'Twilio SOAR after statement'
)
replace_once(
    'projects-core.js',
    "outcomes:[['$8M','Pipeline growth supported'],['82%','MEDDPICC adoption'],['+40%','Deal conversion lift'],['+9%','Global sales productivity'],['$700K','Annual GTM technology savings']]",
    "outcomes:[['$8M','Pipeline growth supported'],['82%','MEDDPICC adoption'],['Global','Common readiness system across methodology, coaching, and workflow']]",
    'Twilio SOAR outcomes'
)

print('Proof curation and claim cleanup applied.')
