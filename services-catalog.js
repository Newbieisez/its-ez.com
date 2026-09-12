(() => {
  const path = location.pathname.toLowerCase();
  if (!path.endsWith('/work-with-me.html') && !path.endsWith('work-with-me.html')) return;

  const existingOffers = document.getElementById('offers');
  if (existingOffers) { existingOffers.style.display = 'none'; existingOffers.id = 'legacy-offers'; }

  const heroExplore = document.querySelector('.wm-hero .hero-actions a[href="#offers"]');
  if (heroExplore) {
    heroExplore.href = '#services-catalog';
    heroExplore.textContent = 'Explore the catalogue ↓';
  }

  const style = document.createElement('style');
  style.id = 'ez-services-catalog-style';
  style.textContent = `
    .ez-catalog{padding:82px 0 88px;background:#f3f0e9;color:#111;border-bottom:1px solid rgba(0,0,0,.12)}
    .ez-catalog *{box-sizing:border-box}
    .ez-catalog-head{display:grid;grid-template-columns:minmax(0,1.08fr) minmax(330px,.92fr);gap:54px;align-items:end;margin-bottom:26px}
    .ez-catalog-kicker,.ez-builder-kicker,.ez-library-kicker{margin:0 0 12px;color:#ef1717;font:900 11px/1 Arial,Helvetica,sans-serif;letter-spacing:.17em;text-transform:uppercase}
    .ez-catalog-head h2,.ez-builder-head h2,.ez-library-head h2{margin:0;font-size:clamp(2.7rem,5.2vw,5.8rem);line-height:.9;letter-spacing:-.055em;text-transform:uppercase}
    .ez-catalog-head p{margin:0;color:#595550;font-size:1.04rem;line-height:1.72}
    .ez-catalog-principle{display:flex;align-items:flex-start;gap:12px;margin:0 0 28px;padding:15px 17px;border-left:4px solid #ef1717;background:#fff;font-size:.88rem;line-height:1.6;color:#4d4945}
    .ez-catalog-principle strong{color:#111}
    .ez-priority-strip{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:10px;margin-bottom:30px}
    .ez-priority{padding:17px 18px;border:1px solid rgba(0,0,0,.16);border-radius:16px;background:#fff}
    .ez-priority small{display:block;margin-bottom:8px;color:#ef1717;font:900 9px/1 Arial,Helvetica,sans-serif;letter-spacing:.14em;text-transform:uppercase}
    .ez-priority strong{display:block;font-size:1.03rem;line-height:1.15}
    .ez-packages-head{display:flex;align-items:end;justify-content:space-between;gap:28px;margin:12px 0 16px}
    .ez-packages-head h3{margin:0;font-size:clamp(1.7rem,3vw,2.7rem);letter-spacing:-.04em}
    .ez-packages-head p{max-width:620px;margin:0;color:#66615c;font-size:.88rem;line-height:1.55;text-align:right}
    .ez-package-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px}
    .ez-package{position:relative;min-height:360px;padding:23px;border:1px solid rgba(0,0,0,.16);border-radius:18px;background:#fff;display:flex;flex-direction:column;transform:none!important;box-shadow:none!important}
    .ez-package:hover{transform:none!important;box-shadow:0 12px 30px rgba(0,0,0,.06)!important}
    .ez-package.featured{background:#0b0c0f;color:#fff;border-color:#0b0c0f}
    .ez-package-tag{display:flex;align-items:center;justify-content:space-between;gap:10px;margin-bottom:28px}
    .ez-package-tag small{color:#ef1717;font:900 9px/1 Arial,Helvetica,sans-serif;letter-spacing:.14em;text-transform:uppercase}
    .ez-package.featured .ez-package-tag small{color:#ff806b}
    .ez-package-tag span{padding:5px 8px;border:1px solid currentColor;border-radius:999px;opacity:.65;font-size:.55rem;font-weight:900;letter-spacing:.08em;text-transform:uppercase}
    .ez-package h4{margin:0 0 12px;font-size:1.45rem;line-height:1.05;letter-spacing:-.03em}
    .ez-package>p{margin:0 0 20px;color:#5e5954;font-size:.89rem;line-height:1.58}
    .ez-package.featured>p{color:#c8c9cd}
    .ez-package ul{list-style:none;padding:0;margin:auto 0 0}
    .ez-package li{padding:8px 0;border-top:1px solid rgba(0,0,0,.12);font-size:.79rem;font-weight:750;line-height:1.35}
    .ez-package.featured li{border-color:rgba(255,255,255,.15)}
    .ez-package .ez-package-measure{margin:18px 0 0;font-size:.82rem;line-height:1.5}.ez-package-measure strong{display:block;color:inherit;margin-bottom:5px}.ez-package-select{margin-top:16px;min-height:44px;padding:10px 12px;border:1px solid currentColor;border-radius:10px;background:transparent;color:inherit;text-align:left;font:700 .82rem/1.35 Arial,sans-serif;cursor:pointer}.ez-package-select:focus-visible{outline:3px solid #ef1717;outline-offset:3px}
    .ez-package-foot{margin-top:18px;padding-top:13px;border-top:1px solid rgba(0,0,0,.12);font-size:.69rem;line-height:1.45;color:#77716b}
    .ez-package.featured .ez-package-foot{border-color:rgba(255,255,255,.15);color:#9699a1}

    .ez-builder{padding:82px 0;background:#0b0c0f;color:#fff;border-bottom:1px solid rgba(255,255,255,.1)}
    .ez-builder-head{display:grid;grid-template-columns:minmax(0,1fr) minmax(330px,.8fr);gap:54px;align-items:end;margin-bottom:28px}
    .ez-builder-head p{margin:0;color:#b9bbc1;font-size:1rem;line-height:1.7}
    .ez-builder-grid{display:grid;grid-template-columns:minmax(0,.85fr) minmax(0,1.15fr);gap:18px;align-items:start}
    .ez-builder-form,.ez-builder-result{border:1px solid rgba(255,255,255,.14);border-radius:20px;background:#131419;padding:24px}
    .ez-builder-form{display:grid;gap:17px}
    .ez-builder-field label{display:block;margin-bottom:7px;color:#d6d7db;font-size:.7rem;font-weight:900;letter-spacing:.08em;text-transform:uppercase}
    .ez-builder-field select{width:100%;min-height:48px;padding:0 13px;border:1px solid rgba(255,255,255,.18);border-radius:10px;background:#0d0e12;color:#fff;font:700 .9rem/1.2 Arial,Helvetica,sans-serif}
    .ez-builder-button{min-height:48px;border:1px solid #ef1717;border-radius:999px;background:#ef1717;color:#fff;font-size:.75rem;font-weight:950;letter-spacing:.08em;text-transform:uppercase;cursor:pointer}
    .ez-builder-button:hover{background:#fff;border-color:#fff;color:#111}
    .ez-builder-result{min-height:100%;display:flex;flex-direction:column;justify-content:center}
    .ez-builder-result small{color:#ef1717;font-size:.62rem;font-weight:950;letter-spacing:.14em;text-transform:uppercase}
    .ez-builder-result h3{margin:9px 0 11px;font-size:clamp(1.8rem,3vw,3rem);line-height:.95;letter-spacing:-.045em}
    .ez-builder-result p{margin:0;color:#b9bbc1;line-height:1.65}
    .ez-builder-result ul{margin:18px 0 0;padding:0;list-style:none}
    .ez-builder-result li{padding:9px 0;border-top:1px solid rgba(255,255,255,.12);color:#e6e7ea;font-size:.83rem;font-weight:760}
    .ez-builder-cta{display:inline-flex;align-items:center;justify-content:center;align-self:flex-start;min-height:42px;margin-top:20px;padding:0 14px;border:1px solid rgba(255,255,255,.22);border-radius:999px;color:#fff!important;text-decoration:none!important;font-size:.7rem;font-weight:900;letter-spacing:.06em;text-transform:uppercase}
    .ez-builder-cta:hover{background:#fff;color:#111!important}
    .ez-scope-note{margin-top:16px;color:#777a82;font-size:.67rem;line-height:1.55}

    .ez-library{padding:82px 0;background:#fff;color:#111}
    .ez-library-head{display:grid;grid-template-columns:1fr .85fr;gap:50px;align-items:end;margin-bottom:26px}
    .ez-library-head p{margin:0;color:#625e59;line-height:1.65}
    .ez-library-filters{display:flex;flex-wrap:wrap;gap:8px;margin-bottom:22px}
    .ez-library-filter{min-height:38px;padding:0 12px;border:1px solid rgba(0,0,0,.2);border-radius:999px;background:#fff;color:#111;font-size:.68rem;font-weight:900;letter-spacing:.04em;cursor:pointer}
    .ez-library-filter[aria-pressed="true"]{background:#111;color:#fff;border-color:#111}
    .ez-library-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:10px}
    .ez-library-card{padding:18px;border:1px solid rgba(0,0,0,.13);border-radius:14px;background:#f8f6f1;transform:none!important;box-shadow:none!important}
    .ez-library-card:hover{transform:none!important;box-shadow:none!important}
    .ez-library-card[hidden]{display:none!important}
    .ez-library-card small{display:block;margin-bottom:7px;color:#ef1717;font-size:.57rem;font-weight:950;letter-spacing:.13em;text-transform:uppercase}
    .ez-library-card strong{display:block;font-size:.98rem;line-height:1.2}
    .ez-library-card span{display:block;margin-top:7px;color:#66615d;font-size:.75rem;line-height:1.45}
    .ez-library-end{display:grid;grid-template-columns:1fr auto;gap:30px;align-items:center;margin-top:28px;padding:24px;border:2px solid #111;box-shadow:7px 7px 0 #ef1717}
    .ez-library-end strong{display:block;font-size:1.25rem;margin-bottom:6px}.ez-library-end p{margin:0;color:#5b5753;line-height:1.55}
    .ez-library-end a{display:inline-flex;align-items:center;justify-content:center;min-height:44px;padding:0 15px;border-radius:999px;background:#111;color:#fff!important;text-decoration:none!important;font-size:.7rem;font-weight:900;text-transform:uppercase;letter-spacing:.05em;white-space:nowrap}
    @media(max-width:1050px){.ez-package-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.ez-priority-strip{grid-template-columns:repeat(2,minmax(0,1fr))}.ez-library-grid{grid-template-columns:repeat(2,minmax(0,1fr))}}
    @media(max-width:820px){.ez-catalog-head,.ez-builder-head,.ez-builder-grid,.ez-library-head{grid-template-columns:1fr;gap:20px}.ez-packages-head{align-items:flex-start;flex-direction:column}.ez-packages-head p{text-align:left}.ez-catalog,.ez-builder,.ez-library{padding:58px 0}.ez-library-end{grid-template-columns:1fr}}
    @media(max-width:620px){.ez-package-grid,.ez-priority-strip,.ez-library-grid{grid-template-columns:1fr}.ez-package{min-height:0}.ez-catalog-head h2,.ez-builder-head h2,.ez-library-head h2{font-size:clamp(2.5rem,13vw,4.15rem)}.ez-library-end a{width:100%}}
  `;
  document.head.appendChild(style);

  const packages = [
    {tag:'01 / TRAIN THE TEAM',name:'Corporate Training Series',badge:'Core',desc:'Custom live or blended training built around the work your people actually need to perform.',items:['Agree the team’s goals and current skill gaps','Custom workshop or multi-session series','Practice, scenarios, and participant tools','Reinforcement plan and manager follow-up'],goal:'training',measure:'Skill-check results and the quality of work after training.',foot:'Best for company-wide capability building, team upskilling, and focused behavior change.',featured:true},
    {tag:'02 / ENABLE REVENUE',name:'Sales Readiness Accelerator',badge:'Core',desc:'Turn sales methodology, messaging, discovery, and deal execution into consistent field behavior.',items:['Onboarding and role readiness','Customer discovery, deal qualification, value, and objections','Practice and certification','Manager coaching and deal inspection'],goal:'sales',measure:'Time to a first qualified deal, deal quality, and win rate.',foot:'Best for sales teams that know what good should look like but execute it inconsistently.'},
    {tag:'03 / GROW MANAGERS',name:'Manager Coaching & Growth Program',badge:'Core',desc:'Give frontline managers a practical operating rhythm for coaching people and inspecting performance.',items:['Manager workshops and facilitation','Regular coaching and one-to-one meeting tools','Practical scorecards for reviewing calls and deals','Follow-up coaching and shared scoring standards'],goal:'managers',measure:'Coaching follow-through, manager consistency, and team performance.',foot:'Best for new managers, inconsistent coaching cultures, and teams scaling through frontline leadership.'},
    {tag:'04 / MAKE AI USEFUL',name:'AI at Work Accelerator',badge:'AI',desc:'Role-based AI training that moves from generic prompting to safe, repeatable workflows people actually use.',items:['AI literacy and safe-use foundations','Role-specific workflow mapping','Prompt and assistant design','Adoption practice and governance'],goal:'ai',measure:'Time per task, answer quality, and continued use of the agreed workflows.',foot:'Best for organizations that bought AI access but still need real adoption and useful workflows.'},
    {tag:'05 / SCALE PARTNERS',name:'Partner Academy & Accreditation',badge:'Partner',desc:'Build a clear learning and readiness journey for resellers, distributors, service providers, and technical partners.',items:['Learning steps for each partner role','Learning paths and accreditation','Sales and technical readiness','Partner portals, learning tools, and progress measurement'],goal:'partners',measure:'Time to partner readiness, first sale, and use of partner resources.',foot:'Best for partner programs that are growing faster than the enablement experience.'},
    {tag:'06 / RAMP FASTER',name:'Onboarding & Certification Engine',badge:'Learning',desc:'Replace passive onboarding with role milestones, practice, proof, and manager checkpoints.',items:['30/60/90 role journeys','Practice and scenario design','Readiness checks and targeted follow-up coaching','Manager checkpoints and readiness evidence'],goal:'onboarding',measure:'Time to independent work and readiness-check pass rates.',foot:'Best for new-hire ramp, role transitions, product launches, and readiness standardization.'},
    {tag:'07 / LEAD THE ROOM',name:'Sales Kickoff, Offsite & Facilitation',badge:'Live',desc:'Design and facilitate live experiences that are useful before, during, and after the event.',items:['A clear agenda and useful learning activities','Breakouts, workshops, and facilitation','Speaker support and rehearsal','Post-event activation and reinforcement'],goal:'event',measure:'Participation, retained knowledge, and completion of agreed follow-up actions.',foot:'Best for sales kickoffs, leadership offsites, kickoffs, team summits, and major change moments.'},
    {tag:'08 / BUILD THE SYSTEM',name:'Enablement Tech & Automation Build',badge:'Tech',desc:'Connect the tools, knowledge, workflows, and AI layer behind the learning experience.',items:['Learning, sales, content, and partner tools that work together','AI assistants using approved company information','Workflow automation and resource hubs','Analytics, dashboards, and measurement design'],goal:'systems',measure:'Time spent searching, duplicate work, and use of the connected tools.',foot:'Best for teams losing time to disconnected tools or hard-to-find information.'},
    {tag:'09 / TRANSFORM THE FUNCTION',name:'Full Enablement Engine',badge:'Transformation',desc:'A broader diagnose, design, build, launch, and measure engagement for organizations building or rebuilding enablement.',items:['Identify performance gaps and what already works','Clear responsibilities and a practical delivery plan','Priority program builds','Manager system, technology, and measurement'],goal:'full',measure:'Time to readiness, program use, and the business outcomes agreed at the start.',foot:'Best for 0→1 functions, rebuilds, or organizations that need the pieces to work as one system.',featured:true}
  ];

  const library = [
    ['training','Corporate workshops','Interactive team training built around real work and real scenarios.'],
    ['training','Multi-session learning programs','Cohort or series-based training with practice and reinforcement.'],
    ['training','Train-the-trainer','Facilitator preparation, delivery guides, practice, and shared delivery standards.'],
    ['training','Public speaking and guest sessions','Keynotes, panels, practitioner sessions, and collaborative learning events.'],
    ['training','Learning design and curriculum','Adult-learning architecture, modules, activities, and assessments.'],
    ['sales','Sales onboarding','Role-based ramp, milestones, first-meeting readiness, and manager checkpoints.'],
    ['sales','Sales methodology activation','Customer discovery, value, deal qualification, and clear sales-process habits.'],
    ['sales','Competitive enablement','Battlecards, objection practice, competitive narratives, and field activation.'],
    ['sales','Playbooks and field tools','Discovery guides, mutual plans, talk tracks, checklists, and live-deal assets.'],
    ['managers','Manager development','Coaching skills, leadership facilitation, feedback, and performance conversations.'],
    ['managers','Manager coaching systems','Regular one-to-one meetings, call reviews, deal reviews, scorecards, and shared standards.'],
    ['managers','Leadership workshops','Working sessions for alignment, change, accountability, and execution.'],
    ['partners','Partner onboarding','Role-based partner ramp, product fluency, and commercial readiness.'],
    ['partners','Partner academies','Structured learning journeys, accreditation, and ongoing partner learning.'],
    ['partners','Partner sales and technical training','Co-sell, discovery, demo, deployment, and technical readiness.'],
    ['partners','Partner portals and learning-system design','Clear portal navigation, useful content, account access, and progress tracking.'],
    ['ai','AI literacy for teams','Practical foundations, safe-use habits, and role-relevant use cases.'],
    ['ai','Role-based AI workflows','Repeatable workflows for sales, enablement, managers, operations, and leaders.'],
    ['ai','Prompt systems and libraries','Reusable prompt frameworks, quality standards, and human-review guardrails.'],
    ['ai','Company knowledge assistants','Help people find trusted answers from the company information they are allowed to use.'],
    ['systems','Enablement technology audit','Review learning, sales, content, and partner tools to find wasted time and duplicate work.'],
    ['systems','Workflow automation','Automation for onboarding, reminders, reporting, approvals, and knowledge flow.'],
    ['systems','Portals and resource hubs','Searchable learning hubs, academies, onboarding centers, and self-service resources.'],
    ['systems','Measurement and dashboards','Capability, behavior, adoption, readiness, and business-impact measurement.'],
    ['strategy','Enablement maturity assessment','Diagnose what exists, where it breaks, and what should be built next.'],
    ['strategy','Operating model and governance','Clear goals, work requests, priorities, ownership, review meetings, and progress measures.'],
    ['strategy','Program architecture','Roadmaps for onboarding, manager enablement, partner readiness, AI adoption, or academies.'],
    ['strategy','Fractional enablement leadership','Senior direction, stakeholder alignment, prioritization, and hands-on build support.']
  ];

  const packageHtml = packages.map((p) => `
    <article class="ez-package${p.featured ? ' featured' : ''}">
      <div class="ez-package-tag"><small>${p.tag}</small><span>${p.badge}</span></div>
      <h4>${p.name}</h4><p>${p.desc}</p>
      <ul>${p.items.map((item) => `<li>${item}</li>`).join('')}</ul>
      <p class="ez-package-measure"><strong>How we measure progress</strong>${p.measure}</p><div class="ez-package-foot">${p.foot}</div><button type="button" class="ez-package-select" data-package-goal="${p.goal}">Choose this starting point ↓</button>
    </article>`).join('');

  const libraryHtml = library.map(([category,name,desc]) => `
    <article class="ez-library-card" data-category="${category}"><small>${({training:'Training',sales:'Sales + Revenue',managers:'Managers',partners:'Partners',ai:'AI + Tech',systems:'Systems',strategy:'Strategy'})[category]}</small><strong>${name}</strong><span>${desc}</span></article>`).join('');

  const catalog = document.createElement('section');
  catalog.className = 'ez-catalog';
  catalog.id = 'services-catalog';
  catalog.dataset.pageMapLabel = 'Service catalogue';
  catalog.innerHTML = `
    <span id="offers" aria-hidden="true"></span><div class="wrap">
      <div class="ez-catalog-head">
        <div><p class="ez-catalog-kicker">Training + enablement catalogue</p><h2>Start with what people need to do better.</h2></div>
        <p>EZ Enablement is a training and enablement company with practical technology and artificial intelligence (AI) support. Training comes first. Systems, automation, and AI get added when they make the learning easier to use, easier to scale, or easier to measure.</p>
      </div>
      <div class="ez-catalog-principle"><strong>Not every problem needs a transformation.</strong><span>Some teams need one great workshop. Some need a manager program. Some need an academy, a sales kickoff, an AI adoption plan, or a complete enablement operating system. We scope around the outcome instead of forcing every client into the same package.</span></div>
      <div class="ez-priority-strip" aria-label="EZ Enablement priorities">
        <div class="ez-priority"><small>01 / Training</small><strong>Build capability people can use.</strong></div>
        <div class="ez-priority"><small>02 / Enablement</small><strong>Turn learning into field behavior.</strong></div>
        <div class="ez-priority"><small>03 / AI</small><strong>Make new tools useful at work.</strong></div>
        <div class="ez-priority"><small>04 / Technology</small><strong>Build the system around the learning.</strong></div>
      </div>
      <div class="ez-packages-head"><h3>Core packages</h3><p>Choose a starting point. We can combine services or adapt the scope to your team’s goals.</p></div>
      <div class="ez-package-grid">${packageHtml}</div>
    </div>`;

  const problemBand = document.querySelector('.problem-band');
  if (problemBand) problemBand.insertAdjacentElement('beforebegin', catalog);
  else document.querySelector('main')?.appendChild(catalog);

  const builder = document.createElement('section');
  builder.className = 'ez-builder';
  builder.id = 'build-my-plan';
  builder.dataset.pageMapLabel = 'Build my plan';
  builder.innerHTML = `
    <div class="wrap">
      <div class="ez-builder-head"><div><p class="ez-builder-kicker">Build my plan</p><h2>Tell us the situation. We will point you to the right starting point.</h2></div><p>Choose your goal, audience, and preferred format. Get a practical starting point to discuss with EZ Enablement.</p></div>
      <div class="ez-builder-grid">
        <form class="ez-builder-form" id="ez-plan-form">
          <div class="ez-builder-field"><label for="ez-goal">What are you trying to improve?</label><select id="ez-goal" required><option value="training">General team capability or corporate training</option><option value="sales">Sales execution or revenue performance</option><option value="managers">Manager coaching or leadership growth</option><option value="ai">AI adoption and practical AI skills</option><option value="partners">Partner or channel readiness</option><option value="onboarding">Onboarding, ramp, or certification</option><option value="event">Sales kickoff, offsite, or live event</option><option value="systems">Enablement tools, workflow, or automation</option><option value="full">Build or rebuild the enablement function</option></select></div>
          <div class="ez-builder-field"><label for="ez-audience">Who needs it?</label><select id="ez-audience"><option value="mixed">Cross-functional or mixed audience</option><option value="sellers">Sales and revenue teams</option><option value="managers">Managers and leaders</option><option value="partners">Partners and channel teams</option><option value="enablement">Training, learning, or sales operations teams</option><option value="company">Broad employee population</option></select></div>
          <div class="ez-builder-field"><label for="ez-delivery">What kind of experience sounds right?</label><select id="ez-delivery"><option value="live">Live workshop or facilitated session</option><option value="series">Multi-session program</option><option value="blended">Blended live + self-guided learning</option><option value="academy">Academy, portal, or certification experience</option><option value="build">System or technology build</option><option value="unsure">Not sure yet</option></select></div>
          <div class="ez-builder-field"><label for="ez-tech">Should AI or technology be part of the solution?</label><select id="ez-tech"><option value="maybe">Not sure. Recommend what makes sense.</option><option value="yes">Yes</option><option value="no">No. Keep it focused on people and learning.</option></select></div>
          <button class="ez-builder-button" type="submit">Recommend a starting point</button>
        </form>
        <div class="ez-builder-result" id="ez-plan-result" aria-live="polite"><small>Recommended starting point</small><h3>Choose your situation, then request a recommendation.</h3><p>You will get a suggested package and a few likely components. We will agree the scope around your goals, audience, delivery format, and support needs.</p></div>
      </div>
    </div>`;
  if (problemBand) problemBand.insertAdjacentElement('afterend', builder);
  else catalog.insertAdjacentElement('afterend', builder);

  const librarySection = document.createElement('section');
  librarySection.className = 'ez-library';
  librarySection.id = 'service-library';
  librarySection.dataset.pageMapLabel = 'Service library';
  librarySection.innerHTML = `
    <div class="wrap">
      <div class="ez-library-head"><div><p class="ez-library-kicker">Full service library</p><h2>The pieces we can build, teach, facilitate, or connect.</h2></div><p>The packages above make the catalogue easier to buy. This library shows the range underneath them. Use the filters to see where EZ Enablement can plug in.</p></div>
      <div class="ez-library-filters" role="group" aria-label="Filter services">
        <button class="ez-library-filter" type="button" data-filter="all" aria-pressed="true">All</button>
        <button class="ez-library-filter" type="button" data-filter="training" aria-pressed="false">Training</button>
        <button class="ez-library-filter" type="button" data-filter="sales" aria-pressed="false">Sales + Revenue</button>
        <button class="ez-library-filter" type="button" data-filter="managers" aria-pressed="false">Managers</button>
        <button class="ez-library-filter" type="button" data-filter="partners" aria-pressed="false">Partners</button>
        <button class="ez-library-filter" type="button" data-filter="ai" aria-pressed="false">AI + Tech</button>
        <button class="ez-library-filter" type="button" data-filter="systems" aria-pressed="false">Systems</button>
        <button class="ez-library-filter" type="button" data-filter="strategy" aria-pressed="false">Strategy</button>
      </div>
      <div class="ez-library-grid">${libraryHtml}</div>
      <div class="ez-library-end"><div><strong>Do not see the exact thing you need?</strong><p>That is normal. Most real enablement problems cross two or three categories. Bring the messy version and we will shape the right engagement around it.</p></div><a href="index.html#contact">Request a scoped plan ↗</a></div>
    </div>`;
  builder.insertAdjacentElement('afterend', librarySection);

  const recommendations = {
    training:{name:'Corporate Training Series',desc:'A custom workshop or multi-session learning program is the cleanest starting point.',items:['Stakeholder discovery and audience diagnosis','Tailored live or blended training','Practice, participant tools, and reinforcement']},
    sales:{name:'Sales Readiness Accelerator',desc:'Start with the selling behaviors that matter most, then build practice, proof, and manager reinforcement around them.',items:['Methodology, discovery, messaging, or deal execution focus','Scenario practice and readiness checks','Manager coaching and workflow reinforcement']},
    managers:{name:'Manager Coaching & Growth Program',desc:'Build the manager capability and operating rhythm that keeps training alive after the session.',items:['Manager development workshop series','One-to-one coaching and review tools','Shared standards, follow-up coaching, and practical leadership habits']},
    ai:{name:'AI at Work Accelerator',desc:'Move from generic AI awareness to role-specific workflows and safe adoption.',items:['AI literacy and responsible-use foundations','Role-based workflow design and prompt systems','Practice, governance, and adoption reinforcement']},
    partners:{name:'Partner Academy & Accreditation',desc:'Create a clearer path from partner onboarding to demonstrated commercial or technical readiness.',items:['Learning steps for each partner role','Learning paths, accreditation, and field assets','Partner portals, learning tools, and readiness checks where needed']},
    onboarding:{name:'Onboarding & Certification Engine',desc:'Turn ramp into a sequence of milestones, practice, evidence, and manager checkpoints.',items:['30/60/90 role journey','Practice, readiness checks, and targeted follow-up coaching','Manager checkpoints and readiness evidence']},
    event:{name:'Sales Kickoff, Offsite & Facilitation',desc:'Design the event around what should change after people leave the room.',items:['A clear agenda and useful learning activities','Facilitation, breakouts, and rehearsal support','Post-event reinforcement and activation']},
    systems:{name:'Enablement Tech & Automation Build',desc:'The core issue sounds like the system around the learning, not just the learning itself.',items:['Technology and workflow audit','Knowledge, automation, portal, or assistant design','Measurement and adoption plan']},
    full:{name:'Full Enablement Engine',desc:'Start with diagnosis, then build the operating model and highest-priority programs as one connected system.',items:['Identify performance gaps and what already works','Clear responsibilities and a prioritized delivery plan','Training, manager, technology, and measurement build']}
  };

  const form = document.getElementById('ez-plan-form');
  const result = document.getElementById('ez-plan-result');
  form?.addEventListener('submit', (event) => {
    event.preventDefault();
    const goal = document.getElementById('ez-goal').value;
    const audience = document.getElementById('ez-audience').value;
    const delivery = document.getElementById('ez-delivery').value;
    const tech = document.getElementById('ez-tech').value;
    const rec = recommendations[goal] || recommendations.training;
    const extras = [];
    if (audience === 'managers' && goal !== 'managers') extras.push('Add a manager reinforcement layer so the behavior survives after training.');
    if (delivery === 'academy' && !['partners','onboarding'].includes(goal)) extras.push('Consider an academy or self-service learning layer for scale and reinforcement.');
    if (tech === 'yes' && !['ai','systems'].includes(goal)) extras.push('Add an AI or technology layer only where it removes friction or improves adoption.');
    if (tech === 'no') extras.push('Keep the first version people-centered. Technology is optional, not mandatory.');
    result.innerHTML = `<small>Recommended starting point</small><h3>${rec.name}</h3><p>${rec.desc}</p><ul>${rec.items.map(item=>`<li>${item}</li>`).join('')}${extras.map(item=>`<li>${item}</li>`).join('')}</ul><a class="ez-builder-cta" href="index.html#contact">Request a scoped plan ↗</a><div class="ez-scope-note">Scope is shaped by audience size, number of roles, customization, delivery format, travel, technology or integration needs, and the amount of reinforcement required. Your proposal will define the work and how we measure progress.</div>`;
  });

  document.querySelectorAll('[data-package-goal]').forEach((button) => {
    button.addEventListener('click', () => {
      document.getElementById('ez-goal').value = button.dataset.packageGoal;
      form.requestSubmit();
      result.setAttribute('tabindex', '-1');
      result.focus();
      builder.scrollIntoView({block:'start'});
    });
  });

  document.querySelectorAll('.ez-library-filter').forEach((button) => {
    button.addEventListener('click', () => {
      const filter = button.dataset.filter;
      document.querySelectorAll('.ez-library-filter').forEach((b) => b.setAttribute('aria-pressed', String(b === button)));
      document.querySelectorAll('.ez-library-card').forEach((card) => {
        card.hidden = filter !== 'all' && card.dataset.category !== filter;
      });
    });
  });
})();
