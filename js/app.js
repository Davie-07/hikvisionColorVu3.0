const DAVEX_CONFIG = {
  logo: 'assets/davex-logo.svg',
  phone: '[DAVEX PHONE]',
  email: '[DAVEX EMAIL]',
  whatsapp: '[DAVEX WHATSAPP]',
  location: '[DAVEX LOCATION KENYA]',
  formEndpoint: '' // Connect this handler to your preferred form endpoint before launch.
};

const cameras = [
  {
    model: 'DS-2CD1047G3H-LIU(F)(/SL)(/SRB)',
    shortModel: 'DS-2CD1047G3H',
    series: 'Value / ColorVu 3.0',
    resolution: '4MP',
    type: 'bullet',
    lens: '2.8 / 4mm fixed',
    features: ['HikAI-ISP', 'Motion Detection 3.0', 'Smart Hybrid Light', 'IP67'],
    notes: 'Selected /SL or /SRB variants add model-specific audio / strobe functions; -F adds up to 512GB SD storage where specified.',
    image: 'assets/images/DS-2CD1047G3H.png',
    imageAlt: 'Hikvision fixed bullet ColorVu camera product photo',
    // imageSource: 'Pacetech distributor product imagery representative of the fixed bullet form; replace with a cleared local asset before commercial publication.',
    docUrl: 'https://assets.hikvision.com/prd/normal/all/doc/m000168651/DS-2CD1047G3H-LIUF_SL_SRB_Datasheet_20260409.pdf',
    sourceUrl: 'https://pro-av.hikvision.com/cis/products/IP-Products/Network-Cameras/value-series/ds-2cd1047g3h-liu-f---sl---srb-/'
  },
  {
    model: 'DS-2CD1147G3H-LIUF',
    shortModel: 'DS-2CD1147G3H',
    series: 'Value / ColorVu 3.0',
    resolution: '4MP',
    type: 'dome',
    lens: '2.8 / 4mm fixed',
    features: ['HikAI-ISP', 'Motion Detection 3.0', 'Smart Hybrid Light', 'IP67 / IK08'],
    notes: '-F variant supports onboard SD storage up to 512GB where specified.',
    image: 'assets/images/DS-2CD1147G3H.png',
    imageAlt: 'Hikvision ColorVu fixed dome camera product photo',
    // imageSource: 'Pacetech distributor product imagery from a closely matching ColorVu 3.0 fixed dome; replace with exact model imagery before publication.',
    docUrl: 'https://assets.hikvision.com/prd/public/all/doc/sm000094494/DS-2CD1147G3H-LIUF_Datasheet_20250618.pdf',
    sourceUrl: 'https://hsrc.hikvision.com/en/support/download/firmware/'
  },
  {
    model: 'DS-2CD2347G3-LI2UY',
    shortModel: 'DS-2CD2347G3',
    series: 'Pro / ColorVu 3.0',
    resolution: '4MP',
    type: 'turret',
    lens: '2.8 / 4mm fixed',
    features: ['HikAI-ISP', 'Person / vehicle classification', 'Smart Hybrid Light', 'IP67'],
    notes: '0.0001 lux @ F1.0 and 2.8 / 4mm lens options are listed on the current Hikvision page.',
    image: 'assets/images/DS-2CD2347G3.png',
    imageAlt: 'Hikvision ColorVu 3.0 4MP fixed turret camera product photo',
    // imageSource: 'Pacetech distributor product imagery. Replace with a cleared local asset before commercial publication.',
    docUrl: 'https://assets.hikvision.com/prd/public/all/doc/sm000077863/DS-2CD2347G3-LI2UY_Datasheet_20250414.pdf',
    sourceUrl: 'https://hsrc.hikvision.com/europe/products/IP-Products/Network-Cameras/Pro-Series-EasyIP-/ds-2cd2347g3-li-2u-y/'
  },
  {
    model: 'DS-2CD2087G3-LI2UY/SL',
    shortModel: 'DS-2CD2087G3',
    series: 'Pro / ColorVu 3.0',
    resolution: '8MP / 4K',
    type: 'bullet',
    lens: '2.8 / 4mm fixed',
    features: ['HikAI-ISP', 'Scene-adaptive WDR', 'Two-way audio', 'IP67'],
    notes: 'Current MENA product page lists active strobe + audio alarm, Smart Hybrid Light up to 40m and NEMA 4X anti-corrosion design.',
    image: 'assets/images/DS-2CD2087G3.png',
    imageAlt: 'Hikvision ColorVu 3.0 8MP fixed mini bullet camera product photo',
    // imageSource: 'Pacetech distributor product imagery. Replace with a cleared local asset before commercial publication.',
    docUrl: 'https://assets.hikvision.com/prd/normal/all/doc/sm000077849/DS-2CD2087G3-LI2UY_SL_Datasheet_20260105.pdf',
    sourceUrl: 'https://pro-av.hikvision.com/mena-en/products/IP-Products/Network-Cameras/Pro-Series-EasyIP-/ds-2cd2087g3-li2uy-s-l--rb-/'
  }
];

const selectorProfiles = {
  home: {
    title: 'Home / compound starting point',
    copy: 'A fixed 4MP turret or bullet is often a practical starting point for gates, entrances and driveways. Confirm the lens and night lighting against the target distance.',
    chips: ['4MP', 'Turret / bullet', '2.8 / 4mm'],
    link: '#cameras'
  },
  retail: {
    title: 'Retail starting point',
    copy: 'Use the entrance and frontage as the first scene. A 4MP ColorVu 3.0 turret or dome can be a compact option; audio or deterrence depends on the exact model.',
    chips: ['4MP', 'Turret / dome', 'Scene lighting'],
    link: '#cameras'
  },
  office: {
    title: 'Office starting point',
    copy: 'A dome or turret can suit lobby and access areas. Prioritise clean mounting, glare control and an appropriate lens rather than simply maximising resolution.',
    chips: ['Dome / turret', '4MP+', 'Glare control'],
    link: '#cameras'
  },
  warehouse: {
    title: 'Warehouse starting point',
    copy: 'For loading areas and yards, look at bullet or turret form factors with Smart Hybrid Light where needed. 4MP and 8MP options are available across current ColorVu 3.0 families.',
    chips: ['Bullet / turret', '4MP / 8MP', 'Hybrid light'],
    link: '#cameras'
  },
  parking: {
    title: 'Parking starting point',
    copy: 'Parking scenes usually make lens and illumination decisions more important. Higher resolution may help, but target distance and DORI need to be checked first.',
    chips: ['8MP may help', 'Lens-first', 'DORI check'],
    link: '#specs-title'
  },
  perimeter: {
    title: 'Perimeter starting point',
    copy: 'Perimeter work is distance-driven. Start with target size, viewing distance, lens and illumination range; then choose resolution and analytics.',
    chips: ['Bullet', 'Lens / DORI', 'Lighting'],
    link: '#specs-title'
  },
  entrance: {
    title: 'Entrance / gate starting point',
    copy: 'Prioritise the approach angle, faces, vehicle path and lighting. A 4MP or 8MP ColorVu 3.0 model can work, but the lens and mounting height should decide the final choice.',
    chips: ['4MP / 8MP', 'Faces / vehicles', 'Mounting'],
    link: '#cameras'
  },
  industrial: {
    title: 'Industrial starting point',
    copy: 'Yards and loading areas can combine long sight lines, mixed lighting and environmental exposure. Some current Pro models add corrosion-oriented design features; verify the exact rating.',
    chips: ['8MP option', 'IP67 examples', 'Environment check'],
    link: '#specs-title'
  }
};

function q(selector, root=document){ return root.querySelector(selector); }
function qa(selector, root=document){ return [...root.querySelectorAll(selector)]; }

function renderProducts(filter='all') {
  const grid = q('#product-grid');
  const matching = cameras.filter(cam => {
    if(filter === 'all') return true;
    if(filter === '8mp') return cam.resolution.includes('8MP');
    if(filter === '4mp') return cam.resolution === '4MP';
    return cam.type === filter;
  });
  grid.innerHTML = matching.map(cam => `
    <article class="product-card" data-type="${cam.type}">
      <div class="product-media">
        <img src="${cam.image}" alt="${cam.imageAlt}" width="600" height="600" loading="lazy" decoding="async">
        
      </div>
      <div class="product-body">
        <div class="product-top"><span class="product-tag">${cam.series}</span><span class="product-badge">${cam.resolution}</span></div>
        <h3>${cam.shortModel}</h3>
        <div class="product-model">${cam.model} • ${cam.type} • ${cam.lens}</div>
        <ul class="product-points">${cam.features.map(f => `<li>${f}</li>`).join('')}</ul>
        <p class="product-model">${cam.notes}</p>
        <div class="product-actions"><a class="primary" href="${cam.docUrl}" target="_blank" rel="noopener">View datasheet</a><a href="${cam.sourceUrl}" target="_blank" rel="noopener">Product page</a></div>
      </div>
    </article>
  `).join('');

  qa('.product-media img', grid).forEach(img => {
    img.addEventListener('error', () => {
      img.hidden = true;
      const fallback = img.parentElement.querySelector('.media-fallback');
      if(fallback) fallback.hidden = false;
    }, { once: true });
  });
}

function setupFiltering(){
  qa('.filter-btn').forEach(btn => btn.addEventListener('click', () => {
    qa('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderProducts(btn.dataset.filter);
  }));
}

function setupSelector(){
  const result = q('#selector-results');
  qa('.selector-option').forEach(btn => btn.addEventListener('click', () => {
    qa('.selector-option').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const profile = selectorProfiles[btn.dataset.scenario];
    result.innerHTML = `
      <div class="result-card">
        <div class="result-eyebrow">Starting point</div>
        <h3>${profile.title}</h3>
        <p>${profile.copy}</p>
        <div class="result-chips">${profile.chips.map(c => `<span>${c}</span>`).join('')}</div>
        <a class="result-link" href="${profile.link}">See matching cameras →</a>
      </div>
    `;
  }));

  qa('[data-scenario-link]').forEach(link => link.addEventListener('click', () => {
    setTimeout(() => {
      const target = q(`.selector-option[data-scenario="${link.dataset.scenarioLink}"]`);
      if(target) target.click();
    }, 50);
  }));
}

function setupMobileNav(){
  const toggle = q('.menu-toggle');
  const nav = q('#primary-nav');
  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
    toggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
  });
  qa('#primary-nav a').forEach(a => a.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  }));
}

function setupHeader(){
  const header = q('#site-header');
  const topButton = q('#back-top');
  const onScroll = () => {
    header.classList.toggle('scrolled', window.scrollY > 10);
    topButton.classList.toggle('visible', window.scrollY > 700);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
  topButton.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

function setupReveal(){
  const nodes = qa('.reveal');
  if(!('IntersectionObserver' in window)){ nodes.forEach(n => n.classList.add('revealed')); return; }
  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting){ entry.target.classList.add('revealed'); io.unobserve(entry.target); }
    });
  }, { threshold: 0.12 });
  nodes.forEach(n => io.observe(n));
}

function setupHeroFallback(){
  const img = q('#hero-camera');
  if(!img) return;
  img.addEventListener('error', () => {
    img.hidden = true;
    q('.image-fallback').hidden = false;
  }, { once: true });
}

function setupModal(){
  const modal = q('#quote-modal');
  const open = q('#open-quote');
  const close = q('#close-quote');
  open.addEventListener('click', () => modal.showModal());
  close.addEventListener('click', () => modal.close());
  modal.addEventListener('click', event => { if(event.target === modal) modal.close(); });

  q('#quote-form').addEventListener('submit', event => {
    event.preventDefault();
    const status = q('#form-status');
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    if(DAVEX_CONFIG.formEndpoint){
      status.textContent = 'Integration endpoint configured - wire your POST handler here.';
      return;
    }
    const subject = encodeURIComponent(`ColorVu 3.0 camera enquiry - ${data.name}`);
    const body = encodeURIComponent([
      `Name: ${data.name}`,
      `Business / site: ${data.business || '-'}`,
      `Email: ${data.email}`,
      `Site type: ${data.siteType}`,
      `Viewing distance: ${data.distance}`,
      `Night lighting: ${data.lighting}`,
      `Requirements: ${data.notes}`
    ].join('\n'));
    window.location.href = `mailto:${DAVEX_CONFIG.email}?subject=${subject}&body=${body}`;
    status.textContent = 'Opening your email client...';
  });
}

function setupYear(){ q('#year').textContent = new Date().getFullYear(); }

renderProducts();
setupFiltering();
setupSelector();
setupMobileNav();
setupHeader();
setupReveal();
setupHeroFallback();
setupModal();
setupYear();
