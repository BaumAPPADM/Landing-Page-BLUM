import React from "react";
import { s } from "@/lib/css";
import { urlFor } from "@/sanity/image";

export default function Footer(p: any) {
  const { d } = p;
  return (
    <footer style={s("background:#002E2B;padding:60px 5% 44px;")}>
      <div style={s("max-width:1100px;margin:0 auto 44px;display:grid;grid-template-columns:minmax(240px,1.5fr) repeat(3,minmax(150px,1fr));gap:40px;align-items:start;")}>
        <div>
          <img src="/assets/logo-07.png" style={s("height:34px;display:block;margin-bottom:16px;")} alt="blum" />
          {" "}
          <p style={s("font-family:'IBM Plex Sans',sans-serif;font-size:13.5px;line-height:1.6;color:rgba(255,255,255,0.6);margin:0 0 18px;max-width:280px;")}>
            {d?.footerTagline || "App de registro de mediciones y eventos de los equipos de riego. Datos de terreno · Riego registrable."}
          </p>
          {" "}
          <a className="bh21" href="#contacto" style={s("display:inline-block;font-family:'Sora',sans-serif;font-size:13px;font-weight:700;color:#002E2B;background:#77CFC9;border-radius:22px;padding:10px 22px;")}>
            {d?.footerCta || "Agenda una demo"}
          </a>
        </div>
        {" "}
        <div>
          <p style={s("font-family:'IBM Plex Sans',sans-serif;font-size:11.5px;font-weight:700;letter-spacing:0.1em;color:#77CFC9;margin:0 0 14px;")}>
            {d?.footerColumns?.[0]?.title || "PLATAFORMA"}
          </p>
          {" "}
          <div style={s("display:flex;flex-direction:column;gap:10px;")}>
            <a className="bh22" href={d?.footerColumns?.[0]?.links?.[0]?.href || "#metodo"} style={s("font-family:'IBM Plex Sans',sans-serif;font-size:13.5px;color:rgba(255,255,255,0.75);")}>
              {d?.footerColumns?.[0]?.links?.[0]?.label || "Cómo funciona"}
            </a>
            {" "}
            <a className="bh23" href={d?.footerColumns?.[0]?.links?.[1]?.href || "#app"} style={s("font-family:'IBM Plex Sans',sans-serif;font-size:13.5px;color:rgba(255,255,255,0.75);")}>
              {d?.footerColumns?.[0]?.links?.[1]?.label || "Funcionalidades"}
            </a>
            {" "}
            <a className="bh24" href={d?.footerColumns?.[0]?.links?.[2]?.href || "#web"} style={s("font-family:'IBM Plex Sans',sans-serif;font-size:13.5px;color:rgba(255,255,255,0.75);")}>
              {d?.footerColumns?.[0]?.links?.[2]?.label || "App y Web"}
            </a>
            {" "}
            <a className="bh25" href={d?.footerColumns?.[0]?.links?.[3]?.href || "#planes"} style={s("font-family:'IBM Plex Sans',sans-serif;font-size:13.5px;color:rgba(255,255,255,0.75);")}>
              {d?.footerColumns?.[0]?.links?.[3]?.label || "Planes"}
            </a>
          </div>
        </div>
        {" "}
        <div>
          <p style={s("font-family:'IBM Plex Sans',sans-serif;font-size:11.5px;font-weight:700;letter-spacing:0.1em;color:#77CFC9;margin:0 0 14px;")}>
            {d?.footerColumns?.[1]?.title || "EMPRESA"}
          </p>
          {" "}
          <div style={s("display:flex;flex-direction:column;gap:10px;")}>
            <a className="bh26" href={d?.footerColumns?.[1]?.links?.[0]?.href || "#contacto"} style={s("font-family:'IBM Plex Sans',sans-serif;font-size:13.5px;color:rgba(255,255,255,0.75);")}>
              {d?.footerColumns?.[1]?.links?.[0]?.label || "Agenda una demo"}
            </a>
            {" "}
            <a className="bh27" href={d?.footerColumns?.[1]?.links?.[1]?.href || "#contacto"} style={s("font-family:'IBM Plex Sans',sans-serif;font-size:13.5px;color:rgba(255,255,255,0.75);")}>
              {d?.footerColumns?.[1]?.links?.[1]?.label || "Contacto"}
            </a>
          </div>
        </div>
        {" "}
        <div>
          <p style={s("font-family:'IBM Plex Sans',sans-serif;font-size:11.5px;font-weight:700;letter-spacing:0.1em;color:#77CFC9;margin:0 0 14px;")}>
            {d?.footerColumns?.[2]?.title || "DESCARGA LA APP"}
          </p>
          {" "}
          <div style={s("display:flex;flex-direction:column;gap:10px;")}>
            <a className="bh28" href={d?.footerColumns?.[2]?.links?.[0]?.href || "https://apps.apple.com/cl/app/baumapp/id6751601274"} target="_blank" rel="noopener" style={s("display:inline-flex;align-items:center;gap:8px;font-family:'IBM Plex Sans',sans-serif;font-size:13.5px;color:rgba(255,255,255,0.75);")}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.05 12.54c-.03-2.89 2.36-4.27 2.47-4.34-1.35-1.97-3.44-2.24-4.18-2.27-1.78-.18-3.47 1.05-4.37 1.05-.9 0-2.29-1.02-3.77-1-1.94.03-3.72 1.13-4.72 2.86-2.01 3.49-.51 8.66 1.45 11.49.96 1.39 2.1 2.94 3.6 2.88 1.45-.06 1.99-.93 3.74-.93s2.24.93 3.77.9c1.56-.03 2.54-1.41 3.49-2.8 1.1-1.61 1.55-3.17 1.58-3.25-.04-.02-3.03-1.16-3.06-4.59z"></path>
              </svg>
              {d?.footerColumns?.[2]?.links?.[0]?.label || "App Store"}
            </a>
            {" "}
            <a className="bh29" href={d?.footerColumns?.[2]?.links?.[1]?.href || "https://play.google.com/store/apps/details?id=com.baumsystem.baumapp"} target="_blank" rel="noopener" style={s("display:inline-flex;align-items:center;gap:8px;font-family:'IBM Plex Sans',sans-serif;font-size:13.5px;color:rgba(255,255,255,0.75);")}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.06 1.24 12.9 11.08 3.06 20.92A2.01 2.01 0 0 1 3 20.5v-17c0-.15.02-.29.06-.26zM13.96 12.14l2.6 2.6-9.6 5.46c-.44.25-.9.3-1.3.16l8.3-8.22zM17.9 9.9l2.5 1.42c1.1.62 1.1 1.74 0 2.36l-2.5 1.42-2.88-2.6 2.88-2.6zM5.66 1.64c.4-.14.86-.09 1.3.16l9.6 5.46-2.6 2.6-8.3-8.22z"></path>
              </svg>
              {d?.footerColumns?.[2]?.links?.[1]?.label || "Google Play"}
            </a>
          </div>
        </div>
      </div>
      {" "}
      <div style={s("max-width:1100px;margin:0 auto;border-top:1px solid rgba(255,255,255,0.12);padding-top:24px;display:flex;align-items:center;justify-content:space-between;gap:20px;flex-wrap:wrap;")}>
        <p style={s("font-family:'IBM Plex Sans',sans-serif;font-size:12.5px;color:rgba(255,255,255,0.55);margin:0;")}>
          {d?.footerLegal || "© 2026 BLUM — Un producto de Baum System"}
        </p>
        {" "}
        <div style={s("display:flex;gap:14px;align-items:center;")}>
          <a className="bh30" href="https://www.instagram.com/blum.riego" target="_blank" rel="noopener" aria-label="Instagram" style={s("display:flex;align-items:center;justify-content:center;width:36px;height:36px;border-radius:50%;border:1px solid rgba(119,207,201,0.4);color:#77CFC9;")}>
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5"></rect>
              <circle cx="12" cy="12" r="4"></circle>
              <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"></circle>
            </svg>
          </a>
          {" "}
          <a className="bh31" href="https://www.linkedin.com" target="_blank" rel="noopener" aria-label="LinkedIn" style={s("display:flex;align-items:center;justify-content:center;width:36px;height:36px;border-radius:50%;border:1px solid rgba(119,207,201,0.4);color:#77CFC9;")}>
            <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
              <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V23h-4V8zm7.5 0h3.8v2.05h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V23h-4v-7.9c0-1.88-.03-4.3-2.62-4.3-2.63 0-3.03 2.05-3.03 4.17V23H8V8z"></path>
            </svg>
          </a>
          {" "}
          <a className="bh32" href="https://www.facebook.com" target="_blank" rel="noopener" aria-label="Facebook" style={s("display:flex;align-items:center;justify-content:center;width:36px;height:36px;border-radius:50%;border:1px solid rgba(119,207,201,0.4);color:#77CFC9;")}>
            <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
