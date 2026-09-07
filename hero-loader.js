(function(){
  var href='hero-final.css?v=20260907-final';
  if(!document.querySelector('link[href^="hero-final.css"]')){
    var link=document.createElement('link');
    link.rel='stylesheet';
    link.href=href;
    document.head.appendChild(link);
  }
  function addReUp(){
    var strip=document.querySelector('.ez-client-strip');
    if(strip&&!strip.querySelector('.reup-client')){
      var el=document.createElement('div');
      el.className='ez-client reup-client';
      el.textContent='re-up';
      strip.appendChild(el);
    }
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',addReUp,{once:true});
  else addReUp();
}());
