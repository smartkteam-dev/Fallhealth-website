const menuToggle = document.querySelector('.menu-toggle');
const primaryNav = document.querySelector('#primary-nav');

const canonicalUrl = document.querySelector('link[rel="canonical"]')?.href || window.location.href;
const pageTitle = document.title;
const pageDescription = document.querySelector('meta[name="description"]')?.content || '';
const insuranceFormUrl = 'https://docs.google.com/forms/d/17yw1ajl9cWbnyFJtk6dG26_2zck7jnq43mCf0ba4Xh8/viewform?edit_requested=true';
const swedishMassageImage = 'https://static.wixstatic.com/media/75d695884a504e7e9eb65363c40ab906.jpg/v1/crop/x_1250,y_0,w_3200,h_3786/fill/w_800,h_980,al_c,q_85/Relaxing%20Spa%20Massage.jpg';

if (!document.head.querySelector('link[rel="icon"]')) {
  const favicon = document.createElement('link');
  favicon.rel = 'icon';// Deployment refresh: 2026-09-14

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
    faq: 'Swedish massage is usually a good choice when you want broad, unhurried care rather than intense, targeted pressure.',
    storyTitle: 'The Bellevue classic for a reason',
    story: [
      'Swedish massage is a natural starting point when your body feels tired from desk work, commuting, travel or a busy week. The rhythm is calm and familiar, giving you room to settle before your therapist gradually works through areas of everyday tension.',
      'Long, smooth strokes and comfortable pressure are designed to support relaxation and circulation while helping the shoulders, neck and back feel less burdened. Guests from around Bellevue often choose it during a lunch break, after work or whenever they need a clear reset.',
      'If it has been a while since your last massage, Swedish massage offers a welcoming way to begin. Tell us what your body has been carrying, and we will shape the hour around how you want to feel when you leave.'
    ]
  },
  '/services/sport-massage/': {
    focus: 'Sports massage in Bellevue for recovery, mobility and active bodies',
    ideal: 'Runners, athletes, active guests and anyone carrying post-workout tightness or repetitive-use tension.',
    expect: 'The session focuses on the areas doing the most work. We discuss recent activity, comfort and recovery goals before choosing pressure and pacing.',
    faq: 'You do not need to be a professional athlete. Sports massage can be shaped around running, training, work or any active routine.',
    storyTitle: 'Support for Bellevue bodies in motion',
    story: [
      'Training, running, hiking and long active days all ask something different from your body. Sports massage gives those areas focused attention, whether you are preparing for activity or trying to recover comfortably afterward.',
      'Your session can concentrate on overworked legs, shoulders, hips or other areas affected by your routine. We use your recent activity and your own feedback to decide how much pressure and movement make sense that day.',
      'You do not need a race on the calendar to benefit from focused recovery work. Weekend athletes, regular gym-goers and active professionals can all use sports massage as part of a more intentional wellness routine.'
    ]
  },
  '/services/foot-reflexology/': {
    focus: 'Foot reflexology in Bellevue for tired feet, relaxation and full-body balance',
    ideal: 'Guests who spend long hours standing, walking or simply want a grounded, focused treatment.',
    expect: 'Your therapist works with specific points on the feet while checking in about pressure and sensitivity. The pace is calm, focused and restorative.',
    faq: 'Foot reflexology can be booked as a focused treatment or discussed as part of a broader wellness plan.',
    storyTitle: 'A focused pause for tired feet',
    story: [
      'Your feet carry you through workdays, errands and everything in between, yet they are often the last place to receive care. Foot reflexology creates a quieter kind of appointment centered on easing fatigue and helping you slow down.',
      'The treatment uses focused pressure across the feet and adapts to your comfort and sensitivity. It can be a simple standalone reset or a thoughtful addition to a longer massage session.',
      'For Bellevue guests who spend much of the day standing, walking or moving between commitments, a dedicated foot treatment can make the rest of the body feel invited to relax too.'
    ]
  },
  '/services/deep-tissue-massage/': {
    focus: 'Deep tissue massage in Bellevue for persistent tension, stiffness and mobility',
    ideal: 'Guests who prefer deliberate pressure for areas that feel overworked, tight or difficult to release.',
    expect: 'We use slower movement and focused pressure, with regular check-ins so the work remains productive and within your comfort level.',
    faq: 'Deep tissue does not have to mean painful. The most effective pressure is the pressure your body can comfortably receive.',
    storyTitle: 'Work with the tension that keeps returning',
    story: [
      'Some tightness fades after rest. Other tension keeps returning through long hours at a desk, repetitive movement, old injuries or the demands of an active life. Deep tissue massage is designed for guests who want more focused attention on those stubborn areas.',
      'Your therapist works slowly through deeper layers of muscle and connective tissue rather than rushing from one area to the next. We check in often, because useful pressure should feel intentional and manageable, not overwhelming.',
      'Many Bellevue guests choose deep tissue massage when general relaxation is not enough. We will discuss what has been bothering you and create a session that supports comfort, mobility and recovery.'
    ]
  },
  '/services/ashiatsu-massage/': {
    focus: 'Broad pressure, posture and deep relaxation',
    ideal: 'Guests who enjoy a deeper, steady rhythm and want focused attention for tight muscles or posture-related tension.',
    expect: 'Your therapist explains the barefoot technique, discusses areas of focus and builds pressure gradually so you know what to expect.',
    faq: 'Ashiatsu is a distinctive technique. Tell us about previous massage experiences so we can shape the session around your comfort.',
    storyTitle: 'A grounded, full-body rhythm',
    story: [
      'Ashiatsu brings a distinctive sense of depth and steadiness to massage therapy. It can be a good fit for guests who enjoy broad pressure and want to spend less time thinking about the clock and more time settling into the experience.',
      'Before beginning, your therapist explains the technique and talks through pressure, areas of focus and comfort. The session then builds gradually, allowing tight muscles and posture-related tension to receive thoughtful attention.',
      'If you are curious about a different kind of massage in Bellevue, Ashiatsu offers a memorable way to release tension while keeping the conversation centered on your needs.'
    ]
  },
  '/services/four-hands-massage/': {
    focus: 'Immersive relaxation and synchronized care',
    ideal: 'Guests celebrating a special occasion or looking for a memorable, deeply immersive massage experience.',
    expect: 'Two therapists coordinate their movements to create a steady, flowing rhythm. We discuss pressure, comfort and any areas you want prioritized.',
    faq: 'Four hands massage is personalized just like a one-therapist session, with the added sensation of synchronized movement.',
    storyTitle: 'A shared rhythm for a memorable occasion',
    story: [
      'Four hands massage is built around coordination. Two therapists work together so the movement feels continuous and immersive, creating a treatment that is especially easy to remember.',
      'It can be a special choice for a celebration, a gift or a day when you simply want to experience relaxation differently. We still personalize pressure and focus, so the treatment feels considered rather than performative.',
      'Guests looking for a distinctive massage experience in Bellevue can use four hands massage as a chance to fully switch off and let the rhythm carry the session.'
    ]
  },
  '/services/couples-massage/': {
    focus: 'Couples massage in Bellevue for shared wellness, reconnection and celebration',
    ideal: 'Partners, friends or family members who want to slow down together and share a restorative experience.',
    expect: 'Each guest receives personalized care while sharing the same relaxing session. We welcome preferences for pressure, focus and pace from both guests.',
    faq: 'Couples massage is a thoughtful choice for birthdays, anniversaries, reconnection or simply making time together.',
    storyTitle: 'Make room for wellness together',
    story: [
      'A couples massage gives two people the same quiet appointment while allowing each guest to receive care that fits their own body. You relax side by side, choose your preferred pressure and let the outside week become less important for a while.',
      'It is a natural fit for date nights, birthdays, anniversaries or a simple promise to slow down together. The experience can be calm and restorative without needing a special occasion attached to it.',
      'For couples visiting Fall Health Spa in Bellevue, the goal is straightforward: leave feeling cared for individually and more connected by sharing the time.'
    ]
  }
};

const massagePage = massageContent[window.location.pathname];
if (massagePage && document.querySelector('main')) {
  const details = document.createElement('section');
  details.className = 'service-details section';
  details.innerHTML = `<div class="service-details-heading"><p class="eyebrow">A little more about your session</p><h2>Care shaped around how you want to feel.</h2><p>Every massage at Fall Health Spa begins with a conversation, not a template.</p></div>
    <div class="service-details-grid"><div><h3>Best for</h3><p>${massagePage.ideal}</p></div><div><h3>Session focus</h3><p>${massagePage.focus}</p></div><div><h3>What to expect</h3><p>${massagePage.expect}</p></div></div>
    <div class="service-story"><h3>${massagePage.storyTitle}</h3>${massagePage.story.map((paragraph) => `<p>${paragraph}</p>`).join('')}</div>
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
