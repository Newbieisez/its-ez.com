(() => {
  if (typeof platforms === 'undefined' || typeof renderPlatforms !== 'function') return;

  const library = document.querySelector('#library');
  const platformGridEl = document.querySelector('#platform-grid');
  const libraryHead = document.querySelector('.library-head');
  if (!library || !platformGridEl || !libraryHead || document.querySelector('.outcome-navigator')) return;

  const outcomeGroups = [
    {
      id:'pipeline', n:'01', title:'Create Pipeline',
      summary:'Find the right accounts, detect buying signals, enrich data and turn research into qualified outreach.',
      examples:'ICP · signals · enrichment · prospecting',
      match:p => p.cats.includes('research') || ['clay','apollo','zoominfo','6sense','common-room','usergems','bardeen','rows','reply','unify','regie-ai'].includes(p.id)
    },
    {
      id:'sales', n:'02', title:'Run the Sales Motion',
      summary:'Engage buyers, qualify opportunities, manage pipeline, progress deals and improve close execution.',
      examples:'outreach · MEDDPICC · pipeline · close',
      match:p => p.cats.includes('revenue')
    },
    {
      id:'meetings', n:'03', title:'Improve Customer Conversations',
      summary:'Prepare for meetings, capture buyer evidence, update CRM and coach from what actually happened.',
      examples:'meeting AI · conversation intelligence · coaching',
      match:p => p.cats.includes('coaching') || ['granola','avoma','fathom','fireflies'].includes(p.id)
    },
    {
      id:'enablement', n:'04', title:'Enable & Train the Team',
      summary:'Build onboarding, learning, role-play, certification, reinforcement and field activation systems.',
      examples:'enablement · LMS · role-play · readiness',
      match:p => p.cats.includes('enablement') || p.cats.includes('learning')
    },
    {
      id:'content', n:'05', title:'Create Better Content',
      summary:'Turn approved knowledge into courses, decks, video, audio, job aids and buyer-ready assets faster.',
      examples:'courses · video · decks · AI content',
      match:p => p.cats.includes('creation')
    },
    {
      id:'knowledge', n:'06', title:'Find Trusted Knowledge',
      summary:'Make company knowledge searchable, grounded and useful inside the moments where teams need answers.',
      examples:'enterprise search · knowledge · grounded AI',
      match:p => p.cats.includes('knowledge')
    },
    {
      id:'automation', n:'07', title:'Automate the Work',
      summary:'Connect triggers, agents, approvals, routing and system updates without creating invisible chaos.',
      examples:'workflows · agents · integrations · orchestration',
      match:p => p.cats.includes('automation')
    },
    {
      id:'revops', n:'08', title:'Run CRM & Revenue Ops',
      summary:'Improve data quality, forecasting, routing, deal inspection, attribution and operating visibility.',
      examples:'CRM · RevOps · forecasting · attribution',
      match:p => p.cats.includes('crm') || p.cats.includes('revops')
    },
    {
      id:'projects', n:'09', title:'Run Programs & Projects',
      summary:'Plan launches, coordinate cross-functional work, automate status and keep execution visible.',
      examples:'projects · launches · work management',
      match:p => p.cats.includes('project')
    },
    {
      id:'partners', n:'10', title:'Scale Partners & Ecosystems',
      summary:'Recruit, onboard, accredit, activate, co-sell and measure partner contribution across the ecosystem.',
      examples:'PRM · partner learning · co-sell · ecosystem',
      match:p => p.cats.includes('partner')
    }
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
  navigator.innerHTML = `
    <div class="outcome-intro">
      <div><small>THE EZ WAY TO USE THIS LIBRARY</small><strong>Problem → System → Tool → Workflow → Measure</strong></div>
      <p>Choose a problem below to cut through the ${platforms.length}-platform landscape.</p>
    </div>
    <div class="outcome-grid">
      ${outcomeGroups.map(group => {
        const count = platforms.filter(group.match).length;
        return `<button class="outcome-card" type="button" data-outcome="${group.id}" aria-pressed="false">
          <span class="outcome-number">${group.n}</span>
          <span class="outcome-count">${count} tools</span>
          <strong>${group.title}</strong>
          <span class="outcome-summary">${group.summary}</span>
          <span class="outcome-examples">${group.examples}</span>
          <b>See the stack ↗</b>
        </button>`;
      }).join('')}
    </div>
    <div class="browse-all-row"><span>Already know the platform you want?</span><button type="button" class="browse-all-tools">Browse all ${platforms.length} tools →</button></div>
  `;
  libraryHead.insertAdjacentElement('afterend', navigator);

  const controls = document.querySelector('.library-controls');
  if (controls) {
    const browseHead = document.createElement('div');
    browseHead.className = 'tool-library-subhead';
    browseHead.innerHTML = `<div><small>PLATFORM LIBRARY</small><h3>Then choose the right tool.</h3></div><p>Compare platforms by the job they do—not by who has the loudest AI marketing.</p>`;
    controls.insertAdjacentElement('beforebegin', browseHead);
  }

  const coverageStrip = document.querySelector('.coverage-strip');
  if (coverageStrip) coverageStrip.remove();

  const heroLede = document.querySelector('.hero-lede');
  if (heroLede) heroLede.textContent = 'Start with the business problem. Map the system. Then choose the AI, revenue, enablement and operations tools that make the workflow real.';
  const heroPrimary = document.querySelector('.hero-actions .button-red');
  if (heroPrimary) heroPrimary.textContent = 'Start with the outcome ↓';

  const pageMapLibrary = document.querySelector('.page-map a[data-section="library"] span');
  if (pageMapLibrary) pageMapLibrary.textContent = 'Outcomes + Tools';

  function clearOutcomeState(){
    navigator.querySelectorAll('.outcome-card').forEach(card => {
      card.classList.remove('is-active');
      card.setAttribute('aria-pressed','false');
    });
  }

  function renderOutcome(group){
    const list = platforms.filter(group.match);
    platformGridEl.innerHTML = list.map(p => `<article class="platform-card" data-cats="${p.cats.join(' ')}"><div class="platform-mark">${p.mark}</div><div class="platform-copy"><small>${p.system}</small><h3>${p.name}</h3><p>${p.best}</p><div class="platform-tags">${p.stages.map(s=>`<span>${s}</span>`).join('')}</div></div><button class="open-system" type="button" data-system="${p.id}" aria-label="Open ${p.name} system">↗</button></article>`).join('');
    const count = document.querySelector('#system-count');
    if (count) count.textContent = list.length;
    const status = document.querySelector('.library-status span:last-child');
    if (status) status.textContent = `${group.title}: ${list.length} relevant platform systems. Search or use the filters to narrow further.`;
  }

  function resetFiltersVisual(){
    document.querySelectorAll('.filter').forEach(btn => {
      btn.classList.remove('is-active');
      btn.setAttribute('aria-pressed','false');
    });
  }

  navigator.addEventListener('click', event => {
    const card = event.target.closest('.outcome-card');
    const browseAll = event.target.closest('.browse-all-tools');
    if (browseAll) {
      clearOutcomeState();
      if (typeof activeFilter !== 'undefined') activeFilter = 'all';
      if (typeof searchTerm !== 'undefined') searchTerm = '';
      const search = document.querySelector('.system-search');
      if (search) search.value = '';
      resetFiltersVisual();
      const allButton = document.querySelector('.filter[data-filter="all"]');
      if (allButton) { allButton.classList.add('is-active'); allButton.setAttribute('aria-pressed','true'); }
      renderPlatforms();
      document.querySelector('.tool-library-subhead')?.scrollIntoView({behavior:'smooth',block:'start'});
      return;
    }
    if (!card) return;
    const group = outcomeGroups.find(item => item.id === card.dataset.outcome);
    if (!group) return;
    clearOutcomeState();
    card.classList.add('is-active');
    card.setAttribute('aria-pressed','true');
    if (typeof activeFilter !== 'undefined') activeFilter = 'all';
    if (typeof searchTerm !== 'undefined') searchTerm = '';
    const search = document.querySelector('.system-search');
    if (search) search.value = '';
    resetFiltersVisual();
    renderOutcome(group);
    document.querySelector('.tool-library-subhead')?.scrollIntoView({behavior:'smooth',block:'start'});
  });

  document.querySelectorAll('.filter').forEach(btn => btn.addEventListener('click', clearOutcomeState));
  document.querySelector('.system-search')?.addEventListener('input', clearOutcomeState);

  if (!document.getElementById('ai-systems-category-style')) {
    const style = document.createElement('style');
    style.id = 'ai-systems-category-style';
    style.textContent = `
      .outcome-navigator{margin:-4px 0 42px;padding:22px;border:1px solid rgba(255,255,255,.1);border-radius:26px;background:#0b0b0d;color:#fff;box-shadow:0 18px 50px rgba(0,0,0,.12)}
      .outcome-intro{display:flex;justify-content:space-between;gap:28px;align-items:end;margin-bottom:18px;padding:0 2px 17px;border-bottom:1px solid rgba(255,255,255,.12)}
      .outcome-intro div{display:grid;gap:5px}.outcome-intro small{color:#ef1717;font-size:.62rem;font-weight:950;letter-spacing:.14em}.outcome-intro strong{font-size:1.08rem;letter-spacing:-.02em}.outcome-intro p{max-width:420px;margin:0;color:#a8a8ae;font-size:.74rem;line-height:1.55;text-align:right}
      .outcome-grid{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:10px}
      .outcome-card{position:relative;display:flex;min-width:0;min-height:218px;padding:16px;flex-direction:column;align-items:flex-start;text-align:left;border:1px solid rgba(255,255,255,.13);border-radius:18px;background:#141417;color:#fff;cursor:pointer;transition:transform .18s ease,border-color .18s ease,background .18s ease,box-shadow .18s ease}
      .outcome-card:hover{transform:translateY(-3px);border-color:rgba(239,23,23,.7);background:#18181b}.outcome-card.is-active{border-color:#ef1717;background:#18181b;box-shadow:inset 0 0 0 1px #ef1717,0 12px 30px rgba(0,0,0,.22)}
      .outcome-number{font-size:.58rem;font-weight:950;letter-spacing:.14em;color:#ef1717}.outcome-count{position:absolute;right:14px;top:14px;color:#8e8e95;font-size:.56rem;font-weight:900;text-transform:uppercase}
      .outcome-card strong{margin-top:25px;font-size:.94rem;line-height:1.08;letter-spacing:-.025em}.outcome-summary{margin-top:9px;color:#b9b9bf;font-size:.67rem;line-height:1.45}.outcome-examples{margin-top:auto;padding-top:13px;color:#7f7f86;font-size:.57rem;font-weight:800;line-height:1.35;text-transform:uppercase;letter-spacing:.04em}.outcome-card b{margin-top:11px;color:#fff;font-size:.63rem}.outcome-card:hover b,.outcome-card.is-active b{color:#ff5858}
      .browse-all-row{display:flex;justify-content:space-between;align-items:center;gap:18px;margin-top:16px;padding:15px 2px 0;border-top:1px solid rgba(255,255,255,.1);color:#8f8f95;font-size:.67rem}.browse-all-tools{border:0;background:transparent;color:#fff;font:inherit;font-weight:900;cursor:pointer}.browse-all-tools:hover{color:#ff5858}
      .tool-library-subhead{display:flex;justify-content:space-between;align-items:end;gap:28px;margin:0 0 18px;padding-top:8px}.tool-library-subhead div{display:grid;gap:4px}.tool-library-subhead small{color:#ef1717;font-size:.6rem;font-weight:950;letter-spacing:.14em}.tool-library-subhead h3{margin:0;font-size:1.35rem;letter-spacing:-.04em}.tool-library-subhead p{max-width:440px;margin:0;color:var(--muted);font-size:.74rem;line-height:1.5;text-align:right}
      @media(max-width:1180px){.outcome-grid{grid-template-columns:repeat(3,minmax(0,1fr))}.outcome-card{min-height:205px}}
      @media(max-width:820px){.outcome-navigator{padding:16px;border-radius:20px}.outcome-intro,.tool-library-subhead{align-items:flex-start;flex-direction:column}.outcome-intro p,.tool-library-subhead p{text-align:left}.outcome-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.browse-all-row{align-items:flex-start;flex-direction:column}.tool-library-subhead{margin-bottom:16px}}
      @media(max-width:560px){.outcome-grid{grid-template-columns:1fr}.outcome-card{min-height:0}.outcome-card strong{margin-top:20px}.outcome-examples{margin-top:16px}.outcome-navigator{margin-bottom:30px}}
    `;
    document.head.appendChild(style);
  }
})();