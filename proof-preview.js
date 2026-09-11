(() => {
  if (!document.body.classList.contains('ez-homepage')) return;

  const ROOT = (location.hostname.includes('githack.com') || location.hostname.includes('github.io'))
    ? location.href.replace(/[^/]*(?:[?#].*)?$/, '')
    : 'https://its-ez.com/';

  const css = `
    .ez-proof-receipts{padding:78px 0;background:#f4f1eb;color:#151515;border-top:1px solid rgba(0,0,0,.1);border-bottom:1px solid rgba(0,0,0,.12);isolation:isolate}
    .ez-proof-receipts *{box-sizing:border-box}
    .ez-proof-receipts .wrap{position:relative;transform:none!important;perspective:none!important}
    .ez-proof-head{display:grid;grid-template-columns:minmax(0,1.05fr) minmax(320px,.95fr);gap:46px;align-items:end;margin-bottom:28px}
    .ez-proof-kicker{margin:0 0 12px;color:#ef1717;font:900 11px/1 Arial,Helvetica,sans-serif;letter-spacing:.18em;text-transform:uppercase}
    .ez-proof-head h2{margin:0;font-size:clamp(2.7rem,5vw,5.5rem);line-height:.9;letter-spacing:-.055em;text-transform:uppercase}
    .ez-proof-head p{margin:0;color:#57534f;font-size:1rem;line-height:1.7}
    .ez-proof-note{margin:0 0 22px;padding:12px 14px;border-left:3px solid #ef1717;background:#fff;color:#5d5954;font-size:.82rem;line-height:1.55}
    .ez-proof-grid{display:grid;grid-template-columns:repeat(12,minmax(0,1fr));gap:14px;align-items:start}
    .ez-proof-card{grid-column:span 4;display:flex;flex-direction:column;min-width:0;border:1px solid rgba(0,0,0,.15);border-radius:18px;overflow:hidden;background:#fff;box-shadow:0 12px 34px rgba(0,0,0,.06)!important;transform:none!important;perspective:none!important;filter:none!important}
    .ez-proof-card:hover{transform:none!important;box-shadow:0 12px 34px rgba(0,0,0,.06)!important}
    .ez-proof-card.wide{grid-column:span 6}
    .ez-proof-media{display:block;width:100%;aspect-ratio:16/10;background:#0c0d10;overflow:hidden;transform:none!important;perspective:none!important;border:0!important;border-radius:0!important;box-shadow:none!important}
    .ez-proof-card.ez-proof-portrait .ez-proof-media{aspect-ratio:4/5}
    .ez-proof-media img{display:block;width:100%!important;height:100%!important;max-width:none!important;object-fit:contain!important;background:#fff!important;border:0!important;border-radius:0!important;box-shadow:none!important;transform:none!important;filter:none!important;position:static!important}
    .ez-proof-card-copy{padding:18px 18px 20px;transform:none!important}
    .ez-proof-card-copy small{display:block;margin-bottom:8px;color:#ef1717;font:900 9px/1.2 Arial,Helvetica,sans-serif;letter-spacing:.13em;text-transform:uppercase}
    .ez-proof-card-copy h3{margin:0;font-size:1.18rem;line-height:1.15;letter-spacing:-.025em}
    .ez-proof-card-copy p{margin:9px 0 0;color:#5b5753;font-size:.87rem;line-height:1.58}
    .ez-proof-source-note{margin:18px 0 0;color:#77716b;font-size:.72rem;line-height:1.5}
    @media(max-width:980px){.ez-proof-card,.ez-proof-card.wide{grid-column:span 6}.ez-proof-head{grid-template-columns:1fr;gap:18px}}
    @media(max-width:620px){.ez-proof-receipts{padding:56px 0}.ez-proof-card,.ez-proof-card.wide{grid-column:1/-1}.ez-proof-card.ez-proof-portrait .ez-proof-media{aspect-ratio:4/4.4}.ez-proof-head h2{font-size:clamp(2.5rem,13vw,4rem)}}
  `;

  if (!document.getElementById('ez-proof-receipts-style')) {
    const style = document.createElement('style');
    style.id = 'ez-proof-receipts-style';
    style.textContent = css;
    document.head.appendChild(style);
  }

  if (document.querySelector('.ez-proof-receipts')) return;

  const section = document.createElement('section');
  section.className = 'ez-proof-receipts';
  section.id = 'proof-artifacts';
  section.dataset.pageMapLabel = 'Proof artifacts';
  section.setAttribute('aria-labelledby', 'ez-proof-receipts-title');
  section.innerHTML = `
    <div class="wrap">
      <div class="ez-proof-head">
        <div>
          <p class="ez-proof-kicker">Selected proof / preview</p>
          <h2 id="ez-proof-receipts-title">A few receipts from the work itself.</h2>
        </div>
        <p>The site should not ask you to believe a resume bullet. These are selected artifacts from the actual work: recognition, training materials, event delivery, and external features. No downloads and no document dump.</p>
      </div>
      <p class="ez-proof-note"><strong>Preview only:</strong> this is the first curated proof set for EZ approval. The final public version will use only the artifacts and captions EZ approves.</p>
      <div class="ez-proof-grid">
        <article class="ez-proof-card wide">
          <div class="ez-proof-media"><img src="${ROOT}assets/proof/sentinelone-culture-champion.webp" alt="SentinelOne FY25 Global Partner Ecosystem Award recognizing EZ Haimowicz as a OneSentinel Culture Champion" loading="lazy"></div>
          <div class="ez-proof-card-copy"><small>Recognition / SentinelOne</small><h3>Partner enablement work recognized for culture and contribution.</h3><p>FY25 Global Partner Ecosystem recognition naming EZ Haimowicz a OneSentinel Culture Champion.</p></div>
        </article>
        <article class="ez-proof-card ez-proof-portrait">
          <div class="ez-proof-media"><img src="${ROOT}assets/proof/twilio-trainer-mentor.webp" alt="Twilio recognition thanking EZ Haimowicz for mentoring another trainer" loading="lazy"></div>
          <div class="ez-proof-card-copy"><small>Trainer development / Twilio</small><h3>Mentoring the people who train the field.</h3><p>Peer recognition for helping another trainer build confidence, move the plan forward, and grow from a trainer standpoint.</p></div>
        </article>
        <article class="ez-proof-card ez-proof-portrait">
          <div class="ez-proof-media"><img src="${ROOT}assets/proof/twilio-sko-recognition.webp" alt="Twilio recognition thanking EZ Haimowicz for helping make SKO successful" loading="lazy"></div>
          <div class="ez-proof-card-copy"><small>SKO delivery / Twilio</small><h3>Helping make the live experience actually work.</h3><p>Recognition for contributing across breakouts, rehearsals, logistics, long schedules, and the details that helped make SKO successful.</p></div>
        </article>
        <article class="ez-proof-card wide">
          <div class="ez-proof-media"><img src="${ROOT}assets/proof/reup-vivo-training.webp" alt="ReUp and Vivo partner training slide showing a six-step joint process" loading="lazy"></div>
          <div class="ez-proof-card-copy"><small>Training artifact / ReUp</small><h3>Turning a new partner motion into something people could follow.</h3><p>A real ReUp/Vivo training artifact mapping the joint process from client identification through agreement, scanning, sourcing, and build.</p></div>
        </article>
        <article class="ez-proof-card wide">
          <div class="ez-proof-media"><img src="${ROOT}assets/proof/gong-spotlight-ez.webp" alt="Gong Spotlight Feature with EZ Haimowicz" loading="lazy"></div>
          <div class="ez-proof-card-copy"><small>Guest collaboration</small><h3>Invited to share practical tool knowledge.</h3><p>A Gong Spotlight feature with EZ Haimowicz, supporting the broader story of guest speaking, collaboration, and practitioner-led learning.</p></div>
        </article>
      </div>
      <p class="ez-proof-source-note">Company names and marks shown here appear only as part of original recognition or work artifacts and do not imply current endorsement or affiliation.</p>
    </div>`;

  const work = document.getElementById('work');
  const operating = document.getElementById('operating');
  if (work) work.insertAdjacentElement('afterend', section);
  else if (operating) operating.insertAdjacentElement('beforebegin', section);
})();
