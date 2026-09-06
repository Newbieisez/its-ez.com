(function(){
  var brand=document.createElement('link');
  brand.rel='stylesheet';
  brand.href='cinematic.css?v=20260906b';
  document.head.appendChild(brand);
  var composition=document.createElement('link');
  composition.rel='stylesheet';
  composition.href='cinematic-v2.css?v=20260906';
  document.head.appendChild(composition);

  var ux=document.createElement('style');
  ux.textContent='html{scroll-padding-top:94px}section[id]{scroll-margin-top:94px}.site-preview-shell{position:relative;overflow:hidden;background:#111;border-radius:20px 20px 0 0}.site-preview-shell iframe{display:block;width:100%!important;height:470px!important;border:0!important;background:#111!important;pointer-events:none!important;user-select:none!important}.site-preview-overlay{position:absolute;inset:0;display:flex;align-items:flex-end;justify-content:space-between;gap:12px;padding:14px;pointer-events:none;background:linear-gradient(to bottom,transparent 58%,rgba(0,0,0,.78))}.site-preview-note{padding:7px 10px;border:1px solid rgba(255,255,255,.28);border-radius:999px;background:rgba(0,0,0,.72);color:#fff;font-size:9px;font-weight:900;letter-spacing:.08em;text-transform:uppercase;backdrop-filter:blur(8px)}.site-preview-open{pointer-events:auto!important;display:inline-flex;align-items:center;justify-content:center;min-height:42px;padding:10px 14px;border:1px solid #fff;border-radius:999px;background:#fff;color:#111!important;font-size:10px;font-weight:900;letter-spacing:.05em;text-transform:uppercase;box-shadow:0 8px 24px rgba(0,0,0,.22)}.site-preview-open:hover{background:#ef1616!important;border-color:#ef1616!important;color:#fff!important;transform:translateY(-2px)}.ai-revenue-proof{margin-top:42px}.ai-revenue-proof .media-proof-copy h3{font-size:clamp(30px,4vw,52px)!important}.ai-revenue-proof .proof-preview-kicker{display:inline-flex;align-items:center;gap:7px;margin-bottom:10px;color:#ef1616;font-size:9px;font-weight:900;letter-spacing:.12em;text-transform:uppercase}.ai-revenue-proof .proof-preview-kicker:before{content:"";width:20px;height:2px;background:#ef1616}.ai-revenue-proof .stack-group:first-child{background:#0b0b0c!important;color:#fff!important}.ai-revenue-proof .stack-group:first-child p{color:#d7d7d7!important}.proof-divider{height:1px;background:var(--line);margin:72px 0}.nav-links a[data-ai-revenue-link]{color:#ef1616!important;font-weight:900!important}.nav-links a.is-current{border-color:var(--hot)!important}@media(max-width:760px){html{scroll-padding-top:78px}section[id]{scroll-margin-top:78px}.site-preview-shell iframe{height:340px!important}.site-preview-note{display:none}.site-preview-open{font-size:9px}.proof-divider{margin:50px 0}}@media(prefers-reduced-motion:reduce){html{scroll-behavior:auto!important}}';
  document.head.appendChild(ux);

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

  function wrapPreview(frame,url,label){
    if(!frame||frame.closest('.site-preview-shell'))return;
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
    overlay.innerHTML='<span class="site-preview-note">Preview only · page scroll stays here</span><a class="site-preview-open" href="'+url+'" target="_blank" rel="noopener">'+label+' ↗</a>';
    shell.appendChild(overlay);
  }

  function enhanceShowcase(){
    var proof=document.getElementById('proof');
    if(!proof)return;
    var proofWrap=proof.querySelector('.wrap');
    if(!proofWrap)return;
    var intro=proofWrap.querySelector('.body-copy');
    if(intro)intro.textContent='These are live builds you can inspect. The previews stay visually live without trapping your scroll; open any experience when you want the full interactive version.';

    var nav=document.getElementById('nav-links');
    if(nav&&!nav.querySelector('[data-ai-revenue-link]')){
      var ai=document.createElement('a');
      ai.href='ai-systems.html#featured';
      ai.textContent='AI Revenue';
      ai.setAttribute('data-ai-revenue-link','true');
      var how=nav.querySelector('a[href="#operating"]');
      nav.insertBefore(ai,how||null);
    }

    var firstGrid=proofWrap.querySelector('.proof-grid-main');
    if(firstGrid&&!proofWrap.querySelector('.ai-revenue-proof')){
      var revenue=document.createElement('div');
      revenue.className='proof-grid-main ai-revenue-proof';
      revenue.innerHTML='<article class="media-proof"><div class="site-preview-shell"><iframe src="ai-systems.html#featured" title="ITS-EZ AI Revenue System preview" loading="lazy" tabindex="-1" scrolling="no" style="width:100%;height:470px;border:0;display:block;background:#111;pointer-events:none"></iframe><div class="site-preview-overlay"><span class="site-preview-note">Preview only · page scroll stays here</span><a class="site-preview-open" href="ai-systems.html#featured">Open AI Revenue System ↗</a></div></div><div class="media-proof-copy"><span class="proof-preview-kicker">NEW INTERACTIVE BUILD</span><h3>ITS-EZ AI Revenue System</h3><p>A complete operating map for using AI across the revenue lifecycle. Every workflow opens into the execution layer: inputs, AI role, human judgment, CRM capture, activation prompt, outputs, and KPIs.</p><div class="hero-actions"><a class="button button-orange" href="ai-systems.html#featured">Explore all 12 workflows ↗</a><a class="button button-light" href="ai-systems.html">View AI Systems Library ↗</a></div><p><strong>Built to activate:</strong> Research → Engage → Qualify → Close → Grow.</p></div></article><div class="stack-proof" aria-label="What the ITS-EZ AI Revenue System demonstrates"><article class="stack-group"><h3>12 real workflows</h3><p><strong>No decorative buttons</strong><br>Every module opens into a usable workflow with real execution detail.</p></article><article class="stack-group"><h3>CRM activation</h3><p><strong>Put the output somewhere useful</strong><br>Each workflow explains what belongs in Salesforce or the system of record.</p></article><article class="stack-group"><h3>Activation prompts</h3><p><strong>Copy it and run it</strong><br>Reusable prompts move the system from explanation into immediate action.</p></article><article class="stack-group"><h3>Human checkpoints</h3><p><strong>AI accelerates; people own the decision</strong><br>Every module identifies where verification, judgment, and approval remain human.</p></article><article class="stack-group"><h3>Measurement</h3><p><strong>Know whether it helped</strong><br>Each workflow includes KPIs tied to quality, speed, conversion, adoption, and revenue behavior.</p></article><article class="stack-group"><h3>Platform mapping</h3><p><strong>Use the right tool for the job</strong><br>The broader library maps work to ChatGPT, Claude, Gemini, Copilot, Perplexity, NotebookLM, Clay, Salesforce, Gong, and Highspot.</p></article></div>';
      var divider=document.createElement('div');
      divider.className='proof-divider';
      proofWrap.insertBefore(revenue,firstGrid);
      proofWrap.insertBefore(divider,firstGrid);
    }

    proof.querySelectorAll('.media-proof iframe').forEach(function(frame){
      if(frame.closest('.ai-revenue-proof'))return;
      var src=frame.getAttribute('src')||'';
      var label=src.indexOf('meddpicc')>-1?'Open MEDDPICC lab':'Open cybersecurity academy';
      wrapPreview(frame,src,label);
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
    enhanceShowcase();
    setTimeout(enhanceWork,80);
    setTimeout(enhanceShowcase,120);
    setTimeout(enhanceWork,300);
    setTimeout(enhanceShowcase,360);

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
  core.src='projects-core.js?v=20260906c';
  core.onload=enhance;
  core.onerror=enhance;
  document.head.appendChild(core);

  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',enhance,{once:true});
  else enhance();
}());