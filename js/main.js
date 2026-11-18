/* =========================================================================
   ⚙️ CONFIGURACIÓN — edita aquí tus datos de contacto.
   Los enlaces vacíos ('') se ocultan automáticamente: no hay links rotos.
   ========================================================================= */
const CONFIG = {
  whatsapp: '525562094886',                     // 52 + 10 dígitos, sin espacios
  email: 'arturonunc_@outlook.com',
  github: 'https://github.com/ARTNUCR',
  linkedin: '',                                 // ej. 'https://www.linkedin.com/in/tu-perfil'
  instagram: 'https://instagram.com/arturocruz0',
  cv: '',                                       // ruta a un PDF real, ej. 'docs/cv-arturo-nunez.pdf'

  // Indicador de disponibilidad del hero. null = oculto.
  // Opciones: 'disponible' | 'limitada' | 'no-disponible'
  availability: null,
};

const AVAILABILITY_TEXT = {
  'disponible': 'Disponible para nuevos proyectos',
  'limitada': 'Disponibilidad limitada',
  'no-disponible': 'Agenda completa por ahora',
};
const AVAILABILITY_COLOR = { 'disponible': 'text-cyan', 'limitada': 'text-violet', 'no-disponible': 'text-muted' };

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const waLink = (msg) => `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(msg)}`;

/* ---------- Enlaces de WhatsApp (cualquier elemento con data-wa) ---------- */
document.querySelectorAll('[data-wa]').forEach((el) => {
  el.href = waLink(el.dataset.wa);
  el.target = '_blank';
  el.rel = 'noopener';
});

/* ---------- Enlaces configurables (data-link) ---------- */
document.querySelectorAll('[data-link]').forEach((el) => {
  const key = el.dataset.link;
  const value = (CONFIG[key] || '').trim();
  if (!value) { el.remove(); return; }
  if (key === 'email') {
    el.href = `mailto:${value}`;
    const label = el.querySelector('[data-link-label]');
    if (label) label.textContent = value;
  } else {
    el.href = value;
    if (key !== 'cv') { el.target = '_blank'; el.rel = 'noopener'; }
  }
  el.classList.remove('hidden');
});

/* ---------- Indicador de disponibilidad ---------- */
const avail = document.getElementById('availability');
if (avail && AVAILABILITY_TEXT[CONFIG.availability]) {
  avail.querySelector('[data-availability-text]').textContent = AVAILABILITY_TEXT[CONFIG.availability];
  avail.querySelector('.pulse').classList.add(AVAILABILITY_COLOR[CONFIG.availability]);
  avail.classList.replace('hidden', 'inline-flex');
}

/* ---------- Navbar ---------- */
const navbar = document.getElementById('navbar');
const progress = document.getElementById('progress');
const heroVisual = document.getElementById('heroVisual');

let ticking = false;
const onScroll = () => {
  const y = window.scrollY;
  navbar.classList.toggle('scrolled', y > 10 || menuOpen);
  const max = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.transform = `scaleX(${max > 0 ? y / max : 0})`;
  // Parallax muy sutil en el visual del hero (solo escritorio)
  if (heroVisual && !reduceMotion && window.innerWidth >= 1024 && y < 900) {
    heroVisual.style.transform = `translate3d(0, ${y * -0.06}px, 0)`;
  }
  ticking = false;
};
window.addEventListener('scroll', () => {
  if (!ticking) { requestAnimationFrame(onScroll); ticking = true; }
}, { passive: true });

/* ---------- Menú móvil ---------- */
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const menuIcon = document.getElementById('menuIcon');
let menuOpen = false;

const setMenu = (open) => {
  menuOpen = open;
  mobileMenu.classList.toggle('open', open);
  mobileMenu.setAttribute('aria-hidden', String(!open));
  menuBtn.setAttribute('aria-expanded', String(open));
  menuBtn.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
  menuIcon.innerHTML = open ? '<path d="M6 6l12 12M18 6 6 18"/>' : '<path d="M4 8h16M4 16h16"/>';
  document.body.style.overflow = open ? 'hidden' : '';
  onScroll();
};
menuBtn.addEventListener('click', () => setMenu(!menuOpen));
document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && menuOpen) { setMenu(false); menuBtn.focus(); } });
window.addEventListener('resize', () => { if (menuOpen && window.innerWidth >= 1024) setMenu(false); });

/* ---------- Scroll suave con compensación del navbar ---------- */
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (e) => {
    const id = link.getAttribute('href');
    if (id === '#' || link.hasAttribute('data-wa') || link.hasAttribute('data-link')) return;
    const target = document.querySelector(id);
    if (!target) return;
    e.preventDefault();
    if (menuOpen) setMenu(false);
    if (link.dataset.service) document.getElementById('servicio').value = link.dataset.service;
    const top = target.getBoundingClientRect().top + window.scrollY - navbar.offsetHeight + 1;
    window.scrollTo({ top, behavior: reduceMotion ? 'auto' : 'smooth' });
    history.replaceState(null, '', id);
    if (target.id === 'main' || id === '#main') target.focus?.();
  });
});

/* ---------- Sección activa en el navbar ---------- */
const navLinks = [...document.querySelectorAll('.nav-link')];
const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    navLinks.forEach((l) => l.classList.toggle('is-active', l.getAttribute('href') === `#${entry.target.id}`));
  });
}, { rootMargin: '-45% 0px -50% 0px' });
document.querySelectorAll('main section[id]').forEach((s) => sectionObserver.observe(s));

/* ---------- Titular dividido en palabras ---------- */
const wrapWord = (word, cls) => {
  const outer = document.createElement('span');
  outer.className = 'w';
  const inner = document.createElement('span');
  if (cls) inner.className = cls;
  inner.textContent = word;
  outer.appendChild(inner);
  return outer;
};
document.querySelectorAll('[data-split]').forEach((el) => {
  el.setAttribute('aria-label', el.textContent.replace(/\s+/g, ' ').trim());
  const frag = document.createDocumentFragment();
  let i = 0;
  [...el.childNodes].forEach((node) => {
    const text = node.textContent.replace(/\s+/g, ' ');
    const cls = node.nodeType === 1 ? node.className : '';
    text.split(' ').forEach((word, idx, arr) => {
      if (word) {
        const w = wrapWord(word, cls);
        w.style.setProperty('--i', i++);
        w.setAttribute('aria-hidden', 'true');
        frag.appendChild(w);
      }
      if (idx < arr.length - 1) frag.appendChild(document.createTextNode(' '));
    });
  });
  el.textContent = '';
  el.appendChild(frag);
  requestAnimationFrame(() => requestAnimationFrame(() => el.classList.add('is-in')));
});

/* ---------- Contadores ---------- */
const runCount = (el) => {
  const end = Number(el.dataset.count);
  const pad = Number(el.dataset.pad || 0);
  const fmt = (n) => String(n).padStart(pad, '0');
  if (reduceMotion) { el.textContent = fmt(end); return; }
  const duration = 1400;
  const start = performance.now();
  const tick = (now) => {
    const t = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - t, 3);
    el.textContent = fmt(Math.round(eased * end));
    if (t < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
};

/* ---------- Animaciones al aparecer ---------- */
const io = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('is-visible');
    entry.target.querySelectorAll('[data-count]').forEach(runCount);
    io.unobserve(entry.target);
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
document.querySelectorAll('.reveal').forEach((el) => io.observe(el));

/* ---------- Spotlight que sigue al puntero ---------- */
if (window.matchMedia('(hover: hover)').matches) {
  document.querySelectorAll('.spotlight').forEach((el) => {
    el.addEventListener('pointermove', (e) => {
      const r = el.getBoundingClientRect();
      el.style.setProperty('--mx', `${e.clientX - r.left}px`);
      el.style.setProperty('--my', `${e.clientY - r.top}px`);
    });
  });
}

/* ---------- Diagrama: pausar si se pide menos movimiento o no está en pantalla ---------- */
const arch = document.getElementById('archSvg');
if (arch && arch.pauseAnimations) {
  if (reduceMotion) arch.pauseAnimations();
  else new IntersectionObserver(([e]) => (e.isIntersecting ? arch.unpauseAnimations() : arch.pauseAnimations())).observe(arch);
}

/* ---------- Formulario → WhatsApp ---------- */
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
  window.open(waLink(msg), '_blank', 'noopener');
});

onScroll();
