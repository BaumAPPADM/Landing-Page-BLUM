import React from "react";
import { s } from "@/lib/css";
import { urlFor } from "@/sanity/image";
import RichText from "@/components/RichText";

export default function Empezar(p: any) {
  const { d } = p;
  return (
    <section id="empezar" style={s("padding:90px 5%;background:#F4FAF9;")}>
      <div style={s("max-width:1100px;margin:0 auto;")}>
        <div style={s("text-align:center;margin-bottom:44px;")}>
          <h2 style={s("font-size:clamp(26px,2.6vw,36px);font-weight:700;margin:0 0 10px;")}>
            {d?.empezarTitle || "Dos formas de empezar"}
          </h2>
          {" "}
          <p style={s("font-family:'IBM Plex Sans',sans-serif;font-size:15px;line-height:1.6;color:rgba(0,46,43,0.65);margin:0;")}>
            {d?.empezarSubtitle || "Sin transformar tu red de riego existente. Elige la que mejor se adapte a tu equipo y operación."}
          </p>
        </div>
        {" "}
        <div style={s("display:grid;grid-template-columns:repeat(auto-fit,minmax(340px,1fr));gap:26px;align-items:stretch;")}>
          <div style={s("background:#FFFFFF;border:1px solid rgba(0,46,43,0.08);border-radius:22px;padding:40px 36px;display:flex;flex-direction:column;")}>
            <span style={s("display:inline-flex;align-items:center;justify-content:center;width:46px;height:46px;border-radius:12px;background:rgba(119,207,201,0.25);margin-bottom:22px;")}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0d6b64" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="3"></circle>
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33h.01a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51h.01a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82v.01a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
              </svg>
            </span>
            {" "}
            <h3 style={s("font-size:21px;font-weight:700;margin:0 0 12px;")}>
              {d?.empezarCards?.[0]?.title || "Implementa BLUM tú mismo"}
            </h3>
            {" "}
            <p style={s("font-family:'IBM Plex Sans',sans-serif;font-size:14.5px;line-height:1.65;color:rgba(0,46,43,0.72);margin:0 0 22px;")}>
              {d?.empezarCards?.[0]?.desc?.length ? (
                <RichText value={d?.empezarCards?.[0]?.desc} />
              ) : (
                <>
                {"BLUM está diseñado para que quienes conocen su sistema de riego puedan "}
                <strong style={s("color:#002E2B;")}>
                  {"implementarlo de forma autónoma"}
                </strong>
                {", con un "}
                <strong style={s("color:#002E2B;")}>
                  {"proceso guiado y amigable"}
                </strong>
                {"."}
                </>
              )}
            </p>
            {" "}
            <div style={s("display:flex;flex-direction:column;gap:12px;")}>
              <div style={s("display:flex;gap:10px;align-items:flex-start;")}>
                <span style={s("flex:0 0 auto;width:18px;height:18px;border-radius:50%;background:#77CFC9;color:#002E2B;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;margin-top:2px;")}>
                  {"✓"}
                </span>
                <span style={s("font-family:'IBM Plex Sans',sans-serif;font-size:14px;line-height:1.55;color:rgba(0,46,43,0.78);")}>
                  {d?.empezarCards?.[0]?.features?.[0] || "Requiere conocimiento básico de tu sistema de riego"}
                </span>
              </div>
              {" "}
              <div style={s("display:flex;gap:10px;align-items:flex-start;")}>
                <span style={s("flex:0 0 auto;width:18px;height:18px;border-radius:50%;background:#77CFC9;color:#002E2B;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;margin-top:2px;")}>
                  {"✓"}
                </span>
                <span style={s("font-family:'IBM Plex Sans',sans-serif;font-size:14px;line-height:1.55;color:rgba(0,46,43,0.78);")}>
                  {d?.empezarCards?.[0]?.features?.[1] || "Proceso guiado paso a paso, sin instalaciones técnicas"}
                </span>
              </div>
              {" "}
              <div style={s("display:flex;gap:10px;align-items:flex-start;")}>
                <span style={s("flex:0 0 auto;width:18px;height:18px;border-radius:50%;background:#77CFC9;color:#002E2B;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;margin-top:2px;")}>
                  {"✓"}
                </span>
                <span style={s("font-family:'IBM Plex Sans',sans-serif;font-size:14px;line-height:1.55;color:rgba(0,46,43,0.78);")}>
                  {d?.empezarCards?.[0]?.features?.[2] || "Listo en menos de 30 minutos si tienes tu red clara"}
                </span>
              </div>
            </div>
          </div>
          {" "}
          <div style={s("background:#002E2B;border-radius:22px;padding:40px 36px;display:flex;flex-direction:column;")}>
            <span style={s("display:inline-flex;align-items:center;justify-content:center;width:46px;height:46px;border-radius:12px;background:rgba(119,207,201,0.18);margin-bottom:22px;")}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#77CFC9" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </span>
            {" "}
            <h3 style={s("font-size:21px;font-weight:700;color:#FFFFFF;margin:0 0 12px;")}>
              {d?.empezarCards?.[1]?.title || "A través de nuestros Partners"}
            </h3>
            {" "}
            <p style={s("font-family:'IBM Plex Sans',sans-serif;font-size:14.5px;line-height:1.65;color:rgba(255,255,255,0.78);margin:0 0 22px;")}>
              {d?.empezarCards?.[1]?.desc?.length ? (
                <RichText value={d?.empezarCards?.[1]?.desc} strongColor="#FFFFFF" />
              ) : (
                <>
                {"Si necesitas apoyo en terreno, nuestros partners certificados te acompañan en la implementación, configuración inicial y capacitación de tu equipo."}
                </>
              )}
            </p>
            {" "}
            <div style={s("margin-top:auto;background:rgba(255,255,255,0.06);border-radius:16px;padding:18px 20px;")}>
              <div style={s("display:flex;gap:14px;align-items:center;margin-bottom:14px;")}>
                <span style={s("display:flex;align-items:center;justify-content:center;width:46px;height:46px;border-radius:12px;background:rgba(255,255,255,0.08);flex:0 0 auto;")}>
                  <img src="/assets/logo-baumsystem-blanco.png" style={s("width:38px;height:38px;object-fit:contain;")} alt="Baum System" />
                </span>
                {" "}
                <div>
                  <p style={s("font-family:'Sora',sans-serif;font-size:14.5px;font-weight:700;color:#FFFFFF;margin:0;")}>
                    {d?.partnerName || "Baum System"}
                  </p>
                  {" "}
                  <p style={s("font-family:'IBM Plex Sans',sans-serif;font-size:12.5px;color:#77CFC9;margin:2px 0 0;")}>
                    {d?.partnerRole || "Partner certificado · Implementación y consultoría de riego"}
                  </p>
                </div>
              </div>
              {" "}
              <div style={s("display:flex;justify-content:flex-end;")}>
                <a className="bh16" href="https://www.baumsystem.com" target="_blank" rel="noopener" style={s("display:inline-flex;align-items:center;gap:6px;background:#77CFC9;color:#002E2B;border-radius:18px;padding:9px 18px;font-family:'Sora',sans-serif;font-size:12.5px;font-weight:700;")}>
                  {d?.partnerCtaLabel || "Contactar a Baum System ↗"}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
