# Blum Landing

Landing de Blum: app Next.js con el contenido gestionado desde Sanity.

- **Sitio:** https://blum-landing-two.vercel.app
- **Editar contenido:** https://blum-landing-two.vercel.app/studio (o https://blum.sanity.studio)

## Cómo se publica

Vercel está conectado a este repositorio: **cada push a `main` despliega producción solo**.
Cada rama o pull request genera además su propia URL de vista previa.

El contenido (textos, imágenes, planes, logos) se edita en Sanity y aparece en el sitio
sin necesidad de tocar el código ni volver a desplegar.

## Dónde van las imágenes

**No las subas a la raíz del repositorio**: ahí no las sirve nadie y no se verá
ningún cambio en el sitio. Hay dos lugares válidos:

- **Sanity** (lo normal): súbelas desde el Studio, en el campo correspondiente.
  Aparecen en el sitio sin tocar código ni desplegar.
- `public/assets/` — solo para imágenes que el código referencia como respaldo.

Para cargar varias de una vez a la biblioteca de Sanity:

    node scripts/upload-assets.mjs public/assets/mi-imagen.png

## Cómo se actualiza el diseño

`index.html` en la raíz es el export empaquetado de Claude Design. **No lo sirve nadie**:
está ahí como fuente del diseño. La web la genera Next a partir de `components/sections/`.

Cuando se re-exporta el diseño, hay que portar los cambios a esos componentes:

    node scripts/port/unbundle.mjs index.html /tmp/diseno     # abre el export
    node scripts/port/tojsx.mjs /tmp/diseno /tmp/jsx          # markup -> JSX
    node scripts/port/verify.mjs <url> /tmp/diseno            # contrasta lo publicado

`unbundle.mjs` avisa si el export trae imágenes que no están en `public/assets`.

Si el export solo cambia textos que ya se editan en Sanity, no hace falta portar
nada: Sanity manda. Y si el export solo regenera sus identificadores internos,
`index.html` aparecerá modificado en git pero el contenido será el mismo.

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
