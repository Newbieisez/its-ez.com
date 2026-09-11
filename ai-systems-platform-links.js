(() => {
  const officialSites = {
    'chatgpt':'https://chatgpt.com/','claude':'https://claude.ai/','gemini':'https://gemini.google.com/','copilot':'https://www.microsoft.com/en-us/microsoft-365-copilot','perplexity':'https://www.perplexity.ai/','notebooklm':'https://notebooklm.google.com/','clay':'https://www.clay.com/',
    'salesforce':'https://www.salesforce.com/','hubspot':'https://www.hubspot.com/','dynamics':'https://www.microsoft.com/en-us/dynamics-365','zoho':'https://www.zoho.com/crm/','gong':'https://www.gong.io/','chorus':'https://www.zoominfo.com/products/chorus','clari':'https://www.clari.com/','outreach':'https://www.outreach.io/','salesloft':'https://www.salesloft.com/','rattle':'https://www.gorattle.com/','seismic':'https://seismic.com/','highspot':'https://www.highspot.com/','allego':'https://www.allego.com/','letter-ai':'https://www.letter.ai/','mindtickle':'https://www.mindtickle.com/','showpad':'https://www.showpad.com/','spekit':'https://www.spekit.com/','workramp':'https://www.workramp.com/','saleshood':'https://saleshood.com/','second-nature':'https://secondnature.ai/',
    'docebo':'https://www.docebo.com/','360learning':'https://360learning.com/','cornerstone':'https://www.cornerstoneondemand.com/','degreed':'https://degreed.com/','thought-industries':'https://www.thoughtindustries.com/','skilljar':'https://www.skilljar.com/','learnupon':'https://www.learnupon.com/','absorb':'https://www.absorblms.com/','sana':'https://sana.ai/','glean':'https://www.glean.com/','notion':'https://www.notion.com/','guru':'https://www.getguru.com/','confluence':'https://www.atlassian.com/software/confluence',
    'articulate':'https://www.articulate.com/360/','canva':'https://www.canva.com/','synthesia':'https://www.synthesia.io/','heygen':'https://www.heygen.com/','elevenlabs':'https://elevenlabs.io/','gamma':'https://gamma.app/','vyond':'https://www.vyond.com/','descript':'https://www.descript.com/','loom':'https://www.loom.com/','scribe':'https://scribehow.com/','guidde':'https://www.guidde.co/','asana':'https://asana.com/','monday':'https://monday.com/','jira':'https://www.atlassian.com/software/jira','clickup':'https://clickup.com/','smartsheet':'https://www.smartsheet.com/','zapier':'https://zapier.com/','make':'https://www.make.com/','n8n':'https://n8n.io/','workato':'https://www.workato.com/','impartner':'https://impartner.com/','allbound':'https://www.allbound.com/','channeltivity':'https://www.channeltivity.com/','crossbeam':'https://www.crossbeam.com/','partnerstack':'https://partnerstack.com/',
    'apollo':'https://www.apollo.io/','zoominfo':'https://www.zoominfo.com/','6sense':'https://6sense.com/','common-room':'https://www.commonroom.io/','usergems':'https://www.usergems.com/','bardeen':'https://www.bardeen.ai/','rows':'https://rows.com/','attio':'https://attio.com/','close-crm':'https://www.close.com/','folk-crm':'https://www.folk.app/','reply':'https://reply.io/','unify':'https://www.unifygtm.com/','regie-ai':'https://www.regie.ai/','instantly':'https://instantly.ai/','smartlead':'https://www.smartlead.ai/','lavender':'https://www.lavender.ai/','jason-ai':'https://reply.io/jason-ai/','artisan-ava':'https://www.artisan.co/','11x':'https://www.11x.ai/','aisdr':'https://aisdr.com/','salesforge':'https://www.salesforge.ai/','qualified-piper':'https://www.qualified.com/piper','nooks':'https://www.nooks.ai/','bland-ai':'https://www.bland.ai/','regal':'https://www.regal.ai/','granola':'https://www.granola.ai/','avoma':'https://www.avoma.com/','fathom':'https://fathom.video/','fireflies':'https://fireflies.ai/','qwilr':'https://qwilr.com/','pandadoc':'https://www.pandadoc.com/','docusign':'https://www.docusign.com/','dealhub':'https://dealhub.io/','dock':'https://www.dock.us/','calendly':'https://calendly.com/','sendspark':'https://www.sendspark.com/','hockeystack':'https://www.hockeystack.com/','dreamdata':'https://dreamdata.io/','strama-ai':'https://strama.ai/',
    'hyperbound':'https://www.hyperbound.ai/','attention':'https://www.attention.tech/','revenue-io':'https://www.revenue.io/','balto':'https://www.balto.ai/','amplemarket':'https://www.amplemarket.com/','landbase':'https://www.landbase.com/','sybill':'https://www.sybill.ai/','persana-ai':'https://persana.ai/','warmly':'https://warmly.ai/','cognism':'https://www.cognism.com/','lusha':'https://www.lusha.com/','lemlist':'https://www.lemlist.com/','seamless-ai':'https://seamless.ai/','heyreach':'https://www.heyreach.io/','la-growth-machine':'https://lagrowthmachine.com/','orum':'https://www.orum.com/','zime':'https://zime.ai/','smartwinnr':'https://smartwinnr.com/','exec':'https://www.exec.ai/','substrata':'https://www.substrata.me/','vibe-prospecting':'https://vibeprospecting.com/','heylee':'https://www.heylee.ai/'
  };

  const crosscheckSnapshot = [
    {rank:1,model:'Claude Opus 4.6',maker:'Anthropic',score:'1178.3',move:'+4'},
    {rank:2,model:'Claude Sonnet 4.6',maker:'Anthropic',score:'1152.8',move:'+3'},
    {rank:3,model:'GPT-5.5',maker:'OpenAI',score:'1148.5',move:'+7'},
    {rank:4,model:'Gemini 3.8 Flash',maker:'Google',score:'1144.3',move:'New'},
    {rank:5,model:'GPT-6 Astra',maker:'OpenAI',score:'1138.4',move:'New'}
  ];

  if (typeof platforms !== 'undefined' && Array.isArray(platforms)) platforms.forEach(p => { if (officialSites[p.id]) p.officialUrl = officialSites[p.id]; });

  function decorateCard(card){
    if(!card || card.dataset.linksReady==='true') return;
    const button=card.querySelector('.open-system');
    const id=button?.dataset.system;
    if(!id || !officialSites[id]) return;
    const p=typeof platforms!=='undefined' ? platforms.find(item=>item.id===id) : null;
    const actions=document.createElement('div');
    actions.className='platform-card-actions';
    button.textContent='View system';
    button.setAttribute('aria-label',`View ${p?.name || id} system`);
    const link=document.createElement('a');
    link.className='official-site-link';
    link.href=officialSites[id];
    link.target='_blank';
    link.rel='noopener noreferrer';
    link.textContent='Official site ↗';
    link.setAttribute('aria-label',`Visit ${p?.name || id} official website in a new tab`);
    actions.append(button,link);
    card.appendChild(actions);
    card.dataset.linksReady='true';
  }

  const decorateAll=()=>document.querySelectorAll('.platform-card').forEach(decorateCard);
  const grid=document.querySelector('#platform-grid');
  if(grid && 'MutationObserver' in window) new MutationObserver(decorateAll).observe(grid,{childList:true,subtree:false});
  decorateAll();

  const dialog=document.querySelector('#system-dialog');
  if(dialog && grid){
    grid.addEventListener('click',event=>{
      const trigger=event.target.closest('.open-system');if(!trigger)return;
      const id=trigger.dataset.system;const url=officialSites[id];if(!url)return;
      queueMicrotask(()=>{
        const footer=dialog.querySelector('.dialog-footer');if(!footer)return;
        let link=footer.querySelector('.dialog-official-site');
        if(!link){link=document.createElement('a');link.className='dialog-official-site';link.target='_blank';link.rel='noopener noreferrer';footer.insertBefore(link,footer.querySelector('.dialog-cta'));}
        const p=typeof platforms!=='undefined' ? platforms.find(item=>item.id===id) : null;
        link.href=url;link.textContent='Official site ↗';link.setAttribute('aria-label',`Visit ${p?.name || id} official website in a new tab`);
      });
    },true);
  }

  function installModelIntelligence(){
    if(document.querySelector('.ai-model-intelligence')) return;
    const principle=document.querySelector('.ai-principle');
    const library=document.querySelector('#library');
    const anchor=principle || library;
    if(!anchor) return;
    const section=document.createElement('section');
    section.className='ai-model-intelligence';
    section.id='model-intelligence';
    section.setAttribute('aria-labelledby','model-intelligence-title');
    section.innerHTML=`
      <div class="wrap">
        <div class="model-intel-head">
          <div>
            <span class="model-intel-kicker">AI MODEL INTELLIGENCE</span>
            <h2 id="model-intelligence-title">Which models are professionals choosing?</h2>
          </div>
          <div class="model-intel-copy">
            <p>Crosscheck by LinkedIn Labs ranks AI models using blind, head-to-head comparisons from professionals. It is a useful signal for model selection, but it measures professional preference, not product review quality or technical benchmark accuracy.</p>
            <div class="model-intel-actions"><a href="https://www.linkedin.com/labs/crosscheck/leaderboard" target="_blank" rel="noopener noreferrer">View live Crosscheck leaderboard ↗</a><a href="https://www.linkedin.com/blog/engineering/ai/crosscheck-benchmarking-ai-models-in-the-real-world" target="_blank" rel="noopener noreferrer">How Crosscheck works ↗</a></div>
          </div>
        </div>
        <div class="model-intel-grid" role="list" aria-label="Top five models in the Crosscheck snapshot">
          ${crosscheckSnapshot.map(item=>`<article class="model-intel-card" role="listitem"><span class="model-rank">${String(item.rank).padStart(2,'0')}</span><div><strong>${item.model}</strong><small>${item.maker}</small></div><div class="model-score"><b>${item.score}</b><span>${item.move==='New'?'NEW':item.move}</span></div></article>`).join('')}
        </div>
        <div class="model-intel-foot"><span>Crosscheck snapshot captured Sep 11, 2026. Rankings change as new professional votes arrive.</span><span>Source: LinkedIn Labs Crosscheck. ITS-EZ is not affiliated with LinkedIn.</span></div>
      </div>`;
    if(principle) principle.insertAdjacentElement('afterend',section); else library.insertAdjacentElement('beforebegin',section);
  }
  installModelIntelligence();

  if(!document.getElementById('platform-link-styles')){
    const style=document.createElement('style');style.id='platform-link-styles';style.textContent=`
      .platform-card-actions{grid-column:3;display:grid;gap:7px;align-self:center;min-width:112px}.platform-card-actions .open-system{width:100%;height:36px;padding:0 12px;border-radius:999px;font-size:.62rem;font-weight:900;white-space:nowrap}.official-site-link{display:flex;align-items:center;justify-content:center;min-height:34px;padding:0 10px;border:1px solid rgba(15,15,17,.16);border-radius:999px;color:#4d4d53;background:#fff;font-size:.58rem;font-weight:900;letter-spacing:.02em;text-decoration:none;white-space:nowrap;transition:border-color .18s ease,color .18s ease,transform .18s ease}.official-site-link:hover{border-color:#ef1717;color:#ef1717;transform:translateY(-1px)}.dialog-official-site{margin-left:auto;color:inherit;font-size:.72rem;font-weight:900;text-decoration:none}.dialog-official-site:hover{color:#ef1717}
      .ai-model-intelligence{padding:72px 0;background:#0b0b0d;color:#fff;border-top:1px solid rgba(255,255,255,.08);border-bottom:1px solid rgba(255,255,255,.08)}.model-intel-head{display:grid;grid-template-columns:minmax(0,1fr) minmax(340px,.72fr);gap:48px;align-items:end;margin-bottom:28px}.model-intel-kicker{display:block;margin-bottom:12px;color:#ef1717;font-size:.64rem;font-weight:950;letter-spacing:.16em;text-transform:uppercase}.model-intel-head h2{max-width:860px;margin:0;font-size:clamp(2.5rem,5vw,5.5rem);line-height:.9;letter-spacing:-.055em}.model-intel-copy p{margin:0;color:#b8b8bf;font-size:.92rem;line-height:1.65}.model-intel-actions{display:flex;gap:9px;flex-wrap:wrap;margin-top:18px}.model-intel-actions a{display:inline-flex;align-items:center;justify-content:center;min-height:40px;padding:0 13px;border:1px solid rgba(255,255,255,.2);border-radius:999px;color:#fff;text-decoration:none;font-size:.64rem;font-weight:900}.model-intel-actions a:first-child{background:#ef1717;border-color:#ef1717}.model-intel-actions a:hover{background:#fff;border-color:#fff;color:#0b0b0d}.model-intel-grid{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));border:1px solid rgba(255,255,255,.12);border-radius:20px;overflow:hidden;background:#131316}.model-intel-card{position:relative;display:flex;min-width:0;min-height:166px;padding:18px;flex-direction:column;justify-content:space-between;gap:20px;border-right:1px solid rgba(255,255,255,.1)}.model-intel-card:last-child{border-right:0}.model-rank{color:#ef1717;font-size:.64rem;font-weight:950;letter-spacing:.12em}.model-intel-card div:first-of-type{display:grid;gap:5px}.model-intel-card strong{font-size:1rem;line-height:1.05}.model-intel-card small{color:#8e8e95;font-size:.62rem;font-weight:800}.model-score{display:flex;align-items:end;justify-content:space-between;gap:8px}.model-score b{font-size:1.45rem;letter-spacing:-.04em}.model-score span{padding:4px 6px;border-radius:999px;background:rgba(255,255,255,.08);color:#c9c9cf;font-size:.52rem;font-weight:900}.model-intel-foot{display:flex;justify-content:space-between;gap:22px;margin-top:14px;color:#74747c;font-size:.58rem;line-height:1.5}.model-intel-foot span:last-child{text-align:right}
      @media(max-width:1000px){.model-intel-head{grid-template-columns:1fr;gap:20px}.model-intel-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.model-intel-card{border-bottom:1px solid rgba(255,255,255,.1)}.model-intel-card:nth-child(2n){border-right:0}.model-intel-card:last-child{grid-column:1/-1;border-bottom:0}}
      @media(max-width:820px){.platform-card-actions{grid-column:1/-1;grid-template-columns:1fr 1fr;width:100%;min-width:0}.platform-card-actions .open-system,.official-site-link{width:100%;min-height:44px}.dialog-official-site{margin-left:0}.ai-model-intelligence{padding:54px 0}.model-intel-foot{flex-direction:column}.model-intel-foot span:last-child{text-align:left}}
      @media(max-width:560px){.model-intel-grid{grid-template-columns:1fr}.model-intel-card,.model-intel-card:nth-child(2n){min-height:140px;border-right:0;border-bottom:1px solid rgba(255,255,255,.1)}.model-intel-card:last-child{grid-column:auto;border-bottom:0}.model-intel-head h2{font-size:clamp(2.35rem,12vw,3.8rem)}}
      @media(max-width:480px){.platform-card-actions{grid-template-columns:1fr}}
    `;document.head.appendChild(style);
  }
})();
