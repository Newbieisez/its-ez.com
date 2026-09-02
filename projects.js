(function(){
  var workSection=document.getElementById('work');
  if(!workSection)return;
  var head=workSection.querySelector('.work-head');
  var list=workSection.querySelector('.work-list');
  if(!head||!list)return;

  var intro=head.querySelector('.body-copy');
  if(intro)intro.textContent='Start with the outcome. Expand any project to see the business problem, the build, the process, the systems architecture, and the proof behind the result.';

  var impact=document.createElement('div');
  impact.className='impact-strip';
  impact.setAttribute('aria-label','Selected enterprise enablement outcomes');
  impact.innerHTML='<div class="impact-stat"><strong>$3.1M</strong><span>Partner-driven revenue influenced</span></div><div class="impact-stat"><strong>+40%</strong><span>Deal conversion lift</span></div><div class="impact-stat"><strong>−37 days</strong><span>Average sales cycle reduction</span></div>';
  head.parentNode.insertBefore(impact,list);

  var projects=[
    {
      id:'sentinelone-partner-architecture',index:'01',company:'SentinelOne',title:'Partner Enablement Ecosystem & Intelligence Architecture',role:'Content and Systems Manager, Partner Enablement',timeline:'2024–2025',type:'Partner ecosystem transformation',metrics:['$3.1M revenue influenced','40–50% faster ramp','Analytics baseline'],
      lede:'Replaced a fragmented partner enablement environment with a unified, scalable ecosystem featuring automated course tracking, segmented accreditation paths, searchable knowledge, and conversational AI support.',
      why:'GTM collateral was decentralized, leadership lacked analytics visibility into partner learning, and legacy accreditation paths did not differentiate between distinct partner models such as resellers, MSPs, distributors, and system integrators.',
      how:'Designed a modular partner enablement ecosystem tailored to specific partner tracks. Engineered custom widgets and backend portal automations to bridge integration gaps and capture real-time user telemetry. Consolidated legacy materials into a searchable repository and pioneered the initial architecture for an intelligent conversational bot to handle complex partner queries.',
      process:['Audit fragmented content + journeys','Segment partner models + roles','Map capabilities + accreditation paths','Rebuild learning architecture','Connect LMS + PRM workflows','Add telemetry + custom widgets','Create searchable knowledge layer','Prototype conversational AI support','Measure ramp + accreditation velocity'],
      pm:['Ran parallel workstreams across curriculum, portal experience, systems integration, analytics, content governance, and AI knowledge support.','Managed dependencies between partner identity, enrollment, accreditation logic, content access, reporting, and launch communications.','Used modular releases so priority learning paths could launch while analytics and portal integrations continued to mature.','Established a measurable baseline for accreditation velocity, learner behavior, and partner readiness.'],
      programs:['Partner Pre-Sales Fundamentals','Sales Fundamentals','Sales Applied track','Pre-Sales Technical Fundamentals','PurpleAI Partner Specialization','Cloud Fundamentals + personas','Unified Demo Introduction','Competitive Edge','PartnerPulse learning series'],
      tools:['Thought Industries / SentinelOne University','Highspot / SalesEdge','Impartner PRM','Wistia','Articulate 360 / Rise','Glean','11Labs','Canva','Google Workspace','Slack Canvas','Custom widgets + portal automations','Conversational AI architecture'],
      outcomes:[['$3.1M','Partner-driven revenue influenced'],['40–50%','Global partner ramp-time reduction'],['First','True analytics baseline for accreditation velocity']],
      note:'Partner Type → Role → Capability → Learning → Accreditation → Telemetry → Readiness → Revenue.'
    },
    {
      id:'sentinelone-partnerstruck',index:'02',company:'SentinelOne',title:'Partnerstruck — Gamified SKO Engagement & Certification',role:'Content and Systems Manager, Partner Enablement',timeline:'Global SKO',type:'Gamified learning + automated remediation',metrics:['99% entry rate','68% first-pass','+30 remediated'],
      lede:'Turned a global Sales Kickoff into an interactive partner-learning environment that measured comprehension in real time and automatically remediated knowledge gaps.',
      why:'Traditional presentation formats at SKO were not creating genuine comprehension of partner strategy. Leadership also needed a scalable way to measure baseline knowledge across hundreds of attendees at the same time.',
      how:'Deployed physical and digital QR codes across the venue linked to a mobile ecosystem assessment. Built an automated backend tracking system that instantly scored submissions and routed failing scores to targeted micro-learning remediation. Anchored the campaign with a memorable branded fuzzy-goat reward that made ecosystem mastery visible and fun.',
      process:['Define partner-literacy objectives','Build mobile assessment','Place QR entry points across SKO','Capture + score responses instantly','Flag knowledge gaps','Route failures to micro-learning','Reassess after remediation','Reward mastery + report coverage'],
      pm:['Designed the learner journey across physical venue moments, mobile assessment, scoring logic, remediation, and rewards.','Coordinated event logistics, content, scoring thresholds, follow-up learning, and completion tracking.','Used real-time participation and pass-rate data to identify where additional reinforcement was needed during and after SKO.','Closed the loop after the event rather than treating the live session as the finish line.'],
      programs:['Partnerstruck ecosystem assessment','QR-based SKO learning journey','Automated remediation loops','Targeted micro-learning','Certification follow-up','Gamified reward experience'],
      tools:['QR workflow','Mobile assessment','Automated scoring logic','Learning remediation modules','Partner enablement content','Event analytics dashboard','Backend tracking automation'],
      outcomes:[['99%','Entry rate among SKO attendees'],['68%','First-pass certification rate'],['+30','Additional attendees converted through remediation']],
      note:'Engage → Assess → Score → Diagnose → Remediate → Reassess → Certify.'
    },
    {
      id:'twilio-soar',index:'03',company:'Twilio',title:'SOAR — Sales Outcomes Achieve Results Enablement Framework',role:'Senior Sales Enablement Manager',timeline:'2022–2024',type:'Global sales + partner accreditation',metrics:['+9% productivity','+40% conversion','82% MEDDPICC'],
      lede:'Designed and launched a multi-tiered enablement and accreditation program for internal sales teams and external partners to standardize the competencies that drive revenue execution.',
      why:'Sales reps and partners lacked a standardized framework for value-based conversations and complex competitive situations. Hyper-growth demanded a scalable system that could upskill hundreds of stakeholders without reducing enablement to disconnected training events.',
      how:'Developed a five-module curriculum spanning value-based selling, advanced competitive intelligence, customer discovery, revenue execution, and management coaching. Rolled the program to an initial cohort of 400 people with an automated certification pipeline issuing badges and completion certificates. Workflow automation and AI systems were integrated into the surrounding enablement stack to reinforce execution in the flow of work.',
      process:['Diagnose revenue skill gaps','Define SOAR competency model','Build five-module curriculum','Pilot with core cohorts','Practice against real opportunities','Automate accreditation + badging','Embed MEDDPICC + manager reinforcement','Connect workflow automation','Measure adoption + productivity + conversion'],
      pm:['Aligned sales leadership, managers, Revenue Operations, partner stakeholders, and system owners around one competency model.','Sequenced learner readiness, manager reinforcement, accreditation, and workflow integration so behavior continued after formal training.','Used adoption and conversion signals to identify where the framework required reinforcement or iteration.','Scaled the program through repeatable learning assets, automation, and certification infrastructure.'],
      programs:['Value-based selling','Advanced competitive intelligence','Customer discovery','Revenue execution','Management coaching','MEDDPICC reinforcement','Automated certification + badging'],
      tools:['Salesforce','Gong','Highspot','Rattle','Slack','6sense','WiseOwl','LLM / AI systems','Workflow automation','Certification pipeline'],
      outcomes:[['+9%','Sales productivity'],['+40%','Deal conversion rates'],['82%','MEDDPICC adoption'],['$700K','Annual savings from GTM technology optimization']],
      note:'Diagnose → Learn → Practice → Apply → Certify → Reinforce → Measure.'
    },
    {
      id:'twilio-gong-intelligence',index:'04',company:'Twilio',title:'Gong Conversational Intelligence Architecture & Data Pipeline',role:'Senior Sales Enablement Manager',timeline:'2022–2024',type:'Conversation intelligence + performance analytics',metrics:['400+ enabled','SOAR catalyst','VoC telemetry'],
      lede:'Configured Gong as a revenue intelligence system that captured what was actually happening in customer conversations and converted those signals into targeted enablement decisions.',
      why:'Leadership lacked empirical data showing what top reps were doing differently on calls or where deals were stalling. GTM strategy was too dependent on anecdotal feedback instead of scalable conversational analytics.',
      how:'Built custom keyword dictionaries, trackers, and advanced filters in Gong to map critical sales behaviors, objections, competitive friction, and discovery patterns. Partnered with Sales Operations to extract telemetry such as talk-to-listen ratios, call duration, objection frequency, and recurring topics, then converted those insights into a closed-loop data-to-action pipeline that became a catalyst for SOAR.',
      process:['Define behaviors + questions to observe','Build keyword dictionaries','Configure custom trackers','Segment calls + cohorts','Extract conversation telemetry','Compare top-performer patterns','Identify repeat skill gaps','Feed insights into SOAR','Measure behavior changes over time'],
      pm:['Partnered with Sales Operations and sales leadership to define useful signals instead of collecting data for its own sake.','Established a repeatable analysis cadence that connected call telemetry to curriculum, coaching, and manager reinforcement.','Created a closed loop between field evidence, enablement design, and follow-up measurement.','Used conversational data to prioritize skill gaps with the highest likely impact on pipeline execution.'],
      programs:['Voice-of-customer analysis','Custom conversation trackers','Behavior analytics','Objection intelligence','Competitive friction analysis','SOAR curriculum inputs','Manager coaching insights'],
      tools:['Gong','Salesforce','Sales Operations data pipeline','Highspot','Custom trackers','Keyword dictionaries','Analytics filters','Manager coaching workflows'],
      outcomes:[['400+','SOAR participants informed by the intelligence loop'],['+9%','Productivity lift in the surrounding enablement program'],['+40%','Deal conversion gain in the surrounding enablement program']],
      note:'Conversation → Signal → Pattern → Skill Gap → Enablement → Coaching → Behavior Change → Revenue.'
    },
    {
      id:'enterprise-revenue-acceleration',index:'05',company:'Cofense & Prior Enterprise Roles',title:'Revenue Acceleration & Sales Cycle Optimization',role:'Senior Revenue & Go-To-Market Enablement Leader',timeline:'Enterprise GTM leadership',type:'Revenue performance + onboarding',metrics:['+8.75% revenue','+4% win rate','−37 days cycle'],
      lede:'Executed enterprise sales enablement strategies, structured onboarding, coaching, and revenue workflows designed to reduce friction across complex sales cycles and improve field performance.',
      why:'Complex enterprise sales cycles and inconsistent discovery methodologies caused opportunities to stall while new hires faced long ramp times because training and operating guidance were fragmented.',
      how:'Standardized discovery and qualification frameworks across the revenue organization. Deployed targeted coaching modules, manager enablement, structured onboarding, and continuous education cadences while integrating modern enablement tooling to reduce administrative friction and support consistent execution.',
      process:['Diagnose pipeline friction','Standardize discovery + qualification','Rebuild onboarding sequence','Create targeted coaching modules','Enable frontline managers','Install continuous learning cadence','Automate repeatable workflows','Inspect win rate + cycle movement','Iterate from field performance'],
      pm:['Connected enablement priorities to pipeline metrics instead of training-volume metrics.','Balanced onboarding, continuous education, manager coaching, and field execution as one operating system.','Used repeatable frameworks to reduce variability in discovery and qualification across teams.','Maintained ongoing reinforcement rather than relying on one-time launches.'],
      programs:['Structured enterprise onboarding','Discovery + qualification frameworks','Manager enablement','Targeted coaching modules','Continuous education','Competitive deal reinforcement','Revenue workflow optimization'],
      tools:['Allego','LMS learning paths','Sales playbooks','CRM workflows','Video practice','Certification workflows','Manager coaching','Enablement analytics'],
      outcomes:[['+8.75%','Overall bottom-line revenue'],['+4%','Win rate across competitive deals'],['−37 days','Average sales cycle length']],
      note:'Diagnose → Standardize → Coach → Reinforce → Inspect → Improve.'
    },
    {
      id:'reup-gtm',index:'06',company:'ReUp Technologies',title:'0→1 GTM & Partner Commercialization Engine',role:'Co-Founder',timeline:'2020–2022',type:'Business + GTM build',metrics:['0→1 build','GTM + partner motion','Founder-led'],
      lede:'Built the commercial operating foundation from the company side: positioning, value proposition, sales process, partner activation, onboarding, and execution.',
      why:'An early-stage company cannot rely on established messaging, sales motions, partner programs, or institutional knowledge. The business had to determine who it served, what value it created, how to communicate that value, and how to make successful motions repeatable.',
      how:'Connected customer and partner needs to positioning, messaging, qualification, playbooks, onboarding, and partner activation. The goal was to turn founder knowledge into a commercial operating system that other people could actually use.',
      process:['Define market problem','Clarify customer + partner','Build value proposition','Create messaging','Install qualification','Build playbooks','Activate + onboard partners','Learn from pipeline'],
      pm:['Managed priorities across business-building workstreams with limited early-stage resources.','Connected product and market decisions to the commercial processes required to execute them.','Created repeatable operating assets instead of leaving critical knowledge inside founder conversations.','Used active market feedback to refine positioning, process, and partner execution.'],
      programs:['GTM positioning','Full-funnel messaging','Sales playbooks','Qualification architecture','Partner activation','Partner onboarding'],
      tools:['GTM operating model','Sales playbooks','Partner onboarding workflows','Qualification frameworks','Pipeline feedback loops'],
      outcomes:[['0→1','Commercial foundation'],['2020–22','Build period'],['GTM + Partner','Integrated motion']],
      note:'Market Problem → Positioning → Sales Motion → Partner Motion → Pipeline → Learning.'
    },
    {
      id:'ggw-ai-academy',index:'07',company:'Global Gaming Women',title:'AI Learning & Performance Support Academy',role:'Program Architect + Builder',timeline:'2026–Present',type:'Workforce AI adoption',metrics:['5 core modules','35+ master prompts','Google-native'],
      lede:'Designing a beginner-friendly AI academy that teaches people how to use AI inside real work through structured learning, reusable prompts, activities, quick-reference support, and Google Workspace workflows.',
      why:'Most AI education is either too conceptual or too advanced. Beginners need a practical bridge between understanding AI and using it correctly to complete real work.',
      how:'Built the academy as both learning and performance support: concise modules build understanding, activities create practice, the prompt library accelerates application, and tool-specific guidance gives employees support at the moment of need.',
      process:['Prioritize work use cases','Design 5 core modules','Build 35+ prompt library','Add practice + checks','Connect Google workflows','Install progress tracking','Validate usability','Iterate from learner data'],
      pm:['Managing curriculum, UX, content production, prompt architecture, web development, deployment, and governance as connected workstreams.','Using scoped releases rather than producing a large library before validating learner usability.','Designing for adult-learning needs through step-by-step instruction, activities, visual support, and reusable job aids.','Maintaining accuracy as AI and Google capabilities change.'],
      programs:['Everyday AI workflows','Prompt Library','NotebookLM learning','Gemini workflows','Google Workspace quick tips','Applied activities + knowledge checks'],
      tools:['Gemini','NotebookLM','Gmail','Google Docs','Google Sheets','Google Slides','Google Drive','Google Calendar','GitHub','Vercel'],
      outcomes:[['5','Core modules'],['35+','Reusable master prompts'],['Current','Build + validation']],
      note:'Understand → See It → Practice It → Use It → Reference It → Improve It.'
    }
  ];

  var visuals={
    'sentinelone-partner-architecture':{
      window:'2024–2025 · iterative global rollout',
      phases:[['01','Audit','Map fragmented content, paths and reporting gaps'],['02','Segment','Differentiate partner models, roles and needs'],['03','Architect','Build modular learning + accreditation paths'],['04','Integrate','Connect PRM, LMS, knowledge and telemetry'],['05','Intelligence','Add analytics + conversational AI foundation'],['06','Optimize','Measure ramp, velocity and revenue signals']],
      architecture:[['Partner identity','Reseller · Distributor · MSP/MSSP · SI · Technical · Sales'],['Portal + access','Impartner PRM · custom portal logic'],['Learning','Thought Industries · Articulate Rise · Wistia'],['Content + knowledge','Highspot · Glean · Google Workspace · Canva'],['Intelligence','Telemetry · custom widgets · conversational AI'],['Business output','Accreditation · readiness · partner revenue']],
      evidence:[['Video learning','Working with Channel Partners','Representative partner learning asset connected to the broader readiness architecture.','Working%20with%20Channel%20Partners.mp4'],['Architecture','8-Week Enablement Accelerator','Representative implementation architecture for diagnosing, building, piloting and measuring enablement.','#artifact-accelerator'],['Framework','4-Stage Enablement Framework','Know → Practice → Prove → Perform applied as a readiness model.','#artifact-framework']]
    },
    'sentinelone-partnerstruck':{
      window:'Global SKO · live event + post-event remediation',
      phases:[['01','Engage','QR touchpoints create curiosity and participation'],['02','Assess','Mobile ecosystem assessment captures baseline literacy'],['03','Score','Backend automation evaluates submissions instantly'],['04','Remediate','Targeted micro-learning closes failed knowledge areas'],['05','Reassess','Post-event follow-up converts remaining gaps'],['06','Certify','Reward mastery and report organizational coverage']],
      architecture:[['Venue layer','Physical + digital QR entry points'],['Assessment','Mobile partner-ecosystem quiz'],['Automation','Instant scoring + pass/fail logic'],['Learning','Targeted remediation modules'],['Engagement','Gamified fuzzy-goat reward'],['Output','Participation · certification · coverage']],
      evidence:[['Experience design','QR Learning Journey','A venue-wide learning experience that connected physical moments to measurable mobile participation.',null],['Automation','Remediation Loop','Failing scores automatically triggered targeted learning instead of manual follow-up.',null],['Engagement','Partnerstruck Reward','A deliberately memorable branded reward made partner knowledge visible, social, and fun.',null]]
    },
    'twilio-soar':{
      window:'2022–2024 · global rollout + accreditation',
      phases:[['01','Diagnose','Identify revenue skills and execution gaps'],['02','Design','Define five-module SOAR competency architecture'],['03','Enable','Launch to 400-person initial cohort'],['04','Practice','Apply skills to real opportunities + competitive situations'],['05','Certify','Automate badges and completion credentials'],['06','Reinforce','Embed MEDDPICC, managers, workflow and AI support'],['07','Measure','Track adoption, productivity and conversion']],
      architecture:[['Competencies','Value · competition · discovery · execution · coaching'],['Learning','Five-module SOAR curriculum'],['Practice','Applied opportunity work + manager reinforcement'],['Accreditation','Automated badges + certificates'],['Workflow','Salesforce · Rattle · AI / LLM support'],['Business output','9% productivity · 40% conversion · 82% MEDDPICC']],
      evidence:[['Performance model','4-Stage Enablement Framework','Representative readiness model for moving from knowledge to demonstrated performance.','#artifact-framework'],['Architecture','8-Week Enablement Accelerator','Representative structure for sequencing enablement design, pilot, rollout and measurement.','#artifact-accelerator'],['Scorecard','GTM Productivity Outcomes','Validated portfolio outcomes presented as measurable performance evidence.','#artifact-kpis']]
    },
    'twilio-gong-intelligence':{
      window:'2022–2024 · continuous intelligence loop',
      phases:[['01','Observe','Define sales behaviors and friction to inspect'],['02','Instrument','Build trackers, keywords and filters'],['03','Analyze','Extract talk, objection and topic telemetry'],['04','Compare','Identify top-performer and stalled-deal patterns'],['05','Enable','Translate patterns into SOAR content + coaching'],['06','Measure','Watch behavior signals after reinforcement']],
      architecture:[['Conversation layer','Gong calls + transcripts'],['Detection','Keyword dictionaries · custom trackers'],['Analytics','Filters · talk ratios · duration · objections'],['Data partnership','Sales Operations telemetry pipeline'],['Action layer','SOAR · coaching · manager reinforcement'],['Business output','Evidence-based skill priorities']],
      evidence:[['Intelligence map','Conversation-to-Enablement Loop','Customer conversations became a structured input into program design rather than anecdotal feedback.',null],['Analytics','Custom Tracker Architecture','Behavioral, competitive, and objection signals organized for repeatable analysis.',null],['Program linkage','SOAR Catalyst','Conversation intelligence directly informed the competency gaps addressed by SOAR.',null]]
    },
    'enterprise-revenue-acceleration':{
      window:'Multi-role enterprise enablement leadership',
      phases:[['01','Diagnose','Find onboarding, discovery and pipeline friction'],['02','Standardize','Create repeatable qualification + discovery behavior'],['03','Ramp','Sequence onboarding and readiness'],['04','Coach','Install targeted modules + manager reinforcement'],['05','Automate','Reduce repeatable administrative friction'],['06','Inspect','Track win rate, cycle length and revenue movement']],
      architecture:[['Revenue motion','Enterprise pipeline + complex deal cycles'],['Method','Discovery · qualification · competitive execution'],['Learning','Onboarding · coaching · continuous education'],['Manager layer','Reinforcement + inspection'],['Workflow','CRM + enablement automation'],['Business output','Revenue lift · win-rate lift · shorter cycles']],
      evidence:[['Operating model','Revenue Acceleration Loop','A repeatable system connecting field skill, manager reinforcement, workflow and measurement.',null],['Readiness','Enterprise Onboarding','Structured ramp architecture replacing fragmented training materials.',null],['Scorecard','Enterprise Performance Outcomes','Revenue, win-rate and cycle-time improvements used as the proof layer.','#artifact-kpis']]
    },
    'reup-gtm':{
      window:'2020–2022 · founder-led 0→1 operating build',
      phases:[['01','Market','Clarify problem and target customer'],['02','Position','Define value proposition + messaging'],['03','Sell','Qualification + full-funnel playbooks'],['04','Partner','Activation + onboarding motion'],['05','Learn','Pipeline feedback → GTM iteration']],
      architecture:[['Market signal','Customer + partner problem'],['Positioning','Value proposition + narrative'],['Sales motion','Qualification · discovery · playbooks'],['Partner motion','Recruit · activate · onboard'],['Feedback','Pipeline + market learning'],['Business output','Repeatable commercial operating foundation']],
      evidence:[['Founder artifact','GTM Operating Model','Market problem → positioning → sales motion → partner motion → pipeline.',null],['Sales artifact','Full-Funnel Playbooks','Repeatable messaging, qualification and execution rather than founder-only knowledge.',null],['Partner artifact','Activation + Onboarding','A structured external-partner motion connected to the commercial strategy.',null]]
    },
    'ggw-ai-academy':{
      window:'2026–Present · active build and validation',
      phases:[['01','Prioritize','Choose high-value everyday work use cases'],['02','Design','Five complete modules + adult-learning flow'],['03','Build','35+ prompts + step-by-step job aids'],['04','Productize','Google-native portal + progress tracking'],['05','Validate','Learner feedback + ongoing AI governance']],
      architecture:[['Employee task','Email · document · analysis · meeting · planning'],['Learning layer','Short modules · examples · activities'],['AI layer','Gemini · NotebookLM · reusable prompts'],['Workspace','Gmail · Docs · Sheets · Slides · Drive · Calendar'],['Support layer','Quick tips · prompt library · reference paths'],['Performance output','Confidence · adoption · workflow efficiency']],
      evidence:[['Learning artifact','5 Core Modules','Complete learning experiences built around real work rather than feature tours.',null],['Performance support','35+ Master Prompts','Solution-filtered reusable prompts connected to specific Google workflows.',null],['Product artifact','Google-Native Academy','Interactive learning portal with progress, activities, quick tips and performance support.',null]]
    }
  };

  function chips(items,className){return '<div class="'+className+'">'+items.map(function(item){return '<span>'+item+'</span>'}).join('')+'</div>'}
  function listItems(items){return '<ul>'+items.map(function(item){return '<li>'+item+'</li>'}).join('')+'</ul>'}
  function process(items){return '<div class="process-flow">'+items.map(function(item){return '<span class="process-step">'+item+'</span>'}).join('')+'</div>'}
  function outcomes(items){return '<div class="outcome-grid">'+items.map(function(item){return '<div class="outcome"><strong>'+item[0]+'</strong><span>'+item[1]+'</span></div>'}).join('')+'</div>'}
  function timelineViz(v){return '<div class="visual-card timeline-card"><div class="visual-card-head"><span>Delivery timeline</span><small>'+v.window+'</small></div><div class="project-timeline">'+v.phases.map(function(item){return '<div class="timeline-phase"><span class="timeline-index">'+item[0]+'</span><strong>'+item[1]+'</strong><p>'+item[2]+'</p></div>'}).join('')+'</div></div>'}
  function architectureViz(v){return '<div class="visual-card architecture-card"><div class="visual-card-head"><span>Systems architecture</span><small>How the work connected</small></div><div class="architecture-flow">'+v.architecture.map(function(item,i){return '<div class="architecture-node"><small>'+String(i+1).padStart(2,'0')+'</small><strong>'+item[0]+'</strong><span>'+item[1]+'</span></div>'}).join('')+'</div></div>'}
  function evidenceViz(v){return '<div class="visual-card evidence-card-wrap"><div class="visual-card-head"><span>Proof + artifacts</span><small>Representative evidence without exposing confidential material</small></div><div class="evidence-grid">'+v.evidence.map(function(item){var body='<span class="evidence-type">'+item[0]+'</span><strong>'+item[1]+'</strong><p>'+item[2]+'</p><span class="evidence-cta">'+(item[3]?'View artifact ↗':'Program proof')+'</span>';return item[3]?'<a class="evidence-card" href="'+item[3]+'">'+body+'</a>':'<div class="evidence-card evidence-card-static">'+body+'</div>'}).join('')+'</div></div>'}
  function visualProof(p){var v=visuals[p.id];if(!v)return '';return '<section class="project-proof" aria-label="Visual proof for '+p.title+'"><div class="proof-intro"><span>Visual proof</span><p>The project at a glance: sequence, system design, and representative evidence.</p></div><div class="proof-grid">'+timelineViz(v)+architectureViz(v)+'</div>'+evidenceViz(v)+'</section>'}

  list.classList.add('project-list');
  list.innerHTML=projects.map(function(p){
    var current=p.timeline.indexOf('Present')>-1?' current-build':'';
    return '<article class="project-case'+current+'" id="'+p.id+'">'+
      '<button class="project-toggle" type="button" data-project-toggle aria-expanded="false" aria-controls="'+p.id+'-detail">'+
        '<span class="project-index">'+p.index+'</span>'+
        '<span class="project-heading"><small>'+p.company+' · '+p.timeline+'</small><h3>'+p.title+'</h3></span>'+
        '<span class="project-metrics">'+p.metrics.map(function(metric){return '<span class="project-metric">'+metric+'</span>'}).join('')+'</span>'+
        '<span class="project-action"><span>View project</span><span class="project-action-icon" aria-hidden="true">+</span></span>'+
      '</button>'+
      '<div class="project-detail" id="'+p.id+'-detail" hidden><div class="project-detail-inner">'+
        '<p class="project-lede">'+p.lede+'</p>'+
        '<div class="project-meta"><span>'+p.role+'</span><span>'+p.timeline+'</span><span>'+p.type+'</span></div>'+
        visualProof(p)+
        '<div class="project-grid">'+
          '<section class="project-block"><h4>The challenge</h4><p>'+p.why+'</p></section>'+
          '<section class="project-block"><h4>Execution</h4><p>'+p.how+'</p></section>'+
          '<section class="project-block"><h4>Process implemented</h4>'+process(p.process)+'</section>'+
          '<section class="project-block"><h4>Project management + operating cadence</h4>'+listItems(p.pm)+'</section>'+
          '<section class="project-block"><h4>Programs + deliverables</h4>'+listItems(p.programs)+'</section>'+
          '<section class="project-block"><h4>Tools + systems</h4>'+chips(p.tools,'tool-cloud')+'</section>'+
        '</div>'+
        '<section class="project-block measured-outcomes"><h4>Outcomes + KPIs</h4>'+outcomes(p.outcomes)+'</section>'+
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