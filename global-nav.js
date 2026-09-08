(() => {
  const VERSION = '20260908-site-review-fixes-1';
  const ROOT = 'https://its-ez.com/';

  const css = `
  :root{--ez-nav-red:#ef1717;--ez-nav-black:#08090b;--ez-nav-line:rgba(255,255,255,.12)}
  body{padding-top:72px!important}
  .ez-global-header{position:fixed!important;inset:0 0 auto 0!important;z-index:10000!important;height:72px!important;background:rgba(8,9,11,.97)!important;border-bottom:1px solid var(--ez-nav-line)!important;backdrop-filter:blur(18px)!important;-webkit-backdrop-filter:blur(18px)!important;color:#fff!important;font-family:Arial,Helvetica,sans-serif!important;overflow:visible!important}
  .ez-global-header *{box-sizing:border-box}
  .ez-global-shell{width:min(1520px,calc(100% - 40px));height:72px;margin:auto;display:flex;align-items:center;gap:14px;overflow:visible}
  .ez-global-brand{display:flex;align-items:center;gap:10px;color:#fff!important;text-decoration:none!important;flex:0 0 auto}
  .ez-global-mark{display:flex;align-items:center;justify-content:center;width:44px;height:44px;border:2px solid #fff;font-family:Arial Black,Arial,Helvetica,sans-serif;font-size:20px;font-weight:950;letter-spacing:-.11em;line-height:1;white-space:nowrap;overflow:hidden}.ez-global-mark b{display:inline;color:var(--ez-nav-red);font:inherit;margin-left:1px}
  .ez-global-brand-copy{display:grid;gap:1px;line-height:1}.ez-global-brand-copy strong{font-size:12px;letter-spacing:.11em}.ez-global-brand-copy span{font-size:8px;color:#aaa;letter-spacing:.13em;text-transform:uppercase}
  .ez-global-links{margin-left:auto;display:flex;align-items:center;gap:2px;overflow:visible}
  .ez-global-links>a{position:relative;display:flex;align-items:center;min-height:40px;padding:0 8px;border:0;border-radius:8px;background:transparent;color:#d5d5d8!important;text-decoration:none!important;font:800 10.5px/1 Arial,Helvetica,sans-serif!important;white-space:nowrap!important;transition:background .18s ease,color .18s ease}
  .ez-global-links>a:hover,.ez-global-links>a[aria-current="page"]{background:rgba(255,255,255,.07);color:#fff!important}
  .ez-global-links>a[aria-current="page"]:after{content:"";position:absolute;left:8px;right:8px;bottom:2px;height:2px;background:var(--ez-nav-red)}
  .ez-global-cta{display:inline-flex;align-items:center;justify-content:center;min-height:40px;padding:0 14px;border:1px solid var(--ez-nav-red);border-radius:999px;color:#fff!important;text-decoration:none!important;font-size:10px!important;font-weight:900!important;letter-spacing:.07em!important;text-transform:uppercase!important;white-space:nowrap;flex:0 0 auto}.ez-global-cta:hover{background:var(--ez-nav-red)}
  .ez-global-menu{display:none;width:44px;height:44px;margin-left:auto;border:1px solid rgba(255,255,255,.2);border-radius:10px;background:transparent;color:#fff;font-size:22px;cursor:pointer;flex:0 0 auto}

  body.ez-homepage .section{padding-top:70px!important;padding-bottom:70px!important}
  body.ez-homepage .section-title{font-size:clamp(1.95rem,3.1vw,3.45rem)!important;line-height:1.04!important;letter-spacing:-.045em!important}

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

  @media(max-width:1320px){.ez-global-brand-copy{display:none}.ez-global-shell{gap:8px}.ez-global-links>a{padding:0 6px;font-size:9.6px!important}.ez-global-cta{padding:0 11px;font-size:9px!important}}
  @media(max-width:1040px){body{padding-top:64px!important}.ez-global-header{height:64px!important}.ez-global-shell{height:64px;width:min(100% - 24px,1520px)}.ez-global-mark{width:40px;height:40px;font-size:18px}.ez-global-brand-copy{display:grid}.ez-global-menu{display:block}.ez-global-cta{display:none}.ez-global-links{display:none;position:absolute;left:12px;right:12px;top:64px;z-index:10001;margin:0;padding:10px;background:#0b0c0f;border:1px solid rgba(255,255,255,.13);border-radius:0 0 16px 16px;box-shadow:0 20px 45px rgba(0,0,0,.5);grid-template-columns:repeat(2,minmax(0,1fr));gap:4px;max-height:calc(100dvh - 76px);overflow:auto}.ez-global-header.is-open .ez-global-links{display:grid}.ez-global-links>a{width:100%;min-height:44px;padding:0 12px;font-size:12px!important}.ez-global-links>a[aria-current="page"]:after{left:12px;right:12px}body.ez-work-with-me .wm-grid{grid-template-columns:1fr!important}body.ez-work-with-me .wm-side{max-width:660px!important}body.ez-music .hero-grid{grid-template-columns:1fr!important}}
  @media(max-width:720px){body.ez-music .release-grid{grid-template-columns:1fr 1fr!important}body.ez-music .release{min-height:190px!important}body.ez-work-with-me .wm-hero{padding:66px 0 56px!important}body.ez-work-with-me .wm-hero h1{font-size:clamp(3rem,14vw,4.9rem)!important}}
  @media(max-width:520px){.ez-global-links{grid-template-columns:1fr}.ez-global-brand-copy strong{font-size:10px}.ez-global-brand-copy span{font-size:7px}body.ez-homepage .section{padding-top:54px!important;padding-bottom:54px!important}body.ez-music .section{padding:54px 0!important}body.ez-music .release-grid{grid-template-columns:1fr!important}body.ez-music .release{min-height:170px!important}}
  @media(max-width:360px){.ez-global-brand-copy{display:none}.ez-global-shell{width:calc(100% - 18px)}}
  `;

  const navItems = [
    ['Home',ROOT],['Work',ROOT+'#work'],['Services',ROOT+'work-with-me.html'],['AI Systems',ROOT+'ai-systems.html'],['MEDDPICC','https://meddpicc-is-ez.erezhaimowicz.workers.dev/'],['Cybersecurity','https://ez-human-threat-academy.erezhaimowicz.workers.dev/'],['Music',ROOT+'music.html'],['Recommendations',ROOT+'recommendations.html']
  ];

  function addStyles(){
    if(!document.querySelector('link[data-ez-responsive]')){
      const link=document.createElement('link');
      link.rel='stylesheet';
      link.href=ROOT+'responsive-2026.css?v=20260908-site-review-fixes-1';
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
    if(label==='MEDDPICC') return host.includes('meddpicc-is-ez');
    if(label==='Cybersecurity') return host.includes('ez-human-threat-academy');
    if(host!=='its-ez.com' && host!=='www.its-ez.com') return false;
    const targetPath=new URL(href).pathname.toLowerCase();
    if(label==='Home') return (path==='/' || path==='/index.html') && !location.hash;
    if(label==='Work') return (path==='/' || path==='/index.html') && location.hash==='#work';
    return targetPath===path;
  }

  function markPage(){
    const host=location.hostname.toLowerCase();
    const path=location.pathname.toLowerCase();
    if(path==='/' || path==='/index.html') document.body.classList.add('ez-homepage');
    if(path.endsWith('/ai-systems.html') || path.endsWith('/ai-systems')) document.body.classList.add('ez-ai-systems');
    if(path.endsWith('/music.html') || path.endsWith('/music')) document.body.classList.add('ez-music');
    if(path.endsWith('/recommendations.html') || path.endsWith('/recommendations')) document.body.classList.add('ez-recommendations');
    if(path.endsWith('/work-with-me.html') || path.endsWith('/work-with-me')) document.body.classList.add('ez-work-with-me');
    if(host.includes('meddpicc-is-ez')) document.body.classList.add('ez-meddpicc');
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
    button.addEventListener('click',()=>{const open=header.classList.toggle('is-open');button.setAttribute('aria-expanded',String(open));button.setAttribute('aria-label',open?'Close navigation':'Open navigation');button.textContent=open?'×':'☰';});
    header.querySelector('.ez-global-links').addEventListener('click',e=>{if(e.target.closest('a')){closeMenu();setTimeout(updateActive,0);}});
    window.addEventListener('hashchange',updateActive);
    window.addEventListener('popstate',updateActive);
    window.addEventListener('resize',()=>{if(window.innerWidth>1040)closeMenu();},{passive:true});
    document.addEventListener('keydown',e=>{if(e.key==='Escape'&&header.classList.contains('is-open')){closeMenu();button.focus();}});
  }

  function installPageMap(){
    const apply=()=>{
      const map=document.querySelector('.ez-page-map');
      const toggle=document.querySelector('.ez-page-map-toggle');
      if(!map || !toggle) return false;
      map.removeAttribute('aria-hidden');
      toggle.removeAttribute('aria-hidden');
      toggle.textContent='☷ Page map';
      if(!document.getElementById('ez-page-map-cleanup')){
        const style=document.createElement('style');
        style.id='ez-page-map-cleanup';
        style.textContent=`
          .ez-page-map-toggle{display:flex!important;align-items:center!important;justify-content:center!important;position:fixed!important;left:18px!important;top:auto!important;bottom:18px!important;z-index:9991!important;width:auto!important;min-width:0!important;min-height:42px!important;padding:0 14px!important;border-radius:999px!important;transform:none!important;writing-mode:horizontal-tb!important;text-orientation:mixed!important;font-size:9px!important;letter-spacing:.09em!important;box-shadow:0 10px 28px rgba(0,0,0,.25)!important}
          .ez-page-map{display:none!important;position:fixed!important;left:18px!important;right:auto!important;top:auto!important;bottom:70px!important;z-index:9990!important;width:min(260px,calc(100vw - 36px))!important;max-height:min(64vh,560px)!important;transform:none!important;overflow:auto!important;border-radius:16px!important;box-shadow:0 18px 48px rgba(0,0,0,.34)!important}
          .ez-page-map.is-open{display:block!important}
          @media(max-width:620px){.ez-page-map-toggle{left:12px!important;bottom:12px!important;min-height:44px!important;padding:0 15px!important}.ez-page-map{left:12px!important;bottom:64px!important;width:min(250px,calc(100vw - 24px))!important;max-height:62vh!important}}
        `;
        document.head.appendChild(style);
      }
      map.querySelectorAll('a').forEach(a=>{if(a.textContent.trim()==='People')a.textContent='Recommendations';});
      const close=()=>{map.classList.remove('is-open');toggle.setAttribute('aria-expanded','false');};
      if(!map.dataset.ezCloseBound){
        map.dataset.ezCloseBound='true';
        map.addEventListener('click',e=>{if(e.target.closest('a'))close();});
        document.addEventListener('click',e=>{if(map.classList.contains('is-open')&&!map.contains(e.target)&&!toggle.contains(e.target))close();});
        document.addEventListener('keydown',e=>{if(e.key==='Escape'&&map.classList.contains('is-open')){close();toggle.focus();}});
      }
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
      style.textContent=`.page-map-toggle{display:flex!important;align-items:center!important;justify-content:center!important;position:fixed!important;left:18px!important;top:auto!important;bottom:18px!important;z-index:9991!important;width:auto!important;min-height:42px!important;padding:0 14px!important;border-radius:999px!important;transform:none!important;writing-mode:horizontal-tb!important}.page-map{display:none!important;position:fixed!important;left:18px!important;top:auto!important;bottom:70px!important;z-index:9990!important;width:min(260px,calc(100vw - 36px))!important;max-height:min(64vh,560px)!important;overflow:auto!important;transform:none!important}.page-map.is-open{display:block!important}@media(max-width:720px){.page-map-toggle{left:12px!important;bottom:12px!important}.page-map{left:12px!important;bottom:64px!important;width:min(250px,calc(100vw - 24px))!important}}`;
      document.head.appendChild(style);
    }
    toggle.textContent='☷ System map';
    const close=()=>{map.classList.remove('is-open');toggle.setAttribute('aria-expanded','false');};
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

  function init(){addStyles();markPage();renderHeader();installPageMap();installAiSystemMap();loadPageExtensions();}
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',init,{once:true}); else init();
})();