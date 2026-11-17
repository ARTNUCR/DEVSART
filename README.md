# DevsArt — Portafolio de Arturo Núñez Cruz

Desarrollador Full-Stack y Fundador de DevsArt · Creador de OptiCore, SaaS para ópticas. CDMX + remoto para todo México.

**En línea:** https://devsart.netlify.app

## Estructura

```
devsart/
├── index.html      # Toda la página (navbar, hero, servicios, trabajos, acerca, reseñas, cotizar, footer)
├── css/style.css   # Estilos personalizados (cards, botones, animaciones, formulario)
├── js/main.js      # WhatsApp, menú móvil, scroll suave, animaciones, formulario de cotización
├── img/            # Logos, foto, favicon e imagen para compartir
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
| Número de WhatsApp | `js/main.js`, constante `WHATSAPP` (actual `525562094886`) |
| Precios | `index.html`, sección `#servicios` (Landing $3,500 · Página completa $7,000) |
| Foto | `img/arturo-ceo.jpg` |
| Reseñas | `index.html`, sección `#resenas` (son de ejemplo) |

## Paleta

| Uso | Color |
|---|---|
| Fondo | `#0B132B` |
| Cards | `#1C2541` |
| Bordes / secundarios | `#3A506B` |
| Azul primario | `#5BC0DE` |
| Champagne | `#F4D6B0` |
| CTA naranja | `#D97706` (hover `#F59E0B`) |

Tipografía: Poppins (títulos) + Inter (texto).

© 2026 DevsArt - Hecho en CDMX
