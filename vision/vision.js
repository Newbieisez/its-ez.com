document.addEventListener('DOMContentLoaded',()=>{
  const chips=[...document.querySelectorAll('[data-store-filter]')];
  const cards=[...document.querySelectorAll('[data-store-category]')];
  chips.forEach(chip=>chip.addEventListener('click',()=>{
    chips.forEach(c=>c.classList.toggle('active',c===chip));
    const f=chip.dataset.storeFilter;
    cards.forEach(card=>{
      const cats=(card.dataset.storeCategory||'').split(/\s+/);
      card.classList.toggle('hidden',f!=='all'&&!cats.includes(f));
    });
  }));

  document.querySelectorAll('[data-segmented]').forEach(group=>{
    group.querySelectorAll('button').forEach(btn=>btn.addEventListener('click',()=>{
      group.querySelectorAll('button').forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      const target=group.dataset.segmented;
      const out=document.querySelector('[data-output="'+target+'"]');
      if(out) out.textContent=btn.textContent.trim();
    }));
  });

  const labButtons=[...document.querySelectorAll('[data-lab-option]')];
  const count=document.querySelector('[data-lab-count]');
  const tags=document.querySelector('[data-selected-tags]');
  function refreshLabs(){
    const selected=labButtons.filter(x=>x.classList.contains('selected'));
    if(count) count.textContent=selected.length+' '+(selected.length===1?'lab':'labs');
    if(tags){
      tags.innerHTML='';
      selected.forEach(btn=>{
        const s=document.createElement('span');
        s.textContent=btn.dataset.labName||btn.textContent.trim();
        tags.appendChild(s);
      });
      if(!selected.length){
        const s=document.createElement('span');
        s.textContent='Choose at least one lab';
        tags.appendChild(s);
      }
    }
  }
  labButtons.forEach(btn=>btn.addEventListener('click',()=>{
    btn.classList.toggle('selected');
    refreshLabs();
  }));
  refreshLabs();

  document.querySelectorAll('[data-mobile-jump]').forEach(btn=>btn.addEventListener('click',()=>{
    const target=document.querySelector(btn.dataset.mobileJump||'#main');
    target?.scrollIntoView({behavior:'smooth'});
  }));
});