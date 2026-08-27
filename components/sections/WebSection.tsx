import React from "react";
import { s } from "@/lib/css";

export default function WebSection(p: any) {
  const { d } = p;
  const { webMenu, webPrev, webNext, webActiveLabel, webImageNode } = p;
  return (
    <section id="web" style={s("padding:70px 5% 100px;background:#FFFFFF;")}>
      <div style={s("max-width:1150px;margin:0 auto;")}>
        <div className="bl4-app-row" style={s("display:flex;gap:50px;align-items:center;justify-content:center;")}>
          <div style={s("flex:0 1 420px;min-width:300px;display:flex;flex-direction:column;gap:10px;")}>
            <p style={s("font-family:'IBM Plex Sans',sans-serif;font-size:12px;font-weight:700;letter-spacing:0.1em;color:rgba(0,46,43,0.5);margin:0;")}>
              {d?.webEyebrow || "02 · VISIBILIZAR Y ACTUAR — EN LA WEB"}
            </p>
            {" "}
            {(webMenu || []).map((w, i) => (
              <React.Fragment key={i}>
                <div onClick={w.select} style={s(w.cardStyle)}>
                  <div style={s("display:flex;gap:14px;align-items:flex-start;")}>
                    <div style={s(w.iconBoxStyle)}>
                      {w.icon}
                    </div>
                    {" "}
                    <div>
                      <h3 style={s("font-size:15.5px;font-weight:700;margin:0 0 4px;color:#002E2B;")}>
                        {w.title}
                      </h3>
                      {" "}
                      <p style={s("font-family:'IBM Plex Sans',sans-serif;font-size:13px;line-height:1.55;color:rgba(0,46,43,0.7);margin:0;")}>
                        <strong style={s("color:#0d6b64;")}>
                          {w.highlight}
                        </strong>
                        {" "}{w.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </React.Fragment>
            ))}
          </div>
          {" "}
          <div style={s("flex:0 1 620px;min-width:340px;")}>
            {" "}{webImageNode}{" "}
            <div style={s("display:flex;align-items:center;justify-content:center;gap:16px;margin-top:18px;")}>
              <button className="bh14" onClick={webPrev} aria-label="Módulo anterior" style={s("display:flex;align-items:center;justify-content:center;width:40px;height:40px;border-radius:50%;background:transparent;border:1.5px solid #002E2B;color:#002E2B;cursor:pointer;transition:background 0.2s ease;")}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 18l-6-6 6-6"></path>
                </svg>
              </button>
              {" "}
              <span style={s("font-family:'IBM Plex Sans',sans-serif;font-size:13px;font-weight:700;letter-spacing:0.06em;color:#0d6b64;min-width:130px;text-align:center;")}>
                {webActiveLabel}
              </span>
              {" "}
              <button className="bh15" onClick={webNext} aria-label="Módulo siguiente" style={s("display:flex;align-items:center;justify-content:center;width:40px;height:40px;border-radius:50%;background:transparent;border:1.5px solid #002E2B;color:#002E2B;cursor:pointer;transition:background 0.2s ease;")}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 6l6 6-6 6"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
