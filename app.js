const menuToggle = document.querySelector('.menu-toggle');
const primaryNav = document.querySelector('#primary-nav');

if (!document.head.querySelector('link[rel="icon"]')) {
  const favicon = document.createElement('link');
  favicon.rel = 'icon';
  favicon.href = '/favicon.svg';
  document.head.appendChild(favicon);
}

const swedishImage = 'https://static.wixstatic.com/media/75d695884a504e7e9eb65363c40ab906.jpg/v1/crop/x_1250,y_0,w_3200,h_3786/fill/w_800,h_980,al_c,q_85/Relaxing%20Spa%20Massage.jpg';
document.querySelectorAll('img[alt*="Swedish massage"]').forEach((image) => {
  image.src = swedishImage;
});

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
      <a href="/services/deep-tissue-massage">Deep tissue massage</a>
      <a href="/services/couples-massage">Couples massage</a>
      <a href="/services/sport-massage">Sports massage</a>
      <a href="/services/foot-reflexology">Foot reflexology</a>
      <a href="/services/ashiatsu-massage">Ashiatsu massage</a>
      <a href="/services/four-hands-massage">Four hands massage</a>
      <a href="/services/prenatal-massage">Prenatal massage</a>
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
    const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!isOpen));
    primaryNav.classList.toggle('is-open', !isOpen);
    menuToggle.textContent = isOpen ? 'Menu' : 'Close';
  });
}
