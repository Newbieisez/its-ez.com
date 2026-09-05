(function(){
  function runEnhancements(){
    if(window.__ezMainSiteEnhancements)return;
    window.__ezMainSiteEnhancements=true;

    var style=document.createElement('style');
    style.textContent='html{scroll-padding-top:96px}section[id]{scroll-margin-top:96px}.nav-links a.is-current{border-color:var(--hot)!important;color:var(--ink)!important}.hero-proof{display:grid;grid-template-columns:auto 1fr auto 1fr;gap:16px 20px;align-items:center;margin-top:28px;padding:18px 20px;border:1px solid #171717;background:#0b0b0c;color:#fff;max-width:760px}.hero-proof-label{color:#ff6470;font-size:9px;font-weight:900;letter-spacing:.14em;text-transform:uppercase;white-space:nowrap}.hero-proof strong{display:block;color:#fff;font-size:clamp(24px,3vw,38px);line-height:.95;letter-spacing:-.045em}.hero-proof span{display:block;margin-top:4px;color:#c9c9cd;font-size:11px;line-height:1.35}.hero-proof-divider{width:1px;height:44px;background:#414146}.site-preview-shell{position:relative;overflow:hidden;min-height:430px;background:#111;border-bottom:1px solid var(--ink)}.site-preview-shell iframe{width:100%!important;height:500px!important;display:block!important;border:0!important;background:#111!important;pointer-events:none!important;user-select:none!important}.site-preview-overlay{position:absolute;inset:0;z-index:4;display:flex;align-items:flex-end;justify-content:space-between;gap:12px;padding:16px;pointer-events:none;background:linear-gradient(to bottom,transparent 58%,rgba(0,0,0,.78))}.site-preview-note{pointer-events:none;padding:8px 10px;border:1px solid rgba(255,255,255,.38);border-radius:999px;background:rgba(0,0,0,.76);color:#fff;font-size:9px;font-weight:900;letter-spacing:.08em;text-transform:uppercase;backdrop-filter:blur(8px)}.site-preview-open{pointer-events:auto!important;display:inline-flex;align-items:center;justify-content:center;min-height:42px;padding:10px 14px;border:1px solid #fff;border-radius:999px;background:#fff;color:#111!important;font-size:10px;font-weight:900;letter-spacing:.05em;text-transform:uppercase;box-shadow:0 8px 24px rgba(0,0,0,.22)}.site-preview-open:hover{background:var(--hot);border-color:var(--hot);color:#111!important;transform:translateY(-2px)}.proof-preview-kicker{display:inline-flex;align-items:center;gap:7px;margin-bottom:10px;color:var(--hot);font-size:9px;font-weight:900;letter-spacing:.12em;text-transform:uppercase}.proof-preview-kicker:before{content:"";width:20px;height:2px;background:var(--hot)}.ai-revenue-proof{margin-top:38px}.ai-revenue-proof .media-proof-copy h3{font-size:clamp(30px,4vw,52px)!important}.ai-revenue-proof .stack-group:first-child{background:var(--ink)!important;color:#fff!important}.ai-revenue-proof .stack-group:first-child p{color:#d7d7d7!important}.proof-divider{height:1px;background:var(--line);margin:72px 0}.nav-links a[data-ai-revenue-link]{color:var(--hot)!important;font-weight:900!important}@media(max-width:760px){html{scroll-padding-top:78px}section[id]{scroll-margin-top:78px}.hero-proof{grid-template-columns:1fr 1fr;gap:14px;margin-top:24px}.hero-proof-label{grid-column:1/-1}.hero-proof-divider{display:none}.site-preview-shell{min-height:330px}.site-preview-shell iframe{height:360px!important}.site-preview-overlay{padding:12px}.site-preview-note{display:none}.site-preview-open{min-height:40px;font-size:9px}.proof-divider{margin:50px 0}}@media(prefers-reduced-motion:reduce){html{scroll-behavior:auto!important}}';
    document.head.appendChild(style);

    var navLinks=document.getElementById('nav-links');
    if(navLinks&&!navLinks.querySelector('[data-ai-revenue-link]')){
      var aiLink=document.createElement('a');
      aiLink.href='ai-systems.html#featured';
      aiLink.textContent='AI Revenue';
      aiLink.setAttribute('data-ai-revenue-link','true');
      var howLink=navLinks.querySelector('a[href="#operating"]');
      navLinks.insertBefore(aiLink,howLink||null);
    }

    var hero=document.querySelector('.hero');
    var heroAvailability=hero&&hero.querySelector('.hero-availability');
    if(heroAvailability&&!hero.querySelector('.hero-proof')){
      var heroProof=document.createElement('div');
      heroProof.className='hero-proof';
      heroProof.setAttribute('aria-label','Selected career impact');
      heroProof.innerHTML='<div class="hero-proof-label">SELECTED IMPACT</div><div><strong>$13M</strong><span>Partner pipeline influenced at SentinelOne</span></div><div class="hero-proof-divider" aria-hidden="true"></div><div><strong>40–50%</strong><span>Faster partner ramp at SentinelOne</span></div>';
      heroAvailability.insertAdjacentElement('afterend',heroProof);
    }

    function wrapPreview(frame,url,label){
      if(!frame||frame.closest('.site-preview-shell'))return;
      frame.setAttribute('tabindex','-1');
      frame.setAttribute('scrolling','no');
      frame.setAttribute('loading','lazy');
      var shell=document.createElement('div');
      shell.className='site-preview-shell';
      frame.parentNode.insertBefore(shell,frame);
      shell.appendChild(frame);
      var overlay=document.createElement('div');
      overlay.className='site-preview-overlay';
      var note=document.createElement('span');
      note.className='site-preview-note';
      note.textContent='Preview mode · scrolling stays on this page';
      var open=document.createElement('a');
      open.className='site-preview-open';
      open.href=url;
      open.target='_blank';
      open.rel='noopener';
      open.textContent=label+' ↗';
      overlay.appendChild(note);
      overlay.appendChild(open);
      shell.appendChild(overlay);
    }

    var proof=document.getElementById('proof');
    if(proof){
      var proofWrap=proof.querySelector('.wrap');
      var proofIntro=proofWrap&&proofWrap.querySelector('.body-copy');
      if(proofIntro)proofIntro.textContent='These are live builds you can inspect. The previews stay visually live without trapping your scroll; open any experience in a full tab when you want to interact with it.';

      var firstGrid=proofWrap&&proofWrap.querySelector('.proof-grid-main');
      if(firstGrid&&!proofWrap.querySelector('.ai-revenue-proof')){
        var revenue=document.createElement('div');
        revenue.className='proof-grid-main ai-revenue-proof';
        revenue.innerHTML='<article class="media-proof"><div class="site-preview-shell"><iframe src="ai-systems.html#featured" title="ITS-EZ AI Revenue System preview" loading="lazy" tabindex="-1" scrolling="no" style="width:100%;height:500px;border:0;display:block;background:#111;pointer-events:none"></iframe><div class="site-preview-overlay"><span class="site-preview-note">Preview mode · scrolling stays on this page</span><a class="site-preview-open" href="ai-systems.html#featured">Open AI Revenue System ↗</a></div></div><div class="media-proof-copy"><span class="proof-preview-kicker">NEW INTERACTIVE BUILD</span><h3>ITS-EZ AI Revenue System</h3><p>A complete operating map for using AI across the revenue lifecycle. Every workflow opens into the actual execution layer: what goes in, what AI does, what the human owns, what belongs in CRM, the activation prompt, and how to measure whether it worked.</p><div class="hero-actions"><a class="button button-orange" href="ai-systems.html#featured">Explore all 12 workflows ↗</a><a class="button button-light" href="ai-systems.html">View the AI Systems Library ↗</a></div><p><strong>Built to activate:</strong> Research → Engage → Qualify → Close → Grow.</p></div></article><div class="stack-proof" aria-label="What the ITS-EZ AI Revenue System demonstrates"><article class="stack-group"><h3>12 real workflows</h3><p><strong>No decorative buttons</strong><br>Market, outreach, intelligence, qualification, pipeline, enablement, closing, retention, analytics, operations, playbooks, and support each open into a usable workflow.</p></article><article class="stack-group"><h3>CRM activation</h3><p><strong>Put the output somewhere useful</strong><br>Each workflow explains what should be captured in Salesforce or the system of record so the insight survives beyond the AI chat.</p></article><article class="stack-group"><h3>Activation prompts</h3><p><strong>Copy it and run it</strong><br>Reusable prompts turn each workflow from explanation into immediate execution.</p></article><article class="stack-group"><h3>Human checkpoints</h3><p><strong>AI accelerates; people own the decision</strong><br>Every module identifies where judgment, verification, approval, and relationship ownership stay human.</p></article><article class="stack-group"><h3>Measurement</h3><p><strong>Know whether it helped</strong><br>Each workflow includes KPIs such as conversion, speed, data quality, adoption, forecast accuracy, retention, and productivity.</p></article><article class="stack-group"><h3>Platform mapping</h3><p><strong>Use the right tool for the job</strong><br>The broader library connects revenue work to ChatGPT, Claude, Gemini, Copilot, Perplexity, NotebookLM, Clay, Salesforce, Gong, and Highspot.</p></article></div>';
        var divider=document.createElement('div');
        divider.className='proof-divider';
        proofWrap.insertBefore(revenue,firstGrid);
        proofWrap.insertBefore(divider,firstGrid);
      }

      var frames=proof.querySelectorAll('.media-proof iframe');
      frames.forEach(function(frame){
        if(frame.closest('.ai-revenue-proof'))return;
        var src=frame.getAttribute('src')||'';
        var label=src.indexOf('meddpicc')>-1?'Open MEDDPICC lab':'Open cybersecurity academy';
        wrapPreview(frame,src,label);
      });
    }

    if(navLinks&&'IntersectionObserver' in window){
      var localLinks=[].slice.call(navLinks.querySelectorAll('a[href^="#"]'));
      var sections=localLinks.map(function(a){return document.querySelector(a.getAttribute('href'))}).filter(Boolean);
      var observer=new IntersectionObserver(function(entries){
        entries.forEach(function(entry){
          if(!entry.isIntersecting)return;
          localLinks.forEach(function(a){a.classList.toggle('is-current',a.getAttribute('href')==='#'+entry.target.id)});
        });
      },{rootMargin:'-28% 0px -62% 0px',threshold:0});
      sections.forEach(function(section){observer.observe(section)});
    }
  }

  var core=document.createElement('script');
  core.src='projects-core.js?v=20260905';
  core.onload=runEnhancements;
  core.onerror=runEnhancements;
  document.head.appendChild(core);
}());