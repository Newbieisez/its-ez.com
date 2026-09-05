const revenueDetails = {
  "01": {
    title: "Market & ICP",
    stage: "RESEARCH",
    summary: "Use AI to turn scattered market information into a clear, testable view of who you should target, why they care, and what signals make an account worth your team's time.",
    why: "Revenue teams waste enormous time when the ICP is broad, stale, or based on opinion. This workflow forces the market view, account criteria, buyer pain, and evidence into one operating model that can be used by Sales, Marketing, RevOps, and Enablement.",
    inputs: ["Existing ICP or segmentation docs", "Closed-won / closed-lost account data", "Customer interviews, call notes, and win-loss insights", "Competitor and category information", "Product value propositions and use cases"],
    steps: [
      ["Define the market question", "State the segment, geography, product, motion, and decision you are trying to make. AI should answer a business question, not just 'research the market.'"],
      ["Build evidence-backed ICP criteria", "Separate firmographic fit, operational pain, buying triggers, technology signals, and disqualifiers. Weight what actually predicts conversion."],
      ["Map buyer problems and urgency", "Identify the business problem, current workaround, cost of inaction, desired outcome, and why the problem becomes urgent now."],
      ["Find observable signals", "Translate the ICP into signals the team can actually detect: hiring, funding, tool changes, security events, expansion, leadership changes, new markets, or regulatory pressure."],
      ["Operationalize the output", "Push the final criteria into CRM fields, account scoring, prospecting filters, messaging frameworks, and enablement guidance."]
    ],
    tools: ["Perplexity / web research", "ChatGPT or Claude", "Clay / enrichment", "Salesforce / HubSpot", "Gong / win-loss evidence"],
    system: "CRM activation: create explicit ICP-fit fields, trigger fields, disqualifiers, buyer-role tags, and a visible 'Why now?' field. Do not leave the ICP trapped in a slide deck.",
    prompt: `Act as a GTM market analyst. I am defining the ICP for [PRODUCT] in [MARKET]. Using the evidence I provide, build an ICP that separates: (1) must-have firmographic criteria, (2) operational pain, (3) buying triggers, (4) buyer roles, (5) common disqualifiers, (6) observable signals, and (7) recommended CRM fields. Do not invent facts. Flag assumptions separately from evidence. End with a simple scoring model from 0-100 and explain what should make Sales prioritize or deprioritize an account.`,
    human: "A human owner must validate whether the criteria correlate with real wins, not just whether the AI output sounds plausible. RevOps should review whether every important criterion can actually be captured or observed.",
    outputs: ["ICP scorecard", "Buyer problem map", "Trigger library", "Disqualifier list", "CRM field spec", "Research brief template"],
    metrics: ["ICP-to-opportunity conversion", "Meeting-to-opportunity conversion by segment", "Win rate by ICP tier", "Pipeline created per target account", "Seller research time", "Percent of pipeline inside target ICP"]
  },
  "02": {
    title: "Prospecting & Outreach",
    stage: "ENGAGE",
    summary: "Build outbound that is timely, specific, and grounded in real account context instead of scaled generic personalization.",
    why: "AI makes it easy to create more outbound. That is not the goal. The goal is to create better reasons to engage, faster account preparation, and consistent messaging without turning your sellers into spam engines.",
    inputs: ["Target account list", "ICP and trigger criteria", "Approved messaging / value props", "Persona pain points", "Recent account signals", "Channel rules and sequence standards"],
    steps: [
      ["Prioritize who deserves outreach", "Use fit plus observed signals to determine which accounts should receive high-touch research versus lighter automated treatment."],
      ["Generate the account angle", "Summarize the account's likely business priority, the evidence supporting it, the relevant buyer, and the reason this conversation should happen now."],
      ["Create a message hypothesis", "Draft the core problem, business consequence, proof point, and question. Keep the message about the buyer's situation—not your product features."],
      ["Adapt by channel", "Convert the same message thesis into email, LinkedIn, call opener, voicemail, and follow-up while preserving the core business point."],
      ["Learn from response data", "Feed replies, objections, meetings, and no-response patterns back into the sequence model so messaging improves over time."]
    ],
    tools: ["Clay", "ChatGPT / Claude", "Outreach / Salesloft", "LinkedIn Sales Navigator", "Salesforce / HubSpot"],
    system: "CRM activation: store trigger, message thesis, outreach source, persona, sequence, response category, and meeting result. This is how you learn which signals and messages create pipeline.",
    prompt: `You are my account-based outbound strategist. For [ACCOUNT] and [PERSONA], use only the evidence I provide. Produce: 1) the strongest observable trigger, 2) the business problem it may indicate, 3) a one-sentence message thesis, 4) a 75-word email, 5) a LinkedIn message under 300 characters, 6) a 20-second call opener, 7) one question that tests whether the hypothesis is real. Avoid fake personalization, compliments, and unsupported assumptions.`,
    human: "Sellers should approve the account hypothesis before sending high-value outreach. AI can assemble context and draft language; the rep owns whether the message is credible and worth sending.",
    outputs: ["Prioritized prospect list", "Account angle", "Email / LinkedIn / call copy", "Sequence variants", "Response taxonomy", "Follow-up recommendations"],
    metrics: ["Positive reply rate", "Meeting conversion", "Opportunity conversion", "Pipeline per 100 target accounts", "Time to first touch after trigger", "Message performance by trigger"]
  },
  "03": {
    title: "Lead Intelligence",
    stage: "ENGAGE",
    summary: "Turn enrichment, intent, account context, and behavioral signals into usable intelligence that tells the team what changed, why it matters, and what to do next.",
    why: "Lead scoring often fails because it produces a number with no explanation. A strong AI intelligence layer makes the score transparent: what evidence exists, what is missing, and what action should follow.",
    inputs: ["CRM account and contact data", "Enrichment providers", "Intent / behavioral data", "Product usage or website activity", "Buying signals", "Historical conversion data"],
    steps: [
      ["Normalize the record", "Clean company, contact, role, geography, industry, and technology data before asking AI to reason over it."],
      ["Assemble the signal timeline", "Put account events, engagement, intent, product activity, and rep interactions in chronological order."],
      ["Score fit and urgency separately", "Fit answers 'should this company buy from us?' Urgency answers 'is there a reason to act now?' Do not collapse both into one unexplained score."],
      ["Explain the score", "Have AI produce a short evidence summary, missing data, confidence level, and the reason for the recommended next action."],
      ["Route the action", "Use the result to assign the account, trigger a sequence, create a task, request research, or suppress bad-fit records."]
    ],
    tools: ["Clay / ZoomInfo", "6sense", "Salesforce / HubSpot", "ChatGPT / Claude", "Product analytics"],
    system: "System-of-record activation: maintain separate Fit, Intent/Urgency, Engagement, Confidence, and Recommended Action fields. Add a timestamped signal summary so reps can see why the score changed.",
    prompt: `Analyze this account record and return five outputs: FIT SCORE (0-100), URGENCY SCORE (0-100), CONFIDENCE (low/medium/high), EVIDENCE SUMMARY, and NEXT BEST ACTION. Use only the supplied data. Distinguish observed facts from inferred hypotheses. If data is missing, say exactly what is missing. Do not reward activity that does not indicate buying intent.`,
    human: "RevOps owns the scoring model. Sales validates whether the recommended action reflects what happens in real conversations. AI should never silently change prioritization logic without governance.",
    outputs: ["Enriched account record", "Signal timeline", "Fit score", "Urgency score", "Evidence summary", "Next-best action"],
    metrics: ["Lead-to-opportunity conversion", "Speed-to-lead", "False-positive rate", "Pipeline by score band", "Routing accuracy", "Percent of scored records with explainable evidence"]
  },
  "04": {
    title: "Qualification",
    stage: "QUALIFY",
    summary: "Use AI to separate real evidence from seller optimism, strengthen discovery, and make qualification frameworks such as MEDDPICC useful inside live opportunities.",
    why: "Qualification becomes theater when fields are completed without evidence. The AI layer should inspect what is known, expose assumptions, generate better questions, and raise the standard for what counts as validated.",
    inputs: ["Discovery notes / transcripts", "Opportunity fields", "MEDDPICC or qualification criteria", "Buyer communications", "Mutual action plan", "Stage-exit criteria"],
    steps: [
      ["Extract evidence", "Pull explicit statements, dates, metrics, names, commitments, and buyer language from calls and written communication."],
      ["Map evidence to criteria", "For each qualification element, show validated evidence, partial evidence, assumptions, and missing evidence."],
      ["Generate the next question", "Create questions designed to close the highest-risk evidence gaps rather than mechanically walking through an acronym."],
      ["Inspect stage readiness", "Compare the opportunity against stage-exit standards and flag fields that are complete in CRM but unsupported by evidence."],
      ["Create manager coaching", "Produce a short deal-inspection brief: what looks strong, what is fragile, what could kill the deal, and the next three actions."]
    ],
    tools: ["Gong", "Salesforce", "ChatGPT / Claude", "MEDDPICC playbook", "Mutual action plan tools"],
    system: "CRM activation: for each major qualification element, store Status, Evidence, Source, Confidence, Next Action, and Last Validated Date. A checkbox alone is not enough.",
    prompt: `Act as a rigorous deal inspector using MEDDPICC. For each element, classify the current state as VALIDATED, PARTIAL, ASSUMED, or MISSING. Quote or summarize the evidence from the provided notes. Then identify the three gaps most likely to create forecast risk, write the exact discovery question to address each gap, and specify what should be updated in CRM. Do not infer a green status from seller confidence.`,
    human: "The rep and manager own the truth of the opportunity. AI can expose gaps but must not manufacture a Metric, Champion, decision process, or buyer commitment that was never observed.",
    outputs: ["Evidence-backed qualification map", "Risk summary", "Discovery questions", "Stage-readiness view", "CRM update plan", "Manager coaching brief"],
    metrics: ["Stage conversion", "Forecast accuracy", "Slip rate", "Percent of qualified fields with evidence", "Late-stage loss reasons", "Manager inspection time"]
  },
  "05": {
    title: "Pipeline & Deal Management",
    stage: "QUALIFY",
    summary: "Convert opportunity activity into a living deal-management system that identifies risk, keeps next steps current, and makes pipeline reviews faster and more objective.",
    why: "Most CRM records describe the past. A useful AI deal system should tell the team what changed, whether momentum is improving or deteriorating, and what action is required before the next inspection.",
    inputs: ["Opportunity fields", "Call / email activity", "Stage history", "Next steps", "Buyer meetings", "Mutual action plans", "Forecast category"],
    steps: [
      ["Build the deal timeline", "Summarize important buyer actions, seller actions, stage movement, new stakeholders, and unresolved commitments."],
      ["Detect momentum and risk", "Look for stalled meetings, missing buyer actions, single-threading, stage aging, weak next steps, late legal/security work, or slipping dates."],
      ["Score next-step quality", "A next step should have an owner, buyer involvement, date, purpose, and expected outcome. 'Follow up next week' is not a real next step."],
      ["Create the inspection brief", "Generate a concise manager view of progress, risk, evidence changes, forecast implications, and decisions required."],
      ["Trigger action", "Create tasks, update CRM fields, suggest escalation, request executive support, or move the forecast category when evidence warrants it."]
    ],
    tools: ["Salesforce / HubSpot", "Gong", "ChatGPT / Claude", "Slack / Teams", "Mutual action plan"],
    system: "CRM activation: maintain Deal Momentum, Primary Risk, Next Buyer Action, Next Seller Action, Last Buyer Commitment, Multi-threading Status, and Forecast Rationale fields.",
    prompt: `Review this opportunity as a pipeline operator. Return: 1) what materially changed since the last review, 2) current momentum (improving / flat / declining) with evidence, 3) top three risks, 4) whether the next step is specific and buyer-backed, 5) forecast implication, 6) the next three actions with owner and date, and 7) the CRM fields that should be updated. Separate evidence from interpretation.`,
    human: "Managers should use the AI brief to ask better questions, not to replace deal inspection. Forecast changes should remain accountable to a named owner.",
    outputs: ["Deal timeline", "Momentum score", "Risk flags", "Inspection brief", "Action plan", "Forecast rationale"],
    metrics: ["Stage aging", "Slip rate", "Next-step quality", "Forecast accuracy", "Multi-threading rate", "Pipeline inspection time"]
  },
  "06": {
    title: "Content & Enablement",
    stage: "ENGAGE",
    summary: "Turn product, market, competitive, and customer knowledge into field-ready content that is easier to find, easier to use, and tied to specific selling moments.",
    why: "AI can generate endless content. The operating challenge is governance: creating the right asset for a defined seller job, grounding it in approved source material, and making sure the team knows when to use it.",
    inputs: ["Approved product messaging", "Customer proof", "Competitive intelligence", "Sales process", "Persona pain points", "Brand / legal rules", "Existing enablement content"],
    steps: [
      ["Define the field job", "Name the exact seller moment: first meeting, discovery, objection, demo, proposal, executive conversation, renewal, or expansion."],
      ["Ground the content", "Give AI the approved source set and explicitly prohibit unsupported claims."],
      ["Create modular assets", "Generate talk tracks, one-pagers, discovery guides, slides, battlecards, emails, and coaching aids from the same approved message architecture."],
      ["Add activation guidance", "Every asset should state who it is for, when to use it, when not to use it, what good looks like, and the related CRM or sales step."],
      ["Measure field use", "Track whether assets are found, used, shared, and connected to better conversation or opportunity outcomes."]
    ],
    tools: ["Highspot / Seismic", "ChatGPT / Claude", "NotebookLM", "Canva", "Gong"],
    system: "Enablement activation: tag every asset by Persona, Sales Stage, Use Case, Product, Region, Expiration/Review Date, and Owner. Link assets to plays and CRM moments instead of dumping them into a library.",
    prompt: `Using only the approved source material, create a field-ready enablement asset for [SELLER MOMENT] targeting [PERSONA]. Include: business objective, buyer context, 3 key messages, proof/evidence, discovery questions, likely objections, recommended response, when to use, when not to use, and a 30-second talk track. Flag any statement that is not directly supported by the source material.`,
    human: "Product Marketing / Enablement owns message approval. Legal or Security review may be required for claims. AI should not invent customer proof, benchmarks, or competitive claims.",
    outputs: ["Sales play", "Talk track", "Battlecard", "Discovery guide", "Deck outline", "Content metadata / governance"],
    metrics: ["Content findability", "Asset usage", "Seller confidence", "Message adoption in calls", "Conversion after play use", "Time to publish / update"]
  },
  "07": {
    title: "Conversion & Closing",
    stage: "CLOSE",
    summary: "Use AI to prepare the team for objections, negotiation, proposals, executive alignment, and the final steps that turn qualified opportunities into signed business.",
    why: "Late-stage deals are often lost because teams react instead of preparing. AI can synthesize the buyer's stated priorities, objections, commercial constraints, stakeholders, and open risks into a coordinated closing plan.",
    inputs: ["Opportunity evidence", "Buyer goals and objections", "Proposal / pricing", "Stakeholder map", "Security / legal status", "Competitive context", "Close plan"],
    steps: [
      ["Build the buyer decision brief", "Summarize what the buyer is trying to achieve, the decision criteria, who matters, what remains unresolved, and why the current timeline matters."],
      ["Prepare objections", "Group objections by business, technical, security, commercial, competitive, or status-quo risk and build responses grounded in approved proof."],
      ["Plan negotiation", "Identify must-haves, tradeable terms, value levers, approval constraints, walk-away points, and give/get options before the conversation."],
      ["Create the proposal narrative", "Translate discovery evidence into an executive summary focused on the buyer's problem, desired outcome, approach, proof, and decision path."],
      ["Run the close plan", "Track buyer and seller actions, approvals, documents, dates, risks, and escalation paths through signature."]
    ],
    tools: ["ChatGPT / Claude", "Salesforce", "Gong", "Proposal / CPQ tools", "Slack / Teams"],
    system: "CRM activation: track Decision Criteria, Open Objections, Commercial Risk, Legal/Security Status, Executive Alignment, Mutual Close Date, Buyer Action, Seller Action, and Approval Owner.",
    prompt: `Create a late-stage close brief from this opportunity. Include: 1) buyer business outcome, 2) decision criteria, 3) unresolved objections, 4) stakeholder alignment, 5) competitive/status-quo risk, 6) negotiation plan with give/gets, 7) proposal executive-summary draft, 8) mutual close-plan actions, owners, and dates. Use only observed evidence and label assumptions clearly.`,
    human: "Commercial concessions, legal terms, pricing changes, and commitments require authorized human approval. AI can prepare options; it does not have authority to negotiate on the company's behalf.",
    outputs: ["Objection plan", "Negotiation prep", "Executive proposal summary", "Mutual close plan", "Risk / approval tracker", "Close brief"],
    metrics: ["Late-stage win rate", "Proposal-to-close conversion", "Discount rate", "Days in contract / legal", "Close-date accuracy", "Competitive loss rate"]
  },
  "08": {
    title: "Retention & Expansion",
    stage: "GROW",
    summary: "Create an AI-assisted post-sale system that detects account health changes, prepares renewals, surfaces expansion opportunities, and keeps customer context connected across teams.",
    why: "The customer journey often becomes fragmented after the sale. AI can synthesize product usage, support, meetings, outcomes, stakeholder changes, and commercial history so CSMs and account teams act earlier.",
    inputs: ["Customer goals / success plan", "Product usage", "Support history", "NPS / CSAT", "Meeting notes", "Renewal date", "Commercial history", "Stakeholder changes"],
    steps: [
      ["Establish desired outcomes", "Capture the business outcomes the customer expected when they bought and the evidence that will prove value."],
      ["Monitor health signals", "Combine usage, support, engagement, sentiment, executive participation, adoption, and outcome progress into an explainable health view."],
      ["Prepare the renewal story", "Summarize achieved value, open risks, unresolved adoption gaps, stakeholder changes, and commercial timeline well before renewal."],
      ["Find expansion hypotheses", "Use new teams, use cases, capacity, geography, product adoption, or business changes to generate expansion ideas—with evidence."],
      ["Coordinate action", "Create success actions, executive outreach, enablement, product follow-up, renewal tasks, or expansion plays based on the signal."]
    ],
    tools: ["Gainsight / CS platform", "Salesforce", "Product analytics", "ChatGPT / Claude", "Gong"],
    system: "System-of-record activation: track Customer Outcomes, Health Drivers, Risk Reason, Adoption Gap, Renewal Readiness, Expansion Hypothesis, Evidence, Next Action, and Executive Sponsor status.",
    prompt: `Analyze this customer account. Return: 1) desired business outcomes, 2) evidence of value achieved, 3) health drivers and risks, 4) adoption gaps, 5) renewal readiness, 6) expansion hypotheses with supporting evidence, 7) stakeholder changes, and 8) recommended actions with owner and date. Do not treat activity volume as customer health unless it connects to an outcome.`,
    human: "The account owner validates health and expansion context. AI should never convert weak signals into aggressive upsell messaging without understanding customer value and timing.",
    outputs: ["Health summary", "Renewal brief", "Risk plan", "Value realization summary", "Expansion hypotheses", "Executive account brief"],
    metrics: ["Gross retention", "Net revenue retention", "Renewal rate", "Expansion pipeline", "Product adoption", "Risk detection lead time"]
  },
  "09": {
    title: "Analytics & Insights",
    stage: "MEASURE",
    summary: "Use AI to explain what changed in the revenue engine, why it changed, where to investigate next, and what decision the team should make.",
    why: "Dashboards show numbers; leaders need explanations. AI becomes valuable when it is grounded in governed data and turns metrics into a structured diagnostic rather than a confident guess.",
    inputs: ["Pipeline data", "Conversion rates", "Win/loss", "Activity / conversation data", "Forecast history", "Enablement data", "Customer data"],
    steps: [
      ["Define the metric tree", "Connect top-line outcomes to the leading indicators that can plausibly explain them."],
      ["Validate the data", "Check period, source, completeness, duplicates, cohort definitions, and known sync limitations before interpreting movement."],
      ["Find meaningful variance", "Compare segments, regions, teams, products, channels, cohorts, and time periods to identify where the change is concentrated."],
      ["Generate hypotheses", "Offer possible explanations ranked by evidence strength and explicitly separate correlation from causation."],
      ["Recommend the next test", "Specify what data, interview, call review, experiment, or operational change would confirm or reject the leading hypothesis."]
    ],
    tools: ["CRM / BI", "ChatGPT / Claude", "Gong", "Spreadsheets", "Warehouse / analytics tools"],
    system: "Analytics activation: document metric definitions, source, refresh cadence, owner, business question, and action threshold. AI should consume governed metrics, not redefine them ad hoc.",
    prompt: `Act as a revenue analyst. Using the supplied governed data, explain: 1) what materially changed, 2) where the change is concentrated, 3) which leading indicators moved with it, 4) the top three hypotheses ranked by evidence strength, 5) what cannot be concluded from the data, and 6) the next analysis or action to run. Do not claim causation without evidence.`,
    human: "Analytics owners validate metric definitions and data quality. Business leaders decide which hypothesis is worth acting on. AI should expose uncertainty rather than hide it.",
    outputs: ["Executive insight brief", "Variance analysis", "Hypothesis tree", "Segment comparison", "Investigation plan", "Decision recommendation"],
    metrics: ["Time from question to insight", "Forecast / dashboard trust", "Decision cycle time", "Percent of insights tied to governed metrics", "Hypothesis validation rate", "Repeat manual-analysis hours removed"]
  },
  "10": {
    title: "Strategy & Operations",
    stage: "OPERATE",
    summary: "Translate GTM strategy into owners, workflows, systems, decision rights, milestones, and measurable operating cadence.",
    why: "Strategy fails when it stays conceptual. AI is useful here as an operating architect: synthesizing inputs, exposing dependencies, drafting process, and maintaining the connective tissue across teams.",
    inputs: ["Strategic goals", "Current process", "Org / ownership model", "Systems map", "KPIs", "Known friction", "Customer / seller feedback", "Constraints"],
    steps: [
      ["Define the business outcome", "Specify the result, target, timeline, and leading indicators before designing a process."],
      ["Map current state", "Document steps, owners, systems, inputs, outputs, handoffs, exceptions, and common failure points."],
      ["Design future state", "Remove unnecessary steps, clarify decision rights, standardize inputs, automate repeatable work, and preserve human checkpoints."],
      ["Build the operating cadence", "Set review rhythm, SLAs, escalation path, scorecard, documentation owner, and change-management plan."],
      ["Instrument and improve", "Measure adoption, cycle time, quality, exceptions, and business impact; then refine the process based on evidence."]
    ],
    tools: ["ChatGPT / Claude", "Notion / Docs", "CRM", "Slack / Teams", "Automation tools", "BI"],
    system: "Operational activation: every process needs an Owner, Trigger, Required Inputs, SLA, System of Record, Decision Point, Output, Exception Path, and Metric. Put those fields into the actual workflow documentation.",
    prompt: `Act as a GTM operating architect. Convert this business objective and current process into a future-state operating model. Include: trigger, chronological steps, owner for each step, required inputs, system used, SLA, decision points, exception paths, output, governance cadence, adoption plan, and metrics. Identify unnecessary handoffs and where AI or automation can remove friction without removing human accountability.`,
    human: "Functional leaders own decision rights, resourcing, policy, and process approval. AI can draft the model but should not invent authority or assume organizational buy-in.",
    outputs: ["Current-state map", "Future-state SOP", "RACI / ownership model", "SLA framework", "Operating scorecard", "Change-management plan"],
    metrics: ["Cycle time", "SLA attainment", "Exception rate", "Adoption", "Manual steps removed", "Business KPI movement"]
  },
  "11": {
    title: "Templates & Playbooks",
    stage: "ENABLE",
    summary: "Turn repeatable GTM work into structured, reusable assets that help people execute consistently without forcing every situation into the same script.",
    why: "Templates create leverage only when they preserve judgment. AI can make playbooks adaptive: giving the user a standard, the context required to choose it, and the ability to tailor it to the situation.",
    inputs: ["Top-performer examples", "Approved methodology", "Messaging", "Process standards", "Common scenarios", "Manager coaching guidance", "CRM requirements"],
    steps: [
      ["Choose the repeatable moment", "Start with a recurring job: meeting prep, discovery, follow-up, account plan, QBR, objection, executive brief, or manager inspection."],
      ["Define the minimum standard", "Specify the required inputs, questions, evidence, output, and quality bar regardless of who executes it."],
      ["Build adaptive branches", "Add variations by segment, persona, stage, product, risk, or scenario rather than creating one huge generic template."],
      ["Embed AI guidance", "Use AI to assemble context, suggest language, check completeness, and tailor the template without breaking required standards."],
      ["Put it in the workflow", "Make the playbook accessible from CRM, enablement, messaging, or the tool where the work actually happens."]
    ],
    tools: ["Highspot / Seismic", "Notion / Docs", "ChatGPT / Claude", "CRM", "Gong"],
    system: "Activation: every template should include Use When, Do Not Use When, Required Inputs, Required Output, Quality Check, Owner, Version, and Review Date.",
    prompt: `Create an adaptive playbook for [RECURRING GTM MOMENT]. Define the objective, when to use it, when not to use it, required inputs, step-by-step workflow, quality standard, common mistakes, manager coaching questions, CRM updates, and variants for [SEGMENTS/PERSONAS]. Then provide a reusable AI prompt that can generate a situation-specific version without changing the required standard.`,
    human: "Enablement and functional leaders approve the standard. Users should be able to adapt language and tactics while preserving required evidence, process, and compliance.",
    outputs: ["Playbook", "Template", "AI-assisted generator", "Quality checklist", "Manager coaching guide", "Version / governance metadata"],
    metrics: ["Template adoption", "Completion quality", "Time saved", "Manager coaching consistency", "Process compliance", "Business outcome by playbook use"]
  },
  "12": {
    title: "Support Agents",
    stage: "ENABLE",
    summary: "Create focused AI agents for training, role-play, competitive support, knowledge retrieval, meeting preparation, and other repeatable field needs.",
    why: "A generic chatbot is rarely a system. Useful support agents have a defined job, trusted knowledge, boundaries, escalation rules, and a measurable outcome tied to how people work.",
    inputs: ["Approved knowledge sources", "User role and job-to-be-done", "Policies / boundaries", "Examples of good output", "Escalation path", "Success criteria", "Feedback data"],
    steps: [
      ["Give the agent one job", "Define the exact user, moment, input, output, and outcome. 'Help Sales' is too broad; 'prepare an AE for a competitive discovery call' is usable."],
      ["Ground it in trusted sources", "Specify what knowledge it may use, how freshness is managed, and how it should respond when evidence is missing."],
      ["Define behavior and boundaries", "Set tone, required questions, prohibited claims, escalation rules, output format, and what the agent must never decide."],
      ["Test realistic scenarios", "Evaluate common cases, edge cases, bad inputs, contradictory sources, and attempts to push the agent outside its approved role."],
      ["Measure and improve", "Track usage, resolution, user feedback, output quality, escalation rate, and whether the agent improves the underlying job."]
    ],
    tools: ["ChatGPT / custom GPT", "Claude", "Gemini", "NotebookLM", "Glean", "CRM / enablement integrations"],
    system: "Agent activation: maintain Agent Owner, User, Job-to-be-Done, Approved Sources, Last Source Refresh, Required Output, Escalation Rule, Guardrails, Feedback Channel, and KPI.",
    prompt: `You are a specialized [ROLE] support agent for [USER]. Your one job is [JOB-TO-BE-DONE]. Use only these approved sources: [SOURCES]. Before answering, identify missing context you need. Produce output in this structure: situation summary, recommended action, supporting evidence, risks/unknowns, next step. Never invent product claims, customer facts, legal guidance, pricing authority, or unsupported competitive statements. Escalate when [RULES].`,
    human: "A named owner must govern source quality, permissions, and agent behavior. High-stakes decisions, commercial authority, legal/security interpretation, and unsupported facts must escalate to a human.",
    outputs: ["Specialized agent", "Role / behavior spec", "Knowledge-source map", "Evaluation suite", "Escalation policy", "Agent scorecard"],
    metrics: ["Adoption", "Task completion / resolution", "Time saved", "Answer quality", "Escalation accuracy", "User feedback", "Reduction in repetitive support"]
  }
};

function buildRevenueDialog(){
  const dialog=document.createElement('dialog');
  dialog.id='revenue-workflow-dialog';
  dialog.className='revenue-workflow-dialog';
  dialog.setAttribute('aria-labelledby','revenue-dialog-title');
  dialog.innerHTML=`
    <button class="revenue-dialog-close" type="button" aria-label="Close workflow">×</button>
    <div class="revenue-dialog-stage" id="revenue-dialog-stage"></div>
    <h2 id="revenue-dialog-title"></h2>
    <p class="revenue-dialog-summary" id="revenue-dialog-summary"></p>
    <section class="revenue-why">
      <span class="revenue-label">WHY THIS MATTERS</span>
      <p id="revenue-dialog-why"></p>
    </section>
    <div class="revenue-detail-grid">
      <section>
        <span class="revenue-label">INPUTS</span>
        <ul id="revenue-dialog-inputs"></ul>
      </section>
      <section>
        <span class="revenue-label">BEST-FIT TOOLS</span>
        <div class="revenue-tool-cloud" id="revenue-dialog-tools"></div>
      </section>
    </div>
    <section class="revenue-run">
      <span class="revenue-label">RUN THIS WORKFLOW</span>
      <div id="revenue-dialog-steps"></div>
    </section>
    <section class="revenue-system">
      <span class="revenue-label">PUT IT INTO THE SYSTEM OF RECORD</span>
      <p id="revenue-dialog-system"></p>
    </section>
    <section class="revenue-prompt">
      <div class="revenue-prompt-head">
        <span class="revenue-label">ACTIVATION PROMPT</span>
        <button class="copy-revenue-prompt" type="button">Copy prompt</button>
      </div>
      <pre id="revenue-dialog-prompt"></pre>
    </section>
    <section class="revenue-human">
      <span class="revenue-label">HUMAN CHECKPOINT</span>
      <p id="revenue-dialog-human"></p>
    </section>
    <div class="revenue-detail-grid revenue-bottom-grid">
      <section>
        <span class="revenue-label">OUTPUTS</span>
        <ul id="revenue-dialog-outputs"></ul>
      </section>
      <section>
        <span class="revenue-label">MEASURE IT</span>
        <ul id="revenue-dialog-metrics"></ul>
      </section>
    </div>
    <footer class="revenue-dialog-footer">
      <div><b>ITS-EZ AI REVENUE SYSTEM</b><span>Turn the workflow into an operating system your team can use.</span></div>
      <a class="button button-red" href="/#contact">Build this for my team ↗</a>
    </footer>`;
  document.body.appendChild(dialog);
  return dialog;
}

const revenueDialog=buildRevenueDialog();

function populateList(selector, values){
  document.querySelector(selector).innerHTML=values.map(v=>`<li>${v}</li>`).join('');
}

function openRevenueWorkflow(id){
  const d=revenueDetails[id];
  if(!d)return;
  document.querySelector('#revenue-dialog-stage').textContent=`${id} / ${d.stage}`;
  document.querySelector('#revenue-dialog-title').textContent=d.title;
  document.querySelector('#revenue-dialog-summary').textContent=d.summary;
  document.querySelector('#revenue-dialog-why').textContent=d.why;
  populateList('#revenue-dialog-inputs',d.inputs);
  document.querySelector('#revenue-dialog-tools').innerHTML=d.tools.map(t=>`<span>${t}</span>`).join('');
  document.querySelector('#revenue-dialog-steps').innerHTML=d.steps.map((s,i)=>`
    <article class="revenue-step">
      <b>${String(i+1).padStart(2,'0')}</b>
      <div><strong>${s[0]}</strong><p>${s[1]}</p></div>
    </article>`).join('');
  document.querySelector('#revenue-dialog-system').textContent=d.system;
  document.querySelector('#revenue-dialog-prompt').textContent=d.prompt;
  document.querySelector('#revenue-dialog-human').textContent=d.human;
  populateList('#revenue-dialog-outputs',d.outputs);
  populateList('#revenue-dialog-metrics',d.metrics);
  revenueDialog.showModal();
}

function enhanceRevenueCards(){
  const cards=[...document.querySelectorAll('.workflow-card')];
  cards.forEach((card,index)=>{
    const id=String(index+1).padStart(2,'0');
    if(card.querySelector('.workflow-open'))return;
    const btn=document.createElement('button');
    btn.type='button';
    btn.className='workflow-open';
    btn.dataset.workflow=id;
    btn.innerHTML='<span>Open workflow</span><b>↗</b>';
    card.appendChild(btn);
  });
}

enhanceRevenueCards();

document.querySelector('#workflow-grid')?.addEventListener('click',e=>{
  const btn=e.target.closest('.workflow-open');
  if(!btn)return;
  openRevenueWorkflow(btn.dataset.workflow);
});

document.querySelector('.revenue-dialog-close').addEventListener('click',()=>revenueDialog.close());
revenueDialog.addEventListener('click',e=>{
  const rect=revenueDialog.getBoundingClientRect();
  if(e.clientX<rect.left||e.clientX>rect.right||e.clientY<rect.top||e.clientY>rect.bottom) revenueDialog.close();
});
revenueDialog.addEventListener('cancel',()=>{});

document.querySelector('.copy-revenue-prompt').addEventListener('click',async e=>{
  const btn=e.currentTarget;
  const text=document.querySelector('#revenue-dialog-prompt').textContent;
  try{
    await navigator.clipboard.writeText(text);
    btn.textContent='Copied ✓';
  }catch(err){
    const ta=document.createElement('textarea');
    ta.value=text;document.body.appendChild(ta);ta.select();document.execCommand('copy');ta.remove();
    btn.textContent='Copied ✓';
  }
  setTimeout(()=>btn.textContent='Copy prompt',1600);
});
