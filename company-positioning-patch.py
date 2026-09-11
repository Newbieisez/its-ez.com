from pathlib import Path


def replace_once(text, old, new, label):
    count = text.count(old)
    if count != 1:
        raise SystemExit(f"{label}: expected exactly 1 match, found {count}")
    return text.replace(old, new, 1)

# Homepage: company-first positioning while preserving founder proof.
p = Path('index.html')
text = p.read_text()
replacements = [
    ('<title>Erez Haimowicz | GTM, Revenue & Enablement Leader</title>', '<title>EZ Enablement | Training & Enablement Systems That Perform</title>', 'homepage title'),
    ('<meta name="description" content="Erez Haimowicz builds revenue systems that scale across sales, GTM, partner enablement, AI, and learning.">', '<meta name="description" content="EZ Enablement builds practical training and enablement systems for sales teams, partners, leaders, and organizations adopting AI.">', 'homepage description'),
    ('<meta property="og:title" content="Erez Haimowicz | GTM & Revenue Enablement Leader">', '<meta property="og:title" content="EZ Enablement | Training & Enablement Systems">', 'og title'),
    ('<meta property="og:description" content="Building revenue systems that scale across Sales, Revenue, GTM, Partner Enablement, and AI.">', '<meta property="og:description" content="Training and enablement built around capability, behavior, and measurable performance.">', 'og description'),
    ('<meta name="twitter:title" content="Erez Haimowicz | GTM & Revenue Enablement Leader">', '<meta name="twitter:title" content="EZ Enablement | Training & Enablement Systems">', 'twitter title'),
    ('<meta name="twitter:description" content="Building revenue systems that scale across Sales, Revenue, GTM, Partner Enablement, and AI.">', '<meta name="twitter:description" content="Training and enablement built around capability, behavior, and measurable performance.">', 'twitter description'),
    ('<script type="application/ld+json">{"@context":"https://schema.org","@type":"Person","name":"Erez Haimowicz","alternateName":"EZ","url":"https://its-ez.com/","jobTitle":"GTM & Revenue Enablement Leader","sameAs":["https://www.linkedin.com/in/erezhaimowicz"],"knowsAbout":["Sales Enablement","Revenue Enablement","Partner Enablement","GTM Strategy","Artificial Intelligence","Sales Methodology","MEDDPICC","Salesforce","Gong","Highspot"]}</script>', '<script type="application/ld+json">{"@context":"https://schema.org","@type":"Organization","name":"EZ Enablement","url":"https://its-ez.com/","description":"Training and enablement systems for sales teams, partners, leaders, and organizations adopting AI.","founder":{"@type":"Person","name":"Erez Haimowicz","alternateName":"EZ","sameAs":["https://www.linkedin.com/in/erezhaimowicz"]},"knowsAbout":["Training","Sales Enablement","Revenue Enablement","Partner Enablement","AI Adoption","Learning Design","GTM Systems","MEDDPICC"]}</script>', 'homepage schema'),
    ('<p class="ez-hero-kicker">ENABLE WHAT’S NEXT</p>', '<p class="ez-hero-kicker">TRAINING + ENABLEMENT SYSTEMS</p>', 'hero kicker'),
    ('<h1 class="ez-hero-title"><span>BUILDING</span><span>REVENUE SYSTEMS</span><em>THAT SCALE</em></h1>', '<h1 class="ez-hero-title"><span>BUILD CAPABILITY.</span><span>CHANGE BEHAVIOR.</span><em>MOVE PERFORMANCE.</em></h1>', 'hero heading'),
    ('<div class="ez-hero-domains" aria-label="Areas of expertise"><span>Sales</span><span>Revenue</span><span>GTM</span><span>Partner Enablement</span><span>AI</span></div>', '<div class="ez-hero-domains" aria-label="EZ Enablement capabilities"><span>Sales Enablement</span><span>Partner Enablement</span><span>Training</span><span>AI Adoption</span><span>Learning Systems</span></div>', 'hero domains'),
    ('<p class="ez-hero-lede">I help companies turn knowledge into measurable performance through enablement, AI, and GTM systems that actually work.</p>', '<p class="ez-hero-lede">EZ Enablement helps companies build practical training and enablement systems that turn knowledge into confident execution and measurable performance.</p>', 'hero lede'),
    ('<div class="ez-hero-actions"><a class="button button-orange" href="work-with-me.html">Work With Me →</a><a class="button button-light" href="#work">See My Work →</a></div>', '<div class="ez-hero-actions"><a class="button button-orange" href="work-with-me.html">Explore Services →</a><a class="button button-light" href="#work">See the Work →</a></div>', 'hero actions'),
    ('<p class="eyebrow">What can EZ do?</p><h2 class="section-title" id="home-offers-title">Here is what you can actually hire me for.</h2>', '<p class="eyebrow">What EZ Enablement does</p><h2 class="section-title" id="home-offers-title">Training and enablement built around real performance.</h2>', 'offers heading'),
    ('<p class="body-copy">I work across strategy and execution. If your problem touches revenue performance, partners, AI, GTM systems, learning, or a digital experience that needs to be built, I can usually help.</p>', '<p class="body-copy">We work across strategy and execution, with training and enablement at the core. We build the learning, practice, systems, workflows, and reinforcement that help people perform better at the work.</p>', 'offers intro'),
    ('<small>06 / BUILD THE THING</small><strong>Digital Experiences & Special Projects</strong><span>Portals, websites, calculators, internal tools, prototypes, and unusual useful ideas.</span>', '<small>06 / BUILD THE EXPERIENCE</small><strong>Enablement Platforms & Learning Experiences</strong><span>Portals, academies, resource hubs, interactive tools, simulations, and digital learning experiences.</span>', 'sixth offer'),
    ('<div class="home-offers-action"><a class="button button-dark" href="work-with-me.html">See everything I offer →</a></div>', '<div class="home-offers-action"><a class="button button-dark" href="work-with-me.html">Explore EZ Enablement services →</a></div>', 'offers cta'),
    ('<p class="eyebrow">A little about how I think</p><h2 class="section-title">I like hard problems, clear systems, and work that actually changes behavior.</h2>', '<p class="eyebrow">How EZ Enablement works</p><h2 class="section-title">Start with the performance problem. Build the system around it.</h2>', 'about heading'),
    ('<div class="positioning-copy"><p>I do not start with a course, a content request, or whatever tool is fashionable this quarter. I start with the <span>business problem</span>: where revenue is slowing, where execution varies, where people are guessing, or where good strategy is getting lost before it reaches the field.</p><p>Then I build the system around it: <span>capability → practice → proof → workflow → reinforcement → analytics.</span></p></div>', '<div class="positioning-copy"><p>We do not start with a course, a content request, or whatever tool is fashionable this quarter. We start with the <span>performance problem</span>: where execution varies, where people are guessing, where ramp is slow, or where good strategy gets lost before it reaches the work.</p><p>Then we build the system around it: <span>capability → practice → proof → workflow → reinforcement → analytics.</span></p></div>', 'about copy'),
    ('<p class="eyebrow">Selected work</p><h2 class="section-title">View my journey of building.</h2>', '<p class="eyebrow">Founder track record + selected builds</p><h2 class="section-title">The experience behind EZ Enablement.</h2>', 'work heading'),
    ('<p class="body-copy">Real GTM challenges, the operational architectures designed to solve them, and the verified business outcomes. Open a case study for the full before-and-after story, system architecture, execution, tools, and evidence.</p>', '<p class="body-copy">These case studies show systems Erez “EZ” Haimowicz led or built inside the organizations named. They are the operating experience behind EZ Enablement, not a claim that those companies were EZ Enablement clients. Open any case study for the full problem, system, execution, tools, and measured outcome.</p>', 'work disclaimer'),
]
for old, new, label in replacements:
    text = replace_once(text, old, new, label)
p.write_text(text)

# Services page: make the commercial experience company-first.
p = Path('work-with-me.html')
text = p.read_text()
replacements = [
    ('<title>Work With Me | Erez Haimowicz</title>', '<title>Training & Enablement Services | EZ Enablement</title>', 'services title'),
    ('<meta name="description" content="Work with Erez Haimowicz on revenue and sales enablement, partner ecosystems, AI adoption and automation, GTM systems, learning design, digital builds, fractional leadership, and special projects.">', '<meta name="description" content="Work with EZ Enablement on sales enablement, partner training, AI adoption, learning design, GTM systems, academies, certification, coaching, and enablement platforms.">', 'services description'),
    ('<meta property="og:title" content="Work With Erez Haimowicz">', '<meta property="og:title" content="Training & Enablement Services | EZ Enablement">', 'services og title'),
    ('<meta property="og:description" content="Bring the messy problem. I build practical systems across revenue, partners, AI, GTM operations, learning, and digital experiences.">', '<meta property="og:description" content="Bring the messy problem. EZ Enablement builds practical training and enablement systems around real performance.">', 'services og description'),
    ('<script type="application/ld+json">{"@context":"https://schema.org","@type":"ProfessionalService","name":"Erez Haimowicz","url":"https://its-ez.com/work-with-me.html","areaServed":"United States","serviceType":["Revenue Enablement","Sales Enablement","Partner Enablement","AI Adoption and Automation","GTM Systems","Learning and Capability Design","Digital Experience Design","Fractional Enablement Leadership"]}</script>', '<script type="application/ld+json">{"@context":"https://schema.org","@type":"ProfessionalService","name":"EZ Enablement","url":"https://its-ez.com/work-with-me.html","areaServed":"United States","founder":{"@type":"Person","name":"Erez Haimowicz","alternateName":"EZ"},"serviceType":["Training","Sales Enablement","Partner Enablement","AI Adoption","Learning and Capability Design","GTM Systems","Academy Design","Certification","Enablement Platforms","Fractional Enablement Leadership"]}</script>', 'services schema'),
    ('<div class="wm-kicker">Work with me</div><h1>Bring me the <em>messy problem.</em></h1><p class="wm-lede">I help companies turn fuzzy GTM problems, disconnected tools, uneven execution, and ambitious ideas into systems people can actually use.</p><p class="wm-sub">Sometimes that means rebuilding sales enablement. Sometimes it is a partner academy, an AI workflow, a CRM operating model, an internal portal, a website, or something that does not have a neat name yet. I can diagnose it, design it, build the first version, and help your team make it stick.</p><div class="hero-actions"><a class="button button-dark" href="#offers">See what I offer ↓</a><a class="button button-orange" href="index.html#contact">Tell me what is broken ↗</a></div>', '<div class="wm-kicker">Work with EZ Enablement</div><h1>Bring us the <em>messy problem.</em></h1><p class="wm-lede">We help companies turn training gaps, uneven execution, disconnected tools, and ambitious enablement ideas into systems people can actually use.</p><p class="wm-sub">Sometimes that means sales onboarding. Sometimes it is a partner academy, certification system, manager coaching program, AI adoption workflow, enablement portal, or a full training operating model. We diagnose the problem, design the system, build what is needed, and help your team make it stick.</p><div class="hero-actions"><a class="button button-dark" href="#offers">Explore services ↓</a><a class="button button-orange" href="index.html#contact">Tell us what is broken ↗</a></div>', 'services hero'),
    ('<aside class="wm-side"><small>Best use of me</small><h2>Strategy + building + activation.</h2><p>I am most useful when you need someone who can connect the business problem to the actual system, content, workflow, technology, and behavior change.</p>', '<aside class="wm-side"><small>Best use of EZ Enablement</small><h2>Strategy + training + systems + activation.</h2><p>We are most useful when the problem is bigger than a course and needs the learning, workflow, technology, reinforcement, and measurement to work together.</p>', 'services aside'),
    ('<p class="eyebrow">What you can hire me to do</p><h2 class="section-title">Clear offers. Flexible scope.</h2>', '<p class="eyebrow">What you can hire EZ Enablement to do</p><h2 class="section-title">Clear offers. Flexible scope.</h2>', 'services offers heading'),
    ('<p class="body-copy">You do not need to translate my résumé into a project brief. Start with the problem. These are the areas where I can step in quickly and create measurable value.</p>', '<p class="body-copy">You do not need a perfect project brief. Start with the performance problem. These are the areas where EZ Enablement can step in quickly and build something useful.</p>', 'services offers intro'),
    ('<p>Move beyond generic AI training. I design practical workflows, assistants, automation, prompts, and adoption programs around what teams actually need to get done.</p>', '<p>Move beyond generic AI training. We design practical workflows, assistants, automation, prompts, and adoption programs around what teams actually need to get done.</p>', 'ai service copy'),
    ('<article class="service-card"><span class="num">06</span><small>Digital experiences & builds</small><h3>Build the thing people need, not another slide deck about it.</h3><p>I prototype and build practical digital experiences when the answer needs to be interactive, visible, or self-service.</p><ul><li>Internal portals, resource hubs, and academies</li><li>Websites, landing pages, calculators, and tools</li><li>Interactive demos and proof-of-concept experiences</li><li>Content systems, multimedia, and enablement assets</li></ul></article>', '<article class="service-card"><span class="num">06</span><small>Enablement platforms & learning experiences</small><h3>Build the experience people need, not another slide deck about it.</h3><p>We build practical digital learning and enablement experiences when the answer needs to be interactive, visible, searchable, or self-service.</p><ul><li>Academies, onboarding hubs, and resource portals</li><li>Interactive practice, simulations, calculators, and tools</li><li>Learning content systems and multimedia experiences</li><li>Enablement prototypes and proof-of-concept builds</li></ul></article>', 'sixth service'),
    ('<h2 class="section-title">Give me the problem in plain English.</h2><p>Your sellers are taking too long to ramp.', '<h2 class="section-title">Give us the problem in plain English.</h2><p>Your sellers are taking too long to ramp.', 'problem heading'),
    ('<a class="button button-orange" href="index.html#contact">Tell me the messy version ↗</a>', '<a class="button button-orange" href="index.html#contact">Tell us the messy version ↗</a>', 'problem cta'),
    ('<div><p class="eyebrow">How we can work together</p><h2 class="section-title">Use me for the amount of problem you actually have.</h2></div><p class="body-copy">Some problems need a focused build. Others need a senior operator embedded for a few months. I can flex the engagement around the outcome instead of forcing everything into the same consulting package.</p>', '<div><p class="eyebrow">How we can work together</p><h2 class="section-title">Use EZ Enablement for the amount of problem you actually have.</h2></div><p class="body-copy">Some problems need a focused build. Others need senior enablement leadership embedded for a few months. We flex the engagement around the outcome instead of forcing everything into the same consulting package.</p>', 'engagement intro'),
]
for old, new, label in replacements:
    text = replace_once(text, old, new, label)
p.write_text(text)

# Global nav preview: company language + accessible Resources dropdown on desktop and mobile.
p = Path('global-nav.js')
text = p.read_text()
if 'EZ COMPANY NAV PREVIEW' in text:
    raise SystemExit('company nav patch already present')
nav_patch = r'''

/* EZ COMPANY NAV PREVIEW */
(() => {
  const ROOT = 'https://its-ez.com/';
  const navCss = `
    .ez-global-brand-copy span{color:#c4c7cd!important}
    .ez-global-links>.ez-nav-group{position:relative;display:flex;align-items:center}
    .ez-nav-resources{display:flex;align-items:center;min-height:44px;padding:0 9px;border:0;border-radius:8px;background:transparent;color:#d5d5d8;font:800 14px/1.2 Arial,Helvetica,sans-serif;cursor:pointer;white-space:nowrap}
    .ez-nav-resources:hover,.ez-nav-resources[aria-expanded="true"]{background:rgba(255,255,255,.07);color:#fff}
    .ez-nav-resources:after{content:"⌄";margin-left:6px;font-size:12px}
    .ez-nav-dropdown{display:none;position:absolute;right:0;top:48px;width:min(330px,calc(100vw - 30px));padding:8px;border:1px solid rgba(255,255,255,.14);border-radius:14px;background:#0b0c0f;box-shadow:0 22px 60px rgba(0,0,0,.5);z-index:10010}
    .ez-nav-group.is-open .ez-nav-dropdown,.ez-nav-group:focus-within .ez-nav-dropdown{display:grid}
    .ez-nav-dropdown a{display:grid;gap:3px;padding:12px 13px;border-radius:9px;color:#fff!important;text-decoration:none!important}
    .ez-nav-dropdown a:hover,.ez-nav-dropdown a:focus-visible{background:rgba(255,255,255,.08);outline:none}
    .ez-nav-dropdown strong{font-size:12px;line-height:1.2}
    .ez-nav-dropdown span{color:#969aa3;font-size:10px;line-height:1.35}
    @media(max-width:1180px){
      .ez-global-links>.ez-nav-group{display:block;width:100%}
      .ez-nav-resources{width:100%;justify-content:space-between;min-height:44px;padding:0 12px;font-size:14px}
      .ez-nav-dropdown{position:static;width:100%;margin-top:4px;padding:4px;border-radius:10px;box-shadow:none;background:rgba(255,255,255,.035)}
      .ez-nav-group:focus-within .ez-nav-dropdown{display:none}
      .ez-nav-group.is-open .ez-nav-dropdown{display:grid}
      .ez-nav-dropdown a{padding:11px 12px}
    }
  `;

  function installCompanyNav(){
    const header=document.querySelector('.ez-global-header');
    const links=header?.querySelector('.ez-global-links');
    if(!header||!links||links.dataset.companyNav==='true') return false;
    links.dataset.companyNav='true';
    const brandSub=header.querySelector('.ez-global-brand-copy span');
    if(brandSub) brandSub.textContent='Training + Enablement Systems';
    const cta=header.querySelector('.ez-global-cta');
    if(cta){cta.textContent='Work With Us';cta.href=ROOT+'work-with-me.html';}
    links.innerHTML=`
      <a href="${ROOT}" data-ez-label="Home">Home</a>
      <a href="${ROOT}work-with-me.html#offers" data-ez-label="Services">Services</a>
      <a href="${ROOT}#work" data-ez-label="Work">Work</a>
      <a href="${ROOT}#results" data-ez-label="Results">Results</a>
      <a href="${ROOT}#operating" data-ez-label="How We Build">How We Build</a>
      <a href="${ROOT}#about" data-ez-label="About">About</a>
      <div class="ez-nav-group">
        <button class="ez-nav-resources" type="button" aria-expanded="false" aria-haspopup="true">Resources</button>
        <div class="ez-nav-dropdown" aria-label="EZ Enablement resources">
          <a href="${ROOT}ai-systems.html"><strong>AI Systems</strong><span>AI tools, workflows, and enablement use cases</span></a>
          <a href="${ROOT}revenue-performance.html"><strong>Revenue Performance Hub</strong><span>Role-based metrics, coaching, and performance resources</span></a>
          <a href="https://meddpicc-is-ez.erezhaimowicz.workers.dev/"><strong>MEDDPICC Lab</strong><span>Practical deal execution and methodology application</span></a>
          <a href="https://ez-human-threat-academy.erezhaimowicz.workers.dev/"><strong>Cybersecurity Library</strong><span>Human threat and cybersecurity learning resources</span></a>
          <a href="${ROOT}recommendations.html"><strong>Founder Recommendations</strong><span>What managers, peers, sellers, and partners say about EZ</span></a>
          <a href="${ROOT}music.html"><strong>Music by Avi Haimonix</strong><span>The creative side of EZ</span></a>
        </div>
      </div>`;

    const group=links.querySelector('.ez-nav-group');
    const button=group?.querySelector('.ez-nav-resources');
    const close=()=>{if(!group||!button)return;group.classList.remove('is-open');button.setAttribute('aria-expanded','false');};
    button?.addEventListener('click',e=>{e.stopPropagation();const open=group.classList.toggle('is-open');button.setAttribute('aria-expanded',String(open));});
    group?.querySelectorAll('a').forEach(a=>a.addEventListener('click',close));
    document.addEventListener('click',e=>{if(group?.classList.contains('is-open')&&!group.contains(e.target))close();});
    document.addEventListener('keydown',e=>{if(e.key==='Escape'&&group?.classList.contains('is-open')){close();button?.focus();}});
    return true;
  }

  if(!document.getElementById('ez-company-nav-preview-style')){
    const style=document.createElement('style');style.id='ez-company-nav-preview-style';style.textContent=navCss;document.head.appendChild(style);
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',()=>{if(!installCompanyNav()){setTimeout(installCompanyNav,0);}},{once:true});
  else if(!installCompanyNav()) setTimeout(installCompanyNav,0);
})();
'''
text += nav_patch

# Reframe preview-generated results as founder track record, not client work.
text = text.replace('Career impact / company by company', 'Founder track record / company by company')
text = text.replace('Proof without the inflated math.', 'The experience behind EZ Enablement.')
text = text.replace('I have worked across different companies, motions, teams, and stages of growth. The results belong with the work that produced them. I do not add pipeline, ARR, savings, ramp, and conversion together just to manufacture one giant career number.', 'Before launching EZ Enablement, I built and led training, enablement, partner, AI, and GTM systems inside the organizations shown below. These results are founder track record, not a claim that the companies were EZ Enablement clients. The numbers stay with the work that produced them.')
text = text.replace('<strong>How I report results:</strong> each metric stays attached to the organization and context where it was measured. Influenced, supported, reduced, and generated mean different things here on purpose.', '<strong>How we report results:</strong> each metric stays attached to the organization and context where it was measured. Influenced, supported, reduced, and generated mean different things here on purpose.')
p.write_text(text)
