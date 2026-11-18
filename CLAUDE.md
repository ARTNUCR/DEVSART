# CLAUDE.md — Portafolio de Arturo Núñez (DevsArt)

## Proyecto
- **Qué es:** portafolio profesional de Arturo Núñez Cruz: desarrollador de software, ingeniero en sistemas y creador de OPTICORE.
- **Ubicación local:** `C:/wamp64/www/devsart`, se ve en `http://localhost/devsart` (WampServer).
- **En línea:** https://devsart.netlify.app (Netlify, se sube arrastrando la carpeta).

## Stack (no cambiar)
- HTML + Tailwind CSS por CDN + JavaScript vanilla.
- **Prohibido:** Vue, React, cualquier framework, npm, bundlers o pasos de build. La página debe funcionar abriendo la carpeta tal cual.
- El aviso "cdn.tailwindcss.com should not be used in production" en consola es propio del CDN; se acepta por la regla anterior.

## Archivos
- `index.html`: secciones en este orden: navbar fijo + menú móvil a pantalla completa, hero (`#inicio`), sobre mí (`#sobre-mi`), proyectos (`#proyectos`, con `#opticore`), stack (`#stack`), experiencia (`#experiencia`), cómo trabajo (`#como-trabajo`), contacto (`#contacto`, con formulario a WhatsApp), footer.
- `404.html`: página de error que Netlify sirve sola para rutas inexistentes. Usa rutas absolutas (`/css/style.css`, `/img/...`) porque puede servirse desde cualquier ruta; por eso en WAMP (`localhost/devsart`) no se ve con estilos, es normal.
- La configuración de Tailwind (colores `base`, `surface`, `raised`, `fg`, `muted`, `violet`, `cyan`, `line` y fuentes) va en un `<script>` dentro del `<head>` de `index.html`, justo después del CDN.
- `css/style.css`: lo que Tailwind no cubre (`.reveal`, `.split`, `.btn`, `.btn-primary`, `.btn-secondary`, `.label`, `.section-title`, `.serif`, `.chip`, `.pulse`, `.spotlight`, `.mock`, `.skel`, `.bars`, `.tech`, `.field`, `.contact-row`, menú móvil, barra de progreso).
- `js/main.js`: objeto **`CONFIG`** al inicio (WhatsApp, email, GitHub, LinkedIn, Instagram, CV, disponibilidad). Los enlaces vacíos se ocultan solos. Además: links `[data-wa]`, menú móvil, scroll suave con compensación del navbar, sección activa, titular palabra por palabra, contadores, spotlight, parallax sutil, barra de progreso y formulario → WhatsApp.
- `img/`: `logo-devsart.png`, `logo-opticore.png`, `arturo-ceo.jpg`, `favicon.png`, `apple-touch-icon.png`, `og-devsart.jpg`, `tech/` (iconos SVG de Devicon, servidos localmente) y los originales.

## Diseño
| Uso | Token | Color |
|---|---|---|
| Fondo principal | `base` | `#08090D` |
| Superficie secundaria | `surface` | `#11131A` |
| Superficie elevada | `raised` | `#171A23` |
| Texto principal | `fg` | `#F4F4F5` |
| Texto secundario | `muted` | `#9295A1` |
| Acento principal | `violet` | `#8B5CF6` |
| Acento secundario | `cyan` | `#38BDF8` |
| Bordes | `line` | `rgba(255,255,255,0.09)` |

- Tipografía: Geist (interfaz y titulares), Geist Mono (etiquetas técnicas), Instrument Serif itálica solo como acento en una palabra o frase por titular.
- Estética editorial tipo Linear / Vercel: mucho espacio negativo, líneas finas, nada de gradientes exagerados ni glassmorphism excesivo, sin emojis.
- Botón principal: claro (`.btn-primary`). El violeta no se usa para texto pequeño (contraste); para eso `cyan` o `fg`.
- Mobile first: verificar a 390 px sin scroll horizontal. Respetar `prefers-reduced-motion`.
- Mockups de proyectos: son ilustrativos (esqueletos), siempre con la leyenda "Interfaz ilustrativa · no es captura…". No poner cifras ni módulos inventados en ellos.

## Información profesional (no inventar nada fuera de esto)
- Arturo Núñez Cruz. Ingeniero en Sistemas Computacionales, titulado y con cédula profesional. CDMX, remoto para todo México. Nunca "estudiante" ni "junior".
- Enfoque: aplicaciones web, backend, sistemas empresariales y productos tecnológicos que resuelvan necesidades reales de negocio. Experiencia con sistemas institucionales, bases de datos, automatización de procesos y software comercial.
- **OPTICORE:** SaaS propio para administración y operación de ópticas. En producción, usado por **5 ópticas** mediante suscripción / renta. No inventar módulos, tecnologías, facturación ni cifras.
- **SIREC / EXACER:** residencias profesionales en la Dirección General del Colegio de Bachilleres, Depto. de Procesamiento de Datos. PHP, Laminas, Oracle SQL, JavaScript, DataTables. Estadísticas, indicadores (registrados, aceptados, asistentes, ausentes), gráficas y filtros, confronta de CURP con Excel, historial de aplicaciones, sustentantes extranjeros, requisitos especiales y accesibilidad.
- **Óptica Morán:** sistema web para una óptica. Vue, FastAPI, MySQL, JavaScript, Bootstrap, DataTables. Pacientes, expedientes clínicos, historial de consultas, graduación, agudeza visual, alturas/DIP/ADD, recomendaciones clínicas, inventario de armazones. La migración a FastAPI es una línea **iniciada**, no terminada.
- **ARQUIGARD:** no mostrar hasta tener contenido real.
- Stack: Lenguajes PHP, Python, JavaScript, TypeScript, Java, C#, SQL · Backend Laminas, FastAPI, Django · Frontend HTML5, CSS3, JavaScript, Bootstrap · BD MySQL, MariaDB, PostgreSQL, Oracle SQL, MongoDB, Firebase · Herramientas Git, GitHub, Bitbucket, Sourcetree, Docker, Postman, VS Code, NetBeans, Sublime Text · Windows y Linux. React y Vue solo como "en exploración". Sin porcentajes de dominio.
- Experiencia (sin fechas ni puestos inventados): desarrollo web y mantenimiento de sistemas; soluciones para Colegio de Bachilleres; análisis operativo de datos; soporte técnico N1 / mesa de ayuda para sitios de Elektra a nivel nacional (con menor peso visual).

## Convenciones
- Textos en español de México.
- Cualquier botón de WhatsApp usa `data-wa="mensaje"`; `main.js` arma el link.
- El formulario envía: "Hola Arturo, vi tu página DevsArt y quiero cotizar: [servicio]" + nombre, presupuesto y WhatsApp.
- Precios de referencia (en contacto): Landing desde $3,500 MXN · Página completa desde $7,000 MXN · Sistema a medida con cotización personalizada.
- No inventar URLs, usuarios ni correos: van vacíos en `CONFIG` hasta que Arturo los dé.

## Contacto
- WhatsApp: 55 6209 4886 · Instagram: @arturocruz0
- Footer centrado: "© 2026 DevsArt. Todos los derechos reservados." Sin badges de terceros (Netlify no inyecta ninguno).
