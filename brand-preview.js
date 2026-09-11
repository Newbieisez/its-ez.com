/* EZ BRAND FULL STORY PREVIEW */
(() => {
  const ROOT = 'https://its-ez.com/';

  const styles = `
    .ez-results-board{display:none!important}
    .ez-career-impact{position:relative;padding:76px 0;background:#0b0c0f;color:#fff;border-top:1px solid rgba(255,255,255,.09);border-bottom:1px solid rgba(255,255,255,.1);overflow:hidden}
    .ez-career-impact:before{content:"";position:absolute;inset:0;pointer-events:none;background:radial-gradient(circle at 88% 10%,rgba(239,23,23,.14),transparent 28rem),linear-gradient(90deg,rgba(255,255,255,.025) 1px,transparent 1px);background-size:auto,80px 100%}
    .ez-career-impact .wrap{position:relative;z-index:1}
    .ez-impact-head{display:grid;grid-template-columns:minmax(0,1.15fr) minmax(300px,.85fr);gap:48px;align-items:end;margin-bottom:34px}
    .ez-impact-kicker,.ez-human-kicker,.ez-music-kicker{margin:0 0 12px;color:#ef1717;font:900 11px/1 Arial,Helvetica,sans-serif;letter-spacing:.18em;text-transform:uppercase}
    .ez-impact-head h2,.ez-human-head h2,.ez-music-copy h2{margin:0;font-size:clamp(2.7rem,5.3vw,5.8rem);line-height:.9;letter-spacing:-.06em;text-transform:uppercase}
    .ez-impact-head p{margin:0;color:#b9bec7;font-size:1rem;line-height:1.65}
    .ez-impact-note{margin:0 0 22px;padding:13px 15px;border-left:3px solid #ef1717;background:rgba(255,255,255,.035);color:#d4d7dc;font-size:.82rem;line-height:1.55}
    .ez-org-grid{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:10px}
    .ez-org-card{min-width:0;padding:22px;border:1px solid rgba(255,255,255,.12);border-radius:16px;background:rgba(255,255,255,.035)}
    .ez-org-card small{display:block;margin-bottom:16px;color:#8e939d;font:900 9px/1.2 Arial,Helvetica,sans-serif;letter-spacing:.14em;text-transform:uppercase}
    .ez-org-card h3{margin:0 0 16px;font-size:1.15rem;letter-spacing:-.025em}
    .ez-org-metric{padding:10px 0;border-top:1px solid rgba(255,255,255,.1)}
    .ez-org-metric strong{display:block;color:#fff;font-size:1.28rem;line-height:1.05;letter-spacing:-.035em}
    .ez-org-metric span{display:block;margin-top:4px;color:#b9bec7;font-size:.73rem;line-height:1.35}
    .ez-impact-actions{display:flex;gap:10px;flex-wrap:wrap;margin-top:26px}
    .ez-impact-actions a,.ez-music-actions a{display:inline-flex;align-items:center;justify-content:center;min-height:44px;padding:0 16px;border-radius:999px;border:1px solid rgba(255,255,255,.23);color:#fff!important;text-decoration:none!important;font-size:.72rem;font-weight:900;letter-spacing:.06em;text-transform:uppercase}
    .ez-impact-actions a:first-child,.ez-music-actions a:first-child{background:#ef1717;border-color:#ef1717}
    .ez-impact-actions a:hover,.ez-music-actions a:hover{background:#fff;border-color:#fff;color:#08090b!important}

    .ez-human-section{padding:78px 0;background:#f2eee6;color:#171717;border-top:1px solid rgba(0,0,0,.1);border-bottom:1px solid rgba(0,0,0,.12)}
    .ez-human-head{display:grid;grid-template-columns:minmax(0,1.05fr) minmax(320px,.95fr);gap:48px;align-items:end;margin-bottom:30px}
    .ez-human-head h2{color:#171717}
    .ez-human-copy{margin:0;color:#55524d;font-size:1.02rem;line-height:1.7}
    .ez-human-grid{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:10px}
    .ez-human-card{min-height:150px;padding:20px;border:1px solid rgba(0,0,0,.18);border-radius:16px;background:#fff;display:flex;flex-direction:column;justify-content:space-between}
    .ez-human-card small{color:#ef1717;font:900 9px/1.2 Arial,Helvetica,sans-serif;letter-spacing:.13em;text-transform:uppercase}
    .ez-human-card strong{font-size:1.02rem;line-height:1.25}

    .ez-music-feature{position:relative;padding:80px 0;background:#08090b;color:#fff;overflow:hidden;border-top:1px solid rgba(255,255,255,.09);border-bottom:1px solid rgba(255,255,255,.1)}
    .ez-music-feature:before{content:"HAIMONIX";position:absolute;right:-2vw;bottom:-5vw;color:transparent;-webkit-text-stroke:1px rgba(255,255,255,.06);font:950 clamp(7rem,18vw,17rem)/.75 Arial Black,Arial,sans-serif;letter-spacing:-.08em;pointer-events:none}
    .ez-music-grid{position:relative;z-index:1;display:grid;grid-template-columns:minmax(0,1.15fr) minmax(280px,.85fr);gap:48px;align-items:center}
    .ez-music-copy h2{max-width:820px}
    .ez-music-copy p{max-width:690px;margin:22px 0 0;color:#b9bec7;font-size:1rem;line-height:1.7}
    .ez-music-actions{display:flex;gap:10px;flex-wrap:wrap;margin-top:26px}
    .ez-music-art{position:relative;min-height:310px;border:1px solid rgba(255,255,255,.14);border-radius:26px;overflow:hidden;background:radial-gradient(circle at 75% 18%,#ff6655 0,#ef1717 17%,#75101a 36%,#1b0b14 60%,#070709 84%);box-shadow:0 30px 80px rgba(0,0,0,.38)}
    .ez-music-art:before{content:"";position:absolute;width:72%;aspect-ratio:1;right:-18%;top:10%;border-radius:50%;background:repeating-radial-gradient(circle,rgba(255,255,255,.075) 0 1px,transparent 1px 9px),radial-gradient(circle,#ef1717 0 4%,#17171c 5% 11%,#050507 12% 43%,#17171c 44% 45%,#060608 46%)}
    .ez-music-art-copy{position:absolute;left:24px;right:24px;bottom:24px;z-index:2}
    .ez-music-art-copy small{display:block;color:#ffc1c1;font-size:.62rem;font-weight:900;letter-spacing:.16em;text-transform:uppercase}
    .ez-music-art-copy strong{display:block;margin-top:8px;font-size:clamp(2.5rem,5vw,4.6rem);line-height:.82;letter-spacing:-.06em;text-transform:uppercase}

    .ez-trust-note{width:min(1520px,calc(100% - 40px));margin:12px auto 0;padding-top:12px;border-top:1px solid rgba(127,127,127,.18);color:inherit;opacity:.58;font:600 10px/1.5 Arial,Helvetica,sans-serif;text-align:center}
    .ez-footer-utility a[data-ez-legal]{opacity:.9}
    .ez-preview-badge{position:fixed;right:12px;bottom:max(12px,env(safe-area-inset-bottom));z-index:9992;padding:8px 11px;border:1px solid rgba(255,255,255,.18);border-radius:999px;background:rgba(8,9,11,.94);color:#fff;font:900 9px/1 Arial,Helvetica,sans-serif;letter-spacing:.12em;text-transform:uppercase;box-shadow:0 8px 24px rgba(0,0,0,.25)}
    .ez-career-impact a:focus-visible,.ez-human-section a:focus-visible,.ez-music-feature a:focus-visible{outline:3px solid #fff;outline-offset:3px}

    @media(max-width:1180px){.ez-org-grid{grid-template-columns:repeat(3,minmax(0,1fr))}.ez-human-grid{grid-template-columns:repeat(3,minmax(0,1fr))}}
    @media(max-width:820px){.ez-impact-head,.ez-human-head,.ez-music-grid{grid-template-columns:1fr;gap:22px}.ez-org-grid,.ez-human-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.ez-music-art{min-height:260px}.ez-career-impact,.ez-human-section,.ez-music-feature{padding:58px 0}}
    @media(max-width:520px){.ez-org-grid,.ez-human-grid{grid-template-columns:1fr}.ez-org-card{padding:19px}.ez-human-card{min-height:120px}.ez-impact-head h2,.ez-human-head h2,.ez-music-copy h2{font-size:clamp(2.55rem,13vw,4.1rem)}.ez-music-art{min-height:230px}.ez-impact-actions a,.ez-music-actions a{width:100%}.ez-trust-note{width:calc(100% - 28px);text-align:left}.ez-preview-badge{right:8px;bottom:8px}}
  `;

  function addStyles(){
    if(document.getElementById('ez-full-story-preview-style')) return;
    const style=document.createElement('style');
    style.id='ez-full-story-preview-style';
    style.textContent=styles;
    document.head.appendChild(style);
  }

  function replaceResults(){
    if(!document.body.classList.contains('ez-homepage')) return;
    document.querySelectorAll('.ez-results-board').forEach(el=>el.remove());
    if(document.getElementById('results')) return;
    const section=document.createElement('section');
    section.className='ez-career-impact';
    section.id='results';
    section.dataset.pageMapLabel='Career impact';
    section.setAttribute('aria-labelledby','ez-career-impact-title');
    section.innerHTML=`<div class="wrap">
      <div class="ez-impact-head">
        <div><p class="ez-impact-kicker">Career impact / company by company</p><h2 id="ez-career-impact-title">Proof without the inflated math.</h2></div>
        <p>I have worked across different companies, motions, teams, and stages of growth. The results belong with the work that produced them. I do not add pipeline, ARR, savings, ramp, and conversion together just to manufacture one giant career number.</p>
      </div>
      <p class="ez-impact-note"><strong>How I report results:</strong> each metric stays attached to the organization and context where it was measured. Influenced, supported, reduced, and generated mean different things here on purpose.</p>
      <div class="ez-org-grid" aria-label="Measured outcomes by organization">
        <article class="ez-org-card"><small>Partner ecosystem</small><h3>SentinelOne</h3><div class="ez-org-metric"><strong>$13M</strong><span>Partner pipeline influenced</span></div><div class="ez-org-metric"><strong>40–50%</strong><span>Reduction in partner ramp time</span></div><div class="ez-org-metric"><strong>4,000+</strong><span>Partners reached through structured enablement</span></div></article>
        <article class="ez-org-card"><small>Revenue readiness</small><h3>Twilio</h3><div class="ez-org-metric"><strong>$8M</strong><span>Pipeline growth supported</span></div><div class="ez-org-metric"><strong>82%</strong><span>MEDDPICC adoption</span></div><div class="ez-org-metric"><strong>+40%</strong><span>Deal conversion lift</span></div></article>
        <article class="ez-org-card"><small>0→1 enablement</small><h3>Tessian</h3><div class="ez-org-metric"><strong>40%</strong><span>Reduction in onboarding time</span></div><div class="ez-org-metric"><strong>94%</strong><span>Certification pass rate</span></div><div class="ez-org-metric"><strong>0→1</strong><span>Global enablement function built</span></div></article>
        <article class="ez-org-card"><small>Cybersecurity readiness</small><h3>Cofense</h3><div class="ez-org-metric"><strong>$3M</strong><span>ARR influenced</span></div><div class="ez-org-metric"><strong>96%</strong><span>Certification pass rate</span></div><div class="ez-org-metric"><strong>Global</strong><span>Common readiness standards across the field</span></div></article>
        <article class="ez-org-card"><small>Founder-led GTM</small><h3>ReUp Technologies</h3><div class="ez-org-metric"><strong>$1M</strong><span>Revenue built at ReUp Technologies</span></div><div class="ez-org-metric"><strong>0→1</strong><span>Commercial operating foundation</span></div><div class="ez-org-metric"><strong>Founder</strong><span>Direct GTM and partner execution ownership</span></div></article>
      </div>
      <div class="ez-impact-actions"><a href="#work">Open the full case studies →</a><a href="${ROOT}recommendations.html">Hear from people I worked with →</a></div>
    </div>`;
    const offers=document.querySelector('.home-offers');
    const about=document.getElementById('about');
    if(offers) offers.insertAdjacentElement('afterend',section);
    else if(about) about.insertAdjacentElement('beforebegin',section);
    else document.querySelector('main')?.prepend(section);
    const heroActions=document.querySelector('.ez-hero-actions');
    if(heroActions){const links=heroActions.querySelectorAll('a');if(links[1]){links[1].href='#work';links[1].textContent='See My Work →';}}
  }

  function addHumanLeadership(){
    if(!document.body.classList.contains('ez-homepage') || document.querySelector('.ez-human-section')) return;
    const section=document.createElement('section');
    section.className='ez-human-section';
    section.id='leadership-beyond-work';
    section.dataset.pageMapLabel='Leadership';
    section.setAttribute('aria-labelledby','ez-human-title');
    section.innerHTML=`<div class="wrap"><div class="ez-human-head"><div><p class="ez-human-kicker">Beyond the job description</p><h2 id="ez-human-title">The work matters. So do the people.</h2></div><p class="ez-human-copy">I care about the systems that help people perform, and I care about the people inside those systems. My ERG and community work has included empathy, women’s empowerment, Pride, and support for diabetes and heart research. I do not see that as separate from leadership. It is part of how I show up.</p></div><div class="ez-human-grid" aria-label="Community and employee resource group priorities"><article class="ez-human-card"><small>People</small><strong>Empathy & belonging</strong></article><article class="ez-human-card"><small>Advocacy</small><strong>Women’s empowerment</strong></article><article class="ez-human-card"><small>Inclusion</small><strong>Pride & belonging</strong></article><article class="ez-human-card"><small>Community support</small><strong>Diabetes research</strong></article><article class="ez-human-card"><small>Community support</small><strong>Heart research</strong></article></div></div>`;
    const operating=document.getElementById('operating');
    const proof=document.getElementById('proof');
    if(operating) operating.insertAdjacentElement('afterend',section);
    else if(proof) proof.insertAdjacentElement('beforebegin',section);
  }

  function addMusicFeature(){
    if(!document.body.classList.contains('ez-homepage') || document.querySelector('.ez-music-feature')) return;
    const section=document.createElement('section');
    section.className='ez-music-feature';
    section.id='music';
    section.dataset.pageMapLabel='Music';
    section.setAttribute('aria-labelledby','ez-music-feature-title');
    section.innerHTML=`<div class="wrap"><div class="ez-music-grid"><div class="ez-music-copy"><p class="ez-music-kicker">Beyond enablement</p><h2 id="ez-music-feature-title">I build systems. I also make music.</h2><p>Outside the work, I produce electronic music as Avi Haimonix. It is part of who I am, not the reason you hire me. But if you want to know the person behind the dashboards, frameworks, and case studies, this is another part of the story.</p><div class="ez-music-actions"><a href="${ROOT}music.html">Explore the music →</a></div></div><a class="ez-music-art" href="${ROOT}music.html" aria-label="Explore music by Avi Haimonix"><div class="ez-music-art-copy"><small>Original music / Avi Haimonix</small><strong>Turn it up.</strong></div></a></div></div>`;
    const contact=document.getElementById('contact') || document.querySelector('.section.contact');
    if(contact) contact.insertAdjacentElement('beforebegin',section);
    else document.querySelector('footer')?.insertAdjacentElement('beforebegin',section);
  }

  function addTrustLinks(){
    const footer=document.querySelector('footer');
    if(!footer) return;
    const nav=footer.querySelector('.ez-footer-utility');
    if(nav){
      if(!nav.querySelector('[href$="privacy.html"]')){
        const privacy=document.createElement('a');privacy.href=ROOT+'privacy.html';privacy.textContent='Privacy';privacy.dataset.ezLegal='true';nav.appendChild(privacy);
      }
      if(!nav.querySelector('[href$="terms.html"]')){
        const terms=document.createElement('a');terms.href=ROOT+'terms.html';terms.textContent='Terms';terms.dataset.ezLegal='true';nav.appendChild(terms);
      }
    }
    if(!footer.querySelector('.ez-trust-note')){
      const note=document.createElement('p');note.className='ez-trust-note';note.textContent='Company and product names belong to their respective owners. References reflect my professional experience and do not imply endorsement.';footer.appendChild(note);
    }
  }

  function addPreviewBadge(){
    if(location.hostname.includes('its-ez.com')) return;
    const badge=document.createElement('div');badge.className='ez-preview-badge';badge.textContent='Preview · not live';document.body.appendChild(badge);
  }

  function init(){
    if(!document.body.classList.contains('ez-homepage')){addTrustLinks();addPreviewBadge();return;}
    addStyles();
    replaceResults();
    addHumanLeadership();
    addMusicFeature();
    addTrustLinks();
    addPreviewBadge();
  }

  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',()=>setTimeout(init,0),{once:true});
  else setTimeout(init,0);
})();
