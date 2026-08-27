/**
 * One-off import of the landing's original content into Sanity, images included.
 * Run with:  node scripts/seed.mjs
 * Auth comes from the Sanity CLI session on this machine (`sanity login`);
 * no token is ever written to the repo.
 */
import { createClient } from '@sanity/client';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';

const cfgPath = path.join(os.homedir(), '.config', 'sanity', 'config.json');
const token = JSON.parse(fs.readFileSync(cfgPath, 'utf8')).authToken;
if (!token) throw new Error('No hay sesión de Sanity. Corre: sanity login');

const client = createClient({
  projectId: 'rfkrnrkt',
  dataset: 'production',
  apiVersion: '2024-10-01',
  token,
  useCdn: false,
});

const cache = new Map();
async function img(file) {
  if (cache.has(file)) return cache.get(file);
  const p = path.join('public', 'assets', file);
  const asset = await client.assets.upload('image', fs.createReadStream(p), { filename: file });
  const ref = { _type: 'image', asset: { _type: 'reference', _ref: asset._id } };
  cache.set(file, ref);
  process.stdout.write(`  subida ${file}\n`);
  return ref;
}

let k = 0;
const key = () => `k${++k}`;
/** pt([['texto plano'], ['en negrita', 'strong']]) -> bloque de Portable Text */
const pt = (parts) => [{
  _type: 'block', _key: key(), style: 'normal', markDefs: [],
  children: parts.map(([text, mark]) => ({
    _type: 'span', _key: key(), text, marks: mark ? [mark] : [],
  })),
}];
const arr = (items) => items.map((o) => ({ _key: key(), ...o }));

const doc = {
  _id: 'landing',
  _type: 'landing',

  logo: await img('logo-07.png'),
  navLinks: arr([
    { label: 'Qué hacemos', href: '#metodo' },
    { label: 'Planes', href: '#planes' },
    { label: 'Cómo empezar', href: '#empezar' },
    { label: 'Contacto', href: '#contacto' },
  ]),
  ctaDemoLabel: 'Solicitar demo',
  loginLabel: 'Iniciar sesión',
  loginUrl: 'https://baumsystem.com/',
  chatTitle: '¿Tienes dudas?',
  chatSubtitle: 'Contáctanos',
  chatUrl: 'https://wa.link/l88bq2',
  chatIcon: await img('isotipo-nave.png'),
  seoTitle: 'BLUM · Software de riego: registro de medición y eventos',
  seoDescription: 'BLUM centraliza las mediciones y eventos que tu equipo registra en terreno, y te entrega alertas y tendencias para actuar antes de que las fallas afecten el cultivo.',

  heroBadge: 'BLUM · GESTIÓN DE EQUIPOS DE RIEGO TECNIFICADO',
  heroTitlePre: 'Software de riego: ',
  heroTitleAccent: 'Registro de medición y eventos.',
  heroTitleAccentColor: 'rgb(245, 166, 35)',
  heroTitlePost: 'Qué ocurre en terreno.',
  heroParagraph: pt([
    ['Tu operador '],
    ['registra mediciones y eventos desde la app', 'strong'],
    [', simple y en terreno.'],
    [' Blum', 'strong'],
    [' centraliza la información, te entrega '],
    ['alertas y tendencias', 'strong'],
    [' para armar tu '],
    ['plan de acción', 'strong'],
    [' antes de que las fallas afecten el cultivo.'],
  ]),
  heroCtaPrimary: 'Agenda una demo',
  heroCtaSecondary: '¿Quieres ver cómo medir?',
  heroImage: await img('hero-terreno-oficina.png'),
  heroImageAlt: 'Del terreno a la oficina: operador midiendo en el campo y gerente viendo los datos en BLUM',
  appStoreUrl: 'https://apps.apple.com',
  playStoreUrl: 'https://play.google.com',
  heroScrollLabel: 'DESCUBRE CÓMO FUNCIONA',

  problemaEyebrow: 'EL PROBLEMA QUE RESOLVEMOS',
  problemaTitle: '¿Sabes cómo se está regando realmente tu campo?',
  problemaParagraph: 'El riego ocurre en terreno. Pero las decisiones se toman lejos de él. BLUM conecta ambos mundos con información real, trazable y disponible al instante.',
  problemaLeft: 'MEDIR',
  problemaCenter: 'BLUM',
  problemaRight: 'DECIDIR',
  problemaCaption: 'Lo que pasa en terreno, llega a quién decide.',

  metodoEyebrow: 'LA SOLUCIÓN · MÉTODO BLUM',
  metodoStages: arr([
    { num: '01', title: 'Registrar', subtitle: 'LA OPERACIÓN REAL', desc: pt([
      ['El equipo documenta '], ['mediciones, fallas, fotografías y eventos desde el celular', 'strong'],
      ['. Cada registro queda asociado a una persona, fecha, ubicación y equipo, '], ['incluso sin conexión', 'strong'], ['.'],
    ]) },
    { num: '02', title: 'Visibilizar', subtitle: 'LO QUE REQUIERE ATENCIÓN', desc: pt([
      ['Blum organiza los registros en '], ['historial, mapas, comparaciones y alertas', 'strong'],
      ['. No se limita a mostrar datos: '], ['identifica desviaciones, tendencias y prioridades', 'strong'], ['.'],
    ]) },
    { num: '03', title: 'Actuar', subtitle: 'ANTES DE QUE SEA TARDE', desc: pt([
      ['La información se convierte en '], ['correcciones, tareas, mantenciones y decisiones concretas', 'strong'],
      ['. No observar el problema: '], ['intervenir a tiempo', 'strong'], [' y dejar respaldo.'],
    ]) },
  ]),
  metodoKpiLabel: 'KPI DE TUS DATOS',
  metodoResultados: arr([
    { title: 'Trazabilidad completa', desc: 'Qué ocurrió, cuándo, quién lo registró y en qué equipo.' },
    { title: 'Alertas a tiempo', desc: 'Desviaciones de presión y caudal visibles antes del daño.' },
    { title: 'Control a distancia', desc: 'Sabes qué pasa en cada campo sin estar presente.' },
    { title: 'Capacitación del equipo', desc: 'Tu equipo aprende una metodología de trabajo, y el conocimiento queda en la empresa.' },
    { title: 'Respaldo de lo realizado', desc: 'Historial exportable de cada riego y mantención.' },
  ]),

  appEyebrow: '01 · REGISTRAR — EN TERRENO, DESDE LA APP',
  appFlowTitle: 'Del manómetro a la decisión.',
  appFlowText: pt([
    ['El '], ['blumer mide y registra en la app ', 'strong'],
    ['desde el sector. El responsable ve el historial y la alerta en la web, y actúa antes de que el problema crezca.'],
  ]),
  appFlowSteps: ['Manómetro en el bloque', 'Registro en la app', 'Historial y alerta', 'Acción del responsable'],
  appScreens: arr([
    { title: 'Mapa', desc: 'Ve tus sectores, válvulas y equipos sobre el mapa real del campo. Detecta anomalías sin caminar el campo entero.', image: await img('mock-app-mapa.png'), iconPath: 'M12 22s8-4.5 8-11.8A8 8 0 0 0 4 10.2C4 17.5 12 22 12 22z' },
    { title: 'Medir', desc: 'Registra caudal, presión y estado de cada equipo directo en terreno, con foto incluida. Funciona 100% offline.', image: await img('mock-app-medicion.png'), iconPath: 'M12 8v4l3 3 M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z' },
    { title: 'Historial de activos', desc: 'Cada activo con su hoja de vida completa: mediciones, eventos y documentos, accesibles desde tu ubicación.', image: await img('mock-app-detalle.png'), iconPath: 'M3 3v18h18 M7 14l4-4 3 3 5-6' },
    { title: 'Calendario', desc: 'Visitas, tareas y mantenciones programadas por día. Todo el trabajo del campo agendado y visible para el equipo.', image: await img('app-calendario.png'), iconPath: 'M8 2v4 M16 2v4 M3 8h18 M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z' },
  ]),
  franjaText: pt([
    ['Funciona 100% offline.', 'strong'],
    [' El operador registra mediciones y eventos en terreno sin internet — los datos se suben solos cuando vuelve la señal.'],
  ]),
  franjaCta: 'Solicitar demo',

  webEyebrow: '02 · VISIBILIZAR Y ACTUAR — EN LA WEB',
  webScreens: arr([
    { title: 'Mapa', highlight: 'Mirada visual real', desc: 'de los equipos, sectores, válvulas y activos del riego.', image: await img('web-mapa.png'), iconPath: 'M12 22s8-4.5 8-11.8A8 8 0 0 0 4 10.2C4 17.5 12 22 12 22z' },
    { title: 'Activos', highlight: 'Inventario completo', desc: 'de marcas, modelos y especificaciones de tus equipos.', image: await img('web-sectores.png'), iconPath: 'M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z' },
    { title: 'Timeline', highlight: 'Trazabilidad total', desc: 'de mediciones, eventos y trabajo de tu equipo en terreno.', image: await img('web-dash-eventos.png'), iconPath: 'M12 8v4l3 3 M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z' },
    { title: 'Plan de Riego', highlight: 'Compara real vs teórico', desc: 'en base a precipitaciones reales y datos del sistema.', image: await img('web-plan-riego.png'), iconPath: 'M3 3v18h18 M7 14l4-4 3 3 5-6' },
    { title: 'Dashboard', highlight: 'Alertas en tiempo real', desc: 'para tomar decisiones rápidas y revisar la operación.', image: await img('web-dash-mediciones.png'), iconPath: 'M13 2 3 14h8l-1 8 10-12h-8l1-8z' },
  ]),

  cifrasItems: arr([
    { target: 12000, prefix: '+', label: 'HECTÁREAS GESTIONADAS' },
    { target: 400, prefix: '+', label: 'USUARIOS ACTIVOS' },
    { target: 3, prefix: '', label: 'PAÍSES · CHILE, PERÚ Y MÉXICO' },
  ]),

  partnersEyebrow: 'CONFÍAN EN BLUM',
  partnersLogos: arr([
    { image: await img('logo-garces-clean.png'), alt: 'Garcés', height: 78 },
    { image: await img('logo-frutexsa-clean.png'), alt: 'Frutexsa', height: 78 },
    { image: await img('logo-bafar-clean.png'), alt: 'Bafar', height: 96 },
    { image: await img('logo-ddc-clean.png'), alt: 'DDC', height: 110 },
    { image: await img('logo-leice-clean.png'), alt: 'Leice', height: 78 },
    { image: await img('logo-principio-clean.png'), alt: 'Principio', height: 56 },
    { image: await img('logo-agrosocoin-clean.png'), alt: 'Agrosocoin', height: 56 },
    { image: await img('logo-exser-clean.png'), alt: 'Exser', height: 56 },
    { image: await img('logo-aillin-clean.png'), alt: 'Aillin', height: 56 },
  ]),

  empezarTitle: 'Dos formas de empezar',
  empezarSubtitle: 'Sin transformar tu red de riego existente. Elige la que mejor se adapte a tu equipo y operación.',
  empezarCards: arr([
    { title: 'Implementa BLUM tú mismo',
      desc: pt([['BLUM está diseñado para que quienes conocen su sistema de riego puedan '], ['implementarlo de forma autónoma', 'strong'], [', con un '], ['proceso guiado y amigable', 'strong'], ['.']]),
      features: ['Requiere conocimiento básico de tu sistema de riego', 'Proceso guiado paso a paso, sin instalaciones técnicas', 'Listo en menos de 30 minutos si tienes tu red clara'] },
    { title: 'A través de nuestros Partners',
      desc: pt([['Si necesitas apoyo en terreno, nuestros partners certificados te acompañan en la implementación, configuración inicial y capacitación de tu equipo.']]),
      features: [] },
  ]),
  partnerName: 'Baum System',
  partnerRole: 'Partner certificado · Implementación y consultoría de riego',
  partnerCtaLabel: 'Contactar a Baum System ↗',
  partnerCtaUrl: 'https://baumsystem.com/',

  planesEyebrow: 'PRECIOS',
  planesTitle: 'Planes para cada operación',
  planesSubtitle: 'Sin costos ocultos. Todos los planes incluyen las mismas funcionalidades base.',
  planesPriceNote: 'El precio se calcula por la superficie total gestionada en la plataforma — multicampo y multiempresa.',
  currencyUsdLabel: 'USD · Internacional',
  currencyUfLabel: 'UF · Chile',
  highlightBadge: 'Más elegido',
  plans: arr([
    { segment: 'Productor pequeño', range: '1 – 99 ha', desc: 'Para predios y campos en crecimiento.', priceUF: '0,7 UF', unitUF: '/ ha / año', exUF: 'Ej. 50 ha → 35 UF/año', priceUSD: '$25', unitUSD: 'USD / ha / año', exUSD: 'Ej. 50 ha → $1.250 USD/año', highlight: false, cta: 'Solicitar acceso', features: ['Todas las funcionalidades incluidas', 'Usuarios ilimitados', 'Soporte remoto'] },
    { segment: 'Productor mediano', range: '100 – 299 ha', desc: 'Para operaciones en pleno desarrollo.', priceUF: '0,42 UF', unitUF: '/ ha / año', exUF: 'Ej. 200 ha → 84 UF/año', priceUSD: '$15', unitUSD: 'USD / ha / año', exUSD: 'Ej. 200 ha → $3.000 USD/año', highlight: false, cta: 'Solicitar acceso', features: ['Todas las funcionalidades incluidas', 'Usuarios ilimitados', 'Soporte prioritario', 'Onboarding asistido'] },
    { segment: 'Productor grande', range: '300 – 999 ha', desc: 'Para operaciones consolidadas.', priceUF: '0,33 UF', unitUF: '/ ha / año', exUF: 'Ej. 500 ha → 165 UF/año', priceUSD: '$12', unitUSD: 'USD / ha / año', exUSD: 'Ej. 500 ha → $6.000 USD/año', highlight: true, cta: 'Solicitar acceso', features: ['Todas las funcionalidades incluidas', 'Usuarios ilimitados', 'Soporte prioritario', 'Onboarding asistido'] },
    { segment: 'Productor multicampo', range: '1.000+ ha', desc: 'Para grandes operaciones multicampo.', priceUF: '0,25 UF', unitUF: '/ ha / año', exUF: 'Ej. 2.000 ha → 500 UF/año', priceUSD: '$9,5', unitUSD: 'USD / ha / año', exUSD: 'Ej. 2.000 ha → $19.000 USD/año', highlight: false, cta: 'Contactar ventas', features: ['Todas las funcionalidades incluidas', 'Usuarios ilimitados', 'Account manager dedicado', 'SLA garantizado'] },
  ]),
  planesApiNote: '* Blum se integra con la tecnología que ya usas (programadores de riego, sensores, NDVI). La conexión vía API tiene un costo adicional por cotizar, disponible desde el plan Productor mediano.',

  contactoEyebrow: 'HABLEMOS DE TU CAMPO',
  contactoTitle: 'Agenda una demo de 30 minutos.',
  contactoParagraph: pt([
    ['Enterarse tarde cuesta caro. Completa tus datos y '],
    ['te contactamos en menos de 48 horas', 'strong'],
    ['. Te mostramos la plataforma con '],
    ['datos reales de riego, sin compromiso', 'strong'],
    ['.'],
  ]),
  contactoImage: await img('foto-dos-personas-campo.jpg'),
  whatsappLabel: 'WhatsApp',
  whatsappUrl: 'https://wa.link/l88bq2',
  contactEmail: 'b.sepulveda@blumapss.com',
  formSubmitLabel: 'Enviar solicitud',
  formSuccessMessage: 'Gracias — nuestro equipo te contactará en menos de 48 horas.',

  footerTagline: 'App de registro de mediciones y eventos de los equipos de riego. Datos de terreno · Riego registrable.',
  footerCta: 'Agenda una demo',
  footerColumns: arr([
    { title: 'PLATAFORMA', links: arr([
      { label: 'Cómo funciona', href: '#metodo' }, { label: 'Funcionalidades', href: '#app' },
      { label: 'App y Web', href: '#web' }, { label: 'Planes', href: '#planes' }]) },
    { title: 'EMPRESA', links: arr([
      { label: 'Agenda una demo', href: '#contacto' }, { label: 'Contacto', href: '#contacto' }]) },
    { title: 'DESCARGA LA APP', links: arr([
      { label: 'App Store', href: 'https://apps.apple.com' }, { label: 'Google Play', href: 'https://play.google.com' }]) },
  ]),
  footerLegal: '© 2026 BLUM — Un producto de Baum System',
};

const res = await client.createOrReplace(doc);
console.log('\nDocumento listo:', res._id, '| revisión', res._rev);
