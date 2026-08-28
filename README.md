# Blum Landing

Landing de Blum: app Next.js con el contenido gestionado desde Sanity.

- **Sitio:** https://blum-landing-two.vercel.app
- **Editar contenido:** https://blum-landing-two.vercel.app/studio (o https://blum.sanity.studio)

## Cómo se publica

Vercel está conectado a este repositorio: **cada push a `main` despliega producción solo**.
Cada rama o pull request genera además su propia URL de vista previa.

El contenido (textos, imágenes, planes, logos) se edita en Sanity y aparece en el sitio
sin necesidad de tocar el código ni volver a desplegar.

## Cómo se actualiza el diseño

`index.html` en la raíz es el export empaquetado de Claude Design. **No lo sirve nadie**:
está ahí como fuente del diseño. La web la genera Next a partir de `components/sections/`.

Cuando se re-exporta el diseño, hay que portar los cambios a esos componentes. Si el
export solo cambia textos que ya se editan en Sanity, no hace falta portar nada: Sanity manda.

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
