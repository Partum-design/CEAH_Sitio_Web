import '@fontsource/anton/latin-400.css';
import '@fontsource/oswald/latin-400.css';
import '@fontsource/oswald/latin-500.css';
import '@fontsource/oswald/latin-600.css';
import '@fontsource/poppins/latin-300.css';
import '@fontsource/poppins/latin-300-italic.css';
import '@fontsource/poppins/latin-400.css';
import '@fontsource/poppins/latin-400-italic.css';
import '@fontsource/poppins/latin-500.css';
import './style.css';
import { families, familyById, industries, products, searchProducts } from './products.js';

document.documentElement.classList.add('js');

const page = document.body.dataset.page || 'inicio';
const links = [
  ['inicio', '/', 'Inicio'],
  ['nosotros', '/quienes-somos/', 'Quiénes somos'],
  ['productos', '/productos/', 'Productos'],
  ['industrias', '/industrias/', 'Industrias'],
  ['soluciones', '/soluciones/', 'Soluciones'],
  ['ventajas', '/ventajas/', 'Ventajas'],
  ['contacto', '/contacto/', 'Contacto'],
];

const MAIL_VENTAS = 'ventas@ceahesteuctural.com.mx';
const MAIL_DIRECCION = 'direccion@ceahestructurales.com';
const WHATSAPP = '525633934633';
const WHATSAPP_LABEL = '56 3393 4633';
const mailHref = `mailto:${MAIL_VENTAS}?cc=${MAIL_DIRECCION}&subject=${encodeURIComponent('Solicitud de información CEAH')}`;
const waHref = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent('Hola CEAH, me interesa recibir información sobre sus productos.')}`;
const sedes = '<p><b>Oficinas</b> · Tula de Allende, Hidalgo</p><p><b>Planta</b> · La Venta del Astillero, Jalisco</p>';

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
  'arrow-up': '<path d="M12 19V5M6 11l6-6 6 6"/>',
  'arrow-down': '<path d="M12 5v14M6 13l6 6 6-6"/>',
  flame: '<path d="M12 22c4 0 7-3 7-7 0-4-3-6-4-10-2 2-3 4-3 6-1-1-2-2-2-4-3 2-5 5-5 8 0 4 3 7 7 7z"/>',
  flask: '<path d="M9 3h6M10 3v6L4 19a1.5 1.5 0 0 0 1.3 2h13.4a1.5 1.5 0 0 0 1.3-2L14 9V3"/><path d="M7 15h10"/>',
  food: '<path d="M7 3v8M5 3v5a2 2 0 0 0 4 0V3M7 11v10M17 3c-2 0-3 3-3 7h3v11"/>',
  drop: '<path d="M12 3s-6 7-6 11a6 6 0 0 0 12 0c0-4-6-11-6-11z"/>',
  mine: '<path d="M4 20L14 10M12 4c3 0 6 1 8 3-2 0-4 1-5 2l-2-2c1-1 1-2-1-3z"/><path d="M3 21h18"/>',
  wave: '<path d="M2 12c2-2 4-2 6 0s4 2 6 0 4-2 6 0M2 17c2-2 4-2 6 0s4 2 6 0 4-2 6 0M12 3v6M9 6h6"/>',
  leaf: '<path d="M5 19C5 10 10 5 20 4c-1 10-6 15-15 15z"/><path d="M5 19l7-7"/>',
  download: '<path d="M12 3v12M7 10l5 5 5-5M4 20h16"/>',
  close: '<path d="M6 6l12 12M18 6L6 18"/>',
  eye: '<path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
};
const whatsappSvg = '<svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor"><path d="M17.5 14.4c-.3-.1-1.8-.9-2-1-.3-.1-.5-.1-.7.1l-.9 1.2c-.2.2-.3.2-.6.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.5-.5.3-.5c.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.2-.3-.3-.6-.4zM12 21.8c-1.8 0-3.5-.5-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4A9.8 9.8 0 1 1 12 21.8zm8.4-18.2A11.8 11.8 0 0 0 1.8 17.9L.1 24l6.3-1.7a11.8 11.8 0 0 0 5.6 1.4c6.5 0 11.8-5.3 11.8-11.8 0-3.2-1.2-6.1-3.4-8.3z"/></svg>';
const svg = (name) => `<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">${icons[name] || ''}</svg>`;

document.querySelector('#site-header').innerHTML = `
  <header class="site-header">
    <nav class="nav container" aria-label="Navegación principal">
      <a class="brand" href="/" aria-label="CEAH, inicio">
        <img src="/logo-light.webp" alt="CEAH">
      </a>
      <button class="search-toggle" type="button" aria-label="Buscar productos por clave" aria-controls="search-panel" aria-expanded="false">${svg('search')}<span>Buscar</span></button>
      <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="primary-navigation" aria-label="Abrir menú">
        Menú <span class="bars"><span></span><span></span></span>
      </button>
      <div class="nav-links" id="primary-navigation">
        <div class="menu-main">
          ${links.map(([id, url, label]) => `<a href="${url}" class="${page === id ? 'active' : ''}"${page === id ? ' aria-current="page"' : ''}>${label}</a>`).join('')}
        </div>
        <div class="menu-side">
          <div><h4>Escríbenos</h4><a href="mailto:${MAIL_VENTAS}">${MAIL_VENTAS}</a><a href="mailto:${MAIL_DIRECCION}">${MAIL_DIRECCION}</a><a href="${waHref}" target="_blank" rel="noopener">WhatsApp ${WHATSAPP_LABEL}</a></div>
          <div><h4>Ubicaciones</h4>${sedes}</div>
          <a class="btn dark" href="/contacto/">Solicitar cotización ${svg('arrow')}</a>
        </div>
      </div>
    </nav>
  </header>
  <div class="search-panel" id="search-panel" role="dialog" aria-modal="true" aria-label="Buscador de productos" hidden>
    <div class="container">
      <form class="search-form" action="/productos/" role="search">
        <label for="search-input" class="kicker">Buscador de productos</label>
        <div class="search-field">${svg('search')}<input id="search-input" name="q" type="search" autocomplete="off" placeholder="Clave o producto: MG-10, paso de gato, lámina 3 mm…"><button type="button" class="search-close" aria-label="Cerrar buscador">${svg('close')}</button></div>
      </form>
      <ul class="search-results" aria-live="polite"></ul>
    </div>
  </div>`;

document.querySelector('#site-footer').innerHTML = `
  <footer class="footer">
    <div class="container footer-grid">
      <div class="footer-brand">
        <img src="/logo-light.webp" alt="CEAH">
        <p>Soluciones en materiales compuestos y sistemas especializados para la industria y la construcción.</p>
      </div>
      <div>
        <h4>Explorar</h4>
        ${links.slice(1).map(([, url, label]) => `<a href="${url}">${label}</a>`).join('')}
      </div>
      <div>
        <h4>Contacto</h4>
        <a href="mailto:${MAIL_VENTAS}">${MAIL_VENTAS}</a>
        <a href="mailto:${MAIL_DIRECCION}">${MAIL_DIRECCION}</a>
        <a href="${waHref}" target="_blank" rel="noopener">WhatsApp ${WHATSAPP_LABEL}</a>
        ${sedes}
      </div>
    </div>
    <div class="container footer-bottom">
      <span>© ${new Date().getFullYear()} CEAH · Todos los derechos reservados</span>
      <a href="https://partumdesign.com.mx" target="_blank" rel="noopener">Desarrollado por Partum Design</a>
    </div>
  </footer>
  <div class="float-actions">
    <a class="float-btn mail" href="${mailHref}" aria-label="Enviar correo a CEAH">${svg('mail')}</a>
    <a class="float-btn wa" href="${waHref}" target="_blank" rel="noopener" aria-label="Escribir por WhatsApp">${whatsappSvg}</a>
  </div>
  <a class="to-top" href="#" aria-label="Volver arriba">${svg('arrow-up')}</a>`;

const escapeHtml = (value) => String(value).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

// ---------- Páginas dinámicas: industrias y productos ----------
document.querySelectorAll('[data-industries]').forEach((grid) => {
  const list = grid.dataset.industries === 'short' ? industries.slice(0, 4) : industries;
  grid.innerHTML = list.map((ind, i) => `
    <article class="industry-card reveal"><span class="icon-sq"><i data-icon="${ind.icon}"></i></span><span class="n">${String(i + 1).padStart(2, '0')}</span>
      <h3>${ind.name}</h3><p>${ind.text}</p><small>${ind.items}</small></article>`).join('');
});

const catalog = document.querySelector('#catalogo');
if (catalog) {
  catalog.innerHTML = families.map((f, i) => {
    const rows = products.filter((p) => p.family === f.id);
    return `
    <section class="family ${i % 2 ? 'alt' : ''}" id="${f.id}">
      <div class="container family-grid">
        <div class="family-media reveal"><img src="${f.image}" alt="${f.name}" loading="lazy"><span class="family-count">${rows.length ? `${rows.length} clave${rows.length > 1 ? 's' : ''}` : 'Catálogo'}</span></div>
        <div class="family-info reveal">
          <p class="kicker">${String(i + 1).padStart(2, '0')} · ${f.tag}</p>
          <h2>${f.name}</h2>
          <p class="lead">${f.summary}</p>
          <dl class="spec-dl">${f.specs.map(([k, v]) => `<div><dt>${k}</dt><dd>${v}</dd></div>`).join('')}<div><dt>Aplicaciones</dt><dd>${f.apps}</dd></div></dl>
          <div class="actions">${f.pdf ? `<a class="btn" href="${f.pdf}" target="_blank" rel="noopener">Ficha técnica ${svg('download')}</a>` : ''}<a class="btn line" href="/contacto/?producto=${encodeURIComponent(f.name)}">Cotizar ${svg('arrow')}</a></div>
        </div>
      </div>
      ${rows.length ? `<div class="container"><div class="table-wrap reveal"><table class="code-table">
        <thead><tr><th>Clave</th><th>Producto</th>${f.columns.map((c) => `<th>${c}</th>`).join('')}<th><span class="sr-only">Cotizar</span></th></tr></thead>
        <tbody>${rows.map((p) => `<tr id="${p.code}"><th scope="row">${p.code}</th><td>${p.name}</td>${p.data.map((d) => `<td>${d}</td>`).join('')}<td><a class="row-cta" href="/contacto/?producto=${encodeURIComponent(`${p.code} · ${p.name}`)}">Cotizar ${svg('arrow')}</a></td></tr>`).join('')}</tbody>
      </table></div></div>` : ''}
    </section>`;
  }).join('');

  // Buscador en línea de la página de productos
  const input = document.querySelector('#catalog-search');
  const body = document.querySelector('#catalog-results');
  const chips = document.querySelectorAll('[data-q]');
  const render = (query) => {
    const found = searchProducts(query);
    body.innerHTML = found.length
      ? found.map((p) => `<a class="result-card" href="#${p.code}" data-code="${p.code}"><b>${p.code}</b><span>${p.name}</span><small>${familyById[p.family].tag}</small></a>`).join('')
      : `<p class="empty">No encontramos “${escapeHtml(query)}”. Prueba con MG, PG, CW o LTP, o <a href="/contacto/">pregúntanos</a>.</p>`;
  };
  const params = new URLSearchParams(window.location.search);
  input.value = params.get('q') || '';
  render(input.value);
  input.addEventListener('input', () => render(input.value));
  chips.forEach((chip) => chip.addEventListener('click', () => { input.value = chip.dataset.q; render(input.value); input.focus(); }));
}

const highlightRow = (code) => {
  const row = code && document.getElementById(code);
  if (!row || row.tagName !== 'TR') return;
  row.classList.remove('hit');
  void row.offsetWidth;
  row.classList.add('hit');
  row.scrollIntoView({ behavior: 'smooth', block: 'center' });
};
window.addEventListener('hashchange', () => highlightRow(decodeURIComponent(window.location.hash.slice(1))));
if (window.location.hash) window.setTimeout(() => highlightRow(decodeURIComponent(window.location.hash.slice(1))), 400);

document.querySelectorAll('[data-icon]').forEach((el) => { el.outerHTML = svg(el.dataset.icon); });

// ---------- Buscador del encabezado ----------
const searchToggle = document.querySelector('.search-toggle');
const searchPanel = document.querySelector('#search-panel');
const searchInput = document.querySelector('#search-input');
const searchResults = document.querySelector('.search-results');
const renderSearch = () => {
  const query = searchInput.value;
  const found = searchProducts(query);
  searchResults.innerHTML = found.length
    ? found.map((p) => `<li><a href="/productos/#${p.code}"><b>${p.code}</b><span>${p.name}</span>${svg('arrow')}</a></li>`).join('')
    : `<li class="empty">Sin resultados para “${escapeHtml(query)}”. <a href="/contacto/">Pregúntanos</a>.</li>`;
};
const setSearch = (open) => {
  searchPanel.hidden = !open;
  searchToggle.setAttribute('aria-expanded', String(open));
  document.body.classList.toggle('search-open', open);
  if (open) { renderSearch(); searchInput.focus(); }
};
searchToggle?.addEventListener('click', () => setSearch(searchPanel.hidden));
searchPanel?.querySelector('.search-close').addEventListener('click', () => setSearch(false));
searchPanel?.addEventListener('click', (event) => { if (event.target === searchPanel) setSearch(false); });
searchInput?.addEventListener('input', renderSearch);
searchResults?.addEventListener('click', (event) => { if (event.target.closest('a')) setSearch(false); });
searchPanel?.querySelector('form').addEventListener('submit', (event) => {
  const first = searchProducts(searchInput.value)[0];
  if (!first) return;
  event.preventDefault();
  setSearch(false);
  window.location.href = `/productos/#${first.code}`;
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && !searchPanel.hidden) setSearch(false);
  if (event.key === '/' && searchPanel.hidden && !/input|textarea|select/i.test(document.activeElement.tagName)) { event.preventDefault(); setSearch(true); }
});

// Preselecciona el producto en el formulario al llegar desde "Cotizar"
const preset = new URLSearchParams(window.location.search).get('producto');
const interest = document.querySelector('#contact-form select[name="solucion"]');
if (preset && interest) {
  const wanted = preset.toLowerCase();
  const match = [...interest.options].find((o) => wanted.includes(o.value.toLowerCase()));
  if (match) interest.value = match.value;
  const msg = document.querySelector('#contact-form textarea[name="mensaje"]');
  if (msg && !msg.value) msg.value = `Me interesa cotizar: ${preset}\n`;
}

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
const toTop = document.querySelector('.to-top');
const onScroll = () => {
  header?.classList.toggle('scrolled', window.scrollY > 30);
  toTop?.classList.toggle('show', window.scrollY > 700);
};
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

const form = document.querySelector('#contact-form');
form?.addEventListener('submit', async (event) => {
  event.preventDefault();
  const note = form.querySelector('.form-note');
  const button = form.querySelector('button[type="submit"]');
  const data = Object.fromEntries(new FormData(form));
  button.disabled = true;
  note.textContent = 'Enviando solicitud…';
  try {
    const response = await fetch('/api/contacto', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    const result = await response.json().catch(() => ({}));
    if (!response.ok || !result.ok) throw new Error(result.error);
    form.reset();
    note.textContent = '¡Gracias! Recibimos tu solicitud y te responderemos pronto.';
  } catch (error) {
    note.textContent = error.message || `No pudimos enviar tu solicitud. Escríbenos a ${MAIL_VENTAS}.`;
  } finally {
    button.disabled = false;
  }
});
