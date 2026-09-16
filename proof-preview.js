(() => {
  const ROOT = 'https://its-ez.com/';

  function addStyles() {
    if (document.getElementById('ez-home-clarity-styles')) return;
    const style = document.createElement('style');
    style.id = 'ez-home-clarity-styles';
    style.textContent = `
      .ez-hero-audience{margin:12px 0 0;max-width:760px;color:#c9cbd0;font-size:.82rem;font-weight:850;letter-spacing:.05em;text-transform:uppercase}
      .home-offer-grid{grid-template-columns:repeat(3,minmax(0,1fr))!important}
      .home-offer{min-height:260px!important;display:flex!important;flex-direction:column!important;justify-content:flex-start!important}
      .home-offer strong{font-size:clamp(1.55rem,2.3vw,2.35rem)!important;line-height:1!important;margin-bottom:14px!important}
      .home-offer span{font-size:.98rem!important;line-height:1.58!important}
      .home-offer .ez-offer-fit{display:block;margin-top:auto;padding-top:22px;font-size:.72rem!important;font-weight:900!important;letter-spacing:.06em!important;text-transform:uppercase;color:inherit!important;opacity:.72}
      .ez-capability-note{margin:24px 0 0;padding:18px 0 0;border-top:1px solid rgba(127,127,127,.24);font-size:.86rem;line-height:1.65;color:inherit;opacity:.76}
      .ez-capability-note strong{opacity:1}
      .ez-work-toggle-wrap{display:flex;justify-content:center;margin-top:24px}
      .ez-work-toggle{cursor:pointer}
      .ez-portfolio-hidden{display:none!important}
      .ez-public-proof-note{margin:18px 0 0;padding:14px 16px;border-left:3px solid #ef1717;background:rgba(239,23,23,.06);font-size:.82rem;line-height:1.55}
      .ez-pathway-extra{display:flex;align-items:center;justify-content:space-between;gap:18px;margin-top:20px;padding:18px 20px;border:1px solid var(--line,rgba(127,127,127,.3));border-radius:14px}
      .ez-pathway-extra p{margin:0;line-height:1.45}
      .ez-pathway-extra strong{display:block;margin-bottom:3px}
      .ez-pathway-extra a{white-space:nowrap}
      @media(max-width:900px){.home-offer-grid{grid-template-columns:1fr!important}.home-offer{min-height:0!important}.ez-pathway-extra{align-items:flex-start;flex-direction:column}}
      @media(max-width:620px){.ez-hero-audience{font-size:.72rem;line-height:1.5}.home-offer{padding:22px!important}.ez-capability-note{font-size:.8rem}.ez-pathway-extra{padding:16px}}
    `;
    document.head.appendChild(style);
  }

  function sharpenHero() {
    const kicker = document.querySelector('.ez-hero-kicker');
    const lede = document.querySelector('.ez-hero-lede');
    const domains = document.querySelector('.ez-hero-domains');
    const actions = document.querySelector('.ez-hero-actions');
    if (kicker) kicker.textContent = 'WHEN GTM TEAMS OUTGROW AD HOC ENABLEMENT';
    if (lede) lede.textContent = 'EZ Enablement builds the systems that make sellers, partners, managers, and teams more productive. Sales enablement, partner readiness, AI adoption, learning, and workflow all connected around measurable performance.';
    if (domains) {
      domains.innerHTML = '<span>Sales</span><span>Partners</span><span>AI Adoption</span><span>Learning</span><span>GTM Systems</span>';
      if (!domains.nextElementSibling?.classList.contains('ez-hero-audience')) {
        const audience = document.createElement('p');
        audience.className = 'ez-hero-audience';
        audience.textContent = 'Built for scaling B2B, AI, cybersecurity, gaming, and complex GTM organizations.';
        domains.insertAdjacentElement('afterend', audience);
      }
    }
    if (actions) {
      const links = actions.querySelectorAll('a');
      if (links[0]) {
        links[0].href = 'work-with-me.html';
        links[0].textContent = 'Work With EZ →';
      }
      if (links[1]) {
        links[1].href = '#results';
        links[1].textContent = 'See Results →';
      }
    }
  }

  function simplifyOffers() {
    const section = document.querySelector('.home-offers');
    if (!section) return;
    const eyebrow = section.querySelector('.eyebrow');
    const title = section.querySelector('.section-title');
    const intro = section.querySelector('.home-offers-head .body-copy');
    const grid = section.querySelector('.home-offer-grid');
    const action = section.querySelector('.home-offers-action a');

    if (eyebrow) eyebrow.textContent = 'Three ways to work with EZ Enablement';
    if (title) title.textContent = 'Start with what needs to change.';
    if (intro) intro.textContent = 'You do not need to diagnose the enablement category before we talk. Pick the situation that sounds closest to yours. The detailed capability catalog is still there when you want it.';
    if (grid) {
      grid.innerHTML = `
        <a class="home-offer" href="work-with-me.html#offers">
          <small>01 / BUILD IT</small>
          <strong>Create what does not exist yet.</strong>
          <span>Onboarding, partner academies, AI adoption programs, certification, learning systems, enablement portals, methodology, and GTM operating models built from the ground up.</span>
          <span class="ez-offer-fit">Best when you need a 0→1 build</span>
        </a>
        <a class="home-offer" href="work-with-me.html#offers">
          <small>02 / FIX IT</small>
          <strong>Repair the system behind the performance problem.</strong>
          <span>Slow ramp, inconsistent coaching, weak methodology adoption, fragmented content, disconnected tools, poor partner readiness, or AI that nobody actually uses.</span>
          <span class="ez-offer-fit">Best when something should be working better</span>
        </a>
        <a class="home-offer" href="work-with-me.html#offers">
          <small>03 / RUN IT WITH ME</small>
          <strong>Add experienced enablement leadership without waiting for a full team.</strong>
          <span>Fractional or embedded leadership for strategy, prioritization, stakeholder alignment, program delivery, facilitation, systems, measurement, and ongoing activation.</span>
          <span class="ez-offer-fit">Best when you need leadership + execution</span>
        </a>`;
      if (!grid.nextElementSibling?.classList.contains('ez-capability-note')) {
        const note = document.createElement('p');
        note.className = 'ez-capability-note';
        note.innerHTML = '<strong>Capabilities underneath these paths:</strong> revenue and sales enablement · partner ecosystems · AI adoption and automation · sales systems and operations · learning and capability design · corporate training and facilitation · enablement platforms and digital learning experiences.';
        grid.insertAdjacentElement('afterend', note);
      }
    }
    if (action) action.textContent = 'See the full capability catalog →';
  }

  function clarifyWork() {
    const work = document.getElementById('work');
    if (!work) return;
    const eyebrow = work.querySelector('.eyebrow');
    const title = work.querySelector('.section-title');
    const copy = work.querySelector('.body-copy');
    if (eyebrow) eyebrow.textContent = 'Selected proof + founder track record';
    if (title) title.textContent = 'Start with the strongest work. Go deeper if you want to.';
    if (copy) copy.textContent = 'A curated first look at the systems and programs behind EZ Enablement. The full portfolio remains available, but a first-time visitor should not have to process everything at once.';

    const list = work.querySelector('.work-list');
    if (!list) return;
    const apply = () => {
      const cards = [...list.querySelectorAll('.project-case')];
      if (cards.length < 6) return false;
      cards.forEach((card, index) => card.classList.toggle('ez-portfolio-hidden', index >= 5));
      if (!work.querySelector('.ez-work-toggle-wrap')) {
        const wrap = document.createElement('div');
        wrap.className = 'ez-work-toggle-wrap';
        wrap.innerHTML = '<button class="button button-light ez-work-toggle" type="button" aria-expanded="false">View full portfolio ↓</button>';
        list.insertAdjacentElement('afterend', wrap);
        const button = wrap.querySelector('button');
        button.addEventListener('click', () => {
          const expanded = button.getAttribute('aria-expanded') === 'true';
          cards.forEach((card, index) => card.classList.toggle('ez-portfolio-hidden', !expanded && index >= 5));
          button.setAttribute('aria-expanded', String(!expanded));
          button.textContent = expanded ? 'View full portfolio ↓' : 'Show selected work only ↑';
        });
      }
      return true;
    };
    if (apply()) return;
    const observer = new MutationObserver(() => {
      if (apply()) observer.disconnect();
    });
    observer.observe(list, { childList: true, subtree: true });
    setTimeout(() => observer.disconnect(), 10000);
  }

  function protectPublicProof() {
    const proof = document.getElementById('proof');
    if (!proof || proof.querySelector('.ez-public-proof-note')) return;
    const copy = proof.querySelector('.body-copy');
    if (!copy) return;
    const note = document.createElement('p');
    note.className = 'ez-public-proof-note';
    note.innerHTML = '<strong>Public showroom, not the vault.</strong> These examples are intentionally public demonstrations. Client-confidential systems, source code, credentials, and proprietary implementation details stay private.';
    copy.insertAdjacentElement('afterend', note);
  }

  function clarifyPaths() {
    const section = document.querySelector('.pathways');
    if (!section) return;
    const cards = section.querySelectorAll('.pathway-card');
    if (cards[0]) cards[0].innerHTML = '<small>I\'M HIRING</small><strong>Considering EZ for an enablement leadership role?</strong><span>Resume, career proof, recommendations, and operating experience. ↓</span>';
    if (cards[1]) cards[1].innerHTML = '<small>I HAVE A BUSINESS PROBLEM</small><strong>Need GTM, AI, learning, partner, or sales enablement help?</strong><span>See the three ways to work with EZ Enablement. ↗</span>';
    if (cards[2]) cards[2].innerHTML = '<small>I WANT PROOF</small><strong>Want to inspect the work before we talk?</strong><span>Open the case studies, results, and live systems. ↓</span>';
    if (!section.querySelector('.ez-pathway-extra')) {
      const grid = section.querySelector('.pathway-grid');
      const extra = document.createElement('div');
      extra.className = 'ez-pathway-extra';
      extra.innerHTML = '<p><strong>Meeting EZ at an event?</strong> Open the mobile quick card for contact details, portfolio, resume, LinkedIn, music, and a downloadable contact card.</p><a class="button button-dark" href="ez.html">Open EZ Card →</a>';
      grid?.insertAdjacentElement('afterend', extra);
    }
  }

  function sharpenContact() {
    const contact = document.getElementById('contact');
    if (!contact) return;
    const eyebrow = contact.querySelector('.eyebrow');
    const title = contact.querySelector('.section-title');
    const copy = contact.querySelector('.body-copy');
    if (eyebrow) eyebrow.textContent = 'Bring the problem, not a perfect brief';
    if (title) title.textContent = 'Tell me what needs to work better.';
    if (copy) copy.textContent = 'If the problem touches people, process, learning, GTM execution, AI adoption, partners, or the systems connecting them, start there. We can figure out the project shape together.';
  }

  function init() {
    if (!document.body.classList.contains('ez-homepage')) return;
    addStyles();
    sharpenHero();
    simplifyOffers();
    clarifyWork();
    protectPublicProof();
    clarifyPaths();
    sharpenContact();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init, { once: true });
  else init();
})();
