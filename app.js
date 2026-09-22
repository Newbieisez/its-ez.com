// EZ Enablement V2 Application Logic
document.addEventListener('DOMContentLoaded', () => {
  initStorefront();
  initDealLensSelector();
  initPreviews();
  initModals();
  initLaunchTracker();
});

// State
let currentCategory = 'all';
let currentSearch = '';
let currentRole = 'all';
let selectedProduct = null;

// Storefront initialization
function initStorefront() {
  renderProductCards();

  // Category filter tabs
  document.querySelectorAll('.category-tabs .tab-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('.category-tabs .tab-btn').forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      currentCategory = e.target.dataset.category;
      renderProductCards();
    });
  });

  // Search input
  const searchInput = document.getElementById('storeSearchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentSearch = e.target.value.toLowerCase();
      renderProductCards();
    });
  }

  // Role select
  const roleSelect = document.getElementById('roleSelect');
  if (roleSelect) {
    roleSelect.addEventListener('change', (e) => {
      currentRole = e.target.value;
      renderProductCards();
    });
  }
}

function renderProductCards() {
  const grid = document.getElementById('productsGrid');
  if (!grid) return;

  const filtered = PRODUCTS_DATA.filter(p => {
    const matchCat = currentCategory === 'all' || p.category === currentCategory || 
                     (currentCategory === 'methodology' && p.id.includes('deal-lab')) ||
                     (currentCategory === 'sprints' && p.category === 'sprints') ||
                     (currentCategory === 'advisory' && (p.category === 'advisory' || p.id.includes('advisory') || p.id.includes('session')));
    
    const matchSearch = currentSearch === '' || 
                        p.title.toLowerCase().includes(currentSearch) ||
                        p.subtitle.toLowerCase().includes(currentSearch) ||
                        p.problem.toLowerCase().includes(currentSearch) ||
                        p.buyer.toLowerCase().includes(currentSearch);
    
    const matchRole = currentRole === 'all' || p.buyer.toLowerCase().includes(currentRole.toLowerCase());

    return matchCat && matchSearch && matchRole;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 60px 20px; background: white; border-radius: var(--radius-lg); border: 1px dashed var(--slate-300);">
        <h4 style="font-size: 18px; color: var(--slate-800); margin-bottom: 8px;">No products match your filter criteria</h4>
        <p style="color: var(--slate-500); font-size: 14px; margin-bottom: 20px;">Try clearing search or choosing a different category.</p>
        <button class="btn btn-outline btn-sm" onclick="resetFilters()">Reset Filters</button>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(p => {
    let badgeClass = 'badge-flagship';
    if (p.category === 'methodology') badgeClass = 'badge-methodology';
    if (p.category === 'ai-systems') badgeClass = 'badge-ai';
    if (p.category === 'sprints') badgeClass = 'badge-sprint';
    if (p.category === 'advisory') badgeClass = 'badge-advisory';

    const isFeatured = p.id === 'rampready-os' || p.id === 'deal-labs-suite' || p.id === 'offer-b-gtm-sprint';

    return `
      <div class="product-card ${isFeatured ? 'featured' : ''}" id="card-${p.id}">
        <div class="card-top">
          <span class="product-badge ${badgeClass}">${p.badge}</span>
          <h3 class="product-title">${p.title}</h3>
          <p class="product-subtitle">${p.subtitle}</p>
          
          <div class="product-meta-item">
            <strong>Target Buyer</strong>
            <span>${p.buyer}</span>
          </div>

          <div class="product-meta-item">
            <strong>Core Business Outcome</strong>
            <span>${p.outcome}</span>
          </div>
        </div>

        <div class="card-bottom">
          <div class="product-pricing-bar">
            <div class="price-container">
              <span class="price-main">${p.price_display}</span>
              <span class="price-sub">${p.billing_type}</span>
            </div>
            <div class="card-actions">
              <button class="btn btn-outline btn-sm" onclick="openProductDetail('${p.id}')">Store Standard</button>
              <button class="btn btn-primary btn-sm" onclick="openCheckout('${p.id}')">
                ${p.price >= 15000 ? 'Book Sprint' : 'Instant Buy'}
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function resetFilters() {
  currentCategory = 'all';
  currentSearch = '';
  currentRole = 'all';
  document.querySelectorAll('.category-tabs .tab-btn').forEach(b => b.classList.remove('active'));
  document.querySelector('.category-tabs .tab-btn[data-category="all"]').classList.add('active');
  const searchInput = document.getElementById('storeSearchInput');
  if (searchInput) searchInput.value = '';
  const roleSelect = document.getElementById('roleSelect');
  if (roleSelect) roleSelect.value = 'all';
  renderProductCards();
}

// Product Detail Modal (STORE STANDARD 8 QUESTIONS)
function openProductDetail(productId) {
  const p = PRODUCTS_DATA.find(item => item.id === productId);
  if (!p) return;
  selectedProduct = p;

  const modal = document.getElementById('productDetailModal');
  const modalBody = document.getElementById('productDetailBody');
  const modalTitle = document.getElementById('modalProductTitle');
  const modalSub = document.getElementById('modalProductSubtitle');

  modalTitle.innerText = p.title;
  modalSub.innerText = `${p.badge} • ${p.price_display} (${p.billing_type})`;

  modalBody.innerHTML = `
    <div style="margin-bottom: 24px; padding: 16px; background: var(--primary-light); border-radius: var(--radius-md); border-left: 4px solid var(--primary); display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px;">
      <div>
        <span style="font-size: 12px; font-weight: 700; color: var(--primary-dark); text-transform: uppercase;">Commercial Tier</span>
        <div style="font-size: 20px; font-weight: 800; color: var(--slate-900);">${p.price_display} <span style="font-size: 13px; font-weight: 600; color: var(--slate-600);">/ ${p.billing_type}</span></div>
      </div>
      <div>
        <button class="btn btn-primary" onclick="openCheckout('${p.id}')">
          ${p.price >= 15000 ? 'Schedule Discovery Intake' : 'Buy Now & Download Immediately'}
        </button>
      </div>
    </div>

    <h4 style="font-size: 16px; font-weight: 800; color: var(--slate-900); margin-bottom: 16px; text-transform: uppercase; letter-spacing: 0.05em; border-bottom: 2px solid var(--slate-200); padding-bottom: 6px;">
      Store Standard Commercial Brief (8 Core Verification Points)
    </h4>

    <div class="qa-grid">
      <div class="qa-card">
        <div class="qa-question">1. Who Is This For?</div>
        <div class="qa-answer">${p.buyer}</div>
      </div>

      <div class="qa-card">
        <div class="qa-question">2. What Problem Does It Solve?</div>
        <div class="qa-answer">${p.problem}</div>
      </div>

      <div class="qa-card">
        <div class="qa-question">3. What Will I Be Able To Do After Using It?</div>
        <div class="qa-answer">${p.outcome}</div>
      </div>

      <div class="qa-card">
        <div class="qa-question">4. What Exactly Do I Receive? (Tangible Deliverables)</div>
        <div class="qa-answer">
          <ul style="margin-left: 20px; margin-top: 8px;">
            ${p.deliverables.map(d => `<li style="margin-bottom: 6px;"><code>${d}</code></li>`).join('')}
          </ul>
        </div>
      </div>

      <div class="qa-card">
        <div class="qa-question">5. How Long Will It Take?</div>
        <div class="qa-answer">${p.time_to_deploy}</div>
      </div>

      <div class="qa-card">
        <div class="qa-question">6. How Is It Delivered?</div>
        <div class="qa-answer">${p.delivery_method}</div>
      </div>

      <div class="qa-card">
        <div class="qa-question">7. Why Is It Worth The Price?</div>
        <div class="qa-answer">${p.why_worth_it}</div>
      </div>

      <div class="qa-card">
        <div class="qa-question">8. What Should I Do Next? (Immediate Action & Logical Next Step)</div>
        <div class="qa-answer">
          <p style="margin-bottom: 8px;"><strong>Immediate Action:</strong> ${p.what_to_do_next}</p>
          <div style="background: var(--white); padding: 12px; border-radius: var(--radius-sm); border: 1px solid var(--slate-200);">
            <strong style="color: var(--primary);">Logical Upsell:</strong> ${p.upsell_recommendation.title}<br>
            <span style="font-size: 13px; color: var(--slate-600);">${p.upsell_recommendation.description}</span>
          </div>
        </div>
      </div>
    </div>

    <div style="text-align: center; margin-top: 32px; padding-top: 24px; border-top: 1px solid var(--slate-200);">
      <button class="btn btn-outline" style="margin-right: 12px;" onclick="closeModal('productDetailModal')">Close</button>
      <button class="btn btn-primary btn-lg" onclick="openCheckout('${p.id}')">
        ${p.price >= 15000 ? 'Schedule Discovery Intake' : 'Proceed to Checkout ($' + p.price + ')'}
      </button>
    </div>
  `;

  modal.classList.add('active');
}

// Deal Lens Selector
function initDealLensSelector() {
  const calcBtn = document.getElementById('calcDealLensBtn');
  if (calcBtn) {
    calcBtn.addEventListener('click', calculateDealLens);
  }
}

function calculateDealLens() {
  const acv = document.getElementById('lensAcv').value;
  const stakeholders = document.getElementById('lensStakeholders').value;
  const pain = document.getElementById('lensPain').value;
  const cycle = document.getElementById('lensCycle').value;
  const leak = document.getElementById('lensLeak').value;

  let recTitle = "MEDDPICC Deal Execution Lab";
  let recProductId = "meddpicc-deal-lab";
  let recRationale = "Your motion involves multi-stakeholder buying committees and enterprise contract values where securing Economic Buyer sign-off and identifying true Decision Criteria prevent forecast slippage.";

  if (acv === 'low' && cycle === 'short') {
    recTitle = "SPIN Selling Deal Execution Lab";
    recProductId = "spin-deal-lab";
    recRationale = "In high-velocity transactional or mid-market cycles, reps must sequence Implication questions rapidly to amplify problem cost before buyers compare commodity pricing.";
  } else if (leak === 'unaware' || pain === 'unaware') {
    recTitle = "Challenger-Inspired Deal Execution Lab";
    recProductId = "deal-labs-suite";
    recRationale = "When buyers are complacent and unaware of hidden systemic costs, sellers need a provocative 'Warmer -> Reframe -> Rational Drowning' commercial teaching motion.";
  } else if (leak === 'gate') {
    recTitle = "Sandler-Inspired Deal Execution Lab";
    recProductId = "deal-labs-suite";
    recRationale = "When deals stall in qualification or endless exploratory calls, upfront contracting and mutual decision criteria agreements protect rep selling time.";
  } else if (leak === 'gap') {
    recTitle = "Gap-Based Selling Deal Execution Lab";
    recProductId = "deal-labs-suite";
    recRationale = "Your primary friction is quantifying the monetary delta between the customer's current painful state and the future desired state.";
  } else if (acv === 'high' || stakeholders === 'high') {
    recTitle = "Full Deal Labs Methodology Master Suite";
    recProductId = "deal-labs-suite";
    recRationale = "Enterprise multi-threaded sales cycles require a hybrid methodology stack: Challenger for early reframing, SPIN for technical discovery, and MEDDPICC for late-stage paper process qualification.";
  }

  const resultCard = document.getElementById('selectorResultCard');
  resultCard.innerHTML = `
    <div style="display: flex; align-items: flex-start; justify-content: space-between; gap: 16px; flex-wrap: wrap;">
      <div>
        <span style="background: var(--mint); color: var(--navy); padding: 4px 10px; border-radius: var(--radius-sm); font-size: 11px; font-weight: 800; text-transform: uppercase;">
          Diagnostic Recommendation
        </span>
        <h4 style="font-size: 24px; font-weight: 800; color: var(--white); margin: 12px 0 8px;">${recTitle}</h4>
        <p style="color: var(--slate-300); font-size: 14px; max-width: 650px; line-height: 1.6;">${recRationale}</p>
      </div>
      <div style="align-self: center;">
        <button class="btn btn-mint btn-lg" onclick="openProductDetail('${recProductId}')">View Recommended Solution</button>
      </div>
    </div>
  `;
  resultCard.classList.add('active');
  resultCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// Previews
function initPreviews() {
  document.querySelectorAll('.preview-tab-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('.preview-tab-btn').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.preview-panel').forEach(p => p.classList.remove('active'));
      e.target.classList.add('active');
      const targetId = e.target.dataset.panel;
      document.getElementById(targetId).classList.add('active');
    });
  });

  // Rubric selector inside preview
  const rubricSelector = document.getElementById('previewRubricSelect');
  if (rubricSelector) {
    rubricSelector.addEventListener('change', updateRubricPreview);
  }
}

function updateRubricPreview() {
  const noticeBanner = `<div style="background: var(--amber-light); border: 1px solid var(--amber); padding: 10px 14px; border-radius: var(--radius-sm); margin-bottom: 14px; font-size: 12px; color: var(--slate-800);">
    <strong>Commercially Redacted Preview:</strong> Showing representative rubric excerpts and baseline criteria. Complete multi-dimensional scoring matrices, manager calibration cheat-sheets, and CRM stage-gate rules are delivered with the licensed product.
  </div>`;

  const sel = document.getElementById('previewRubricSelect').value;
  const contentDiv = document.getElementById('rubricPreviewContent');

  if (sel === 'discovery') {
    contentDiv.innerHTML = noticeBanner + `
      <table class="rubric-table">
        <thead>
          <tr>
            <th>Level</th>
            <th>Question Design</th>
            <th>Active Listening</th>
            <th>Pain Quantification</th>
            <th>Next-Step Control</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>1. Deficient</strong></td>
            <td>Interrogation-style questionnaire; seller talks >70% of call.</td>
            <td>Interrupts prospect to pitch product features.</td>
            <td>Zero business metrics discussed.</td>
            <td>"I'll email you some slides next week."</td>
          </tr>
          <tr>
            <td><strong>2. Developing</strong></td>
            <td>Standard BANT questions; rigid adherence to script.</td>
            <td>Listens only to form next question; misses emotional cues.</td>
            <td>Captures surface pain ("it takes too long") without metrics.</td>
            <td>Tentative next step; no calendar invite held.</td>
          </tr>
          <tr style="background: #EEF2FF;">
            <td><strong>3. Proficient (Baseline)</strong></td>
            <td>Layered open questions (Situation -> Problem -> Implication).</td>
            <td>Talk ratio <45%; summarizes prospect words before advancing.</td>
            <td>Identifies hours lost, revenue impact, or headcount drag.</td>
            <td>Mutual agreement on next milestone and firm calendar booking.</td>
          </tr>
          <tr>
            <td><strong>4. Advanced</strong></td>
            <td>Provocative questions that uncover unconsidered root cause.</td>
            <td>Connects disparate statements across committee into root cause.</td>
            <td>Calculates annual monetary cost of inaction with buyer agreement.</td>
            <td>Joint discovery agenda scheduled with CFO / VP of Sales.</td>
          </tr>
          <tr>
            <td><strong>5. Mastery</strong></td>
            <td>Masterclass executive inquiry; teaches buyer about their business.</td>
            <td>Comfortable with silence (3+ seconds); deep psychological safety.</td>
            <td>Builds conservative ROI model live using prospect's numbers.</td>
            <td>Buyer commits Economic Buyer to next formal milestone.</td>
          </tr>
        </tbody>
      </table>
    `;
  } else if (sel === 'meddpicc') {
    contentDiv.innerHTML = noticeBanner + `
      <table class="rubric-table">
        <thead>
          <tr>
            <th>Level</th>
            <th>Metrics (M)</th>
            <th>Economic Buyer (EB)</th>
            <th>Decision Criteria (DC)</th>
            <th>Paper Process (P)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>1. Deficient</strong></td>
            <td>No financial metrics; assumes value obvious.</td>
            <td>Talks only to end users; does not know EB.</td>
            <td>Assumes DC is "they like our user interface".</td>
            <td>No knowledge of legal, security, or procurement steps.</td>
          </tr>
          <tr>
            <td><strong>2. Developing</strong></td>
            <td>Generic vendor ROI claims ("improves efficiency 20%").</td>
            <td>Has EB name from LinkedIn; never spoken to them.</td>
            <td>Collects client RFP checklist without influencing it.</td>
            <td>Reactive to procurement requests at end of quarter.</td>
          </tr>
          <tr style="background: #EEF2FF;">
            <td><strong>3. Proficient (Baseline)</strong></td>
            <td>Specific quantified metrics agreed with project sponsor.</td>
            <td>Active plan to secure direct meeting with Economic Buyer.</td>
            <td>Influenced 1-2 key technical or business criteria.</td>
            <td>Joint Mutual Action Plan with procurement milestones agreed.</td>
          </tr>
          <tr>
            <td><strong>4. Advanced</strong></td>
            <td>Metrics tied directly to EB's public strategic OKRs.</td>
            <td>Direct conversational access; EB verifies problem urgency.</td>
            <td>Co-authored decision criteria with Champion and EB.</td>
            <td>Pre-clears infosec, redlines, and payment terms in parallel.</td>
          </tr>
          <tr>
            <td><strong>5. Mastery</strong></td>
            <td>Formal business case signed off by EB and Finance lead.</td>
            <td>EB actively drives internal project to solve board priority.</td>
            <td>Decision criteria locked into spec exclusively favoring solution.</td>
            <td>Contract signed ahead of target schedule with full margin.</td>
          </tr>
        </tbody>
      </table>
    `;
  } else {
    contentDiv.innerHTML = noticeBanner + `
      <table class="rubric-table">
        <thead>
          <tr>
            <th>Level</th>
            <th>Cold Opener (First 30s)</th>
            <th>Problem Relevance</th>
            <th>Handling Brush-Offs</th>
            <th>Low-Friction Call-to-Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>1. Deficient</strong></td>
            <td>Generic script reading; "Did I catch you at a bad time?"</td>
            <td>Feature bullet point dump.</td>
            <td>Apologizes or immediately hangs up.</td>
            <td>Asks for 30 minutes without a value reason.</td>
          </tr>
          <tr style="background: #EEF2FF;">
            <td><strong>3. Proficient</strong></td>
            <td>Calm, pattern-interrupt opener; respects prospect time.</td>
            <td>Cites 1 specific executive initiative common to role.</td>
            <td>Validates objection, pivots to peer curiosity question.</td>
            <td>Clear low-friction ask: 15-minute diagnostic review.</td>
          </tr>
          <tr>
            <td><strong>5. Mastery</strong></td>
            <td>Provocative, tailored commercial hook that commands respect.</td>
            <td>Connects public strategic goal to hidden operational friction.</td>
            <td>Reframes brush-off into the primary reason for meeting.</td>
            <td>Prospect actively asks for meeting time and brings peer.</td>
          </tr>
        </tbody>
      </table>
    `;
  }
}

// Checkout Modal & End-to-End Purchase Flow
function openCheckout(productId) {
  const p = PRODUCTS_DATA.find(item => item.id === productId);
  if (!p) return;
  selectedProduct = p;

  closeModal('productDetailModal');

  const modal = document.getElementById('checkoutModal');
  const checkoutContainer = document.getElementById('checkoutContainer');

  if (p.price >= 15000) {
    // High-Ticket Consulting Sprint Booking Flow
    checkoutContainer.innerHTML = `
      <div style="max-width: 650px; margin: 0 auto;">
        <span class="product-badge badge-sprint" style="margin-bottom: 8px;">${p.badge}</span>
        <h3 style="font-size: 24px; font-weight: 800; color: var(--slate-900); margin-bottom: 6px;">Schedule Discovery & Intake: ${p.title}</h3>
        <p style="color: var(--slate-600); font-size: 14px; margin-bottom: 24px;">Commercial Fee: <strong>${p.price_display}</strong> (${p.billing_type})</p>

        <form id="sprintBookingForm" onsubmit="handleSprintBooking(event)">
          <div class="form-group">
            <label class="form-label">Full Name</label>
            <input type="text" class="form-control" id="bookName" required placeholder="e.g. Alex Morgan">
          </div>

          <div class="form-group">
            <label class="form-label">Work Email</label>
            <input type="email" class="form-control" id="bookEmail" required placeholder="alex@company.com">
          </div>

          <div class="form-group">
            <label class="form-label">Company & Stage</label>
            <input type="text" class="form-control" id="bookCompany" required placeholder="Acme Software, Series B">
          </div>

          <div class="form-group">
            <label class="form-label">Sales Team Size & Methodology</label>
            <select class="form-control" id="bookTeamSize">
              <option value="10-25">10–25 Reps (Standard Cohort)</option>
              <option value="26-75">26–75 Reps (Multi-Team)</option>
              <option value="76+">76+ Reps (Enterprise Rollout)</option>
            </select>
          </div>

          <div class="form-group">
            <label class="form-label">Primary Operational Bottleneck</label>
            <textarea class="form-control" rows="3" required placeholder="Describe current ramp drift, conversion drop, or AI adoption challenge..."></textarea>
          </div>

          <div style="background: var(--slate-50); border: 1px solid var(--slate-200); padding: 16px; border-radius: var(--radius-md); margin-bottom: 24px;">
            <p style="font-size: 13px; color: var(--slate-700);"><strong>What happens next:</strong> Upon submission, you will receive the Pre-Engagement Intake Packet and direct calendar access to EZ's executive schedule for your 45-minute discovery consultation.</p>
          </div>

          <button type="submit" class="btn btn-primary btn-lg" style="width: 100%;">Submit Intake & Request Discovery Slot</button>
        </form>
      </div>
    `;
  } else {
    // Digital Product Instant Checkout Flow
    checkoutContainer.innerHTML = `
      <div class="checkout-grid">
        <div>
          <h4 style="font-size: 18px; font-weight: 800; color: var(--slate-900); margin-bottom: 16px;">Billing Details</h4>
          <form id="digitalCheckoutForm" onsubmit="handleDigitalCheckout(event)">
            <div class="form-group">
              <label class="form-label">Full Name</label>
              <input type="text" class="form-control" id="custName" required placeholder="Jane Doe">
            </div>

            <div class="form-group">
              <label class="form-label">Work Email (Download links sent here)</label>
              <input type="email" class="form-control" id="custEmail" required placeholder="jane@company.com">
            </div>

            <div class="form-group">
              <label class="form-label">Company / Organization</label>
              <input type="text" class="form-control" id="custCompany" required placeholder="Apex Tech Inc.">
            </div>

            <h4 style="font-size: 16px; font-weight: 800; color: var(--slate-900); margin: 24px 0 12px;">Payment Method</h4>
            <div style="background: var(--slate-100); padding: 14px; border-radius: var(--radius-md); border: 1px solid var(--slate-300); margin-bottom: 16px; font-size: 13px; color: var(--slate-700);">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                <span style="font-weight: 700; color: var(--slate-900);">Stripe Sandbox Mode (Business License Pending)</span>
                <span style="color: var(--amber); font-weight: 700; font-size: 11px; text-transform: uppercase;">External Launch Dependency</span>
              </div>
              <span>Test Environment Active: Production merchant activation occurs upon formal business license approval. Any test card number accepted.</span>
            </div>

            <div class="form-group">
              <label class="form-label">Card Number</label>
              <input type="text" class="form-control" required placeholder="4242 •••• •••• 4242" value="4242 •••• •••• 4242">
            </div>

            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
              <div class="form-group">
                <label class="form-label">Expiry</label>
                <input type="text" class="form-control" required placeholder="MM/YY" value="12/28">
              </div>
              <div class="form-group">
                <label class="form-label">CVC</label>
                <input type="text" class="form-control" required placeholder="123" value="888">
              </div>
            </div>

            <button type="submit" id="payButton" class="btn btn-mint btn-lg" style="width: 100%; margin-top: 10px;">
              Complete Purchase (${p.price_display})
            </button>
          </form>
        </div>

        <div>
          <h4 style="font-size: 18px; font-weight: 800; color: var(--slate-900); margin-bottom: 16px;">Order Summary</h4>
          <div class="order-summary-box">
            <span class="product-badge badge-flagship" style="margin-bottom: 8px;">${p.badge}</span>
            <h5 style="font-size: 16px; font-weight: 800; color: var(--slate-900); margin-bottom: 4px;">${p.title}</h5>
            <p style="font-size: 13px; color: var(--slate-500); margin-bottom: 16px;">${p.subtitle}</p>

            <div class="summary-row">
              <span>Item Price</span>
              <span>${p.price_display}</span>
            </div>
            <div class="summary-row">
              <span>Delivery</span>
              <span style="color: var(--mint-dark); font-weight: 700;">Instant Digital Access</span>
            </div>
            <div class="summary-row">
              <span>Sales Tax</span>
              <span>$0.00</span>
            </div>
            <div class="summary-row total">
              <span>Total Due</span>
              <span style="color: var(--primary);">${p.price_display}</span>
            </div>

            <div style="margin-top: 20px; font-size: 12px; color: var(--slate-500); line-height: 1.5;">
              Includes lifetime access to version 1.0 deliverables, commercial internal team license, and full source Markdown/CSV assets.
            </div>
          </div>
        </div>
      </div>
    `;
  }

  modal.classList.add('active');
}

function handleDigitalCheckout(e) {
  e.preventDefault();
  const btn = document.getElementById('payButton');
  btn.innerText = "Processing Transaction...";
  btn.disabled = true;

  const custName = document.getElementById('custName').value;
  const custEmail = document.getElementById('custEmail').value;
  const custCompany = document.getElementById('custCompany').value;

  setTimeout(() => {
    const orderId = 'EZ-' + Math.floor(100000 + Math.random() * 900000);
    renderFulfillmentPortal(orderId, selectedProduct, custName, custEmail, custCompany);
  }, 1000);
}

function handleSprintBooking(e) {
  e.preventDefault();
  const bookName = document.getElementById('bookName').value;
  const bookEmail = document.getElementById('bookEmail').value;
  const bookCompany = document.getElementById('bookCompany').value;
  const orderId = 'SPRINT-REQ-' + Math.floor(100000 + Math.random() * 900000);

  renderSprintFulfillment(orderId, selectedProduct, bookName, bookEmail, bookCompany);
}

// Post-Purchase Fulfillment & Delivery Portal
function renderFulfillmentPortal(orderId, product, name, email, company) {
  const checkoutContainer = document.getElementById('checkoutContainer');
  checkoutContainer.innerHTML = `
    <div style="text-align: center; max-width: 700px; margin: 0 auto;">
      <div style="width: 64px; height: 64px; background: var(--mint-light); color: var(--mint-dark); border-radius: var(--radius-full); display: inline-flex; align-items: center; justify-content: center; font-size: 32px; margin-bottom: 16px;">✓</div>
      <h3 style="font-size: 26px; font-weight: 800; color: var(--slate-900); margin-bottom: 6px;">Purchase Confirmed & Delivered!</h3>
      <p style="color: var(--slate-600); font-size: 15px; margin-bottom: 24px;">Thank you, <strong>${name}</strong> (${company}). An invoice and receipt have been dispatched to <strong>${email}</strong>.</p>

      <div style="background: var(--slate-50); border: 2px solid var(--mint); border-radius: var(--radius-lg); padding: 28px; text-align: left; margin-bottom: 32px; box-shadow: var(--shadow-sm);">
        <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--slate-200); padding-bottom: 14px; margin-bottom: 16px;">
          <div>
            <span style="font-size: 11px; font-weight: 700; color: var(--slate-500); text-transform: uppercase;">Order Number</span>
            <div style="font-size: 16px; font-weight: 800; color: var(--slate-900);">${orderId}</div>
          </div>
          <div style="text-align: right;">
            <span style="font-size: 11px; font-weight: 700; color: var(--slate-500); text-transform: uppercase;">License Type</span>
            <div style="font-size: 14px; font-weight: 700; color: var(--primary);">Commercial Team License</div>
          </div>
        </div>

        <h4 style="font-size: 18px; font-weight: 800; color: var(--slate-900); margin-bottom: 8px;">${product.title}</h4>
        <p style="font-size: 13px; color: var(--slate-600); margin-bottom: 20px;">File Package: <strong>${product.download_file}</strong> (${product.file_size})</p>

        <div style="background: var(--white); border: 1px solid var(--slate-300); border-radius: var(--radius-md); padding: 16px; margin-bottom: 16px;">
          <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 6px;">
            <span class="status-pill status-green">Sandbox Fulfillment Confirmed</span>
            <span style="font-size: 12px; color: var(--slate-500); font-weight: 600;">Stripe Test Mode Active</span>
          </div>
          <p style="font-size: 13px; color: var(--slate-700); line-height: 1.5;">
            In production, signed download links for <strong>${product.download_file}</strong> (${product.file_size}) and your corporate license key are dispatched automatically to <strong>${email}</strong> via secure webhook delivery.
          </p>
        </div>
        <button class="btn btn-mint btn-lg" style="width: 100%; display: flex; justify-content: center; gap: 10px;" onclick="alert('Sandbox Mode: Delivery simulated successfully. Production webhook triggers automated asset transfer to ' + '${email}');">
          <span>Verify Automated Delivery Simulation</span>
        </button>
      </div>

      <div style="text-align: left; background: var(--white); border: 1px solid var(--slate-200); border-radius: var(--radius-md); padding: 24px; margin-bottom: 28px;">
        <h5 style="font-size: 15px; font-weight: 800; color: var(--slate-900); margin-bottom: 10px; text-transform: uppercase; letter-spacing: 0.05em;">7-Day Fast-Track Deployment Roadmap</h5>
        <ol style="margin-left: 20px; font-size: 13px; color: var(--slate-700); line-height: 1.6;">
          <li style="margin-bottom: 6px;"><strong>Day 1:</strong> Unzip package and review <code>README-IMPLEMENTATION-GUIDE.md</code>.</li>
          <li style="margin-bottom: 6px;"><strong>Day 2:</strong> Conduct 45-minute manager calibration session using the 5-point observable rubrics.</li>
          <li style="margin-bottom: 6px;"><strong>Day 3:</strong> Configure exit criteria into your LMS or CRM stage gates.</li>
          <li style="margin-bottom: 6px;"><strong>Day 7:</strong> Begin weekly cohort tracking and assign the Day 30 Live-Fire Pitch Defense.</li>
        </ol>
      </div>

      <div style="background: var(--slate-100); padding: 20px; border-radius: var(--radius-md); text-align: left; margin-bottom: 24px;">
        <span style="font-size: 11px; font-weight: 800; color: var(--primary); text-transform: uppercase;">What Should I Do Next? (Logical Next Step)</span>
        <h5 style="font-size: 15px; font-weight: 800; color: var(--slate-900); margin: 6px 0 4px;">${product.upsell_recommendation.title}</h5>
        <p style="font-size: 13px; color: var(--slate-600); margin-bottom: 12px;">${product.upsell_recommendation.description}</p>
        <button class="btn btn-outline btn-sm" onclick="closeModal('checkoutModal')">Explore Additional Solutions</button>
      </div>
    </div>
  `;
}

function renderSprintFulfillment(orderId, product, name, email, company) {
  const checkoutContainer = document.getElementById('checkoutContainer');
  checkoutContainer.innerHTML = `
    <div style="text-align: center; max-width: 700px; margin: 0 auto;">
      <div style="width: 64px; height: 64px; background: var(--mint-light); color: var(--mint-dark); border-radius: var(--radius-full); display: inline-flex; align-items: center; justify-content: center; font-size: 32px; margin-bottom: 16px;">✓</div>
      <h3 style="font-size: 26px; font-weight: 800; color: var(--slate-900); margin-bottom: 6px;">Discovery Request Logged!</h3>
      <p style="color: var(--slate-600); font-size: 15px; margin-bottom: 24px;">Request ID: <strong>${orderId}</strong> • Logged for <strong>${name}</strong> (${company})</p>

      <div style="background: var(--slate-50); border: 2px solid var(--primary); border-radius: var(--radius-lg); padding: 28px; text-align: left; margin-bottom: 32px;">
        <h4 style="font-size: 18px; font-weight: 800; color: var(--slate-900); margin-bottom: 8px;">Pre-Engagement Customer Delivery Packet</h4>
        <p style="font-size: 13px; color: var(--slate-600); margin-bottom: 16px;">Download the preparation packet to review the engagement intake checklists, stakeholder rosters, and run-of-show templates before your call.</p>

        <div style="background: var(--white); border: 1px solid var(--slate-300); border-radius: var(--radius-md); padding: 16px; margin-bottom: 16px;">
          <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 6px;">
            <span class="status-pill status-green">Intake Request Logged</span>
            <span style="font-size: 12px; color: var(--slate-500); font-weight: 600;">Calendar Routing Active</span>
          </div>
          <p style="font-size: 13px; color: var(--slate-700); line-height: 1.5;">
            Your intake profile has been transmitted to EZ Enablement leadership. In production, pre-engagement intake packet <strong>${product.download_file}</strong> is dispatched instantly to <strong>${email}</strong> along with priority calendar scheduling access.
          </p>
        </div>
        <button class="btn btn-primary btn-lg" style="width: 100%; display: flex; justify-content: center; gap: 10px;" onclick="alert('Intake logged! Pre-engagement kit routed to ' + '${email}');">
          <span>Confirm Intake Transmission</span>
        </button>
      </div>

      <div style="text-align: left; background: var(--white); border: 1px solid var(--slate-200); border-radius: var(--radius-md); padding: 20px; margin-bottom: 24px;">
        <h5 style="font-size: 14px; font-weight: 800; color: var(--slate-900); margin-bottom: 8px;">Next Steps for Kickoff:</h5>
        <ul style="margin-left: 20px; font-size: 13px; color: var(--slate-700); line-height: 1.6;">
          <li>EZ Haimowicz will reach out directly to <strong>${email}</strong> within 1 business day to confirm your discovery date.</li>
          <li>Review Section 1 of the delivery packet to gather baseline CRM telemetry and sales cohort rosters.</li>
        </ul>
      </div>

      <button class="btn btn-outline" onclick="closeModal('checkoutModal')">Return to Storefront</button>
    </div>
  `;
}

// Modals helper
function initModals() {
  document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        overlay.classList.remove('active');
      }
    });
  });
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) modal.classList.remove('active');
}

// Launch Control Tracker Table rendering
function initLaunchTracker() {
  const tbody = document.getElementById('trackerTableBody');
  if (!tbody) return;

  const trackerRows = [
    {
      product: "RampReady 30/60/90 Onboarding OS",
      status: "YELLOW",
      url: "#card-rampready-os",
      buyer: "VPs of Sales, Enablement Leaders, CROs",
      problem: "Sales onboarding drift across 6 to 9 months; subjective manager evaluation",
      outcome: "Designed to accelerate ramp and establish observable readiness (historical 45-day benchmark)",
      price: "$497 / $997",
      content: "GREEN",
      design: "GREEN",
      preview: "GREEN",
      storefront: "GREEN",
      checkout: "YELLOW",
      fulfillment: "YELLOW",
      mobile: "GREEN",
      technical: "GREEN",
      commercial: "GREEN",
      seo: "GREEN",
      launch: "YELLOW",
      unresolved: "Production activation pending business-license approval and live merchant configuration.",
      next_action: "Feature as Flagship #1 on Storefront; activate merchant account upon license approval"
    },
    {
      product: "EZ Deal Labs Methodology Master Suite",
      status: "YELLOW",
      url: "#card-deal-labs-suite",
      buyer: "CROs, Sales VPs, Enablement Directors",
      problem: "Methodology shelfware; deals stalling at Stage 2->3 qualification",
      outcome: "Designed to improve qualification consistency and reduce deal stall across 6 methodologies",
      price: "$997 / $2,497",
      content: "GREEN",
      design: "GREEN",
      preview: "GREEN",
      storefront: "GREEN",
      checkout: "YELLOW",
      fulfillment: "YELLOW",
      mobile: "GREEN",
      technical: "GREEN",
      commercial: "GREEN",
      seo: "GREEN",
      launch: "YELLOW",
      unresolved: "Production activation pending business-license approval and live merchant configuration.",
      next_action: "Maintain active Deal Lens Selector integration"
    },
    {
      product: "EZ AI Sales Roleplay Library (100 Scenarios)",
      status: "YELLOW",
      url: "#card-ez-ai-roleplay-library",
      buyer: "Enablement Leads, Sales Managers, RevOps",
      problem: "Reps practice on live customers; generic AI prompts lack pushback friction",
      outcome: "Turnkey simulation engine across 6 methodologies, 29 skills, and 12 industries",
      price: "$497 / $1,497",
      content: "GREEN",
      design: "GREEN",
      preview: "GREEN",
      storefront: "GREEN",
      checkout: "YELLOW",
      fulfillment: "YELLOW",
      mobile: "GREEN",
      technical: "GREEN",
      commercial: "GREEN",
      seo: "GREEN",
      launch: "YELLOW",
      unresolved: "Production activation pending business-license approval and live merchant configuration.",
      next_action: "Promote as turnkey AI simulation upgrade"
    },
    {
      product: "AI Judgment Lab for GTM Teams",
      status: "YELLOW",
      url: "#card-ai-judgment-lab",
      buyer: "CROs, VPs of Sales, Enablement Leaders",
      problem: "Generic AI hallucination, compliance leaks & unverified sales claims",
      outcome: "Designed to establish human-in-the-loop review and structured prompt briefing",
      price: "$397 / $3,500",
      content: "GREEN",
      design: "GREEN",
      preview: "GREEN",
      storefront: "GREEN",
      checkout: "YELLOW",
      fulfillment: "YELLOW",
      mobile: "GREEN",
      technical: "GREEN",
      commercial: "GREEN",
      seo: "GREEN",
      launch: "YELLOW",
      unresolved: "Production activation pending business-license approval and live merchant configuration.",
      next_action: "Market as safe enterprise GTM AI adoption standard"
    },
    {
      product: "AI Fluency for GTM Teams (LMS Suite)",
      status: "YELLOW",
      url: "#card-ai-fluency-lms-suite",
      buyer: "Corporate L&D, Enterprise Enablement Directors",
      problem: "Months of custom authoring in Articulate/Storyline; high agency costs",
      outcome: "Pre-packaged courseware ready for LMS upload with SCORM/xAPI tracking",
      price: "$1,497 / $3,497",
      content: "GREEN",
      design: "GREEN",
      preview: "GREEN",
      storefront: "GREEN",
      checkout: "YELLOW",
      fulfillment: "YELLOW",
      mobile: "GREEN",
      technical: "GREEN",
      commercial: "GREEN",
      seo: "GREEN",
      launch: "YELLOW",
      unresolved: "Production activation pending business-license approval and live merchant configuration.",
      next_action: "Target enterprise teams with existing LMS infrastructure"
    },
    {
      product: "Executive Enablement Advisory Call",
      status: "YELLOW",
      url: "#card-expert-advisory-call",
      buyer: "Heads of Enablement, VPs of Sales, Founders",
      problem: "Need direct expert feedback without long agency commitments",
      outcome: "60-min strategic consultation + 24-hr prioritized action plan",
      price: "$500",
      content: "GREEN",
      design: "GREEN",
      preview: "GREEN",
      storefront: "GREEN",
      checkout: "YELLOW",
      fulfillment: "YELLOW",
      mobile: "GREEN",
      technical: "GREEN",
      commercial: "GREEN",
      seo: "GREEN",
      launch: "YELLOW",
      unresolved: "Production activation pending business-license approval and live merchant configuration.",
      next_action: "Promote on LinkedIn and warm alumni outreach"
    },
    {
      product: "Hands-On Enablement Architecture Session",
      status: "YELLOW",
      url: "#card-hands-on-working-session",
      buyer: "Sales VPs, Enablement Directors",
      problem: "Lack bandwidth and structured rubrics to draft custom sales assets",
      outcome: "Finished operational assets co-developed live in 2 hours",
      price: "$1,250",
      content: "GREEN",
      design: "GREEN",
      preview: "GREEN",
      storefront: "GREEN",
      checkout: "YELLOW",
      fulfillment: "YELLOW",
      mobile: "GREEN",
      technical: "GREEN",
      commercial: "GREEN",
      seo: "GREEN",
      launch: "YELLOW",
      unresolved: "Production activation pending business-license approval and live merchant configuration.",
      next_action: "Use as mid-tier bridge to full sprints"
    },
    {
      product: "AI & GTM Enablement Diagnostic Audit",
      status: "YELLOW",
      url: "#card-ai-gtm-diagnostic",
      buyer: "CROs, Private Equity Operating Partners",
      problem: "Unknown root cause behind pipeline drop-off and tool sprawl",
      outcome: "Evidence-based forensic audit report & prioritized 90-day roadmap",
      price: "$3,500",
      content: "GREEN",
      design: "GREEN",
      preview: "GREEN",
      storefront: "GREEN",
      checkout: "YELLOW",
      fulfillment: "YELLOW",
      mobile: "GREEN",
      technical: "GREEN",
      commercial: "GREEN",
      seo: "GREEN",
      launch: "YELLOW",
      unresolved: "Production activation pending business-license approval and live merchant configuration.",
      next_action: "Offer as 100% credited audit toward Sprint B"
    },
    {
      product: "Offer A: AI Adoption Sprint (4 Weeks)",
      status: "YELLOW",
      url: "#card-offer-a-ai-sprint",
      buyer: "CROs, Chief Commercial Officers",
      problem: "Under-utilized AI seats; inconsistent and generic sales copy",
      outcome: "Designed to reduce administrative friction and certify rep prompt fluency",
      price: "$15,000",
      content: "GREEN",
      design: "GREEN",
      preview: "GREEN",
      storefront: "GREEN",
      checkout: "YELLOW",
      fulfillment: "YELLOW",
      mobile: "GREEN",
      technical: "GREEN",
      commercial: "GREEN",
      seo: "GREEN",
      launch: "YELLOW",
      unresolved: "Production activation pending business-license approval and live merchant configuration.",
      next_action: "Target Series B+ AI transformation accounts"
    },
    {
      product: "Offer B: GTM Diagnostic & Build Sprint",
      status: "YELLOW",
      url: "#card-offer-b-gtm-sprint",
      buyer: "Series B+ Startups, PE Portcos",
      problem: "Inconsistent rep ramp, forecast variability, weak coaching",
      outcome: "Designed to increase coaching consistency and improve win-rate predictability",
      price: "$25,000",
      content: "GREEN",
      design: "GREEN",
      preview: "GREEN",
      storefront: "GREEN",
      checkout: "YELLOW",
      fulfillment: "YELLOW",
      mobile: "GREEN",
      technical: "GREEN",
      commercial: "GREEN",
      seo: "GREEN",
      launch: "YELLOW",
      unresolved: "Production activation pending business-license approval and live merchant configuration.",
      next_action: "Primary flagship enterprise consulting offer"
    },
    {
      product: "Offer C: Partner Enablement Launch Sprint",
      status: "YELLOW",
      url: "#card-offer-c-partner-sprint",
      buyer: "VPs of Channel & Alliances, CROs",
      problem: "Passive partner portals; low co-selling engagement",
      outcome: "Designed to strengthen indirect pipeline engagement (historical $3.1M benchmark)",
      price: "$20,000",
      content: "GREEN",
      design: "GREEN",
      preview: "GREEN",
      storefront: "GREEN",
      checkout: "YELLOW",
      fulfillment: "YELLOW",
      mobile: "GREEN",
      technical: "GREEN",
      commercial: "GREEN",
      seo: "GREEN",
      launch: "YELLOW",
      unresolved: "Production activation pending business-license approval and live merchant configuration.",
      next_action: "Deploy to channel-first SaaS target list"
    },
    {
      product: "Fractional Head of Enablement",
      status: "YELLOW",
      url: "#card-fractional-head",
      buyer: "CEOs, CROs, Series A-C Startups",
      problem: "Need senior enablement leadership without full executive overhead",
      outcome: "Embedded senior commercial leadership and manager coaching on demand",
      price: "$7,500 - $12,500/mo",
      content: "GREEN",
      design: "GREEN",
      preview: "GREEN",
      storefront: "GREEN",
      checkout: "YELLOW",
      fulfillment: "YELLOW",
      mobile: "GREEN",
      technical: "GREEN",
      commercial: "GREEN",
      seo: "GREEN",
      launch: "YELLOW",
      unresolved: "Production activation pending business-license approval and live merchant configuration.",
      next_action: "Pitch to fast-growing startups post-sprint"
    }
  ];

  tbody.innerHTML = trackerRows.map(r => `
    <tr>
      <td><strong>${r.product}</strong></td>
      <td><span class="status-pill status-${r.status.toLowerCase()}">${r.status}</span></td>
      <td><a href="${r.url}">View Card</a></td>
      <td>${r.buyer}</td>
      <td>${r.problem}</td>
      <td>${r.outcome}</td>
      <td><strong>${r.price}</strong></td>
      <td><span class="status-pill status-${r.content.toLowerCase()}">${r.content}</span></td>
      <td><span class="status-pill status-${r.design.toLowerCase()}">${r.design}</span></td>
      <td><span class="status-pill status-${r.preview.toLowerCase()}">${r.preview}</span></td>
      <td><span class="status-pill status-${r.storefront.toLowerCase()}">${r.storefront}</span></td>
      <td><span class="status-pill status-${r.checkout.toLowerCase()}">${r.checkout}</span></td>
      <td><span class="status-pill status-${r.fulfillment.toLowerCase()}">${r.fulfillment}</span></td>
      <td><span class="status-pill status-${r.mobile.toLowerCase()}">${r.mobile}</span></td>
      <td><span class="status-pill status-${r.technical.toLowerCase()}">${r.technical}</span></td>
      <td><span class="status-pill status-${r.commercial.toLowerCase()}">${r.commercial}</span></td>
      <td><span class="status-pill status-${r.seo.toLowerCase()}">${r.seo}</span></td>
      <td><span class="status-pill status-${r.launch.toLowerCase()}">${r.launch}</span></td>
      <td style="color: var(--slate-600);">${r.unresolved}</td>
      <td><strong>${r.next_action}</strong></td>
    </tr>
  `).join('');
}
