<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Blum Landing — reglas para agentes

Landing Next.js + Sanity. Producción es **solo** el dominio de Vercel.

## Producción vs. lo que no lo es

| URL | Rol |
|---|---|
| https://www.blumapps.com | **Producción.** Única fuente de verdad de lo publicado. |
| https://landing-page-blum.vercel.app | Preview de producción del proyecto Vercel canónico (`landing-page-blum`, cuenta de LH). |
| https://www.blumapps.com/studio | CMS (Sanity). Textos, links, logos, planes. |
| `index.html` en la raíz del repo | Export de Claude Design. **No se sirve.** |
| github.io / GitHub Pages | **Apagado a propósito.** No reactivar. No es el sitio. |
| https://blum-landing.vercel.app / `blum-landing-two.vercel.app` | Proyectos Vercel duplicados. **No son el dominio de marca.** No asignarles `blumapps.com`. |

Cada push a `main` dispara deploy en Vercel. Eso **no** significa que un cambio en `index.html` aparezca en `blumapps.com`.

## Qué editar según el cambio

- **Copy, links, logos, planes, CTA, URL de “Iniciar sesión”:** Sanity Studio. No hace falta redeploy. Sanity manda sobre los fallbacks del código.
- **Layout, CSS, markup, comportamiento:** `components/sections/` (y `app/`, `app/globals.css`). Eso sí va a Vercel.
- **Imágenes de contenido:** subirlas en Sanity. Nunca a la raíz del repo.
- **Imágenes de respaldo del código:** `public/assets/`.

## Cómo NO publicar un diseño

No subir el export de Claude Design (`index.html`) y dar por hecho que producción cambió. GitHub mostrará el diff; `blumapps.com` no.

Para portar un export nuevo:

```bash
node scripts/port/unbundle.mjs index.html /tmp/diseno
node scripts/port/tojsx.mjs /tmp/diseno /tmp/jsx
node scripts/port/verify.mjs https://www.blumapps.com /tmp/diseno
```

Si el export solo cambia textos que ya viven en Sanity, no portes: edita Sanity. Si solo regenera IDs internos, `index.html` se ve modificado en git pero el sitio no cambia.

## Fallbacks de código

`lib/defaults.ts` y `scripts/seed.mjs` son respaldo si Sanity no responde. Deben coincidir con producción (hoy `loginUrl` = `https://app.baumsystem.com`). No los uses como CMS.
