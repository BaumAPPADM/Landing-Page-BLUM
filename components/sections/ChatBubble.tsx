import React from "react";
import { s } from "@/lib/css";
import { urlFor } from "@/sanity/image";

export default function ChatBubble(p: any) {
  const { d } = p;
  return (
    <a className="bl5-wsp-fab bh6" href={d?.chatUrl || "https://wa.link/l88bq2"} target="_blank" rel="noopener" style={s("position:fixed;bottom:24px;right:24px;z-index:60;display:flex;align-items:center;gap:12px;background:#002E2B;border:1px solid rgba(119,207,201,0.5);border-radius:34px;padding:10px 20px 10px 10px;box-shadow:0 14px 34px -10px rgba(0,20,18,0.5);")}>
      <span style={s("display:flex;align-items:center;justify-content:center;width:42px;height:42px;border-radius:50%;background:#77CFC9;")}>
        <img src={urlFor(d?.chatIcon) || "/assets/isotipo-nave.png"} style={s("width:22px;")} alt="" />
      </span>
      {" "}
      <span style={s("display:flex;flex-direction:column;line-height:1.25;")}>
        <span style={s("font-family:'Sora',sans-serif;font-size:13.5px;font-weight:700;color:#FFFFFF;")}>
          {d?.chatTitle || "¿Tienes dudas?"}
        </span>
        {" "}
        <span style={s("font-family:'IBM Plex Sans',sans-serif;font-size:11.5px;color:#77CFC9;")}>
          {d?.chatSubtitle || "Contáctanos"}
        </span>
      </span>
    </a>
  );
}
