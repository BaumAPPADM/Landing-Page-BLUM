import Script from 'next/script';

// Medición de tráfico. Los IDs viven en variables de entorno de Vercel, así
// que no hace falta tocar código para activarlos o cambiarlos:
//   NEXT_PUBLIC_GA_ID          → Google Analytics 4 (formato G-XXXXXXXXXX)
//   NEXT_PUBLIC_METRICOOL_HASH → hash del píxel de Metricool (Configuración → Web)
// Si una variable está vacía, ese script simplemente no se carga.

// Fallback: propiedad "BLUM web (blumapps.com)" creada el 8-sep-2026.
const GA_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-CJ4H8TMBTQ';
const METRICOOL_HASH = process.env.NEXT_PUBLIC_METRICOOL_HASH;

export default function Analytics() {
  return (
    <>
      {GA_ID ? (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />
          <Script id="ga4-init" strategy="afterInteractive">
            {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_ID}');`}
          </Script>
        </>
      ) : null}
      {METRICOOL_HASH ? (
        <Script id="metricool-tracker" strategy="afterInteractive">
          {`function loadScript(a){var b=document.getElementsByTagName("head")[0],c=document.createElement("script");c.type="text/javascript",c.src="https://tracker.metricool.com/resources/be.js",c.onreadystatechange=a,c.onload=a,b.appendChild(c)}
loadScript(function(){beTracker.t({hash:"${METRICOOL_HASH}"})});`}
        </Script>
      ) : null}
    </>
  );
}
