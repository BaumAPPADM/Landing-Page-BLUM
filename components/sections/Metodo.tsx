import React from "react";
import { s } from "@/lib/css";
import RichText from "@/components/RichText";

export default function Metodo(p: any) {
  const { d } = p;
  const { stageWatcher, stageOp, stageY } = p;
  return (
    <section id="metodo" style={s("position:relative;padding:100px 5%;background:#002E2B;overflow:hidden;")}>
      <img src="/assets/patron-topografico.png" style={s("position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:0.09;mix-blend-mode:screen;")} alt="" />
      {" "}
      <span style={s("font-family:'IBM Plex Sans',sans-serif;font-size:11px;font-weight:700;letter-spacing:0.1em;color:#77CFC9;")}>
        {d?.metodoEyebrow || "LA SOLUCIÓN · MÉTODO BLUM"}
      </span>
      <div style={s("position:relative;max-width:1150px;margin:0 auto;")}>
        <div style={s("text-align:center;margin-bottom:56px;")}>
          {" "}{stageWatcher}{" "}
        </div>
        {" "}
        <div style={s("display:flex;gap:8px;align-items:stretch;flex-wrap:wrap;margin-bottom:44px;")}>
          <div style={s("flex:1 1 280px;min-width:270px;background:rgba(119,207,201,0.14);border:1px solid rgba(119,207,201,0.35);border-radius:20px;padding:34px 30px;opacity:{{ stageOp }};transform:translateY({{ stageY }});transition:opacity 0.75s ease 0s,transform 0.75s ease 0s;")}>
            <span style={s("display:inline-flex;align-items:center;justify-content:center;width:44px;height:44px;border-radius:12px;background:#77CFC9;color:#002E2B;font-family:'IBM Plex Sans',sans-serif;font-size:15px;font-weight:700;margin-bottom:20px;")}>
              {d?.metodoStages?.[0]?.num || "01"}
            </span>
            {" "}
            <h3 style={s("font-size:20px;font-weight:700;color:#FFFFFF;margin:0 0 6px;")}>
              {d?.metodoStages?.[0]?.title || "Registrar"}
            </h3>
            {" "}
            <p style={s("font-family:'IBM Plex Sans',sans-serif;font-size:13px;font-weight:700;letter-spacing:0.05em;color:#77CFC9;margin:0 0 12px;")}>
              {d?.metodoStages?.[0]?.subtitle || "LA OPERACIÓN REAL"}
            </p>
            {" "}
            <p style={s("font-family:'IBM Plex Sans',sans-serif;font-size:14.5px;line-height:1.65;color:rgba(255,255,255,0.85);margin:0;")}>
              {d?.metodoStages?.[0]?.desc?.length ? (
                <RichText value={d?.metodoStages?.[0]?.desc} strongColor="#FFFFFF" />
              ) : (
                <>
                {"El equipo documenta "}
                <strong style={s("color:#FFFFFF;")}>
                  {"mediciones, fallas, fotografías y eventos desde el celular"}
                </strong>
                {". Cada registro queda asociado a una persona, fecha, ubicación y equipo, "}
                <strong style={s("color:#FFFFFF;")}>
                  {"incluso sin conexión"}
                </strong>
                {"."}
                </>
              )}
            </p>
          </div>
          {" "}
          <div className="bl5-stage-arrow" style={s("display:flex;align-items:center;justify-content:center;flex:0 0 34px;opacity:{{ stageOp }};transition:opacity 0.6s ease 0.4s;")}>
            <span style={s("display:flex;flex-direction:column;align-items:center;gap:5px;")}>
              <span style={s("width:5px;height:5px;border-radius:50%;background:rgba(119,207,201,0.5);")}></span>
              {" "}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#77CFC9" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"></path>
                <path d="M13 6l6 6-6 6"></path>
              </svg>
              {" "}
              <span style={s("width:5px;height:5px;border-radius:50%;background:rgba(119,207,201,0.5);")}></span>
            </span>
          </div>
          {" "}
          <div style={s("flex:1 1 280px;min-width:270px;background:rgba(119,207,201,0.14);border:1px solid rgba(119,207,201,0.35);border-radius:20px;padding:34px 30px;opacity:{{ stageOp }};transform:translateY({{ stageY }});transition:opacity 0.75s ease 0.7s,transform 0.75s ease 0.7s;")}>
            <span style={s("display:inline-flex;align-items:center;justify-content:center;width:44px;height:44px;border-radius:12px;background:#77CFC9;color:#002E2B;font-family:'IBM Plex Sans',sans-serif;font-size:15px;font-weight:700;margin-bottom:20px;")}>
              {d?.metodoStages?.[1]?.num || "02"}
            </span>
            {" "}
            <h3 style={s("font-size:20px;font-weight:700;color:#FFFFFF;margin:0 0 6px;")}>
              {d?.metodoStages?.[1]?.title || "Visibilizar"}
            </h3>
            {" "}
            <p style={s("font-family:'IBM Plex Sans',sans-serif;font-size:13px;font-weight:700;letter-spacing:0.05em;color:#77CFC9;margin:0 0 12px;")}>
              {d?.metodoStages?.[1]?.subtitle || "LO QUE REQUIERE ATENCIÓN"}
            </p>
            {" "}
            <p style={s("font-family:'IBM Plex Sans',sans-serif;font-size:14.5px;line-height:1.65;color:rgba(255,255,255,0.85);margin:0;")}>
              {d?.metodoStages?.[1]?.desc?.length ? (
                <RichText value={d?.metodoStages?.[1]?.desc} strongColor="#FFFFFF" />
              ) : (
                <>
                {"Blum organiza los registros en "}
                <strong style={s("color:#FFFFFF;")}>
                  {"historial, mapas, comparaciones y alertas"}
                </strong>
                {". No se limita a mostrar datos: "}
                <strong style={s("color:#FFFFFF;")}>
                  {"identifica desviaciones, tendencias y prioridades"}
                </strong>
                {"."}
                </>
              )}
            </p>
          </div>
          {" "}
          <div className="bl5-stage-arrow" style={s("display:flex;align-items:center;justify-content:center;flex:0 0 34px;opacity:{{ stageOp }};transition:opacity 0.6s ease 1.1s;")}>
            <span style={s("display:flex;flex-direction:column;align-items:center;gap:5px;")}>
              <span style={s("width:5px;height:5px;border-radius:50%;background:rgba(119,207,201,0.5);")}></span>
              {" "}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#77CFC9" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"></path>
                <path d="M13 6l6 6-6 6"></path>
              </svg>
              {" "}
              <span style={s("width:5px;height:5px;border-radius:50%;background:rgba(119,207,201,0.5);")}></span>
            </span>
          </div>
          {" "}
          <div style={s("flex:1 1 280px;min-width:270px;background:rgba(119,207,201,0.14);border:1px solid rgba(119,207,201,0.35);border-radius:20px;padding:34px 30px;opacity:{{ stageOp }};transform:translateY({{ stageY }});transition:opacity 0.75s ease 1.4s,transform 0.75s ease 1.4s;")}>
            <span style={s("display:inline-flex;align-items:center;justify-content:center;width:44px;height:44px;border-radius:12px;background:#77CFC9;color:#002E2B;font-family:'IBM Plex Sans',sans-serif;font-size:15px;font-weight:700;margin-bottom:20px;")}>
              {d?.metodoStages?.[2]?.num || "03"}
            </span>
            {" "}
            <h3 style={s("font-size:20px;font-weight:700;color:#FFFFFF;margin:0 0 6px;")}>
              {d?.metodoStages?.[2]?.title || "Actuar"}
            </h3>
            {" "}
            <p style={s("font-family:'IBM Plex Sans',sans-serif;font-size:13px;font-weight:700;letter-spacing:0.05em;color:#77CFC9;margin:0 0 12px;")}>
              {d?.metodoStages?.[2]?.subtitle || "ANTES DE QUE SEA TARDE"}
            </p>
            {" "}
            <p style={s("font-family:'IBM Plex Sans',sans-serif;font-size:14.5px;line-height:1.65;color:rgba(255,255,255,0.85);margin:0;")}>
              {d?.metodoStages?.[2]?.desc?.length ? (
                <RichText value={d?.metodoStages?.[2]?.desc} strongColor="#FFFFFF" />
              ) : (
                <>
                {"La información se convierte en "}
                <strong style={s("color:#FFFFFF;")}>
                  {"correcciones, tareas, mantenciones y decisiones concretas"}
                </strong>
                {", con "}
                <strong style={s("color:#FFFFFF;")}>
                  {"cumplimiento de tareas verificable"}
                </strong>
                {". No observar el problema: "}
                <strong style={s("color:#FFFFFF;")}>
                  {"intervenir a tiempo"}
                </strong>
                {" y dejar respaldo."}
                </>
              )}
            </p>
          </div>
        </div>
        {" "}
        <div id="resultados" style={s("margin-top:54px;")}>
          <p style={s("text-align: center; font-family: 'IBM Plex Sans',sans-serif; font-size: 11px; font-weight: 700; letter-spacing: 0.1em; color: rgba(255,255,255,0.55); margin: 0 0 20px; position: relative")}>
            {d?.metodoKpiLabel || "KPI DE TUS DATOS"}
          </p>
          {" "}
          <div style={s("display:grid;grid-template-columns:repeat(auto-fit,minmax(170px,1fr));gap:14px;")}>
            <div className="bl5-res" style={s("position:relative;background:rgba(255,255,255,0.05);border:1px solid rgba(119,207,201,0.22);border-radius:16px;padding:20px 16px;text-align:center;cursor:default;transition:background 0.25s ease,border-color 0.25s ease;")}>
              <span style={s("display:inline-flex;align-items:center;justify-content:center;width:42px;height:42px;border-radius:12px;background:rgba(119,207,201,0.16);margin-bottom:12px;")}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#77CFC9" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 8v4l3 3"></path>
                  <circle cx="12" cy="12" r="9"></circle>
                </svg>
              </span>
              {" "}
              <h3 style={s("font-size:14px;font-weight:700;color:#FFFFFF;margin:0;")}>
                {d?.metodoResultados?.[0]?.title || "Trazabilidad completa"}
              </h3>
              {" "}
              <p className="bl5-res-txt" style={s("font-family:'IBM Plex Sans',sans-serif;font-size:12.5px;line-height:1.55;color:rgba(255,255,255,0.75);margin:0;")}>
                {d?.metodoResultados?.[0]?.desc || "Qué ocurrió, cuándo, quién lo registró y en qué equipo."}
              </p>
            </div>
            {" "}
            <div className="bl5-res" style={s("position:relative;background:rgba(255,255,255,0.05);border:1px solid rgba(119,207,201,0.22);border-radius:16px;padding:20px 16px;text-align:center;cursor:default;transition:background 0.25s ease,border-color 0.25s ease;")}>
              <span style={s("display:inline-flex;align-items:center;justify-content:center;width:42px;height:42px;border-radius:12px;background:rgba(119,207,201,0.16);margin-bottom:12px;")}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#77CFC9" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 11l3 3L22 4"></path>
                  <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                </svg>
              </span>
              {" "}
              <h3 style={s("font-size:14px;font-weight:700;color:#FFFFFF;margin:0;")}>
                {"Cumplimiento de tareas"}
              </h3>
              {" "}
              <p className="bl5-res-txt" style={s("font-family:'IBM Plex Sans',sans-serif;font-size:12.5px;line-height:1.55;color:rgba(255,255,255,0.75);margin:0;")}>
                {"Metas vs. registro real: mediciones por bloque, días en resolver un evento y avance del plan de trabajo del operador."}
              </p>
            </div>
            {" "}
            <div className="bl5-res" style={s("position:relative;background:rgba(255,255,255,0.05);border:1px solid rgba(119,207,201,0.22);border-radius:16px;padding:20px 16px;text-align:center;cursor:default;transition:background 0.25s ease,border-color 0.25s ease;")}>
              <span style={s("display:inline-flex;align-items:center;justify-content:center;width:42px;height:42px;border-radius:12px;background:rgba(119,207,201,0.16);margin-bottom:12px;")}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#77CFC9" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M13 2 3 14h8l-1 8 10-12h-8l1-8z"></path>
                </svg>
              </span>
              {" "}
              <h3 style={s("font-size:14px;font-weight:700;color:#FFFFFF;margin:0;")}>
                {"Alertas y control a distancia"}
              </h3>
              {" "}
              <p className="bl5-res-txt" style={s("font-family:'IBM Plex Sans',sans-serif;font-size:12.5px;line-height:1.55;color:rgba(255,255,255,0.75);margin:0;")}>
                {"Desviaciones de presión y caudal visibles antes del daño — sabes qué pasa en cada campo sin estar presente."}
              </p>
            </div>
            {" "}
            <div className="bl5-res" style={s("position:relative;background:rgba(255,255,255,0.05);border:1px solid rgba(119,207,201,0.22);border-radius:16px;padding:20px 16px;text-align:center;cursor:default;transition:background 0.25s ease,border-color 0.25s ease;")}>
              <span style={s("display:inline-flex;align-items:center;justify-content:center;width:42px;height:42px;border-radius:12px;background:rgba(119,207,201,0.16);margin-bottom:12px;")}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#77CFC9" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                </svg>
              </span>
              {" "}
              <h3 style={s("font-size:14px;font-weight:700;color:#FFFFFF;margin:0;")}>
                {"Estándar de trabajo"}
              </h3>
              {" "}
              <p className="bl5-res-txt" style={s("font-family:'IBM Plex Sans',sans-serif;font-size:12.5px;line-height:1.55;color:rgba(255,255,255,0.75);margin:0;")}>
                {"Todo el equipo opera bajo una misma metodología, y el conocimiento queda en la empresa."}
              </p>
            </div>
            {" "}
            <div className="bl5-res" style={s("position:relative;background:rgba(255,255,255,0.05);border:1px solid rgba(119,207,201,0.22);border-radius:16px;padding:20px 16px;text-align:center;cursor:default;transition:background 0.25s ease,border-color 0.25s ease;")}>
              <span style={s("display:inline-flex;align-items:center;justify-content:center;width:42px;height:42px;border-radius:12px;background:rgba(119,207,201,0.16);margin-bottom:12px;")}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#77CFC9" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <path d="M14 2v6h6"></path>
                  <path d="M9 15l2 2 4-4"></path>
                </svg>
              </span>
              {" "}
              <h3 style={s("font-size:14px;font-weight:700;color:#FFFFFF;margin:0;")}>
                {d?.metodoResultados?.[4]?.title || "Respaldo de lo realizado"}
              </h3>
              {" "}
              <p className="bl5-res-txt" style={s("font-family:'IBM Plex Sans',sans-serif;font-size:12.5px;line-height:1.55;color:rgba(255,255,255,0.75);margin:0;")}>
                {d?.metodoResultados?.[4]?.desc || "Historial exportable de cada riego y mantención."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
