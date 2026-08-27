import React from "react";
import { s } from "@/lib/css";

export default function Planes(p: any) {
  const { d } = p;
  const { plans, setUF, setUSD, ufBtnBg, ufBtnColor, usdBtnBg, usdBtnColor, scrollToContact } = p;
  return (
    <section id="planes" style={s("padding:90px 5%;background:#FFFFFF;")}>
      <div style={s("max-width:1160px;margin:0 auto;")}>
        <div style={s("text-align:center;margin-bottom:36px;")}>
          <span style={s("font-family:'IBM Plex Sans',sans-serif;font-size:11px;font-weight:700;letter-spacing:0.1em;color:#0d6b64;")}>
            {"PRECIOS"}
          </span>
          {" "}
          <h2 style={s("font-size:clamp(28px,3vw,42px);font-weight:700;margin:14px auto 12px;max-width:600px;text-wrap:balance;")}>
            {"Planes para cada operación"}
          </h2>
          {" "}
          <p style={s("font-family:'IBM Plex Sans',sans-serif;font-size:15.5px;line-height:1.6;color:rgba(0,46,43,0.7);max-width:580px;margin:0 auto 8px;")}>
            {"Sin costos ocultos. Todos los planes incluyen las mismas funcionalidades base."}
          </p>
          {" "}
          <p style={s("font-family:'IBM Plex Sans',sans-serif;font-size:13.5px;line-height:1.6;color:rgba(0,46,43,0.55);max-width:580px;margin:0 auto;")}>
            {"El precio se calcula por la superficie total gestionada en la plataforma — multicampo y multiempresa."}
          </p>
        </div>
        {" "}
        <div style={s("display:flex;justify-content:center;margin-bottom:40px;")}>
          <div style={s("display:inline-flex;background:#F4FAF9;border:1px solid rgba(0,46,43,0.1);border-radius:20px;padding:4px;")}>
            <button onClick={setUSD} style={s("border:none;border-radius:16px;padding:8px 20px;font-family:'IBM Plex Sans',sans-serif;font-size:12.5px;font-weight:700;cursor:pointer;background:{{ usdBtnBg }};color:{{ usdBtnColor }};")}>
              {"USD · Internacional"}
            </button>
            {" "}
            <button onClick={setUF} style={s("border:none;border-radius:16px;padding:8px 20px;font-family:'IBM Plex Sans',sans-serif;font-size:12.5px;font-weight:700;cursor:pointer;background:{{ ufBtnBg }};color:{{ ufBtnColor }};")}>
              {"UF · Chile"}
            </button>
          </div>
        </div>
        {" "}
        <div style={s("display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:20px;align-items:stretch;")}>
          {(plans || []).map((plan, i) => (
            <React.Fragment key={i}>
              <div style={s("position:relative;background:#FFFFFF;border:{{ plan.border }};border-radius:22px;padding:38px 32px;box-shadow:0 4px 16px rgba(0,20,18,0.06);display:flex;flex-direction:column;")}>
                {(plan.highlight) ? (
                  <>
                    <span style={s("position:absolute;top:-14px;left:50%;transform:translateX(-50%);background:#002E2B;color:#FFFFFF;font-family:'IBM Plex Sans',sans-serif;font-size:12px;font-weight:700;border-radius:16px;padding:6px 16px;white-space:nowrap;")}>
                      {"Más elegido"}
                    </span>
                  </>
                ) : null}
                {" "}
                <span style={s("align-self:flex-start;display:inline-flex;align-items:center;gap:7px;font-family:'IBM Plex Sans',sans-serif;font-size:13px;font-weight:700;color:#0d6b64;background:rgba(119,207,201,0.18);border-radius:16px;padding:7px 15px;margin-bottom:20px;")}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#0d6b64" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22V9"></path>
                    <path d="M12 9C12 5 9 3 5 3c0 4 3 6 7 6z"></path>
                    <path d="M12 13c0-4 3-6 7-6 0 4-3 6-7 6z"></path>
                  </svg>
                  {" "}{plan.segment}{" "}
                </span>
                {" "}
                <div style={s("font-size:17px;font-weight:700;margin-bottom:4px;")}>
                  {plan.range}
                </div>
                {" "}
                <p style={s("font-family:'IBM Plex Sans',sans-serif;font-size:14px;color:rgba(0,46,43,0.65);margin:0 0 20px;")}>
                  {plan.desc}
                </p>
                {" "}
                <div style={s("display:flex;align-items:baseline;gap:8px;")}>
                  <span style={s("font-family:'Sora',sans-serif;font-size:40px;font-weight:700;white-space:nowrap;letter-spacing:-0.02em;")}>
                    {plan.price}
                  </span>
                  {" "}
                  <span style={s("font-family:'IBM Plex Sans',sans-serif;font-size:13.5px;color:rgba(0,46,43,0.6);")}>
                    {plan.unit}
                  </span>
                </div>
                {" "}
                <p style={s("font-family:'IBM Plex Sans',sans-serif;font-size:13px;color:rgba(0,46,43,0.55);margin:6px 0 24px;")}>
                  {plan.example}
                </p>
                {" "}
                <button className="bh17" onClick={scrollToContact} style={s("align-self:flex-start;background:{{ plan.btnBg }};color:{{ plan.btnColor }};border:{{ plan.btnBorder }};border-radius:26px;padding:14px 30px;font-family:'Sora',sans-serif;font-size:14.5px;font-weight:700;cursor:pointer;transition:opacity 0.2s ease,background 0.2s ease;")}>
                  {plan.cta}
                </button>
                {" "}
                <div style={s("display:flex;flex-direction:column;gap:12px;margin-top:28px;")}>
                  {(plan.features || []).map((f, i) => (
                    <React.Fragment key={i}>
                      <div style={s("display:flex;gap:10px;align-items:flex-start;")}>
                        <span style={s("flex:0 0 auto;width:19px;height:19px;border-radius:50%;background:#77CFC9;color:#002E2B;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;margin-top:1px;")}>
                          {"✓"}
                        </span>
                        {" "}
                        <span style={s("font-family:'IBM Plex Sans',sans-serif;font-size:14px;line-height:1.5;color:rgba(0,46,43,0.78);")}>
                          {f}
                        </span>
                      </div>
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
        {" "}
        <p style={s("text-align:center;font-family:'IBM Plex Sans',sans-serif;font-size:12.5px;color:rgba(0,46,43,0.5);margin:10px auto 0;max-width:640px;")}>
          {"* Blum se integra con la tecnología que ya usas (programadores de riego, sensores, NDVI). La conexión vía API tiene un costo adicional por cotizar, disponible desde el plan Productor mediano."}
        </p>
      </div>
    </section>
  );
}
