const revenueWorkflows=[
{n:'01',icon:'◎',title:'Market & ICP',items:['Market research','ICP builder','Customer insights','Trend analysis']},
{n:'02',icon:'↗',title:'Prospecting & Outreach',items:['Prospect lists','Cold outreach','LinkedIn outreach','Multichannel sequences']},
{n:'03',icon:'◫',title:'Lead Intelligence',items:['Lead enrichment','Account intelligence','Buying signals','Intent scoring']},
{n:'04',icon:'▽',title:'Qualification',items:['Lead scoring','BANT / MEDDPICC support','Opportunity evaluation','Stakeholder mapping']},
{n:'05',icon:'▥',title:'Pipeline & Deal Management',items:['Pipeline tracking','Deal progress','Follow-up reminders','Deal summaries']},
{n:'06',icon:'▤',title:'Content & Enablement',items:['Value propositions','Sales decks','Case studies','Demo scripts']},
{n:'07',icon:'◇',title:'Conversion & Closing',items:['Objection handling','Negotiation support','Proposal writing','Close plans']},
{n:'08',icon:'↻',title:'Retention & Expansion',items:['Onboarding','Account health','Renewal prep','Expansion opportunities']},
{n:'09',icon:'▥',title:'Analytics & Insights',items:['Revenue analytics','Forecasting','Win/loss analysis','Insight reports']},
{n:'10',icon:'⚙',title:'Strategy & Operations',items:['GTM planning','Process optimization','Team enablement','Forecast modeling']},
{n:'11',icon:'▣',title:'Templates & Playbooks',items:['Outreach templates','Playbooks','Meeting prep checklists','Follow-up templates']},
{n:'12',icon:'✦',title:'Support Agents',items:['Training coach','Role-play simulator','Competitive analysis','Best-practice advisor']}
];

const platforms=[
{id:'chatgpt',mark:'GPT',name:'ChatGPT',system:'Revenue + Productivity System',best:'Flexible reasoning, drafting, analysis, role-play and workflow assistance.',cats:['revenue','enablement','operations'],stages:['Research','Create','Coach','Analyze','Automate'],workflows:[['Account research','Synthesize public and internal context into a usable account brief.'],['Message creation','Draft outreach, talk tracks and follow-up with reusable frameworks.'],['Deal coaching','Role-play objections and pressure-test qualification evidence.'],['Content conversion','Turn source material into decks, guides, emails and enablement assets.'],['Analysis','Summarize patterns, compare scenarios and identify gaps.'],['Workflow agents','Create repeatable assistants around common team work.']]},
{id:'claude',mark:'CLD',name:'Claude',system:'Deep Work + Strategy System',best:'Long-context analysis, structured thinking, writing and multi-document synthesis.',cats:['research','operations','revenue'],stages:['Synthesize','Plan','Draft','Review','Refine'],workflows:[['Research synthesis','Digest long reports, notes and source material into strategic takeaways.'],['Account strategy','Build deeper account plans and buying-committee hypotheses.'],['Proposal drafting','Create structured, buyer-specific proposals from scattered inputs.'],['Document review','Find contradictions, gaps, risks and missing evidence across long documents.'],['Operating plans','Turn messy goals into workflows, owners, dependencies and milestones.'],['Executive briefs','Compress complexity into concise decision-ready summaries.']]},
{id:'gemini',mark:'GEM',name:'Gemini',system:'Google Workspace System',best:'AI embedded across Gmail, Docs, Sheets, Slides, Meet and Drive workflows.',cats:['operations','research','enablement'],stages:['Email','Docs','Data','Meetings','Create'],workflows:[['Gmail acceleration','Summarize threads, draft replies and surface next actions.'],['Docs workflows','Draft, rewrite, review and structure business documents.'],['Sheets analysis','Clean data, explain patterns, create formulas and surface anomalies.'],['Slides support','Turn ideas and source material into presentation structure.'],['Meeting leverage','Summarize notes, decisions, owners and follow-up from meetings.'],['Drive knowledge','Use connected files as working context instead of starting from scratch.']]},
{id:'copilot',mark:'MS',name:'Microsoft Copilot',system:'Microsoft Work System',best:'AI workflows across Outlook, Teams, Excel, PowerPoint and Microsoft 365.',cats:['operations','revenue','enablement'],stages:['Outlook','Teams','Excel','PowerPoint','Operate'],workflows:[['Inbox triage','Summarize threads and prioritize responses in Outlook.'],['Teams follow-up','Capture meeting decisions, actions and unresolved questions.'],['Excel analysis','Explore business data, explain trends and create usable formulas.'],['PowerPoint creation','Transform plans and documents into executive-ready presentations.'],['Sales workflows','Support account planning, meeting prep and follow-up across Microsoft tools.'],['Leadership cadence','Create recurring summaries and action views from ongoing work.']]},
{id:'perplexity',mark:'P',name:'Perplexity',system:'Research + Intelligence System',best:'Fast web research with citations, comparisons and current market context.',cats:['research','revenue'],stages:['Discover','Verify','Compare','Brief','Monitor'],workflows:[['Market scan','Build a cited view of a market, category or emerging topic.'],['Account research','Find current company priorities, initiatives and public signals.'],['Competitive intelligence','Compare positioning, messaging, launches and claims.'],['Evidence checks','Validate statistics, quotes and market claims before publishing.'],['Buyer prep','Build concise source-backed briefs before calls or executive meetings.'],['Trend monitoring','Track changing narratives, launches and category movement.']]},
{id:'notebooklm',mark:'NLM',name:'NotebookLM',system:'Knowledge + Enablement System',best:'Grounded learning and synthesis from trusted internal source material.',cats:['enablement','research'],stages:['Source','Learn','Practice','Support','Scale'],workflows:[['Source-grounded hub','Create a trusted workspace around playbooks, policies and product knowledge.'],['Onboarding guide','Turn approved materials into guided learning and Q&A.'],['Study assets','Create summaries, FAQs and learning aids from source content.'],['Field support','Help teams answer questions without drifting beyond approved material.'],['Manager prep','Summarize key changes and coaching points from the latest source set.'],['Program updates','Refresh learning experiences as source content changes.']]},
{id:'clay',mark:'CLAY',name:'Clay',system:'Signal-Based GTM System',best:'Enrichment, signals, segmentation and scaled personalization for outbound GTM.',cats:['revenue','operations'],stages:['Signal','Enrich','Score','Personalize','Route'],workflows:[['Account enrichment','Build complete account records from multiple data sources.'],['Buying signals','Capture triggers that make outreach timely instead of generic.'],['Segmentation','Group accounts around attributes, fit and observed behavior.'],['Personalization','Generate tailored messaging from real account context.'],['Scoring','Prioritize accounts using fit, intent and signal strength.'],['Routing','Send qualified records into the right downstream sales workflow.']]},
{id:'salesforce',mark:'SF',name:'Salesforce',system:'CRM Revenue System',best:'Qualification, process execution, inspection, forecasting and revenue data.',cats:['revenue','operations'],stages:['Capture','Qualify','Inspect','Forecast','Measure'],workflows:[['CRM standards','Define exactly what sellers should capture and when.'],['MEDDPICC support','Embed evidence standards and qualification prompts into opportunities.'],['Deal inspection','Surface missing evidence, risk and next-step quality.'],['Pipeline governance','Standardize stage criteria and opportunity movement.'],['Forecast support','Connect structured evidence to manager forecast conversations.'],['Enablement impact','Tie readiness and field behavior to opportunity outcomes.']]},
{id:'gong',mark:'GONG',name:'Gong',system:'Revenue Intelligence System',best:'Conversation intelligence, coaching, deal inspection and behavior analysis.',cats:['revenue','enablement'],stages:['Capture','Inspect','Coach','Improve','Measure'],workflows:[['Call intelligence','Identify themes, buyer language, objections and risks across conversations.'],['Deal signals','Use conversation evidence to pressure-test opportunity confidence.'],['Manager coaching','Build coaching around observed behavior instead of opinion.'],['Message adoption','Measure whether new messaging or methodology shows up in calls.'],['Win/loss insight','Compare conversation patterns across won and lost opportunities.'],['Enablement analytics','Connect programs to observable field behavior over time.']]},
{id:'highspot',mark:'HS',name:'Highspot',system:'Enablement Activation System',best:'Content, plays, training, coaching and field activation in the flow of work.',cats:['enablement','revenue'],stages:['Prepare','Learn','Find','Execute','Measure'],workflows:[['Content governance','Give sellers one trusted place for current field content.'],['Sales plays','Package message, content, actions and guidance around a business motion.'],['Learning paths','Build role-based readiness around what sellers need to do.'],['Coaching','Reinforce behavior with manager-led practice and feedback.'],['Field activation','Connect enablement directly to live sales workflows.'],['Impact measurement','Track usage, readiness and field signals against business outcomes.']]}
];

const workflowGrid=document.querySelector('#workflow-grid');
workflowGrid.innerHTML=revenueWorkflows.map(w=>`<article class="workflow-card"><div class="workflow-top"><span class="workflow-num">${w.n}</span><span class="workflow-icon">${w.icon}</span></div><h3>${w.title}</h3><ul>${w.items.map(i=>`<li>${i}</li>`).join('')}</ul></article>`).join('');

const platformGrid=document.querySelector('#platform-grid');
const filters=document.querySelectorAll('.filter');

function renderPlatforms(filter='all'){
  const list=filter==='all'?platforms:platforms.filter(p=>p.cats.includes(filter));
  platformGrid.innerHTML=list.map(p=>`<article class="platform-card" data-cats="${p.cats.join(' ')}"><div class="platform-mark">${p.mark}</div><div class="platform-copy"><small>${p.system}</small><h3>${p.name}</h3><p>${p.best}</p><div class="platform-tags">${p.stages.map(s=>`<span>${s}</span>`).join('')}</div></div><button class="open-system" type="button" data-system="${p.id}" aria-label="Open ${p.name} system">↗</button></article>`).join('');
}
renderPlatforms();

filters.forEach(btn=>btn.addEventListener('click',()=>{
  filters.forEach(b=>{b.classList.remove('is-active');b.setAttribute('aria-pressed','false')});
  btn.classList.add('is-active');btn.setAttribute('aria-pressed','true');renderPlatforms(btn.dataset.filter);
}));

const dialog=document.querySelector('#system-dialog');
const dialogTitle=document.querySelector('#dialog-title');
const dialogKicker=document.querySelector('#dialog-kicker');
const dialogIntro=document.querySelector('#dialog-intro');
const dialogStages=document.querySelector('#dialog-stages');
const dialogWorkflows=document.querySelector('#dialog-workflows');

platformGrid.addEventListener('click',e=>{
  const trigger=e.target.closest('.open-system');if(!trigger)return;
  const p=platforms.find(item=>item.id===trigger.dataset.system);if(!p)return;
  dialogKicker.textContent=p.system;dialogTitle.textContent=p.name;dialogIntro.textContent=p.best;
  dialogStages.innerHTML=p.stages.map(s=>`<span>${s}</span>`).join('');
  dialogWorkflows.innerHTML=p.workflows.map(([title,body],i)=>`<div class="dialog-workflow"><strong>${String(i+1).padStart(2,'0')} / ${title}</strong><span>${body}</span></div>`).join('');
  dialog.showModal();
});

document.querySelector('.dialog-close').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',e=>{
  const rect=dialog.getBoundingClientRect();
  const inside=e.clientX>=rect.left&&e.clientX<=rect.right&&e.clientY>=rect.top&&e.clientY<=rect.bottom;
  if(!inside)dialog.close();
});
document.querySelector('.dialog-cta').addEventListener('click',()=>dialog.close());

const menu=document.querySelector('.menu-button');
const nav=document.querySelector('.nav');
menu.addEventListener('click',()=>{const open=nav.classList.toggle('is-open');menu.setAttribute('aria-expanded',open?'true':'false')});
document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('is-open');menu.setAttribute('aria-expanded','false')}));
