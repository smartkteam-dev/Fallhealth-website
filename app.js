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

if (keywordHeadings[window.location.pathname] && document.querySelector('h1')) {
  document.querySelector('h1').textContent = keywordHeadings[window.location.pathname];
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
