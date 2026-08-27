import { defineField, defineType } from 'sanity';

const G = [
  { name: 'general', title: 'General' },
  { name: 'hero', title: 'Portada' },
  { name: 'problema', title: 'Problema' },
  { name: 'metodo', title: 'Método' },
  { name: 'app', title: 'App' },
  { name: 'web', title: 'Web' },
  { name: 'cifras', title: 'Cifras' },
  { name: 'partners', title: 'Partners' },
  { name: 'empezar', title: 'Cómo empezar' },
  { name: 'planes', title: 'Planes' },
  { name: 'contacto', title: 'Contacto' },
  { name: 'footer', title: 'Pie de página' },
];

const f = (name: string, title: string, type: string, group: string, extra: Record<string, any> = {}) =>
  defineField({ name, title, type, group, ...extra } as any);

export const landing = defineType({
  name: 'landing',
  title: 'Landing BLUM',
  type: 'document',
  groups: G,
  fields: [
    // ---------- General ----------
    f('logo', 'Logo', 'image', 'general'),
    f('navLinks', 'Enlaces del menú', 'array', 'general', { of: [{ type: 'navLink' }] }),
    f('ctaDemoLabel', 'Botón "Solicitar demo"', 'string', 'general'),
    f('loginLabel', 'Botón "Iniciar sesión"', 'string', 'general'),
    f('loginUrl', 'URL de inicio de sesión', 'url', 'general'),
    f('chatTitle', 'Burbuja de chat · título', 'string', 'general'),
    f('chatSubtitle', 'Burbuja de chat · bajada', 'string', 'general'),
    f('chatUrl', 'Burbuja de chat · enlace', 'url', 'general'),
    f('chatIcon', 'Burbuja de chat · ícono', 'image', 'general'),
    f('seoTitle', 'SEO · título', 'string', 'general'),
    f('seoDescription', 'SEO · descripción', 'text', 'general', { rows: 3 }),
    f('ogImage', 'SEO · imagen para compartir', 'image', 'general'),

    // ---------- Portada ----------
    f('heroBadge', 'Etiqueta superior', 'string', 'hero'),
    f('heroTitlePre', 'Título · primera parte', 'string', 'hero'),
    f('heroTitleAccent', 'Título · parte destacada', 'string', 'hero'),
    f('heroTitleAccentColor', 'Color de la parte destacada', 'string', 'hero', { initialValue: 'rgb(245, 166, 35)' }),
    f('heroTitlePost', 'Título · última parte', 'string', 'hero'),
    f('heroParagraph', 'Párrafo', 'richText', 'hero'),
    f('heroCtaPrimary', 'Botón principal', 'string', 'hero'),
    f('heroCtaSecondary', 'Botón secundario', 'string', 'hero'),
    f('heroImage', 'Imagen de portada', 'image', 'hero', { options: { hotspot: true } }),
    f('heroImageAlt', 'Texto alternativo de la imagen', 'string', 'hero'),
    f('appStoreUrl', 'Enlace App Store', 'url', 'hero'),
    f('playStoreUrl', 'Enlace Google Play', 'url', 'hero'),
    f('heroScrollLabel', 'Texto del indicador inferior', 'string', 'hero'),

    // ---------- Problema ----------
    f('problemaEyebrow', 'Etiqueta', 'string', 'problema'),
    f('problemaTitle', 'Título', 'string', 'problema'),
    f('problemaParagraph', 'Párrafo', 'text', 'problema', { rows: 3 }),
    f('problemaLeft', 'Diagrama · izquierda', 'string', 'problema'),
    f('problemaCenter', 'Diagrama · centro', 'string', 'problema'),
    f('problemaRight', 'Diagrama · derecha', 'string', 'problema'),
    f('problemaCaption', 'Pie del diagrama', 'string', 'problema'),

    // ---------- Método ----------
    f('metodoEyebrow', 'Etiqueta', 'string', 'metodo'),
    f('metodoStages', 'Etapas', 'array', 'metodo', { of: [{ type: 'stage' }] }),
    f('metodoKpiLabel', 'Etiqueta de resultados', 'string', 'metodo'),
    f('metodoResultados', 'Resultados', 'array', 'metodo', { of: [{ type: 'resultado' }] }),

    // ---------- App ----------
    f('appEyebrow', 'Etiqueta', 'string', 'app'),
    f('appTitle', 'Título', 'string', 'app'),
    f('appScreens', 'Pantallas', 'array', 'app', { of: [{ type: 'screen' }] }),
    f('appFlowTitle', 'Flujo · título', 'string', 'app'),
    f('appFlowText', 'Flujo · texto', 'richText', 'app'),
    f('appFlowSteps', 'Flujo · pasos', 'array', 'app', { of: [{ type: 'string' }] }),
    f('franjaText', 'Franja turquesa · texto', 'richText', 'app'),
    f('franjaCta', 'Franja turquesa · botón', 'string', 'app'),

    // ---------- Web ----------
    f('webEyebrow', 'Etiqueta', 'string', 'web'),
    f('webTitle', 'Título', 'string', 'web'),
    f('webScreens', 'Pantallas', 'array', 'web', { of: [{ type: 'screen' }] }),

    // ---------- Cifras ----------
    f('cifrasItems', 'Cifras', 'array', 'cifras', { of: [{ type: 'stat' }] }),

    // ---------- Partners ----------
    f('partnersEyebrow', 'Etiqueta', 'string', 'partners'),
    f('partnersLogos', 'Logos', 'array', 'partners', { of: [{ type: 'partnerLogo' }] }),

    // ---------- Cómo empezar ----------
    f('empezarTitle', 'Título', 'string', 'empezar'),
    f('empezarSubtitle', 'Bajada', 'text', 'empezar', { rows: 2 }),
    f('empezarCards', 'Tarjetas', 'array', 'empezar', { of: [{ type: 'startCard' }] }),
    f('partnerName', 'Partner · nombre', 'string', 'empezar'),
    f('partnerRole', 'Partner · descripción', 'string', 'empezar'),
    f('partnerLogoImg', 'Partner · logo', 'image', 'empezar'),
    f('partnerCtaLabel', 'Partner · botón', 'string', 'empezar'),
    f('partnerCtaUrl', 'Partner · enlace', 'url', 'empezar'),

    // ---------- Planes ----------
    f('planesEyebrow', 'Etiqueta', 'string', 'planes'),
    f('planesTitle', 'Título', 'string', 'planes'),
    f('planesSubtitle', 'Bajada', 'text', 'planes', { rows: 2 }),
    f('planesPriceNote', 'Nota sobre el cálculo', 'text', 'planes', { rows: 2 }),
    f('currencyUsdLabel', 'Botón moneda · USD', 'string', 'planes'),
    f('currencyUfLabel', 'Botón moneda · UF', 'string', 'planes'),
    f('highlightBadge', 'Etiqueta del plan destacado', 'string', 'planes'),
    f('plans', 'Planes', 'array', 'planes', { of: [{ type: 'plan' }] }),
    f('planesApiNote', 'Nota al pie (integraciones)', 'text', 'planes', { rows: 3 }),

    // ---------- Contacto ----------
    f('contactoEyebrow', 'Etiqueta', 'string', 'contacto'),
    f('contactoTitle', 'Título', 'string', 'contacto'),
    f('contactoParagraph', 'Párrafo', 'richText', 'contacto'),
    f('contactoImage', 'Imagen de fondo', 'image', 'contacto', { options: { hotspot: true } }),
    f('whatsappLabel', 'Botón de WhatsApp', 'string', 'contacto'),
    f('whatsappUrl', 'Enlace de WhatsApp', 'url', 'contacto'),
    f('contactEmail', 'Correo de contacto', 'string', 'contacto'),
    f('formSubmitLabel', 'Botón del formulario', 'string', 'contacto'),
    f('formSuccessMessage', 'Mensaje al enviar', 'string', 'contacto'),

    // ---------- Pie ----------
    f('footerTagline', 'Descripción', 'text', 'footer', { rows: 2 }),
    f('footerNote', 'Nota', 'string', 'footer'),
    f('footerCta', 'Botón', 'string', 'footer'),
    f('footerColumns', 'Columnas', 'array', 'footer', { of: [{ type: 'footerColumn' }] }),
    f('footerLegal', 'Línea legal', 'string', 'footer'),
  ],
  preview: {
    prepare: () => ({ title: 'Landing BLUM' }),
  },
});
