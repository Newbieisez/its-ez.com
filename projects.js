(function(){
  var workSection=document.getElementById('work');
  if(!workSection)return;
  var head=workSection.querySelector('.work-head');
  var list=workSection.querySelector('.work-list');
  if(!head||!list)return;

  var intro=head.querySelector('.body-copy');
  if(intro)intro.textContent='Start with the numbers. Expand any project to see the why, the build, the project plan, the systems architecture, the operating process, and the proof behind the outcome.';

  var impact=document.createElement('div');
  impact.className='impact-strip';
  impact.setAttribute('aria-label','Historical enterprise enablement benchmarks');
  impact.innerHTML='<div class="impact-stat"><strong>+8.75%</strong><span>Bottom-line revenue · historical benchmark</span></div><div class="impact-stat"><strong>+4%</strong><span>Win rate · historical benchmark</span></div><div class="impact-stat"><strong>−37 days</strong><span>Average sales cycle · historical benchmark</span></div>';
  head.parentNode.insertBefore(impact,list);

  var projects=[
    {
      id:'sentinelone-partner-architecture',index:'01',company:'SentinelOne',title:'Global Partner Enablement Ecosystem & Intelligence Architecture',timeline:'2024–2025',type:'Global partner transformation',metrics:['$3.1M revenue influenced','40–50% faster ramp','4,000+ partners'],lede:'Replaced a fragmented partner learning and content environment with a connected operating architecture built to scale partner readiness across multiple partner models, roles, regions, and technical depths.',
      why:'Partner content, learning, accreditation, analytics, and support were operating as separate experiences. Partners had difficulty finding current resources, legacy paths did not reflect different partner motions, leadership lacked useful learning visibility, and internal teams absorbed repeat questions manually.',
      how:'I treated the problem as a systems transformation rather than a course-production request. The work connected partner segmentation, capability mapping, learning architecture, content governance, LMS/PRM workflows, analytics, custom portal components, and an emerging conversational-AI knowledge layer.',
      process:['Audit the baseline','Segment partner roles','Map required capabilities','Architect learning paths','Build + quality review','Integrate + automate','Launch + drive adoption','Measure + optimize'],
      pm:['Ran parallel workstreams across curriculum, systems, content, analytics, portal experience, and AI/knowledge support.','Managed dependencies between partner identity/access, learning enrollment, accreditation logic, content availability, reporting, and launch communications.','Used iterative releases and quality gates so priority experiences could ship while the broader architecture continued to mature.','Established governance around content freshness, learner journeys, analytics, and ongoing program optimization.'],
      programs:['Partner Pre-Sales Fundamentals (~2h)','Sales Fundamentals','Sales Applied track (~6–8h)','Pre-Sales Technical Fundamentals (~2.5h)','PurpleAI Partner Specialization','Cloud Fundamentals + personas','Unified Demo Introduction','Competitive Edge weekly enablement'],
      tools:['Thought Industries / SentinelOne University','Highspot / SalesEdge','Impartner PRM','Wistia','Articulate 360 / Rise','Glean','11Labs','Canva','Google Workspace','Slack Canvas','Custom widgets + portal automations','Conversational AI architecture'],
      outcomes:[['$3.1M','Partner-driven revenue influenced'],['40–50%','Partner ramp-time reduction'],['4,000+','Partners reached globally']],
      note:'The strategic shift: partner enablement moved from “content + courses” to Partner Type → Role → Capability → Learning → Accreditation → Data → Readiness → Revenue.'
    },
    {
      id:'twilio-meddpicc',index:'02',company:'Twilio',title:'MEDDPICC Revenue Execution & Behavior Architecture',timeline:'2022–2024',type:'Global methodology + sales readiness',metrics:['82% adoption','40% conversion lift','NPS 80'],lede:'Operationalized MEDDPICC as a revenue-execution system—connecting learning, opportunity behavior, manager coaching, CRM discipline, and deal inspection instead of treating methodology as a one-time training event.',
      why:'Methodology only matters when it changes live opportunity behavior. The risk was a familiar one: sellers could learn the vocabulary without consistently using it to qualify deals, expose risk, improve discovery, or support manager inspection.',
      how:'I designed the rollout around observable behaviors. Workshops introduced the methodology, applied practice connected it to real opportunities, manager reinforcement sustained it, and workflow integration created recurring moments where the methodology had to be used.',
      process:['Baseline execution gaps','Define observable behaviors','Teach + practice','Embed in opportunity workflow','Manager inspection + coaching','Reinforce in field','Measure adoption + conversion'],
      pm:['Coordinated enablement, frontline management, sales leadership, Revenue Operations, and system owners around one behavior model.','Sequenced seller training with manager readiness so reinforcement existed immediately after launch.','Connected enablement milestones to pipeline inspection and CRM execution rather than course completion alone.','Used adoption and conversion signals to identify where reinforcement was still required.'],
      programs:['Global MEDDPICC workshops','Opportunity-based practice','Manager coaching guides','Deal inspection routines','Pipeline reinforcement','Value-selling application'],
      tools:['Salesforce','Gong','Highspot','Slack','Manager coaching workflows','CRM stage / qualification signals'],
      outcomes:[['82%','MEDDPICC adoption'],['40%','Deal / stage conversion lift'],['80','Workshop NPS']],
      note:'The operating loop: Learn → Apply → Inspect → Coach → Reinforce → Measure. The goal was not methodology knowledge; it was repeatable revenue behavior.'
    },
    {
      id:'twilio-productivity-ai',index:'03',company:'Twilio',title:'AI-Powered GTM Knowledge & Productivity Engine',timeline:'2022–2024',type:'AI + workflow + GTM technology optimization',metrics:['+9% productivity','$700K annual savings','−60% search time'],lede:'Connected AI knowledge retrieval, workflow education, and technology rationalization to attack two expensive forms of GTM friction: time lost finding answers and money lost maintaining tools that were not producing enough value.',
      why:'Sellers had powerful systems and deep technical knowledge available to them, but information was distributed and the revenue stack had overlapping capabilities. The business needed faster answers, clearer workflows, stronger adoption, and disciplined technology economics.',
      how:'I combined WiseOwl—an AI knowledge assistant available in seller workflows—with an ongoing Tool Tips program and a stack-rationalization workstream. Rather than teach tools in isolation, the program focused on what sellers were trying to accomplish and removed friction around those workflows.',
      process:['Inventory tools + knowledge','Map seller friction','Build AI retrieval path','Launch Tool Tips','Analyze usage + overlap','Consolidate licenses','Reinforce adoption','Measure time + productivity + cost'],
      pm:['Managed a cross-functional program spanning enablement, Revenue Operations, system owners, knowledge contributors, managers, and end users.','Balanced adoption, capability coverage, license economics, and workflow dependencies before consolidating technology.','Maintained a continuous learning cadence through Tool Tips so process and system changes translated into usable behavior.','Used seller friction and usage signals to prioritize the highest-value productivity improvements.'],
      programs:['WiseOwl AI assistant','Tool Tips microlearning series','GTM stack rationalization','Workflow automation','Knowledge retrieval optimization'],
      tools:['Salesforce','Slack','WiseOwl','Gong','Highspot','Rattle','6sense','Outreach','ZoomInfo','LinkedIn Sales Navigator','LLM / AI systems'],
      outcomes:[['+9%','Sales productivity'],['$700K','Annual savings'],['−60%','Technical-answer search time']],
      note:'The architecture connected Seller Question → AI Retrieval → Workflow Guidance → System Adoption → Productivity → Revenue Execution.'
    },
    {
      id:'tessian-zero-to-one',index:'04',company:'Tessian',title:'Global Enablement 0→1 Architecture',timeline:'2019–2020',type:'Global sales enablement build',metrics:['0→1 function','−40% onboarding time','94% certification'],lede:'Took global enablement from 0 to 1—building the onboarding, messaging, practice, certification, content, and reinforcement infrastructure needed for a scaling enterprise sales organization.',
      why:'Rapid growth created inconsistent ramp experiences and too much dependency on tribal knowledge. Sellers needed a shared operating model for how to learn the business, engage buyers, practice enterprise selling, and demonstrate readiness.',
      how:'I created a sequenced capability journey that moved from onboarding and persona understanding into applied enterprise-selling behavior, multi-threading, practice, and certification. The program balanced global consistency with regional delivery needs.',
      process:['Assess readiness gaps','Standardize onboarding','Build persona messaging','Install role-based learning','Practice + certify','Reinforce through managers','Measure ramp + readiness'],
      pm:['Built the enablement operating model while simultaneously delivering against active field needs.','Managed regional requirements, role differences, content sequencing, launch schedules, and stakeholder expectations.','Created repeatable onboarding and certification rather than relying on manager-by-manager interpretation.','Used readiness and ramp performance to guide iteration.'],
      programs:['Structured onboarding','Persona-based messaging','Multi-threading enablement','Role-based tracks','Applied roleplay','Certification','Localized workshops + SKO programming'],
      tools:['LMS learning journeys','Sales playbooks','Certification workflows','Live workshops','Manager reinforcement','Governed content architecture'],
      outcomes:[['0→1','Global enablement function'],['−40%','Onboarding time'],['94%','Certification pass rate']],
      note:'The build created a repeatable system: Onboard → Learn → Practice → Certify → Perform → Reinforce → Measure.'
    },
    {
      id:'cofense-academy',index:'05',company:'Cofense',title:'Global Sales Academy & Rebrand Enablement Transformation',timeline:'2018–2019',type:'Change management + sales academy',metrics:['96% certification','$3M ARR influenced','Global rebrand'],lede:'Built global sales enablement while helping translate the PhishMe-to-Cofense transformation into field behavior—connecting the new company story to messaging, practice, certification, and revenue execution.',
      why:'A rebrand is only successful when the field can explain what changed, why it matters, and how the new story should influence customer conversations. At the same time, the organization needed a more consistent system for seller readiness and practice.',
      how:'I used the rebrand as a structured change-management program: align the narrative, convert it into seller messaging, deploy the learning environment, create scenario-based practice, certify readiness, and reinforce the behaviors required in market.',
      process:['Align corporate narrative','Translate to field messaging','Deploy Allego','Build scenario practice','Certify readiness','Reinforce objections + competition','Measure field impact'],
      pm:['Aligned Sales, Marketing, Product, Revenue Operations, and Enablement around one field-readiness plan.','Managed the platform, content, practice, certification, launch communications, and adoption workstreams together.','Sequenced rebrand messaging and certification so the field could demonstrate the new story before relying on it in market.','Established repeatable learning and practice beyond the rebrand itself.'],
      programs:['Cofense Academy','Scenario-based practice','Messaging + objection handling','Competitive enablement','Prospecting readiness','Certification'],
      tools:['Allego','Video practice','LMS learning paths','Certification workflows','Competitive playbooks','Live enablement'],
      outcomes:[['96%','Certification pass rate'],['$3M','ARR influenced'],['Global','Rebrand field activation']],
      note:'The change model: Corporate Strategy → GTM Messaging → Learning → Practice → Certification → Field Execution → Revenue.'
    },
    {
      id:'reup-gtm',index:'06',company:'ReUp Technologies',title:'0→1 GTM & Partner Commercialization Engine',timeline:'2020–2022',type:'Co-founder · business + GTM build',metrics:['0→1 build','2-year operating window','GTM + partner motion'],lede:'Built the commercial operating foundation from the company side—positioning, value proposition, sales process, partner activation, onboarding, and execution—providing direct experience with the business systems enablement is ultimately designed to improve.',
      why:'An early-stage company cannot rely on established messaging, sales motions, partner programs, or institutional knowledge. The business needed to determine who it served, what value it created, how to communicate that value, and how to turn successful motions into repeatable execution.',
      how:'I worked across strategy and execution rather than separating them. Customer and partner needs informed positioning; positioning informed messaging; messaging informed qualification and playbooks; and the resulting operating model informed onboarding and partner activation.',
      process:['Define market problem','Clarify customer + partner','Build value proposition','Create messaging','Install qualification','Build playbooks','Activate + onboard partners','Learn from pipeline'],
      pm:['Managed priorities across business-building workstreams with limited early-stage resources.','Connected product/market decisions to the commercial processes required to execute them.','Created repeatable operating assets instead of leaving critical knowledge in founder conversations.','Used active market feedback to refine positioning, process, and partner execution.'],
      programs:['GTM positioning','Full-funnel messaging','Sales playbooks','Qualification architecture','Partner activation','Partner onboarding'],
      tools:['GTM operating model','Sales playbooks','Partner onboarding workflows','Qualification frameworks','Pipeline feedback loops'],
      outcomes:[['0→1','Commercial foundation'],['2020–22','Build period'],['GTM + Partner','Integrated motion']],
      note:'ReUp demonstrates both sides of the discipline: building the GTM system itself and building enablement systems that improve GTM performance.'
    },
    {
      id:'ggw-ai-academy',index:'07',company:'Global Gaming Women',title:'AI Learning & Performance Support Academy',timeline:'2026–Present',type:'Current build · workforce AI adoption',metrics:['5 core modules','35+ master prompts','Google-native'],lede:'Designing a beginner-friendly AI academy that teaches people how to use AI inside real work—not just what generative AI is—through structured learning, reusable prompts, activities, quick-reference support, and Google Workspace workflows.',
      why:'Most AI education is either too conceptual or too advanced. Beginners need a clear bridge between “AI exists” and “here is exactly how I use it to complete a real task correctly and efficiently.”',
      how:'The academy is being built as both learning and performance support: concise modules build understanding, activities create practice, the prompt library accelerates application, and tool-specific guidance lets employees return at the exact moment they need help.',
      process:['Prioritize work use cases','Design 5 core modules','Build 35+ prompt library','Add practice + checks','Connect Google workflows','Install progress tracking','Validate usability','Iterate from learner data'],
      pm:['Managing curriculum, UX, content production, prompt architecture, web development, deployment, and governance as connected workstreams.','Using scoped releases rather than producing a large library before validating whether learners can actually use it.','Designing for adult-learning needs through step-by-step instruction, activities, visual support, and reusable job aids.','Maintaining accuracy as AI and Google capabilities change.'],
      programs:['Everyday AI workflows','Prompt Library','NotebookLM learning','Gemini workflows','Google Workspace quick tips','Applied activities + knowledge checks'],
      tools:['Gemini','NotebookLM','Gmail','Google Docs','Google Sheets','Google Slides','Google Drive','Google Calendar','GitHub','Vercel'],
      outcomes:[['5','Core modules'],['35+','Reusable master prompts'],['Current','Build + validation']],
      note:'The learning loop: Understand → See It → Practice It → Use It → Reference It → Improve It.'
    }
  ];

  var visuals={
    'sentinelone-partner-architecture':{
      window:'2024–2025 · iterative global rollout',
      phases:[['01','Discover','Audit content, journeys, roles, tracking gaps'],['02','Architect','Segment partner types and capability paths'],['03','Build','Courses, content model, widgets, automations'],['04','Launch','PartnerPulse + role-based program deployment'],['05','Optimize','Completion, drop-off, readiness and revenue signals']],
      architecture:[['Partner identity','Reseller · Distributor · MSSP · SI · Technical · Sales'],['Portal + access','Impartner PRM · custom portal logic'],['Learning','Thought Industries · Articulate Rise · Wistia'],['Content + knowledge','Highspot · Glean · Google Workspace · Canva'],['Intelligence','Analytics · custom widgets · conversational AI'],['Business output','Accreditation · readiness · partner-sourced revenue']],
      evidence:[
        ['Video learning','Working with Channel Partners','Field-facing partner learning example paired with practice and reinforcement.','Working%20with%20Channel%20Partners.mp4'],
        ['Architecture','8-Week Enablement Accelerator','Representative implementation architecture for diagnosing, building, piloting and measuring enablement.','#artifact-accelerator'],
        ['Playbook','Enablement Playbook Framework','Representative operating framework showing how process and field execution connect.','assets/enablement-playbook-framework.svg']
      ]
    },
    'twilio-meddpicc':{
      window:'2022–2024 · methodology rollout + reinforcement',
      phases:[['01','Diagnose','Find qualification and conversion friction'],['02','Define','Translate MEDDPICC into observable behaviors'],['03','Enable','Global workshops + opportunity practice'],['04','Reinforce','Manager coaching + deal inspection'],['05','Measure','Adoption + stage/deal conversion']],
      architecture:[['Methodology','MEDDPICC + value selling'],['Practice','Workshops · live opportunities · role application'],['Workflow','Salesforce qualification + opportunity signals'],['Inspection','Managers · pipeline reviews · deal coaching'],['Reinforcement','Gong · Highspot · Slack'],['Business output','82% adoption · 40% conversion lift']],
      evidence:[
        ['Operating model','4-Stage Enablement Framework','Know → Practice → Prove → Perform: the behavior model behind sustained methodology adoption.','#artifact-framework'],
        ['Playbook','SentinelOne / Twilio Playbook','Representative field playbook architecture for translating strategy into repeatable execution.','assets/enablement-playbook-framework.svg'],
        ['Scorecard','Measurable Impact','Executive KPI view connecting enablement activity to adoption and pipeline outcomes.','#artifact-kpis']
      ]
    },
    'twilio-productivity-ai':{
      window:'2022–2024 · continuous productivity program',
      phases:[['01','Inventory','Map tools, knowledge and duplicate capability'],['02','Friction map','Identify seller search and workflow waste'],['03','AI layer','Operationalize WiseOwl in Slack / Salesforce'],['04','Adoption','Tool Tips + workflow reinforcement'],['05','Optimize','Consolidate licenses and measure productivity']],
      architecture:[['Seller need','Question · task · opportunity friction'],['Knowledge layer','WiseOwl · LLM-assisted retrieval'],['Workflow','Slack · Salesforce · Rattle'],['Execution stack','Gong · Highspot · Outreach · 6sense · ZoomInfo'],['Enablement layer','Tool Tips · job aids · reinforcement'],['Business output','−60% search time · +9% productivity · $700K saved']],
      evidence:[
        ['AI architecture','GPT Prompt Architecture','Representative view of how structured AI instructions can turn knowledge into repeatable performance support.','assets/gpt-prompt-architecture.svg'],
        ['Performance model','4-Stage Enablement Framework','Framework for moving from tool awareness to demonstrated workflow behavior.','#artifact-framework'],
        ['Scorecard','GTM Productivity Outcomes','9% productivity lift and $700K annual savings displayed alongside other validated portfolio outcomes.','#artifact-kpis']
      ]
    },
    'tessian-zero-to-one':{
      window:'2019–2020 · approximately 12-month 0→1 build',
      phases:[['01','Baseline','Assess onboarding, messaging and readiness gaps'],['02','Standardize','Create global onboarding + role structure'],['03','Build','Persona messaging, multi-threading, practice'],['04','Validate','Certification + readiness proof'],['05','Scale','Manager reinforcement + regional delivery']],
      architecture:[['New seller','Role + region + starting capability'],['Onboarding','Sequenced learning + core messaging'],['Selling skills','Personas · discovery · multi-threading'],['Practice','Roleplay · workshops · applied exercises'],['Proof','Certification + readiness checks'],['Performance','Faster ramp + repeatable global execution']],
      evidence:[
        ['Program artifact','Onboarding architecture','Sequenced capability path from foundational knowledge through applied enterprise selling.',null],
        ['Readiness artifact','Certification model','Demonstration-based readiness rather than attendance-only completion.',null],
        ['Operating artifact','Global / regional delivery model','Standard core architecture with localized workshop and reinforcement delivery.',null]
      ]
    },
    'cofense-academy':{
      window:'2018–2019 · approximately 12-month transformation',
      phases:[['01','Align','Translate PhishMe → Cofense strategy'],['02','Message','Build field narrative + objections'],['03','Platform','Deploy Allego learning environment'],['04','Practice','Scenario learning + video practice'],['05','Certify','Readiness validation + reinforcement']],
      architecture:[['Corporate change','Brand · strategy · product narrative'],['Field story','Messaging · prospecting · objection handling'],['Learning platform','Allego'],['Practice','Scenario learning · video practice'],['Readiness','Certification + coaching'],['Commercial output','Consistent rebrand execution + ARR influence']],
      evidence:[
        ['Change artifact','Rebrand-to-field map','Corporate narrative translated into seller language, practice and customer-facing behavior.',null],
        ['Learning artifact','Cofense Academy','Structured global learning and certification environment.',null],
        ['Readiness artifact','Scenario certification','Applied selling proof supported by Allego video practice and coaching.',null]
      ]
    },
    'reup-gtm':{
      window:'2020–2022 · founder-led 0→1 operating build',
      phases:[['01','Market','Clarify problem and target customer'],['02','Position','Define value proposition + messaging'],['03','Sell','Qualification + full-funnel playbooks'],['04','Partner','Activation + onboarding motion'],['05','Learn','Pipeline feedback → GTM iteration']],
      architecture:[['Market signal','Customer + partner problem'],['Positioning','Value proposition + narrative'],['Sales motion','Qualification · discovery · playbooks'],['Partner motion','Recruit · activate · onboard'],['Feedback','Pipeline + market learning'],['Business output','Repeatable commercial operating foundation']],
      evidence:[
        ['Founder artifact','GTM operating model','Market problem → positioning → sales motion → partner motion → pipeline.',null],
        ['Sales artifact','Full-funnel playbooks','Repeatable messaging, qualification and execution instead of founder-only knowledge.',null],
        ['Partner artifact','Activation + onboarding','A structured external-partner motion connected to the commercial strategy.',null]
      ]
    },
    'ggw-ai-academy':{
      window:'2026–Present · active build and validation',
      phases:[['01','Prioritize','Choose high-value everyday work use cases'],['02','Design','5 complete modules + adult-learning flow'],['03','Build','35+ prompts + step-by-step job aids'],['04','Productize','Google-native portal + progress tracking'],['05','Validate','Learner feedback + ongoing AI governance']],
      architecture:[['Employee task','Email · document · analysis · meeting · planning'],['Learning layer','Short modules · examples · activities'],['AI layer','Gemini · NotebookLM · reusable prompts'],['Workspace','Gmail · Docs · Sheets · Slides · Drive · Calendar'],['Support layer','Quick tips · prompt library · reference paths'],['Performance output','Confidence · adoption · workflow efficiency']],
      evidence:[
        ['Learning artifact','5 Core Modules','Complete learning experiences built around real work rather than feature tours.',null],
        ['Performance support','35+ Master Prompts','Solution-filtered reusable prompts connected to specific Google workflows.',null],
        ['Product artifact','Google-native Academy','Interactive learning portal with progress, activities, quick tips and performance support.',null]
      ]
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
        '<div class="project-meta"><span>'+p.company+'</span><span>'+p.timeline+'</span><span>'+p.type+'</span></div>'+
        visualProof(p)+
        '<div class="project-grid">'+
          '<section class="project-block"><h4>Why this mattered</h4><p>'+p.why+'</p></section>'+
          '<section class="project-block"><h4>How I approached it</h4><p>'+p.how+'</p></section>'+
          '<section class="project-block"><h4>Process implemented</h4>'+process(p.process)+'</section>'+
          '<section class="project-block"><h4>Project management + operating cadence</h4>'+listItems(p.pm)+'</section>'+
          '<section class="project-block"><h4>Programs + deliverables</h4>'+listItems(p.programs)+'</section>'+
          '<section class="project-block"><h4>Tools + systems</h4>'+chips(p.tools,'tool-cloud')+'</section>'+
        '</div>'+
        '<section class="project-block measured-outcomes"><h4>Measured outcomes</h4>'+outcomes(p.outcomes)+'</section>'+
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