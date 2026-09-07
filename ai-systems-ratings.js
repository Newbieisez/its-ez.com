(() => {
  const RATINGS_URL='data/ai-systems-ratings.json';
  const COMPONENT_LABELS={
    userSentiment:'User rating',
    reviewConfidence:'Review confidence',
    integrationReadiness:'Integration',
    gtmFit:'AI / GTM fit',
    marketMomentum:'Momentum'
  };
  let snapshot={items:{},summary:{total:103,live:0,provisional:0,collecting:103},generatedAt:null};
  let sortMode='default';

  const safe=value=>String(value??'').replace(/[&<>'"]/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[ch]));
  const scoreFor=id=>snapshot.items?.[id]||null;
  const num=value=>Number.isFinite(Number(value))?Number(value):null;
  const prettyDate=value=>{
    if(!value) return 'First refresh pending';
    const date=new Date(value);if(Number.isNaN(date.getTime())) return 'Refresh time unavailable';
    return `Updated ${new Intl.DateTimeFormat('en-US',{month:'short',day:'numeric',hour:'numeric',minute:'2-digit'}).format(date)}`;
  };
  const trendMarkup=value=>{
    const v=num(value);if(v===null||Math.abs(v)<.05)return '';
    const cls=v>0?'trend-up':'trend-down';const arrow=v>0?'↑':'↓';
    return `<span class="${cls}">${arrow}${Math.abs(v).toFixed(1)}</span>`;
  };

  function statusLabel(item){
    if(!item||item.status==='collecting') return 'Collecting';
    return item.status==='live'?'Live':'Provisional';
  }

  function chipMarkup(item){
    if(!item||item.status==='collecting'||num(item.score)===null){
      return `<span class="ez-score-chip is-collecting"><strong>—</strong><span>EZ SCORE · COLLECTING</span></span>`;
    }
    return `<span class="ez-score-chip is-${safe(item.status)}"><strong>${Number(item.score).toFixed(1)}</strong><span>EZ SCORE · ${safe(statusLabel(item).toUpperCase())}</span>${trendMarkup(item.trend)}</span>`;
  }

  function decorateCards(){
    document.querySelectorAll('.platform-card').forEach(card=>{
      const button=card.querySelector('.open-system');
      const id=button?.dataset.system;if(!id)return;
      const item=scoreFor(id);
      let row=card.querySelector('.platform-score-row');
      if(!row){row=document.createElement('div');row.className='platform-score-row';card.querySelector('.platform-copy')?.appendChild(row);}
      const confidence=num(item?.confidence);
      row.innerHTML=`${chipMarkup(item)}${confidence===null?'':`<span class="ez-score-confidence">${confidence.toFixed(1)}/10 confidence · ${Number(item.reviewCount||0).toLocaleString()} reviews</span>`}`;
    });
  }

  function componentMarkup(item){
    return Object.entries(COMPONENT_LABELS).map(([key,label])=>{
      const value=num(item?.components?.[key]);
      return `<div class="ez-score-component"><label>${safe(label)}</label><div class="ez-score-bar"><span style="width:${value===null?0:Math.max(0,Math.min(100,value*10))}%"></span></div><b>${value===null?'—':value.toFixed(1)}</b></div>`;
    }).join('');
  }

  function sourceMarkup(item){
    const sources=Array.isArray(item?.sources)?item.sources:[];
    if(!sources.length) return '<span>No approved external source has produced a rating signal yet.</span>';
    return sources.map(source=>source.url?`<a href="${safe(source.url)}" target="_blank" rel="noopener noreferrer">${safe(source.label)}</a>`:`<span>${safe(source.label)}</span>`).join('');
  }

  function renderDialogScore(id){
    const dialog=document.querySelector('#system-dialog');if(!dialog)return;
    dialog.querySelector('.ez-score-dialog,.ez-score-empty')?.remove();
    const anchor=document.querySelector('#dialog-stages');if(!anchor)return;
    const item=scoreFor(id);
    if(!item||item.status==='collecting'||num(item.score)===null){
      const empty=document.createElement('div');empty.className='ez-score-empty';
      empty.innerHTML='<strong>Live EZ Score is collecting evidence.</strong><br>The rating engine will publish a 0–10 score only after enough permitted, attributable signals are available. No filler score is generated.';
      anchor.insertAdjacentElement('afterend',empty);return;
    }
    const panel=document.createElement('section');panel.className='ez-score-dialog';
    const confidence=num(item.confidence);
    panel.innerHTML=`<div class="ez-score-dialog-head"><div class="ez-score-dialog-number"><strong>${Number(item.score).toFixed(1)}</strong><span>EZ SCORE / 10</span></div><div class="ez-score-dialog-summary"><strong>${Number(item.reviewCount||0).toLocaleString()} reviews · ${Number(item.sourceCount||0)} sources</strong><span>Composite score combines permitted user sentiment, evidence confidence, integration readiness, AI/GTM fit and market momentum. Missing components are not invented.</span></div><span class="ez-score-dialog-status is-${safe(item.status)}">${safe(statusLabel(item))}${confidence===null?'':` · ${confidence.toFixed(1)} confidence`}</span></div><div class="ez-score-components">${componentMarkup(item)}</div><div class="ez-score-sources"><strong>Source provenance</strong><div class="ez-score-source-list">${sourceMarkup(item)}</div><div class="ez-score-freshness">${safe(prettyDate(item.lastRefreshed||snapshot.generatedAt))}${num(item.trend)===null?'':` · Trend ${item.trend>0?'+':''}${Number(item.trend).toFixed(1)}`}</div></div>`;
    anchor.insertAdjacentElement('afterend',panel);
  }

  function sortPlatforms(){
    if(typeof platforms==='undefined'||!Array.isArray(platforms)||sortMode==='default') return;
    const originalIndex=new Map(platforms.map((p,i)=>[p.id,i]));
    platforms.sort((a,b)=>{
      const ra=scoreFor(a.id),rb=scoreFor(b.id);
      if(sortMode==='score'){
        const sa=num(ra?.score),sb=num(rb?.score);
        if(sa===null&&sb===null)return originalIndex.get(a.id)-originalIndex.get(b.id);
        if(sa===null)return 1;if(sb===null)return -1;return sb-sa;
      }
      if(sortMode==='trending'){
        const sa=num(ra?.trend),sb=num(rb?.trend);
        if(sa===null&&sb===null)return originalIndex.get(a.id)-originalIndex.get(b.id);
        if(sa===null)return 1;if(sb===null)return -1;return sb-sa;
      }
      if(sortMode==='confidence'){
        const sa=num(ra?.confidence),sb=num(rb?.confidence);
        if(sa===null&&sb===null)return originalIndex.get(a.id)-originalIndex.get(b.id);
        if(sa===null)return 1;if(sb===null)return -1;return sb-sa;
      }
      return 0;
    });
  }

  function installSort(){
    const controls=document.querySelector('.library-controls');if(!controls||controls.querySelector('.ez-score-sort'))return;
    const wrap=document.createElement('div');wrap.className='ez-score-sort';
    wrap.innerHTML='<label for="ez-score-sort">Sort</label><select id="ez-score-sort"><option value="default">Library order</option><option value="score">Highest EZ Score</option><option value="trending">Fastest rising</option><option value="confidence">Highest confidence</option></select>';
    controls.appendChild(wrap);
    wrap.querySelector('select').addEventListener('change',event=>{sortMode=event.target.value;sortPlatforms();if(typeof renderPlatforms==='function')renderPlatforms();decorateCards();});
  }

  function installExplainer(){
    const status=document.querySelector('.library-status');if(!status||document.querySelector('.ez-score-explainer'))return;
    const summary=snapshot.summary||{};
    const box=document.createElement('div');box.className='ez-score-explainer';
    box.innerHTML=`<div class="ez-score-explainer-badge"><strong>0–10</strong><span>EZ SCORE</span></div><div class="ez-score-explainer-copy"><strong>Live technology intelligence, not a paid-placement ranking.</strong><span>Scores use permitted sources, evidence confidence, connector readiness and category-aware GTM fit. Restricted review sites are never scraped.</span></div><div class="ez-score-explainer-meta" id="ez-score-meta">${Number(summary.live||0)} live · ${Number(summary.provisional||0)} provisional · ${Number(summary.collecting||103)} collecting<br>${safe(prettyDate(snapshot.generatedAt))}</div>`;
    status.insertAdjacentElement('afterend',box);
  }

  function refreshMeta(){
    const meta=document.querySelector('#ez-score-meta');if(!meta)return;
    const summary=snapshot.summary||{};
    meta.innerHTML=`${Number(summary.live||0)} live · ${Number(summary.provisional||0)} provisional · ${Number(summary.collecting||103)} collecting<br>${safe(prettyDate(snapshot.generatedAt))}`;
  }

  function hookDialog(){
    const grid=document.querySelector('#platform-grid');if(!grid)return;
    grid.addEventListener('click',event=>{
      const trigger=event.target.closest('.open-system');if(!trigger)return;
      queueMicrotask(()=>renderDialogScore(trigger.dataset.system));
    },true);
  }

  async function load(){
    installSort();installExplainer();decorateCards();hookDialog();
    try{
      const response=await fetch(`${RATINGS_URL}?v=${Date.now()}`,{cache:'no-store'});
      if(response.ok){const data=await response.json();if(data&&data.items)snapshot=data;}
    }catch(error){console.warn('EZ Score snapshot unavailable',error);}
    refreshMeta();sortPlatforms();if(typeof renderPlatforms==='function')renderPlatforms();decorateCards();
  }

  const grid=document.querySelector('#platform-grid');
  if(grid&&'MutationObserver'in window)new MutationObserver(()=>decorateCards()).observe(grid,{childList:true});
  load();
})();
