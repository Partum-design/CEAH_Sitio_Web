import './style.css';

document.documentElement.classList.add('js');

const page = document.body.dataset.page || 'inicio';
const links = [
  ['inicio', '/', 'Inicio'],
  ['nosotros', '/quienes-somos/', 'Quiénes somos'],
  ['soluciones', '/soluciones/', 'Soluciones'],
  ['ventajas', '/ventajas/', 'Ventajas'],
  ['contacto', '/contacto/', 'Contacto'],
];

const icons = {
  arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  'arrow-ur': '<path d="M7 17L17 7M8 7h9v9"/>',
  shield: '<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/><path d="M9 12l2 2 4-4"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  feather: '<path d="M20 4C11 4 6 9 6 18"/><path d="M6 18L15 9"/><path d="M4 20l2-2"/><path d="M10 14h6"/>',
  wrench: '<path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.6 2.6-2.4-.6-.6-2.4z"/>',
  grid: '<rect x="3" y="3" width="18" height="18"/><path d="M3 9h18M3 15h18M9 3v18M15 3v18"/>',
  beam: '<path d="M4 5h16M4 19h16M12 5v14"/>',
  stairs: '<path d="M3 20h4v-4h4v-4h4V8h4V4"/>',
  roof: '<path d="M2 11l10-7 10 7"/><path d="M5 9v11h14V9"/><path d="M9 20v-6h6v6"/>',
  factory: '<path d="M3 21V10l6 4V10l6 4V6l6 4v11z"/><path d="M7 17h2M12 17h2M17 17h1"/>',
  building: '<rect x="5" y="3" width="14" height="18"/><path d="M9 7h2M13 7h2M9 11h2M13 11h2M9 15h2M13 15h2"/>',
  bridge: '<path d="M2 18h20M4 18v-5M20 18v-5M8 18v-4M16 18v-4M12 18v-3"/><path d="M2 12c4-6 16-6 20 0"/>',
  chat: '<path d="M4 5h16v11H9l-5 4z"/><path d="M8 10h8"/>',
  search: '<circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/>',
  bolt: '<path d="M13 2L4 14h7l-1 8 9-12h-7z"/>',
  truck: '<path d="M2 6h12v10H2zM14 10h4l3 3v3h-7"/><circle cx="6" cy="18" r="2"/><circle cx="17" cy="18" r="2"/>',
  mail: '<rect x="3" y="5" width="18" height="14"/><path d="M3 7l9 6 9-6"/>',
  pin: '<path d="M12 21s-7-6.2-7-12a7 7 0 0 1 14 0c0 5.8-7 12-7 12z"/><circle cx="12" cy="9" r="2.5"/>',
  phone: '<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"/>',
  target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',
  eye: '<path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
};
const svg = (name) => `<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">${icons[name] || ''}</svg>`;

document.querySelector('#site-header').innerHTML = `
  <header class="site-header">
    <div class="topbar">
      <div class="container">
        <span>Soluciones estructurales en FRP y PVC para ambientes exigentes</span>
        <div class="topbar-meta">
          <span>${svg('pin')}Hidalgo · Jalisco</span>
          <a href="mailto:ventas@ceahestrcutrales.com"><span>${svg('mail')}ventas@ceahestrcutrales.com</span></a>
        </div>
      </div>
    </div>
    <div class="nav-wrap">
      <nav class="nav container" aria-label="Navegación principal">
        <a class="brand" href="/" aria-label="CEAH, inicio">
          <img src="/logo-transparent.webp" alt="CEAH">
        </a>
        <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="primary-navigation" aria-label="Abrir menú">
          <span></span><span></span>
        </button>
        <div class="nav-links" id="primary-navigation">
          ${links.map(([id, url, label]) => `<a href="${url}" class="${page === id ? 'active' : ''}"${page === id ? ' aria-current="page"' : ''}>${label}</a>`).join('')}
          <a class="btn" href="/contacto/">Cotizar ${svg('arrow')}</a>
        </div>
      </nav>
    </div>
  </header>`;

document.querySelector('#site-footer').innerHTML = `
  <footer class="footer">
    <div class="footer-stripe"></div>
    ${page === 'contacto' || document.querySelector('.cta-block') ? '' : `
    <div class="footer-cta">
      <div class="container">
        <h2>¿Listo para una solución <span class="hl">que dure?</span></h2>
        <a class="btn" href="/contacto/">Solicitar cotización ${svg('arrow')}</a>
      </div>
    </div>`}
    <div class="container footer-grid">
      <div class="footer-brand">
        <img src="/logo-transparent.webp" alt="CEAH">
        <p>Compuestos Estructurales Autopinturas de Hidalgo. Soluciones en materiales compuestos y sistemas especializados para la industria y la construcción.</p>
      </div>
      <div>
        <h4>Explorar</h4>
        ${links.slice(1).map(([, url, label]) => `<a href="${url}">${label}</a>`).join('')}
      </div>
      <div>
        <h4>Contacto</h4>
        <a href="mailto:ventas@ceahestrcutrales.com">ventas@ceahestrcutrales.com</a>
        <a href="mailto:ingeneiria1@ceahestructurales.com">ingeneiria1@ceahestructurales.com</a>
        <p>Tula de Allende, Hidalgo (matriz)</p>
        <p>La Venta del Astillero, Jalisco</p>
      </div>
    </div>
    <div class="container footer-bottom">
      <span>© ${new Date().getFullYear()} CEAH · Todos los derechos reservados</span>
      <a href="https://partumdesign.com.mx" target="_blank" rel="noopener">Desarrollado por Partum Design</a>
    </div>
  </footer>`;

document.querySelectorAll('[data-icon]').forEach((el) => { el.outerHTML = svg(el.dataset.icon); });

const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');
const setMenu = (open) => {
  menuToggle?.setAttribute('aria-expanded', String(open));
  menuToggle?.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
  nav?.classList.toggle('open', open);
  document.body.classList.toggle('menu-open', open);
};
menuToggle?.addEventListener('click', () => setMenu(menuToggle.getAttribute('aria-expanded') !== 'true'));
nav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => setMenu(false)));
document.addEventListener('keydown', (event) => { if (event.key === 'Escape') setMenu(false); });

// Stagger siblings that reveal together
document.querySelectorAll('[data-stagger]').forEach((group) => {
  group.querySelectorAll(':scope > .reveal').forEach((el, i) => el.style.setProperty('--d', `${i * 0.08}s`));
});

const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('visible');
    observer.unobserve(entry.target);
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));

const hidePreloader = () => document.querySelector('.preloader')?.classList.add('done');
window.addEventListener('load', () => window.setTimeout(hidePreloader, 250));
window.setTimeout(hidePreloader, 2500);

const header = document.querySelector('.site-header');
const onScroll = () => header?.classList.toggle('scrolled', window.scrollY > 30);
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

const form = document.querySelector('#contact-form');
form?.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const subject = encodeURIComponent(`Solicitud web CEAH · ${data.get('empresa') || data.get('nombre')}`);
  const body = encodeURIComponent([
    `Nombre: ${data.get('nombre')}`,
    `Empresa: ${data.get('empresa') || 'No indicada'}`,
    `Correo: ${data.get('correo')}`,
    `Solución: ${data.get('solucion')}`,
    '',
    `Mensaje: ${data.get('mensaje')}`,
  ].join('\n'));
  window.location.href = `mailto:ventas@ceahestrcutrales.com?subject=${subject}&body=${body}`;
});
