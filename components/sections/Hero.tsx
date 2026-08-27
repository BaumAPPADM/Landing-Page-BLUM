import React from "react";
import { s } from "@/lib/css";

export default function Hero(p: any) {
  const { d } = p;
  const { scrollToContact, scrollToMetodo } = p;
  return (
    <section style={s("position:relative;display:flex;flex-direction:column;padding:0 0 26px;box-sizing:border-box;overflow:hidden;background:linear-gradient(170deg,#0a3f3a 0%,#062e2a 60%,#04241f 100%);")}>
      <div className="bl5-hero-wrap" style={s("position:relative;width:100%;min-height:620px;display:flex;align-items:center;padding:116px 5% 70px;box-sizing:border-box;")}>
        <img className="bl5-hero-img" src="/assets/hero-terreno-oficina.png" style={s("position:absolute;right:0;top:0;height:100%;width:62%;object-fit:cover;object-position:center;-webkit-mask-image:linear-gradient(90deg,transparent 0%,#000 12%,#000 100%);mask-image:linear-gradient(90deg,transparent 0%,#000 12%,#000 100%);opacity:1;")} alt="Del terreno a la oficina: operador midiendo en el campo y gerente viendo los datos en BLUM" />
        {" "}
        <div className="bl5-hero-scrim" style={s("position:absolute;left:0;top:0;height:100%;width:44%;background:linear-gradient(90deg,#062e2a 0%,rgba(6,46,42,0.7) 65%,rgba(6,46,42,0) 100%);")}></div>
        {" "}
        <div className="bl5-hero-copy" style={s("position:relative;max-width:460px;width:42%;text-align:left;")}>
          <span style={s("display:inline-block;font-family:'IBM Plex Sans',sans-serif;font-size:11px;font-weight:700;letter-spacing:0.1em;color:#CFF3F0;background:rgba(119,207,201,0.14);border-radius:20px;padding:8px 16px;margin-bottom:18px;")}>
            {"BLUM · GESTIÓN DE EQUIPOS DE RIEGO TECNIFICADO"}
          </span>
          {" "}
          <h1 style={s("font-size:clamp(23px,2.2vw,33px);line-height:1.2;color:#FFFFFF;font-weight:700;margin:0 0 16px;text-wrap:balance;")}>
            {"Software de riego: "}
            <span style={s("color: rgb(245, 166, 35);")}>
              {"Registro de medición y eventos."}
            </span>
            {" "}
            <br />
            {"Qué ocurre en terreno."}
          </h1>
          {" "}
          <p style={s("font-family:'IBM Plex Sans',sans-serif;font-size:15.5px;line-height:1.6;color:rgba(255,255,255,0.85);margin:0 0 24px;max-width:440px;")}>
            {"Tu operador "}
            <strong style={s("color:#FFFFFF;")}>
              {"registra mediciones y eventos desde la app"}
            </strong>
            {", simple y en terreno."}
            <b>
              {" Blum"}
            </b>
            {" centraliza la información, te entrega "}
            <strong style={s("color:#FFFFFF;")}>
              {"alertas y tendencias"}
            </strong>
            {" para armar tu "}
            <strong style={s("color:#FFFFFF;")}>
              {"plan de acción"}
            </strong>
            {" antes de que las fallas afecten el cultivo."}
          </p>
        </div>
        {" "}
        <div className="bl5-hero-badges" style={s("position:absolute;left:5%;right:34px;bottom:16px;display:flex;gap:14px;align-items:center;flex-wrap:wrap;")}>
          <button className="bh7" onClick={scrollToContact} style={s("background:#77CFC9;color:#002E2B;border:none;border-radius:28px;padding:16px 34px;font-family:'Sora',sans-serif;font-size:15.5px;font-weight:700;cursor:pointer;box-shadow:0 12px 30px -10px rgba(119,207,201,0.5);transition:transform 0.2s ease;")}>
            {"Agenda una demo"}
          </button>
          {" "}
          <button className="bh8" onClick={scrollToMetodo} style={s("display:inline-flex;align-items:center;gap:10px;background:rgba(255,255,255,0.08);color:#FFFFFF;border:1.5px solid rgba(255,255,255,0.5);border-radius:28px;padding:13px 24px;font-family:'Sora',sans-serif;font-size:14px;font-weight:600;cursor:pointer;transition:background 0.2s ease;")}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
              <path d="M7 4l13 8-13 8z"></path>
            </svg>
            {" ¿Quieres ver cómo medir? "}
          </button>
          {" "}
          <span style={s("flex:1 1 auto;")}></span>
          {" "}
          <a className="bh9" href="https://apps.apple.com" target="_blank" rel="noopener" aria-label="Descargar en App Store" style={s("display:inline-flex;align-items:center;gap:7px;background:rgba(0,20,18,0.5);border:1px solid rgba(255,255,255,0.22);border-radius:8px;padding:6px 10px;color:#FFFFFF;")}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.05 12.54c-.03-2.89 2.36-4.27 2.47-4.34-1.35-1.97-3.44-2.24-4.18-2.27-1.78-.18-3.47 1.05-4.37 1.05-.9 0-2.29-1.02-3.77-1-1.94.03-3.72 1.13-4.72 2.86-2.01 3.49-.51 8.66 1.45 11.49.96 1.39 2.1 2.94 3.6 2.88 1.45-.06 1.99-.93 3.74-.93s2.24.93 3.77.9c1.56-.03 2.54-1.41 3.49-2.8 1.1-1.61 1.55-3.17 1.58-3.25-.04-.02-3.03-1.16-3.06-4.59zM14.17 4.05c.8-.97 1.34-2.32 1.19-3.66-1.15.05-2.55.77-3.38 1.74-.74.85-1.39 2.22-1.22 3.53 1.29.1 2.6-.65 3.41-1.61z"></path>
            </svg>
            {" "}
            <span style={s("display:flex;flex-direction:column;line-height:1.15;text-align:left;")}>
              <span style={s("font-family:'IBM Plex Sans',sans-serif;font-size:7.5px;opacity:0.8;")}>
                {"Descárgala en el"}
              </span>
              <span style={s("font-family:'Sora',sans-serif;font-size:10.5px;font-weight:700;")}>
                {"App Store"}
              </span>
            </span>
          </a>
          {" "}
          <a className="bh10" href="https://play.google.com" target="_blank" rel="noopener" aria-label="Descargar en Google Play" style={s("display:inline-flex;align-items:center;gap:7px;background:rgba(0,20,18,0.5);border:1px solid rgba(255,255,255,0.22);border-radius:8px;padding:6px 10px;color:#FFFFFF;")}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3.6 1.8c-.35.37-.55.94-.55 1.68v17.07c0 .74.2 1.31.55 1.68l.09.08 9.56-9.56v-.22L3.69 1.72l-.09.08z"></path>
              <path d="M16.83 15.93l-3.58-3.18v-.22l3.58-3.18.08.05 3.78 2.15c1.08.61 1.08 1.61 0 2.23l-3.78 2.15-.08 0z" opacity="0.85"></path>
              <path d="M16.91 15.88L13.25 12.5 3.6 22.23c.36.38 .95.42 1.62.04l11.69-6.39z" opacity="0.7"></path>
              <path d="M16.91 9.12L5.22 2.73c-.67-.38-1.26-.34-1.62.04l9.65 9.73 3.66-3.38z" opacity="0.6"></path>
            </svg>
            {" "}
            <span style={s("display:flex;flex-direction:column;line-height:1.15;text-align:left;")}>
              <span style={s("font-family:'IBM Plex Sans',sans-serif;font-size:7.5px;opacity:0.8;")}>
                {"Disponible en"}
              </span>
              <span style={s("font-family:'Sora',sans-serif;font-size:10.5px;font-weight:700;")}>
                {"Google Play"}
              </span>
            </span>
          </a>
        </div>
      </div>
      {" "}
      <div onClick={scrollToMetodo} style={s("position:relative;display:flex;flex-direction:column;align-items:center;gap:8px;margin-top:22px;cursor:pointer;")}>
        <span style={s("font-family:'IBM Plex Sans',sans-serif;font-size:11px;font-weight:700;letter-spacing:0.14em;color:#FFFFFF;background:rgba(4,42,38,0.6);border-radius:14px;padding:5px 12px;")}>
          {"DESCUBRE CÓMO FUNCIONA"}
        </span>
        {" "}
        <span style={s("display:flex;align-items:center;justify-content:center;width:38px;height:38px;border-radius:50%;border:1.5px solid rgba(119,207,201,0.7);background:rgba(4,42,38,0.6);")}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#77CFC9" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 9l6 6 6-6"></path>
          </svg>
        </span>
      </div>
      {" "}
      <div style={s("position:absolute;left:0;right:0;bottom:0;height:130px;background:linear-gradient(180deg,rgba(255,255,255,0) 0%,#FFFFFF 100%);pointer-events:none;")}></div>
    </section>
  );
}
