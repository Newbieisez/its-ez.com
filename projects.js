(function(){
  'use strict';

  var BRAND_ART={
    sentinelone:'https://mms.businesswire.com/media/20240918271872/en/2042532/23/SentinelOne_Logo.jpg',
    twilio:'https://logospng.org/wp-content/uploads/twilio-768x432.png'
  };

  function enhanceHero(){
    var hero=document.querySelector('.hero-2026');
    if(!hero)return;

    var kicker=hero.querySelector('.ez-hero-kicker');
    var title=hero.querySelector('.ez-hero-title');
    var lede=hero.querySelector('.ez-hero-lede');
    var copy=hero.querySelector('.ez-hero-copy');
    var impacts=hero.querySelector('.ez-impact-grid');
    var portraitWrap=hero.querySelector('.ez-hero-portrait-wrap');

    if(kicker)kicker.textContent="ENABLE WHAT’S NEXT";
    if(title)title.innerHTML='<span>BUILDING</span><span>REVENUE SYSTEMS</span><em>THAT SCALE</em>';
    if(lede)lede.textContent='I help companies turn knowledge into measurable performance through enablement, AI, and GTM systems that actually work.';

    if(copy&&!copy.querySelector('.ez-hero-domains')){
      var domains=document.createElement('div');
      domains.className='ez-hero-domains';
      domains.setAttribute('aria-label','Areas of expertise');
      domains.innerHTML='<span>Sales</span><span>Revenue</span><span>GTM</span><span>Partner Enablement</span><span>AI</span>';
      if(lede)copy.insertBefore(domains,lede);
    }

    if(impacts){
      impacts.classList.add('ez-value-grid');
      impacts.setAttribute('aria-label','Business outcomes');
      impacts.innerHTML=''
        +'<div class="ez-impact"><strong aria-hidden="true">▥</strong><b>Faster Ramp</b><span>Get people productive sooner.</span></div>'
        +'<div class="ez-impact"><strong aria-hidden="true">◎</strong><b>Better Execution</b><span>Turn methodology into field behavior.</span></div>'
        +'<div class="ez-impact"><strong aria-hidden="true">AI</strong><b>AI-Powered Workflows</b><span>Remove friction with useful automation.</span></div>'
        +'<div class="ez-impact"><strong aria-hidden="true">↗</strong><b>Measurable Growth</b><span>Connect readiness to business outcomes.</span></div>';
    }

    if(portraitWrap&&!portraitWrap.querySelector('.ez-vegas-mark')){
      var vegas=document.createElement('div');
      vegas.className='ez-vegas-mark';
      vegas.innerHTML='<strong>Las Vegas</strong><span>PEOPLE.<br>SYSTEMS.<br>REVENUE.<br>ALWAYS.</span>';
      portraitWrap.appendChild(vegas);
    }

    var brand=document.querySelector('.site-header .brand');
    if(brand&&!brand.querySelector('.ez-brand-lockup')){
      brand.innerHTML='<span class="ez-brand-lockup"><b>EZ</b><small>ENABLEMENT</small></span>';
    }
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
        ?'<img src="'+BRAND_ART.sentinelone+'" alt="SentinelOne">'
        :'<img src="'+BRAND_ART.twilio+'" alt="Twilio">';

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
      var label=src.indexOf('meddpicc')>-1
        ?'Open MEDDPICC lab'
        :src.indexOf('human-threat')>-1
          ?'Open cybersecurity academy'
          :'Open experience';
      wrapPreview(frame,label);
    });
  }

  function setupNavHighlight(){
    var nav=document.getElementById('nav-links');
    if(!nav||!('IntersectionObserver' in window))return;

    var links=[].slice.call(nav.querySelectorAll('a[href^="#"]'));
    var sections=links.map(function(link){
      return document.querySelector(link.getAttribute('href'));
    }).filter(Boolean);

    if(!sections.length)return;

    var observer=new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if(!entry.isIntersecting)return;
        links.forEach(function(link){
          link.classList.toggle('is-current',link.getAttribute('href')==='#'+entry.target.id);
        });
      });
    },{rootMargin:'-28% 0px -62% 0px',threshold:0});

    sections.forEach(function(section){observer.observe(section);});
  }

  function init(){
    enhanceHero();
    enhanceWork();
    enhancePreviews();
    setupNavHighlight();
  }

  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});
  else init();
}());
