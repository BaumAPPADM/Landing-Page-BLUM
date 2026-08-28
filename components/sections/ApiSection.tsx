import React from "react";
import { s } from "@/lib/css";
import RichText from "@/components/RichText";

export default function ApiSection(p: any) {
  const { d } = p;
  const { scrollToContact } = p;
  return (
    <section style={s("padding:0 5% 70px;background:#FFFFFF;")}>
      <div style={s("max-width:1100px;margin:0 auto;background:#F4FAF9;border:1px solid rgba(0,46,43,0.08);border-radius:22px;padding:34px 38px;display:flex;align-items:center;gap:26px;flex-wrap:wrap;")}>
        <span style={s("flex:0 0 auto;display:flex;align-items:center;justify-content:center;width:52px;height:52px;border-radius:14px;background:rgba(119,207,201,0.25);")}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0d6b64" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 18l6-6-6-6"></path>
            <path d="M8 6l-6 6 6 6"></path>
          </svg>
        </span>
        {" "}
        <div style={s("flex:1 1 420px;")}>
          <h3 style={s("font-size:18px;font-weight:700;color:#002E2B;margin:0 0 6px;")}>
            {d?.apiTitle || "API abierta y sin costo"}
          </h3>
          {" "}
          <p style={s("font-family:'IBM Plex Sans',sans-serif;font-size:14.5px;line-height:1.6;color:rgba(0,46,43,0.72);margin:0;")}>
            {d?.apiText?.length ? (
              <RichText value={d?.apiText} />
            ) : (
              <>
              {"Blum lee datos de las herramientas que ya usas — programadores de riego, sensores, NDVI. La API es abierta y sin costo; solo se cotiza si tu integración requiere un desarrollo a medida."}
              </>
            )}
          </p>
        </div>
        {" "}
        <button className="bh16" onClick={scrollToContact} style={s("flex:0 0 auto;background:transparent;color:#002E2B;border:1.5px solid #002E2B;border-radius:26px;padding:12px 24px;font-family:'Sora',sans-serif;font-size:13.5px;font-weight:700;cursor:pointer;")}>
          {d?.apiCta || "Consultar integración"}
        </button>
      </div>
    </section>
  );
}
