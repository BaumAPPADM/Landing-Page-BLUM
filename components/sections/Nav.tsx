import React from "react";
import { s } from "@/lib/css";
import { urlFor } from "@/sanity/image";
import { defaults } from "@/lib/defaults";

export default function Nav(p: any) {
  const { d } = p;
  const links = d?.navLinks?.length ? d.navLinks : defaults.navLinks;
  const { scrollToTop, scrollToContact } = p;
  return (
    <nav style={s("position:fixed;top:0;left:0;right:0;z-index:50;display:flex;align-items:center;justify-content:space-between;gap:14px;padding:14px 28px;background:rgba(21,62,57,0.78);backdrop-filter:blur(12px);")}>
      <img src={urlFor(d?.logo) || "/assets/logo-07.png"} onClick={scrollToTop} style={s("height:40px;cursor:pointer;")} alt="blum" />
      {" "}
      <div className="bl5-nav-links" style={s("display:flex;gap:24px;align-items:center;margin-left:auto;")}>
        {links.map((l: any, i: number) => (
          <React.Fragment key={i}>
            {i > 0 ? " " : null}
            <a className="bh0" href={l.href} style={s("font-size:13.5px;font-weight:600;color:#FFFFFF;")}>
              {l.label}
            </a>
          </React.Fragment>
        ))}
      </div>
      {" "}
      <div className="bl5-nav-cta" style={s("display:flex;align-items:center;gap:16px;")}>
        <button className="bh4" onClick={scrollToContact} style={s("background:#8FD8D2;color:#002E2B;border:none;border-radius:24px;padding:11px 24px;font-family:'Sora',sans-serif;font-size:13.5px;font-weight:700;cursor:pointer;")}>
          {d?.ctaDemoLabel || "Solicitar demo"}
        </button>
        {" "}
        <a className="bh5" href={d?.loginUrl || "https://app.baumsystem.com"} target="_blank" rel="noopener" style={s("display:inline-block;font-size:13.5px;font-weight:700;color:#FFFFFF;border:1.5px solid #77CFC9;border-radius:24px;padding:9px 22px;")}>
          {d?.loginLabel || "Iniciar sesión"}
        </a>
      </div>
    </nav>
  );
}
