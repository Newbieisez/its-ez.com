(function(){
  var css=document.createElement('link');
  css.rel='stylesheet';
  css.href='hero-2026.css?v=20260906-approved-v3';
  document.head.appendChild(css);

  var hotfix=document.createElement('style');
  hotfix.textContent='.portrait-stage:after{display:none!important;content:none!important}.hero:not(.hero-2026) .portrait-stage{overflow:visible!important}';
  document.head.appendChild(hotfix);

  function buildApprovedHero(){
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
            <img class="ez-hero-portrait" src="assets/ez-hero-black-shirt-v2.jpg?v=3" alt="Erez Haimowicz smiling in a black shirt">\
            <div class="ez-hero-portrait-shade" aria-hidden="true"></div>\
          </div>\
        </div>\
        <div class="ez-client-strip" aria-label="Companies where Erez has led sales, revenue, or enablement work">\
          <div class="ez-client"><img src="sentinelone-logo.svg?v=2" alt="SentinelOne"></div>\
          <div class="ez-client"><img src="assets/twilio-logo.svg" alt="Twilio"></div>\
          <div class="ez-client"><img src="assets/tessian-logo.svg" alt="Tessian"></div>\
          <div class="ez-client"><img src="assets/cofense-logo.svg" alt="Cofense"></div>\
          <div class="ez-client"><img src="assets/mimecast-logo.svg" alt="Mimecast"></div>\
          <div class="ez-client"><img src="assets/proofpoint-logo.svg" alt="Proofpoint"></div>\
        </div>\
        <div class="ez-hero-mantra"><strong>Know it. Practice it. Prove it. Perform.</strong><span>PEOPLE · SYSTEMS · REAL IMPACT</span></div>\
      </div>';
  }

  var original=document.createElement('script');
  original.src='projects-original.js?v=20260906-approved-v2';
  original.async=false;
  document.head.appendChild(original);

  var attempts=0;
  var heroTimer=setInterval(function(){
    attempts++;
    if(window.__ezCinematicEnhancements||attempts>30){
      clearInterval(heroTimer);
      buildApprovedHero();
      setTimeout(buildApprovedHero,250);
    }
  },50);

  if(document.readyState==='loading'){
    document.addEventListener('DOMContentLoaded',function(){setTimeout(buildApprovedHero,350)},{once:true});
  }else{
    setTimeout(buildApprovedHero,350);
  }
}());