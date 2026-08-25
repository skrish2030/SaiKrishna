const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(open));
    navToggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
      navToggle.setAttribute('aria-label', 'Open navigation');
    });
  });
}

const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

const revealItems = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealItems.forEach(item => observer.observe(item));
} else {
  revealItems.forEach(item => item.classList.add('is-visible'));
}


// Contact chooser: call or compose an email in Outlook.
const contactTriggers = document.querySelectorAll('[data-contact-trigger]');

if (contactTriggers.length) {
  const dialog = document.createElement('dialog');
  dialog.className = 'contact-dialog';
  dialog.setAttribute('aria-labelledby', 'contact-dialog-title');
  dialog.innerHTML = `
    <div class="contact-dialog-card">
      <button class="contact-dialog-close" type="button" aria-label="Close contact options">×</button>
      <span class="section-kicker">Get in touch</span>
      <h2 id="contact-dialog-title">Contact Sai Krishna</h2>
      <p>Choose the easiest way to connect.</p>
      <div class="contact-choice-grid">
        <a class="contact-choice" href="tel:+13026899898">
          <span class="contact-choice-icon" aria-hidden="true">☎</span>
          <span><strong>Call me</strong><small>(302) 689-9898</small></span>
        </a>
        <a class="contact-choice" href="https://outlook.live.com/mail/0/deeplink/compose?to=skrish2030%40gmail.com&subject=Opportunity%20for%20Sai%20Krishna" target="_blank" rel="noopener noreferrer">
          <span class="contact-choice-icon" aria-hidden="true">✉</span>
          <span><strong>Email me</strong><small>Open Outlook compose</small></span>
        </a>
      </div>
      <p class="contact-dialog-note">On a phone, “Call me” opens the dialer. Email opens Outlook with my address prefilled.</p>
    </div>`;
  document.body.appendChild(dialog);

  const closeButton = dialog.querySelector('.contact-dialog-close');
  contactTriggers.forEach(trigger => {
    trigger.addEventListener('click', (event) => {
      event.preventDefault();
      if (typeof dialog.showModal === 'function') dialog.showModal();
      else dialog.setAttribute('open', '');
    });
  });

  closeButton.addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', (event) => {
    if (event.target === dialog) dialog.close();
  });
  dialog.addEventListener('cancel', () => dialog.close());
}
