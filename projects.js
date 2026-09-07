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

  function lockUniversalReadability(){
    addStyle('ez-universal-readability',
      '.solve-card,.solve-card:hover,.framework-stage,.framework-stage:hover,.horizon,.horizon:hover,.stack-group,.stack-group:hover,.media-proof,.media-proof:hover,.fit-panel,.fit-panel:hover,.pathway-card,.pathway-card:hover{background:#101418!important;color:#fff!important;border-color:rgba(255,255,255,.18)!important;opacity:1!important;visibility:visible!important}'+
      '.solve-card h3,.framework-stage h3,.stack-group h3,.media-proof h3,.fit-panel h3,.pathway-card strong{color:#fff!important}'+
      '.solve-card p,.framework-stage p,.framework-stage span,.horizon p,.stack-group p,.media-proof-copy p,.fit-panel p,.pathway-card span{color:#c7cdd4!important}'+
      '.solve-card b,.framework-stage b,.horizon small,.media-proof-copy small,.pathway-card small{color:#ff4052!important}'+
      '.solve-card:hover,.framework-stage:hover,.horizon:hover,.stack-group:hover,.media-proof:hover,.fit-panel:hover,.pathway-card:hover{background:#171c21!important;border-color:rgba(239,35,60,.55)!important;transform:translateY(-2px)!important}'+
      '.framework-stage:nth-child(even),.solve-card:nth-child(2),.solve-card:nth-child(3){background:#101418!important}'+
      '.horizon strong{color:#fff!important}.horizon{border-bottom:4px solid #ef233c!important}'+
      '@media(max-width:900px){.solve-card,.framework-stage,.horizon,.stack-group,.fit-panel,.pathway-card{transform:none!important}}'
    );
  }

  function lockCaseStudyReadability(){
    addStyle('ez-case-study-readability',
      '#work.cinematic-work .project-list{gap:16px!important;margin-top:32px!important}'+
      '#work.cinematic-work .project-case{background:#0f1215!important;color:#fff!important;border:1px solid rgba(255,255,255,.22)!important;border-radius:16px!important;overflow:hidden!important}'+
      '#work.cinematic-work .project-case.is-open{background:#12161a!important}'+
      '#work.cinematic-work .project-toggle{width:100%!important;display:grid!important;grid-template-columns:44px minmax(0,1.55fr) minmax(230px,.85fr) auto!important;gap:22px!important;align-items:center!important;padding:26px 28px!important;background:#0f1215!important;color:#fff!important;text-align:left!important}'+
      '#work.cinematic-work .project-toggle:hover{background:#15191d!important}'+
      '#work.cinematic-work .project-index{color:#ff4052!important;font-size:12px!important;font-weight:900!important}'+
      '#work.cinematic-work .project-heading small{display:block!important;margin:0 0 8px!important;color:#bfc5cc!important;font-size:11px!important;font-weight:900!important;text-transform:uppercase!important}'+
      '#work.cinematic-work .project-heading h3{margin:0!important;color:#fff!important;font-size:clamp(26px,2.25vw,38px)!important;line-height:1.02!important;font-weight:900!important}'+
      '#work.cinematic-work .project-scan{display:block!important;max-width:760px!important;margin-top:14px!important;color:#c7cdd4!important;font-size:14px!important;line-height:1.58!important}'+
      '#work.cinematic-work .project-scan b{color:#ff4052!important}'+
      '#work.cinematic-work .project-metric{padding:8px 10px!important;background:#171b1f!important;color:#fff!important;border:1px solid rgba(239,35,60,.55)!important;border-radius:999px!important;font-size:11px!important;font-weight:900!important}'+
      '#work.cinematic-work .project-action,#work.cinematic-work .project-action-icon{color:#fff!important}'+
      '#work.cinematic-work .project-detail{background:#fff!important;color:#15171a!important}'+
      '@media(max-width:1100px){#work.cinematic-work .project-toggle{grid-template-columns:40px minmax(0,1fr)!important}#work.cinematic-work .project-metrics,#work.cinematic-work .project-action{grid-column:2!important}}'+
      '@media(max-width:700px){#work.cinematic-work .project-toggle{grid-template-columns:1fr!important;gap:14px!important;padding:22px!important}#work.cinematic-work .project-index,#work.cinematic-work .project-heading,#work.cinematic-work .project-metrics,#work.cinematic-work .project-action{grid-column:1!important}}'
    );
  }

  function lockRecommendationReadability(){
    addStyle('ez-recommendation-readability',
      '#recommendations .recommendation-card,#recommendations .recommendation-card:hover{background:#0f1215!important;color:#fff!important;border:1px solid rgba(255,255,255,.18)!important;opacity:1!important}'+
      '#recommendations .recommendation-card:hover{background:#15191d!important;border-color:rgba(239,35,60,.58)!important}'+
      '#recommendations .recommendation-card blockquote{color:#fff!important}'+
      '#recommendations .recommendation-name,#recommendations .recommendation-link{color:#ef233c!important}'+
      '#recommendations .recommendation-role{color:#bfc5cc!important}'
    );
  }

  function installMotionBreak(){
    if(document.querySelector('.ez-motion-break'))return;
    var hero=document.querySelector('.hero.hero-2026');
    if(!hero||!hero.parentNode)return;

    addStyle('ez-motion-break-style',
      '.ez-motion-break{position:relative;background:#030405;border-top:1px solid rgba(255,255,255,.10);border-bottom:1px solid rgba(255,255,255,.10);overflow:hidden}'+
      '.ez-motion-break-inner{width:min(1540px,calc(100% - 72px));margin:0 auto;padding:26px 0}'+
      '.ez-motion-break-frame{position:relative;overflow:hidden;border:1px solid rgba(255,255,255,.16);border-radius:20px;background:#050607;box-shadow:0 24px 70px rgba(0,0,0,.34);aspect-ratio:16/9}'+
      '.ez-motion-break video{display:block;width:100%;height:100%;object-fit:cover;background:#050607}'+
      '.ez-motion-break-label{position:absolute;left:24px;bottom:20px;z-index:3;display:flex;align-items:center;gap:10px;padding:9px 12px;background:rgba(3,4,5,.76);border:1px solid rgba(255,255,255,.18);border-radius:999px;color:#fff;font-size:10px;font-weight:900;letter-spacing:.16em;text-transform:uppercase;backdrop-filter:blur(8px);pointer-events:none}'+
      '.ez-motion-break-label:before{content:"";width:26px;height:2px;background:#ef233c}'+
      '.ez-motion-fallback{display:none;position:absolute;inset:0;z-index:4;align-items:center;justify-content:center;flex-direction:column;gap:14px;padding:28px;text-align:center;background:linear-gradient(135deg,#07090b,#17191c);color:#fff}'+
      '.ez-motion-fallback strong{font-size:24px}.ez-motion-fallback a{display:inline-flex;padding:11px 16px;border-radius:999px;background:#ef233c;color:#fff!important;font-size:12px;font-weight:900;text-decoration:none}'+
      '.ez-motion-break.is-error .ez-motion-fallback{display:flex}.ez-motion-break.is-error video,.ez-motion-break.is-error .ez-motion-break-label{display:none}'+
      '@media(max-width:900px){.ez-motion-break-inner{width:min(100% - 32px,1180px);padding:18px 0}.ez-motion-break-label{left:16px;bottom:14px}}'+
      '@media(max-width:620px){.ez-motion-break-inner{width:100%;padding:0}.ez-motion-break-frame{border-radius:0;border-left:0;border-right:0}.ez-motion-break-label{left:12px;bottom:10px;font-size:8px}}'
    );

    var section=document.createElement('section');
    section.className='ez-motion-break';
    section.setAttribute('aria-label','EZ Enablement motion reel');
    section.innerHTML='<div class="ez-motion-break-inner"><div class="ez-motion-break-frame"><video autoplay muted loop playsinline controls preload="metadata" poster="assets/las-vegas-hero-bg.jpg?v=20260907-video-poster"><source src="/motion_like_espn.mp4?v=20260907-motion-2" type="video/mp4">Your browser does not support HTML5 video.</video><div class="ez-motion-break-label">EZ Enablement · In Motion</div><div class="ez-motion-fallback"><strong>EZ Enablement · In Motion</strong><span>The reel could not start automatically.</span><a href="/motion_like_espn.mp4?v=20260907-motion-2" target="_blank" rel="noopener">Play the video ↗</a></div></div></div>';
    hero.parentNode.insertBefore(section,hero.nextSibling);

    var video=section.querySelector('video');
    if(!video)return;
    video.muted=true;
    video.defaultMuted=true;
    video.playsInline=true;
    video.addEventListener('loadeddata',function(){section.classList.remove('is-error');},{once:true});
    video.addEventListener('error',function(){section.classList.add('is-error');},{once:true});
    video.load();
    var playPromise=video.play();
    if(playPromise&&typeof playPromise.catch==='function'){
      playPromise.catch(function(){
        /* Autoplay may be blocked; controls and poster remain available. */
      });
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