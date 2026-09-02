(function(){
  var workSection=document.getElementById('work');
  if(!workSection)return;
  var head=workSection.querySelector('.work-head');
  var list=workSection.querySelector('.work-list');
  if(!head||!list)return;

  var intro=head.querySelector('.body-copy');
  if(intro)intro.textContent='These are not training summaries. Each case study shows the business problem, operating model, execution window, systems, reinforcement plan, and measurable outcome.';

  var impact=document.createElement('div');
  impact.className='impact-strip';
  impact.setAttribute('aria-label','Selected enablement outcomes');
  impact.innerHTML='<div class="impact-stat"><strong>$3.1M</strong><span>Partner-driven revenue influenced</span></div><div class="impact-stat"><strong>+40%</strong><span>Deal conversion lift</span></div><div class="impact-stat"><strong>40–50%</strong><span>Faster partner ramp</span></div><div class="impact-stat"><strong>$700K</strong><span>Annual GTM technology savings</span></div>';
  head.parentNode.insertBefore(impact,list);

  var projects=[
    {
      id:'sentinelone-partner-architecture',
      company:'SentinelOne',
      title:'Partner Enablement Ecosystem & Intelligence Architecture',
      role:'Senior Content & Systems Manager, Partner Enablement',
      timeline:'2024–2025',
      type:'Partner ecosystem transformation',
      metrics:['$3.1M revenue influenced','40–50% faster ramp','4,000+ partners reached'],
      objective:'Replace fragmented partner learning, content, accreditation, and portal experiences with a connected enablement ecosystem that could scale across distinct partner motions while producing usable readiness data.',
      lede:'Rebuilt partner enablement as an operating system: segmented journeys, connected platforms, measurable accreditation, searchable knowledge, and an AI-ready support layer.',
      why:'Partner content and learning lived across disconnected repositories, accreditation paths did not reflect different partner models, and leadership lacked a dependable view of readiness or accreditation velocity.',
      how:'Designed modular learning and accreditation paths for reseller, distributor, MSP/MSSP, system-integrator, technical, and sales audiences. Connected Thought Industries, Impartner, Highspot, Wistia, Articulate, Glean, Google Workspace, and custom portal automations so access, learning, knowledge, telemetry, and reporting worked as one system.',
      process:['Audit content, journeys, and reporting','Segment partner models and roles','Map role capabilities and readiness criteria','Design modular accreditation paths','Connect PRM, LMS, content, and access logic','Instrument telemetry and reporting','Launch priority programs in waves','Reinforce through PartnerPulse and competitive learning','Optimize ramp and accreditation velocity'],
      pm:['Ran curriculum, portal experience, systems integration, analytics, content governance, and AI knowledge support as connected workstreams.','Used overlapping releases instead of waiting for a single large launch: priority learning shipped while deeper integrations continued.','Tracked early adoption and accreditation signals first, then tied mature cohorts to ramp and partner-influenced business outcomes.'],
      programs:['Partner Pre-Sales Fundamentals','Sales Fundamentals','Sales Applied track','Pre-Sales Technical Fundamentals','PurpleAI Partner Specialization','Cloud Fundamentals and personas','Unified Demo Introduction','Competitive Edge','PartnerPulse learning series'],
      tools:['Thought Industries / SentinelOne University','Impartner PRM','Highspot / SalesEdge','Wistia','Articulate 360 / Rise','Glean','11Labs','Canva','Google Workspace','Slack Canvas','Custom widgets and portal automations'],
      outcomes:[['$3.1M','Partner-driven revenue influenced'],['40–50%','Reduction in partner ramp time'],['4,000+','Partners reached through structured enablement']],
      note:'Partner type → role → capability → learning → accreditation → telemetry → readiness → partner revenue.',
      phases:[['01','Diagnose','Inventory fragmented learning, content, access, and reporting'],['02','Segment','Define partner types, roles, and capability requirements'],['03','Architect','Build modular journeys, accreditation, and governance'],['04','Integrate','Connect PRM, LMS, knowledge, content, and telemetry'],['05','Activate','Launch priority programs and recurring reinforcement'],['06','Optimize','Use readiness, ramp, and accreditation data to improve the system']],
      architecture:[['Audience model','Reseller · Distributor · MSP/MSSP · SI · Technical · Sales'],['Access layer','Impartner PRM · role and portal logic'],['Learning layer','Thought Industries · Articulate Rise · Wistia'],['Knowledge layer','Highspot · Glean · Google Workspace'],['Intelligence layer','Telemetry · reporting · custom automations'],['Business layer','Accreditation · readiness · partner revenue']],
      evidence:[['Learning example','Working with Channel Partners','A shareable partner-learning example showing how strategy was translated into concise field-facing learning.','Working%20with%20Channel%20Partners.mp4']]
    },
    {
      id:'twilio-soar',
      company:'Twilio',
      title:'SOAR — Sales Outcomes Achieve Results',
      role:'Senior Sales Enablement Manager, Growth & Training',
      timeline:'2022–2024',
      type:'Global revenue readiness + methodology adoption',
      metrics:['82% MEDDPICC adoption','+40% conversion','+9% productivity'],
      objective:'Create a repeatable global readiness system that connected sales methodology, value-based selling, competitive execution, coaching, accreditation, and workflow reinforcement to measurable field performance.',
      lede:'Built a competency and accreditation engine around the seller behaviors that mattered most to opportunity quality, conversion, and productivity.',
      why:'Rapid growth created inconsistent discovery, qualification, competitive execution, and manager reinforcement. Training alone could not solve the problem; the behavior had to appear in live opportunities and manager inspection.',
      how:'Built a five-module SOAR curriculum spanning value-based selling, competitive intelligence, customer discovery, revenue execution, and manager coaching. Launched an initial 400-person cohort, automated certification and badging, reinforced MEDDPICC inside the operating rhythm, and used adoption plus conversion signals to guide follow-up.',
      process:['Diagnose revenue skill and pipeline friction','Define the SOAR competency model','Build the five-module curriculum','Prepare managers and reinforcement motions','Launch cohort-based learning','Practice against real selling situations','Certify observable performance','Reinforce methodology in workflow','Inspect adoption, productivity, and conversion'],
      pm:['Aligned Sales, Enablement, managers, Revenue Operations, partners, and system owners around a common performance model.','Separated time-to-launch from time-to-impact: the curriculum launched quickly, while behavior and pipeline signals were measured over 30, 60, 90, and 180 days.','Used manager reinforcement and workflow support so accreditation was a gate into field application, not the finish line.'],
      programs:['SOAR five-module curriculum','MEDDPICC reinforcement','Value-based selling','Customer discovery','Competitive intelligence','Manager coaching','Automated accreditation and badging'],
      tools:['Salesforce','Gong','Highspot','Rattle','Slack','6sense','WiseOwl','Workflow automation','Certification pipeline'],
      outcomes:[['82%','MEDDPICC adoption'],['+40%','Deal conversion lift'],['+9%','Global sales productivity'],['$700K','Annual GTM technology savings']],
      note:'Diagnose → learn → practice → prove → apply → reinforce → inspect → improve.',
      phases:[['01','Diagnose','Identify skill gaps, pipeline friction, and target behaviors'],['02','Design','Define competencies, curriculum, manager role, and evidence gates'],['03','Build','Create learning, practice, certification, and workflow support'],['04','Activate','Launch cohorts and manager reinforcement'],['05','Prove','Certify observable performance and inspect methodology use'],['06','Reinforce','Coach in workflow and target gaps from field evidence'],['07','Measure','Validate productivity, conversion, and adoption over time']],
      architecture:[['Business signal','Pipeline friction · conversion · productivity'],['Capability model','Value · discovery · competition · execution · coaching'],['Learning','SOAR curriculum and practice'],['Proof','Certification · manager observation · MEDDPICC adoption'],['Workflow','Salesforce · Gong · Rattle · Highspot'],['Business output','Productivity · conversion · opportunity quality']],
      evidence:[]
    },
    {
      id:'twilio-wiseowl',
      company:'Twilio',
      title:'WiseOwl — AI Knowledge Assistant for Sellers',
      role:'Senior Sales Enablement Manager, Growth & Training',
      timeline:'2022–2024',
      type:'AI-enabled knowledge + seller productivity',
      metrics:['60% less search time','Slack + Salesforce access','AI-assisted answers'],
      objective:'Reduce seller time lost searching for technical API information by putting a practical AI knowledge assistant directly inside the workflows where sellers already worked.',
      lede:'Moved technical knowledge from “go find the answer” to “ask in the workflow,” reducing search friction and helping sellers get back to customer conversations faster.',
      why:'Technical API questions routinely forced sellers to leave their workflow, search across multiple sources, or wait for subject-matter experts. The cost was not only time; it interrupted live deal momentum.',
      how:'Designed WiseOwl as an AI-assisted knowledge experience accessible through Slack and Salesforce. Structured the knowledge interaction around seller questions, usable answers, and fast retrieval rather than exposing the complexity of the underlying content estate.',
      process:['Map repetitive seller questions','Identify trusted knowledge sources','Define answer and escalation patterns','Design in-workflow access','Pilot common technical queries','Tune answer usefulness and retrieval','Launch to seller workflows','Measure time saved and usage','Iterate from unanswered questions'],
      pm:['Treated retrieval quality and seller trust as adoption requirements, not just technical requirements.','Prioritized the highest-frequency questions first so the MVP solved visible field friction quickly.','Used unanswered and repeated questions as a feedback loop for knowledge governance and future enablement.'],
      programs:['AI-assisted technical Q&A','Seller workflow support','Knowledge retrieval','Escalation patterns','Continuous knowledge improvement'],
      tools:['Slack','Salesforce','AI assistant architecture','Curated knowledge sources','Workflow integration','Usage telemetry'],
      outcomes:[['60%','Reduction in seller search time for technical API questions'],['2','Primary seller workflows: Slack and Salesforce'],['Continuous','Knowledge gaps fed back into enablement']],
      note:'Seller question → trusted retrieval → usable answer → customer action → gap telemetry → better knowledge.',
      phases:[['01','Discover','Identify recurring questions and workflow friction'],['02','Curate','Define trusted sources and answer standards'],['03','Build','Create the assistant experience and workflow connections'],['04','Pilot','Test high-frequency technical questions with sellers'],['05','Launch','Put the assistant into Slack and Salesforce workflows'],['06','Optimize','Use adoption and unanswered questions to improve usefulness']],
      architecture:[['User layer','Seller question in Slack or Salesforce'],['Retrieval layer','Curated technical knowledge'],['Answer layer','AI-assisted response'],['Trust layer','Source quality · escalation path'],['Telemetry layer','Usage · unanswered questions · repeat topics'],['Business layer','Less search time · faster seller response']],
      evidence:[]
    },
    {
      id:'reup-gtm',
      company:'ReUp Technologies',
      title:'0 → $1M GTM & Partner Commercialization Engine',
      role:'Co-Founder',
      timeline:'2020–2022',
      type:'Founder-led 0→1 GTM build',
      metrics:['$1M revenue','0→1 GTM build','Partner commercialization'],
      objective:'Turn an early-stage idea into a repeatable commercial motion by building positioning, discovery, qualification, sales execution, partner activation, onboarding, and feedback loops from the ground up.',
      lede:'Co-founded ReUp and built the commercial foundation that helped take the business from zero to $1M in revenue.',
      why:'There was no mature GTM infrastructure to inherit. The company needed a clear market problem, credible value proposition, repeatable sales motion, partner strategy, and operating discipline while simultaneously learning from the market.',
      how:'Built positioning and messaging, discovery and qualification, sales playbooks, partner activation, onboarding, and operating processes. Customer, partner, and pipeline feedback was continuously fed back into the commercial model instead of being treated as a separate research exercise.',
      process:['Define the market problem','Clarify target customers and partners','Build the value proposition','Create commercial messaging','Install discovery and qualification','Build sales playbooks','Activate and onboard partners','Capture pipeline and customer feedback','Refine the GTM motion','Scale repeatable execution'],
      pm:['Balanced company-building priorities across product feedback, positioning, pipeline, partnerships, sales execution, and operations.','Converted founder knowledge into repeatable assets so execution could extend beyond individual conversations.','Used market evidence to refine the motion rather than locking the company into an early hypothesis.'],
      programs:['GTM positioning','Sales messaging','Discovery and qualification','Sales playbooks','Partner activation','Partner onboarding','Commercial operating processes'],
      tools:['GTM operating model','Qualification frameworks','Sales playbooks','Partner onboarding workflows','Messaging architecture','Pipeline feedback loops'],
      outcomes:[['$1M','Revenue built at ReUp Technologies'],['0→1','Commercial operating foundation'],['Founder','Direct ownership across GTM and partner execution']],
      note:'Market problem → positioning → sales motion → partner motion → feedback → repeatable growth.',
      phases:[['01','Define','Clarify the problem, audience, and commercial hypothesis'],['02','Position','Build the value proposition and company narrative'],['03','Sell','Create discovery, qualification, and pipeline discipline'],['04','Partner','Develop activation and onboarding motions'],['05','Systemize','Turn founder knowledge into repeatable processes'],['06','Scale','Use customer and pipeline data to refine growth']],
      architecture:[['Market signal','Customer and partner problems'],['Positioning','Value proposition and narrative'],['Revenue motion','Discovery · qualification · playbooks'],['Partner motion','Activation · onboarding · enablement'],['Operating layer','Repeatable processes and feedback'],['Business output','$1M revenue and commercial foundation']],
      evidence:[]
    },
    {
      id:'tessian-zero-to-one',
      company:'Tessian',
      title:'0 → 1 Global Sales Enablement Operating System',
      role:'Director, Global Sales Enablement',
      timeline:'2019–2020',
      type:'Global enablement build',
      metrics:['40% faster onboarding','94% certification pass','0→1 function build'],
      objective:'Stand up a global enablement function that gave a scaling cybersecurity sales organization a consistent onboarding, readiness, certification, and reinforcement system.',
      lede:'Took global enablement from 0 to 1 and turned fragmented ramp activity into a measurable readiness system.',
      why:'A scaling field organization needed common expectations for what sellers should know, demonstrate, and apply. Without a unified program, ramp quality and manager expectations varied by team and region.',
      how:'Built structured onboarding, role-based readiness, certification, manager reinforcement, and recurring enablement. The program focused on observable proficiency and field application rather than course completion alone.',
      process:['Align leadership on role outcomes','Baseline onboarding friction','Define readiness milestones','Build structured onboarding','Create certification criteria','Prepare managers to reinforce','Launch global cohorts','Inspect ramp and certification data','Iterate from field performance'],
      pm:['Built the function and operating cadence at the same time, prioritizing the highest-impact ramp moments first.','Defined common readiness expectations while preserving enough flexibility for manager coaching and regional context.','Measured both certification and time-to-readiness so learning quality and speed could be improved together.'],
      programs:['Global onboarding','Role-based readiness','Certification','Manager reinforcement','Continuous enablement'],
      tools:['LMS learning paths','Sales playbooks','Certification workflows','Manager coaching','Salesforce','Enablement analytics'],
      outcomes:[['40%','Reduction in onboarding time'],['94%','Certification pass rate'],['0→1','Global enablement function built']],
      note:'Role outcome → onboarding → practice → certification → manager reinforcement → field readiness.',
      phases:[['01','Align','Define role outcomes and business priorities'],['02','Diagnose','Baseline ramp friction and knowledge gaps'],['03','Build','Create onboarding, practice, and certification'],['04','Launch','Run global cohorts with manager reinforcement'],['05','Inspect','Track readiness, certification, and ramp'],['06','Improve','Use field evidence to tune the system']],
      architecture:[['Business need','Scaling global field organization'],['Readiness model','Role outcomes and milestones'],['Learning','Structured onboarding and practice'],['Proof','Certification and manager observation'],['Reinforcement','Manager coaching and continuous enablement'],['Business output','Faster ramp and consistent readiness']],
      evidence:[]
    },
    {
      id:'cofense-global-enablement',
      company:'Cofense',
      title:'Global Sales Enablement & Revenue Readiness',
      role:'Director, Global Sales Enablement',
      timeline:'2018–2019',
      type:'Cybersecurity revenue enablement',
      metrics:['$3M ARR influenced','96% certification pass','Global sales readiness'],
      objective:'Build repeatable global readiness for complex cybersecurity selling by connecting technical fluency, discovery, qualification, competitive execution, certification, and manager reinforcement.',
      lede:'Translated complex phishing-defense and threat-intelligence concepts into field behaviors sellers could use in enterprise conversations.',
      why:'Enterprise cybersecurity selling required sellers to connect technical threat detail to business risk, buyer priorities, qualification, proof, and competitive differentiation without losing credibility with technical stakeholders.',
      how:'Built threat-centric enablement, role-specific learning, sales playbooks, certification, discovery and qualification frameworks, competitive reinforcement, and manager coaching that connected technical understanding to enterprise execution.',
      process:['Map buyer and threat scenarios','Translate technical detail into business impact','Define discovery and qualification standards','Build role-based learning','Practice objections and competitive scenarios','Certify observable readiness','Reinforce through managers','Inspect deal and readiness signals','Refresh content as threats and products changed'],
      pm:['Managed enablement as a recurring field-readiness system rather than a sequence of launches.','Balanced technical depth with commercial usability for enterprise sellers and technical stakeholders.','Used certification and field reinforcement to keep global teams aligned around common standards.'],
      programs:['Threat-centric curriculum','Enterprise discovery and qualification','Competitive enablement','Role-based readiness','Certification','Manager coaching'],
      tools:['Salesforce','LMS learning paths','Sales playbooks','Competitive battlecards','Certification workflows','Manager coaching','Enablement analytics'],
      outcomes:[['$3M','ARR influenced'],['96%','Certification pass rate'],['Global','Common readiness standards across the field']],
      note:'Threat context → buyer risk → discovery → qualification → proof → competitive execution → revenue.',
      phases:[['01','Diagnose','Identify technical, buyer, and deal-execution gaps'],['02','Translate','Turn threat intelligence into buyer and business language'],['03','Build','Create role-based learning, playbooks, and practice'],['04','Activate','Launch global readiness and manager reinforcement'],['05','Prove','Certify observable field capability'],['06','Measure','Inspect readiness, deal execution, and revenue influence']],
      architecture:[['Threat context','Phishing · BEC · human-layer risk'],['Buyer context','CISO · InfoSec · Compliance'],['Commercial motion','Discovery · qualification · value'],['Readiness','Learning · practice · certification'],['Reinforcement','Manager coaching · competitive updates'],['Business output','ARR influence and consistent execution']],
      evidence:[]
    },
    {
      id:'sentinelone-partnerstruck',
      company:'SentinelOne',
      title:'Partnerstruck — Gamified SKO Learning & Automated Remediation',
      role:'Senior Content & Systems Manager, Partner Enablement',
      timeline:'Global SKO campaign',
      type:'Experiential learning + automated remediation',
      metrics:['99% entry rate','68% first-pass','+30 remediated'],
      objective:'Make partner-ecosystem learning measurable and memorable during a global SKO while automatically closing knowledge gaps after the event.',
      lede:'Turned an SKO learning moment into a full loop: engage, assess, diagnose, remediate, reassess, and report.',
      why:'A presentation could create awareness but could not prove comprehension across hundreds of attendees. Leadership needed a scalable way to see who understood the ecosystem and where knowledge was breaking down.',
      how:'Used physical and digital QR touchpoints to drive attendees into a mobile ecosystem assessment. Automated scoring identified failed topics and routed people into targeted micro-learning, followed by reassessment and certification follow-through.',
      process:['Define partner-literacy objectives','Build the mobile assessment','Design SKO engagement touchpoints','Capture and score submissions','Diagnose knowledge gaps','Route targeted micro-learning','Reassess after remediation','Report coverage and remaining gaps'],
      pm:['Designed the campaign across event experience, assessment, scoring, remediation, follow-up, and reporting.','Used live participation and score data to identify where reinforcement was required instead of relying on event satisfaction.','Extended the learning loop beyond SKO so the campaign had a measurable post-event outcome.'],
      programs:['Partner ecosystem assessment','QR learning journey','Automated remediation','Targeted micro-learning','Post-event reassessment'],
      tools:['QR workflow','Mobile assessment','Automated scoring logic','Backend tracking','Micro-learning','Event analytics'],
      outcomes:[['99%','Entry rate among SKO attendees'],['68%','First-pass certification rate'],['+30','Additional people remediated after the event']],
      note:'Engage → assess → diagnose → remediate → reassess → certify → report.',
      phases:[['01','Design','Define learning objectives, assessment, and event mechanics'],['02','Build','Create assessment, scoring, tracking, and remediation'],['03','Activate','Run the experience during the global SKO'],['04','Diagnose','Analyze score distribution and failed topics'],['05','Remediate','Route targeted learning and reassessment'],['06','Close','Report certification coverage and remaining gaps']],
      architecture:[['Engagement','Physical and digital QR touchpoints'],['Assessment','Mobile partner-ecosystem questions'],['Automation','Instant scoring and pass/fail logic'],['Remediation','Targeted micro-learning'],['Reassessment','Follow-up certification'],['Business output','Measured literacy and coverage']],
      evidence:[]
    }
  ];

  var executionWindows={
    'sentinelone-partner-architecture':{total:'16–24 week core build · 2–4 quarters to optimize impact',durations:['Weeks 1–3','Weeks 2–5','Weeks 4–9','Weeks 7–16','Weeks 12–24','Quarter 2+'],analytics:[['0–30 days','Baseline','Findability · enrollment friction · active learner baseline'],['31–60 days','Adoption','Program starts · repeat usage · accreditation velocity'],['61–90 days','Readiness','Assessment quality · time-to-first accreditation · manager/partner feedback'],['90–180+ days','Business impact','Ramp movement · partner-influenced pipeline · revenue contribution']]},
    'twilio-soar':{total:'8–12 week build · 30/60/90 reinforcement · 90–180 day revenue validation',durations:['Weeks 1–2','Weeks 2–4','Weeks 3–7','Weeks 6–10','Weeks 8–12','Days 30–90','Days 90–180'],analytics:[['0–30 days','Adoption','Participation · practice · manager reinforcement · certification starts'],['31–60 days','Behavior','MEDDPICC use · call behaviors · opportunity hygiene'],['61–90 days','Performance','Stage conversion · productivity · opportunity quality'],['90–180 days','Business impact','Conversion trend · productivity trend · savings realization']]},
    'twilio-wiseowl':{total:'6–10 week MVP-to-launch · 90-day optimization loop',durations:['Week 1','Weeks 1–2','Weeks 2–5','Weeks 4–7','Weeks 6–10','Days 30–90'],analytics:[['0–30 days','Trust + adoption','Usage · repeat users · answer usefulness'],['31–60 days','Productivity','Search-time reduction · escalation rate · unanswered questions'],['61–90 days','Workflow value','Repeat usage · seller response speed · knowledge-gap themes'],['Quarterly','Knowledge improvement','Source freshness · new intents · governance backlog']]},
    'reup-gtm':{total:'6–12 month commercialization build',durations:['Month 1','Months 1–2','Months 2–4','Months 3–6','Months 4–9','Months 6–12+'],analytics:[['0–30 days','Market signal','ICP response · discovery quality · message resonance'],['31–90 days','Motion fit','Pipeline creation · qualification consistency · partner activation'],['90–180 days','Repeatability','Win/loss themes · cycle movement · partner contribution'],['6–12 months','Business impact','Revenue growth · repeatable acquisition · partner productivity']]},
    'tessian-zero-to-one':{total:'8–12 week 0→1 launch · 90–180 day ramp validation',durations:['Weeks 1–2','Weeks 1–3','Weeks 3–7','Weeks 6–10','Weeks 8–12','Days 90–180'],analytics:[['0–30 days','Adoption','Onboarding progress · manager participation · practice completion'],['31–60 days','Readiness','Certification progress · skill gaps · manager observation'],['61–90 days','Ramp','Time-to-readiness · early opportunity behaviors'],['90–180 days','Business impact','Ramp-time trend · certification quality · productivity signals']]},
    'cofense-global-enablement':{total:'10–16 week rollout · 90–180 day impact measurement',durations:['Weeks 1–2','Weeks 2–4','Weeks 3–8','Weeks 6–11','Weeks 8–14','Weeks 12–16+'],analytics:[['0–30 days','Knowledge + adoption','Participation · assessment · asset usage'],['31–60 days','Application','Discovery quality · objection handling · manager coaching'],['61–90 days','Deal execution','Qualification consistency · competitive progression'],['90–180 days','Business impact','ARR influence · certification quality · performance trend']]},
    'sentinelone-partnerstruck':{total:'3–5 week build · event activation · 30-day remediation · 90-day follow-through',durations:['Weeks 1–2','Weeks 2–4','Event week','48 hours','Days 1–30','Days 30–90'],analytics:[['Live','Engagement','Entry rate · completion · score distribution'],['48 hours','Diagnosis','Knowledge gaps by topic and cohort'],['0–30 days','Remediation','Targeted learning · reassessment conversion'],['30–90 days','Follow-through','Certification coverage · unresolved gaps · manager action']]}
  };

  function chips(items){return '<div class="tool-cloud">'+items.map(function(item){return '<span>'+item+'</span>'}).join('')+'</div>'}
  function listItems(items){return '<ul>'+items.map(function(item){return '<li>'+item+'</li>'}).join('')+'</ul>'}
  function processFlow(items){return '<div class="process-flow">'+items.map(function(item,i){return '<span class="process-step"><b>'+String(i+1).padStart(2,'0')+'</b>'+item+'</span>'}).join('')+'</div>'}
  function outcomeGrid(items){return '<div class="outcome-grid">'+items.map(function(item){return '<div class="outcome"><strong>'+item[0]+'</strong><span>'+item[1]+'</span></div>'}).join('')+'</div>'}
  function getWindow(p){return executionWindows[p.id]}
  function timelineViz(p){var w=getWindow(p);return '<div class="visual-card timeline-card"><div class="visual-card-head"><span>Execution roadmap</span><small>'+w.total+'</small></div><div class="execution-roadmap">'+p.phases.map(function(item,i){return '<div class="roadmap-phase"><div class="roadmap-marker"><span>'+item[0]+'</span></div><div class="roadmap-copy"><small>'+w.durations[i]+'</small><strong>'+item[1]+'</strong><p>'+item[2]+'</p></div></div>'}).join('')+'</div></div>'}
  function analyticsViz(p){var w=getWindow(p);return '<div class="visual-card analytics-card"><div class="visual-card-head"><span>Measurement plan</span><small>Time to launch ≠ time to impact</small></div><div class="analytics-grid">'+w.analytics.map(function(item){return '<div class="analytics-row"><small>'+item[0]+'</small><strong>'+item[1]+'</strong><span>'+item[2]+'</span></div>'}).join('')+'</div></div>'}
  function architectureViz(p){return '<div class="visual-card architecture-card"><div class="visual-card-head"><span>Operating architecture</span><small>How the work connected</small></div><div class="architecture-flow">'+p.architecture.map(function(item,i){return '<div class="architecture-node"><small>'+String(i+1).padStart(2,'0')+'</small><strong>'+item[0]+'</strong><span>'+item[1]+'</span></div>'}).join('')+'</div></div>'}
  function evidenceViz(p){var usable=(p.evidence||[]).filter(function(item){return item[3]});if(!usable.length)return '';return '<div class="visual-card evidence-card-wrap"><div class="visual-card-head"><span>Shareable proof</span><small>Public-safe evidence only</small></div><div class="evidence-grid">'+usable.map(function(item){return '<a class="evidence-card" href="'+item[3]+'"><span class="evidence-type">'+item[0]+'</span><strong>'+item[1]+'</strong><p>'+item[2]+'</p><span class="evidence-cta">View example ↗</span></a>'}).join('')+'</div></div>'}
  function visualProof(p){return '<section class="project-proof" aria-label="Operating model for '+p.title+'"><div class="proof-intro"><span>How the program operated</span><p>Build window, reinforcement horizon, measurement gates, and system design are separated so the timeline reflects real enablement execution.</p></div><div class="proof-grid">'+timelineViz(p)+analyticsViz(p)+'</div>'+architectureViz(p)+evidenceViz(p)+'</section>'}

  list.classList.add('project-list');
  list.innerHTML=projects.map(function(p,index){var number=String(index+1).padStart(2,'0');return '<article class="project-case" id="'+p.id+'"><button class="project-toggle" type="button" data-project-toggle aria-expanded="false" aria-controls="'+p.id+'-detail"><span class="project-index">'+number+'</span><span class="project-heading"><small>'+p.company+' · '+p.timeline+'</small><h3>'+p.title+'</h3></span><span class="project-metrics">'+p.metrics.map(function(metric){return '<span class="project-metric">'+metric+'</span>'}).join('')+'</span><span class="project-action"><span>Open case study</span><span class="project-action-icon" aria-hidden="true">+</span></span></button><div class="project-detail" id="'+p.id+'-detail" hidden><div class="project-detail-inner"><p class="project-lede">'+p.lede+'</p><div class="project-meta"><span>'+p.role+'</span><span>'+p.timeline+'</span><span>'+p.type+'</span></div><section class="project-block project-objective"><h4>Business objective</h4><p>'+p.objective+'</p></section>'+visualProof(p)+'<div class="project-grid"><section class="project-block"><h4>The problem</h4><p>'+p.why+'</p></section><section class="project-block"><h4>What I built</h4><p>'+p.how+'</p></section><section class="project-block"><h4>Execution process</h4>'+processFlow(p.process)+'</section><section class="project-block"><h4>Operating cadence</h4>'+listItems(p.pm)+'</section><section class="project-block"><h4>Programs + deliverables</h4>'+listItems(p.programs)+'</section><section class="project-block"><h4>Tools + systems</h4>'+chips(p.tools)+'</section></div><section class="project-block measured-outcomes"><h4>Measured outcomes</h4>'+outcomeGrid(p.outcomes)+'</section><div class="project-note"><strong>Operating logic:</strong> '+p.note+'</div></div></div></article>'}).join('');

  list.querySelectorAll('[data-project-toggle]').forEach(function(button){button.addEventListener('click',function(){var expanded=button.getAttribute('aria-expanded')==='true';var caseEl=button.closest('.project-case');var detail=document.getElementById(button.getAttribute('aria-controls'));button.setAttribute('aria-expanded',String(!expanded));if(detail)detail.hidden=expanded;if(caseEl)caseEl.classList.toggle('is-open',!expanded);var label=button.querySelector('.project-action > span:first-child');if(label)label.textContent=expanded?'Open case study':'Close case study';});});
}());