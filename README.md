# DevsArt — Portafolio de Arturo Núñez Cruz

Desarrollador de software e Ingeniero en Sistemas Computacionales · Creador de OPTICORE, SaaS para ópticas en producción. CDMX + remoto para todo México.

**En línea:** https://devsart.netlify.app

## Estructura

```
devsart/
├── index.html      # Toda la página (navbar, hero, sobre mí, proyectos, stack, experiencia, cómo trabajo, contacto, footer)
├── css/style.css   # Estilos personalizados (cards, botones, animaciones, formulario)
├── js/main.js      # CONFIG de contacto, menú móvil, scroll suave, animaciones, formulario a WhatsApp
├── img/            # Logos, foto, favicon, imagen para compartir y tech/ (iconos del stack)
├── CLAUDE.md       # Reglas del proyecto y bio para Claude Code
└── README.md
```

Stack: HTML + Tailwind CSS por CDN + JavaScript vanilla. Sin frameworks ni build.

## Verlo en localhost

1. Abre **WampServer** y espera a que el ícono junto al reloj se ponga **verde**.
2. En el navegador entra a **http://localhost/devsart**.
3. Para verlo como en celular: `F12` → `Ctrl + Shift + M` → elige un iPhone.
4. Si hiciste cambios y no se ven, recarga con `Ctrl + F5`.

## Subirlo a Netlify arrastrando la carpeta

**Primera vez**
1. Entra a **https://app.netlify.com/drop** e inicia sesión (gratis con Google o GitHub).
2. Abre el Explorador de Windows en `C:\wamp64\www\`.
3. Arrastra la carpeta **`DEVSART` completa** al recuadro de la página.
4. Netlify te da una dirección al azar. Cámbiala en **Site configuration → Change site name** y escribe `devsart`.

**Para actualizar**
1. Entra a **app.netlify.com** y abre tu sitio.
2. Pestaña **Deploys** → arrastra otra vez la carpeta `DEVSART` al recuadro de abajo.

> Netlify distingue mayúsculas y minúsculas en los nombres de archivo: `img/foto.jpg` y `img/FOTO.jpg` son distintos.

## Qué cambiar y dónde

| Qué | Dónde |
|---|---|
| WhatsApp, correo, GitHub, LinkedIn, Instagram | `js/main.js`, objeto `CONFIG` (los vacíos se ocultan) |
| CV descargable | Sube el PDF (ej. `docs/cv-arturo-nunez.pdf`) y pon la ruta en `CONFIG.cv` |
| Indicador de disponibilidad | `CONFIG.availability`: `'disponible'`, `'limitada'`, `'no-disponible'` o `null` (oculto) |
| Proyectos | `index.html`, sección `#proyectos` |
| Precios de referencia | `index.html`, sección `#contacto` |
| Foto | `img/arturo-ceo.jpg` |

## Paleta

| Uso | Color |
|---|---|
| Fondo | `#08090D` |
| Superficie | `#11131A` / elevada `#171A23` |
| Texto | `#F4F4F5` / secundario `#9295A1` |
| Acento principal | `#8B5CF6` |
| Acento secundario | `#38BDF8` |
| Bordes | `rgba(255,255,255,0.09)` |

Tipografía: Geist + Geist Mono, con Instrument Serif itálica como acento.

© 2026 DevsArt - Hecho en CDMX
