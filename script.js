/* Configure your real contact details and social links below before publishing. */
const SITE_CONFIG = {
  whatsappNumber: "", // International format, digits only. Example: 919876543210
  email: "",          // Example: hello@yourdomain.com
  linkedin: "",
  instagram: "",
  github: ""
};

const headerLinks = document.querySelectorAll('.main-nav a[data-nav]');
const page = document.body.dataset.page;
headerLinks.forEach(link => {
  if (link.dataset.nav === page) {
    link.classList.add('active');
    link.setAttribute('aria-current', 'page');
  }
});

const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

const menuToggle = document.getElementById('menu-toggle');
const mainNav = document.getElementById('main-nav');
if (menuToggle && mainNav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
  });
  mainNav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    mainNav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Open navigation');
  }));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && mainNav.classList.contains('open')) {
      mainNav.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.setAttribute('aria-label', 'Open navigation');
      menuToggle.focus();
    }
  });
}

// Contact links remain clearly labelled until genuine URLs are supplied.
document.querySelectorAll('[data-placeholder-link]').forEach(link => {
  const key = link.getAttribute('aria-label').split(' ')[0].toLowerCase();
  const url = SITE_CONFIG[key];
  if (url) {
    link.href = url;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
  } else {
    link.addEventListener('click', event => {
      event.preventDefault();
      const feedback = document.getElementById('form-feedback');
      if (feedback) feedback.textContent = `Add your ${key} profile URL in script.js to activate this link.`;
    });
  }
});

document.querySelectorAll('.config-email').forEach(node => {
  if (SITE_CONFIG.email) {
    node.textContent = SITE_CONFIG.email;
    node.innerHTML = '';
    const a = document.createElement('a');
    a.href = `mailto:${SITE_CONFIG.email}`;
    a.textContent = SITE_CONFIG.email;
    node.appendChild(a);
  }
});

// Pre-select a service when the contact page is reached from a service CTA.
const serviceSelect = document.getElementById('service-select');
if (serviceSelect) {
  const requestedService = new URLSearchParams(window.location.search).get('service');
  if (requestedService) {
    const match = [...serviceSelect.options].find(option => option.text.toLowerCase() === requestedService.toLowerCase());
    if (match) serviceSelect.value = match.value;
  }
}

// The static site does not pretend to have a backend. When configured, the form
// prepares a WhatsApp message and opens it for the user to send.
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', event => {
    event.preventDefault();
    const feedback = document.getElementById('form-feedback');
    if (!contactForm.reportValidity()) return;
    const data = new FormData(contactForm);
    const message = [
      'Project enquiry for Ahmed Raza',
      `Name: ${data.get('name')}`,
      `Email: ${data.get('email')}`,
      `Business: ${data.get('company') || 'Not provided'}`,
      `Service: ${data.get('service')}`,
      `Budget: ${data.get('budget')}`,
      `Project details: ${data.get('message')}`
    ].join('\n');
    if (SITE_CONFIG.whatsappNumber && /^\d{10,15}$/.test(SITE_CONFIG.whatsappNumber)) {
      const url = `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
      window.open(url, '_blank', 'noopener,noreferrer');
      feedback.textContent = 'Your enquiry is ready in WhatsApp. Review it there and press Send to complete the submission.';
    } else {
      feedback.textContent = 'The form is working, but WhatsApp is not configured yet. Add your number in SITE_CONFIG at the top of script.js. Your message has not been sent or stored.';
      const blob = new Blob([message], { type: 'text/plain' });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = 'ahmed-raza-project-enquiry.txt';
      link.textContent = 'Download your enquiry message';
      link.className = 'download-enquiry';
      feedback.append(' ');
      feedback.appendChild(link);
      setTimeout(() => URL.revokeObjectURL(link.href), 60000);
    }
  });
}

// Subtle reveal animation with a no-JS-friendly default.
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const revealItems = document.querySelectorAll('.service-card, .credential-row, .step, .timeline-item, .values-grid > div');
  revealItems.forEach(item => item.classList.add('reveal-ready'));
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealItems.forEach(item => observer.observe(item));
}
