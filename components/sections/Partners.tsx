import React from "react";
import { s } from "@/lib/css";

export default function Partners(p: any) {
  const { d } = p;
  const { logosRow } = p;
  return (
    <section style={s("padding:50px 0 56px;background:#F4FAF9;border-top:1px solid rgba(0,46,43,0.06);border-bottom:1px solid rgba(0,46,43,0.06);overflow:hidden;")}>
      <p style={s("text-align:center;font-family:'IBM Plex Sans',sans-serif;font-size:12px;font-weight:700;letter-spacing:0.1em;color:#0d6b64;margin:0 0 28px;")}>
        {"CONFÍAN EN BLUM"}
      </p>
      {" "}
      <div style={s("display:flex;width:max-content;gap:56px;align-items:center;animation:blumMarquee 32s linear infinite;")}>
        {logosRow}
      </div>
    </section>
  );
}
