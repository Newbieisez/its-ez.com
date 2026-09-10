(() => {
  const officialSites = {
    'chatgpt':'https://chatgpt.com/','claude':'https://claude.ai/','gemini':'https://gemini.google.com/','copilot':'https://www.microsoft.com/en-us/microsoft-365-copilot','perplexity':'https://www.perplexity.ai/','notebooklm':'https://notebooklm.google.com/','clay':'https://www.clay.com/',
    'salesforce':'https://www.salesforce.com/','hubspot':'https://www.hubspot.com/','dynamics':'https://www.microsoft.com/en-us/dynamics-365','zoho':'https://www.zoho.com/crm/','gong':'https://www.gong.io/','chorus':'https://www.zoominfo.com/products/chorus','clari':'https://www.clari.com/','outreach':'https://www.outreach.io/','salesloft':'https://www.salesloft.com/','rattle':'https://www.gorattle.com/','seismic':'https://seismic.com/','highspot':'https://www.highspot.com/','allego':'https://www.allego.com/','letter-ai':'https://www.letter.ai/','mindtickle':'https://www.mindtickle.com/','showpad':'https://www.showpad.com/','spekit':'https://www.spekit.com/','workramp':'https://www.workramp.com/','saleshood':'https://saleshood.com/','second-nature':'https://secondnature.ai/',
    'docebo':'https://www.docebo.com/','360learning':'https://360learning.com/','cornerstone':'https://www.cornerstoneondemand.com/','degreed':'https://degreed.com/','thought-industries':'https://www.thoughtindustries.com/','skilljar':'https://www.skilljar.com/','learnupon':'https://www.learnupon.com/','absorb':'https://www.absorblms.com/','sana':'https://sana.ai/','glean':'https://www.glean.com/','notion':'https://www.notion.com/','guru':'https://www.getguru.com/','confluence':'https://www.atlassian.com/software/confluence',
    'articulate':'https://www.articulate.com/360/','canva':'https://www.canva.com/','synthesia':'https://www.synthesia.io/','heygen':'https://www.heygen.com/','elevenlabs':'https://elevenlabs.io/','gamma':'https://gamma.app/','vyond':'https://www.vyond.com/','descript':'https://www.descript.com/','loom':'https://www.loom.com/','scribe':'https://scribehow.com/','guidde':'https://www.guidde.co/','asana':'https://asana.com/','monday':'https://monday.com/','jira':'https://www.atlassian.com/software/jira','clickup':'https://clickup.com/','smartsheet':'https://www.smartsheet.com/','zapier':'https://zapier.com/','make':'https://www.make.com/','n8n':'https://n8n.io/','workato':'https://www.workato.com/','impartner':'https://impartner.com/','allbound':'https://www.allbound.com/','channeltivity':'https://www.channeltivity.com/','crossbeam':'https://www.crossbeam.com/','partnerstack':'https://partnerstack.com/',
    'apollo':'https://www.apollo.io/','zoominfo':'https://www.zoominfo.com/','6sense':'https://6sense.com/','common-room':'https://www.commonroom.io/','usergems':'https://www.usergems.com/','bardeen':'https://www.bardeen.ai/','rows':'https://rows.com/','attio':'https://attio.com/','close-crm':'https://www.close.com/','folk-crm':'https://www.folk.app/','reply':'https://reply.io/','unify':'https://www.unifygtm.com/','regie-ai':'https://www.regie.ai/','instantly':'https://instantly.ai/','smartlead':'https://www.smartlead.ai/','lavender':'https://www.lavender.ai/','jason-ai':'https://reply.io/jason-ai/','artisan-ava':'https://www.artisan.co/','11x':'https://www.11x.ai/','aisdr':'https://aisdr.com/','salesforge':'https://www.salesforge.ai/','qualified-piper':'https://www.qualified.com/piper','nooks':'https://www.nooks.ai/','bland-ai':'https://www.bland.ai/','regal':'https://www.regal.ai/','granola':'https://www.granola.ai/','avoma':'https://www.avoma.com/','fathom':'https://fathom.video/','fireflies':'https://fireflies.ai/','qwilr':'https://qwilr.com/','pandadoc':'https://www.pandadoc.com/','docusign':'https://www.docusign.com/','dealhub':'https://dealhub.io/','dock':'https://www.dock.us/','calendly':'https://calendly.com/','sendspark':'https://www.sendspark.com/','hockeystack':'https://www.hockeystack.com/','dreamdata':'https://dreamdata.io/','strama-ai':'https://strama.ai/',
    'hyperbound':'https://www.hyperbound.ai/','attention':'https://www.attention.tech/','revenue-io':'https://www.revenue.io/','balto':'https://www.balto.ai/','amplemarket':'https://www.amplemarket.com/','landbase':'https://www.landbase.com/','sybill':'https://www.sybill.ai/','persana-ai':'https://persana.ai/','warmly':'https://warmly.ai/','cognism':'https://www.cognism.com/','lusha':'https://www.lusha.com/','lemlist':'https://www.lemlist.com/','seamless-ai':'https://seamless.ai/','heyreach':'https://www.heyreach.io/','la-growth-machine':'https://lagrowthmachine.com/','orum':'https://www.orum.com/','zime':'https://zime.ai/','smartwinnr':'https://smartwinnr.com/','exec':'https://www.exec.ai/','substrata':'https://www.substrata.me/','vibe-prospecting':'https://vibeprospecting.com/','heylee':'https://www.heylee.ai/'
  };

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

  if(!document.getElementById('platform-link-styles')){
    const style=document.createElement('style');style.id='platform-link-styles';style.textContent=`
      .platform-card-actions{grid-column:3;display:grid;gap:7px;align-self:center;min-width:112px}.platform-card-actions .open-system{width:100%;height:36px;padding:0 12px;border-radius:999px;font-size:.62rem;font-weight:900;white-space:nowrap}.official-site-link{display:flex;align-items:center;justify-content:center;min-height:34px;padding:0 10px;border:1px solid rgba(15,15,17,.16);border-radius:999px;color:#4d4d53;background:#fff;font-size:.58rem;font-weight:900;letter-spacing:.02em;text-decoration:none;white-space:nowrap;transition:border-color .18s ease,color .18s ease,transform .18s ease}.official-site-link:hover{border-color:#ef1717;color:#ef1717;transform:translateY(-1px)}.dialog-official-site{margin-left:auto;color:inherit;font-size:.72rem;font-weight:900;text-decoration:none}.dialog-official-site:hover{color:#ef1717}
      @media(max-width:820px){.platform-card-actions{grid-column:1/-1;grid-template-columns:1fr 1fr;width:100%;min-width:0}.platform-card-actions .open-system,.official-site-link{width:100%;min-height:44px}.dialog-official-site{margin-left:0}}@media(max-width:480px){.platform-card-actions{grid-template-columns:1fr}}
    `;document.head.appendChild(style);
  }
})();