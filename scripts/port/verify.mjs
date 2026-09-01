/**
 * Contrasta un sitio publicado contra el export de diseño desempaquetado.
 *
 *   node scripts/port/verify.mjs <url> <carpeta-desempaquetada>
 *
 * Comprueba que no falte ningún texto del diseño, que las anclas internas
 * apunten a secciones que existen, que las imágenes carguen y que los
 * marcadores invisibles de edición no se filtren al sitio público.
 */
import { parse } from 'node-html-parser';
import fs from 'node:fs';
import path from 'node:path';

const [BASE, DESIGN] = process.argv.slice(2);
if (!BASE || !DESIGN) { console.error('Uso: node scripts/port/verify.mjs <url> <desempaquetado>'); process.exit(1); }

const norm = t => t.replace(/ /g, ' ').replace(/\s+/g, ' ').trim();
let fails = 0;
const ok = m => console.log('  ✓', m);
const bad = m => { fails++; console.log('  ✗', m); };

const html = await (await fetch(BASE + '/')).text();
const doc = parse(html);
const clean = parse(html); clean.querySelectorAll('script,style').forEach(n => n.remove());
const text = norm(clean.text);

// 1. ningún texto del diseño se perdió
const h = fs.readFileSync(path.join(DESIGN, 'index.html'), 'utf8');
const body = h.slice(h.indexOf('</helmet>') + 9, h.lastIndexOf('</body>'));
const o = parse(body); o.querySelectorAll('script,style,sc-for,sc-if').forEach(n => n.remove());
const runs = [];
(function w(n) { for (const c of n.childNodes) {
  if (c.nodeType === 3) { const t = norm(c.rawText.replace(/&nbsp;/g, ' ').replace(/\{\{[^}]*\}\}/g, '')); if (t.length > 2) runs.push(t); }
  else if (c.nodeType === 1) w(c);
} })(o);
const missing = runs.filter(r => !text.includes(r));
missing.length ? bad(`textos faltantes: ${missing.length} -> ${missing.slice(0, 3).join(' | ')}`)
               : ok(`${runs.length} textos del diseño presentes`);

// 2. anclas internas
const ids = new Set(doc.querySelectorAll('[id]').map(e => e.getAttribute('id')));
const anchors = [...new Set(doc.querySelectorAll('a[href^="#"]').map(a => a.getAttribute('href').slice(1)))].filter(Boolean);
const dead = anchors.filter(a => !ids.has(a));
dead.length ? bad(`anclas rotas: ${dead.join(', ')}`) : ok(`${anchors.length} anclas internas resuelven`);

// 3. enlaces de tienda reales, no los genéricos de plantilla
const hrefs = doc.querySelectorAll('a[href]').map(a => a.getAttribute('href'));
const genericos = hrefs.filter(u => u === 'https://apps.apple.com' || u === 'https://play.google.com');
genericos.length ? bad(`${genericos.length} enlaces de tienda genéricos`)
                 : ok(`tiendas: ${hrefs.filter(u => /apple\.com|play\.google\.com/.test(u)).length} enlaces con URL real`);

// 4. imágenes
const srcs = [...new Set(doc.querySelectorAll('img').map(i => i.getAttribute('src')).filter(Boolean))];
const imgBad = [];
for (const src of srcs) {
  const u = src.startsWith('http') ? src : BASE + src;
  try { const r = await fetch(u, { method: 'HEAD' }); if (!r.ok) imgBad.push(`${r.status} ${src}`); }
  catch { imgBad.push('ERR ' + src); }
}
imgBad.length ? bad(`imágenes rotas: ${imgBad.join(', ')}`) : ok(`${srcs.length} imágenes cargan`);

// 5. sin marcadores invisibles de stega
const stega = (html.match(/[​-‏﻿]/g) || []).length;
stega ? bad(`${stega} caracteres invisibles filtrados al sitio`) : ok('sin residuos de stega');

// 6. rutas
for (const r of ['/', '/studio', '/partners.html']) {
  const res = await fetch(BASE + r, { redirect: 'follow' });
  res.ok ? ok(`${r} -> ${res.status}`) : bad(`${r} -> ${res.status}`);
}

console.log(fails ? `\nFALLOS: ${fails}` : '\nTODO OK');
process.exit(fails ? 1 : 0);
