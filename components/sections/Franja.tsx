import React from "react";
import { s } from "@/lib/css";

export default function Franja(p: any) {
  const { d } = p;
  const { scrollToContact } = p;
  return (
    <section style={s("padding:34px 5%;background:#77CFC9;")}>
      <div style={s("max-width:1100px;margin:0 auto;display:flex;align-items:center;justify-content:center;gap:26px;flex-wrap:wrap;")}>
        <span style={s("flex:0 0 auto;display:flex;align-items:center;justify-content:center;width:48px;height:48px;border-radius:50%;background:#002E2B;")}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#77CFC9" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
            <path d="M1.42 9a16 16 0 0 1 21.16 0"></path>
            <path d="M5 12.55a11 11 0 0 1 14.08 0"></path>
            <path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path>
            <circle cx="12" cy="20" r="1" fill="#77CFC9"></circle>
            <path d="M2 2l20 20"></path>
          </svg>
        </span>
        {" "}
        <p style={s("flex:1 1 420px;max-width:640px;font-family:'IBM Plex Sans',sans-serif;font-size:15px;line-height:1.6;color:#002E2B;margin:0;")}>
          <strong>
            {"Funciona 100% offline."}
          </strong>
          {" El operador registra mediciones y eventos en terreno sin internet — los datos se suben solos cuando vuelve la señal."}
        </p>
        {" "}
        <button className="bh13" onClick={scrollToContact} style={s("flex:0 0 auto;background:#002E2B;color:#FFFFFF;border:none;border-radius:26px;padding:14px 28px;font-family:'Sora',sans-serif;font-size:14.5px;font-weight:700;cursor:pointer;")}>
          {"Solicitar demo"}
        </button>
      </div>
    </section>
  );
}
