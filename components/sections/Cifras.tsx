import React from "react";
import { s } from "@/lib/css";

export default function Cifras(p: any) {
  const { d } = p;
  const { haNode, usersNode, countriesNode } = p;
  return (
    <section id="cifras" style={s("padding:70px 5% 30px;background:#FFFFFF;")}>
      <div style={s("max-width:1100px;margin:0 auto;display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:34px;text-align:center;")}>
        <div>
          <div style={s("font-family:'IBM Plex Sans',sans-serif;font-size:clamp(38px,4vw,54px);font-weight:700;color:#002E2B;")}>
            {"+"}{haNode}
          </div>
          {" "}
          <p style={s("font-family:'IBM Plex Sans',sans-serif;font-size:13.5px;font-weight:600;letter-spacing:0.06em;color:rgba(0,46,43,0.6);margin:8px 0 0;")}>
            {"HECTÁREAS GESTIONADAS"}
          </p>
        </div>
        {" "}
        <div>
          <div style={s("font-family:'IBM Plex Sans',sans-serif;font-size:clamp(38px,4vw,54px);font-weight:700;color:#002E2B;")}>
            {"+"}{usersNode}
          </div>
          {" "}
          <p style={s("font-family:'IBM Plex Sans',sans-serif;font-size:13.5px;font-weight:600;letter-spacing:0.06em;color:rgba(0,46,43,0.6);margin:8px 0 0;")}>
            {"USUARIOS ACTIVOS"}
          </p>
        </div>
        {" "}
        <div>
          <div style={s("display:flex;align-items:center;justify-content:center;gap:14px;")}>
            <div style={s("font-family:'IBM Plex Sans',sans-serif;font-size:clamp(38px,4vw,54px);font-weight:700;color:#002E2B;")}>
              {countriesNode}
            </div>
            {" "}
            <div style={s("display:flex;gap:8px;align-items:center;")}>
              <svg width="30" height="20" viewBox="0 0 30 20" style={s("border-radius:3px;box-shadow:0 1px 3px rgba(0,20,18,0.15);")}>
                <rect width="30" height="10" fill="#f2f0ec"></rect>
                <rect y="10" width="30" height="10" fill="#cf8b8f"></rect>
                <rect width="10" height="10" fill="#7d94b5"></rect>
                <path d="M5 2.2l0.9 2.1 2.3 0.1-1.8 1.5 0.7 2.2L5 6.8 2.9 8.1l0.7-2.2-1.8-1.5 2.3-0.1z" fill="#f7f6f3"></path>
              </svg>
              {" "}
              <svg width="30" height="20" viewBox="0 0 30 20" style={s("border-radius:3px;box-shadow:0 1px 3px rgba(0,20,18,0.15);")}>
                <rect width="10" height="20" fill="#cf8b8f"></rect>
                <rect x="10" width="10" height="20" fill="#f2f0ec"></rect>
                <rect x="20" width="10" height="20" fill="#cf8b8f"></rect>
              </svg>
              {" "}
              <svg width="30" height="20" viewBox="0 0 30 20" style={s("border-radius:3px;box-shadow:0 1px 3px rgba(0,20,18,0.15);")}>
                <rect width="10" height="20" fill="#8fb59a"></rect>
                <rect x="10" width="10" height="20" fill="#f2f0ec"></rect>
                <rect x="20" width="10" height="20" fill="#cf8b8f"></rect>
                <circle cx="15" cy="10" r="2.6" fill="#b0a48a"></circle>
              </svg>
            </div>
          </div>
          {" "}
          <p style={s("font-family:'IBM Plex Sans',sans-serif;font-size:13.5px;font-weight:600;letter-spacing:0.06em;color:rgba(0,46,43,0.6);margin:8px 0 0;")}>
            {"PAÍSES · CHILE, PERÚ Y MÉXICO"}
          </p>
        </div>
      </div>
    </section>
  );
}
