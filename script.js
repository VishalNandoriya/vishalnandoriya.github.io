const projects = [
  {name:'TruKKer Partner', category:'Logistics / Partner operations', summary:'A logistics partner application supporting customer-facing mobile workflows.', tags:['iOS','Feature delivery','Production readiness'], detail:'At TruKKer, I designed, developed and released iOS features, translated product and design requirements into maintainable implementations, and supported debugging, code quality and production stability within an 18-member team.', ios:'https://apps.apple.com/in/app/trukker-partner/id1624013412'},
  {name:'Salesmate CRM', category:'Enterprise / Sales & customer relationships', summary:'A mobile CRM bringing sales pipelines, communication and team activities into one application.', tags:['Flutter','Swift','Twilio VoIP','Sockets'], detail:'Product capabilities include sales pipelines, email automation, in-app calling, activity tracking, messaging, a shared inbox and geolocation. Contributed within a 55-member product team. Portfolio technologies include Dart, Flutter, Swift, Kotlin, Twilio, sockets and maps.', ios:'https://apps.apple.com/us/app/salesmate-sales-crm/id1114709439', android:'https://play.google.com/store/apps/details?id=com.rapidops.salesmate'},
  {name:'Harris Teeter', category:'Retail / Grocery & shopping', summary:'A consumer retail application connecting online shopping with in-store services.', tags:['Swift','Objective-C','SQLite','Payments'], detail:'Product capabilities include pickup, delivery and shipping, digital coupons, shopping lists, pharmacy refills and transfers, and fuel points. Contributed within a 15-member team. Technologies include storyboards, XIBs, Auto Layout, Core Animation, payment integration and Core Location.', ios:'https://apps.apple.com/us/app/harris-teeter/id422306980'},
  {name:'Kaasak', category:'Commerce / Food & beverage delivery', summary:'An iOS and Android commerce experience for food and beverage delivery in Amman, Jordan.', tags:['Flutter','Dart','Payments','Maps'], detail:'Product capabilities include authentication, product search, cart and checkout, order history and reordering, notifications, multiple languages and vendor management. Portfolio technologies include Dart, Flutter, Swift, Kotlin, online payments, location and networking.', ios:'https://apps.apple.com/in/app/kaasak-alcohol-delivery/id1546988389', android:'https://play.google.com/store/apps/details?id=com.kaasak.jo'},
  {name:'QMS – Borregaard', category:'Quality management', summary:'HSEQ reporting, QR-based checklists, timesheets and tasks, integrated with QualiCost Management System.', detail:'Supports check-in and check-out, photo attachments and configurable organizational workflows. Delivered within an 8-member team. Technologies: Flutter, Dart, Swift, Kotlin, QR codes and networking.', ios:'https://apps.apple.com/in/app/qualicost-reports/id953002468', android:'https://play.google.com/store/apps/details?id=com.borregaard.qualicost'},
  {name:'POD Driver', category:'Cook & Boardman / Proof of delivery', summary:'Delivery workflows with route notifications, electronic signatures and delivery capture.', detail:'One of two Cook & Boardman proof-of-delivery applications developed within an 8-member team. Technologies: Swift, Objective-C, UIKit, storyboards, XIBs, Realm, Core Animation, Core Location and barcode scanning.', ios:'https://apps.apple.com/us/app/cook-boardman-pod-driver/id1576538364'},
  {name:'POD QA', category:'Cook & Boardman / Delivery verification', summary:'Package scanning, item verification and instant delivery notifications for operational teams.', detail:'Companion proof-of-delivery workflow application. Technologies: Swift, Objective-C, storyboards, XIBs, Auto Layout, Core Animation, Core Location and barcode scanning.', ios:'https://apps.apple.com/us/app/cook-boardman-pod-qa/id1584109216'},
  {name:'meetIn', category:'Social / Location & connections', summary:'An application to connect with friends and business contacts while traveling and arrange in-person meetups.', detail:'Features include check-ins, chat, augmented reality, trips and nearby friends. Delivered within a 7-member team. Technologies: Swift, Objective-C, Core Animation, Core Location, maps and social integrations.', ios:'https://apps.apple.com/in/app/meetin/id590629564'},
  {name:'Taxi app', category:'Mobility / Ride booking', summary:'A passenger experience for requesting rides, selecting destinations and connecting with nearby drivers.', detail:'Portfolio features include ride convenience, rewards and offers. Technologies: Swift, Objective-C, storyboards, XIBs, Auto Layout, Core Animation, Core Location, maps and social integrations.', ios:'https://apps.apple.com/in/app/taxisti/id1453533306'}
];

function renderProject(project, cardClass) {
  const tags = project.tags?.map(tag => `<span>${tag}</span>`).join('');

  return `
    <article class="${cardClass}">
      <p class="project-category">${project.category}</p>
      <h3>${project.name}</h3>
      <p class="project-summary">${project.summary}</p>
      ${tags ? `<div class="tags">${tags}</div>` : ''}
      <details>
        <summary>Project details</summary>
        <p>${project.detail}</p>
      </details>
      <div class="project-links">
        <a href="${project.ios}" target="_blank" rel="noopener" aria-label="${project.name} on the App Store">App Store <span aria-hidden="true">↗</span></a>
        ${project.android ? `<a href="${project.android}" target="_blank" rel="noopener" aria-label="${project.name} on Google Play">Google Play <span aria-hidden="true">↗</span></a>` : ''}
      </div>
    </article>`;
}

document.querySelector('#featured-projects').innerHTML = projects.slice(0, 4)
  .map(project => renderProject(project, 'project')).join('');
document.querySelector('#other-projects').innerHTML = projects.slice(4)
  .map(project => renderProject(project, 'project other-project')).join('');

const roles = [
  ['Feb 2025 — Oct 2026','Software Development Engineer III','TruKKer Technologies Pvt. Ltd.',['Designed, developed and released customer-facing features for the TruKKer Partner iOS application.','Translated product and design requirements into maintainable implementations and supported features through production release.','Contributed to debugging, release readiness, code quality and production stability for logistics workflows.']],
  ['Jul 2020 — Jul 2024','Senior Software Engineer','RapidOps Solutions Pvt. Ltd.',['Developed and maintained enterprise applications across CRM, retail, field service and quality management.','Applied Clean Architecture and MVVM; integrated Twilio voice calling, Stripe payments and secure REST APIs with certificate-based SSL authentication.','Coordinated alpha, beta and production releases, cross-functional Jira delivery, and architecture and integration documentation.']],
  ['Jun 2019 — Jul 2020','Senior iOS Developer','Techniexe InfoLabs LLP',['Managed Git branching, tagging, versioning and third-party dependencies across iOS projects.','Integrated analytics and Crashlytics, supported command-line build distribution, and mentored developers in implementation, debugging and architecture.']],
  ['Jan 2016 — Jun 2019','Senior iOS Developer','Verve Systems Pvt. Ltd.',['Translated client requirements into feasible technical solutions and integrated RESTful services and JSON APIs.','Led technical planning, task allocation, estimation, risk identification and team coordination.']],
  ['May 2015 — Dec 2015','Junior iOS Developer','Connection Phase',['Integrated libraries and APIs, resolved application defects and optimized iOS feature performance.']],
  ['Apr 2014 — May 2015','Junior iOS Developer','Quantum Technolabs Pvt. Ltd.',['Developed and maintained iOS features using UIKit, Core Data, Foundation, Core Graphics and Core Animation.']]
];
document.querySelector('#timeline').innerHTML = roles.map(([date, title, company, bullets]) => `
  <article class="timeline-row">
    <div class="timeline-heading">
      <h3 class="company">${company}</h3>
      <p class="timeline-title">${title}</p>
      <p class="timeline-date">${date} <span class="timeline-location">Ahmedabad, Gujarat</span></p>
    </div>
    <ul>${bullets.map(bullet => `<li>${bullet}</li>`).join('')}</ul>
  </article>`).join('');
document.querySelector('#year').textContent = new Date().getFullYear();

const root = document.documentElement;
const themeKey = 'portfolio-theme';
const systemTheme = window.matchMedia('(prefers-color-scheme: dark)');
const themeColor = document.querySelector('meta[name="theme-color"]');
const themeButtons = [...document.querySelectorAll('[data-theme-toggle]')];
let themePreference;

try {
  const savedTheme = localStorage.getItem(themeKey);
  if (savedTheme === 'light' || savedTheme === 'dark') themePreference = savedTheme;
} catch {
  // The system theme is still available when browser storage is blocked.
}

function updateTheme() {
  const theme = themePreference ?? (systemTheme.matches ? 'dark' : 'light');
  const dark = theme === 'dark';
  const label = `Switch to ${dark ? 'light' : 'dark'} mode`;

  root.dataset.theme = theme;
  themeColor?.setAttribute('content', dark ? '#0a0a0a' : '#ffffff');

  for (const button of themeButtons) {
    button.setAttribute('aria-label', label);
    const text = button.querySelector('[data-theme-label]');
    if (text) text.textContent = label;

    for (const icon of button.querySelectorAll('[data-theme-icon]')) {
      icon.toggleAttribute('hidden', icon.dataset.themeIcon !== (dark ? 'sun' : 'moon'));
    }
    button.removeAttribute('hidden');
  }
}

for (const button of themeButtons) {
  button.addEventListener('click', () => {
    themePreference = root.dataset.theme === 'dark' ? 'light' : 'dark';
    try {
      localStorage.setItem(themeKey, themePreference);
    } catch {
      // The preference still applies for this page visit.
    }
    updateTheme();
  });
}

systemTheme.addEventListener('change', updateTheme);
updateTheme();

const header = document.querySelector('.site-header');
const nav = document.querySelector('.site-nav');
const menuToggle = document.querySelector('.menu-toggle');
const desktopNav = window.matchMedia('(min-width: 768px)');
const sectionLinks = [...nav.querySelectorAll('a[href^="#"]')]
  .map(link => ({link, section: document.getElementById(link.hash.slice(1))}))
  .filter(({section}) => section);
let activeLink = null;

function setMenuOpen(open) {
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
}

menuToggle.addEventListener('click', () => {
  setMenuOpen(menuToggle.getAttribute('aria-expanded') !== 'true');
});

header.addEventListener('click', event => {
  if (event.target.closest('a[href^="#"]')) setMenuOpen(false);
});

document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menuToggle.getAttribute('aria-expanded') === 'true') {
    setMenuOpen(false);
    menuToggle.focus();
  }
});

desktopNav.addEventListener('change', event => {
  if (event.matches) setMenuOpen(false);
});
menuToggle.removeAttribute('hidden');

function updateActiveNav() {
  header.classList.toggle('is-scrolled', window.scrollY > 20);
  const threshold = header.getBoundingClientRect().height + Math.min(window.innerHeight * 0.18, 120);
  let nextLink = null;
  let nearestTop = -Infinity;

  for (const {link, section} of sectionLinks) {
    const {top} = section.getBoundingClientRect();
    if (top <= threshold && top > nearestTop) {
      nextLink = link;
      nearestTop = top;
    }
  }
  if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) {
    nextLink = sectionLinks.at(-1)?.link ?? nextLink;
  }
  if (nextLink === activeLink) return;

  activeLink?.removeAttribute('aria-current');
  nextLink?.setAttribute('aria-current', 'location');
  activeLink = nextLink;
}

window.addEventListener('scroll', updateActiveNav, {passive: true});
window.addEventListener('resize', updateActiveNav);
window.addEventListener('hashchange', updateActiveNav);
window.addEventListener('load', updateActiveNav);
updateActiveNav();
