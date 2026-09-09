(()=>{
'use strict';
const $=(s,r=document)=>r.querySelector(s);
const $$=(s,r=document)=>[...r.querySelectorAll(s)];
const esc=s=>String(s||'').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[m]));

function metricContext(card){
  const title=$('h3',card)?.textContent.trim()||'this metric';
  const small=$('small',card)?.textContent.trim()||'';
  const parts=small.split('·').map(x=>x.trim()).filter(Boolean);
  const type=parts[1]||parts[0]||'Metric';
  const why=[...card.querySelectorAll('p')].map(p=>p.textContent.trim()).find(Boolean)||'Use this as one signal inside the larger revenue system.';
  const role=$('.rp-role-card.is-active')?.dataset.role||'revenue professional';
  return {title,type,why,role};
}

function guidanceFor({title,type,why}){
  const t=title.toLowerCase();
  let formula='Define the numerator, denominator, unit, source system, owner, and refresh cadence before using this metric.';
  let pair='Pair it with the closest upstream quality signal and downstream business outcome so you do not manage from one number.';
  let action='Compare against a relevant baseline, segment the population, investigate the first meaningful deviation, then assign one response owner.';
  if(/rate|conversion|win/.test(t)) formula='Use a clearly defined numerator ÷ eligible denominator for the same cohort and time window. Never mix created, progressed, and closed populations.';
  if(/pipeline/.test(t)) pair='Pair pipeline volume with opportunity quality, stage conversion, aging, source, and win rate. More pipeline is not automatically better pipeline.';
  if(/forecast|close-date|commit/.test(t)) pair='Pair this with stage evidence, next-step coverage, aging, close-date movement, and manager inspection quality.';
  if(/coach|1:1|call-score|skill|proficiency/.test(t)) pair='Pair coaching activity with observed behavior change after coaching. Coaching volume without skill delta is not success.';
  if(/completion|training|learning|certification/.test(t)) pair='Pair learning activity with practice quality, manager reinforcement, live behavior, and the downstream funnel metric the program was designed to change.';
  if(/data|crm|field|duplicate|freshness|validation/.test(t)) pair='Treat this as instrumentation health. Pair completeness with accuracy, freshness, provenance, and whether people can safely make decisions from the data.';
  if(/discount/.test(t)) action='Segment by product, segment, competitor, rep, and deal size. Inspect value articulation and negotiation behavior before changing pricing policy.';
  if(/ramp|time to/.test(t)) action='Compare cohorts by role, manager, segment, systems access, lead flow, and opportunity availability before assuming the bottleneck is training.';
  return `<div class="rp4-guidance-grid"><div><b>What this metric is for</b><p>${esc(why)}</p></div><div><b>Define it correctly</b><p>${esc(formula)}</p></div><div><b>Read it with</b><p>${esc(pair)}</p></div><div><b>What to do next</b><p>${esc(action)}</p></div></div>`;
}

function promptFor({title,type,why,role}){
  return `You are helping a ${role} analyze and operationalize the metric "${title}".\n\nMETRIC CONTEXT\nType: ${type}\nWhy it matters: ${why}\n\nDO THIS\n1. Define the metric precisely: formula, numerator, denominator, unit, source system, owner, refresh cadence, and required data quality.\n2. Ask for any missing business context that would materially change the interpretation. Do not invent benchmarks.\n3. Establish a relevant baseline and comparable cohort. Segment by tenure, manager, region, product, segment, source, or channel when appropriate.\n4. Identify the closest upstream signal and downstream outcome that should be inspected with this metric.\n5. Explain what an increase, decrease, or unusual variance could mean, including non-skill causes such as data quality, territory, ICP, product, pricing, process, or manager effects.\n6. Give a short investigation sequence that finds the first meaningful leak before recommending intervention.\n7. Recommend one action, one owner, one measurement window, and what evidence would falsify the hypothesis.\n\nOUTPUT\n- Metric definition\n- Required data\n- Baseline / segmentation plan\n- Interpretation\n- Adjacent evidence to inspect\n- Likely hypotheses\n- Recommended next action\n- Owner + measurement window\n- What would disprove the conclusion\n\nClearly label assumptions and hypotheses. Do not present correlation as causation.`;
}

function ensureStyles(){
  if($('#rp4-styles')) return;
  const s=document.createElement('style');s.id='rp4-styles';s.textContent=`
  .rp4-guidance{display:none;margin-top:16px;padding:18px;border:1px solid rgba(255,255,255,.16);border-radius:14px;background:rgba(255,255,255,.04)}
  .rp4-guidance.is-open{display:block}.rp4-guidance-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:14px}
  .rp4-guidance-grid>div{padding:14px;border:1px solid rgba(255,255,255,.12);border-radius:10px}.rp4-guidance-grid b{display:block;margin-bottom:7px}.rp4-guidance-grid p{margin:0;line-height:1.55}
  .rp4-modal{position:fixed;inset:0;z-index:10000;display:none;place-items:center;padding:24px;background:rgba(0,0,0,.78)}.rp4-modal.is-open{display:grid}
  .rp4-shell{width:min(920px,100%);max-height:88vh;overflow:auto;background:#121419;color:#fff;border:1px solid #3a3e47;border-radius:18px;box-shadow:0 30px 90px rgba(0,0,0,.5)}
  .rp4-head,.rp4-foot{display:flex;align-items:center;justify-content:space-between;gap:16px;padding:18px 20px;border-bottom:1px solid #30343c}.rp4-foot{border-top:1px solid #30343c;border-bottom:0}
  .rp4-head h3{margin:3px 0 0}.rp4-head small{color:#ff2a3f;font-weight:900;letter-spacing:.1em}.rp4-body{padding:20px}.rp4-body pre{white-space:pre-wrap;margin:0;font:500 14px/1.6 ui-monospace,SFMono-Regular,Consolas,monospace;color:#e7e9ee}
  .rp4-close,.rp4-copy{border:1px solid #4a4f59;border-radius:999px;background:#1c1f25;color:#fff;padding:11px 16px;font-weight:800;cursor:pointer}.rp4-copy{background:#ff2038;border-color:#ff2038}
  @media(max-width:700px){.rp4-guidance-grid{grid-template-columns:1fr}.rp4-modal{padding:10px}}
  body:not([data-rp-theme="dark"]) .rp4-guidance{background:#f7f7f8;border-color:#d9dadd;color:#111}body:not([data-rp-theme="dark"]) .rp4-guidance-grid>div{border-color:#ddd}
  `;document.head.appendChild(s);
}

function ensureModal(){
  let m=$('#rp4-modal');if(m)return m;
  m=document.createElement('div');m.id='rp4-modal';m.className='rp4-modal';m.setAttribute('role','dialog');m.setAttribute('aria-modal','true');
  m.innerHTML='<div class="rp4-shell"><div class="rp4-head"><div><small>AI MASTER PROMPT</small><h3 id="rp4-title">Metric analysis prompt</h3></div><button class="rp4-close" type="button">Close</button></div><div class="rp4-body"><pre id="rp4-text"></pre></div><div class="rp4-foot"><span>Built from this specific metric and its context.</span><button class="rp4-copy" type="button">Copy prompt</button></div></div>';
  document.body.appendChild(m);
  const close=()=>m.classList.remove('is-open');$('.rp4-close',m).addEventListener('click',close);m.addEventListener('click',e=>{if(e.target===m)close()});document.addEventListener('keydown',e=>{if(e.key==='Escape')close()});
  $('.rp4-copy',m).addEventListener('click',async e=>{const text=$('#rp4-text',m).textContent;try{await navigator.clipboard.writeText(text)}catch{const ta=document.createElement('textarea');ta.value=text;document.body.appendChild(ta);ta.select();document.execCommand('copy');ta.remove()}e.currentTarget.textContent='Copied ✓';setTimeout(()=>e.currentTarget.textContent='Copy prompt',1200)});
  return m;
}

function enhanceCard(card){
  if(card.dataset.rp4Ready==='1') return; card.dataset.rp4Ready='1';
  const ctx=metricContext(card);
  const ai=$('.rp2-ai-button',card), learn=$('.rp2-learn-more',card);
  if(ai){ai.textContent=`Analyze ${ctx.title}`;ai.setAttribute('aria-label',`Open an AI analysis prompt for ${ctx.title}`)}
  if(learn){learn.textContent=`How to use ${ctx.title}`;learn.setAttribute('aria-label',`Show practical guidance for ${ctx.title}`)}
  let old=$('.rp2-extra',card);if(old)old.style.display='none';
  const g=document.createElement('div');g.className='rp4-guidance';g.innerHTML=guidanceFor(ctx);card.appendChild(g);
}

function enhanceAll(){$$('.rp-kpi-card').forEach(enhanceCard)}

function installDelegation(){
  document.addEventListener('click',e=>{
    const ai=e.target.closest('.rp-kpi-card .rp2-ai-button');
    const learn=e.target.closest('.rp-kpi-card .rp2-learn-more');
    if(!ai&&!learn)return;
    e.preventDefault();e.stopImmediatePropagation();
    const card=e.target.closest('.rp-kpi-card');if(!card)return;const ctx=metricContext(card);
    if(learn){const g=$('.rp4-guidance',card);if(!g)return;const open=!g.classList.contains('is-open');g.classList.toggle('is-open',open);learn.textContent=open?'Hide guidance':`How to use ${ctx.title}`;return;}
    const m=ensureModal();$('#rp4-title',m).textContent=`${ctx.title} — AI analysis prompt`;$('#rp4-text',m).textContent=promptFor(ctx);m.classList.add('is-open');
  },true);
}

function init(){if(!document.body.classList.contains('ez-revenue-hub'))return;ensureStyles();ensureModal();enhanceAll();installDelegation();const grid=$('#kpi-grid');if(grid)new MutationObserver(enhanceAll).observe(grid,{childList:true,subtree:true});}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',()=>setTimeout(init,250),{once:true});else setTimeout(init,250);
})();