(() => {
  const VERSION = '20260908-global-nav-8';
  const ROOT = 'https://its-ez.com/';
  const css = `
  :root{--ez-nav-red:#ef1717;--ez-nav-black:#08090b;--ez-nav-line:rgba(255,255,255,.12)}
  body{padding-top:72px!important}
  .ez-global-header{position:fixed!important;inset:0 0 auto 0!important;z-index:9999!important;height:72px!important;background:rgba(8,9,11,.96)!important;border-bottom:1px solid var(--ez-nav-line)!important;backdrop-filter:blur(18px)!important;-webkit-backdrop-filter:blur(18px)!important;color:#fff!important;font-family:Arial,Helvetica,sans-serif!important}
  .ez-global-header *{box-sizing:border-box}
  .ez-global-shell{width:min(1440px,calc(100% - 40px));height:72px;margin:auto;display:flex;align-items:center;gap:22px}
  .ez-global-brand{display:flex;align-items:center;gap:10px;color:#fff!important;text-decoration:none!important;flex:0 0 auto}
  .ez-global-mark{display:flex;align-items:center;justify-content:center;flex-wrap:nowrap;width:44px;height:44px;border:2px solid #fff;font-family:Arial Black,Arial,Helvetica,sans-serif;font-size:20px;font-weight:950;letter-spacing:-.11em;line-height:1;white-space:nowrap;overflow:hidden}.ez-global-mark b{display:inline;color:var(--ez-nav-red);font:inherit;margin-left:1px}
  .ez-global-brand-copy{display:grid;gap:1px;line-height:1}.ez-global-brand-copy strong{font-size:12px;letter-spacing:.11em}.ez-global-brand-copy span{font-size:8px;color:#aaa;letter-spacing:.13em;text-transform:uppercase}
  .ez-global-links{margin-left:auto;display:flex;align-items:center;gap:4px}
  .ez-global-links a{position:relative;display:flex;align-items:center;min-height:40px;padding:0 10px;border-radius:8px;color:#d5d5d8!important;text-decoration:none!important;font-size:11px!important;font-weight:800!important;letter-spacing:.01em!important;white-space:nowrap!important;transition:background .18s ease,color .18s ease}
  .ez-global-links a:hover,.ez-global-links a[aria-current="page"]{background:rgba(255,255,255,.07);color:#fff!important}
  .ez-global-links a[aria-current="page"]:after{content:"";position:absolute;left:10px;right:10px;bottom:2px;height:2px;background:var(--ez-nav-red)}
  .ez-global-cta{display:inline-flex;align-items:center;justify-content:center;min-height:40px;padding:0 16px;border:1px solid var(--ez-nav-red);border-radius:999px;color:#fff!important;text-decoration:none!important;font-size:10px!important;font-weight:900!important;letter-spacing:.08em!important;text-transform:uppercase!important;white-space:nowrap}
  .ez-global-cta:hover{background:var(--ez-nav-red)}
  .ez-global-menu{display:none;width:44px;height:44px;margin-left:auto;border:1px solid rgba(255,255,255,.2);border-radius:10px;background:transparent;color:#fff;font-size:22px;cursor:pointer}
  .ez-global-header + .nav{top:72px!important}
  @media(max-width:1180px){.ez-global-brand-copy{display:none}.ez-global-shell{gap:12px}.ez-global-links a{padding:0 7px;font-size:10px!important}.ez-global-cta{padding:0 12px}}
  @media(max-width:930px){
    body{padding-top:64px!important}.ez-global-header{height:64px!important}.ez-global-shell{height:64px;width:min(100% - 24px,1440px)}.ez-global-mark{width:40px;height:40px;font-size:18px}.ez-global-brand-copy{display:grid}.ez-global-menu{display:block}.ez-global-cta{display:none}.ez-global-header + .nav{top:64px!important}
    .ez-global-links{display:none;position:absolute;left:12px;right:12px;top:64px;margin:0;padding:10px;background:#0b0c0f;border:1px solid rgba(255,255,255,.13);border-radius:0 0 16px 16px;box-shadow:0 20px 45px rgba(0,0,0,.42);grid-template-columns:repeat(2,minmax(0,1fr));gap:4px}
    .ez-global-header.is-open .ez-global-links{display:grid}.ez-global-links a{min-height:44px;padding:0 12px;font-size:12px!important}.ez-global-links a[aria-current="page"]:after{left:12px;right:12px}
  }
  @media(max-width:520px){.ez-global-links{grid-template-columns:1fr}.ez-global-brand-copy strong{font-size:10px}.ez-global-brand-copy span{font-size:7px}}
  `;

  function addStyles(){
    if(document.getElementById('ez-global-nav-style')) return;
    const style=document.createElement('style');
    style.id='ez-global-nav-style'; style.textContent=css; document.head.appendChild(style);
  }

  const items = [
    ['Home',ROOT],
    ['Work',ROOT+'#work'],
    ['Work With Me',ROOT+'work-with-me.html'],
    ['AI Systems',ROOT+'ai-systems.html'],
    ['MEDDPICC','https://meddpicc-is-ez.erezhaimowicz.workers.dev/'],
    ['Cybersecurity','https://ez-human-threat-academy.erezhaimowicz.workers.dev/'],
    ['Music',ROOT+'music.html'],
    ['People',ROOT+'recommendations.html'],
    ['Contact',ROOT+'#contact']
  ];

  function currentFor(label, href){
    const host=location.hostname.toLowerCase();
    const path=location.pathname.toLowerCase();
    if(label==='MEDDPICC') return host.includes('meddpicc-is-ez');
    if(label==='Cybersecurity') return host.includes('ez-human-threat-academy');
    if(host!=='its-ez.com' && host!=='www.its-ez.com') return false;
    const target=new URL(href);
    const targetPath=target.pathname.toLowerCase();
    if(label==='Home') return (path==='/' || path==='/index.html') && !location.hash;
    if(label==='Work') return (path==='/' || path==='/index.html') && location.hash==='#work';
    if(label==='Contact') return (path==='/' || path==='/index.html') && location.hash==='#contact';
    return targetPath===path;
  }

  function render(){
    addStyles();
    const old=document.querySelector('header.site-header, .site-header');
    const header=document.createElement('header');
    header.className='ez-global-header';
    header.setAttribute('data-version',VERSION);
    header.innerHTML=`<div class="ez-global-shell">
      <a class="ez-global-brand" href="${ROOT}" aria-label="EZ Enablement home"><span class="ez-global-mark">E<b>Z</b></span><span class="ez-global-brand-copy"><strong>EZ ENABLEMENT</strong><span>Enablement made possible</span></span></a>
      <nav class="ez-global-links" id="ez-global-links" aria-label="Primary navigation">
        ${items.map(([label,href])=>`<a href="${href}" data-ez-label="${label}">${label}</a>`).join('')}
      </nav>
      <a class="ez-global-cta" href="${ROOT}#contact">Let's connect</a>
      <button class="ez-global-menu" type="button" aria-expanded="false" aria-controls="ez-global-links" aria-label="Open navigation">☰</button>
    </div>`;
    if(old) old.replaceWith(header); else document.body.prepend(header);

    const updateActive=()=>{
      header.querySelectorAll('.ez-global-links a').forEach(a=>{
        const label=a.dataset.ezLabel;
        const active=currentFor(label,a.href);
        if(active) a.setAttribute('aria-current','page'); else a.removeAttribute('aria-current');
      });
    };
    updateActive();
    window.addEventListener('hashchange',updateActive);
    window.addEventListener('popstate',updateActive);

    const button=header.querySelector('.ez-global-menu');
    button.addEventListener('click',()=>{const open=header.classList.toggle('is-open');button.setAttribute('aria-expanded',String(open));button.setAttribute('aria-label',open?'Close navigation':'Open navigation');button.textContent=open?'×':'☰';});
    header.querySelector('.ez-global-links').addEventListener('click',e=>{if(e.target.closest('a')){header.classList.remove('is-open');button.setAttribute('aria-expanded','false');button.textContent='☰';setTimeout(updateActive,0);}});
    document.addEventListener('keydown',e=>{if(e.key==='Escape'&&header.classList.contains('is-open')){header.classList.remove('is-open');button.setAttribute('aria-expanded','false');button.setAttribute('aria-label','Open navigation');button.textContent='☰';button.focus();}});
  }

  function fixMusicSoundCloud(){
    const path=location.pathname.toLowerCase();
    const isMusic=path.endsWith('/music.html') || path.endsWith('/music');
    if(!isMusic) return;

    const frame=document.querySelector('.soundcloud iframe');
    if(!frame) return;
    const container=frame.closest('.soundcloud') || frame.parentElement;
    const trackUrl='https://soundcloud.com/haimonix/full-speed-ahead-yacht-rock/s-XCooCM1Kq6V';

    const musicStyle=document.createElement('style');
    musicStyle.textContent=`
      .ez-sc-state{min-height:300px;border-radius:17px;display:flex;align-items:center;justify-content:center;padding:34px;text-align:center;background:radial-gradient(circle at 50% 18%,rgba(255,92,0,.14),transparent 34%),linear-gradient(145deg,#111116,#08080b);color:#fff}
      .ez-sc-state-inner{max-width:520px}.ez-sc-pulse{width:56px;height:56px;margin:0 auto 18px;border-radius:50%;border:1px solid rgba(255,255,255,.14);display:grid;place-items:center;font-size:22px;background:#ff5500;box-shadow:0 0 32px rgba(255,85,0,.2)}
      .ez-sc-state strong{display:block;font-size:1.15rem}.ez-sc-state p{margin:9px 0 18px;color:#999ba4;font-size:.78rem;line-height:1.6}.ez-sc-state a{display:inline-flex;align-items:center;justify-content:center;min-height:42px;padding:0 16px;border-radius:999px;background:#ff5500;color:#fff!important;font-size:.7rem;font-weight:900;letter-spacing:.06em;text-transform:uppercase;text-decoration:none!important}.ez-sc-state a:hover{background:#ff6a1a}
      .soundcloud iframe{background:#111!important}
    `;
    document.head.appendChild(musicStyle);

    frame.removeAttribute('src');
    frame.style.display='none';
    const loading=document.createElement('div');
    loading.className='ez-sc-state';
    loading.innerHTML='<div class="ez-sc-state-inner"><div class="ez-sc-pulse">♪</div><strong>Loading Full Speed Ahead…</strong><p>Resolving the private SoundCloud master.</p></div>';
    container.appendChild(loading);

    const endpoint='https://soundcloud.com/oembed?format=json&maxheight=320&color=ef1717&auto_play=false&show_comments=false&url='+encodeURIComponent(trackUrl);
    fetch(endpoint,{mode:'cors'})
      .then(response=>{if(!response.ok) throw new Error('SoundCloud oEmbed '+response.status);return response.json();})
      .then(data=>{
        if(!data || !data.html) throw new Error('SoundCloud returned no player');
        container.innerHTML=data.html;
        const resolved=container.querySelector('iframe');
        if(resolved){
          resolved.title='Full Speed Ahead by Avi Haimonix on SoundCloud';
          resolved.setAttribute('allow','autoplay');
          resolved.setAttribute('loading','lazy');
          resolved.style.width='100%';
          resolved.style.height='300px';
          resolved.style.border='0';
          resolved.style.borderRadius='17px';
          resolved.style.display='block';
        }
      })
      .catch(()=>{
        container.innerHTML=`<div class="ez-sc-state"><div class="ez-sc-state-inner"><div class="ez-sc-pulse">▶</div><strong>Full Speed Ahead</strong><p>The private SoundCloud master cannot be embedded directly, so the broken white error player has been removed.</p><a href="${trackUrl}" target="_blank" rel="noopener">Open private master ↗</a></div></div>`;
      });
  }

  function loadPageExtensions(){
    const path=location.pathname.toLowerCase();
    const isAiSystems=path.endsWith('/ai-systems.html') || path.endsWith('/ai-systems');
    if(isAiSystems){
      if(!document.querySelector('script[data-ez-ai-systems-extension]')){
        const script=document.createElement('script');
        script.src='/ai-systems-extended.js?v=20260907-1';
        script.dataset.ezAiSystemsExtension='true';
        document.head.appendChild(script);
      }

      if(!document.querySelector('link[data-ez-ai-systems-ratings-style]')){
        const link=document.createElement('link');
        link.rel='stylesheet';
        link.href='/ai-systems-ratings.css?v=20260908-1';
        link.dataset.ezAiSystemsRatingsStyle='true';
        document.head.appendChild(link);
      }

      if(!document.querySelector('script[data-ez-ai-systems-ratings]')){
        const ratings=document.createElement('script');
        ratings.src='/ai-systems-ratings.js?v=20260908-1';
        ratings.dataset.ezAiSystemsRatings='true';
        document.body.appendChild(ratings);
      }
    }
    fixMusicSoundCloud();
  }

  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',()=>{render();loadPageExtensions();},{once:true}); else {render();loadPageExtensions();}
})();