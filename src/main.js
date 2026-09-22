import './style.css';

const page = document.body.dataset.page || 'inicio';
const links = [
  ['inicio', '/', 'Inicio'],
  ['nosotros', '/quienes-somos/', 'Quiénes somos'],
  ['soluciones', '/soluciones/', 'Soluciones'],
  ['ventajas', '/ventajas/', 'Ventajas'],
  ['contacto', '/contacto/', 'Contacto'],
];

document.querySelector('#site-header').innerHTML = `
  <header class="site-header">
    <div class="topbar">
      <span>Soluciones estructurales para ambientes exigentes</span>
      <span>Hidalgo · Jalisco</span>
    </div>
    <nav class="nav container" aria-label="Navegación principal">
      <a class="brand" href="/" aria-label="CEAH, inicio">
        <img src="/logo-transparent.png" alt="CEAH">
      </a>
      <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="primary-navigation" aria-label="Abrir menú">
        <span></span><span></span>
      </button>
      <div class="nav-links" id="primary-navigation">
        ${links.map(([id, url, label]) => `<a href="${url}" class="${page === id ? 'active' : ''}">${label}</a>`).join('')}
        <a class="nav-cta" href="/contacto/">Solicitar cotización</a>
      </div>
    </nav>
  </header>`;

document.querySelector('#site-footer').innerHTML = `
  <footer class="footer">
    <div class="container footer-grid">
      <div class="footer-brand">
        <img src="/logo-transparent.png" alt="CEAH">
        <p>Compuestos Estructurales Autopinturas de Hidalgo. Soluciones en materiales compuestos y sistemas especializados.</p>
      </div>
      <div>
        <b>Explorar</b>
        ${links.slice(1).map(([, url, label]) => `<a href="${url}">${label}</a>`).join('')}
      </div>
      <div>
        <b>Contacto</b>
        <a href="mailto:ventas@ceahestrcutrales.com">ventas@ceahestrcutrales.com</a>
        <a href="mailto:ingeneiria1@ceahestructurales.com">ingeneiria1@ceahestructurales.com</a>
        <a href="/contacto/">Tula de Allende, Hidalgo</a>
        <a href="/contacto/">La Venta del Astillero, Jalisco</a>
      </div>
    </div>
    <div class="container footer-bottom">
      <span>© ${new Date().getFullYear()} CEAH</span>
      <a href="https://partumdesign.com.mx" target="_blank" rel="noopener">Desarrollado por Partum Design</a>
    </div>
  </footer>`;

const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');
const closeMenu = () => {
  menuToggle?.setAttribute('aria-expanded', 'false');
  nav?.classList.remove('open');
  document.body.classList.remove('menu-open');
};
menuToggle?.addEventListener('click', () => {
  const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!isOpen));
  nav?.classList.toggle('open', !isOpen);
  document.body.classList.toggle('menu-open', !isOpen);
});
nav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));

const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('visible');
    observer.unobserve(entry.target);
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));

window.addEventListener('load', () => {
  window.setTimeout(() => document.querySelector('.preloader')?.classList.add('done'), 300);
});

const header = document.querySelector('.site-header');
window.addEventListener('scroll', () => header?.classList.toggle('scrolled', window.scrollY > 30), { passive: true });

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
