// Filtro global. Los datos y las secciones permanecen editables en index.html.
const profileButtons = [...document.querySelectorAll('[data-profile]')];
const profilePanels = [...document.querySelectorAll('[data-profile-panel]')];
function selectProfile(profile) {
  const active = profilePanels.find(panel => panel.dataset.profilePanel === profile);
  if (!active) return;
  profilePanels.forEach(panel => {
    panel.hidden = panel !== active;
    panel.querySelectorAll('[data-section]').forEach(section => section.removeAttribute('id'));
  });
  active.querySelectorAll('[data-section]').forEach(section => section.id = section.dataset.section);
  profileButtons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.profile === profile)));
  const label = profileButtons.find(button => button.dataset.profile === profile).textContent.trim();
  document.querySelector('.filter-status').textContent = 'Mostrando perfil de ' + label;
  document.querySelectorAll('nav a').forEach(link => link.removeAttribute('aria-current'));
}
profileButtons.forEach(button => button.addEventListener('click', () => selectProfile(button.dataset.profile)));
const sections = document.querySelectorAll('main section[data-section], #inicio');
const links = document.querySelectorAll('nav a');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        links.forEach(link => {
          if (link.getAttribute('href') === '#' + entry.target.id) link.setAttribute('aria-current', 'location');
          else link.removeAttribute('aria-current');
        });
      }
    }
  }, { rootMargin: '-10% 0px -55% 0px', threshold: 0 });
  sections.forEach(section => observer.observe(section));
}

// Animate once on entry; content remains visible if JavaScript is unavailable.
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
if (!reducedMotion.matches && 'IntersectionObserver' in window && Element.prototype.animate) {
  const reveal = new IntersectionObserver(entries => {
    entries.forEach(({isIntersecting, target}) => {
      if (!isIntersecting) return;
      if (!reducedMotion.matches) target.animate(
        [{opacity: 0.55, transform: 'translateY(14px)'}, {opacity: 1, transform: 'translateY(0)'}],
        {duration: 500, easing: 'cubic-bezier(.2,.65,.3,1)'}
      );
      reveal.unobserve(target);
    });
  }, {threshold: 0.08});
  document.querySelectorAll('.section-heading, .project, .skills-grid article, .trajectory article, .contact-row').forEach(el => reveal.observe(el));
  reducedMotion.addEventListener('change', event => {
    if (event.matches) {reveal.disconnect(); document.getAnimations().forEach(animation => animation.cancel());}
  });
}

// Selector accesible de currículum; el diálogo nativo gestiona foco y Escape.
const cvDialog = document.querySelector('#cv-dialog');
document.querySelectorAll('[data-open-cv]').forEach(button => {
  button.addEventListener('click', () => cvDialog.showModal());
});
cvDialog.addEventListener('click', event => {
  if (event.target !== cvDialog) return;
  const box = cvDialog.getBoundingClientRect();
  if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) cvDialog.close();
});
// Añade aquí la URL pública cuando el informe se publique desde Power BI.
const powerBiDashboardUrl = '';
if (powerBiDashboardUrl.startsWith('https://')) {
  const link = document.createElement('a');
  link.className = 'button dashboard-link';
  link.href = powerBiDashboardUrl;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  link.textContent = 'Ver dashboard interactivo ↗';
  document.querySelector('[data-profile-panel="datos"] .project-links').append(link);
}
