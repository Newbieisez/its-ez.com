(function(){
  var brand=document.createElement('link');
  brand.rel='stylesheet';
  brand.href='cinematic.css?v=20260906';
  document.head.appendChild(brand);

  function enhance(){
    if(window.__ezCinematicEnhancements)return;
    window.__ezCinematicEnhancements=true;

    /* Always open at the actual top unless the visitor intentionally followed a hash link. */
    if(!window.location.hash){
      if('scrollRestoration' in history)history.scrollRestoration='manual';
      window.scrollTo(0,0);
      requestAnimationFrame(function(){window.scrollTo(0,0)});
    }

    /* The old four-pill focus selector read like controls and distracted from the hero. */
    var focus=document.querySelector('.hero-kicker');
    if(focus)focus.remove();

    /* Remove the intermediate four-tile capability block. The work should carry the proof. */
    var solveGrid=document.querySelector('.positioning .solve-grid');
    if(solveGrid)solveGrid.remove();

    var work=document.getElementById('work');
    if(work){
      var title=work.querySelector('.section-title');
      var intro=work.querySelector('.body-copy');
      if(title)title.textContent='View my journey of building.';
      if(intro)intro.textContent='Real GTM challenges, the operational architectures designed to solve them, and the verified business outcomes.';
    }

    /* Keep live-site previews from hijacking page scrolling. */
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