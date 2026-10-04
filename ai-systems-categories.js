(() => {
  if (typeof platforms === 'undefined' || typeof renderPlatforms !== 'function' || typeof makePlatform !== 'function') return;

  const add = (...args) => {
    const p = makePlatform(...args);
    if (!platforms.some(item => item.id === p.id || String(item.name).toLowerCase() === String(p.name).toLowerCase())) platforms.push(p);
  };

  add('strama-ai','STR','Strama.AI','AI Sales Outreach + SDR Orchestration System','AI sales outreach spanning lead sourcing, qualification, signal monitoring, multichannel engagement and follow-up in a team’s own voice.',['revenue','research','automation','revops'],['Discover','Qualify','Engage','Follow up','Measure'],'revops');

  const new2026 = [

    ['openai-dots','DOT','OpenAI Dots','Always-On Agent System','Persistent AI agents with their own cloud computer, cross-app context and approval controls for ongoing work.',['automation','operations','research','creation'],['Delegate','Research','Act','Review','Continue'],'automation'],
    ['meta-muse','MUSE','Meta Muse','Personal AI Agent System','A personal agent that can act across everyday apps from a dedicated secure virtual machine, with user-controlled access.',['automation','operations','research'],['Plan','Act','Coordinate','Learn','Review'],'automation'],
    ['google-antigravity','AG','Google Antigravity','Agent-First Development System','Google’s agent-first builder for orchestrating multiple coding agents, subagents and scheduled software work across desktop, CLI and SDK surfaces.',['creation','automation','operations'],['Plan','Build','Parallelize','Test','Deploy'],'automation'],
    ['grok-team-bots','GTB','Grok Team Bots','Shared AI Teammate System','Shareable Grok Bots that combine team context, tools, memory and approvals for recurring collaborative workflows.',['automation','knowledge','operations'],['Context','Share','Act','Approve','Learn'],'automation'],
    ['manus-2','M2','Manus 2.0','General-Purpose Agent Workspace','A rebuilt agent architecture with Cascade, Cloud Computer, Automations, Manus Studio and Cue for long-running work and personal agents.',['automation','creation','operations','research'],['Brief','Build','Automate','Operate','Continue'],'automation'],

    ['hyperbound','HYP','Hyperbound','AI Sales Roleplay + Coaching System','AI roleplay, real-call scoring and reinforcement that connects practice to observable seller behavior.',['enablement','learning','coaching','revenue'],['Practice','Score','Coach','Reinforce','Measure'],'coaching'],
    ['attention','ATTN','Attention','AI Sales Execution + CRM Automation System','AI assistance for customer conversations, CRM updates, follow-up and sales execution workflows.',['revenue','coaching','automation','revops'],['Capture','Guide','Update','Follow up','Measure'],'revops'],
    ['revenue-io','RIO','Revenue.io','Revenue Execution + Conversation Intelligence System','Sales engagement, dialing, conversation intelligence and real-time coaching built around Salesforce execution.',['revenue','coaching','revops','automation'],['Engage','Call','Coach','Inspect','Forecast'],'revops'],
    ['balto','BAL','Balto','Real-Time Sales Coaching System','Live call guidance, manager alerts, QA and message optimization for high-volume customer conversations.',['revenue','coaching','enablement'],['Listen','Prompt','Coach','QA','Improve'],'coaching'],
    ['amplemarket','AMP','Amplemarket','AI Prospecting + Sales Engagement System','B2B data, buyer signals, multichannel outreach and AI agents for pipeline creation.',['revenue','research','automation','revops'],['Discover','Signal','Personalize','Engage','Measure'],'revops'],
    ['landbase','LAND','Landbase','Agentic GTM Data System','Fresh GTM data and agent-ready company intelligence for research, targeting and market discovery.',['research','revenue','automation'],['Discover','Enrich','Research','Target','Activate'],'research'],
    ['sybill','SYB','Sybill','AI Revenue Intelligence + Execution System','Conversation intelligence, deal memory, coaching, CRM automation and next-step guidance built from revenue context.',['revenue','coaching','revops','knowledge'],['Capture','Remember','Inspect','Coach','Act'],'coaching'],
    ['persana-ai','PER','Persana AI','AI Prospecting + Revenue Agent System','ICP building, live buying signals, enrichment and AI agents for personalized outbound execution.',['research','revenue','automation','revops'],['Target','Signal','Research','Engage','Convert'],'revops'],
    ['warmly','WRM','Warmly','AI Inbound + Revenue Agent System','AI agents that identify, engage and nurture B2B buyers across inbound and outbound revenue motions.',['revenue','research','automation','revops'],['Identify','Contextualize','Engage','Nurture','Convert'],'automation'],
    ['cognism','COG','Cognism','B2B Sales Intelligence System','Verified B2B contact data, buyer signals and enrichment for sales and revenue teams.',['research','revenue','revops'],['Find','Verify','Signal','Enrich','Activate'],'research'],
    ['lusha','LUS','Lusha','B2B Data + Buyer Intelligence System','Contact data, company intelligence and buying signals for prospecting and CRM enrichment.',['research','revenue','revops'],['Find','Verify','Enrich','Prioritize','Activate'],'research'],
    ['lemlist','LEM','lemlist','Multichannel Outreach System','Personalized email, LinkedIn and multichannel prospecting workflows for outbound teams.',['revenue','automation','creation'],['Research','Personalize','Sequence','Engage','Optimize'],'revops'],
    ['seamless-ai','SEA','Seamless.AI','AI Sales Intelligence + Prospecting System','Real-time B2B prospect data, contact discovery and AI-assisted pipeline generation.',['research','revenue','automation'],['Search','Verify','Enrich','Engage','Measure'],'research'],
    ['heyreach','HR','HeyReach','LinkedIn Outreach System','LinkedIn outreach infrastructure for teams and agencies running structured prospecting campaigns.',['revenue','automation'],['Target','Sequence','Engage','Route','Measure'],'automation'],
    ['la-growth-machine','LGM','La Growth Machine','Multichannel Sales Automation System','Prospecting automation across LinkedIn, email and other channels with workflow orchestration.',['revenue','automation','operations'],['Source','Enrich','Sequence','Engage','Analyze'],'automation'],
    ['orum','ORUM','Orum','AI Dialer + Calling Performance System','AI-assisted dialing, prioritization, call coaching and salesfloor workflows for phone-first revenue teams.',['revenue','coaching','automation'],['Prioritize','Dial','Connect','Coach','Measure'],'coaching'],
    ['zime','ZIME','Zime','AI Sales Enablement + Live Coaching System','Captures winning behaviors and delivers real-time guidance, coaching and execution context inside seller workflows.',['enablement','revenue','coaching','knowledge'],['Capture','Guide','Coach','Reinforce','Measure'],'coaching'],
    ['smartwinnr','SW','SmartWinnr','AI Roleplay + Sales Readiness System','AI roleplays, personalized learning, gamification and coaching for customer-facing team readiness.',['enablement','learning','coaching'],['Learn','Practice','Score','Coach','Certify'],'coaching'],
    ['exec','EXEC','Exec','AI Personal Assistant System','AI personal assistance for planning, communication and task execution across everyday work.',['operations','automation','creation'],['Plan','Draft','Organize','Act','Follow up'],'automation'],
    ['substrata','SUB','Substrata','Behavioral Intelligence + AI Sales Coaching System','Behavioral and conversation intelligence that surfaces intent, power dynamics and deal guidance for complex B2B selling.',['revenue','coaching','revops'],['Analyze','Interpret','Coach','Guide','Improve'],'coaching'],
    ['vibe-prospecting','VIBE','VibeProspecting','Emerging AI Prospecting System','Natural-language prospect discovery, intent-rich matching and AI-assisted outreach for modern sellers.',['research','revenue','automation'],['Describe','Discover','Signal','Personalize','Engage'],'research'],
    ['heylee','HEY','Heylee','Conversation Intelligence + Revenue Automation System','Turns customer conversations into context, growth signals, coaching opportunities and automations.',['revenue','coaching','automation','operations'],['Listen','Analyze','Signal','Automate','Coach'],'coaching']
  ];
  new2026.forEach(args => add(...args));

  const latestDrops = [
    {date:'SEP 29',name:'OpenAI Dots',type:'AGENTS',status:'NEW',why:'Always-on agents with a cloud computer, cross-app context, custom rules and approval controls.',url:'https://help.openai.com/en/articles/6825453-chatgpt-release-notes'},
    {date:'SEP 30',name:'Gemini 4 Argon',type:'MODEL',status:'NEW',why:'Google’s new frontier model for long-horizon professional work, coding, enterprise knowledge and cyber defense.',url:'https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-4-argon/'},
    {date:'SEP 8',name:'Meta Muse',type:'AGENT',status:'NEW',why:'A personal AI agent that takes action across everyday apps from a dedicated secure virtual machine.',url:'https://about.fb.com/news/2026/09/introducing-muse-personal-ai-agent/'},
    {date:'SEP 28',name:'Grok Team Bots',type:'TEAM AGENTS',status:'NEW',why:'Shared AI teammates with common context, tools, memory and team-level workflows.',url:'https://x.ai/news/team-bots'},
    {date:'SEP 28',name:'Manus 2.0 + Cue',type:'AGENTS',status:'NEW',why:'A rebuilt general-purpose agent stack with Cascade, Cloud Computer, Automations, Studio and personal-agent app Cue.',url:'https://manus.im/blog/introducing-manus-2-0'},
    {date:'SEP 28',name:'Claude Sonnet 5.5',type:'MODEL',status:'NEW',why:'Anthropic’s faster, lower-cost Sonnet upgrade for everyday agentic work, coding and polished business artifacts.',url:'https://www.anthropic.com/claude-sonnet-5-5'},
    {date:'SEP 22',name:'Claude Opus 5.5',type:'MODEL',status:'NEW',why:'Anthropic’s higher-end model for complex judgment, coding and long-running professional work.',url:'https://www.anthropic.com/claude-opus-5-5'},
    {date:'SEP 29',name:'GPT-6.1 Sol',type:'MODEL',status:'NEW',why:'OpenAI’s lower-cost upgrade for agentic coding, computer use and professional work, with multi-agent support in beta.',url:'https://developers.openai.com/api/docs/changelog'},
    {date:'SEP 28',name:'NVIDIA Open Agent Safety Platform',type:'SAFETY',status:'NEW',why:'OpenShell and Sentry add enforceable runtime boundaries and independent monitoring for increasingly autonomous AI agents.',url:'https://developer.nvidia.com/blog/nvidia-open-agent-safety-platform-a-reference-for-continuous-in-silicon-agent-monitoring/'},
    {date:'AUG 27',name:'Gemini Omni 1.1 Flash',type:'CREATIVE',status:'WATCH',why:'Google’s production-focused multimodal video model adds stronger editing control, scene extension and 4K upscaling.',url:'https://blog.google/innovation-and-ai/technology/developers-tools/build-with-gemini-omni-1-1-flash/'},
    {date:'MAY 19',name:'Google Antigravity 2.0',type:'BUILDER',status:'WATCH',why:'An agent-first development platform with parallel agents, dynamic subagents, scheduled tasks, CLI and SDK.',url:'https://blog.google/innovation-and-ai/technology/developers-tools/google-io-2026-developer-highlights/'}
  ];

  if (!document.querySelector('.latest-ai-drops')) {
    const featured = document.querySelector('#library');
    if (featured) {
      const section = document.createElement('section');
      section.className='section latest-ai-drops';
      section.id='latest-drops';
      section.innerHTML=`<div class="wrap"><div class="section-head"><div><p class="eyebrow"><span></span> LATEST AI DROPS</p><h2>What changed lately.<br>What is worth watching.</h2></div><p>This is the fast-moving layer of the library: newly launched agents, frontier models and AI systems that materially change what teams can do. New does not automatically mean better. Each addition should earn its place through usefulness, workflow fit and evidence.</p></div><div class="latest-drop-grid">${latestDrops.slice(0,6).map(d=>`<a class="latest-drop-card" href="${d.url}" target="_blank" rel="noopener"><div class="latest-drop-top"><span>${d.date}</span><b>${d.status}</b></div><small>${d.type}</small><h3>${d.name}</h3><p>${d.why}</p><strong>Read the release ↗</strong></a>`).join('')}</div><p class="latest-drop-note">Showing the six most important recent releases. New does not automatically mean better; each release is evaluated for practical usefulness, workflow fit and evidence.</p></div>`;
      featured.insertAdjacentElement('beforebegin',section);
    }
  }

  const heroProof = document.querySelector('.hero-proof span:first-child strong');
  if (heroProof) heroProof.textContent = platforms.length + '+';
  const heroProofLabel = document.querySelector('.hero-proof span:first-child');
  if (heroProofLabel) {
    const strong = heroProofLabel.querySelector('strong');
    heroProofLabel.innerHTML = '';
    if (strong) heroProofLabel.appendChild(strong);
    heroProofLabel.append(' platform systems');
  }

  if (!document.getElementById('latest-ai-drops-style')) {
    const style=document.createElement('style');style.id='latest-ai-drops-style';style.textContent=`
      .latest-ai-drops{background:#f3f3f1;color:#0b0b0d}.latest-ai-drops .section-head p{color:#5f5f66}
      .latest-drop-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:14px}
      .latest-drop-card{display:flex;min-height:250px;padding:22px;flex-direction:column;border:1px solid #d6d6d2;border-radius:20px;background:#fff;color:#0b0b0d;box-shadow:0 8px 22px rgba(0,0,0,.05);transition:transform .18s ease,border-color .18s ease,box-shadow .18s ease}
      .latest-drop-card:hover{transform:translateY(-3px);border-color:#ef1717;box-shadow:0 14px 30px rgba(0,0,0,.08)}
      .latest-drop-top{display:flex;justify-content:space-between;gap:12px;align-items:center}.latest-drop-top span{font-size:.62rem;font-weight:950;letter-spacing:.12em}.latest-drop-top b{padding:5px 8px;border-radius:999px;background:#0b0b0d;color:#fff;font-size:.52rem;letter-spacing:.1em}
      .latest-drop-card small{margin-top:28px;color:#ef1717;font-size:.58rem;font-weight:950;letter-spacing:.12em}.latest-drop-card h3{margin:7px 0 9px;font-size:1.28rem;letter-spacing:-.035em}.latest-drop-card p{margin:0;color:#5f5f66;font-size:.76rem;line-height:1.55}.latest-drop-card strong{margin-top:auto;padding-top:22px;font-size:.68rem}.latest-drop-note{margin:18px 0 0;color:#77777d;font-size:.64rem;line-height:1.5}
      @media(max-width:900px){.latest-drop-grid{grid-template-columns:repeat(2,minmax(0,1fr))}}@media(max-width:560px){.latest-drop-grid{grid-template-columns:1fr}.latest-drop-card{min-height:0}}
    `;document.head.appendChild(style);
  }


  const library = document.querySelector('#library');
  const platformGridEl = document.querySelector('#platform-grid');
  const libraryHead = document.querySelector('.library-head');
  if (!library || !platformGridEl || !libraryHead || document.querySelector('.outcome-navigator')) return;

  const outcomeGroups = [
    {id:'research',n:'01',title:'Research & Find Opportunities',summary:'Research markets, accounts and buyers, detect signals, enrich data and build better targeting.',examples:'research · ICP · signals · enrichment',match:p=>p.cats.includes('research')},
    {id:'sell',n:'02',title:'Sell & Improve Conversations',summary:'Prepare, engage, qualify, coach, inspect deals and improve customer conversations.',examples:'sales · meetings · coaching · pipeline',match:p=>p.cats.includes('revenue')||p.cats.includes('coaching')},
    {id:'enable',n:'03',title:'Enable & Develop People',summary:'Onboard, train, practice, certify, reinforce and support teams in the flow of work.',examples:'enablement · learning · role-play · readiness',match:p=>p.cats.includes('enablement')||p.cats.includes('learning')},
    {id:'knowledge',n:'04',title:'Create & Find Knowledge',summary:'Create useful content and make trusted company knowledge easier to find and use.',examples:'content · knowledge · search · creation',match:p=>p.cats.includes('creation')||p.cats.includes('knowledge')},
    {id:'automate',n:'05',title:'Automate & Operate',summary:'Connect systems, agents, approvals, CRM workflows, projects and recurring operational work.',examples:'automation · CRM · RevOps · projects',match:p=>p.cats.includes('automation')||p.cats.includes('crm')||p.cats.includes('revops')||p.cats.includes('project')},
    {id:'partners',n:'06',title:'Scale Partners & Ecosystems',summary:'Recruit, onboard, enable, co-sell and measure partner contribution across the ecosystem.',examples:'partners · PRM · co-sell · ecosystem',match:p=>p.cats.includes('partner')}
  ];

  const headEyebrow = libraryHead.querySelector('.eyebrow');
  const headTitle = libraryHead.querySelector('h2');
  const headBody = libraryHead.querySelector(':scope > p:last-child');
  if (headEyebrow) headEyebrow.innerHTML = '<span></span> START WITH THE BUSINESS PROBLEM';
  if (headTitle) headTitle.innerHTML = 'What are you trying<br>to improve?';
  if (headBody) headBody.textContent = 'Do not start with a logo. Pick the outcome first. We will narrow the stack to the systems that can actually help, then you can inspect the platforms and workflows behind it.';

  const navigator = document.createElement('div');
  navigator.className = 'outcome-navigator';
  navigator.setAttribute('aria-label','Choose a business outcome');
  navigator.innerHTML = `<div class="outcome-intro"><div><small>THE EZ WAY TO USE THIS LIBRARY</small><strong>Problem → System → Tool → Workflow → Measure</strong></div><p>Choose a problem below to cut through the ${platforms.length}-platform landscape.</p></div><div class="outcome-grid">${outcomeGroups.map(group=>`<button class="outcome-card" type="button" data-outcome="${group.id}" aria-pressed="false"><span class="outcome-number">${group.n}</span><span class="outcome-count">${platforms.filter(group.match).length} tools</span><strong>${group.title}</strong><span class="outcome-summary">${group.summary}</span><span class="outcome-examples">${group.examples}</span><b>See the stack ↗</b></button>`).join('')}</div><div class="browse-all-row"><span>Already know the platform you want?</span><button type="button" class="browse-all-tools">Browse all ${platforms.length} tools →</button></div>`;
  libraryHead.insertAdjacentElement('afterend',navigator);

  const controls = document.querySelector('.library-controls');
  if (controls) {
    const browseHead = document.createElement('div');
    browseHead.className='tool-library-subhead';
    browseHead.innerHTML='<div><small>PLATFORM LIBRARY</small><h3>Then choose the right tool.</h3></div><p>Compare platforms by the job they do, not by who has the loudest AI marketing.</p>';
    controls.insertAdjacentElement('beforebegin',browseHead);
  }
  document.querySelector('.coverage-strip')?.remove();
  const heroLede=document.querySelector('.hero-lede');if(heroLede)heroLede.textContent='Start with the business problem. Map the system. Then choose the AI, revenue, enablement and operations tools that make the workflow real.';
  const heroPrimary=document.querySelector('.hero-actions .button-red');if(heroPrimary)heroPrimary.textContent='Start with the outcome ↓';
  const pageMapLibrary=document.querySelector('.page-map a[data-section="library"] span');if(pageMapLibrary)pageMapLibrary.textContent='Outcomes + Tools';

  const clearOutcomeState=()=>navigator.querySelectorAll('.outcome-card').forEach(card=>{card.classList.remove('is-active');card.setAttribute('aria-pressed','false')});
  const resetFiltersVisual=()=>document.querySelectorAll('.filter').forEach(btn=>{btn.classList.remove('is-active');btn.setAttribute('aria-pressed','false')});
  function renderOutcome(group){
    const list=platforms.filter(group.match);
    platformGridEl.innerHTML=list.map(p=>`<article class="platform-card" data-cats="${p.cats.join(' ')}"><div class="platform-mark">${p.mark}</div><div class="platform-copy"><small>${p.system}</small><h3>${p.name}</h3><p>${p.best}</p><div class="platform-tags">${p.stages.map(s=>`<span>${s}</span>`).join('')}</div></div><button class="open-system" type="button" data-system="${p.id}" aria-label="Open ${p.name} system">↗</button></article>`).join('');
    const count=document.querySelector('#system-count');if(count)count.textContent=list.length;
    const status=document.querySelector('.library-status span:last-child');if(status)status.textContent=`${group.title}: ${list.length} relevant platform systems. Search or use the filters to narrow further.`;
  }

  navigator.addEventListener('click',event=>{
    const card=event.target.closest('.outcome-card');const browseAll=event.target.closest('.browse-all-tools');
    if(browseAll){clearOutcomeState();if(typeof activeFilter!=='undefined')activeFilter='all';if(typeof searchTerm!=='undefined')searchTerm='';const search=document.querySelector('.system-search');if(search)search.value='';resetFiltersVisual();const all=document.querySelector('.filter[data-filter="all"]');if(all){all.classList.add('is-active');all.setAttribute('aria-pressed','true')}renderPlatforms();document.querySelector('.tool-library-subhead')?.scrollIntoView({behavior:'smooth',block:'start'});return;}
    if(!card)return;const group=outcomeGroups.find(item=>item.id===card.dataset.outcome);if(!group)return;clearOutcomeState();card.classList.add('is-active');card.setAttribute('aria-pressed','true');if(typeof activeFilter!=='undefined')activeFilter='all';if(typeof searchTerm!=='undefined')searchTerm='';const search=document.querySelector('.system-search');if(search)search.value='';resetFiltersVisual();renderOutcome(group);document.querySelector('.tool-library-subhead')?.scrollIntoView({behavior:'smooth',block:'start'});
  });
  document.querySelectorAll('.filter').forEach(btn=>btn.addEventListener('click',clearOutcomeState));
  document.querySelector('.system-search')?.addEventListener('input',clearOutcomeState);

  if(!document.getElementById('ai-systems-category-style')){
    const style=document.createElement('style');style.id='ai-systems-category-style';style.textContent=`
      .outcome-navigator{margin:-4px 0 42px;padding:22px;border:1px solid rgba(255,255,255,.1);border-radius:26px;background:#0b0b0d;color:#fff;box-shadow:0 18px 50px rgba(0,0,0,.12)}
      .outcome-intro{display:flex;justify-content:space-between;gap:28px;align-items:end;margin-bottom:18px;padding:0 2px 17px;border-bottom:1px solid rgba(255,255,255,.12)}.outcome-intro div{display:grid;gap:5px}.outcome-intro small{color:#ef1717;font-size:.62rem;font-weight:950;letter-spacing:.14em}.outcome-intro strong{font-size:1.08rem;letter-spacing:-.02em}.outcome-intro p{max-width:420px;margin:0;color:#a8a8ae;font-size:.74rem;line-height:1.55;text-align:right}
      .outcome-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:10px}.outcome-card{position:relative;display:flex;min-width:0;min-height:218px;padding:16px;flex-direction:column;align-items:flex-start;text-align:left;border:1px solid rgba(255,255,255,.13);border-radius:18px;background:#141417;color:#fff;cursor:pointer;transition:transform .18s ease,border-color .18s ease,background .18s ease,box-shadow .18s ease}.outcome-card:hover{transform:translateY(-3px);border-color:rgba(239,23,23,.7);background:#18181b}.outcome-card.is-active{border-color:#ef1717;background:#18181b;box-shadow:inset 0 0 0 1px #ef1717,0 12px 30px rgba(0,0,0,.22)}
      .outcome-number{font-size:.58rem;font-weight:950;letter-spacing:.14em;color:#ef1717}.outcome-count{position:absolute;right:14px;top:14px;color:#8e8e95;font-size:.56rem;font-weight:900;text-transform:uppercase}.outcome-card strong{margin-top:25px;font-size:.94rem;line-height:1.08;letter-spacing:-.025em}.outcome-summary{margin-top:9px;color:#b9b9bf;font-size:.67rem;line-height:1.45}.outcome-examples{margin-top:auto;padding-top:13px;color:#7f7f86;font-size:.57rem;font-weight:800;line-height:1.35;text-transform:uppercase;letter-spacing:.04em}.outcome-card b{margin-top:11px;color:#fff;font-size:.63rem}.outcome-card:hover b,.outcome-card.is-active b{color:#ff5858}
      .browse-all-row{display:flex;justify-content:space-between;align-items:center;gap:18px;margin-top:16px;padding:15px 2px 0;border-top:1px solid rgba(255,255,255,.1);color:#8f8f95;font-size:.67rem}.browse-all-tools{border:0;background:transparent;color:#fff;font:inherit;font-weight:900;cursor:pointer}.browse-all-tools:hover{color:#ff5858}.tool-library-subhead{display:flex;justify-content:space-between;align-items:end;gap:28px;margin:0 0 18px;padding-top:8px}.tool-library-subhead div{display:grid;gap:4px}.tool-library-subhead small{color:#ef1717;font-size:.6rem;font-weight:950;letter-spacing:.14em}.tool-library-subhead h3{margin:0;font-size:1.35rem;letter-spacing:-.04em}.tool-library-subhead p{max-width:440px;margin:0;color:var(--muted);font-size:.74rem;line-height:1.5;text-align:right}
      @media(max-width:1180px){.outcome-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.outcome-card{min-height:205px}}@media(max-width:820px){.outcome-navigator{padding:16px;border-radius:20px}.outcome-intro,.tool-library-subhead{align-items:flex-start;flex-direction:column}.outcome-intro p,.tool-library-subhead p{text-align:left}.outcome-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.browse-all-row{align-items:flex-start;flex-direction:column}.tool-library-subhead{margin-bottom:16px}}.library-empty-state{grid-column:1/-1;display:grid;gap:8px;padding:34px;border:1px dashed rgba(15,15,17,.2);border-radius:18px;background:#fafaf8;text-align:center}.library-empty-state strong{font-size:1rem}.library-empty-state span{color:var(--muted);font-size:.76rem;line-height:1.5}@media(max-width:560px){.outcome-grid{grid-template-columns:1fr}.outcome-card{min-height:0}.outcome-card strong{margin-top:20px}.outcome-examples{margin-top:16px}.outcome-navigator{margin-bottom:30px}}
    `;document.head.appendChild(style);
  }

  if(!document.querySelector('script[data-ez-platform-links]')){const s=document.createElement('script');s.src='/ai-systems-platform-links.js?v=20260910-1';s.dataset.ezPlatformLinks='true';document.body.appendChild(s);}
  platformGridEl.innerHTML='<div class="library-empty-state"><strong>Choose an outcome above, search for a platform, or browse the full library when you are ready.</strong><span>The directory stays hidden by default so the page remains useful instead of overwhelming.</span></div>';
  const count=document.querySelector('#system-count');if(count)count.textContent=platforms.length;
})();