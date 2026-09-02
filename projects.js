(function(){
  var workSection=document.getElementById('work');
  if(!workSection)return;
  var head=workSection.querySelector('.work-head');
  var list=workSection.querySelector('.work-list');
  if(!head||!list)return;

  var intro=head.querySelector('.body-copy');
  if(intro)intro.textContent='Start with the outcome. Expand any project to see the objective, business problem, execution, operating process, systems architecture, and measurable proof behind the result.';

  var impact=document.createElement('div');
  impact.className='impact-strip';
  impact.setAttribute('aria-label','Selected business and enablement outcomes');
  impact.innerHTML='<div class="impact-stat"><strong>$3.1M</strong><span>Partner-driven revenue influenced</span></div><div class="impact-stat"><strong>$1M</strong><span>Revenue built at ReUp Technologies</span></div><div class="impact-stat"><strong>+40%</strong><span>Deal conversion lift</span></div><div class="impact-stat"><strong>−37 days</strong><span>Average sales cycle reduction</span></div>';
  head.parentNode.insertBefore(impact,list);

  var projects=[
    {
      id:'sentinelone-partner-architecture',company:'SentinelOne',title:'Partner Enablement Ecosystem & Intelligence Architecture',role:'Content and Systems Manager, Partner Enablement',timeline:'2024–2025',type:'Partner ecosystem transformation',metrics:['$3.1M revenue influenced','40–50% faster ramp','Analytics baseline'],
      objective:'Replace a fragmented, legacy partner enablement environment with a unified, scalable ecosystem featuring automated course tracking, segmented accreditation paths, and conversational AI support.',
      lede:'Rebuilt the partner enablement operating environment as a connected system instead of a collection of courses, portals, and repositories.',
      why:'GTM collateral was decentralized across disparate repositories, leadership lacked analytics visibility into partner learning, and legacy accreditation paths were rigid and failed to differentiate between resellers, MSPs, system integrators, and other partner models.',
      how:'Designed a modular partner enablement ecosystem tailored to specific partner tracks. Engineered custom widgets and backend portal automations to bridge integration gaps and capture real-time user telemetry. Consolidated legacy materials into a searchable repository and pioneered the initial architecture for an intelligent conversational bot to handle complex partner queries.',
      process:['Audit content + learning journeys','Segment partner models + roles','Map capability requirements','Design modular accreditation paths','Connect LMS + PRM workflows','Build custom widgets + automations','Centralize searchable knowledge','Add telemetry + reporting','Prototype conversational AI support','Measure ramp + accreditation velocity'],
      pm:['Managed curriculum, portal experience, systems integration, analytics, content governance, and AI knowledge support as connected workstreams.','Sequenced dependencies across partner identity, enrollment, accreditation logic, content access, reporting, and launch communications.','Used modular releases so priority learning experiences could ship while deeper integrations continued to mature.','Established the first usable analytics baseline for partner accreditation velocity and readiness.'],
      programs:['Partner Pre-Sales Fundamentals','Sales Fundamentals','Sales Applied track','Pre-Sales Technical Fundamentals','PurpleAI Partner Specialization','Cloud Fundamentals + personas','Unified Demo Introduction','Competitive Edge','PartnerPulse learning series'],
      tools:['Thought Industries / SentinelOne University','Highspot / SalesEdge','Impartner PRM','Wistia','Articulate 360 / Rise','Glean','11Labs','Canva','Google Workspace','Slack Canvas','Custom widgets + portal automations','Conversational AI architecture'],
      outcomes:[['$3.1M','Partner-driven revenue influenced'],['40–50%','Global partner ramp-time reduction'],['First','Analytics baseline for accreditation velocity']],
      note:'Partner Type → Role → Capability → Learning → Accreditation → Telemetry → Readiness → Revenue.',
      phases:[['01','Audit','Map fragmented content, learning paths and reporting gaps'],['02','Segment','Differentiate partner models, roles and needs'],['03','Architect','Build modular learning + accreditation paths'],['04','Integrate','Connect PRM, LMS, knowledge and telemetry'],['05','Intelligence','Add analytics + conversational AI foundation'],['06','Optimize','Measure ramp, accreditation velocity and revenue']],
      architecture:[['Partner identity','Reseller · Distributor · MSP/MSSP · SI · Technical · Sales'],['Portal + access','Impartner PRM · custom portal logic'],['Learning','Thought Industries · Articulate Rise · Wistia'],['Content + knowledge','Highspot · Glean · Google Workspace · Canva'],['Intelligence','Telemetry · custom widgets · conversational AI'],['Business output','Accreditation · readiness · partner revenue']],
      evidence:[['Video learning','Working with Channel Partners','Representative partner learning asset connected to the wider readiness architecture.','Working%20with%20Channel%20Partners.mp4'],['Framework','4-Stage Enablement Framework','Know → Practice → Prove → Perform applied as a readiness model.','#artifact-framework']]
    },
    {
      id:'sentinelone-partnerstruck',company:'SentinelOne',title:'Partnerstruck — Gamified SKO Engagement & Certification',role:'Content and Systems Manager, Partner Enablement',timeline:'Global SKO',type:'Gamified learning + automated remediation',metrics:['99% entry rate','68% first-pass','+30 remediated'],
      objective:'Execute an immersive, gamified learning campaign during the global Sales Kickoff to drive comprehensive team literacy around the partner ecosystem.',
      lede:'Turned a global SKO into an interactive partner-learning environment that measured comprehension in real time and automatically remediated knowledge gaps.',
      why:'Traditional presentation formats failed to drive genuine comprehension of complex partner strategies, and leadership needed a scalable way to measure baseline knowledge across hundreds of attendees simultaneously without manual administrative drag.',
      how:'Deployed physical and digital QR codes across the SKO venue linked to a mobile ecosystem assessment. Built an automated backend tracking system that instantly scored submissions and routed failing scores to targeted micro-learning remediation modules. Anchored the campaign with a custom branded fuzzy-goat reward symbolizing ecosystem mastery.',
      process:['Define partner-literacy objectives','Build mobile ecosystem assessment','Deploy venue QR touchpoints','Capture + score submissions instantly','Identify failed knowledge areas','Route targeted remediation','Reassess post-event','Reward mastery','Report organizational coverage'],
      pm:['Designed the experience across physical venue moments, mobile assessment, scoring logic, remediation, and reward mechanics.','Coordinated content, event logistics, scoring thresholds, follow-up learning, and completion tracking as one campaign.','Used live participation and pass-rate data to see where reinforcement was required.','Extended the learning loop beyond SKO through automated post-event remediation.'],
      programs:['Partnerstruck ecosystem assessment','QR-based learning journey','Automated remediation loops','Targeted micro-learning','Post-event certification follow-up','Gamified fuzzy-goat reward'],
      tools:['QR workflow','Mobile assessment','Automated scoring logic','Backend tracking automation','Micro-learning remediation','Event analytics','Certification workflow'],
      outcomes:[['99%','Entry rate among SKO attendees'],['68%','First-pass certification rate'],['+30','Additional people converted through remediation']],
      note:'Engage → Assess → Score → Diagnose → Remediate → Reassess → Certify.',
      phases:[['01','Engage','QR touchpoints create participation'],['02','Assess','Mobile ecosystem assessment captures literacy'],['03','Score','Backend automation evaluates submissions'],['04','Remediate','Targeted micro-learning closes failed areas'],['05','Reassess','Post-event follow-up converts remaining gaps'],['06','Certify','Reward mastery + report coverage']],
      architecture:[['Venue layer','Physical + digital QR entry points'],['Assessment','Mobile partner-ecosystem assessment'],['Automation','Instant scoring + pass/fail logic'],['Learning','Targeted remediation modules'],['Engagement','Branded fuzzy-goat reward'],['Output','Participation · certification · coverage']],
      evidence:[['Experience design','QR Learning Journey','Physical SKO moments connected to measurable mobile learning.',null],['Automation','Remediation Loop','Failing scores triggered targeted follow-up learning instead of manual administration.',null]]
    },
    {
      id:'twilio-soar',company:'Twilio',title:'SOAR — Sales Outcomes Achieve Results Enablement Framework',role:'Senior Sales Enablement Manager',timeline:'2022–2024',type:'Global sales + partner accreditation',metrics:['+9% productivity','+40% conversion','82% MEDDPICC'],
      objective:'Design and launch a multi-tiered enablement and accreditation program for internal sales teams and external partners to standardize core revenue competencies.',
      lede:'Built a scalable competency and accreditation system around the behaviors that mattered most to revenue execution.',
      why:'Sales reps and partners lacked a standardized framework for value-based conversations and complex competitive landscapes, while company hyper-growth demanded a scalable way to upskill hundreds of stakeholders.',
      how:'Developed a rigorous five-module curriculum covering value-based selling, advanced competitive intelligence, customer discovery, revenue execution, and management coaching. Rolled out the program to an initial cohort of 400 people with an automated certification pipeline issuing official badges and certificates of completion.',
      process:['Diagnose revenue skill gaps','Define SOAR competency model','Build five-module curriculum','Launch to initial 400-person cohort','Practice against real selling situations','Automate certification + badging','Reinforce MEDDPICC behaviors','Integrate workflow automation + LLM support','Measure adoption + productivity + conversion'],
      pm:['Aligned enablement, sales leadership, managers, Revenue Operations, partners, and system owners around a common competency model.','Sequenced learner readiness, manager reinforcement, accreditation, and workflow support so the program extended beyond formal training.','Used behavioral adoption and conversion signals to guide reinforcement.','Scaled delivery through repeatable curriculum, automation, and certification infrastructure.'],
      programs:['Value-based selling','Advanced competitive intelligence','Customer discovery','Revenue execution','Management coaching','MEDDPICC reinforcement','Automated accreditation + badging'],
      tools:['Salesforce','Gong','Highspot','Rattle','Slack','6sense','WiseOwl','LLM systems','Workflow automation','Certification pipeline'],
      outcomes:[['+9%','Sales productivity'],['+40%','Deal conversion rates'],['82%','MEDDPICC adoption'],['$700K','Annual operational savings']],
      note:'Diagnose → Learn → Practice → Apply → Certify → Reinforce → Measure.',
      phases:[['01','Diagnose','Identify revenue skill + execution gaps'],['02','Design','Define five-module SOAR architecture'],['03','Launch','Initial 400-person cohort'],['04','Practice','Apply skills to selling situations'],['05','Certify','Automate badges + completion credentials'],['06','Reinforce','MEDDPICC · managers · workflow · AI'],['07','Measure','Productivity + conversion + adoption']],
      architecture:[['Competencies','Value · competition · discovery · execution · coaching'],['Learning','Five-module SOAR curriculum'],['Practice','Applied selling + manager reinforcement'],['Accreditation','Automated badges + certificates'],['Workflow','Salesforce · Rattle · LLM support'],['Business output','9% productivity · 40% conversion · 82% MEDDPICC']],
      evidence:[['Performance model','4-Stage Enablement Framework','Representative model for moving from knowledge to demonstrated performance.','#artifact-framework'],['Architecture','8-Week Enablement Accelerator','Representative sequence for design, pilot, rollout and measurement.','#artifact-accelerator']]
    },
    {
      id:'twilio-gong-intelligence',company:'Twilio',title:'Gong Conversational Intelligence Architecture & Data Pipeline',role:'Senior Sales Enablement Manager',timeline:'2022–2024',type:'Conversation intelligence + performance analytics',metrics:['400+ participants','SOAR catalyst','VoC telemetry'],
      objective:'Configure and optimize the enterprise Gong environment to systematically capture, analyze, and surface actionable voice-of-the-customer data.',
      lede:'Turned Gong from a call repository into an evidence engine for identifying field behaviors, skill gaps, competitive friction, and coaching priorities.',
      why:'Leadership lacked empirical data showing what top reps were saying on calls versus where deals were stalling, leaving GTM strategy reliant on anecdotal feedback rather than scalable analytics.',
      how:'Built custom keyword tracking dictionaries, custom trackers, and advanced analytics filters within Gong to map critical sales behaviors and competitive friction points. Partnered with Sales Operations to extract telemetry including talk-to-listen ratios, call duration, and objection frequency, then established a closed-loop data-to-action pipeline that directly served as a catalyst for the SOAR program.',
      process:['Define behaviors + questions to observe','Build keyword dictionaries','Configure custom trackers','Segment calls + cohorts','Extract conversation telemetry','Compare top-rep + stalled-deal patterns','Map recurring skill gaps','Feed findings into SOAR','Measure behavior after reinforcement'],
      pm:['Partnered with Sales Operations and revenue leaders to define the signals worth measuring.','Established a repeatable cadence connecting conversational telemetry to curriculum, coaching, and manager reinforcement.','Used field evidence to prioritize enablement investment instead of relying on anecdote.','Created a closed loop between customer conversations, program design, and follow-up measurement.'],
      programs:['Voice-of-customer analysis','Custom conversation trackers','Behavior analytics','Objection intelligence','Competitive friction analysis','SOAR curriculum inputs','Manager coaching insights'],
      tools:['Gong','Salesforce','Sales Operations data pipeline','Highspot','Custom trackers','Keyword dictionaries','Advanced analytics filters','Manager coaching workflows'],
      outcomes:[['400+','SOAR participants supported by the intelligence loop'],['+9%','Productivity lift in the resulting program'],['+40%','Conversion gain in the resulting program']],
      note:'Conversation → Signal → Pattern → Skill Gap → Enablement → Coaching → Behavior Change → Revenue.',
      phases:[['01','Observe','Define behaviors + friction to inspect'],['02','Instrument','Build trackers, keywords and filters'],['03','Analyze','Extract talk, objection and topic telemetry'],['04','Compare','Find top-rep + stalled-deal patterns'],['05','Enable','Translate patterns into SOAR + coaching'],['06','Measure','Watch behavior after reinforcement']],
      architecture:[['Conversation layer','Gong calls + transcripts'],['Detection','Keyword dictionaries · custom trackers'],['Analytics','Filters · talk ratios · duration · objections'],['Data partnership','Sales Operations telemetry pipeline'],['Action layer','SOAR · coaching · manager reinforcement'],['Business output','Evidence-based skill priorities']],
      evidence:[['Intelligence map','Conversation-to-Enablement Loop','Customer conversations became a structured input into program design.',null],['Program linkage','SOAR Catalyst','Conversation intelligence identified the competency gaps addressed by SOAR.',null]]
    },
    {
      id:'reup-gtm',company:'ReUp Technologies',title:'0 → $1M GTM & Partner Commercialization Engine',role:'Co-Founder',timeline:'2020–2022',type:'Founder-led business + GTM build',metrics:['$1M revenue','Co-Founder','0→1 GTM build'],
      objective:'Build ReUp from an early-stage business into a repeatable commercial operation—creating the positioning, sales motion, partner strategy, onboarding, and operating systems required to generate and scale revenue.',
      lede:'Co-founded ReUp Technologies and built the commercial foundation that helped take the business from 0 to $1M in revenue.',
      why:'There was no mature company infrastructure to inherit. The business had to define its market, clarify the value proposition, develop a credible commercial narrative, create repeatable sales and partner motions, and turn founder knowledge into processes that could consistently produce revenue.',
      how:'Built the GTM foundation across positioning, value proposition, full-funnel messaging, discovery, qualification, sales playbooks, partner activation, and partner onboarding. Connected market and customer feedback directly back into the commercial model so the business could continuously improve how it sold, partnered, and operated.',
      process:['Define the market problem','Clarify target customers + partners','Build value proposition','Create commercial messaging','Install discovery + qualification','Build sales playbooks','Activate + onboard partners','Capture market + pipeline feedback','Refine the GTM motion','Scale repeatable execution'],
      pm:['Co-founded and helped build the company while simultaneously creating the commercial operating model required to generate revenue.','Managed priorities across positioning, sales execution, partner activation, onboarding, and day-to-day business building with limited early-stage resources.','Converted founder knowledge into repeatable messaging, qualification, playbooks, and onboarding assets so execution could extend beyond individual conversations.','Used active market, customer, partner, and pipeline feedback to continually refine the commercial motion.'],
      programs:['GTM positioning + value proposition','Full-funnel sales messaging','Discovery + qualification architecture','Sales playbooks','Partner activation','Partner onboarding','Commercial operating processes','Pipeline feedback + iteration loops'],
      tools:['GTM operating model','Sales playbooks','Qualification frameworks','Partner onboarding workflows','Messaging architecture','Pipeline feedback loops','Founder-led commercialization'],
      outcomes:[['$1M','Revenue built at ReUp Technologies'],['0→1','Commercial operating foundation'],['Co-Founder','Direct business-building ownership']],
      note:'Market Problem → Positioning → Revenue Motion → Partner Motion → Customer Feedback → Repeatable Growth.',
      phases:[['01','Define','Clarify the market problem, audience and value proposition'],['02','Position','Build the company story, messaging and commercial narrative'],['03','Sell','Create qualification, discovery and full-funnel sales motions'],['04','Partner','Develop partner activation and onboarding paths'],['05','Systemize','Turn founder knowledge into repeatable operating assets'],['06','Scale','Use pipeline and customer feedback to refine the GTM engine']],
      architecture:[['Market signal','Customer + partner problems'],['Positioning','Value proposition + commercial narrative'],['Revenue motion','Discovery · qualification · sales playbooks'],['Partner motion','Activation · onboarding · enablement'],['Operating layer','Repeatable processes + founder knowledge transfer'],['Business output','$1M revenue + repeatable GTM foundation']],
      evidence:[['Commercial result','$1M Revenue','Built ReUp from an early-stage concept into a revenue-generating business with a repeatable commercial foundation.',null],['Leadership','Co-Founder','Direct ownership of business-building priorities and the commercial operating system.',null]]
    },
    {
      id:'enterprise-revenue-acceleration',company:'Cofense & Prior Enterprise Roles',title:'Revenue Acceleration & Sales Cycle Optimization',role:'Senior Revenue & Go-To-Market Enablement Leader',timeline:'Enterprise GTM leadership',type:'Revenue performance + onboarding',metrics:['+8.75% revenue','+4% win rate','−37 days cycle'],
      objective:'Execute comprehensive enterprise sales enablement strategies, structured onboarding programs, and automated revenue workflows to streamline sales cycles and elevate rep performance.',
      lede:'Connected onboarding, discovery, qualification, coaching, and workflow improvement directly to enterprise revenue performance.',
      why:'Complex enterprise sales cycles and inconsistent discovery methodologies caused deals to stall in the pipeline, while new hires faced long ramp times due to fragmented training materials.',
      how:'Standardized core discovery and qualification frameworks across the revenue organization. Deployed targeted coaching modules, manager enablement sessions, and continuous education cadences while integrating modern enablement tooling to automate administrative tasks.',
      process:['Diagnose pipeline friction','Standardize discovery + qualification','Rebuild onboarding sequence','Deploy targeted coaching','Enable frontline managers','Install continuous education cadence','Automate repeatable workflows','Inspect win rate + cycle movement','Iterate from field results'],
      pm:['Connected enablement priorities to pipeline outcomes instead of training-volume metrics.','Balanced onboarding, continuous education, manager coaching, and field execution as one operating system.','Used standardized frameworks to reduce variation in discovery and qualification.','Maintained continuous reinforcement rather than one-time launches.'],
      programs:['Structured enterprise onboarding','Discovery + qualification frameworks','Manager enablement','Targeted coaching modules','Continuous education','Competitive deal reinforcement','Revenue workflow optimization'],
      tools:['Allego','LMS learning paths','Sales playbooks','CRM workflows','Video practice','Certification workflows','Manager coaching','Enablement analytics'],
      outcomes:[['+8.75%','Overall bottom-line revenue'],['+4%','Win rate across competitive deals'],['−37 days','Average sales cycle length']],
      note:'Diagnose → Standardize → Coach → Reinforce → Inspect → Improve.',
      phases:[['01','Diagnose','Find onboarding, discovery + pipeline friction'],['02','Standardize','Create repeatable qualification + discovery'],['03','Ramp','Sequence onboarding + readiness'],['04','Coach','Targeted modules + manager reinforcement'],['05','Automate','Reduce repeatable admin friction'],['06','Inspect','Track win rate, cycle + revenue']],
      architecture:[['Revenue motion','Complex enterprise pipeline'],['Method','Discovery · qualification · competitive execution'],['Learning','Onboarding · coaching · continuous education'],['Manager layer','Reinforcement + inspection'],['Workflow','CRM + enablement automation'],['Business output','Revenue lift · win-rate lift · shorter cycles']],
      evidence:[['Operating model','Revenue Acceleration Loop','Field skill, manager reinforcement, workflow, and measurement connected as one system.',null],['Scorecard','Enterprise Performance Outcomes','Revenue, win-rate and cycle-time improvements as the proof layer.','#artifact-kpis']]
    },
    {
      id:'global-experiential-engine',company:'Career-Wide Execution',title:'Global Enablement Cadences & Experiential Learning Engine',role:'Senior Revenue & Partner Enablement Leader',timeline:'Across organizations',type:'Global enablement operating system',metrics:['100% quarterly coverage','82% MEDDPICC','Experiential learning'],
      objective:'Architect and deploy zero-gap global enablement infrastructure spanning structured quarterly learning cadences, technical engineering tracks, and immersive experiential gamification to eliminate GTM blind spots and drive revenue velocity.',
      lede:'Built learning systems that made enablement continuous, role-specific, measurable, and memorable rather than a sequence of disconnected training events.',
      why:'Rapidly scaling technology organizations suffered from fragmented, ad-hoc training that could not keep pace with evolving product lines, while specialized technical roles such as Solution Engineers and Security Engineers lacked aligned technical messaging.',
      how:'Institutionalized mandatory global enablement calendars with structured quarterly learning schedules and 100% complete coverage. Designed advanced role-specific technical tracks for Solution Engineers and Security Engineers. Replaced passive training formats with Jeopardy-style SKO game shows, interactive fishbowl sessions, and MEDDPICC workshops using pop darts, competitive leaderboards, and live dashboards.',
      process:['Map quarterly capability requirements','Build global enablement calendar','Assign role-specific learning tracks','Align technical + commercial messaging','Design experiential practice','Instrument participation + scoring','Run live competitive learning','Reinforce through managers','Measure coverage + adoption'],
      pm:['Managed recurring enablement as an operating cadence rather than event-by-event delivery.','Balanced global consistency with role-specific depth for commercial and technical audiences.','Designed facilitation mechanics, scoring, dashboards, and reinforcement into the learning experience.','Used quarterly coverage and methodology adoption as accountability measures.'],
      programs:['Global quarterly enablement calendars','Solution Engineer technical curriculum','Security Engineer technical curriculum','Jeopardy-style SKO game shows','Interactive fishbowl sessions','MEDDPICC pop-dart workshops','Competitive leaderboards','Live learning dashboards'],
      tools:['Enablement calendars','Live dashboards','Gamified assessments','Leaderboards','Role-based technical curricula','Manager reinforcement','Certification + adoption tracking'],
      outcomes:[['100%','Quarterly learning coverage across global GTM teams'],['82%','MEDDPICC adoption'],['Career-wide','$3.1M influenced revenue · 40–50% faster ramp · 40% conversion gain · $700K annual savings']],
      note:'Plan → Learn → Practice → Compete → Prove → Reinforce → Measure → Repeat.',
      phases:[['01','Plan','Map quarterly business + capability priorities'],['02','Sequence','Create global calendar + role tracks'],['03','Enable','Technical + commercial learning'],['04','Experience','Games, fishbowls + competitive workshops'],['05','Prove','Scoring, dashboards + adoption'],['06','Repeat','Carry insights into next quarter']],
      architecture:[['Business priorities','Product · GTM · methodology changes'],['Calendar','Mandatory global quarterly cadence'],['Role paths','Seller · SE · Security Engineer'],['Experience','Game shows · fishbowls · pop darts'],['Measurement','Leaderboards · live dashboards · adoption'],['Output','100% coverage + sustained execution']],
      evidence:[['Cadence','Global Enablement Calendar','A recurring operating rhythm designed to prevent coverage gaps.',null],['Methodology','MEDDPICC Practice System','Experiential practice supported 82% methodology adoption.',null]]
    },
    {
      id:'cybersecurity-threat-enablement',company:'Tessian · Cofense · Mimecast · Proofpoint Ecosystems',title:'Cybersecurity GTM Enablement & Threat Intelligence Architecture',role:'Senior Enablement Leader',timeline:'Cybersecurity career execution',type:'Technical cybersecurity enablement',metrics:['+8.75% revenue','+4% win rate','−37 days cycle'],
      objective:'Translate complex email security, human-layer defense, anti-phishing, and threat-intelligence concepts into actionable and repeatable enterprise sales motions.',
      lede:'Made highly technical cybersecurity concepts usable by commercial sellers, technical teams, and partners without flattening the complexity buyers cared about.',
      why:'Enterprise buyers faced sophisticated BEC, credential harvesting, advanced phishing, and insider-threat risks. Commercial sellers needed to translate deep technical security differentiation into ROI narratives for CISOs, while Solution Engineers, Security Engineers, and partners needed aligned technical messaging and discovery frameworks.',
      how:'Developed threat-centric curriculum covering email security architectures, human-layer risk metrics, and automated incident-response workflows. Built role-specific technical tracks for Solution Engineers, Security Engineers, and channel partners. Standardized security qualification frameworks aligned with MEDDPICC and mapped them to cybersecurity buyer personas including CISOs, Directors of Information Security, and Compliance Officers.',
      process:['Map evolving threat vectors','Translate threat intelligence into buyer impact','Define CISO + security personas','Build commercial messaging','Create SE + Security Engineer tracks','Map qualification to cyber buying motions','Practice PoC + objection scenarios','Reinforce competitive differentiation','Measure revenue + win-rate + cycle impact'],
      pm:['Maintained alignment between technical depth and commercial usability across distinct field roles.','Connected evolving threat scenarios to curriculum, discovery, qualification, and proof-of-concept execution.','Used persona-specific messaging to keep enterprise security conversations anchored to operational risk and business impact.','Reinforced technical fluency through role-specific learning rather than one-size-fits-all product training.'],
      programs:['Threat-centric curriculum','Human-layer defense enablement','Anti-phishing architecture training','Solution Engineer technical tracks','Security Engineer technical tracks','Partner technical enablement','CISO discovery + qualification','PoC readiness'],
      tools:['MEDDPICC-aligned qualification','Technical roleplay','PoC workflows','Competitive battlecards','Threat-intelligence content','Manager coaching','Enablement analytics'],
      outcomes:[['+8.75%','Overall bottom-line revenue'],['+4%','Competitive win-rate improvement'],['−37 days','Average enterprise sales cycle']],
      note:'Threat Signal → Buyer Risk → Technical Story → Discovery → Qualification → PoC → Business Value → Close.',
      phases:[['01','Threat','Map evolving email + human-layer risks'],['02','Translate','Turn technical detail into buyer impact'],['03','Segment','CISO · InfoSec · Compliance · technical roles'],['04','Enable','Commercial + engineering curricula'],['05','Practice','Discovery · PoC · objections · competition'],['06','Measure','Revenue · win rate · sales cycle']],
      architecture:[['Threat intelligence','BEC · phishing · credential theft · insider risk'],['Buyer context','CISO · InfoSec · Compliance'],['Commercial story','Risk · ROI · operational impact'],['Technical readiness','SE · Security Engineer · partner tracks'],['Qualification','MEDDPICC-aligned cyber discovery'],['Business output','Higher win rate + faster close']],
      evidence:[['Curriculum','Threat-Centric Enablement','Complex security concepts translated into role-specific field learning.',null],['Technical track','SE + Security Engineer Readiness','Advanced technical paths supported PoC and demo execution.',null]]
    },
    {
      id:'cofense-rebrand',company:'Cofense / PhishMe',title:'Rebrand & GTM Realignment — PhishMe to Cofense',role:'Senior Revenue & Go-To-Market Enablement Leader',timeline:'Global rebrand',type:'Change management + field activation',metrics:['Zero pipeline disruption','+4% win rate','−21 days cycle'],
      objective:'Lead the global enablement and messaging realignment during the transition from PhishMe to Cofense so internal sellers, technical teams, and channel partners could immediately execute the new market narrative.',
      lede:'Converted a major corporate rebrand from a marketing event into a field-readiness and revenue-execution program.',
      why:'The market still perceived the company primarily as a security-awareness training provider while the product ecosystem had evolved into a broader phishing-defense, threat-intelligence, and automated incident-response platform. Sales and technical teams risked using legacy nomenclature, outdated product tiers, and fragmented value propositions, threatening active enterprise pipeline.',
      how:'Designed and rolled out a mandatory global rebrand enablement curriculum across revenue and technical teams covering the new brand architecture, product hierarchy, and value pillars. Rebuilt sales playbooks, objection handling, competitive battlecards, and messaging to shift the conversation from passive compliance training to human-sourced threat intelligence and automated remediation. Conducted technical briefings and workshops for Solution Engineers to ensure consistent demonstrations of the expanded automation suite.',
      process:['Align new corporate narrative','Map old → new product architecture','Rebuild field messaging','Overhaul playbooks + objections','Update competitive battlecards','Brief Solution Engineers','Certify global readiness','Support active pipeline transition','Reinforce new narrative in field'],
      pm:['Treated the rebrand as a coordinated change-management program across Sales, Marketing, Product, technical teams, and partners.','Sequenced narrative, product hierarchy, technical readiness, objections, and field certification before relying on the new story in market.','Focused specifically on protecting active pipeline while changing seller language and buyer perception.','Used mandatory global enablement to prevent legacy positioning from persisting after launch.'],
      programs:['Rebrand enablement masterplan','Global mandatory curriculum','Sales playbook overhaul','Objection framework','Competitive battlecards','Technical SE briefings','Product hierarchy training','Field readiness reinforcement'],
      tools:['Global learning paths','Sales playbooks','Competitive battlecards','Technical workshops','Certification workflows','Manager reinforcement','Field communications'],
      outcomes:[['Zero','Enterprise pipeline disruption during the transition'],['+8.75%','Bottom-line revenue growth during the strategic growth phase'],['+4%','Competitive win-rate lift'],['−21 days','Average sales cycle reduction tied to the realigned narrative']],
      note:'Corporate Strategy → New Narrative → Product Architecture → Field Messaging → Technical Readiness → Certification → Pipeline Execution.',
      phases:[['01','Align','Define new company + product narrative'],['02','Translate','Map brand architecture into field language'],['03','Rebuild','Playbooks, objections + battlecards'],['04','Technical','Align SE demos + automation story'],['05','Certify','Mandatory global readiness'],['06','Protect','Support active enterprise pipeline']],
      architecture:[['Corporate strategy','PhishMe → Cofense'],['Market story','Training → threat intelligence + response'],['Field enablement','Messaging · objections · playbooks'],['Technical layer','SE briefings + demo readiness'],['Readiness','Global curriculum + certification'],['Business output','Zero disruption + stronger velocity']],
      evidence:[['Change plan','Rebrand Enablement Masterplan','Corporate strategy translated into coordinated field readiness.',null],['Technical artifact','SE Alignment','Technical workshops ensured the new automation story held up in demonstrations.',null]]
    }
  ];

  function chips(items){return '<div class="tool-cloud">'+items.map(function(item){return '<span>'+item+'</span>'}).join('')+'</div>'}
  function listItems(items){return '<ul>'+items.map(function(item){return '<li>'+item+'</li>'}).join('')+'</ul>'}
  function processFlow(items){return '<div class="process-flow">'+items.map(function(item){return '<span class="process-step">'+item+'</span>'}).join('')+'</div>'}
  function outcomeGrid(items){return '<div class="outcome-grid">'+items.map(function(item){return '<div class="outcome"><strong>'+item[0]+'</strong><span>'+item[1]+'</span></div>'}).join('')+'</div>'}
  function timelineViz(p){return '<div class="visual-card timeline-card"><div class="visual-card-head"><span>Delivery timeline</span><small>'+p.timeline+'</small></div><div class="project-timeline">'+p.phases.map(function(item){return '<div class="timeline-phase"><span class="timeline-index">'+item[0]+'</span><strong>'+item[1]+'</strong><p>'+item[2]+'</p></div>'}).join('')+'</div></div>'}
  function architectureViz(p){return '<div class="visual-card architecture-card"><div class="visual-card-head"><span>Systems architecture</span><small>How the work connected</small></div><div class="architecture-flow">'+p.architecture.map(function(item,i){return '<div class="architecture-node"><small>'+String(i+1).padStart(2,'0')+'</small><strong>'+item[0]+'</strong><span>'+item[1]+'</span></div>'}).join('')+'</div></div>'}
  function evidenceViz(p){if(!p.evidence||!p.evidence.length)return '';return '<div class="visual-card evidence-card-wrap"><div class="visual-card-head"><span>Proof + artifacts</span><small>Representative evidence without exposing confidential material</small></div><div class="evidence-grid">'+p.evidence.map(function(item){var body='<span class="evidence-type">'+item[0]+'</span><strong>'+item[1]+'</strong><p>'+item[2]+'</p><span class="evidence-cta">'+(item[3]?'View artifact ↗':'Program proof')+'</span>';return item[3]?'<a class="evidence-card" href="'+item[3]+'">'+body+'</a>':'<div class="evidence-card evidence-card-static">'+body+'</div>'}).join('')+'</div></div>'}
  function visualProof(p){return '<section class="project-proof" aria-label="Visual proof for '+p.title+'"><div class="proof-intro"><span>Visual proof</span><p>The project at a glance: sequence, system design, and representative evidence.</p></div><div class="proof-grid">'+timelineViz(p)+architectureViz(p)+'</div>'+evidenceViz(p)+'</section>'}

  list.classList.add('project-list');
  list.innerHTML=projects.map(function(p,index){
    var number=String(index+1).padStart(2,'0');
    return '<article class="project-case" id="'+p.id+'">'+
      '<button class="project-toggle" type="button" data-project-toggle aria-expanded="false" aria-controls="'+p.id+'-detail">'+
        '<span class="project-index">'+number+'</span>'+
        '<span class="project-heading"><small>'+p.company+' · '+p.timeline+'</small><h3>'+p.title+'</h3></span>'+
        '<span class="project-metrics">'+p.metrics.map(function(metric){return '<span class="project-metric">'+metric+'</span>'}).join('')+'</span>'+
        '<span class="project-action"><span>View project</span><span class="project-action-icon" aria-hidden="true">+</span></span>'+
      '</button>'+
      '<div class="project-detail" id="'+p.id+'-detail" hidden><div class="project-detail-inner">'+
        '<p class="project-lede">'+p.lede+'</p>'+
        '<div class="project-meta"><span>'+p.role+'</span><span>'+p.timeline+'</span><span>'+p.type+'</span></div>'+
        '<section class="project-block project-objective"><h4>Objective</h4><p>'+p.objective+'</p></section>'+
        visualProof(p)+
        '<div class="project-grid">'+
          '<section class="project-block"><h4>The challenge</h4><p>'+p.why+'</p></section>'+
          '<section class="project-block"><h4>Execution</h4><p>'+p.how+'</p></section>'+
          '<section class="project-block"><h4>Process implemented</h4>'+processFlow(p.process)+'</section>'+
          '<section class="project-block"><h4>Project management + operating cadence</h4>'+listItems(p.pm)+'</section>'+
          '<section class="project-block"><h4>Programs + deliverables</h4>'+listItems(p.programs)+'</section>'+
          '<section class="project-block"><h4>Tools + systems</h4>'+chips(p.tools)+'</section>'+
        '</div>'+
        '<section class="project-block measured-outcomes"><h4>Outcomes + KPIs</h4>'+outcomeGrid(p.outcomes)+'</section>'+
        '<div class="project-note"><strong>Operating logic:</strong> '+p.note+'</div>'+
      '</div></div>'+
    '</article>';
  }).join('');

  list.querySelectorAll('[data-project-toggle]').forEach(function(button){
    button.addEventListener('click',function(){
      var expanded=button.getAttribute('aria-expanded')==='true';
      var caseEl=button.closest('.project-case');
      var detail=document.getElementById(button.getAttribute('aria-controls'));
      button.setAttribute('aria-expanded',String(!expanded));
      if(detail)detail.hidden=expanded;
      if(caseEl)caseEl.classList.toggle('is-open',!expanded);
      var label=button.querySelector('.project-action > span:first-child');
      if(label)label.textContent=expanded?'View project':'Close project';
    });
  });

  var kpiRows=document.querySelectorAll('.kpi-row');
  kpiRows.forEach(function(row){
    var label=row.querySelector('.kpi-label');
    var value=row.querySelector('.kpi-value');
    if(label&&value&&/faster ramp/i.test(label.textContent))value.textContent='40–50%';
  });
}());