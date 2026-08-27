import { defineField, defineType } from 'sanity';

/** Rich text limited to what the landing actually renders: bold + links. */
export const richText = defineType({
  name: 'richText',
  title: 'Texto con formato',
  type: 'array',
  of: [
    {
      type: 'block',
      styles: [{ title: 'Normal', value: 'normal' }],
      lists: [],
      marks: {
        decorators: [{ title: 'Negrita', value: 'strong' }],
        annotations: [
          {
            name: 'link',
            type: 'object',
            title: 'Enlace',
            fields: [{ name: 'href', type: 'url', title: 'URL' }],
          },
        ],
      },
    },
  ],
});

export const navLink = defineType({
  name: 'navLink',
  title: 'Enlace',
  type: 'object',
  fields: [
    defineField({ name: 'label', title: 'Texto', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'href', title: 'Destino', type: 'string', description: 'Ancla (#planes) o URL completa', validation: (r) => r.required() }),
  ],
  preview: { select: { title: 'label', subtitle: 'href' } },
});

export const stage = defineType({
  name: 'stage',
  title: 'Etapa',
  type: 'object',
  fields: [
    defineField({ name: 'num', title: 'Número', type: 'string' }),
    defineField({ name: 'title', title: 'Título', type: 'string' }),
    defineField({ name: 'subtitle', title: 'Bajada', type: 'string' }),
    defineField({ name: 'desc', title: 'Descripción', type: 'text', rows: 3 }),
  ],
  preview: { select: { title: 'title', subtitle: 'subtitle' } },
});

export const resultado = defineType({
  name: 'resultado',
  title: 'Resultado',
  type: 'object',
  fields: [
    defineField({ name: 'title', title: 'Título', type: 'string' }),
    defineField({ name: 'desc', title: 'Descripción', type: 'text', rows: 2 }),
  ],
  preview: { select: { title: 'title', subtitle: 'desc' } },
});

export const screen = defineType({
  name: 'screen',
  title: 'Pantalla',
  type: 'object',
  fields: [
    defineField({ name: 'title', title: 'Título', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'highlight', title: 'Destacado', type: 'string', description: 'Solo se usa en la sección Web' }),
    defineField({ name: 'desc', title: 'Descripción', type: 'text', rows: 3 }),
    defineField({ name: 'image', title: 'Captura', type: 'image', options: { hotspot: true } }),
    defineField({
      name: 'iconPath',
      title: 'Ícono (path SVG)',
      type: 'string',
      description: 'Coordenadas del ícono. Si no sabes qué es, no lo toques.',
    }),
  ],
  preview: { select: { title: 'title', subtitle: 'desc', media: 'image' } },
});

export const plan = defineType({
  name: 'plan',
  title: 'Plan',
  type: 'object',
  fields: [
    defineField({ name: 'segment', title: 'Segmento', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'range', title: 'Rango de hectáreas', type: 'string' }),
    defineField({ name: 'desc', title: 'Descripción', type: 'string' }),
    defineField({ name: 'priceUF', title: 'Precio en UF', type: 'string' }),
    defineField({ name: 'unitUF', title: 'Unidad (UF)', type: 'string', initialValue: '/ ha / año' }),
    defineField({ name: 'exUF', title: 'Ejemplo (UF)', type: 'string' }),
    defineField({ name: 'priceUSD', title: 'Precio en USD', type: 'string' }),
    defineField({ name: 'unitUSD', title: 'Unidad (USD)', type: 'string', initialValue: 'USD / ha / año' }),
    defineField({ name: 'exUSD', title: 'Ejemplo (USD)', type: 'string' }),
    defineField({ name: 'highlight', title: 'Plan destacado', type: 'boolean', initialValue: false }),
    defineField({ name: 'cta', title: 'Texto del botón', type: 'string', initialValue: 'Solicitar acceso' }),
    defineField({ name: 'features', title: 'Incluye', type: 'array', of: [{ type: 'string' }] }),
  ],
  preview: { select: { title: 'segment', subtitle: 'range' } },
});

export const partnerLogo = defineType({
  name: 'partnerLogo',
  title: 'Logo',
  type: 'object',
  fields: [
    defineField({ name: 'image', title: 'Imagen', type: 'image', validation: (r) => r.required() }),
    defineField({ name: 'alt', title: 'Nombre', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'height', title: 'Alto en píxeles', type: 'number', initialValue: 56, description: 'Ajusta el tamaño visual del logo en la fila.' }),
  ],
  preview: { select: { title: 'alt', media: 'image' } },
});

export const stat = defineType({
  name: 'stat',
  title: 'Cifra',
  type: 'object',
  fields: [
    defineField({ name: 'target', title: 'Número', type: 'number', validation: (r) => r.required() }),
    defineField({ name: 'prefix', title: 'Prefijo', type: 'string', description: 'Por ejemplo "+"' }),
    defineField({ name: 'label', title: 'Etiqueta', type: 'string' }),
  ],
  preview: { select: { title: 'label', subtitle: 'target' } },
});

export const startCard = defineType({
  name: 'startCard',
  title: 'Tarjeta',
  type: 'object',
  fields: [
    defineField({ name: 'title', title: 'Título', type: 'string' }),
    defineField({ name: 'desc', title: 'Descripción', type: 'text', rows: 3 }),
    defineField({ name: 'features', title: 'Puntos', type: 'array', of: [{ type: 'string' }] }),
  ],
  preview: { select: { title: 'title', subtitle: 'desc' } },
});

export const footerColumn = defineType({
  name: 'footerColumn',
  title: 'Columna',
  type: 'object',
  fields: [
    defineField({ name: 'title', title: 'Título', type: 'string' }),
    defineField({ name: 'links', title: 'Enlaces', type: 'array', of: [{ type: 'navLink' }] }),
  ],
  preview: { select: { title: 'title' } },
});
