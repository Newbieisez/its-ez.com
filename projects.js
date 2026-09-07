(function(){
  'use strict';

  var BRAND_ART={
    sentinelone:'https://mms.businesswire.com/media/20240918271872/en/2042532/23/SentinelOne_Logo.jpg',
    twilio:'https://logospng.org/wp-content/uploads/twilio-768x432.png'
  };

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
    enhanceWork();
    enhancePreviews();
    setupNavHighlight();
  }

  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});
  else init();
}());
