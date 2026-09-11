(() => {
  const VERSION = '20260911-impact-nav-1';
  const ROOT = 'https://its-ez.com/';

  const css = `
  :root{--ez-header-height:72px;--ez-nav-red:#ef1717;--ez-nav-black:#08090b;--ez-nav-line:rgba(255,255,255,.12)}
  body{padding-top:72px!important}
  .ez-global-header{position:fixed!important;inset:0 0 auto 0!important;z-index:10000!important;height:72px!important;background:rgba(8,9,11,.97)!important;border-bottom:1px solid var(--ez-nav-line)!important;backdrop-filter:blur(18px)!important;-webkit-backdrop-filter:blur(18px)!important;color:#fff!important;font-family:Arial,Helvetica,sans-serif!important;overflow:visible!important}
  .ez-global-header *{box-sizing:border-box}
  .ez-global-shell{width:min(1520px,calc(100% - 40px));height:72px;margin:auto;display:flex;align-items:center;gap:14px;overflow:visible}
  .ez-global-brand{display:flex;align-items:center;gap:10px;color:#fff!important;text-decoration:none!important;flex:0 0 auto}
  .ez-global-mark{display:flex;align-items:center;justify-content:center;width:44px;height:44px;border:2px solid #fff;font-family:Arial Black,Arial,Helvetica,sans-serif;font-size:20px;font-weight:950;letter-spacing:-.11em;line-height:1;white-space:nowrap;overflow:hidden}.ez-global-mark b{display:inline;color:var(--ez-nav-red);font:inherit;margin-left:1px}
  .ez-global-brand-copy{display:grid;gap:1px;line-height:1}.ez-global-brand-copy strong{font-size:12px;letter-spacing:.11em}.ez-global-brand-copy span{font-size:8px;color:#aaa;letter-spacing:.13em;text-transform:uppercase}
  .ez-global-links{margin-left:auto;display:flex;align-items:center;gap:2px;overflow:visible}
  .ez-global-links>a{position:relative;display:flex;align-items:center;min-height:44px;padding:0 8px;border:0;border-radius:8px;background:transparent;color:#d5d5d8!important;text-decoration:none!important;font:800 14px/1.2 Arial,Helvetica,sans-serif!important;white-space:nowrap!important;transition:background .18s ease,color .18s ease}
  .ez-global-links>a:hover,.ez-global-links>a[aria-current="page"]{background:rgba(255,255,255,.07);color:#fff!important}
  .ez-global-links>a[aria-current="page"]:after{content:"";position:absolute;left:8px;right:8px;bottom:2px;height:2px;background:var(--ez-nav-red)}
  .ez-global-cta{display:inline-flex;align-items:center;justify-content:center;min-height:40px;padding:0 14px;border:1px solid var(--ez-nav-red);border-radius:999px;color:#fff!important;text-decoration:none!important;font-size:12px!important;font-weight:900!important;letter-spacing:.07em!important;text-transform:uppercase!important;white-space:nowrap;flex:0 0 auto}.ez-global-cta:hover{background:var(--ez-nav-red)}
  .ez-global-menu{display:none;width:44px;height:44px;margin-left:auto;border:1px solid rgba(255,255,255,.2);border-radius:10px;background:transparent;color:#fff;font-size:22px;cursor:pointer;flex:0 0 auto}

  body.ez-homepage .section{padding-top:70px!important;padding-bottom:70px!important}
  body.ez-homepage .section-title{font-size:clamp(1.95rem,3.1vw,3.45rem)!important;line-height:1.04!important;letter-spacing:-.045em!important}

  .ez-results-board{position:relative;overflow:hidden;padding:58px 0 62px;background:#08090b;color:#fff;border-top:1px solid rgba(255,255,255,.08);border-bottom:1px solid rgba(255,255,255,.1)}
  .ez-results-board:before{content:"";position:absolute;inset:0;background:linear-gradient(90deg,rgba(239,23,23,.08),transparent 28%),repeating-linear-gradient(90deg,transparent 0,transparent calc(16.666% - 1px),rgba(255,255,255,.035) calc(16.666% - 1px),rgba(255,255,255,.035) 16.666%);pointer-events:none}
  .ez-results-board .wrap{position:relative;z-index:1}
  .ez-results-head{display:grid;grid-template-columns:minmax(0,1.2fr) minmax(280px,.8fr);gap:42px;align-items:end;margin-bottom:30px}
  .ez-results-kicker{margin:0 0 10px;color:#ef1717;font:900 11px/1 Arial,Helvetica,sans-serif;letter-spacing:.18em;text-transform:uppercase}
  .ez-results-head h2{margin:0;color:#fff;font-size:clamp(2.4rem,4.8vw,5rem);line-height:.92;letter-spacing:-.055em;text-transform:uppercase}
  .ez-results-head p{margin:0;color:#b9bcc2;font-size:1rem;line-height:1.65;max-width:620px}
  .ez-results-grid{display:grid;grid-template-columns:repeat(6,minmax(0,1fr));border:1px solid rgba(255,255,255,.12);border-radius:18px;overflow:hidden;background:rgba(255,255,255,.025)}
  .ez-result-stat{min-height:190px;padding:22px 20px;border-right:1px solid rgba(255,255,255,.1);display:flex;flex-direction:column;justify-content:space-between;gap:18px;background:linear-gradient(180deg,rgba(255,255,255,.025),rgba(255,255,255,.008))}
  .ez-result-stat:last-child{border-right:0}
  .ez-result-stat small{color:#888d96;font:900 9px/1.2 Arial,Helvetica,sans-serif;letter-spacing:.14em;text-transform:uppercase}
  .ez-result-stat strong{display:block;color:#fff;font:950 clamp(2rem,3.2vw,3.8rem)/.9 Arial Black,Arial,Helvetica,sans-serif;letter-spacing:-.065em}
  .ez-result-stat span{color:#d6d8dc;font-size:.82rem;font-weight:800;line-height:1.35}
  .ez-results-foot{display:flex;align-items:center;justify-content:space-between;gap:24px;margin-top:24px;padding-top:20px;border-top:1px solid rgba(255,255,255,.09)}
  .ez-results-foot b{color:#fff;font-size:.78rem;letter-spacing:.12em;text-transform:uppercase}
  .ez-results-actions{display:flex;flex-wrap:wrap;gap:10px}.ez-results-actions a{display:inline-flex;align-items:center;justify-content:center;min-height:42px;padding:0 15px;border:1px solid rgba(255,255,255,.22);border-radius:999px;color:#fff!important;text-decoration:none!important;font-size:.72rem;font-weight:900;letter-spacing:.06em;text-transform:uppercase}.ez-results-actions a:first-child{border-color:#ef1717;background:#ef1717}.ez-results-actions a:hover{background:#fff;color:#08090b!important;border-color:#fff}

  .ez-footer-utility{display:flex;flex-wrap:wrap;justify-content:center;gap:10px 16px;width:min(1520px,calc(100% - 40px));margin:18px auto 0;padding:16px 0 4px;border-top:1px solid rgba(127,127,127,.2);font:800 10px/1.3 Arial,Helvetica,sans-serif;letter-spacing:.08em;text-transform:uppercase}
  .ez-footer-utility span{opacity:.62}.ez-footer-utility a{color:inherit!important;text-decoration:none!important;opacity:.74}.ez-footer-utility a:hover{opacity:1;text-decoration:underline!important;text-underline-offset:4px}

  body.ez-work-with-me .wm-hero{padding:92px 0 72px!important;min-height:0!important}
  body.ez-work-with-me .wm-grid{gap:48px!important;align-items:center!important}
  body.ez-work-with-me .wm-hero h1{font-size:clamp(3.25rem,6.7vw,6.4rem)!important;line-height:.9!important;letter-spacing:-.055em!important;margin-bottom:24px!important;max-width:820px!important}
  body.ez-work-with-me .wm-lede{font-size:clamp(1.08rem,1.55vw,1.45rem)!important;line-height:1.45!important}
  body.ez-work-with-me .wm-sub{font-size:.96rem!important;line-height:1.62!important}
  body.ez-work-with-me .section{padding-top:72px!important;padding-bottom:72px!important}
  body.ez-work-with-me .section-title{font-size:clamp(2rem,3.7vw,3.8rem)!important;line-height:1!important}
  body.ez-work-with-me .problem-band{padding:68px 0!important}
  body.ez-work-with-me .service-card{min-height:285px!important;padding:25px!important}

  body.ez-music .hero{min-height:auto!important;padding:70px 0 62px!important}
  body.ez-music h1{font-size:clamp(3.7rem,7vw,7.1rem)!important;line-height:.8!important}
  body.ez-music .hero-grid{gap:48px!important}
  body.ez-music .section{padding:68px 0!important}
  body.ez-music .section h2{font-size:clamp(2.5rem,4.8vw,4.9rem)!important;line-height:.9!important}
  body.ez-music .section-head{margin-bottom:26px!important;gap:34px!important}
  body.ez-music .release-grid{gap:10px!important}
  body.ez-music .release{min-height:220px!important;padding:18px!important;border-radius:17px!important}
  body.ez-music .release strong{font-size:1.25rem!important;line-height:1!important;padding-right:32px!important}
  body.ez-music .release span{font-weight:800!important;color:#b9bac1!important}
  body.ez-music .release .arrow{width:34px!important;height:34px!important;right:14px!important;bottom:14px!important;background:var(--red)!important;border-color:var(--red)!important}
  body.ez-music .original{padding:23px!important}
  body.ez-music .original h3{font-size:clamp(2rem,3.2vw,3.4rem)!important}

  @media(max-width:1320px){.ez-global-brand-copy{display:none}.ez-global-shell{gap:8px}.ez-global-links>a{padding:0 6px;font-size:14px!important}.ez-global-cta{padding:0 11px;font-size:12px!important}.ez-results-grid{grid-template-columns:repeat(3,minmax(0,1fr))}.ez-result-stat{border-bottom:1px solid rgba(255,255,255,.1)}.ez-result-stat:nth-child(3n){border-right:0}.ez-result-stat:nth-last-child(-n+3){border-bottom:0}}
  @media(max-width:1180px){:root{--ez-header-height:64px}body{padding-top:64px!important}.ez-global-header{height:64px!important}.ez-global-shell{height:64px;width:min(100% - 24px,1520px)}.ez-global-mark{width:40px;height:40px;font-size:18px}.ez-global-brand-copy{display:grid}.ez-global-menu{display:block}.ez-global-cta{display:none}.ez-global-links{display:none;position:absolute;left:12px;right:12px;top:64px;z-index:10001;margin:0;padding:10px;background:#0b0c0f;border:1px solid rgba(255,255,255,.13);border-radius:0 0 16px 16px;box-shadow:0 20px 45px rgba(0,0,0,.5);grid-template-columns:repeat(2,minmax(0,1fr));gap:4px;max-height:calc(100dvh - 76px);overflow:auto}.ez-global-header.is-open .ez-global-links{display:grid}.ez-global-links>a{width:100%;min-height:44px;padding:0 12px;font-size:14px!important}.ez-global-links>a[aria-current="page"]:after{left:12px;right:12px}body.ez-work-with-me .wm-grid{grid-template-columns:1fr!important}body.ez-work-with-me .wm-side{max-width:660px!important}body.ez-music .hero-grid{grid-template-columns:1fr!important}}
  @media(max-width:820px){.ez-results-head{grid-template-columns:1fr;gap:18px}.ez-results-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.ez-result-stat:nth-child(3n){border-right:1px solid rgba(255,255,255,.1)}.ez-result-stat:nth-child(2n){border-right:0}.ez-result-stat:nth-last-child(-n+3){border-bottom:1px solid rgba(255,255,255,.1)}.ez-result-stat:nth-last-child(-n+2){border-bottom:0}.ez-results-foot{align-items:flex-start;flex-direction:column}}
  @media(max-width:720px){body.ez-music .release-grid{grid-template-columns:1fr 1fr!important}body.ez-music .release{min-height:190px!important}body.ez-work-with-me .wm-hero{padding:66px 0 56px!important}body.ez-work-with-me .wm-hero h1{font-size:clamp(3rem,14vw,4.9rem)!important}.ez-results-board{padding:46px 0 50px}.ez-results-head h2{font-size:clamp(2.5rem,12vw,4.4rem)}}
  @media(max-width:520px){.ez-global-links{grid-template-columns:1fr}.ez-global-brand-copy strong{font-size:10px}.ez-global-brand-copy span{font-size:7px}body.ez-homepage .section{padding-top:54px!important;padding-bottom:54px!important}body.ez-music .section{padding:54px 0!important}body.ez-music .release-grid{grid-template-columns:1fr!important}body.ez-music .release{min-height:170px!important}.ez-results-grid{grid-template-columns:1fr}.ez-result-stat{min-height:150px;border-right:0!important;border-bottom:1px solid rgba(255,255,255,.1)!important}.ez-result-stat:last-child{border-bottom:0!important}.ez-footer-utility{width:calc(100% - 28px);justify-content:flex-start}}
  @media(max-width:360px){.ez-global-brand-copy{display:none}.ez-global-shell{width:calc(100% - 18px)}}
  `;

  const navItems = [
    ['Home',ROOT],
    ['Work',ROOT+'#work'],
    ['Results',ROOT+'#results'],
    ['How I Build',ROOT+'#operating'],
    ['AI Systems',ROOT+'ai-systems.html'],
    ['Recommendations',ROOT+'recommendations.html'],
    ['Work With Me',ROOT+'work-with-me.html']
  ];

  function addStyles(){
    if(!document.querySelector('link[data-ez-responsive]')){
      const link=document.createElement('link');
      link.rel='stylesheet';
      link.href=ROOT+'responsive-2026.css?v=20260908-responsive-audit-1';
      link.dataset.ezResponsive='true';
      document.head.appendChild(link);
    }
    if(!document.getElementById('ez-global-nav-style')){
      const style=document.createElement('style');
      style.id='ez-global-nav-style';
      style.textContent=css;
      document.head.appendChild(style);
    }
  }

  function currentFor(label,href){
    const host=location.hostname.toLowerCase();
    const path=location.pathname.toLowerCase();
    if(host!=='its-ez.com' && host!=='www.its-ez.com') return false;
    const targetPath=new URL(href).pathname.toLowerCase();
    const onHome=path==='/' || path==='/index.html';
    if(label==='Home') return onHome && !location.hash;
    if(label==='Work') return onHome && location.hash==='#work';
    if(label==='Results') return onHome && location.hash==='#results';
    if(label==='How I Build') return onHome && location.hash==='#operating';
    return targetPath===path;
  }

  function markPage(){
    const host=location.hostname.toLowerCase();
    const path=location.pathname.toLowerCase();
    if((host==='its-ez.com'||host==='www.its-ez.com')&&(path==='/'||path==='/index.html')) document.body.classList.add('ez-homepage');
    if(path.endsWith('/ai-systems.html') || path.endsWith('/ai-systems')) document.body.classList.add('ez-ai-systems');
    if(path.endsWith('/revenue-performance.html') || path.endsWith('/revenue-performance')) document.body.classList.add('ez-revenue-hub');
    if(path.endsWith('/music.html') || path.endsWith('/music')) document.body.classList.add('ez-music');
    if(path.endsWith('/recommendations.html') || path.endsWith('/recommendations')) document.body.classList.add('ez-recommendations');
    if(path.endsWith('/work-with-me.html') || path.endsWith('/work-with-me')) document.body.classList.add('ez-work-with-me');
    if(host.includes('meddpicc-is-ez')||host==='meddpicc.its-ez.com') document.body.classList.add('ez-meddpicc');
    if(host.includes('ez-human-threat-academy')) document.body.classList.add('ez-cybersecurity');
  }

  function renderHeader(){
    const old=document.querySelector('header.site-header, .site-header');
    const header=document.createElement('header');
    header.className='ez-global-header';
    header.dataset.version=VERSION;
    header.innerHTML=`<div class="ez-global-shell"><a class="ez-global-brand" href="${ROOT}" aria-label="EZ Enablement home"><span class="ez-global-mark">E<b>Z</b></span><span class="ez-global-brand-copy"><strong>EZ ENABLEMENT</strong><span>Enablement made possible</span></span></a><nav class="ez-global-links" id="ez-global-links" aria-label="Primary navigation">${navItems.map(([label,href])=>`<a href="${href}" data-ez-label="${label}">${label}</a>`).join('')}</nav><a class="ez-global-cta" href="${ROOT}#contact">Let's connect</a><button class="ez-global-menu" type="button" aria-expanded="false" aria-controls="ez-global-links" aria-label="Open navigation">☰</button></div>`;
    if(old) old.replaceWith(header); else document.body.prepend(header);

    const updateActive=()=>header.querySelectorAll('.ez-global-links a').forEach(a=>currentFor(a.dataset.ezLabel,a.href)?a.setAttribute('aria-current','page'):a.removeAttribute('aria-current'));
    const closeMenu=()=>{header.classList.remove('is-open');const b=header.querySelector('.ez-global-menu');b.setAttribute('aria-expanded','false');b.setAttribute('aria-label','Open navigation');b.textContent='☰';};
    const button=header.querySelector('.ez-global-menu');
    updateActive();
    button.addEventListener('click',()=>{const open=header.classList.toggle('is-open');if(open)document.dispatchEvent(new Event('ez:close-page-map'));button.setAttribute('aria-expanded',String(open));button.setAttribute('aria-label',open?'Close navigation':'Open navigation');button.textContent=open?'×':'☰';});
    header.querySelector('.ez-global-links').addEventListener('click',e=>{if(e.target.closest('a')){closeMenu();setTimeout(updateActive,0);}});
    document.addEventListener('click',e=>{if(header.classList.contains('is-open')&&!header.contains(e.target))closeMenu();});
    document.addEventListener('focusin',e=>{if(header.classList.contains('is-open')&&!header.contains(e.target))closeMenu();});
    document.addEventListener('ez:page-map-open',closeMenu);
    window.addEventListener('hashchange',updateActive);
    window.addEventListener('popstate',updateActive);
    window.addEventListener('resize',()=>{if(window.innerWidth>1180)closeMenu();},{passive:true});
    document.addEventListener('keydown',e=>{if(e.key==='Escape'&&header.classList.contains('is-open')){closeMenu();button.focus();}});
  }

  function installHomepageImpact(){
    if(!document.body.classList.contains('ez-homepage')) return;
    if(!document.getElementById('results')){
      const section=document.createElement('section');
      section.className='ez-results-board';
      section.id='results';
      section.dataset.pageMapLabel='Results';
      section.setAttribute('aria-labelledby','ez-results-title');
      section.innerHTML=`<div class="wrap"><div class="ez-results-head"><div><p class="ez-results-kicker">RESULTS / PERFORMANCE BOARD</p><h2 id="ez-results-title">The work should move the number.</h2></div><p>Selected outcomes from the systems and programs below. Open the case studies to inspect the problem, architecture, execution, tools, and evidence behind each result.</p></div><div class="ez-results-grid" aria-label="Selected measured outcomes"><article class="ez-result-stat"><small>SentinelOne / Partners</small><strong>$13M</strong><span>Partner pipeline influenced</span></article><article class="ez-result-stat"><small>SentinelOne / Readiness</small><strong>40–50%</strong><span>Faster partner ramp</span></article><article class="ez-result-stat"><small>Twilio / Revenue</small><strong>$8M</strong><span>Pipeline growth supported</span></article><article class="ez-result-stat"><small>Twilio / Conversion</small><strong>+40%</strong><span>Deal conversion lift</span></article><article class="ez-result-stat"><small>Twilio / Efficiency</small><strong>$700K</strong><span>Annual GTM technology savings</span></article><article class="ez-result-stat"><small>Twilio / Execution</small><strong>82%</strong><span>MEDDPICC adoption</span></article></div><div class="ez-results-foot"><b>Proof is better than promises.</b><div class="ez-results-actions"><a href="#work">Inspect the work →</a><a href="${ROOT}recommendations.html">Read recommendations →</a></div></div></div>`;
      const motion=document.querySelector('.ez-motion-break');
      const hero=document.querySelector('.hero-2026');
      if(motion) motion.insertAdjacentElement('afterend',section);
      else if(hero) hero.insertAdjacentElement('afterend',section);
      else document.querySelector('main')?.prepend(section);
    }
    const heroActions=document.querySelector('.ez-hero-actions');
    if(heroActions){
      const actions=heroActions.querySelectorAll('a');
      if(actions[1]){actions[1].href='#results';actions[1].textContent='See Results →';}
    }
  }

  function installSecondaryFooterLinks(){
    const footer=document.querySelector('footer');
    if(!footer || footer.querySelector('.ez-footer-utility')) return;
    const nav=document.createElement('nav');
    nav.className='ez-footer-utility';
    nav.setAttribute('aria-label','More from EZ');
    nav.innerHTML=`<span>More from EZ</span><a href="${ROOT}revenue-performance.html">Revenue Performance Hub</a><a href="https://meddpicc-is-ez.erezhaimowicz.workers.dev/">MEDDPICC Lab</a><a href="https://ez-human-threat-academy.erezhaimowicz.workers.dev/">Cybersecurity Lab</a><a href="${ROOT}music.html">Music</a>`;
    footer.appendChild(nav);
  }

  function installPageMap(){
    const apply=()=>{
      const map=document.querySelector('.ez-page-map');
      const toggle=document.querySelector('.ez-page-map-toggle');
      if(!map || !toggle) return false;
      toggle.removeAttribute('aria-hidden');
      if(!document.getElementById('ez-page-map-cleanup')){
        const style=document.createElement('style');
        style.id='ez-page-map-cleanup';
        style.textContent=`
          .ez-page-map-toggle{display:flex!important;align-items:center!important;justify-content:center!important;position:fixed!important;left:18px!important;top:auto!important;bottom:max(18px,env(safe-area-inset-bottom))!important;z-index:9991!important;width:auto!important;min-width:0!important;min-height:42px!important;padding:0 14px!important;border-radius:999px!important;transform:none!important;writing-mode:horizontal-tb!important;text-orientation:mixed!important;font-size:12px!important;letter-spacing:.09em!important;box-shadow:0 10px 28px rgba(0,0,0,.25)!important}
          .ez-page-map{display:none!important;position:fixed!important;left:18px!important;right:auto!important;top:auto!important;bottom:70px!important;z-index:9990!important;width:min(260px,calc(100vw - 36px))!important;max-height:min(64vh,calc(100dvh - 160px))!important;transform:none!important;overflow:auto!important;border-radius:16px!important;box-shadow:0 18px 48px rgba(0,0,0,.34)!important}
          .ez-page-map.is-open{display:block!important}
          @media(max-width:620px){.ez-page-map-toggle{left:12px!important;bottom:max(12px,env(safe-area-inset-bottom))!important;min-height:44px!important;padding:0 15px!important}.ez-page-map{left:12px!important;bottom:64px!important;width:min(250px,calc(100vw - 24px))!important;max-height:min(62vh,calc(100dvh - 160px))!important}}
        `;
        document.head.appendChild(style);
      }
      map.querySelectorAll('a').forEach(a=>{if(a.textContent.trim()==='People')a.textContent='Recommendations';});
      return true;
    };
    if(apply()) return;
    const observer=new MutationObserver(()=>{if(apply())observer.disconnect();});
    observer.observe(document.documentElement,{childList:true,subtree:true});
    setTimeout(()=>observer.disconnect(),8000);
  }

  function installAiSystemMap(){
    const path=location.pathname.toLowerCase();
    if(!(path.endsWith('/ai-systems.html') || path.endsWith('/ai-systems'))) return;
    const map=document.getElementById('page-map');
    const toggle=document.getElementById('page-map-toggle');
    if(!map || !toggle) return;
    if(!document.getElementById('ez-ai-system-map-cleanup')){
      const style=document.createElement('style');
      style.id='ez-ai-system-map-cleanup';
      style.textContent=`.page-map-toggle{display:flex!important;align-items:center!important;justify-content:center!important;position:fixed!important;left:18px!important;top:auto!important;bottom:max(18px,env(safe-area-inset-bottom))!important;z-index:9991!important;width:auto!important;min-height:42px!important;padding:0 14px!important;border-radius:999px!important;transform:none!important;writing-mode:horizontal-tb!important}.page-map{display:none!important;position:fixed!important;left:18px!important;top:auto!important;bottom:70px!important;z-index:9990!important;width:min(260px,calc(100vw - 36px))!important;max-height:min(64vh,calc(100dvh - 160px))!important;overflow:auto!important;transform:none!important}.page-map.is-open{display:block!important}@media(max-width:720px){.page-map-toggle{left:12px!important;bottom:max(12px,env(safe-area-inset-bottom))!important}.page-map{left:12px!important;bottom:64px!important;width:min(250px,calc(100vw - 24px))!important}}`;
      document.head.appendChild(style);
    }
    toggle.textContent='☷ System map';
    const close=()=>{map.classList.remove('is-open');toggle.setAttribute('aria-expanded','false');};
    document.addEventListener('ez:close-page-map',close);
    toggle.addEventListener('click',()=>{if(map.classList.contains('is-open'))document.dispatchEvent(new Event('ez:page-map-open'));});
    document.addEventListener('focusin',event=>{if(map.classList.contains('is-open')&&!map.contains(event.target)&&!toggle.contains(event.target))close();});
    map.querySelectorAll('a[data-section]').forEach(link=>link.addEventListener('click',close));
    document.addEventListener('click',event=>{if(map.classList.contains('is-open')&&!map.contains(event.target)&&event.target!==toggle&&!toggle.contains(event.target))close();});
    document.addEventListener('keydown',event=>{if(event.key==='Escape'&&map.classList.contains('is-open')){close();toggle.focus();}});
  }

  function improveMusicReleaseCues(){
    const path=location.pathname.toLowerCase();
    if(!(path.endsWith('/music.html') || path.endsWith('/music'))) return;
    document.querySelectorAll('.release').forEach(card=>{
      const label=card.querySelector('span');
      const arrow=card.querySelector('.arrow');
      if(label) label.textContent='Play on Spotify';
      if(arrow) arrow.textContent='▶';
      card.setAttribute('aria-label',`${card.querySelector('strong')?.textContent?.replace(/\s+/g,' ').trim() || 'Release'} — play on Spotify`);
    });
  }

  function fixMusicSoundCloud(){
    const path=location.pathname.toLowerCase();
    if(!(path.endsWith('/music.html') || path.endsWith('/music'))) return;
    const frame=document.querySelector('.soundcloud iframe');
    if(!frame) return;
    const container=frame.closest('.soundcloud') || frame.parentElement;
    const trackUrl='https://soundcloud.com/haimonix/full-speed-ahead-yacht-rock/s-XCooCM1Kq6V';
    const style=document.createElement('style');
    style.textContent='.ez-sc-state{min-height:300px;border-radius:17px;display:flex;align-items:center;justify-content:center;padding:34px;text-align:center;background:radial-gradient(circle at 50% 18%,rgba(255,92,0,.14),transparent 34%),linear-gradient(145deg,#111116,#08080b);color:#fff}.ez-sc-state-inner{max-width:520px}.ez-sc-pulse{width:56px;height:56px;margin:0 auto 18px;border-radius:50%;display:grid;place-items:center;font-size:22px;background:#ff5500}.ez-sc-state strong{display:block;font-size:1.15rem}.ez-sc-state p{margin:9px 0 18px;color:#999ba4;font-size:.78rem;line-height:1.6}.ez-sc-state a{display:inline-flex;align-items:center;justify-content:center;min-height:42px;padding:0 16px;border-radius:999px;background:#ff5500;color:#fff!important;font-size:.7rem;font-weight:900;text-decoration:none!important}';
    document.head.appendChild(style);
    frame.removeAttribute('src');frame.style.display='none';
    const loading=document.createElement('div');loading.className='ez-sc-state';loading.innerHTML='<div class="ez-sc-state-inner"><div class="ez-sc-pulse">♪</div><strong>Loading Full Speed Ahead…</strong><p>Resolving the private SoundCloud master.</p></div>';container.appendChild(loading);
    fetch('https://soundcloud.com/oembed?format=json&maxheight=320&color=ef1717&auto_play=false&show_comments=false&url='+encodeURIComponent(trackUrl),{mode:'cors'}).then(r=>{if(!r.ok)throw new Error();return r.json();}).then(data=>{if(!data||!data.html)throw new Error();container.innerHTML=data.html;const resolved=container.querySelector('iframe');if(resolved){resolved.title='Full Speed Ahead by Avi Haimonix on SoundCloud';resolved.setAttribute('allow','autoplay');resolved.setAttribute('loading','lazy');resolved.style.cssText='width:100%;height:300px;border:0;border-radius:17px;display:block';}}).catch(()=>{container.innerHTML=`<div class="ez-sc-state"><div class="ez-sc-state-inner"><div class="ez-sc-pulse">▶</div><strong>Full Speed Ahead</strong><p>The private SoundCloud master cannot be embedded directly.</p><a href="${trackUrl}" target="_blank" rel="noopener">Open private master ↗</a></div></div>`;});
  }

  function loadPageExtensions(){
    const path=location.pathname.toLowerCase();
    if(path.endsWith('/recommendations.html') || path.endsWith('/recommendations')){
      if(!document.querySelector('link[data-ez-recommendations-style]')){const l=document.createElement('link');l.rel='stylesheet';l.href='/recommendations-2026.css?v=20260907-1';l.dataset.ezRecommendationsStyle='true';document.head.appendChild(l);}
    }
    if(path.endsWith('/ai-systems.html') || path.endsWith('/ai-systems')){
      if(!document.querySelector('script[data-ez-ai-systems-extension]')){const s=document.createElement('script');s.src='/ai-systems-extended.js?v=20260907-1';s.dataset.ezAiSystemsExtension='true';document.head.appendChild(s);}
      if(!document.querySelector('link[data-ez-ai-systems-ratings-style]')){const l=document.createElement('link');l.rel='stylesheet';l.href='/ai-systems-ratings.css?v=20260908-1';l.dataset.ezAiSystemsRatingsStyle='true';document.head.appendChild(l);}
      if(!document.querySelector('script[data-ez-ai-systems-ratings]')){const r=document.createElement('script');r.src='/ai-systems-ratings.js?v=20260908-1';r.dataset.ezAiSystemsRatings='true';document.body.appendChild(r);}
    }
    improveMusicReleaseCues();
    fixMusicSoundCloud();
  }

  function init(){
    addStyles();
    markPage();
    renderHeader();
    installHomepageImpact();
    installSecondaryFooterLinks();
    installPageMap();
    installAiSystemMap();
    loadPageExtensions();
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',init,{once:true}); else init();
})();