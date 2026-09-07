(function(){
  'use strict';

  var ASSET_VERSION='20260906-clean-v2';

  function loadStyles(){
    ['cinematic.css','cinematic-v2.css','hero-2026.css','homepage-extras.css'].forEach(function(href){
      if(document.querySelector('link[href^="'+href+'"]'))return;
      var link=document.createElement('link');
      link.rel='stylesheet';
      link.href=href+'?v='+ASSET_VERSION;
      document.head.appendChild(link);
    });
  }

  function buildHero(){
    var hero=document.querySelector('.hero');
    if(!hero)return;
    hero.className='hero hero-2026';
    hero.innerHTML='\
      <div class="wrap">\
        <div class="ez-hero-grid">\
          <div class="ez-hero-copy">\
            <p class="ez-hero-kicker">ENABLEMENT / AI / GTM / REAL IMPACT</p>\
            <h1 class="ez-hero-title"><span>PEOPLE</span><span>PERFORMANCE</span><em>POSSIBILITIES</em></h1>\
            <p class="ez-hero-lede">I help companies turn knowledge into measurable performance through enablement, AI, and GTM systems that actually work.</p>\
            <div class="ez-hero-actions"><a class="button button-orange" href="work-with-me.html">Work With Me →</a><a class="button button-light" href="#work">See My Work</a></div>\
            <div class="ez-impact-grid" aria-label="Selected impact metrics">\
              <div class="ez-impact"><strong>$24M+</strong><b>Pipeline + ARR influenced</b><span>SentinelOne · Twilio · Cofense</span></div>\
              <div class="ez-impact"><strong>40–50%</strong><b>Faster ramp time</b><span>Global teams + partners</span></div>\
              <div class="ez-impact"><strong>$700K+</strong><b>Annual tool savings</b><span>60 → 36 licenses consolidated</span></div>\
              <div class="ez-impact"><strong>4,000+</strong><b>Partners enabled</b><span>Worldwide</span></div>\
            </div>\
          </div>\
          <div class="ez-hero-portrait-wrap" aria-label="Erez Haimowicz portrait">\
            <img class="ez-hero-portrait" src="assets/ez-hero-black-shirt-v2.jpg?v='+ASSET_VERSION+'" alt="Erez Haimowicz smiling in a black shirt">\
            <div class="ez-hero-portrait-shade" aria-hidden="true"></div>\
          </div>\
        </div>\
        <div class="ez-client-strip" aria-label="Companies where Erez has led sales, revenue, or enablement work">\
          <div class="ez-client"><img src="sentinelone-logo.svg?v='+ASSET_VERSION+'" alt="SentinelOne"></div>\
          <div class="ez-client"><img src="assets/twilio-logo.svg?v='+ASSET_VERSION+'" alt="Twilio"></div>\
          <div class="ez-client"><img src="assets/tessian-logo.svg?v='+ASSET_VERSION+'" alt="Tessian"></div>\
          <div class="ez-client"><img src="assets/cofense-logo.svg?v='+ASSET_VERSION+'" alt="Cofense"></div>\
          <div class="ez-client"><img src="assets/mimecast-logo.svg?v='+ASSET_VERSION+'" alt="Mimecast"></div>\
          <div class="ez-client"><img src="assets/proofpoint-logo.svg?v='+ASSET_VERSION+'" alt="Proofpoint"></div>\
        </div>\
        <div class="ez-hero-mantra"><strong>Know it. Practice it. Prove it. Perform.</strong><span>PEOPLE · SYSTEMS · REAL IMPACT</span></div>\
      </div>';
  }

  function loadProjectCore(callback){
    if(window.__ezProjectCoreLoaded){callback();return;}
    var existing=document.querySelector('script[src^="projects-core.js"]');
    if(existing){existing.addEventListener('load',callback,{once:true});return;}
    var script=document.createElement('script');
    script.src='projects-core.js?v='+ASSET_VERSION;
    script.onload=function(){window.__ezProjectCoreLoaded=true;callback();};
    script.onerror=callback;
    document.head.appendChild(script);
  }

  function ensureAiRevenueNav(){
    var nav=document.getElementById('nav-links');
    if(!nav||nav.querySelector('[data-ai-revenue-link]'))return;
    var link=document.createElement('a');
    link.href='ai-systems.html#featured';
    link.textContent='AI Revenue';
    link.setAttribute('data-ai-revenue-link','true');
    var how=nav.querySelector('a[href="#operating"]');
    nav.insertBefore(link,how||null);
  }

  function enhanceWork(){
    var work=document.getElementById('work');
    if(!work)return;
    work.classList.add('cinematic-work');
    var cards=[].slice.call(work.querySelectorAll('.project-case'));
    cards.forEach(function(card,index){
      card.classList.toggle('featured-journey',index<2);
      if(index>1||card.querySelector('.journey-brand-mark'))return;
      var mark=document.createElement('div');
      mark.className='journey-brand-mark';
      mark.innerHTML=index===0
        ?'<img src="sentinelone-logo.svg?v='+ASSET_VERSION+'" alt="SentinelOne">'
        :'<img src="assets/twilio-logo.svg?v='+ASSET_VERSION+'" alt="Twilio">';
      var toggle=card.querySelector('.project-toggle');
      if(toggle)toggle.appendChild(mark);
    });
  }

  function wrapPreview(frame,label){
    if(!frame||frame.closest('.site-preview-shell'))return;
    var src=frame.getAttribute('src')||'';
    frame.style.pointerEvents='none';
    frame.setAttribute('tabindex','-1');
    frame.setAttribute('scrolling','no');
    frame.setAttribute('loading','lazy');
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
    loadStyles();
    buildHero();
    ensureAiRevenueNav();
    loadProjectCore(function(){
      enhanceWork();
      enhancePreviews();
      setupNavHighlight();
      window.setTimeout(enhanceWork,120);
      window.setTimeout(enhancePreviews,160);
    });
  }

  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});
  else init();
}());
