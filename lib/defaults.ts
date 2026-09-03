/**
 * The landing's original content, kept as the fallback when Sanity has no
 * document yet — and reused verbatim by scripts/seed.mjs to populate Sanity.
 * Editing content should happen in Sanity, not here.
 */
export const defaults = {
  navLinks: [
    { label: 'Qué hacemos', href: '#metodo' },
    { label: 'Planes', href: '#planes' },
    { label: 'Cómo empezar', href: '#empezar' },
    { label: 'Contacto', href: '#contacto' },
  ],
  ctaDemoLabel: 'Solicitar demo',
  loginLabel: 'Iniciar sesión',
  loginUrl: 'https://app.baumsystem.com',
  appScreens: [
    { title: 'Mapa', desc: 'Ve tus sectores, válvulas y equipos sobre el mapa real del campo. Detecta anomalías sin caminar el campo entero.', img: '/assets/mock-app-mapa.png', iconPath: 'M12 22s8-4.5 8-11.8A8 8 0 0 0 4 10.2C4 17.5 12 22 12 22z' },
    { title: 'Medir', desc: 'Registra caudal, presión y estado de cada equipo directo en terreno, con foto incluida. Funciona 100% offline.', img: '/assets/mock-app-medicion.png', iconPath: 'M12 8v4l3 3 M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z' },
    { title: 'Historial de activos', desc: 'Cada activo con su hoja de vida completa: mediciones, eventos y documentos, accesibles desde tu ubicación.', img: '/assets/mock-app-detalle.png', iconPath: 'M3 3v18h18 M7 14l4-4 3 3 5-6' },
    { title: 'Calendario', desc: 'Visitas, tareas y mantenciones programadas por día. Todo el trabajo del campo agendado y visible para el equipo.', img: '/assets/app-calendario.png', iconPath: 'M8 2v4 M16 2v4 M3 8h18 M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z' },
  ],
  webScreens: [
    { title: 'Mapa', highlight: 'Mirada visual real', desc: 'de los equipos, sectores, válvulas y activos del riego.', img: '/assets/web-mapa.png', iconPath: 'M12 22s8-4.5 8-11.8A8 8 0 0 0 4 10.2C4 17.5 12 22 12 22z' },
    { title: 'Activos', highlight: 'Inventario completo', desc: 'de marcas, modelos y especificaciones de tus equipos.', img: '/assets/web-sectores.png', iconPath: 'M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z' },
    { title: 'Timeline', highlight: 'Trazabilidad total', desc: 'de mediciones, eventos y trabajo de tu equipo en terreno.', img: '/assets/web-dash-eventos.png', iconPath: 'M12 8v4l3 3 M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z' },
    { title: 'Plan de Riego', highlight: 'Compara real vs teórico', desc: 'en base a precipitaciones reales y datos del sistema.', img: '/assets/web-plan-riego.png', iconPath: 'M3 3v18h18 M7 14l4-4 3 3 5-6' },
    { title: 'Dashboard', highlight: 'Alertas en tiempo real', desc: 'para tomar decisiones rápidas y revisar la operación.', img: '/assets/web-dash-mediciones.png', iconPath: 'M13 2 3 14h8l-1 8 10-12h-8l1-8z' },
  ],
  plans: [
    { segment: 'Productor pequeño', range: '1 – 99 ha', desc: 'Para predios y campos en crecimiento.', priceUF: '0,7 UF', priceUSD: '$25', unitUF: '/ ha / año', unitUSD: 'USD / ha / año', exUF: 'Ej. 50 ha → 35 UF/año', exUSD: 'Ej. 50 ha → $1.250 USD/año', highlight: false, cta: 'Solicitar acceso', features: ['Todas las funcionalidades incluidas', 'Usuarios ilimitados', 'Soporte remoto'] },
    { segment: 'Productor mediano', range: '100 – 299 ha', desc: 'Para operaciones en pleno desarrollo.', priceUF: '0,42 UF', priceUSD: '$15', unitUF: '/ ha / año', unitUSD: 'USD / ha / año', exUF: 'Ej. 200 ha → 84 UF/año', exUSD: 'Ej. 200 ha → $3.000 USD/año', highlight: false, cta: 'Solicitar acceso', features: ['Todas las funcionalidades incluidas', 'Usuarios ilimitados', 'Soporte prioritario', 'Onboarding asistido'] },
    { segment: 'Productor grande', range: '300 – 999 ha', desc: 'Para operaciones consolidadas.', priceUF: '0,33 UF', priceUSD: '$12', unitUF: '/ ha / año', unitUSD: 'USD / ha / año', exUF: 'Ej. 500 ha → 165 UF/año', exUSD: 'Ej. 500 ha → $6.000 USD/año', highlight: true, cta: 'Solicitar acceso', features: ['Todas las funcionalidades incluidas', 'Usuarios ilimitados', 'Soporte prioritario', 'Onboarding asistido'] },
    { segment: 'Productor multicampo', range: '1.000+ ha', desc: 'Para grandes operaciones multicampo.', priceUF: '0,25 UF', priceUSD: '$9,5', unitUF: '/ ha / año', unitUSD: 'USD / ha / año', exUF: 'Ej. 2.000 ha → 500 UF/año', exUSD: 'Ej. 2.000 ha → $19.000 USD/año', highlight: false, cta: 'Contactar ventas', features: ['Todas las funcionalidades incluidas', 'Usuarios ilimitados', 'Account manager dedicado', 'SLA garantizado'] },
  ],
  partnersLogos: [
    { img: '/assets/logo-garces-clean.png', alt: 'Garcés', height: 78 },
    { img: '/assets/logo-frutexsa-clean.png', alt: 'Frutexsa', height: 78 },
    { img: '/assets/logo-bafar-clean.png', alt: 'Bafar', height: 96 },
    { img: '/assets/logo-ddc-clean.png', alt: 'DDC', height: 110 },
    { img: '/assets/logo-leice-clean.png', alt: 'Leice', height: 78 },
    { img: '/assets/logo-principio-clean.png', alt: 'Principio', height: 56 },
    { img: '/assets/logo-agrosocoin-clean.png', alt: 'Agrosocoin', height: 56 },
    { img: '/assets/logo-exser-clean.png', alt: 'Exser', height: 56 },
    { img: '/assets/logo-aillin-clean.png', alt: 'Aillin', height: 56 },
  ],
  cifrasItems: [
    { target: 12000, prefix: '+', label: 'HECTÁREAS GESTIONADAS' },
    { target: 400, prefix: '+', label: 'USUARIOS ACTIVOS' },
    { target: 3, prefix: '', label: 'PAÍSES · CHILE, PERÚ Y MÉXICO' },
  ],
};

export type Defaults = typeof defaults;
