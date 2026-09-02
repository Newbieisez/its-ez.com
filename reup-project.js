(function(){
  var list=document.querySelector('#work .work-list');
  if(!list)return;

  var impact=document.querySelector('.impact-strip');
  if(impact && !impact.querySelector('[data-reup-impact]')){
    var stat=document.createElement('div');
    stat.className='impact-stat';
    stat.setAttribute('data-reup-impact','true');
    stat.innerHTML='<strong>$1M</strong><span>Revenue built at ReUp Technologies</span>';
    impact.appendChild(stat);
  }

  function chips(items){return '<div class="tool-cloud">'+items.map(function(item){return '<span>'+item+'</span>'}).join('')+'</div>'}
  function listItems(items){return '<ul>'+items.map(function(item){return '<li>'+item+'</li>'}).join('')+'</ul>'}
  function process(items){return '<div class="process-flow">'+items.map(function(item){return '<span class="process-step">'+item+'</span>'}).join('')+'</div>'}
  function outcomes(items){return '<div class="outcome-grid">'+items.map(function(item){return '<div class="outcome"><strong>'+item[0]+'</strong><span>'+item[1]+'</span></div>'}).join('')+'</div>'}

  var phases=[
    ['01','Define','Clarify the market problem, audience and value proposition'],
    ['02','Position','Build the company story, messaging and commercial narrative'],
    ['03','Sell','Create qualification, discovery and full-funnel sales motions'],
    ['04','Partner','Develop partner activation and onboarding paths'],
    ['05','Systemize','Turn founder knowledge into repeatable operating assets'],
    ['06','Scale','Use pipeline and customer feedback to refine the GTM engine']
  ];

  var architecture=[
    ['Market signal','Customer + partner problems'],
    ['Positioning','Value proposition + commercial narrative'],
    ['Revenue motion','Discovery · qualification · sales playbooks'],
    ['Partner motion','Activation · onboarding · enablement'],
    ['Operating layer','Repeatable processes + founder knowledge transfer'],
    ['Business output','$1M revenue + repeatable GTM foundation']
  ];

  var proof='<section class="project-proof" aria-label="Visual proof for ReUp Technologies"><div class="proof-intro"><span>Visual proof</span><p>The founder journey at a glance: from market problem to a repeatable commercial system and $1M in revenue.</p></div><div class="proof-grid">'+
    '<div class="visual-card timeline-card"><div class="visual-card-head"><span>Build timeline</span><small>2020–2022 · founder-led 0→1 build</small></div><div class="project-timeline">'+phases.map(function(item){return '<div class="timeline-phase"><span class="timeline-index">'+item[0]+'</span><strong>'+item[1]+'</strong><p>'+item[2]+'</p></div>'}).join('')+'</div></div>'+
    '<div class="visual-card architecture-card"><div class="visual-card-head"><span>Commercial architecture</span><small>How the business connected</small></div><div class="architecture-flow">'+architecture.map(function(item,i){return '<div class="architecture-node"><small>'+String(i+1).padStart(2,'0')+'</small><strong>'+item[0]+'</strong><span>'+item[1]+'</span></div>'}).join('')+'</div></div>'+
    '</div><div class="visual-card evidence-card-wrap"><div class="visual-card-head"><span>Founder proof</span><small>Building the company, not just advising it</small></div><div class="evidence-grid">'+
      '<div class="evidence-card evidence-card-static"><span class="evidence-type">Commercial result</span><strong>$1M Revenue</strong><p>Built ReUp from an early-stage concept into a revenue-generating business with a repeatable commercial foundation.</p><span class="evidence-cta">Founder proof</span></div>'+
      '<div class="evidence-card evidence-card-static"><span class="evidence-type">GTM build</span><strong>0→1 Commercial Engine</strong><p>Positioning, messaging, qualification, sales playbooks, partner activation and onboarding were built as connected operating systems.</p><span class="evidence-cta">Operating proof</span></div>'+
      '<div class="evidence-card evidence-card-static"><span class="evidence-type">Leadership</span><strong>Co-Founder</strong><p>Direct ownership of business-building priorities created experience on both sides of enablement: designing GTM systems and operating inside them.</p><span class="evidence-cta">Leadership proof</span></div>'+
    '</div></div></section>';

  var pm=[
    'Co-founded and helped build the company while simultaneously creating the commercial operating model required to generate revenue.',
    'Managed priorities across positioning, sales execution, partner activation, onboarding, and day-to-day business building with limited early-stage resources.',
    'Converted founder knowledge into repeatable messaging, qualification, playbooks, and onboarding assets so execution could extend beyond individual conversations.',
    'Used active market, customer, partner, and pipeline feedback to continually refine the commercial motion.'
  ];

  var programs=[
    'GTM positioning + value proposition',
    'Full-funnel sales messaging',
    'Discovery + qualification architecture',
    'Sales playbooks',
    'Partner activation',
    'Partner onboarding',
    'Commercial operating processes',
    'Pipeline feedback + iteration loops'
  ];

  var tools=[
    'GTM operating model',
    'Sales playbooks',
    'Qualification frameworks',
    'Partner onboarding workflows',
    'Messaging architecture',
    'Pipeline feedback loops',
    'Founder-led commercialization'
  ];

  var card=document.createElement('article');
  card.className='project-case';
  card.id='reup-gtm';
  card.innerHTML=
    '<button class="project-toggle" type="button" data-project-toggle aria-expanded="false" aria-controls="reup-gtm-detail">'+
      '<span class="project-index">05</span>'+
      '<span class="project-heading"><small>ReUp Technologies · 2020–2022</small><h3>0 → $1M GTM & Partner Commercialization Engine</h3></span>'+
      '<span class="project-metrics"><span class="project-metric">$1M revenue</span><span class="project-metric">Co-Founder</span><span class="project-metric">0→1 GTM build</span></span>'+
      '<span class="project-action"><span>View project</span><span class="project-action-icon" aria-hidden="true">+</span></span>'+
    '</button>'+
    '<div class="project-detail" id="reup-gtm-detail" hidden><div class="project-detail-inner">'+
      '<p class="project-lede">Co-founded ReUp Technologies and built the commercial foundation that helped take the business from 0 to $1M in revenue.</p>'+
      '<div class="project-meta"><span>Co-Founder</span><span>2020–2022</span><span>Founder-led business + GTM build</span></div>'+
      '<section class="project-block project-objective"><h4>Objective</h4><p>Build ReUp from an early-stage business into a repeatable commercial operation—creating the positioning, sales motion, partner strategy, onboarding, and operating systems required to generate and scale revenue.</p></section>'+
      proof+
      '<div class="project-grid">'+
        '<section class="project-block"><h4>The challenge</h4><p>There was no mature company infrastructure to inherit. The business had to define its market, clarify the value proposition, develop a credible commercial narrative, create repeatable sales and partner motions, and turn founder knowledge into processes that could consistently produce revenue.</p></section>'+
        '<section class="project-block"><h4>Execution</h4><p>Built the GTM foundation across positioning, value proposition, full-funnel messaging, discovery, qualification, sales playbooks, partner activation, and partner onboarding. Connected market and customer feedback directly back into the commercial model so the business could continuously improve how it sold, partnered, and operated.</p></section>'+
        '<section class="project-block"><h4>Process implemented</h4>'+process(['Define the market problem','Clarify target customers + partners','Build value proposition','Create commercial messaging','Install discovery + qualification','Build sales playbooks','Activate + onboard partners','Capture market + pipeline feedback','Refine the GTM motion','Scale repeatable execution'])+'</section>'+
        '<section class="project-block"><h4>Project management + operating cadence</h4>'+listItems(pm)+'</section>'+
        '<section class="project-block"><h4>Programs + deliverables</h4>'+listItems(programs)+'</section>'+
        '<section class="project-block"><h4>Tools + systems</h4>'+chips(tools)+'</section>'+
      '</div>'+
      '<section class="project-block measured-outcomes"><h4>Outcomes + KPIs</h4>'+outcomes([['$1M','Revenue built at ReUp Technologies'],['0→1','Commercial operating foundation'],['Co-Founder','Direct business-building ownership']])+'</section>'+
      '<div class="project-note"><strong>Operating logic:</strong> Market Problem → Positioning → Revenue Motion → Partner Motion → Customer Feedback → Repeatable Growth.</div>'+
    '</div></div>';

  var anchor=document.getElementById('enterprise-revenue-acceleration');
  if(anchor && anchor.parentNode===list){
    list.insertBefore(card,anchor);
  }else{
    list.appendChild(card);
  }

  list.querySelectorAll('.project-case').forEach(function(project,index){
    var number=project.querySelector('.project-index');
    if(number)number.textContent=String(index+1).padStart(2,'0');
  });

  var button=card.querySelector('[data-project-toggle]');
  if(button){
    button.addEventListener('click',function(){
      var expanded=button.getAttribute('aria-expanded')==='true';
      var detail=document.getElementById(button.getAttribute('aria-controls'));
      button.setAttribute('aria-expanded',String(!expanded));
      if(detail)detail.hidden=expanded;
      card.classList.toggle('is-open',!expanded);
      var label=button.querySelector('.project-action > span:first-child');
      if(label)label.textContent=expanded?'View project':'Close project';
    });
  }
}());