// ⚙️ Número de WhatsApp: 52 + 10 dígitos, sin espacios ni signos
const WHATSAPP = '525562094886';

const waLink = (msg) => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;

// ---------- Links directos a WhatsApp (cualquier elemento con data-wa) ----------
document.querySelectorAll('[data-wa]').forEach((el) => {
  el.href = waLink(el.dataset.wa);
  el.target = '_blank';
  el.rel = 'noopener';
});

// ---------- Navbar con fondo al hacer scroll ----------
const navbar = document.getElementById('navbar');
const onScroll = () => navbar.classList.toggle('scrolled', window.scrollY > 20);
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });

// ---------- Menú móvil ----------
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const menuIcon = document.getElementById('menuIcon');
const iconOpen = '<path d="M4 7h16M4 12h16M4 17h16"/>';
const iconClose = '<path d="M6 6l12 12M18 6 6 18"/>';

const setMenu = (open) => {
  mobileMenu.classList.toggle('hidden', !open);
  menuBtn.setAttribute('aria-expanded', String(open));
  menuBtn.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
  menuIcon.innerHTML = open ? iconClose : iconOpen;
  if (open) navbar.classList.add('scrolled'); else onScroll();
};
menuBtn.addEventListener('click', () => setMenu(mobileMenu.classList.contains('hidden')));
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setMenu(false); });

// ---------- Scroll suave (compensa la altura del navbar fijo) ----------
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (e) => {
    const id = link.getAttribute('href');
    if (id === '#' || link.hasAttribute('data-wa')) return;
    const target = document.querySelector(id);
    if (!target) return;
    e.preventDefault();
    setMenu(false);

    // Botones "Cotizar" de cada servicio: preseleccionan la opción del formulario
    if (link.dataset.service) document.getElementById('servicio').value = link.dataset.service;

    const top = target.getBoundingClientRect().top + window.scrollY - navbar.offsetHeight + 1;
    window.scrollTo({ top, behavior: reduceMotion ? 'auto' : 'smooth' });
    history.replaceState(null, '', id);
  });
});

// ---------- Animaciones al aparecer en pantalla ----------
const io = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) { e.target.classList.add('is-visible'); io.unobserve(e.target); }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
document.querySelectorAll('.reveal').forEach((el) => io.observe(el));

// ---------- Formulario de cotización → WhatsApp ----------
document.getElementById('quoteForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const f = e.target;
  const nombre = f.nombre.value.trim();
  const servicio = f.servicio.value;
  const presupuesto = f.presupuesto.value;
  const tel = f.whatsapp.value.trim();
  const err = document.getElementById('formError');

  if (!nombre || !servicio || !presupuesto || !tel) {
    err.classList.remove('hidden');
    return;
  }
  err.classList.add('hidden');

  const msg = `Hola Arturo, vi tu página DevsArt y quiero cotizar: ${servicio}.\n\n` +
              `• Nombre: ${nombre}\n` +
              `• Presupuesto: ${presupuesto}\n` +
              `• Mi WhatsApp: ${tel}`;
  window.open(waLink(msg), '_blank');
});
