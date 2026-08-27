import React from "react";
import { s } from "@/lib/css";

export default function Contacto(p: any) {
  const { d } = p;
  const { formSent, formNotSent, sendForm } = p;
  return (
    <section id="contacto" style={s("position:relative;padding:110px 5%;overflow:hidden;background-image:url(\"/assets/foto-dos-personas-campo.jpg\");background-size:cover;background-position:75% 50%;")}>
      <div style={s("position:absolute;inset:0;background:linear-gradient(90deg,rgba(0,46,43,0.94) 0%,rgba(0,46,43,0.75) 40%,rgba(0,46,43,0.4) 75%,rgba(0,46,43,0.25) 100%);")}></div>
      {" "}
      <img src="/assets/patron-topografico.png" style={s("position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:0.1;mix-blend-mode:screen;")} alt="" />
      {" "}
      <div style={s("position:relative;max-width:1100px;margin:0 auto;display:flex;gap:60px;flex-wrap:wrap;align-items:center;")}>
        <div style={s("flex:1 1 380px;min-width:280px;")}>
          <span style={s("font-family:'IBM Plex Sans',sans-serif;font-size:11px;font-weight:700;letter-spacing:0.1em;color:#77CFC9;")}>
            {"HABLEMOS DE TU CAMPO"}
          </span>
          {" "}
          <h2 style={s("font-size:clamp(28px,3vw,40px);font-weight:700;color:#FFFFFF;margin:14px 0 14px;text-wrap:balance;")}>
            {"Agenda una demo de 30 minutos."}
          </h2>
          {" "}
          <p style={s("font-family:'IBM Plex Sans',sans-serif;font-size:15.5px;line-height:1.65;color:rgba(255,255,255,0.85);margin:0 0 26px;max-width:420px;")}>
            {"Enterarse tarde cuesta caro. Completa tus datos y "}
            <strong style={s("color:#FFFFFF;")}>
              {"te contactamos en menos de 48 horas"}
            </strong>
            {". Te mostramos la plataforma con "}
            <strong style={s("color:#FFFFFF;")}>
              {"datos reales de riego, sin compromiso"}
            </strong>
            {"."}
          </p>
          {" "}
          <div style={s("display:flex;gap:12px;flex-wrap:wrap;")}>
            <a className="bh18" href="https://wa.link/l88bq2" target="_blank" rel="noopener" style={s("display:inline-flex;align-items:center;gap:8px;background:#77CFC9;color:#002E2B;border-radius:26px;padding:14px 26px;font-family:'Sora',sans-serif;font-size:14.5px;font-weight:700;")}>
              {"WhatsApp"}
            </a>
            {" "}
            <a className="bh19" href="mailto:b.sepulveda@blumapss.com" style={s("display:inline-flex;align-items:center;gap:8px;background:transparent;color:#FFFFFF;border:1.5px solid rgba(255,255,255,0.6);border-radius:26px;padding:13px 26px;font-family:'Sora',sans-serif;font-size:14.5px;font-weight:600;")}>
              {"b.sepulveda@blumapss.com"}
            </a>
          </div>
        </div>
        {" "}
        <div style={s("flex:1 1 420px;min-width:320px;background:#FFFFFF;border-radius:20px;padding:34px 32px;box-shadow:0 30px 70px -24px rgba(0,0,0,0.55);")}>
          {(formSent) ? (
            <>
              <p style={s("font-family:'IBM Plex Sans',sans-serif;font-size:15px;line-height:1.6;color:#0d6b64;font-weight:600;margin:0;text-align:center;padding:40px 0;")}>
                {"Gracias — nuestro equipo te contactará en menos de 48 horas."}
              </p>
            </>
          ) : null}
          {" "}
          {(formNotSent) ? (
            <>
              <div style={s("display:flex;flex-direction:column;gap:14px;")}>
                <input placeholder="Nombre" style={s("font-family:'IBM Plex Sans',sans-serif;font-size:14px;padding:13px 16px;border:1px solid rgba(0,46,43,0.2);border-radius:10px;outline:none;")} id="bl5-nombre" />
                {" "}
                <input placeholder="Empresa" style={s("font-family:'IBM Plex Sans',sans-serif;font-size:14px;padding:13px 16px;border:1px solid rgba(0,46,43,0.2);border-radius:10px;outline:none;")} id="bl5-empresa" />
                {" "}
                <input placeholder="Email" type="email" style={s("font-family:'IBM Plex Sans',sans-serif;font-size:14px;padding:13px 16px;border:1px solid rgba(0,46,43,0.2);border-radius:10px;outline:none;")} id="bl5-email" />
                {" "}
                <input placeholder="Hectáreas gestionadas" style={s("font-family:'IBM Plex Sans',sans-serif;font-size:14px;padding:13px 16px;border:1px solid rgba(0,46,43,0.2);border-radius:10px;outline:none;")} id="bl5-ha" />
                {" "}
                <textarea placeholder="Cuéntanos sobre tu campo" rows={4} style={s("font-family:'IBM Plex Sans',sans-serif;font-size:14px;padding:13px 16px;border:1px solid rgba(0,46,43,0.2);border-radius:10px;outline:none;resize:vertical;")}></textarea>
                {" "}
                <button className="bh20" onClick={sendForm} style={s("background:linear-gradient(90deg,#F64500 0%,#77CFC9 55%,#002E2B 100%);color:#FFFFFF;border:none;border-radius:26px;padding:15px;font-family:'Sora',sans-serif;font-size:15px;font-weight:700;cursor:pointer;transition:opacity 0.2s ease;")}>
                  {"Enviar solicitud"}
                </button>
              </div>
            </>
          ) : null}
        </div>
      </div>
    </section>
  );
}
