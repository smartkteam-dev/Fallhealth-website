const menuToggle = document.querySelector('.menu-toggle');
const primaryNav = document.querySelector('#primary-nav');

const canonicalUrl = document.querySelector('link[rel="canonical"]')?.href || window.location.href;
const pageTitle = document.title;
const pageDescription = document.querySelector('meta[name="description"]')?.content || '';
const insuranceFormUrl = 'https://docs.google.com/forms/d/17yw1ajl9cWbnyFJtk6dG26_2zck7jnq43mCf0ba4Xh8/viewform?edit_requested=true';
const swedishMassageImage = 'https://static.wixstatic.com/media/75d695884a504e7e9eb65363c40ab906.jpg/v1/crop/x_1250,y_0,w_3200,h_3786/fill/w_800,h_980,al_c,q_85/Relaxing%20Spa%20Massage.jpg';

if (!document.head.querySelector('link[rel="icon"]')) {
  const favicon = document.createElement('link');
  favicon.rel = 'icon';
  favicon.href = '/favicon.svg';
  document.head.appendChild(favicon);
}

document.querySelectorAll('img[alt*="Swedish massage"]').forEach((image) => {
  image.src = swedishMassageImage;
});
const keywordHeadings = {
  '/': 'Massage Therapy in Bellevue, WA for Rest and Recovery',
  '/services/': 'Massage Services in Bellevue, WA',
  '/services': 'Massage Services in Bellevue, WA',
  '/price/': 'Massage Prices in Bellevue, WA',
  '/price': 'Massage Prices in Bellevue, WA',
  '/about-us/': 'About Fall Health Spa Massage Therapy in Bellevue',
  '/about-us': 'About Fall Health Spa Massage Therapy in Bellevue',
  '/gift-card/': 'Massage Gift Cards in Bellevue, WA',
  '/gift-card': 'Massage Gift Cards in Bellevue, WA',
  '/insurance-massage/': 'Insurance Massage Therapy in Bellevue, WA',
  '/insurance-massage': 'Insurance Massage Therapy in Bellevue, WA'
};

const massageKeywordHeadings = {
  '/services/swedish-massage/': 'Swedish Massage in Bellevue, WA',
  '/services/sport-massage/': 'Sports Massage in Bellevue, WA',
  '/services/foot-reflexology/': 'Foot Reflexology in Bellevue, WA',
  '/services/deep-tissue-massage/': 'Deep Tissue Massage in Bellevue, WA',
  '/services/ashiatsu-massage/': 'Ashiatsu Massage in Bellevue, WA',
  '/services/four-hands-massage/': 'Four Hands Massage in Bellevue, WA',
  '/services/couples-massage/': 'Couples Massage in Bellevue, WA'
};

if (keywordHeadings[window.location.pathname] && document.querySelector('h1')) {
  document.querySelector('h1').textContent = keywordHeadings[window.location.pathname];
}

if (massageKeywordHeadings[window.location.pathname] && document.querySelector('h1')) {
  document.querySelector('h1').textContent = massageKeywordHeadings[window.location.pathname];
}

document.querySelectorAll('a[href*="docs.google.com/forms/d/17yw1ajl9cWbnyFJtk6dG26_2zck7jnq43mCf0ba4Xh8"]').forEach((link) => {
  link.href = insuranceFormUrl;
});

function addMeta(attribute, name, content) {
  if (!content || document.head.querySelector(`meta[${attribute}="${name}"]`)) return;
  const meta = document.createElement('meta');
  meta.setAttribute(attribute, name);
  meta.content = content;
  document.head.appendChild(meta);
}

addMeta('property', 'og:type', 'website');
addMeta('property', 'og:url', canonicalUrl);
addMeta('property', 'og:title', pageTitle);
addMeta('property', 'og:description', pageDescription);
addMeta('name', 'twitter:card', 'summary_large_image');
addMeta('name', 'twitter:title', pageTitle);
addMeta('name', 'twitter:description', pageDescription);

if (window.location.pathname.startsWith('/services/') || window.location.pathname === '/insurance-massage/') {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: document.querySelector('h1')?.textContent.trim() || pageTitle,
    description: pageDescription,
    url: canonicalUrl,
    provider: {
      '@type': 'MassageTherapist',
      name: 'Fall Health Spa',
      telephone: '+1-425-454-7177',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '1445 130th Ave NE',
        addressLocality: 'Bellevue',
        addressRegion: 'WA',
        postalCode: '98005',
        addressCountry: 'US'
      }
    },
    areaServed: 'Bellevue, WA'
  };
  const schemaScript = document.createElement('script');
  schemaScript.type = 'application/ld+json';
  schemaScript.textContent = JSON.stringify(serviceSchema);
  document.head.appendChild(schemaScript);
}

if (window.location.pathname === '/insurance-massage/' || window.location.pathname === '/insurance-massage') {
  const insuranceHeading = document.querySelector('.intro-copy h2');
  const insuranceCopy = insuranceHeading?.nextElementSibling;
  if (insuranceHeading) insuranceHeading.textContent = 'We accept these insurance plans:';
  if (insuranceCopy) insuranceCopy.textContent = 'We accept Aetna, Kaiser Permanente and Premera Blue Cross. Coverage and eligibility vary by plan, so please verify your benefits with us before booking.';
}

const massageContent = {
  '/services/swedish-massage/': {
    focus: 'Swedish massage in Bellevue for relaxation, circulation and everyday tension',
    ideal: 'Guests looking for a gentle full-body reset, work-stress relief or a softer first massage experience.',
    expect: 'Your licensed massage therapist uses long, smooth strokes and adjusts pressure throughout the session. We begin with a conversation about comfort, focus areas and the pace you prefer.',
    faq: 'Swedish massage is usually a good choice when you want broad, unhurried care rather than intense, targeted pressure.'
  },
  '/services/sport-massage/': {
    focus: 'Sports massage in Bellevue for recovery, mobility and active bodies',
    ideal: 'Runners, athletes, active guests and anyone carrying post-workout tightness or repetitive-use tension.',
    expect: 'The session focuses on the areas doing the most work. We discuss recent activity, comfort and recovery goals before choosing pressure and pacing.',
    faq: 'You do not need to be a professional athlete. Sports massage can be shaped around running, training, work or any active routine.'
  },
  '/services/foot-reflexology/': {
    focus: 'Foot reflexology in Bellevue for tired feet, relaxation and full-body balance',
    ideal: 'Guests who spend long hours standing, walking or simply want a grounded, focused treatment.',
    expect: 'Your therapist works with specific points on the feet while checking in about pressure and sensitivity. The pace is calm, focused and restorative.',
    faq: 'Foot reflexology can be booked as a focused treatment or discussed as part of a broader wellness plan.'
  },
  '/services/deep-tissue-massage/': {
    focus: 'Deep tissue massage in Bellevue for persistent tension, stiffness and mobility',
    ideal: 'Guests who prefer deliberate pressure for areas that feel overworked, tight or difficult to release.',
    expect: 'We use slower movement and focused pressure, with regular check-ins so the work remains productive and within your comfort level.',
    faq: 'Deep tissue does not have to mean painful. The most effective pressure is the pressure your body can comfortably receive.'
  },
  '/services/ashiatsu-massage/': {
    focus: 'Broad pressure, posture and deep relaxation',
    ideal: 'Guests who enjoy a deeper, steady rhythm and want focused attention for tight muscles or posture-related tension.',
    expect: 'Your therapist explains the barefoot technique, discusses areas of focus and builds pressure gradually so you know what to expect.',
    faq: 'Ashiatsu is a distinctive technique. Tell us about previous massage experiences so we can shape the session around your comfort.'
  },
  '/services/four-hands-massage/': {
    focus: 'Immersive relaxation and synchronized care',
    ideal: 'Guests celebrating a special occasion or looking for a memorable, deeply immersive massage experience.',
    expect: 'Two therapists coordinate their movements to create a steady, flowing rhythm. We discuss pressure, comfort and any areas you want prioritized.',
    faq: 'Four hands massage is personalized just like a one-therapist session, with the added sensation of synchronized movement.'
  },
  '/services/couples-massage/': {
    focus: 'Couples massage in Bellevue for shared wellness, reconnection and celebration',
    ideal: 'Partners, friends or family members who want to slow down together and share a restorative experience.',
    expect: 'Each guest receives personalized care while sharing the same relaxing session. We welcome preferences for pressure, focus and pace from both guests.',
    faq: 'Couples massage is a thoughtful choice for birthdays, anniversaries, reconnection or simply making time together.'
  }
};

const massagePage = massageContent[window.location.pathname];
if (massagePage && document.querySelector('main')) {
  const details = document.createElement('section');
  details.className = 'service-details section';
  details.innerHTML = `<div class="service-details-heading"><p class="eyebrow">A little more about your session</p><h2>Care shaped around how you want to feel.</h2><p>Every massage at Fall Health Spa begins with a conversation, not a template.</p></div>
    <div class="service-details-grid"><div><h3>Best for</h3><p>${massagePage.ideal}</p></div><div><h3>Session focus</h3><p>${massagePage.focus}</p></div><div><h3>What to expect</h3><p>${massagePage.expect}</p></div></div>
    <details class="service-faq"><summary>Is this treatment right for me?</summary><p>${massagePage.faq}</p></details>`;
  document.querySelector('main').insertBefore(details, document.querySelector('main').lastElementChild);
}

if (primaryNav && !primaryNav.querySelector('a[href="/"]')) {
  const homeLink = document.createElement('a');
  homeLink.href = '/';
  homeLink.textContent = 'Home';
  primaryNav.prepend(homeLink);
}

const servicesLink = primaryNav?.querySelector('a[href="/services"]');
if (servicesLink && !servicesLink.parentElement.classList.contains('nav-dropdown')) {
  const dropdown = document.createElement('details');
  dropdown.className = 'nav-dropdown';
  dropdown.innerHTML = `<summary>Services <span aria-hidden="true">⌄</span></summary>
    <div class="nav-dropdown-menu">
      <a href="/services">All services</a>
      <a href="/services/swedish-massage">Swedish massage</a>
      <a href="/services/sport-massage">Sport massage</a>
      <a href="/services/foot-reflexology">Foot reflexology</a>
      <a href="/services/deep-tissue-massage">Deep tissue massage</a>
      <a href="/services/ashiatsu-massage">Ashiatsu massage</a>
      <a href="/services/four-hands-massage">Four hands massage</a>
      <a href="/services/couples-massage">Couples massage</a>
    </div>`;
  servicesLink.replaceWith(dropdown);
}

if (primaryNav && !primaryNav.querySelector('a[href="/insurance-massage"]')) {
  const insuranceLink = document.createElement('a');
  insuranceLink.href = '/insurance-massage';
  insuranceLink.textContent = 'Insurance massage';
  primaryNav.insertBefore(insuranceLink, primaryNav.querySelector('a[href="/price"]'));
}

if (menuToggle && primaryNav) {
  menuToggle.addEventListener('click', () => {
    const open = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!open));
    primaryNav.classList.toggle('is-open', !open);
    menuToggle.textContent = open ? 'Menu' : 'Close';
  });
}

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', () => {
    if (primaryNav) primaryNav.classList.remove('is-open');
  });
});

const serviceLinks = {
  '/services#swedish': '/services/swedish-massage',
  '/services#deep-tissue': '/services/deep-tissue-massage',
  '/services#couples': '/services/couples-massage'
};

document.querySelectorAll('a').forEach((link) => {
  const destination = serviceLinks[link.getAttribute('href')];
  if (destination) link.setAttribute('href', destination);
});
