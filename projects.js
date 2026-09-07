(function(){
  'use strict';

  var BRAND_ART={
    sentinelone:'sentinelone-logo.svg?v=20260907-readability',
    twilio:'assets/twilio-logo.svg?v=20260907-readability'
  };

  function addStyle(id,css){
    if(document.getElementById(id))return;
    var style=document.createElement('style');
    style.id=id;
    style.textContent=css;
    document.head.appendChild(style);
  }

  function lockHeroPolish(){
    addStyle('ez-hero-polish',
      '/* Hero polish: calmer portrait + one clean EZ / Las Vegas lockup */'+
      '.hero.hero-2026 .ez-hero-portrait{transform:scale(.87) translate(-3%,3%)!important;transform-origin:left bottom!important;object-position:left bottom!important;filter:saturate(.82) contrast(1.035) brightness(1.035)!important}'+
      '.hero.hero-2026 .ez-hero-portrait-wrap:before{background:radial-gradient(circle at 37% 22%,rgba(255,255,255,.095),transparent 25%),linear-gradient(90deg,rgba(2,3,4,.34),transparent 20%),linear-gradient(180deg,transparent 50%,rgba(2,3,4,.76) 100%)!important}'+
      '.hero.hero-2026 .ez-vegas-mark{right:10px!important;top:42px!important;z-index:8!important;width:250px!important;min-height:245px!important;padding:94px 8px 12px 22px!important;box-sizing:border-box!important;transform:none!important;background:linear-gradient(110deg,rgba(2,3,4,.90) 0%,rgba(2,3,4,.72) 46%,rgba(2,3,4,.18) 100%)!important;border-radius:20px!important}'+
      '.hero.hero-2026 .ez-vegas-mark strong{font-size:clamp(38px,2.65vw,54px)!important;line-height:.88!important;transform:rotate(-5deg)!important;white-space:nowrap!important}'+
      '.hero.hero-2026 .ez-vegas-mark span{margin-top:18px!important;margin-left:50px!important;font-size:10px!important;background:rgba(2,3,4,.30)!important}'+
      '.hero.hero-2026 .ez-vegas-mark:before{content:"EZ"!important;position:absolute!important;left:24px!important;top:22px!important;display:block!important;color:#fff!important;font-family:Arial,Helvetica,sans-serif!important;font-size:clamp(48px,3.8vw,70px)!important;font-weight:950!important;font-style:italic!important;letter-spacing:-.10em!important;line-height:.8!important;text-shadow:0 0 5px rgba(255,255,255,.92),0 0 12px rgba(239,35,60,.92),0 0 28px rgba(239,35,60,.68),18px 0 0 rgba(239,35,60,.90)!important;transform:skewX(-8deg)!important;white-space:nowrap!important}'+
      '@media(max-width:1180px){.hero.hero-2026 .ez-hero-portrait{transform:scale(.91) translate(-2%,2%)!important}.hero.hero-2026 .ez-vegas-mark{right:0!important;top:34px!important;width:220px!important;padding-top:84px!important}.hero.hero-2026 .ez-vegas-mark span{display:none!important}}'+
      '@media(max-width:900px){.hero.hero-2026 .ez-hero-portrait{transform:none!important;object-position:center 18%!important;filter:saturate(.84) contrast(1.04) brightness(1.02)!important}.hero.hero-2026 .ez-vegas-mark{display:none!important}}'
    );
  }

  function lockUniversalReadability(){
    addStyle('ez-universal-readability',
      '/* Keep every information card readable in every state. */'+
      '.solve-card,.solve-card:hover,.framework-stage,.framework-stage:hover,.horizon,.horizon:hover,.stack-group,.stack-group:hover,.media-proof,.media-proof:hover,.fit-panel,.fit-panel:hover,.pathway-card,.pathway-card:hover{background:#101418!important;color:#fff!important;border-color:rgba(255,255,255,.18)!important;opacity:1!important;visibility:visible!important}'+
      '.solve-card h3,.solve-card:hover h3,.framework-stage h3,.framework-stage:hover h3,.stack-group h3,.stack-group:hover h3,.media-proof h3,.media-proof:hover h3,.fit-panel h3,.fit-panel:hover h3,.pathway-card strong,.pathway-card:hover strong{color:#fff!important;opacity:1!important;visibility:visible!important}'+
      '.solve-card p,.solve-card:hover p,.framework-stage p,.framework-stage:hover p,.framework-stage span,.framework-stage:hover span,.horizon p,.horizon:hover p,.stack-group p,.stack-group:hover p,.media-proof-copy p,.media-proof:hover .media-proof-copy p,.fit-panel p,.fit-panel:hover p,.pathway-card span,.pathway-card:hover span{color:#c7cdd4!important;opacity:1!important;visibility:visible!important}'+
      '.solve-card b,.solve-card:hover b,.framework-stage b,.framework-stage:hover b,.horizon small,.horizon:hover small,.media-proof-copy small,.media-proof:hover .media-proof-copy small,.pathway-card small,.pathway-card:hover small{color:#ff4052!important;opacity:1!important;visibility:visible!important}'+
      '.stack-group strong,.stack-group:hover strong,.media-proof strong,.media-proof:hover strong{color:#fff!important}'+
      '.solve-card:hover,.framework-stage:hover,.horizon:hover,.stack-group:hover,.media-proof:hover,.fit-panel:hover,.pathway-card:hover{background:#171c21!important;border-color:rgba(239,35,60,.55)!important;transform:translateY(-2px)!important}'+
      '.solve-card *,.solve-card:hover *,.framework-stage *,.framework-stage:hover *,.horizon *,.horizon:hover *,.stack-group *,.stack-group:hover *,.media-proof *,.media-proof:hover *,.fit-panel *,.fit-panel:hover *,.pathway-card *,.pathway-card:hover *{opacity:1!important;visibility:visible!important}'+
      '.framework-stage:nth-child(even),.solve-card:nth-child(2),.solve-card:nth-child(3){background:#101418!important}'+
      '.framework-stage:nth-child(even):hover,.solve-card:nth-child(2):hover,.solve-card:nth-child(3):hover{background:#171c21!important}'+
      '.framework-stage{border-right:1px solid rgba(255,255,255,.18)!important}'+
      '.framework-stage:last-child{border-right:0!important}'+
      '.horizon strong{color:#fff!important}.horizon{border-bottom:4px solid #ef233c!important}'+
      '.stack-proof{background:transparent!important}'+
      '@media(max-width:900px){.solve-card,.framework-stage,.horizon,.stack-group,.fit-panel,.pathway-card{transform:none!important}}'
    );
  }

  function lockCaseStudyReadability(){
    addStyle('ez-case-study-readability',
      '#work.cinematic-work .project-list{gap:16px!important;margin-top:32px!important}'+
      '#work.cinematic-work .project-case{background:#0f1215!important;color:#fff!important;border:1px solid rgba(255,255,255,.22)!important;border-radius:16px!important;overflow:hidden!important;box-shadow:none!important}'+
      '#work.cinematic-work .project-case.is-open{background:#12161a!important;box-shadow:0 18px 46px rgba(0,0,0,.32)!important}'+
      '#work.cinematic-work .project-toggle{position:relative!important;width:100%!important;display:grid!important;grid-template-columns:44px minmax(0,1.55fr) minmax(230px,.85fr) auto!important;gap:22px!important;align-items:center!important;padding:26px 28px!important;min-height:0!important;background:#0f1215!important;color:#fff!important;text-align:left!important}'+
      '#work.cinematic-work .project-toggle:hover{background:#15191d!important}'+
      '#work.cinematic-work .project-index{align-self:start!important;padding-top:4px!important;color:#ff4052!important;font-size:12px!important;font-weight:900!important;letter-spacing:.10em!important}'+
      '#work.cinematic-work .project-heading small{display:block!important;margin:0 0 8px!important;color:#bfc5cc!important;font-size:11px!important;line-height:1.35!important;font-weight:900!important;letter-spacing:.10em!important;text-transform:uppercase!important}'+
      '#work.cinematic-work .project-heading h3{display:block!important;margin:0!important;color:#fff!important;font-size:clamp(26px,2.25vw,38px)!important;line-height:1.02!important;letter-spacing:-.045em!important;font-weight:900!important}'+
      '#work.cinematic-work .project-scan{display:block!important;max-width:760px!important;margin-top:14px!important;color:#c7cdd4!important;font-size:14px!important;line-height:1.58!important;font-weight:500!important}'+
      '#work.cinematic-work .project-scan b{color:#ff4052!important;font-size:11px!important;letter-spacing:.10em!important;font-weight:900!important}'+
      '#work.cinematic-work .project-metric{padding:8px 10px!important;background:#171b1f!important;color:#fff!important;border:1px solid rgba(239,35,60,.55)!important;border-radius:999px!important;font-size:11px!important;font-weight:900!important;white-space:nowrap!important}'+
      '#work.cinematic-work .project-action,#work.cinematic-work .project-action-icon{color:#fff!important}'+
      '#work.cinematic-work .project-detail{background:#fff!important;color:#15171a!important}'+
      '#work.cinematic-work .project-detail .project-lede{color:#15171a!important}'+
      '#work.cinematic-work .project-before-after p{font-size:16px!important;line-height:1.6!important}'+
      '#work.cinematic-work .project-block p,#work.cinematic-work .project-block ul{font-size:14px!important;line-height:1.68!important}'+
      '@media(max-width:1100px){#work.cinematic-work .project-toggle{grid-template-columns:40px minmax(0,1fr)!important}#work.cinematic-work .project-metrics,#work.cinematic-work .project-action{grid-column:2!important}}'+
      '@media(max-width:700px){#work.cinematic-work .project-toggle{grid-template-columns:1fr!important;gap:14px!important;padding:22px!important}#work.cinematic-work .project-index,#work.cinematic-work .project-heading,#work.cinematic-work .project-metrics,#work.cinematic-work .project-action{grid-column:1!important}}'
    );
  }

  function lockRecommendationReadability(){
    addStyle('ez-recommendation-readability',
      '#recommendations .recommendation-card,#recommendations .recommendation-card:hover{background:#0f1215!important;color:#fff!important;border:1px solid rgba(255,255,255,.18)!important;opacity:1!important;visibility:visible!important}'+
      '#recommendations .recommendation-card:hover{transform:translateY(-3px)!important;background:#15191d!important;border-color:rgba(239,35,60,.58)!important}'+
      '#recommendations .recommendation-card blockquote,#recommendations .recommendation-card:hover blockquote{color:#fff!important;opacity:1!important}'+
      '#recommendations .recommendation-name,#recommendations .recommendation-card:hover .recommendation-name{color:#ef233c!important}'+
      '#recommendations .recommendation-role,#recommendations .recommendation-card:hover .recommendation-role{color:#bfc5cc!important}'+
      '#recommendations .recommendation-link,#recommendations .recommendation-card:hover .recommendation-link{color:#ef233c!important}'+
      '#recommendations .recommendation-card:hover *{opacity:1!important;visibility:visible!important}'
    );
  }

  function installMotionBreak(){
    if(document.querySelector('.ez-motion-break'))return;
    var hero=document.querySelector('.hero.hero-2026');
    if(!hero||!hero.parentNode)return;

    addStyle('ez-motion-break-style',
      '.ez-motion-break{position:relative;background:#030405;border-top:1px solid rgba(255,255,255,.10);border-bottom:1px solid rgba(255,255,255,.10);overflow:hidden}'+
      '.ez-motion-break-inner{position:relative;width:min(1540px,calc(100% - 72px));margin:0 auto;padding:26px 0}'+
      '.ez-motion-break-frame{position:relative;overflow:hidden;border:1px solid rgba(255,255,255,.16);border-radius:20px;background:#050607;box-shadow:0 24px 70px rgba(0,0,0,.34)}'+
      '.ez-motion-break video{display:block;width:100%;height:clamp(280px,34vw,520px);object-fit:cover;object-position:center center;background:#050607}'+
      '.ez-motion-break-frame:after{content:"";position:absolute;inset:0;pointer-events:none;background:linear-gradient(180deg,rgba(0,0,0,.02),rgba(0,0,0,.12)),linear-gradient(90deg,rgba(239,35,60,.07),transparent 22%,transparent 78%,rgba(239,35,60,.07))}'+
      '.ez-motion-break-label{position:absolute;left:28px;bottom:24px;z-index:2;display:flex;align-items:center;gap:12px;padding:9px 12px;background:rgba(3,4,5,.72);border:1px solid rgba(255,255,255,.16);border-radius:999px;color:#fff;font-size:10px;font-weight:900;letter-spacing:.16em;text-transform:uppercase;backdrop-filter:blur(8px)}'+
      '.ez-motion-break-label:before{content:"";display:block;width:28px;height:2px;background:#ef233c}'+
      '@media(max-width:900px){.ez-motion-break-inner{width:min(100% - 32px,1180px);padding:18px 0}.ez-motion-break video{height:clamp(220px,52vw,420px)}.ez-motion-break-label{left:18px;bottom:16px}}'+
      '@media(max-width:620px){.ez-motion-break-inner{width:100%;padding:0}.ez-motion-break-frame{border-radius:0;border-left:0;border-right:0}.ez-motion-break video{height:56vw;min-height:210px}.ez-motion-break-label{left:14px;bottom:12px;font-size:8px}}'+
      '@media(prefers-reduced-motion:reduce){.ez-motion-break video{display:none}.ez-motion-break-frame{min-height:180px;background:linear-gradient(135deg,#080a0c,#17191c)}}'
    );

    var section=document.createElement('section');
    section.className='ez-motion-break';
    section.setAttribute('aria-label','EZ Enablement motion reel');
    section.innerHTML='<div class="ez-motion-break-inner"><div class="ez-motion-break-frame"><video autoplay muted loop playsinline preload="auto" aria-hidden="true"><source src="motion_like_espn.mp4?v=20260907-motion" type="video/mp4"></video><div class="ez-motion-break-label">EZ Enablement · In Motion</div></div></div>';
    hero.parentNode.insertBefore(section,hero.nextSibling);

    var video=section.querySelector('video');
    if(video){
      video.muted=true;
      video.defaultMuted=true;
      video.playsInline=true;
      var playPromise=video.play();
      if(playPromise&&typeof playPromise.catch==='function')playPromise.catch(function(){});
    }
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

  function init(){
    lockHeroPolish();
    lockUniversalReadability();
    lockCaseStudyReadability();
    lockRecommendationReadability();
    installMotionBreak();
    enhanceWork();
    enhancePreviews();
    setupNavHighlight();
  }

  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});
  else init();
}());