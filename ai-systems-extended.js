(() => {
  if (typeof platforms === 'undefined' || typeof revenueWorkflows === 'undefined' || typeof makePlatform === 'undefined') return;

  const extraSets = {
    prospecting: [
      ['Find','Build and enrich target account and contact lists from approved ICP criteria.'],
      ['Signal','Surface firmographic, intent, hiring, technology and engagement signals that change priority.'],
      ['Research','Create evidence-backed account and persona briefs before outreach.'],
      ['Prioritize','Score fit and urgency separately so reps know who deserves attention first.'],
      ['Route','Send the right record, context and next action into CRM or engagement workflows.']
    ],
    outbound: [
      ['Prepare','Research the account, buyer and trigger before generating outreach.'],
      ['Personalize','Create message variants from real evidence instead of shallow token replacement.'],
      ['Sequence','Coordinate email, LinkedIn, call and follow-up touches around one message thesis.'],
      ['Learn','Classify replies, objections and outcomes so messaging improves over time.'],
      ['Govern','Protect deliverability, brand voice, permissions and human approval where it matters.']
    ],
    meeting: [
      ['Prepare','Create pre-call briefs from calendar, CRM and prior conversation context.'],
      ['Capture','Record or transcribe the conversation and preserve important buyer language.'],
      ['Extract','Pull decisions, risks, commitments, MEDDPICC evidence and next steps from the meeting.'],
      ['Sync','Write approved notes, tasks and structured fields back into CRM automatically.'],
      ['Coach','Turn real conversations into searchable examples, coaching and win-loss insight.']
    ],
    voice: [
      ['Prioritize','Choose the right contacts and call moments using fit, signals and follow-up rules.'],
      ['Dial','Increase live conversations with parallel dialing or AI voice outreach.'],
      ['Guide','Give reps or agents real-time context, talk tracks and objection support.'],
      ['Handoff','Route qualified conversations to a human with the full context attached.'],
      ['Measure','Track connect rate, conversation quality, meetings, opt-outs and downstream pipeline.']
    ],
    proposal: [
      ['Assemble','Pull buyer requirements, scope, pricing inputs and approved proof into one package.'],
      ['Personalize','Adapt the proposal, business case and commercial narrative to the opportunity.'],
      ['Approve','Route pricing, legal, security and internal approvals with clear ownership.'],
      ['Execute','Send, collaborate, negotiate and capture signature without losing deal context.'],
      ['Analyze','Measure engagement, cycle time, approval friction and conversion through signature.']
    ],
    agent: [
      ['Research','Find accounts, contacts, signals and context using governed source data.'],
      ['Reason','Decide which action is appropriate using explicit rules, confidence and human checkpoints.'],
      ['Engage','Draft or execute outreach across approved channels and cadences.'],
      ['Update','Create tasks, summaries and CRM changes after every meaningful action.'],
      ['Govern','Control autonomy, approvals, spend, brand risk, deliverability and auditability.']
    ],
    buyer: [
      ['Package','Create a buyer-facing workspace for the deal, mutual plan, proof and next steps.'],
      ['Personalize','Tailor content and resources to the buying committee and active decision criteria.'],
      ['Collaborate','Keep seller and buyer actions, questions and approvals visible in one place.'],
      ['Signal','Track engagement so sellers know what is being consumed and where momentum changed.'],
      ['Close','Use buyer activity to improve follow-up, executive alignment and deal progression.']
    ],
    emailcoach: [
      ['Draft','Create concise outbound copy from real account and persona context.'],
      ['Coach','Score clarity, relevance, tone, length and buyer orientation before send.'],
      ['Personalize','Adapt the message without inventing facts or fake familiarity.'],
      ['Test','Compare message variants and subject lines against response outcomes.'],
      ['Improve','Turn reply data into repeatable messaging guidance for the team.']
    ]
  };

  const additions = [
    makePlatform('apollo','APO','Apollo','Prospecting + Sales Intelligence System','Contact data, account intelligence, sequencing and AI-assisted prospecting in one revenue workflow.',['revenue','research','revops','automation'],['Find','Enrich','Prioritize','Engage','Measure'],'revops',extraSets.prospecting),
    makePlatform('zoominfo','ZI','ZoomInfo','B2B Data + Intent System','B2B account and contact intelligence, intent, enrichment and workflow signals for pipeline creation.',['revenue','research','revops'],['Discover','Enrich','Signal','Prioritize','Activate'],'revops',extraSets.prospecting),
    makePlatform('6sense','6S','6sense','Revenue AI + Intent System','Account intent, buying-stage intelligence, predictive prioritization and orchestration for account-based GTM.',['revenue','research','revops','automation'],['Identify','Score','Prioritize','Orchestrate','Measure'],'revops',extraSets.prospecting),
    makePlatform('common-room','CR','Common Room','Signal Intelligence System','Unifies product, community, web and intent signals so GTM teams can identify and act on warm accounts.',['revenue','research','revops','automation'],['Capture','Unify','Score','Route','Activate'],'revops',extraSets.prospecting),
    makePlatform('usergems','UG','UserGems','Buying Signal + Pipeline System','Tracks job changes, account signals and buyer movement to trigger timely pipeline creation and expansion plays.',['revenue','research','revops','automation'],['Detect','Match','Prioritize','Trigger','Measure'],'revops',extraSets.prospecting),
    makePlatform('bardeen','BAR','Bardeen','AI Prospecting Automation System','Browser-based automation and AI workflows for research, enrichment, list building and repetitive GTM tasks.',['revenue','research','automation','operations'],['Capture','Enrich','Automate','Route','Repeat'],'automation',extraSets.prospecting),
    makePlatform('rows','ROWS','Rows','AI Spreadsheet + Data Workflow System','Spreadsheet-style analysis with integrations and AI for prospecting research, enrichment and lightweight operations.',['research','operations','revenue','automation'],['Import','Enrich','Analyze','Share','Automate'],'automation',extraSets.prospecting),

    makePlatform('attio','ATT','Attio','AI-Native CRM System','Flexible modern CRM for relationship data, workflows, enrichment and AI-assisted customer operations.',['crm','revenue','operations','automation'],['Model','Capture','Enrich','Automate','Inspect'],'crm'),
    makePlatform('close-crm','CLOSE','Close','Sales CRM + Engagement System','CRM built around seller execution with calling, email, automation and pipeline workflows in one place.',['crm','revenue','operations','automation'],['Capture','Engage','Follow up','Inspect','Close'],'crm'),
    makePlatform('folk-crm','FOLK','folk','Relationship CRM + AI Outreach System','Lightweight relationship CRM with enrichment, collaborative prospecting and AI-assisted personalized outreach.',['crm','revenue','operations'],['Capture','Enrich','Organize','Engage','Track'],'crm'),

    makePlatform('reply','RPLY','Reply.io','Multichannel Sales Engagement System','Prospecting, sequences, AI-assisted outreach and multichannel engagement for outbound teams.',['revenue','automation','revops'],['Research','Personalize','Sequence','Follow up','Measure'],'revops',extraSets.outbound),
    makePlatform('unify','UNFY','Unify','Signal-Based Outbound System','Turns buyer and account signals into prioritized, automated outbound plays with AI research and messaging.',['revenue','research','automation','revops'],['Signal','Research','Prioritize','Engage','Learn'],'revops',extraSets.outbound),
    makePlatform('regie-ai','REG','Regie.ai','AI Prospecting + Engagement System','AI-orchestrated prospecting for account research, messaging, sequencing and rep-assisted outbound execution.',['revenue','automation','revops','creation'],['Research','Generate','Sequence','Coach','Optimize'],'revops',extraSets.outbound),
    makePlatform('instantly','INST','Instantly','Outbound Email + Deliverability System','Cold email infrastructure, sequencing, lead workflows and AI-assisted outbound optimization.',['revenue','automation','revops'],['Prepare','Send','Protect','Analyze','Improve'],'revops',extraSets.outbound),
    makePlatform('smartlead','SMRT','Smartlead','Outbound Email Infrastructure System','Scaled cold-email sending, mailbox management, automation and deliverability controls for outbound programs.',['revenue','automation','revops'],['Prepare','Route','Send','Protect','Measure'],'revops',extraSets.outbound),
    makePlatform('lavender','LAV','Lavender','AI Email Coaching System','Real-time email coaching that helps sellers write clearer, more buyer-focused outbound messages.',['revenue','enablement','coaching','creation'],['Draft','Score','Coach','Personalize','Improve'],'coaching',extraSets.emailcoach),

    makePlatform('jason-ai','JAI','Jason AI by Reply','Autonomous SDR Agent','AI sales agent for prospect research, multichannel sequences, responses and meeting generation with workflow controls.',['revenue','automation','revops'],['Research','Plan','Engage','Respond','Book'],'automation',extraSets.agent),
    makePlatform('artisan-ava','AVA','Artisan Ava','AI BDR Agent','Autonomous outbound agent focused on prospecting, research, personalization, sequencing and meeting creation.',['revenue','automation','revops'],['Source','Research','Engage','Follow up','Book'],'automation',extraSets.agent),
    makePlatform('11x','11X','11x','Digital Worker + AI SDR System','AI sales agents for prospecting and multichannel outbound with autonomous workflow execution.',['revenue','automation','revops'],['Research','Target','Engage','Qualify','Book'],'automation',extraSets.agent),
    makePlatform('aisdr','AIS','AiSDR','AI Sales Development System','AI SDR workflows for prospect research, personalized outbound, follow-up and meeting generation.',['revenue','automation','revops'],['Find','Research','Personalize','Follow up','Book'],'automation',extraSets.agent),
    makePlatform('salesforge','SFORGE','Salesforge','AI Outbound + Agent System','Outbound infrastructure and AI agents for prospect research, personalized email and scalable sales development.',['revenue','automation','revops'],['Source','Research','Generate','Send','Optimize'],'automation',extraSets.agent),
    makePlatform('qualified-piper','PIPER','Qualified Piper','Inbound AI SDR System','Conversational AI for website visitors that identifies buying intent, qualifies prospects and routes meetings to sellers.',['revenue','automation','revops'],['Detect','Engage','Qualify','Route','Book'],'automation',extraSets.agent),

    makePlatform('nooks','NOOKS','Nooks','AI Dialer + Revenue Agent System','Parallel dialing, account research, rep coaching and AI-powered outbound execution for phone-first teams.',['revenue','coaching','automation','revops'],['Prioritize','Dial','Guide','Coach','Measure'],'coaching',extraSets.voice),
    makePlatform('bland-ai','BLAND','Bland AI','AI Voice Agent System','Programmable voice agents for qualification, routing, follow-up and high-volume customer conversations.',['revenue','automation','operations'],['Trigger','Call','Qualify','Handoff','Measure'],'automation',extraSets.voice),
    makePlatform('regal','REGAL','Regal','AI Voice + Customer Engagement System','AI agents and human-agent workflows across voice and messaging using first-party customer context.',['revenue','automation','operations'],['Signal','Engage','Qualify','Route','Optimize'],'automation',extraSets.voice),

    makePlatform('granola','GRAN','Granola','AI Meeting Notepad System','Bot-free meeting capture that enhances notes, drafts follow-up and syncs sales context into CRM.',['revenue','coaching','knowledge','operations'],['Prepare','Capture','Summarize','Follow up','Sync'],'coaching',extraSets.meeting),
    makePlatform('avoma','AVO','Avoma','Meeting + Conversation + Revenue Intelligence System','AI meeting assistant, CRM updates, conversation intelligence, coaching, deal risk and forecasting in one platform.',['revenue','coaching','revops','operations'],['Capture','Summarize','Coach','Inspect','Forecast'],'coaching',extraSets.meeting),
    makePlatform('fathom','FATH','Fathom','AI Meeting Assistant System','Meeting recording, transcription, summaries and follow-up workflows for customer-facing teams.',['revenue','coaching','operations'],['Capture','Summarize','Share','Follow up','Sync'],'coaching',extraSets.meeting),
    makePlatform('fireflies','FF','Fireflies.ai','AI Meeting Intelligence System','Meeting transcription, searchable conversation memory, summaries and workflow automation across customer calls.',['revenue','coaching','knowledge','automation'],['Capture','Transcribe','Search','Analyze','Automate'],'coaching',extraSets.meeting),

    makePlatform('qwilr','QW','Qwilr','Interactive Proposal System','Interactive proposals, pricing experiences and buyer analytics designed to move commercial conversations forward.',['revenue','creation','operations'],['Build','Personalize','Price','Share','Analyze'],'creation',extraSets.proposal),
    makePlatform('pandadoc','PD','PandaDoc','Proposal + Document Workflow System','Create, approve, send and e-sign proposals, quotes and agreements with structured sales workflows.',['revenue','operations','automation'],['Create','Approve','Send','Sign','Track'],'automation',extraSets.proposal),
    makePlatform('docusign','DOCU','DocuSign','Agreement + Contract Intelligence System','Digital agreement workflows, e-signature and AI-assisted contract understanding across the closing process.',['revenue','operations','automation'],['Prepare','Review','Approve','Sign','Analyze'],'automation',extraSets.proposal),
    makePlatform('dealhub','DH','DealHub','CPQ + Deal Execution System','CPQ, quote-to-revenue, digital deal rooms and contract workflows for complex B2B selling.',['revenue','operations','revops','automation'],['Configure','Price','Approve','Collaborate','Close'],'revops',extraSets.proposal),
    makePlatform('dock','DOCK','Dock','Digital Sales Room + Buyer Enablement System','Buyer-facing workspaces for mutual action plans, content, deal collaboration and onboarding handoffs.',['revenue','enablement','operations'],['Package','Personalize','Collaborate','Signal','Close'],'enablement',extraSets.buyer),

    makePlatform('calendly','CAL','Calendly','Scheduling + Routing System','Scheduling, routing and qualification workflows that remove friction between buyer interest and the right meeting.',['revenue','operations','automation'],['Qualify','Route','Schedule','Remind','Measure'],'automation'),
    makePlatform('sendspark','SEND','Sendspark','AI Video Prospecting System','Personalized video outreach and AI-assisted video generation for outbound, follow-up and buyer engagement.',['revenue','creation','enablement'],['Record','Personalize','Generate','Send','Measure'],'creation'),
    makePlatform('hockeystack','HSK','HockeyStack','Revenue Attribution + Intelligence System','Connects marketing and sales activity to pipeline, attribution and revenue insights across the buyer journey.',['revenue','revops','operations'],['Unify','Attribute','Analyze','Inspect','Optimize'],'revops'),
    makePlatform('dreamdata','DD','Dreamdata','B2B Revenue Attribution System','Maps account journeys and GTM touches to pipeline and revenue so teams can see what actually drives outcomes.',['revenue','revops','operations'],['Collect','Model','Attribute','Analyze','Optimize'],'revops')
  ];

  const seenIds = new Set(platforms.map(p => p.id));
  const seenNames = new Set(platforms.map(p => p.name.toLowerCase()));
  additions.forEach(p => {
    if (!seenIds.has(p.id) && !seenNames.has(p.name.toLowerCase())) {
      platforms.push(p);
      seenIds.add(p.id);
      seenNames.add(p.name.toLowerCase());
    }
  });

  const workflowAdds = [
    {n:'13',icon:'◉',title:'Meeting Intelligence',items:['Pre-call briefs','AI notes & summaries','CRM field updates','Conversation coaching']},
    {n:'14',icon:'☎',title:'Voice & Calling',items:['Parallel dialing','AI voice agents','Real-time call guidance','Qualified handoffs']},
    {n:'15',icon:'✎',title:'Proposals, Pricing & Contracts',items:['Proposal generation','Pricing & approvals','Digital deal rooms','E-signature & contract AI']},
    {n:'16',icon:'✦',title:'AI Sales Agents',items:['Autonomous prospecting','Agentic outreach','Inbound qualification','Human-in-the-loop controls']}
  ];
  workflowAdds.forEach(w => {
    if (!revenueWorkflows.some(existing => existing.title === w.title)) revenueWorkflows.push(w);
  });

  if (typeof revenueDetails !== 'undefined') {
    Object.assign(revenueDetails, {
      "13": {
        title: "Meeting Intelligence",
        stage: "MEET",
        summary: "Turn every customer conversation into structured evidence, next actions, CRM updates, coaching signals and searchable institutional memory.",
        why: "Meetings are where buyer truth appears, but the value is usually trapped in notes and transcripts. AI meeting intelligence should convert the conversation into usable evidence without turning recording into the end goal.",
        inputs: ["Calendar and attendee context","Prior emails and CRM history","Meeting audio or transcript","Qualification methodology","Current opportunity fields","Approved coaching rubric"],
        steps: [
          ["Prepare the meeting","Create a concise brief with attendee roles, prior commitments, open questions, deal risks and the specific evidence the team needs next."],
          ["Capture buyer language","Record or transcribe the conversation with the required consent and preserve exact buyer statements around priorities, process, risk and timing."],
          ["Extract structured evidence","Map decisions, objections, commitments, MEDDPICC evidence, stakeholders, dates and next steps into a repeatable schema."],
          ["Sync the systems","Write approved notes, tasks and field suggestions back to CRM while keeping source links and confidence visible."],
          ["Coach from reality","Use conversation patterns to identify message adoption, discovery quality, objection handling and examples worth reinforcing across the team."]
        ],
        tools: ["Granola","Avoma","Gong","Fathom / Fireflies","Salesforce / HubSpot"],
        system: "CRM activation: store Meeting Summary, Buyer Commitments, Open Risks, Next Buyer Action, Next Seller Action, Qualification Evidence, Source Meeting and Last Updated Date. Require a human checkpoint for material forecast or qualification changes.",
        prompt: `Review this customer meeting as a revenue operator. Return: 1) what changed, 2) explicit buyer commitments, 3) risks or objections, 4) new qualification evidence, 5) missing evidence, 6) next buyer action with date, 7) next seller action with date, 8) recommended CRM updates, and 9) one coaching observation. Separate direct evidence from inference.`,
        human: "Recording, privacy and consent rules must be respected. Reps and managers remain accountable for CRM truth and should approve material changes before they affect forecast, qualification or customer commitments.",
        outputs: ["Pre-call brief","Meeting summary","Evidence map","CRM update suggestions","Follow-up draft","Coaching insight"],
        metrics: ["CRM update time","Percent of meetings with complete next steps","Qualification evidence captured","Follow-up speed","Manager coaching time","Stage conversion after key meetings"]
      },
      "14": {
        title: "Voice & Calling",
        stage: "ENGAGE",
        summary: "Use AI to increase quality phone conversations through better prioritization, parallel dialing, voice agents, real-time context and disciplined human handoffs.",
        why: "The goal is not more dials. The goal is more relevant live conversations. AI can remove dead time, prepare context and handle defined call workflows, but poor targeting at higher volume simply creates more noise.",
        inputs: ["Prioritized call list","Consent and calling rules","Account and persona context","Approved talk tracks","Disposition taxonomy","Routing and handoff rules"],
        steps: [
          ["Prioritize the call queue","Use fit, intent, recent engagement and follow-up commitments to decide who should be called and why now."],
          ["Prepare the conversation","Generate a short account brief, call opener, likely objection and one discovery question from trusted context."],
          ["Execute with the right model","Use a rep-assisted dialer for high-value selling and narrowly scoped AI voice agents where automation is appropriate and permitted."],
          ["Handoff with context","When an AI agent qualifies or detects intent, route the buyer to a human with the transcript, reason for transfer and captured evidence."],
          ["Learn from outcomes","Feed dispositions, connects, opt-outs, objections, meetings and downstream conversion back into targeting and coaching."]
        ],
        tools: ["Nooks","Bland AI","Regal","Salesloft / Outreach","Salesforce / HubSpot"],
        system: "System activation: capture Call Reason, Signal, Connect Result, Disposition, Buyer Intent, Objection, Meeting Outcome, Consent/Opt-out and Follow-up Date. Keep automated calling rules auditable.",
        prompt: `Prepare a call plan for [ACCOUNT] and [PERSONA] using only the supplied evidence. Give me: 1) why this person is worth calling now, 2) a 20-second opener, 3) two discovery questions, 4) the most likely objection and response, 5) the qualification threshold for booking a meeting, and 6) the exact CRM disposition options after the call.`,
        human: "Legal, privacy, consent and telemarketing requirements vary by jurisdiction. Human owners should define where automated voice is allowed, what must be disclosed and when a live rep must take over.",
        outputs: ["Prioritized call queue","Account call brief","Talk track","Voice-agent script","Handoff packet","Disposition data"],
        metrics: ["Connect rate","Conversation-to-meeting rate","Speed to call after signal","Qualified handoff rate","Opt-out rate","Pipeline per 100 conversations"]
      },
      "15": {
        title: "Proposals, Pricing & Contracts",
        stage: "PROPOSE",
        summary: "Connect buyer requirements, pricing, approvals, proposals, digital deal rooms and signature into one controlled closing workflow.",
        why: "Late-stage friction often comes from fragmented approvals, stale proposals and unclear buyer actions. AI is useful when it assembles context and accelerates review, but commercial terms and legal commitments need explicit ownership.",
        inputs: ["Discovery and qualification evidence","Approved pricing and discount rules","Scope and requirements","Security / legal requirements","Proposal templates","Buyer committee and decision dates"],
        steps: [
          ["Build from buyer evidence","Create the proposal around the buyer's stated problem, business outcomes, decision criteria, scope and proof instead of generic product copy."],
          ["Structure pricing and options","Present approved packaging, trade-offs and commercial scenarios without allowing AI to invent unauthorized terms."],
          ["Route approvals early","Trigger discount, finance, legal, security and executive approvals before they become last-minute blockers."],
          ["Create the buyer workspace","Put the proposal, mutual plan, proof, open questions and next actions into one shareable buying experience."],
          ["Track execution","Monitor engagement, redlines, approvals, signature status and buyer actions until the agreement is complete."]
        ],
        tools: ["Qwilr","PandaDoc","DocuSign","DealHub","Dock"],
        system: "CRM activation: maintain Proposal Version, Pricing Approval Status, Legal Status, Security Status, Buyer Action, Signature Status, Commercial Risk and Target Execution Date. Link the current buyer-facing document rather than storing disconnected copies.",
        prompt: `Using only the approved deal evidence and pricing inputs, create a proposal outline for [ACCOUNT]. Include: buyer problem, desired outcomes, success measures, recommended solution, scope, implementation approach, proof, pricing options, assumptions, open decisions, mutual next steps and approval dependencies. Flag any missing information. Do not create or modify legal language or commercial terms that are not explicitly approved.`,
        human: "Sales owns the commercial strategy; Finance owns pricing policy; Legal owns contractual language; Security owns security commitments. AI can accelerate assembly and comparison but should never silently authorize a term.",
        outputs: ["Proposal outline","Business case","Pricing scenario","Approval checklist","Digital deal room","Signature plan"],
        metrics: ["Proposal-to-close conversion","Discount approval time","Legal cycle time","Days from proposal to signature","Buyer engagement","Late-stage slip rate"]
      },
      "16": {
        title: "AI Sales Agents",
        stage: "ORCHESTRATE",
        summary: "Deploy AI agents across prospecting, inbound qualification and repetitive revenue work while keeping autonomy, brand risk and CRM truth under explicit control.",
        why: "Autonomous sales tools are most valuable when the work is bounded and governed. The question is not whether an agent can act; it is what the agent is allowed to decide, what evidence it uses and where a human must approve.",
        inputs: ["ICP and routing rules","Trusted account and contact data","Approved messaging","Channel permissions","CRM fields and workflow rules","Autonomy and approval policy"],
        steps: [
          ["Define the job boundary","Specify the exact task the agent owns, the systems it can access, the actions it can take and the conditions that require escalation."],
          ["Ground the agent","Connect approved data, messaging, qualification rules and current CRM context so the agent does not invent its own operating model."],
          ["Set confidence and approvals","Require human review for high-risk messages, strategic accounts, pricing, legal commitments, forecast changes or low-confidence decisions."],
          ["Execute and log every action","Write outreach, responses, tasks and CRM updates with timestamps, source context and a clear indication that automation acted."],
          ["Inspect outcomes","Measure quality, meetings, pipeline, errors, opt-outs, domain health and time saved—not just activity volume."]
        ],
        tools: ["Jason AI by Reply","Regie.ai","Artisan Ava","11x","Qualified Piper"],
        system: "Governance activation: maintain Agent Name, Task Boundary, Allowed Actions, Approval Required, Confidence, Last Action, Source Data, Human Owner and Audit Log. Every agent needs a kill switch and a named business owner.",
        prompt: `Design an AI sales agent for [JOB]. Define: 1) goal, 2) allowed inputs, 3) allowed actions, 4) actions that require human approval, 5) prohibited actions, 6) confidence thresholds, 7) CRM fields it may read or write, 8) logging requirements, 9) failure handling, and 10) success metrics. Optimize for quality and control before volume.`,
        human: "Agents should augment accountable sellers and operators rather than hide ownership. A human must own messaging policy, data access, compliance, deliverability and business outcomes.",
        outputs: ["Agent charter","Permission model","Prompt / policy pack","Escalation rules","CRM action map","Audit and measurement plan"],
        metrics: ["Qualified meetings","Pipeline created","Human time saved","Error / correction rate","Approval rate","Opt-out / complaint rate","CRM data quality","Cost per qualified outcome"]
      }
    });
  }

  const workflowGridEl = document.querySelector('#workflow-grid');
  if (workflowGridEl) {
    workflowGridEl.innerHTML = revenueWorkflows.map(w => `<article class="workflow-card"><div class="workflow-top"><span class="workflow-num">${w.n}</span><span class="workflow-icon">${w.icon}</span></div><h3>${w.title}</h3><ul>${w.items.map(i => `<li>${i}</li>`).join('')}</ul></article>`).join('');
    if (typeof enhanceRevenueCards === 'function') enhanceRevenueCards();
  }

  if (typeof renderPlatforms === 'function') renderPlatforms();

  const proofLabels = document.querySelectorAll('.hero-proof span');
  if (proofLabels[0]) proofLabels[0].innerHTML = `<strong>${platforms.length}</strong> platform systems`;
  if (proofLabels[1]) proofLabels[1].innerHTML = `<strong>${revenueWorkflows.length}</strong> revenue workflows`;

  const lifecycle = document.querySelector('.lifecycle');
  if (lifecycle) lifecycle.innerHTML = '<span>RESEARCH</span><b>→</b><span>ENGAGE</span><b>→</b><span>QUALIFY</span><b>→</b><span>MEET</span><b>→</b><span>PROPOSE</span><b>→</b><span>CLOSE</span><b>→</b><span>GROW</span>';

  const filterRow = document.querySelector('.library-controls .filter-row');
  if (filterRow && !filterRow.querySelector('[data-filter="revenue"]')) {
    const revenueButton = document.createElement('button');
    revenueButton.className = 'filter';
    revenueButton.type = 'button';
    revenueButton.dataset.filter = 'revenue';
    revenueButton.setAttribute('aria-pressed','false');
    revenueButton.textContent = 'Sales / Revenue';
    revenueButton.addEventListener('click', () => {
      document.querySelectorAll('.filter').forEach(b => {
        b.classList.remove('is-active');
        b.setAttribute('aria-pressed','false');
      });
      revenueButton.classList.add('is-active');
      revenueButton.setAttribute('aria-pressed','true');
      if (typeof activeFilter !== 'undefined') activeFilter = 'revenue';
      if (typeof renderPlatforms === 'function') renderPlatforms();
    });
    filterRow.insertBefore(revenueButton, filterRow.children[1] || null);
  }

  const libraryHead = document.querySelector('.library-head');
  if (libraryHead && !document.querySelector('.coverage-strip')) {
    const strip = document.createElement('div');
    strip.className = 'coverage-strip';
    strip.innerHTML = '<strong>Expanded stack coverage</strong><span>Data & signals</span><span>AI SDRs</span><span>Voice & calling</span><span>Meeting intelligence</span><span>CRM</span><span>Enablement</span><span>Proposals & contracts</span><span>Automation</span>';
    libraryHead.insertAdjacentElement('afterend', strip);
  }

  if (!document.getElementById('ai-systems-extension-style')) {
    const style = document.createElement('style');
    style.id = 'ai-systems-extension-style';
    style.textContent = `
      .coverage-strip{display:flex;flex-wrap:wrap;gap:8px;align-items:center;margin:-8px 0 24px;padding:12px 14px;border:1px solid rgba(17,17,19,.16);border-radius:16px;background:rgba(255,255,255,.72)}
      .coverage-strip strong{margin-right:4px;font-size:.72rem;letter-spacing:.04em;text-transform:uppercase}
      .coverage-strip span{padding:6px 9px;border-radius:999px;background:#111113;color:#fff;font-size:.64rem;font-weight:800}
      @media(max-width:720px){.coverage-strip{align-items:flex-start}.coverage-strip strong{width:100%}.lifecycle{overflow-x:auto;justify-content:flex-start;padding-bottom:4px}.lifecycle span{white-space:nowrap}}
    `;
    document.head.appendChild(style);
  }
})();