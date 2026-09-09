(()=>{
'use strict';
const $=(s,r=document)=>r.querySelector(s);
const $$=(s,r=document)=>[...r.querySelectorAll(s)];
const navItems=[
  ['role-paths','Pick your role'],
  ['measurement','Measurement'],
  ['kpis','KPIs'],
  ['diagnose','Diagnose'],
  ['ai-signal','AI signal'],
  ['programs','Programs'],
  ['cadence','Cadence'],
  ['resources','Resources'],
  ['rules','Rules']
];

function ready(fn){
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',()=>setTimeout(fn,120),{once:true});
  else setTimeout(fn,120);
}

function installHeroGuard(){
  if($('#rp3-hero-guard')) return;
  const style=document.createElement('style');
  style.id='rp3-hero-guard';
  style.textContent=`
    body.ez-revenue-hub .rp-hero h1 em.rp-hero-roleline{font-size:clamp(2.7rem,3.6vw,4rem)!important}
    @media(max-width:1120px){body.ez-revenue-hub .rp-hero h1 em.rp-hero-roleline{font-size:clamp(2.6rem,6.2vw,4.4rem)!important}}
    @media(max-width:700px){body.ez-revenue-hub .rp-hero h1 em.rp-hero-roleline{font-size:clamp(2.15rem,10.2vw,3.7rem)!important;white-space:normal!important}}
  `;
  document.head.appendChild(style);
}

function looksLikeLegacyPageMap(el){
  if(!el || el.nodeType!==1 || el.classList?.contains('rp3-page-nav')) return false;
  const text=(el.textContent||'').toUpperCase().replace(/\s+/g,' ');
  const needles=['PICK YOUR ROLE','MEASUREMENT','KPIS','DIAGNOSE','AI SIGNAL','PROGRAMS','CADENCE','RESOURCES','RULES'];
  const hits=needles.filter(n=>text.includes(n)).length;
  if(hits<6) return false;
  const style=getComputedStyle(el);
  const rect=el.getBoundingClientRect();
  return ['fixed','sticky','absolute'].includes(style.position) && rect.width>80 && rect.width<440 && rect.height>120;
}

function suppressLegacyNavigation(root=document){
  const known=['.ez-page-map','.ez-page-map-toggle','.page-map','.page-map-toggle','.rp-page-map','.rp-page-map-toggle'];
  known.forEach(sel=>{
    if(root.matches?.(sel)) root.classList.add('rp3-legacy-nav-hidden');
    $$(sel,root).forEach(el=>el.classList.add('rp3-legacy-nav-hidden'));
  });
  const candidates=[];
  if(root.matches?.('nav,aside,div')) candidates.push(root);
  candidates.push(...$$('nav,aside,div',root));
  candidates.forEach(el=>{if(looksLikeLegacyPageMap(el))el.classList.add('rp3-legacy-nav-hidden')});
}

function installPageGuide(){
  if($('.rp3-page-nav')) return;
  const nav=document.createElement('aside');
  nav.className='rp3-page-nav';
  nav.setAttribute('aria-label','Revenue Hub page guide');
  nav.innerHTML=`
    <button class="rp3-page-nav-toggle" type="button" aria-expanded="false" aria-controls="rp3-page-nav-panel">
      <span class="rp3-nav-icon" aria-hidden="true">☰</span><span>Page guide</span>
    </button>
    <nav class="rp3-page-nav-panel" id="rp3-page-nav-panel" aria-label="Jump to section">
      <button class="rp3-page-nav-close" type="button"><span>Page guide</span><span aria-hidden="true">×</span></button>
      ${navItems.map(([id,label])=>`<a href="#${id}" data-rp3-target="${id}">${label}</a>`).join('')}
    </nav>`;
  document.body.appendChild(nav);

  const toggle=$('.rp3-page-nav-toggle',nav);
  const close=$('.rp3-page-nav-close',nav);
  const setOpen=open=>{
    nav.classList.toggle('is-open',open);
    toggle.setAttribute('aria-expanded',String(open));
    toggle.querySelector('.rp3-nav-icon').textContent=open?'×':'☰';
  };
  toggle.addEventListener('click',()=>setOpen(!nav.classList.contains('is-open')));
  close.addEventListener('click',()=>{setOpen(false);toggle.focus()});
  $$('.rp3-page-nav-panel a',nav).forEach(a=>a.addEventListener('click',()=>setOpen(false)));
  document.addEventListener('click',e=>{if(nav.classList.contains('is-open')&&!nav.contains(e.target))setOpen(false)});
  document.addEventListener('keydown',e=>{if(e.key==='Escape'&&nav.classList.contains('is-open')){setOpen(false);toggle.focus()}});

  const links=new Map($$('.rp3-page-nav-panel a',nav).map(a=>[a.dataset.rp3Target,a]));
  const activate=id=>links.forEach((a,key)=>a.classList.toggle('is-active',key===id));
  if('IntersectionObserver' in window){
    const observer=new IntersectionObserver(entries=>{
      const visible=entries.filter(e=>e.isIntersecting).sort((a,b)=>b.intersectionRatio-a.intersectionRatio)[0];
      if(visible?.target?.id) activate(visible.target.id);
    },{rootMargin:'-18% 0px -62% 0px',threshold:[0,.05,.15,.3]});
    navItems.forEach(([id])=>{const section=document.getElementById(id);if(section)observer.observe(section)});
  }
  const initial=location.hash.slice(1);
  activate(links.has(initial)?initial:'role-paths');
}

function keepLegacyMapsSuppressed(){
  const observer=new MutationObserver(mutations=>{
    mutations.forEach(m=>m.addedNodes.forEach(node=>{if(node.nodeType===1)suppressLegacyNavigation(node)}));
  });
  observer.observe(document.body,{childList:true,subtree:true});
  setTimeout(()=>observer.disconnect(),12000);
}

function fixHeroLabel(){
  const roleline=$('.rp-hero h1 em');
  if(!roleline) return;
  roleline.classList.add('rp-hero-roleline');
  roleline.textContent='Revenue Professional?';
}

function init(){
  if(!document.body.classList.contains('ez-revenue-hub')) return;
  fixHeroLabel();
  installHeroGuard();
  suppressLegacyNavigation();
  installPageGuide();
  keepLegacyMapsSuppressed();
}
ready(init);
})();
