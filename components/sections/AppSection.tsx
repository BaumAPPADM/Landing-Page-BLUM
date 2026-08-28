import React from "react";
import { s } from "@/lib/css";
import RichText from "@/components/RichText";

export default function AppSection(p: any) {
  const { d } = p;
  const { appMenu, appPrev, appNext, appActiveLabel, appImageNode } = p;
  return (
    <section id="app" style={s("padding:100px 5% 70px;background:#FFFFFF;")}>
      <div style={s("max-width:1150px;margin:0 auto;")}>
        <div style={s("text-align:center;margin-bottom:60px;")}>
          <h2 style={s("font-size:clamp(26px,2.6vw,36px);font-weight:700;margin:14px auto 12px;max-width:600px;text-wrap:balance;")}>
            {d?.appFlowTitle || "Del manómetro a la decisión."}
          </h2>
          {" "}
          <p style={s("font-family:'IBM Plex Sans',sans-serif;font-size:15.5px;line-height:1.6;color:rgba(0,46,43,0.7);max-width:600px;margin:0 auto;")}>
            {d?.appFlowText?.length ? (
              <RichText value={d?.appFlowText} />
            ) : (
              <>
              {"El "}
              <b>
                {"blumer"}
              </b>
              {" — el encargado en terreno de registrar mediciones y eventos desde la app — "}
              <b>
                {"mide y registra desde el sector, incluso sin señal"}
              </b>
              {". El responsable ve el historial y la alerta en la web, y actúa antes de que el problema crezca."}
              </>
            )}
          </p>
        </div>
        {" "}
        <div style={s("display:flex;align-items:center;justify-content:center;gap:10px;flex-wrap:wrap;margin:-26px 0 54px;")}>
          <span style={s("display:inline-flex;align-items:center;gap:8px;font-family:'IBM Plex Sans',sans-serif;font-size:13px;font-weight:700;color:#002E2B;background:#F4FAF9;border:1px solid rgba(0,46,43,0.1);border-radius:18px;padding:9px 16px;")}>
            <span style={s("width:7px;height:7px;border-radius:50%;background:#77CFC9;")}></span>
            {d?.appFlowSteps?.[0] || "Manómetro en el bloque"}
          </span>
          {" "}
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0d6b64" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14"></path>
            <path d="M13 6l6 6-6 6"></path>
          </svg>
          {" "}
          <span style={s("display:inline-flex;align-items:center;gap:8px;font-family:'IBM Plex Sans',sans-serif;font-size:13px;font-weight:700;color:#002E2B;background:#F4FAF9;border:1px solid rgba(0,46,43,0.1);border-radius:18px;padding:9px 16px;")}>
            <span style={s("width:7px;height:7px;border-radius:50%;background:#77CFC9;")}></span>
            {d?.appFlowSteps?.[1] || "Registro en la app"}
          </span>
          {" "}
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0d6b64" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14"></path>
            <path d="M13 6l6 6-6 6"></path>
          </svg>
          {" "}
          <span style={s("display:inline-flex;align-items:center;gap:8px;font-family:'IBM Plex Sans',sans-serif;font-size:13px;font-weight:700;color:#002E2B;background:#F4FAF9;border:1px solid rgba(0,46,43,0.1);border-radius:18px;padding:9px 16px;")}>
            <span style={s("width:7px;height:7px;border-radius:50%;background:#F64500;")}></span>
            {d?.appFlowSteps?.[2] || "Historial y alerta"}
          </span>
          {" "}
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0d6b64" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14"></path>
            <path d="M13 6l6 6-6 6"></path>
          </svg>
          {" "}
          <span style={s("display:inline-flex;align-items:center;gap:8px;font-family:'IBM Plex Sans',sans-serif;font-size:13px;font-weight:700;color:#FFFFFF;background:#002E2B;border-radius:18px;padding:9px 16px;")}>
            {d?.appFlowSteps?.[3] || "Acción del responsable"}
          </span>
        </div>
        {" "}
        <div className="bl4-app-row" style={s("display:flex;gap:60px;align-items:center;justify-content:center;")}>
          <div style={s("flex:0 0 auto;")}>
            <div style={s("width:270px;background:#0b0f0e;border-radius:34px;padding:10px;box-shadow:0 30px 70px -22px rgba(0,20,18,0.45);")}>
              {" "}{appImageNode}{" "}
            </div>
            {" "}
            <div style={s("display:flex;align-items:center;justify-content:center;gap:16px;margin-top:18px;")}>
              <button className="bh12" onClick={appPrev} aria-label="Módulo anterior" style={s("display:flex;align-items:center;justify-content:center;width:40px;height:40px;border-radius:50%;background:transparent;border:1.5px solid #002E2B;color:#002E2B;cursor:pointer;transition:background 0.2s ease;")}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 18l-6-6 6-6"></path>
                </svg>
              </button>
              {" "}
              <span style={s("font-family:'IBM Plex Sans',sans-serif;font-size:13px;font-weight:700;letter-spacing:0.06em;color:#0d6b64;min-width:120px;text-align:center;")}>
                {appActiveLabel}
              </span>
              {" "}
              <button className="bh13" onClick={appNext} aria-label="Módulo siguiente" style={s("display:flex;align-items:center;justify-content:center;width:40px;height:40px;border-radius:50%;background:transparent;border:1.5px solid #002E2B;color:#002E2B;cursor:pointer;transition:background 0.2s ease;")}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 6l6 6-6 6"></path>
                </svg>
              </button>
            </div>
          </div>
          {" "}
          <div style={s("flex:0 1 520px;min-width:300px;display:flex;flex-direction:column;gap:14px;")}>
            <p style={s("font-family:'IBM Plex Sans',sans-serif;font-size:12px;font-weight:700;letter-spacing:0.1em;color:rgba(0,46,43,0.5);margin:0;")}>
              {d?.appEyebrow || "01 · REGISTRAR — EN TERRENO, DESDE LA APP"}
            </p>
            {" "}
            {(appMenu || []).map((m, i) => (
              <React.Fragment key={i}>
                <div onClick={m.select} style={s(m.cardStyle)}>
                  <div style={s("display:flex;gap:16px;align-items:flex-start;")}>
                    <div style={s(m.iconBoxStyle)}>
                      {m.icon}
                    </div>
                    {" "}
                    <div>
                      <h3 style={s("font-size:17px;font-weight:700;margin:0 0 6px;color:#002E2B;")}>
                        {m.title}
                      </h3>
                      {" "}
                      <p style={s("font-family:'IBM Plex Sans',sans-serif;font-size:14px;line-height:1.6;color:rgba(0,46,43,0.7);margin:0;")}>
                        {m.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
