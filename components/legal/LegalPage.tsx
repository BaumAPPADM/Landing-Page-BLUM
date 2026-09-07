import React from 'react';
import { s } from '@/lib/css';

/**
 * Página legal estática (privacidad, términos). No depende de Sanity: el texto
 * es contractual y se versiona en el repo. Tipografía y colores de globals.css.
 */
export default function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <header style={s('background:#002E2B;padding:18px 5%;')}>
        <div style={s('max-width:820px;margin:0 auto;display:flex;align-items:center;justify-content:space-between;')}>
          <a href="/" aria-label="blum">
            <img src="/assets/logo-07.png" style={s('height:34px;display:block;')} alt="blum" />
          </a>
          <nav style={s("display:flex;gap:18px;font-family:'IBM Plex Sans',sans-serif;font-size:13px;")}>
            <a href="/privacidad" style={s('color:rgba(255,255,255,0.8);')}>Privacidad</a>
            <a href="/terminos" style={s('color:rgba(255,255,255,0.8);')}>Términos</a>
          </nav>
        </div>
      </header>
      <style>{`.legal a{color:var(--forest);text-decoration:underline;text-underline-offset:3px}`}</style>
      <main className="legal" style={s('background:var(--surface-page);padding:56px 5% 80px;')}>
        <article style={s("max-width:820px;margin:0 auto;font-family:'IBM Plex Sans',sans-serif;color:var(--text-primary);font-size:16px;line-height:1.7;")}>
          <p style={s("font-family:'Sora',sans-serif;font-size:12px;font-weight:700;letter-spacing:0.12em;color:var(--text-tertiary);margin:0 0 10px;text-transform:uppercase;")}>
            Última actualización: {updated}
          </p>
          <h1 style={s("font-family:'Sora',sans-serif;font-size:36px;line-height:1.15;font-weight:800;letter-spacing:-0.02em;margin:0 0 32px;")}>
            {title}
          </h1>
          {children}
        </article>
      </main>
      <footer style={s("background:#002E2B;padding:24px 5%;font-family:'IBM Plex Sans',sans-serif;font-size:12.5px;color:rgba(255,255,255,0.55);")}>
        <div style={s('max-width:820px;margin:0 auto;display:flex;justify-content:space-between;gap:16px;flex-wrap:wrap;')}>
          <span>© 2026 CyG Riego SpA · blum</span>
          <span>
            <a href="/privacidad" style={s('color:rgba(255,255,255,0.75);margin-right:14px;')}>Política de privacidad</a>
            <a href="/terminos" style={s('color:rgba(255,255,255,0.75);')}>Términos y condiciones</a>
          </span>
        </div>
      </footer>
    </>
  );
}

export const legalStyles = {
  h2: s("font-family:'Sora',sans-serif;font-size:21px;font-weight:700;margin:40px 0 12px;color:var(--forest);"),
  h3: s("font-family:'Sora',sans-serif;font-size:16px;font-weight:700;margin:24px 0 8px;color:var(--forest);"),
  p: s('margin:0 0 14px;'),
  ul: s('margin:0 0 14px;padding-left:22px;'),
  li: s('margin:0 0 8px;'),
  note: s('margin:0 0 14px;padding:14px 18px;border-left:3px solid var(--turquoise);background:var(--turquoise-100);border-radius:0 8px 8px 0;'),
};
