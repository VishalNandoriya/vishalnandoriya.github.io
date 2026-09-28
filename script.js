const projects = [
  {name:'TruKKer Partner', category:'Logistics / Partner operations', bg:'#edf0dd', color:'#38451b', summary:'A logistics partner application supporting customer-facing mobile workflows.', tags:['iOS','Feature delivery','Production readiness'], detail:'At TruKKer, I design, develop and release iOS features, translate product and design requirements into maintainable implementations, and support debugging, code quality and production stability within an 18-member team.', ios:'https://apps.apple.com/in/app/trukker-partner/id1624013412'},
  {name:'Salesmate CRM', category:'Enterprise / Sales & customer relationships', bg:'#e5eafa', color:'#2446a4', summary:'A mobile CRM bringing sales pipelines, communication and team activities into one application.', tags:['Flutter','Swift','Twilio VoIP','Sockets'], detail:'Product capabilities include sales pipelines, email automation, in-app calling, activity tracking, messaging, a shared inbox and geolocation. Contributed within a 55-member product team. Portfolio technologies include Dart, Flutter, Swift, Kotlin, Twilio, sockets and maps.', ios:'https://apps.apple.com/us/app/salesmate-sales-crm/id1114709439', android:'https://play.google.com/store/apps/details?id=com.rapidops.salesmate'},
  {name:'Harris Teeter', category:'Retail / Grocery & shopping', bg:'#f2e5e7', color:'#842d43', summary:'A consumer retail application connecting online shopping with in-store services.', tags:['Swift','Objective-C','SQLite','Payments'], detail:'Product capabilities include pickup, delivery and shipping, digital coupons, shopping lists, pharmacy refills and transfers, and fuel points. Contributed within a 15-member team. Technologies include storyboards, XIBs, Auto Layout, Core Animation, payment integration and Core Location.', ios:'https://apps.apple.com/us/app/harris-teeter/id422306980'},
  {name:'Kaasak', category:'Commerce / Food & beverage delivery', bg:'#e1eeeb', color:'#25665b', summary:'An iOS and Android commerce experience for food and beverage delivery in Amman, Jordan.', tags:['Flutter','Dart','Payments','Maps'], detail:'Product capabilities include authentication, product search, cart and checkout, order history and reordering, notifications, multiple languages and vendor management. Portfolio technologies include Dart, Flutter, Swift, Kotlin, online payments, location and networking.', ios:'https://apps.apple.com/in/app/kaasak-alcohol-delivery/id1546988389', android:'https://play.google.com/store/apps/details?id=com.kaasak.jo'},
  {name:'QMS – Borregaard', category:'Quality management', summary:'HSEQ reporting, QR-based checklists, timesheets and tasks, integrated with QualiCost Management System.', detail:'Supports check-in and check-out, photo attachments and configurable organizational workflows. Delivered within an 8-member team. Technologies: Flutter, Dart, Swift, Kotlin, QR codes and networking.', ios:'https://apps.apple.com/in/app/qualicost-reports/id953002468', android:'https://play.google.com/store/apps/details?id=com.borregaard.qualicost'},
  {name:'POD Driver', category:'Cook & Boardman / Proof of delivery', summary:'Delivery workflows with route notifications, electronic signatures and delivery capture.', detail:'One of two Cook & Boardman proof-of-delivery applications developed within an 8-member team. Technologies: Swift, Objective-C, UIKit, storyboards, XIBs, Realm, Core Animation, Core Location and barcode scanning.', ios:'https://apps.apple.com/us/app/cook-boardman-pod-driver/id1576538364'},
  {name:'POD QA', category:'Cook & Boardman / Delivery verification', summary:'Package scanning, item verification and instant delivery notifications for operational teams.', detail:'Companion proof-of-delivery workflow application. Technologies: Swift, Objective-C, storyboards, XIBs, Auto Layout, Core Animation, Core Location and barcode scanning.', ios:'https://apps.apple.com/us/app/cook-boardman-pod-qa/id1584109216'},
  {name:'meetIn', category:'Social / Location & connections', summary:'An application to connect with friends and business contacts while traveling and arrange in-person meetups.', detail:'Features include check-ins, chat, augmented reality, trips and nearby friends. Delivered within a 7-member team. Technologies: Swift, Objective-C, Core Animation, Core Location, maps and social integrations.', ios:'https://apps.apple.com/in/app/meetin/id590629564'},
  {name:'Taxi app', category:'Mobility / Ride booking', summary:'A passenger experience for requesting rides, selecting destinations and connecting with nearby drivers.', detail:'Portfolio features include ride convenience, rewards and offers. Technologies: Swift, Objective-C, storyboards, XIBs, Auto Layout, Core Animation, Core Location, maps and social integrations.', ios:'https://apps.apple.com/in/app/taxisti/id1453533306'}
];
const storeLinks = p => `<div class="project-links"><a href="${p.ios}" target="_blank" rel="noopener" aria-label="${p.name} on the App Store">App Store ↗</a>${p.android ? `<a href="${p.android}" target="_blank" rel="noopener" aria-label="${p.name} on Google Play">Google Play ↗</a>` : ''}</div>`;
document.querySelector('#featured-projects').innerHTML = projects.slice(0,4).map((p,index)=>`<article class="project"><div class="project-banner" style="--project-bg:${p.bg};--project-color:${p.color}"><div class="project-banner-top"><span>${p.category}</span><span>0${index + 1} / 04</span></div><h3>${p.name}</h3><span class="project-banner-number" aria-hidden="true">0${index + 1}</span></div><div class="project-body"><p>${p.summary}</p><div class="tags">${p.tags.map(t=>`<span>${t}</span>`).join('')}</div><details><summary>Project details</summary><p>${p.detail}</p></details>${storeLinks(p)}</div></article>`).join('');
document.querySelector('#other-projects').innerHTML = projects.slice(4).map(p=>`<article class="other-project"><div><h3>${p.name}</h3><small>${p.category}</small></div><div><p>${p.summary}</p><details><summary>Project details</summary><p>${p.detail}</p></details></div>${storeLinks(p)}</article>`).join('');
const roles = [
  ['Feb 2025 — Present','Software Development Engineer III','TruKKer Technologies Pvt. Ltd.',['Design, develop and release customer-facing features for the TruKKer Partner iOS application.','Translate product and design requirements into maintainable implementations and support features through production release.','Contribute to debugging, release readiness, code quality and production stability for logistics workflows.']],
  ['Jul 2020 — Jul 2024','Senior Software Engineer','RapidOps Solutions Pvt. Ltd.',['Developed and maintained enterprise applications across CRM, retail, field service and quality management.','Applied Clean Architecture and MVVM; integrated Twilio voice calling, Stripe payments and secure REST APIs with certificate-based SSL authentication.','Coordinated alpha, beta and production releases, cross-functional Jira delivery, and architecture and integration documentation.']],
  ['Jun 2019 — Jul 2020','Senior iOS Developer','Techniexe InfoLabs LLP',['Managed Git branching, tagging, versioning and third-party dependencies across iOS projects.','Integrated analytics and Crashlytics, supported command-line build distribution, and mentored developers in implementation, debugging and architecture.']],
  ['Jan 2016 — Jun 2019','Senior iOS Developer','Verve Systems Pvt. Ltd.',['Translated client requirements into feasible technical solutions and integrated RESTful services and JSON APIs.','Led technical planning, task allocation, estimation, risk identification and team coordination.']],
  ['May 2015 — Dec 2015','Junior iOS Developer','Connection Phase',['Integrated libraries and APIs, resolved application defects and optimized iOS feature performance.']],
  ['Apr 2014 — May 2015','Junior iOS Developer','Quantum Technolabs Pvt. Ltd.',['Developed and maintained iOS features using UIKit, Core Data, Foundation, Core Graphics and Core Animation.']]
];
document.querySelector('#timeline').innerHTML = roles.map(([date,title,company,bullets])=>`<article class="timeline-row"><div class="timeline-date">${date}<span>Ahmedabad, Gujarat</span></div><div><h3>${title}</h3><p class="company">${company}</p><ul>${bullets.map(b=>`<li>${b}</li>`).join('')}</ul></div></article>`).join('');
document.querySelector('#year').textContent = new Date().getFullYear();

const header = document.querySelector('header');
const sectionLinks = [...header.querySelectorAll('a[href^="#"]')]
  .map(link => ({link, section: document.getElementById(link.hash.slice(1))}))
  .filter(({section}) => section);
let activeLink = null;

function updateActiveNav() {
  const threshold = header.getBoundingClientRect().height + Math.min(window.innerHeight * 0.18, 120);
  let nextLink = null;

  for (const {link, section} of sectionLinks) {
    if (section.getBoundingClientRect().top <= threshold) nextLink = link;
  }
  if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) {
    nextLink = sectionLinks.at(-1)?.link ?? nextLink;
  }
  if (nextLink === activeLink) return;

  for (const {link} of sectionLinks) {
    if (link === nextLink) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  }
  activeLink = nextLink;
}

window.addEventListener('scroll', updateActiveNav, {passive: true});
window.addEventListener('resize', updateActiveNav);
window.addEventListener('hashchange', updateActiveNav);
window.addEventListener('load', updateActiveNav);
updateActiveNav();
