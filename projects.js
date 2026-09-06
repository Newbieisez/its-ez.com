(function(){
  var brand=document.createElement('link');
  brand.rel='stylesheet';
  brand.href='cinematic.css?v=20260906b';
  document.head.appendChild(brand);
  var composition=document.createElement('link');
  composition.rel='stylesheet';
  composition.href='cinematic-v2.css?v=20260906';
  document.head.appendChild(composition);

  function buildHero(){
    var hero=document.querySelector('.hero');
    if(!hero||hero.dataset.cinematicBuilt==='true')return;
    hero.dataset.cinematicBuilt='true';
    hero.innerHTML='\
      <div class="wrap cinematic-hero-grid">\
        <div class="cinematic-hero-copy">\
          <p class="cinematic-kicker"><span></span>GTM SYSTEMS BUILDER</p>\
          <h1>TURN <em>ENABLEMENT</em> INTO REVENUE.</h1>\
          <p class="cinematic-lede">I design and build GTM systems — powered by people, process and AI — that help revenue teams learn faster, execute better, and win more.</p>\
          <div class="cinematic-actions"><a class="button button-orange" href="#work">View my work →</a><a class="button button-light" href="#contact">Book a conversation</a></div>\
          <div class="cinematic-signature" aria-label="Erez Haimowicz"><strong>EZ</strong><span>EREZ HAIMOWICZ</span></div>\
        </div>\
        <div class="cinematic-portrait-wrap">\
          <div class="cinematic-portrait-glow" aria-hidden="true"></div>\
          <img class="cinematic-portrait" src="headshot%202025.jpg" alt="Erez Haimowicz">\
          <div class="cinematic-wall-copy" aria-hidden="true"><span>PEOPLE</span><span>SYSTEMS</span><span>PERFORMANCE</span><span>ALWAYS</span><b></b></div>\
        </div>\
      </div>';
  }

  function enhanceWork(){
    var work=document.getElementById('work');
    if(!work)return;
    var title=work.querySelector('.section-title');
    var intro=work.querySelector('.body-copy');
    if(title)title.textContent='View my journey of building.';
    if(intro)intro.textContent='Real GTM challenges, the operational architectures designed to solve them, and the verified business outcomes.';
    work.classList.add('cinematic-work');
    var list=work.querySelector('.work-list');
    if(!list)return;
    var cards=[].slice.call(list.querySelectorAll('.project-case'));
    cards.forEach(function(card,i){
      card.classList.toggle('featured-journey',i<2);
      if(i===0&&!card.querySelector('.journey-brand-mark')){
        var mark=document.createElement('div');
        mark.className='journey-brand-mark sentinelone';
        mark.innerHTML='<img src="sentinelone-logo.svg" alt="SentinelOne">';
        var toggle=card.querySelector('.project-toggle');
        if(toggle)toggle.appendChild(mark);
      }
      if(i===1&&!card.querySelector('.journey-brand-mark')){
        var mark2=document.createElement('div');
        mark2.className='journey-brand-mark twilio';
        mark2.innerHTML='<strong>twilio</strong>';
        var toggle2=card.querySelector('.project-toggle');
        if(toggle2)toggle2.appendChild(mark2);
      }
    });
  }

  function enhance(){
    if(window.__ezCinematicEnhancements)return;
    window.__ezCinematicEnhancements=true;

    if(!window.location.hash){
      if('scrollRestoration' in history)history.scrollRestoration='manual';
      window.scrollTo(0,0);
      requestAnimationFrame(function(){window.scrollTo(0,0)});
    }

    buildHero();

    var solveGrid=document.querySelector('.positioning .solve-grid');
    if(solveGrid)solveGrid.remove();
    var positioning=document.querySelector('.positioning');
    if(positioning)positioning.classList.add('cinematic-positioning');

    enhanceWork();
    setTimeout(enhanceWork,80);
    setTimeout(enhanceWork,300);

    document.querySelectorAll('#proof iframe').forEach(function(frame){
      frame.style.pointerEvents='none';
      frame.setAttribute('tabindex','-1');
      frame.setAttribute('loading','lazy');
    });

    var nav=document.getElementById('nav-links');
    if(nav&&'IntersectionObserver' in window){
      var links=[].slice.call(nav.querySelectorAll('a[href^="#"]'));
      var sections=links.map(function(a){return document.querySelector(a.getAttribute('href'))}).filter(Boolean);
      var observer=new IntersectionObserver(function(entries){
        entries.forEach(function(entry){
          if(!entry.isIntersecting)return;
          links.forEach(function(a){a.classList.toggle('is-current',a.getAttribute('href')==='#'+entry.target.id)});
        });
      },{rootMargin:'-28% 0px -62% 0px',threshold:0});
      sections.forEach(function(section){observer.observe(section)});
    }
  }

  var core=document.createElement('script');
  core.src='projects-core.js?v=20260906';
  core.onload=enhance;
  core.onerror=enhance;
  document.head.appendChild(core);

  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',enhance,{once:true});
  else enhance();
}());