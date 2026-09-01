import React from "react";
import { s } from "@/lib/css";
import RichText from "@/components/RichText";

export default function Franja(p: any) {
  const { d } = p;
  const { scrollToContact } = p;
  return (
    <section style={s("padding:44px 5%;background:#77CFC9;")}>
      <div style={s("max-width:1100px;margin:0 auto;display:flex;align-items:center;justify-content:center;gap:28px;flex-wrap:wrap;")}>
        <span style={s("flex:0 0 auto;display:flex;align-items:center;justify-content:center;width:58px;height:58px;border-radius:50%;background:#002E2B;")}>
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#77CFC9" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
            <path d="M1.42 9a16 16 0 0 1 21.16 0"></path>
            <path d="M5 12.55a11 11 0 0 1 14.08 0"></path>
            <path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path>
            <circle cx="12" cy="20" r="1" fill="#77CFC9"></circle>
            <path d="M2 2l20 20"></path>
          </svg>
        </span>
        {" "}
        <p style={s("flex:1 1 460px;max-width:700px;font-family:'Sora',sans-serif;font-size:clamp(19px,2vw,25px);font-weight:700;line-height:1.35;color:#002E2B;margin:0;text-wrap:balance;text-align:center;")}>
          {d?.franjaText?.length ? (
            <RichText value={d?.franjaText} />
          ) : (
            <>
            {"Funciona 100% offline. El operador registra en terreno, la app sincroniza y tus datos quedan en la nube."}
            </>
          )}
        </p>
        {" "}
        <button className="bh11" onClick={scrollToContact} style={s("flex:0 0 auto;background:#002E2B;color:#FFFFFF;border:none;border-radius:26px;padding:14px 28px;font-family:'Sora',sans-serif;font-size:14.5px;font-weight:700;cursor:pointer;")}>
          {d?.franjaCta || "Solicitar demo"}
        </button>
      </div>
    </section>
  );
}
