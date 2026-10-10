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

const workflowSets={
  genai:[['Create','Turn source material into first drafts, guides, playbooks and field-ready content.'],['Analyze','Synthesize notes, documents and data into usable findings and decisions.'],['Coach','Build practice, role-play, feedback and manager coaching workflows.'],['Support','Give teams a conversational front door to knowledge and next-best actions.'],['Automate','Connect repeatable prompts and agents to recurring operational work.']],
  research:[['Discover','Research markets, accounts, competitors and changing signals.'],['Verify','Check claims, sources and evidence before teams act on them.'],['Compare','Build structured comparisons across vendors, markets or options.'],['Brief','Compress research into role-ready and executive-ready summaries.'],['Monitor','Create repeatable intelligence workflows around changing information.']],
  crm:[['Capture','Define the evidence, activities and fields teams must record.'],['Qualify','Embed methodology, stage criteria and opportunity standards into the system of record.'],['Activate','Trigger guidance, tasks and enablement from live CRM context.'],['Inspect','Surface gaps, risk, next steps and pipeline quality for managers.'],['Measure','Connect behavior and readiness to customer and revenue outcomes.']],
  enablement:[['Content','Govern, find and activate the right field content in the flow of work.'],['Learning','Build role-based onboarding, launches and continuing readiness.'],['Practice','Use role-play, assignments and feedback to move knowledge into behavior.'],['Coach','Give managers observable signals and repeatable coaching workflows.'],['Measure','Track adoption, readiness, usage and business impact together.']],
  learning:[['Build','Create role-based learning paths from approved source material.'],['Deliver','Serve learning in formats and moments that fit the audience.'],['Practice','Add exercises, checks, simulations and certifications.'],['Reinforce','Use spaced follow-up, nudges and manager reinforcement after training.'],['Measure','Track completion, proficiency, confidence and downstream performance.']],
  coaching:[['Capture','Turn calls and meetings into searchable evidence.'],['Inspect','Find behaviors, objections, risks and opportunity signals.'],['Coach','Convert observed behavior into specific feedback and practice.'],['Reinforce','Track whether new messaging and skills appear after coaching.'],['Measure','Compare behavior patterns with pipeline and outcome changes.']],
  knowledge:[['Connect','Bring trusted documents, conversations and systems into one searchable layer.'],['Answer','Give teams grounded answers without hunting through repositories.'],['Curate','Create ownership, freshness and governance around critical knowledge.'],['Activate','Push knowledge into onboarding, support, meetings and field workflows.'],['Improve','Use search gaps and unanswered questions to improve the knowledge base.']],
  creation:[['Generate','Create a strong first draft from a brief, prompt or existing source.'],['Transform','Convert one source into slides, video, audio, guides and other formats.'],['Brand','Apply visual, voice and messaging standards consistently.'],['Localize','Adapt content for roles, regions, channels and audiences.'],['Publish','Move approved assets into the enablement, LMS or campaign workflow.']],
  automation:[['Trigger','Start workflows from events in CRM, LMS, forms, email or collaboration tools.'],['Route','Move the right data to the right team or system automatically.'],['Enrich','Add AI classification, summarization and decision support between steps.'],['Act','Create records, messages, tasks, approvals and follow-up actions.'],['Govern','Add human checkpoints, error handling, permissions and auditability.']],
  operations:[['Run','Operate AI systems reliably inside day-to-day business workflows.'],['Monitor','Track performance, usage, cost and quality signals.'],['Triage','Route issues, alerts and exceptions to the right owner.'],['Improve','Tune prompts, policies and configurations from observed behavior.'],['Measure','Tie operational outcomes to cost, quality and business impact.']],
  revops:[['Signal','Collect the activity and customer signals that should change what happens next.'],['Orchestrate','Route actions across CRM, engagement, collaboration and enablement systems.'],['Inspect','Surface deal risk, forecast changes and process gaps automatically.'],['Coach','Put relevant prompts and guidance in front of sellers and managers.'],['Measure','Track execution quality, velocity and revenue impact.']],
  project:[['Plan','Turn goals into owners, milestones, dependencies and deliverables.'],['Coordinate','Connect cross-functional enablement work without losing context.'],['Automate','Trigger recurring tasks, approvals and status workflows.'],['Report','Create useful status, risk and executive updates from live work.'],['Learn','Capture retrospectives and reusable patterns for the next launch.']],
  partner:[['Recruit','Organize partner recruitment, segmentation and onboarding entry points.'],['Onboard','Deliver role- and partner-type-specific readiness.'],['Accredit','Track requirements, certifications and specialization progress.'],['Activate','Connect content, leads, plays and support to partner workflows.'],['Measure','Tie partner engagement and readiness to contribution and revenue.']]
};

const OPENNESS_LABEL={'commercial-proprietary':'Commercial · proprietary','open-weight':'Open-weight','open-source':'Open source','source-available':'Source-available'};
function makePlatform(id,mark,name,system,best,cats,stages,primary,workflows,openness){
  return {id,mark,name,system,best,cats,stages,openness:openness||['commercial-proprietary'],workflows:workflows||workflowSets[primary]};
}

const platforms=[
makePlatform('chatgpt','GPT','ChatGPT','AI Work + Enablement System','Flexible reasoning, content creation, analysis, role-play, coaching and reusable agents.',['research','revenue','enablement','creation','operations'],['Research','Create','Coach','Analyze','Automate'],'genai'),
makePlatform('claude','CLD','Claude','Deep Work + Strategy System','Long-context analysis, structured thinking, writing, document synthesis and workflow design. Oct 2026: Claude for Startups expanded — free year of Claude Team (up to 5 Premium seats), $1,000 API credits (6-month expiry), and up to $45K in partner offers plus up to $100K more via partner VCs (TechCrunch, Oct 6). UPDATE Oct 9: Anthropic PAUSED the free Team year and $1,000 API credit offers — hundreds of thousands of applicants exceeded capacity; already-claimed benefits kept, unclaimed approvals re-reviewed (Anthropic FAQ/X). Startup Stack + Applied AI office hours remain.',['research','operations','creation','revenue'],['Synthesize','Plan','Draft','Review','Refine'],'genai'),
makePlatform('gemini','GEM','Gemini','Google Workspace AI System','AI across Gmail, Docs, Sheets, Slides, Meet and Drive for everyday work and enablement. From Oct 9, 2026: free tier limited to Flash-Lite. Separately, Google is retiring Gems in favor of Skills (Gems creation/editing reportedly locks Oct 13, 2026; auto-migration Nov 17, 2026).',['operations','research','enablement','creation'],['Email','Docs','Data','Meetings','Create'],'genai'),
makePlatform('copilot','MS','Microsoft Copilot','Microsoft 365 AI System','AI workflows across Outlook, Teams, Excel, PowerPoint and the Microsoft work environment.',['operations','revenue','enablement','creation'],['Outlook','Teams','Excel','PowerPoint','Operate'],'genai'),
makePlatform('perplexity','P','Perplexity','Research + Intelligence System','Fast web research, source-backed comparisons and current market context.',['research','revenue'],['Discover','Verify','Compare','Brief','Monitor'],'research'),
makePlatform('notebooklm','GNB','Gemini Notebook','Grounded Knowledge + Learning System','Source-grounded synthesis, Q&A and learning experiences built from trusted materials. Renamed from NotebookLM by Google, July 2026.',['enablement','research','knowledge','learning'],['Source','Learn','Practice','Support','Scale'],'knowledge'),
makePlatform('clay','CLAY','Clay','Signal-Based GTM System','Enrichment, signals, segmentation and scaled personalization for outbound GTM.',['revenue','operations','automation'],['Signal','Enrich','Score','Personalize','Route'],'revops'),

makePlatform('salesforce','SF','Salesforce','CRM Revenue System','System of record for qualification, process execution, pipeline inspection, forecasting and revenue data.',['revenue','operations','crm','automation'],['Capture','Qualify','Inspect','Forecast','Measure'],'crm'),
makePlatform('hubspot','HUB','HubSpot','CRM + Marketing + Service System','Connected CRM workflows spanning marketing, sales, service, content and customer lifecycle operations.',['revenue','operations','crm','automation'],['Attract','Capture','Sell','Serve','Measure'],'crm'),
makePlatform('dynamics','D365','Microsoft Dynamics 365','Enterprise CRM System','Enterprise sales and customer workflows connected to the Microsoft ecosystem.',['revenue','operations','crm'],['Capture','Qualify','Operate','Forecast','Measure'],'crm'),
makePlatform('zoho','ZOHO','Zoho CRM','CRM + Workflow System','Flexible CRM, process automation and customer lifecycle management for growing teams.',['revenue','operations','crm','automation'],['Capture','Route','Sell','Automate','Analyze'],'crm'),

makePlatform('gong','GONG','Gong','Revenue Intelligence System','Conversation intelligence, coaching, deal inspection and observable behavior analysis.',['revenue','enablement','coaching'],['Capture','Inspect','Coach','Improve','Measure'],'coaching'),
makePlatform('chorus','CHR','ZoomInfo Chorus','Conversation Intelligence System','Conversation capture, deal visibility, coaching and market insight connected to ZoomInfo workflows.',['revenue','enablement','coaching'],['Capture','Analyze','Coach','Inspect','Improve'],'coaching'),
makePlatform('clari','CLARI','Clari Forecast (Salesloft)','Revenue Platform','Forecasting, pipeline inspection, account visibility and revenue execution around live opportunity data. The Clari brand was absorbed into Salesloft (Sep 2026); Forecast continues as a Salesloft product line.',['revenue','operations','revops'],['Inspect','Forecast','Prioritize','Execute','Measure'],'revops'),
makePlatform('outreach','OUT','Outreach','Sales Execution System','Sales engagement, sequencing, deal workflows and rep execution across the revenue motion.',['revenue','operations','revops','automation'],['Target','Engage','Follow up','Inspect','Improve'],'revops'),
makePlatform('salesloft','SL','Salesloft','Revenue Orchestration System','Cadence, conversation, deal and coaching workflows for seller execution.',['revenue','operations','revops','coaching'],['Engage','Converse','Inspect','Coach','Forecast'],'revops'),
makePlatform('rattle','RTL','Rattle','Revenue Workflow Engine','CRM-connected workflows that move revenue work into Slack or Teams, automate updates and surface next actions.',['revenue','operations','revops','automation','enablement'],['Signal','Notify','Update','Coach','Measure'],'revops',[
['CRM in the flow of work','Push Salesforce or HubSpot context into Slack or Teams so reps can act without living in the CRM.'],['MEDDPICC workflows','Prompt for missing qualification evidence and update structured fields from the collaboration layer.'],['Meeting intelligence','Turn meeting context into summaries, next steps and CRM field suggestions.'],['Manager rundown','Deliver deal and coaching context before 1:1s instead of forcing managers to assemble it manually.'],['Revenue alerts','Trigger stuck-stage, pushed-date, renewal, approval and risk workflows from live CRM changes.']]),

makePlatform('seismic','SEIS','Seismic','GTM Performance + Enablement System','AI-powered content, enablement, buyer engagement and performance workflows across the go-to-market motion. Merged with Highspot (closed Aug 18, 2026); the combined company operates under the Seismic brand.',['enablement','revenue','learning','coaching'],['Content','Learn','Engage','Guide','Measure'],'enablement'),
makePlatform('highspot','HS','Highspot by Seismic','Enablement Activation System','The Highspot platform — merger with Seismic closed Aug 18, 2026; the product is now branded "Highspot by Seismic" — for content, plays, training, coaching and field activation.',['enablement','revenue','learning','coaching'],['Prepare','Learn','Find','Execute','Measure'],'enablement',[
['Content governance','Give sellers a trusted place for current field content and clear ownership.'],['Sales plays','Package message, content, actions and guidance around a real business motion.'],['Learning paths','Build role-based readiness around what sellers need to know and do.'],['Coaching','Reinforce behavior with practice, manager feedback and field evidence.'],['Field activation','Connect enablement directly to live seller workflows and measurable outcomes.']]),
makePlatform('allego','ALG','Allego','Revenue Enablement System','Learning, content, coaching, conversation intelligence and digital selling in one enablement environment.',['enablement','revenue','learning','coaching'],['Onboard','Learn','Practice','Sell','Measure'],'enablement',[
['Onboarding and launches','Build personalized learning journeys for new hires, product launches and ongoing readiness.'],['AI role-play and coaching','Create realistic practice, simulated objections and feedback before the live customer moment.'],['Content activation','Organize and recommend the right content in the moments sellers need it.'],['Conversation intelligence','Use customer interactions to identify coaching opportunities, risks and message adoption.'],['Digital selling','Create buyer-facing spaces and personalized video experiences that support active deals.']]),
makePlatform('letter-ai','LTR','Letter AI','AI-Native Revenue Enablement System','AI-native content, training, coaching, knowledge, conversational intelligence and buyer engagement.',['enablement','revenue','learning','coaching','creation','knowledge'],['Create','Train','Coach','Guide','Engage'],'enablement',[
['AI content creation','Generate and personalize field content from company knowledge and approved source material.'],['Training in minutes','Turn existing documents into interactive learning, onboarding and certification pathways.'],['AI role-play','Configure buyer personas and realistic practice scenarios with instant feedback.'],['Seller command center','Bring meeting prep, coaching, content and next actions together around the seller.'],['Grounded field agent','Give teams an AI assistant connected to company knowledge, revenue systems and approved context.']]),
makePlatform('mindtickle','MT','Mindtickle','Revenue Productivity + Readiness System','Readiness, coaching, content and performance workflows designed around seller behavior and revenue outcomes.',['enablement','learning','coaching','revenue'],['Learn','Practice','Coach','Execute','Measure'],'enablement'),
makePlatform('showpad','SHOW','Showpad','Sales Enablement System','Content management, learning, coaching and buyer engagement for customer-facing teams. Acquired by Vector Capital (Oct 30, 2025); combined with Bigtincan under the Showpad brand.',['enablement','learning','revenue'],['Content','Learn','Coach','Engage','Measure'],'enablement'),
makePlatform('spekit','SPK','Spekit','Just-in-Time Enablement System','Embedded guidance, process reinforcement and knowledge delivered directly where teams work.',['enablement','knowledge','learning'],['Capture','Guide','Reinforce','Support','Measure'],'enablement'),
makePlatform('workramp','WR','Learn:Up (formerly WorkRamp)','Learning + Enablement System','Employee, customer and revenue learning programs in one learning environment. Acquired by Learning Pool (Oct 2025); the LMS was renamed Learn:Up, and Learning Pool itself rebranded to Confirm (Aug 10, 2026).',['enablement','learning'],['Build','Deliver','Practice','Certify','Measure'],'learning'),
makePlatform('saleshood','SH','SalesHood','Revenue Enablement Platform','Seller learning, coaching, content and peer-driven readiness for go-to-market teams.',['enablement','learning','coaching','revenue'],['Learn','Practice','Share','Coach','Measure'],'enablement'),
makePlatform('second-nature','2N','Second Nature','AI Sales Role-Play System','AI-powered conversational practice for pitches, discovery, objections and certifications.',['enablement','learning','coaching'],['Simulate','Practice','Score','Coach','Certify'],'coaching'),

makePlatform('docebo','DOC','Docebo','Enterprise LMS + AI Learning System','Enterprise learning management for employee, customer and partner education with automation and AI support.',['learning','enablement','partner'],['Build','Assign','Learn','Automate','Measure'],'learning'),
makePlatform('360learning','360','360Learning','Collaborative Learning System','Collaborative LMS workflows that help internal experts create and improve learning quickly.',['learning','enablement'],['Create','Collaborate','Deliver','Improve','Measure'],'learning'),
makePlatform('cornerstone','CS','Cornerstone','Enterprise Learning + Talent System','Enterprise learning, skills and talent development for large organizations.',['learning','enablement'],['Skills','Learn','Develop','Manage','Measure'],'learning'),
makePlatform('degreed','DEG','Degreed','Learning Experience Platform','Learning discovery, skill development and personalized learning across internal and external sources.',['learning','enablement','knowledge'],['Discover','Learn','Practice','Develop','Measure'],'learning'),
makePlatform('thought-industries','TI','Thought Industries','Customer + Partner Learning System','External education, academies, certifications and monetized learning for customers and partners.',['learning','partner','enablement'],['Build','Segment','Deliver','Certify','Measure'],'learning'),
makePlatform('skilljar','SKJ','Skilljar (Gainsight)','Customer Education LMS','Customer and partner education, academies, certification and product adoption learning. Acquired by Gainsight (Apr 2025); now sold as Skilljar by Gainsight.',['learning','partner','enablement'],['Onboard','Educate','Certify','Adopt','Measure'],'learning'),
makePlatform('learnupon','LU','LearnUpon','Learning Management System','LMS for employee, customer and partner learning with structured delivery and reporting.',['learning','partner','enablement'],['Create','Assign','Learn','Certify','Report'],'learning'),
makePlatform('absorb','ABS','Absorb LMS','Learning Management System','Scalable learning management for employee, customer and partner audiences.',['learning','enablement','partner'],['Build','Deliver','Engage','Certify','Measure'],'learning'),
makePlatform('sana','SANA','Sana','AI Learning + Knowledge System','AI-first learning and knowledge workflows for personalized training, search and skill development. Acquired by Workday; being integrated as an AI agent layer.',['learning','enablement','knowledge'],['Source','Create','Learn','Ask','Improve'],'learning'),

makePlatform('glean','GLN','Glean','Enterprise Search + AI Knowledge System','Enterprise search and AI answers across connected company knowledge and applications.',['knowledge','enablement','operations'],['Connect','Search','Answer','Act','Govern'],'knowledge'),
makePlatform('notion','NOT','Notion','AI Workspace + Knowledge System','Docs, databases, enterprise search, meeting notes and AI agents in a shared workspace.',['knowledge','operations','project','creation','automation'],['Capture','Organize','Search','Automate','Operate'],'knowledge',[
['Enablement hub','Build a living home for playbooks, launch plans, FAQs, templates and team knowledge.'],['AI workspace search','Answer questions using workspace and connected-source context instead of scattered tabs.'],['Launch operations','Run enablement projects with docs, databases, owners, status and decisions together.'],['Meeting intelligence','Capture notes, decisions and follow-up into the same workspace where the work lives.'],['Custom agents','Automate recurring knowledge and operating workflows with context from the workspace.']]),
makePlatform('guru','GURU','Guru','Knowledge Management System','Verified knowledge, search and contextual answers for teams that need trusted information in the flow of work.',['knowledge','enablement'],['Capture','Verify','Find','Answer','Improve'],'knowledge'),
makePlatform('confluence','CONF','Confluence','Team Knowledge System','Collaborative documentation, internal knowledge and structured operating content across teams.',['knowledge','operations','project'],['Document','Organize','Collaborate','Search','Operate'],'knowledge'),

makePlatform('articulate','ART','Articulate 360 + Rise','AI-Assisted Course Authoring System','Create interactive e-learning, responsive Rise courses, assessments and polished enablement experiences.',['creation','learning','enablement'],['Outline','Author','Interact','Assess','Publish'],'creation',[
['Course generation','Turn a learning objective and source material into a structured course outline and first draft.'],['Rise experiences','Build responsive, scroll-based learning for onboarding, launches and reinforcement.'],['Interactive practice','Add scenarios, interactions, branching and knowledge checks where practice matters.'],['AI-assisted production','Accelerate drafting, editing, imagery and course development while preserving human review.'],['Publish to LMS','Package approved learning for LMS delivery, tracking and certification workflows.']]),
makePlatform('canva','CAN','Canva','Visual Enablement Content System','AI-assisted design for decks, one-pagers, job aids, video, social content and branded enablement assets.',['creation','enablement','operations'],['Brief','Generate','Design','Brand','Publish'],'creation',[
['Sales assets','Create polished one-pagers, infographics, battlecards and leave-behinds from approved messaging.'],['Enablement decks','Turn outlines and source content into visually consistent workshop and training decks.'],['Templates at scale','Lock brand patterns so teams can create without rebuilding the visual system every time.'],['Multiformat content','Repurpose one idea into presentation, image, video and social-ready formats.'],['Rapid updates','Refresh assets quickly when positioning, product or campaign information changes.']]),
makePlatform('synthesia','SYN','Synthesia','AI Video Learning System','Create presenter-led training and enablement videos from scripts without a traditional studio workflow.',['creation','learning','enablement'],['Script','Generate','Localize','Review','Publish'],'creation'),
makePlatform('heygen','HEY','HeyGen','AI Video Creation System','AI avatar, translation and video generation for training, communications and field content. Oct 9, 2026: launched HeyGen Voice, its in-house voice model — free in platform and API, plus a $99/mo Professional Voice Clone add-on (30 min–3 hrs of owner speech, explicit consent). HeyGen claims a #1 Artificial Analysis leaderboard debut; the release names no specific leaderboard/metric, so treat the ranking as company-reported.',['creation','learning','enablement'],['Script','Avatar','Translate','Review','Publish'],'creation'),
makePlatform('elevenlabs','11','ElevenLabs','AI Voice + Audio System','Natural AI voice for narration, multilingual learning, podcasts and audio-first enablement content.',['creation','learning','enablement'],['Script','Voice','Localize','Produce','Publish'],'creation'),
makePlatform('gamma','GAM','Gamma','AI Presentation + Content System','Generate and refine presentations, documents, webpages and visual business content from prompts or source material.',['creation','enablement','operations'],['Generate','Import','Refine','Present','Share'],'creation'),
makePlatform('vyond','VY','Vyond','Animated Video Creation System','Animated training, scenario and explainer video creation for learning and communications.',['creation','learning','enablement'],['Script','Scene','Animate','Review','Publish'],'creation'),
makePlatform('descript','DES','Descript','AI Audio + Video Editing System','Transcript-based video and audio editing for training, demos, podcasts and internal communications.',['creation','learning','enablement'],['Record','Transcribe','Edit','Polish','Publish'],'creation'),
makePlatform('loom','LOOM','Loom','Async Video + AI Communication System','Fast screen recording, demos, walkthroughs and async updates with AI-assisted summaries and follow-up.',['creation','learning','enablement','operations'],['Record','Explain','Summarize','Share','Reuse'],'creation'),
makePlatform('scribe','SCR','Scribe','Process Documentation System','Automatically turn captured workflows into step-by-step process guides and job aids.',['creation','knowledge','enablement','operations'],['Capture','Document','Edit','Share','Maintain'],'creation'),
makePlatform('guidde','GDE','Guidde','AI Video Documentation System','Create short how-to videos and process documentation for tools, workflows and onboarding.',['creation','knowledge','enablement','learning'],['Capture','Generate','Narrate','Share','Update'],'creation'),

makePlatform('asana','ASA','Asana','Work Management System','Cross-functional project planning, launch execution, dependencies and operating cadence.',['project','operations','enablement'],['Plan','Assign','Coordinate','Automate','Report'],'project'),
makePlatform('monday','MON','monday.com','Work Management System','Flexible work management for projects, campaigns, operations and cross-functional delivery.',['project','operations','enablement'],['Plan','Track','Automate','Collaborate','Report'],'project'),
makePlatform('jira','JIRA','Jira','Project + Delivery System','Structured project, issue and delivery workflows for technical and cross-functional teams.',['project','operations'],['Plan','Prioritize','Build','Track','Report'],'project'),
makePlatform('clickup','CU','ClickUp','Work + Project Management System','Tasks, docs, goals, automation and project coordination in a unified workspace.',['project','operations','knowledge'],['Plan','Document','Execute','Automate','Measure'],'project'),
makePlatform('smartsheet','SMS','Smartsheet','Enterprise Work Management System','Structured planning, portfolio visibility, workflows and reporting for complex cross-functional work.',['project','operations'],['Plan','Track','Automate','Report','Govern'],'project'),

makePlatform('zapier','ZAP','Zapier','No-Code Automation System','Connect applications, triggers, AI steps and actions without building custom integration infrastructure.',['automation','operations','revenue','enablement'],['Trigger','Transform','Route','Act','Monitor'],'automation'),
makePlatform('make','MAKE','Make','Visual Automation System','Visual workflow automation across apps, data and AI steps for repeatable business processes.',['automation','operations','revenue','enablement'],['Trigger','Branch','Transform','Act','Monitor'],'automation'),
makePlatform('n8n','N8N','n8n','Workflow Automation System','Flexible workflow automation for teams that want deeper control over integrations, logic and AI agents. v2.42 added nested agent tools, an Agent Builder UX push and stronger MCP support, with 2.43.x releases shipping Oct 6–9 — the shift from workflow tool to agent orchestration platform continues.',['automation','operations','revenue','enablement'],['Trigger','Orchestrate','Agent','Act','Observe'],'automation',undefined,['source-available']),
makePlatform('workato','WK','Workato','Enterprise Automation System','Enterprise integration and workflow automation across applications, data and business processes.',['automation','operations','revenue'],['Connect','Orchestrate','Govern','Act','Measure'],'automation'),

makePlatform('impartner','IMP','Impartner','Partner Relationship Management System','Partner portal, onboarding, enablement, marketing and channel management workflows.',['partner','enablement','learning','operations'],['Recruit','Onboard','Enable','Activate','Measure'],'partner'),
makePlatform('allbound','ALL','Channelscaler (formerly Allbound)','Partner Relationship Management System','Partner portal, content, onboarding, co-selling and engagement for channel ecosystems. Merged with Channel Mechanics (2024); the unified Channelscaler brand was announced May 30, 2025.',['partner','enablement','operations'],['Recruit','Onboard','Enable','Co-sell','Measure'],'partner'),
makePlatform('channeltivity','CH','Channeltivity','Partner Relationship Management System','Channel partner management, enablement, deal registration and portal workflows.',['partner','enablement','operations'],['Recruit','Onboard','Register','Enable','Measure'],'partner'),
makePlatform('crossbeam','XB','Crossbeam','Ecosystem Intelligence System','Account mapping and partner ecosystem data for co-selling and partnership opportunity identification. Merged with Reveal (June 2024); combined ecosystem network spans 25,000+ companies.',['partner','revenue','operations'],['Map','Match','Prioritize','Co-sell','Measure'],'partner'),
makePlatform('partnerstack','PS','PartnerStack','Partner Ecosystem Platform','Partner recruitment, programs, referrals, commissions and ecosystem growth workflows. Acquired by AppDirect (Apr 2026); operates under its own name.',['partner','revenue','operations'],['Recruit','Activate','Track','Reward','Grow'],'partner'),
makePlatform('agentforce','AF','Agentforce 360','Enterprise Agent Platform','Salesforce\'s agentic AI platform (renamed Agentforce 360 at Dreamforce 2025) — Salesforce-native AI agents for service, sales, IT and operations with enterprise governance.',['automation','revenue','operations'],['Deploy','Orchestrate','Govern','Measure','Scale'],'automation',[
['Service agents','Deploy AI agents for customer service with Salesforce data and guardrails.'],
['Sales agents','Automate pipeline generation, qualification and follow-up inside CRM.'],
['IT/HR agents','Handle employee requests, onboarding and IT support autonomously.'],
['Multi-agent orchestration','Coordinate specialized agents across business processes.'],
['Agent governance','Enterprise controls, audit trails and human approval workflows.']]),
makePlatform('chatgpt-work','CGW','ChatGPT Work','Enterprise AI Work System','Autonomous agents that execute multi-step business tasks across connected apps and data. Real OpenAI product — autonomous work agent launched July 2026; Work Data agent added Sept 10, 2026.',['automation','operations','revenue','enablement'],['Connect','Delegate','Execute','Monitor','Measure'],'automation',[
['Cross-app workflows','Execute tasks spanning Slack, Drive, CRM, email and calendars.'],
['Scheduled agents','Run recurring business processes on autopilot.'],
['Live dashboards','Turn projects into real-time operational views.'],
['Document collaboration','Co-edit with AI in shared workspaces.'],
['Enterprise controls','Permissions, audit logs and admin governance.']]),
makePlatform('comet','COM','Perplexity Comet','AI Browser System','Chromium-based browser with built-in AI assistant for research, automation and task execution.',['research','operations','automation'],['Browse','Research','Automate','Summarize','Act'],'research',[
['Agentic browsing','Automate multi-tab research and form filling.'],
['Tab intelligence','Summarize and synthesize across open tabs.'],
['Structured outputs','Generate presentations, spreadsheets and dashboards from web research.'],
['Task automation','Delegate repetitive browser workflows to AI.'],
['Research synthesis','Combine sources into actionable briefs.']]),
makePlatform('veo','VEO','Google Veo 3.1','AI Video Generation System','Best-in-class AI video generation with native audio, dialogue and 4K output.',['creation','enablement'],['Prompt','Generate','Direct','Refine','Publish'],'creation',[
['Text-to-video','Generate cinematic video from text descriptions.'],
['Native audio','Synchronized dialogue, music and sound effects in one pass.'],
['4K output','Highest resolution available in AI video generation.'],
['Marketing content','Create product videos, ads and social content.'],
['Training video','Generate presenter-led learning content at scale.']]),
makePlatform('openshell','OSH','NVIDIA OpenShell','Agent Safety Infrastructure','Open-source sandboxed runtime for safely running AI agents with production credentials.',['operations','automation'],['Isolate','Constrain','Monitor','Quarantine','Audit'],'automation',[
['Sandboxed execution','Run agents with default-deny policies on files and network.'],
['Credential protection','Replace secrets with opaque placeholders.'],
['Hardware watchdog','Quarantine rogue agents in milliseconds.'],
['Policy enforcement','Define what agents can and cannot access.'],
['Audit trails','Complete logs of agent actions for compliance.']],['open-source']),
];

const filterConfig=[
  ['all','All systems'],['enablement','Enablement'],['learning','LMS / Learning'],['creation','AI Content'],['crm','CRM'],['coaching','Coaching / CI'],['knowledge','Knowledge'],['automation','Automation'],['revops','Revenue Ops'],['project','PMS / Projects'],['partner','Partner / PRM'],['research','Research']
];

const extraStyle=document.createElement('style');
extraStyle.textContent=`
.library-controls{display:grid;grid-template-columns:minmax(220px,360px) 1fr;gap:14px;align-items:start;margin-bottom:24px}
.system-search-wrap{position:relative}.system-search{width:100%;min-height:43px;border:1px solid var(--ink);border-radius:999px;background:#fff;padding:10px 42px 10px 16px;font:inherit;font-size:.78rem;outline:none}.system-search:focus{box-shadow:0 0 0 3px rgba(239,23,23,.12);border-color:var(--red)}
.system-search-wrap:after{content:'⌕';position:absolute;right:16px;top:8px;font-size:1.15rem;font-weight:900}.library-controls .filter-row{margin:0}.openness-row{display:flex;flex-wrap:wrap;gap:8px;align-items:center;margin-top:10px}
.openness-label{font-size:.62rem;font-weight:950;letter-spacing:.12em;text-transform:uppercase;color:var(--muted);margin-right:2px}
.ofilter{border:1px solid var(--ink);border-radius:999px;padding:9px 13px;background:transparent;font-size:.7rem;font-weight:900;cursor:pointer}
.ofilter:hover,.ofilter.is-active{background:var(--ink);color:#fff}
.dialog-openness{display:flex;flex-wrap:wrap;gap:6px;margin:12px 0 0}
.dialog-openness span{padding:5px 10px;border:1px solid var(--ink);border-radius:999px;font-size:.58rem;font-weight:900;letter-spacing:.06em;text-transform:uppercase}
.dialog-openness span:not(:first-child){border-color:var(--red);color:var(--red)}.library-status{display:flex;justify-content:space-between;gap:16px;align-items:center;margin:-8px 0 20px;color:var(--muted);font-size:.72rem}.library-status strong{color:var(--ink)}
.platform-card[hidden]{display:none}.platform-empty{grid-column:1/-1;padding:34px;border:1px dashed var(--ink);border-radius:20px;background:#fff;text-align:center}.platform-empty strong{display:block;font-size:1.1rem}.platform-empty span{display:block;margin-top:6px;color:var(--muted);font-size:.8rem}
@media(max-width:820px){.library-controls{grid-template-columns:1fr}.library-status{align-items:flex-start;flex-direction:column}.system-search{font-size:16px}}
`;
document.head.appendChild(extraStyle);

const workflowGrid=document.querySelector('#workflow-grid');
workflowGrid.innerHTML=revenueWorkflows.map(w=>`<article class="workflow-card"><div class="workflow-top"><span class="workflow-num">${w.n}</span><span class="workflow-icon">${w.icon}</span></div><h3>${w.title}</h3><ul>${w.items.map(i=>`<li>${i}</li>`).join('')}</ul></article>`).join('');

const platformGrid=document.querySelector('#platform-grid');
const oldFilterRow=document.querySelector('.filter-row');
const controls=document.createElement('div');
controls.className='library-controls';
controls.innerHTML=`<label class="system-search-wrap"><span class="skip-link">Search systems</span><input class="system-search" type="search" placeholder="Search tools, LMS, CRM, AI video, coaching…" aria-label="Search platform systems"></label><div class="filter-row" role="group" aria-label="Filter platform systems">${filterConfig.map(([value,label],i)=>`<button class="filter${i===0?' is-active':''}" type="button" data-filter="${value}" aria-pressed="${i===0?'true':'false'}">${label}</button>`).join('')}</div>`;
oldFilterRow.replaceWith(controls);
const opennessRow=document.createElement('div');
opennessRow.className='openness-row';
opennessRow.setAttribute('role','group');
opennessRow.setAttribute('aria-label','Filter by model openness');
opennessRow.innerHTML=`<span class="openness-label">Model openness</span>${[['all','All'],['commercial-proprietary','Commercial'],['open-weight','Open-weight'],['open-source','Open source'],['source-available','Source-available']].map(([v,l],i)=>`<button class="ofilter${i===0?' is-active':''}" type="button" data-openness="${v}" aria-pressed="${i===0?'true':'false'}">${l}</button>`).join('')}`;
controls.querySelector('.filter-row').insertAdjacentElement('afterend',opennessRow);
const status=document.createElement('div');
status.className='library-status';
status.innerHTML=`<span><strong id="system-count">${platforms.length}</strong> platform systems across the modern enablement + GTM stack</span><span>Search by vendor, category or job to be done.</span>`;
controls.insertAdjacentElement('afterend',status);

const filters=document.querySelectorAll('.filter');
const searchInput=document.querySelector('.system-search');
let activeFilter='all';
let activeOpenness='all';
let searchTerm='';

function platformSearchText(p){
  return [p.name,p.system,p.best,p.cats.join(' '),(p.openness||[]).join(' '),p.stages.join(' '),...p.workflows.flat()].join(' ').toLowerCase();
}
function renderPlatforms(){
  const list=platforms.filter(p=>(activeFilter==='all'||p.cats.includes(activeFilter))&&(activeOpenness==='all'||(p.openness||[]).includes(activeOpenness))&&(!searchTerm||platformSearchText(p).includes(searchTerm)));
  document.querySelector('#system-count').textContent=list.length;
  if(!list.length){
    platformGrid.innerHTML=`<div class="platform-empty"><strong>No system matches that search.</strong><span>Try a vendor name, LMS, CRM, coaching, AI video, content, automation, partner or project.</span></div>`;
    return;
  }
  platformGrid.innerHTML=list.map(p=>`<article class="platform-card" data-cats="${p.cats.join(' ')}"><div class="platform-mark">${p.mark}</div><div class="platform-copy"><small>${p.system}</small><h3>${p.name}</h3><p>${p.best}</p><div class="platform-tags">${p.stages.map(s=>`<span>${s}</span>`).join('')}</div></div><button class="open-system" type="button" data-system="${p.id}" aria-label="Open ${p.name} system">↗</button></article>`).join('');
}
renderPlatforms();

filters.forEach(btn=>btn.addEventListener('click',()=>{
  filters.forEach(b=>{b.classList.remove('is-active');b.setAttribute('aria-pressed','false')});
  btn.classList.add('is-active');btn.setAttribute('aria-pressed','true');activeFilter=btn.dataset.filter;renderPlatforms();
}));
const ofilters=document.querySelectorAll('.ofilter');
function resetOpennessVisual(){
  ofilters.forEach(b=>{b.classList.remove('is-active');b.setAttribute('aria-pressed','false')});
  const allOpen=controls.querySelector('.ofilter[data-openness="all"]');
  if(allOpen){allOpen.classList.add('is-active');allOpen.setAttribute('aria-pressed','true')}
  activeOpenness='all';
}
ofilters.forEach(btn=>btn.addEventListener('click',()=>{
  ofilters.forEach(b=>{b.classList.remove('is-active');b.setAttribute('aria-pressed','false')});
  btn.classList.add('is-active');btn.setAttribute('aria-pressed','true');activeOpenness=btn.dataset.openness;
  document.querySelectorAll('.outcome-card.is-active').forEach(c=>{c.classList.remove('is-active');c.setAttribute('aria-pressed','false')});
  renderPlatforms();
}));
searchInput.addEventListener('input',()=>{searchTerm=searchInput.value.trim().toLowerCase();renderPlatforms()});

const proofNumbers=document.querySelectorAll('.hero-proof strong');
if(proofNumbers[0])proofNumbers[0].textContent=platforms.length;
const proofLabels=document.querySelectorAll('.hero-proof span');
if(proofLabels[0])proofLabels[0].innerHTML=`<strong>${platforms.length}</strong> platform systems`;

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
  let openChip=dialog.querySelector('.dialog-openness');
  if(!openChip){openChip=document.createElement('div');openChip.className='dialog-openness';dialogTitle.insertAdjacentElement('afterend',openChip);}
  const openVals=(p.openness||[]).filter(v=>OPENNESS_LABEL[v]);
  openChip.style.display=openVals.length?'':'none';
  openChip.innerHTML=openVals.map(v=>`<span>${OPENNESS_LABEL[v]}</span>`).join('');
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

const buildLink=document.querySelector('.cta-actions .button-white');
if(buildLink) buildLink.setAttribute('href','/#contact');
const footerMeta=document.querySelector('.footer-grid p:last-child');
if(footerMeta) footerMeta.textContent='Erez Haimowicz · Building since 1999';
