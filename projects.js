(function(){
  'use strict';

  var BRAND_ART={
    sentinelone:'sentinelone-logo.svg?v=20260907-readability',
    twilio:'assets/twilio-logo.svg?v=20260907-readability'
  };

  function lockHeroPolish(){
    if(document.getElementById('ez-hero-polish'))return;
    var style=document.createElement('style');
    style.id='ez-hero-polish';
    style.textContent='\
/* Hero polish: calmer portrait treatment + separate EZ and Las Vegas neon marks */\
.hero.hero-2026 .ez-hero-portrait{transform:scale(.97) translateY(4px)!important;transform-origin:center bottom!important;filter:saturate(.82) contrast(1.045) brightness(1.025)!important}\
.hero.hero-2026 .ez-hero-portrait-wrap:before{background:radial-gradient(circle at 54% 24%,rgba(255,255,255,.085),transparent 27%),linear-gradient(90deg,rgba(2,3,4,.48),transparent 19%),linear-gradient(180deg,transparent 52%,rgba(2,3,4,.74) 100%)!important}\
.hero.hero-2026 .ez-vegas-mark{right:2px!important;top:112px!important;z-index:8!important;transform:none!important}\
.hero.hero-2026 .ez-vegas-mark strong{font-size:clamp(38px,2.75vw,55px)!important;line-height:.86!important;transform:rotate(-5deg)!important}\
.hero.hero-2026 .ez-vegas-mark span{margin-top:16px!important;margin-left:74px!important;font-size:10px!important;background:rgba(2,3,4,.36)!important}\
.hero.hero-2026 .ez-vegas-mark:before{content:"EZ"!important;position:absolute!important;right:215px!important;top:-66px!important;display:block!important;color:#fff!important;font-family:Arial,Helvetica,sans-serif!important;font-size:clamp(48px,3.7vw,70px)!important;font-weight:950!important;font-style:italic!important;letter-spacing:-.10em!important;line-height:.8!important;text-shadow:0 0 5px rgba(255,255,255,.95),0 0 11px rgba(239,35,60,.95),0 0 26px rgba(239,35,60,.72),18px 0 0 rgba(239,35,60,.92)!important;transform:skewX(-8deg)!important;white-space:nowrap!important}\
@media(max-width:1180px){.hero.hero-2026 .ez-vegas-mark{top:94px!important}.hero.hero-2026 .ez-vegas-mark:before{right:175px!important;top:-58px!important}.hero.hero-2026 .ez-vegas-mark span{display:none!important}}\
@media(max-width:900px){.hero.hero-2026 .ez-hero-portrait{transform:none!important;filter:saturate(.84) contrast(1.04) brightness(1.02)!important}.hero.hero-2026 .ez-vegas-mark{display:none!important}}';
    document.head.appendChild(style);
  }

  function lockCaseStudyReadability(){
    if(document.getElementById('ez-case-study-readability'))return;
    var style=document.createElement('style');
    style.id='ez-case-study-readability';
    style.textContent='\
#work.cinematic-work .project-list{gap:16px!important;margin-top:32px!important}\
#work.cinematic-work .project-case{background:#0f1215!important;color:#fff!important;border:1px solid rgba(255,255,255,.22)!important;border-radius:16px!important;overflow:hidden!important;box-shadow:none!important}\
#work.cinematic-work .project-case.is-open{background:#12161a!important;box-shadow:0 18px 46px rgba(0,0,0,.32)!important}\
#work.cinematic-work .project-toggle{position:relative!important;width:100%!important;display:grid!important;grid-template-columns:44px minmax(0,1.55fr) minmax(230px,.85fr) auto!important;gap:22px!important;align-items:center!important;padding:26px 28px!important;min-height:0!important;background:#0f1215!important;color:#fff!important;text-align:left!important}\
#work.cinematic-work .project-toggle:hover{background:#15191d!important}\
#work.cinematic-work .project-index{align-self:start!important;padding-top:4px!important;color:#ff4052!important;font-size:12px!important;font-weight:900!important;letter-spacing:.10em!important}\
#work.cinematic-work .project-heading{min-width:0!important}\
#work.cinematic-work .project-heading small{display:block!important;margin:0 0 8px!important;color:#bfc5cc!important;font-size:11px!important;line-height:1.35!important;font-weight:900!important;letter-spacing:.10em!important;text-transform:uppercase!important}\
#work.cinematic-work .project-heading h3{display:block!important;margin:0!important;color:#fff!important;font-size:clamp(26px,2.25vw,38px)!important;line-height:1.02!important;letter-spacing:-.045em!important;font-weight:900!important;overflow-wrap:anywhere!important}\
#work.cinematic-work .project-scan{display:block!important;max-width:760px!important;margin-top:14px!important;color:#c7cdd4!important;font-size:14px!important;line-height:1.58!important;font-weight:500!important}\
#work.cinematic-work .project-scan b{color:#ff4052!important;font-size:11px!important;letter-spacing:.10em!important;font-weight:900!important}\
#work.cinematic-work .project-metrics{display:flex!important;flex-wrap:wrap!important;gap:8px!important;align-content:center!important;min-width:0!important}\
#work.cinematic-work .project-metric{padding:8px 10px!important;background:#171b1f!important;color:#fff!important;border:1px solid rgba(239,35,60,.55)!important;border-radius:999px!important;font-size:11px!important;line-height:1.2!important;font-weight:900!important;white-space:nowrap!important}\
#work.cinematic-work .project-action{display:flex!important;align-items:center!important;gap:9px!important;color:#fff!important;font-size:11px!important;font-weight:900!important;letter-spacing:.08em!important;text-transform:uppercase!important;white-space:nowrap!important}\
#work.cinematic-work .project-action-icon{display:grid!important;place-items:center!important;width:34px!important;height:34px!important;border:1px solid rgba(255,255,255,.62)!important;border-radius:50%!important;color:#fff!important;font-size:19px!important}\
#work.cinematic-work .project-case.is-open .project-toggle,#work.cinematic-work .project-case.is-open .project-toggle *{color:#fff!important}\
#work.cinematic-work .project-case.is-open .project-metric{background:#ef233c!important;color:#fff!important;border-color:#ef233c!important}\
#work.cinematic-work .project-case.is-open .project-action-icon{background:#ef233c!important;color:#fff!important;border-color:#ef233c!important}\
#work.cinematic-work .journey-brand-mark{display:flex!important;align-items:center!important;margin-top:14px!important;height:24px!important;opacity:.78!important}\
#work.cinematic-work .journey-brand-mark img{display:block!important;max-width:120px!important;max-height:22px!important;object-fit:contain!important;filter:grayscale(1) brightness(0) invert(1)!important}\
#work.cinematic-work .project-detail{background:#fff!important;color:#15171a!important}\
#work.cinematic-work .project-detail .project-lede{color:#15171a!important}\
#work.cinematic-work .project-before-after p{font-size:16px!important;line-height:1.6!important}\
#work.cinematic-work .project-block p,#work.cinematic-work .project-block ul{font-size:14px!important;line-height:1.68!important}\
@media(max-width:1100px){#work.cinematic-work .project-toggle{grid-template-columns:40px minmax(0,1fr)!important}#work.cinematic-work .project-metrics,#work.cinematic-work .project-action{grid-column:2!important}#work.cinematic-work .project-action{justify-self:start!important}}\
@media(max-width:700px){#work.cinematic-work .project-toggle{grid-template-columns:1fr!important;gap:14px!important;padding:22px!important}#work.cinematic-work .project-index,#work.cinematic-work .project-heading,#work.cinematic-work .project-metrics,#work.cinematic-work .project-action{grid-column:1!important}#work.cinematic-work .project-heading h3{font-size:28px!important}#work.cinematic-work .project-scan{font-size:14px!important}#work.cinematic-work .project-metric{font-size:10px!important}}';
    document.head.appendChild(style);
  }

  function enhanceWork(){
    var work=document.getElementById('work');
    if(!work)return;
    work.classList.add('cinematic-work');

    var cards=[].slice.call(work.querySelectorAll('.project-case'));
    cards.forEach(function(card,index){
      card.classList.toggle('featured-journey',index<3);
      if(index>1||card.querySelector('.journey-brand-mark'))return;
      var mark=document.createElement('div');
      mark.className='journey-brand-mark';
      mark.innerHTML='<img src="'+(index===0?BRAND_ART.sentinelone:BRAND_ART.twilio)+'" alt="'+(index===0?'SentinelOne':'Twilio')+'">';
      var heading=card.querySelector('.project-heading');
      if(heading)heading.appendChild(mark);
    });
  }

  function wrapPreview(frame,label){
    if(!frame||frame.closest('.site-preview-shell'))return;
    var src=frame.getAttribute('src')||'';
    frame.style.pointerEvents='none';
    frame.setAttribute('tabindex','-1');
    frame.setAttribute('scrolling','no');
    var shell=document.createElement('div');
    shell.className='site-preview-shell';
    frame.parentNode.insertBefore(shell,frame);
    shell.appendChild(frame);
    var overlay=document.createElement('div');
    overlay.className='site-preview-overlay';
    overlay.innerHTML='<a class="site-preview-open" href="'+src+'" target="_blank" rel="noopener">'+label+' ↗</a>';
    shell.appendChild(overlay);
  }

  function enhancePreviews(){
    var proof=document.getElementById('proof');
    if(!proof)return;
    proof.querySelectorAll('.media-proof iframe').forEach(function(frame){
      var src=frame.getAttribute('src')||'';
      var label=src.indexOf('meddpicc')>-1?'Open MEDDPICC lab':src.indexOf('human-threat')>-1?'Open cybersecurity academy':'Open experience';
      wrapPreview(frame,label);
    });
  }

  function setupNavHighlight(){
    var nav=document.getElementById('nav-links');
    if(!nav||!('IntersectionObserver' in window))return;
    var links=[].slice.call(nav.querySelectorAll('a[href^="#"]'));
    var sections=links.map(function(link){return document.querySelector(link.getAttribute('href'));}).filter(Boolean);
    if(!sections.length)return;
    var observer=new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if(!entry.isIntersecting)return;
        links.forEach(function(link){link.classList.toggle('is-current',link.getAttribute('href')==='#'+entry.target.id);});
      });
    },{rootMargin:'-28% 0px -62% 0px',threshold:0});
    sections.forEach(function(section){observer.observe(section);});
  }

  function init(){lockHeroPolish();lockCaseStudyReadability();enhanceWork();enhancePreviews();setupNavHighlight();}
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});
  else init();
}());