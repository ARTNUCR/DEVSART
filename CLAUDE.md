# CLAUDE.md — DevsArt

## Proyecto
- **Nombre:** DevsArt, portafolio de Arturo Núñez Cruz.
- **Ubicación local:** `C:/wamp64/www/devsart`, se ve en `http://localhost/devsart` (WampServer).
- **En línea:** https://devsart.netlify.app (Netlify, se sube arrastrando la carpeta).

## Stack (no cambiar)
- HTML + Tailwind CSS por CDN + JavaScript vanilla.
- **Prohibido:** Vue, React, cualquier framework, npm, bundlers o pasos de build. La página debe funcionar abriendo la carpeta tal cual.

## Archivos
- `index.html`: todas las secciones en este orden: navbar fijo, hero (`#inicio`), servicios (`#servicios`), trabajos (`#trabajos`), acerca de mí (`#acerca`), reseñas (`#resenas`), cotizar (`#cotizar`), footer.
- La configuración de Tailwind (colores `ink`, `card`, `line`, `sky`, `champ`, `cta`, `ctaHover` y fuentes) va en un `<script>` dentro del `<head>` de `index.html`, justo después del CDN. Debe quedarse ahí.
- `css/style.css`: estilos que Tailwind no cubre (`.reveal`, `.card`, `.btn-cta`, `.btn-sky`, `.field`, `.badge`, `.tag`, `.eyebrow`, `.section-title`, brillos).
- `js/main.js`: constante `WHATSAPP` (`525562094886`), links `[data-wa]`, menú móvil, scroll suave con compensación del navbar, animaciones al scroll y envío del formulario a WhatsApp.
- `img/`: `logo-devsart.png`, `logo-opticore.png`, `arturo-ceo.jpg`, `favicon.png`, `apple-touch-icon.png`, `og-devsart.jpg` (versiones optimizadas) y los originales.

## Diseño obligatorio (no inventar otros colores)
| Uso | Color |
|---|---|
| Fondo principal | `#0B132B` |
| Cards oscuras | `#1C2541` |
| Bordes / textos secundarios | `#3A506B` |
| Azul primario | `#5BC0DE` |
| Champagne | `#F4D6B0` |
| CTA naranja (solo botones principales) | `#D97706`, hover `#F59E0B` |

- Tipografía: Poppins (títulos, `font-display`) + Inter (texto).
- Estilo oscuro premium, nivel Linear + Apple + tienda de lujo.
- Mobile first: la mayoría de las visitas vienen de Instagram. Verificar siempre a 390 px de ancho, sin scroll horizontal.
- Animaciones suaves al hacer scroll; respetar `prefers-reduced-motion`.
- `#3A506B` sobre `#0B132B` tiene poco contraste: usarlo en bordes, divisores y detalles. Para texto secundario legible se usa blanco con opacidad (`text-white/60`).

## Quién soy (usar tal cual, nunca "estudiante" ni "junior")
Soy Arturo Núñez Cruz, Desarrollador Full-Stack y Fundador de DevsArt, basado en CDMX y trabajando remoto para todo México.

Antes de dedicarme al desarrollo, trabajé 4 años en ventas de óptica: atendía pacientes, tomaba recetas y vendía armazones. Ahí vi de primera mano cómo se perdían clientes y dinero por usar papel, Excel y sistemas viejos. No soy un programador de escritorio: esa experiencia en mostrador es la que hoy pongo en cada proyecto.

Ya como desarrollador, y con esa experiencia como base, creé OptiCore, mi proyecto principal: un SaaS multi-tenant para ópticas en México. Un sistema único que maneja cadenas con varias sucursales, con roles por usuario (super_admin, admin de cadena, gerente de sucursal, vendedor), pacientes, expediente oftálmico completo (receta OD/OI, esfera, cilindro, eje, DP, ADD, tipo de lente), ventas / POS, inventario de armazones y micas, y agenda de exámenes visuales. Empezó migrando un sistema viejo en PHP (Laminas) de una óptica real y ahora da servicio a una cadena de 10 sucursales, con la meta de rentarlo a 50 ópticas más.

**Stack que manejo:** Frontend HTML, Tailwind CSS, JS vanilla, Vue 3, React + Vite. Backend FastAPI (Python) + SQLAlchemy + MySQL 8.

**Mi diferencia:** No vendo código, vendo sistemas que ya viví en mostrador. Sé lo que necesita un dueño de negocio porque yo estuve de ese lado.

## Convenciones
- Textos en español de México.
- Nombre completo: **Arturo Núñez Cruz**. No decir que OptiCore se hizo durante los 4 años en óptica: primero fue la experiencia en ventas, después el desarrollo.
- Enfoque: ópticas y negocios locales; OptiCore es el proyecto estrella ("SaaS para Ópticas").
- Precios: Landing desde $3,500 MXN · Página completa desde $7,000 MXN · Sistema a medida con cotización personalizada.
- Cualquier botón de WhatsApp usa `data-wa="mensaje"`; `main.js` arma el link.
- El formulario envía: "Hola Arturo, vi tu página DevsArt y quiero cotizar: [servicio]" + nombre, presupuesto y WhatsApp.
- Las reseñas son de ejemplo y se cargan a mano; el botón "Déjame tu reseña por WhatsApp" las recibe.
- Imágenes de relleno: Unsplash con `onerror` para no dejar huecos rotos.
- Si algo se rompe, corregirlo sin alterar el diseño.

## Contacto
- Instagram: @arturocruz0
- WhatsApp: 55 6209 4886
- Footer: "© 2026 DevsArt - Hecho en CDMX"
