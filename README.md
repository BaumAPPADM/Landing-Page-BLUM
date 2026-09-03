# Blum Landing

Landing de Blum: app Next.js con el contenido gestionado desde Sanity.

- **Sitio (producción):** https://www.blumapps.com
- **Preview Vercel:** https://landing-page-blum.vercel.app
- **Editar contenido:** https://www.blumapps.com/studio (o https://blum.sanity.studio)

GitHub Pages está **apagado**. `https://baumappadm.github.io/Landing-Page-BLUM/` no es el sitio y no hay que reactivarlo: servía el `index.html` de diseño, no la app de producción.

## Cómo se publica

Hay dos capas. Confundirlas es el error más caro de este repo.

| Qué cambias | Dónde | Cuándo se ve en blumapps.com |
|---|---|---|
| Textos, links, logos, planes, “Iniciar sesión” | [Sanity Studio](https://www.blumapps.com/studio) | Al publicar en Sanity. Sin redeploy. |
| Layout, CSS, componentes, rutas | `components/`, `app/` → push a `main` | Cuando Vercel termina el deploy. |
| Export de Claude Design (`index.html` en la raíz) | Solo referencia de diseño | **Nunca**, hasta portearlo a los componentes. |

Vercel está conectado a este repositorio: **cada push a `main` despliega el proyecto `landing-page-blum`**. Ese proyecto es el dueño de `blumapps.com`. Hay proyectos Vercel duplicados (`blum-landing`, `blum-landing-two`) que también construyen el repo: no les asignes el dominio; sus alias `.vercel.app` no son producción.

## Dónde van las imágenes

**No las subas a la raíz del repositorio**: ahí no las sirve nadie y no se verá ningún cambio en el sitio. Hay dos lugares válidos:

- **Sanity** (lo normal): súbelas desde el Studio, en el campo correspondiente. Aparecen en el sitio sin tocar código ni desplegar.
- `public/assets/` — solo para imágenes que el código referencia como respaldo.

Para cargar varias de una vez a la biblioteca de Sanity:

    node scripts/upload-assets.mjs public/assets/mi-imagen.png

## Cómo se actualiza el diseño

`index.html` en la raíz es el export empaquetado de Claude Design. **No lo sirve Vercel ni el dominio.** La web la genera Next a partir de `components/sections/`.

Cuando se re-exporta el diseño, hay que portar los cambios a esos componentes:

    node scripts/port/unbundle.mjs index.html /tmp/diseno     # abre el export
    node scripts/port/tojsx.mjs /tmp/diseno /tmp/jsx          # markup -> JSX
    node scripts/port/verify.mjs https://www.blumapps.com /tmp/diseno

`unbundle.mjs` avisa si el export trae imágenes que no están en `public/assets`.

Si el export solo cambia textos que ya se editan en Sanity, no hace falta portar nada: Sanity manda. Y si el export solo regenera sus identificadores internos, `index.html` aparecerá modificado en git pero el contenido será el mismo.

## Estructura

    app/                  rutas (landing, /studio, webhook de revalidación)
    components/sections/  una sección por archivo, generadas desde el diseño
    sanity/               esquema, cliente y consultas
    scripts/seed.mjs      carga inicial del contenido en Sanity
    public/assets/        imágenes y tipografías

## Desarrollo

    npm install
    npm run dev

Requiere un `.env.local` con las variables de `.env.example`.
