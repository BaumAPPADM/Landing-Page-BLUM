import React from "react";
import { s } from "@/lib/css";

export default function Problema(p: any) {
  const { d } = p;
  return (
    <section id="problema" style={s("padding:40px 5% 100px;background:#FFFFFF;")}>
      <div style={s("max-width:1050px;margin:0 auto;")}>
        <div style={s("text-align:center;margin-bottom:44px;")}>
          <span style={s("font-family:'IBM Plex Sans',sans-serif;font-size:11px;font-weight:700;letter-spacing:0.1em;color:#0d6b64;")}>
            {"EL PROBLEMA QUE RESOLVEMOS"}
          </span>
          {" "}
          <h2 style={s("font-size:clamp(28px,3vw,42px);line-height:1.2;font-weight:700;margin:14px auto 14px;max-width:680px;text-wrap:balance;")}>
            {"¿Sabes cómo se está regando realmente tu campo?"}
          </h2>
          {" "}
          <p style={s("font-family:'IBM Plex Sans',sans-serif;font-size:15.5px;line-height:1.7;color:rgba(0,46,43,0.72);max-width:620px;margin:0 auto;")}>
            {"El riego ocurre en terreno. Pero las decisiones se toman lejos de él. BLUM conecta ambos mundos con información real, trazable y disponible al instante."}
          </p>
        </div>
        {" "}
        <div style={s("display:flex;align-items:center;justify-content:center;gap:16px;margin-top:34px;")}>
          <span style={s("font-family:'IBM Plex Sans',sans-serif;font-size:13px;font-weight:700;letter-spacing:0.12em;color:rgba(0,46,43,0.65);")}>
            {"MEDIR"}
          </span>
          {" "}
          <svg width="44" height="12" viewBox="0 0 44 12">
            <path d="M2 6 H36" stroke="#77CFC9" strokeWidth="2" strokeDasharray="5 5" strokeLinecap="round">
              <animate attributeName="stroke-dashoffset" from="20" to="0" dur="1.4s" repeatCount="indefinite"></animate>
            </path>
            <path d="M34 1 L42 6 L34 11" fill="none" stroke="#77CFC9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
          </svg>
          {" "}
          <span style={s("display:inline-flex;align-items:center;gap:7px;background:#002E2B;border-radius:20px;padding:8px 16px;")}>
            <img src="/assets/isotipo-nave.png" style={s("width:14px;")} alt="" />
            <span style={s("font-family:'Sora',sans-serif;font-size:12.5px;font-weight:700;color:#FFFFFF;")}>
              {"BLUM"}
            </span>
          </span>
          {" "}
          <svg width="44" height="12" viewBox="0 0 44 12">
            <path d="M2 6 H36" stroke="#77CFC9" strokeWidth="2" strokeDasharray="5 5" strokeLinecap="round">
              <animate attributeName="stroke-dashoffset" from="20" to="0" dur="1.4s" repeatCount="indefinite"></animate>
            </path>
            <path d="M34 1 L42 6 L34 11" fill="none" stroke="#77CFC9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
          </svg>
          {" "}
          <span style={s("font-family:'IBM Plex Sans',sans-serif;font-size:13px;font-weight:700;letter-spacing:0.12em;color:rgba(0,46,43,0.65);")}>
            {"DECIDIR"}
          </span>
        </div>
        {" "}
        <p style={s("text-align:center;font-family:'Sora',sans-serif;font-size:clamp(20px,2.2vw,28px);font-weight:700;color:#002E2B;margin:36px auto 0;max-width:560px;text-wrap:balance;")}>
          {"Lo que pasa en terreno, llega a quién decide."}
        </p>
      </div>
    </section>
  );
}
