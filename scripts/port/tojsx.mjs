/**
 * Convierte el markup del export de Claude Design a JSX.
 *
 *   node scripts/port/tojsx.mjs <carpeta-desempaquetada> <carpeta-salida>
 *
 * Traduce lo propio del formato: sc-for/sc-if a map/condicional, sc-camel-* a
 * props de React, {{ expr }} a expresiones, y style-hover a clases CSS (React no
 * soporta :hover inline). Cada bloque de primer nivel sale como una sección.
 */
import { parse } from 'node-html-parser';
import fs from 'node:fs';
import path from 'node:path';

const [IN, OUT] = process.argv.slice(2);
if (!IN || !OUT) { console.error('Uso: node scripts/port/tojsx.mjs <desempaquetado> <salida>'); process.exit(1); }

const VOID = new Set(['img','br','hr','input','meta','link','source','area','base','col','embed','param','track','wbr']);
const NUMERIC = new Set(['rows','cols','size','maxlength','tabindex','colspan','rowspan','start','span']);
const ATTR = {
  class:'className', for:'htmlFor', tabindex:'tabIndex', readonly:'readOnly', maxlength:'maxLength',
  colspan:'colSpan', rowspan:'rowSpan', autocomplete:'autoComplete', autofocus:'autoFocus',
  'stroke-width':'strokeWidth','stroke-linecap':'strokeLinecap','stroke-linejoin':'strokeLinejoin',
  'stroke-dasharray':'strokeDasharray','stroke-dashoffset':'strokeDashoffset','stroke-opacity':'strokeOpacity',
  'fill-opacity':'fillOpacity','fill-rule':'fillRule','clip-path':'clipPath','clip-rule':'clipRule',
  'stop-color':'stopColor','stop-opacity':'stopOpacity','text-anchor':'textAnchor','dominant-baseline':'dominantBaseline',
  gradientunits:'gradientUnits', gradienttransform:'gradientTransform', patternunits:'patternUnits',
  viewbox:'viewBox', preserveaspectratio:'preserveAspectRatio', 'xlink:href':'xlinkHref',
  'font-family':'fontFamily','font-size':'fontSize','font-weight':'fontWeight','letter-spacing':'letterSpacing',
  'marker-end':'markerEnd','marker-start':'markerStart','mask-type':'maskType','shape-rendering':'shapeRendering',
};
const camel = s => s.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
const isExpr = v => /^\s*\{\{[\s\S]*\}\}\s*$/.test(v);
const exprOf = v => v.trim().replace(/^\{\{\s*/, '').replace(/\s*\}\}$/, '');

const ENT = { '&nbsp;':' ','&amp;':'&','&lt;':'<','&gt;':'>','&quot;':'"','&#39;':"'",'&apos;':"'",
              '&mdash;':'—','&ndash;':'–','&hellip;':'…','&middot;':'·','&times;':'×',
              '&rsquo;':'’','&lsquo;':'‘','&ldquo;':'“','&rdquo;':'”' };
const decode = t => t
  .replace(/&(?:nbsp|amp|lt|gt|quot|#39|apos|mdash|ndash|hellip|middot|times|rsquo|lsquo|ldquo|rdquo);/g, m => ENT[m])
  .replace(/&#(\d+);/g, (_, d) => String.fromCodePoint(+d))
  .replace(/&#x([0-9a-f]+);/gi, (_, h) => String.fromCodePoint(parseInt(h, 16)));
// Solo espacios ASCII: \s también casaría el espacio duro y lo destruiría.
const collapse = t => t.replace(/[ \t\n\r\f]+/g, ' ');

const hoverRules = [];
function hoverClass(css) {
  const decls = css.split(';').map(d => d.trim()).filter(Boolean)
    .map(d => { const i = d.indexOf(':'); return `${d.slice(0, i).trim()}:${d.slice(i + 1).trim()} !important`; })
    .join(';');
  const name = 'bh' + hoverRules.length;
  hoverRules.push(`.${name}:hover{${decls}}`);
  return name;
}

function attrs(node) {
  const out = [];
  let cls = node.getAttribute('class') || '';
  const hov = node.getAttribute('style-hover');
  if (hov) cls = (cls ? cls + ' ' : '') + hoverClass(hov);

  for (const rawK of Object.keys(node.rawAttributes || {})) {
    const k = rawK.toLowerCase();
    if (k === 'style-hover' || k === 'class' || k.startsWith('hint-placeholder')) continue;
    const v = node.getAttribute(rawK);

    if (k === 'style') {
      const fixed = isExpr(v) ? v : v.replace(/url\((["']?)assets\//g, 'url($1/assets/');
      if (isExpr(v)) {
        out.push(`style={s(${exprOf(v)})}`);
      } else if (/\{\{/.test(fixed)) {
        // Claude Design interpola {{ expr }} dentro del CSS. JSON.stringify lo
        // dejaría como texto literal y el botón/estado nunca recibiría el valor.
        const tpl = fixed
          .replace(/\\/g, '\\\\')
          .replace(/`/g, '\\`')
          .replace(/\$\{/g, '\\${')
          .replace(/\{\{\s*([\s\S]*?)\s*\}\}/g, (_, e) => '${' + e.trim() + '}');
        out.push('style={s(`' + tpl + '`)}');
      } else {
        out.push(`style={s(${JSON.stringify(fixed)})}`);
      }
      continue;
    }
    if (k.startsWith('sc-camel-')) {
      const name = camel(k.slice('sc-camel-'.length));
      out.push(isExpr(v) ? `${name}={${exprOf(v)}}` : `${name}=${JSON.stringify(v)}`);
      continue;
    }
    const name = ATTR[k] || (k.includes('-') && !k.startsWith('data-') && !k.startsWith('aria-') ? camel(k) : k);
    if (NUMERIC.has(k) && !isExpr(v) && /^\d+$/.test(v.trim())) { out.push(`${name}={${v.trim()}}`); continue; }
    const val = isExpr(v) ? `{${exprOf(v)}}` : JSON.stringify(/^(src|href)$/.test(k) ? v.replace(/^assets\//, '/assets/') : v);
    out.push(`${name}=${val}`);
  }
  if (cls) out.unshift(`className=${JSON.stringify(cls)}`);
  return out.length ? ' ' + out.join(' ') : '';
}

// El texto va como expresiones de cadena: así las reglas de espacios de JSX no
// pueden comerse un espacio significativo entre elementos inline.
const textJSX = raw => collapse(raw).split(/(\{\{[\s\S]*?\}\})/).filter(x => x !== '')
  .map(p => (/^\{\{/.test(p) ? `{${exprOf(p)}}` : `{${JSON.stringify(decode(p))}}`)).join('');

function walk(node, ind) {
  const pad = '  '.repeat(ind);
  if (node.nodeType === 3) {
    const raw = node.rawText;
    if (raw === '') return '';
    if (!raw.trim()) {
      const sib = node.parentNode ? node.parentNode.childNodes : [];
      const i = sib.indexOf(node);
      return (i > 0 && i < sib.length - 1) ? pad + '{" "}\n' : '';
    }
    return pad + textJSX(raw) + '\n';
  }
  if (node.nodeType !== 1) return '';
  const tag = node.rawTagName.toLowerCase();

  if (tag === 'sc-for') {
    const list = exprOf(node.getAttribute('list'));
    const as = node.getAttribute('as');
    const inner = node.childNodes.map(c => walk(c, ind + 2)).join('');
    return `${pad}{(${list} || []).map((${as}, i) => (\n${'  '.repeat(ind + 1)}<React.Fragment key={i}>\n${inner}${'  '.repeat(ind + 1)}</React.Fragment>\n${pad}))}\n`;
  }
  if (tag === 'sc-if') {
    const cond = exprOf(node.getAttribute('value'));
    const inner = node.childNodes.map(c => walk(c, ind + 2)).join('');
    return `${pad}{(${cond}) ? (\n${'  '.repeat(ind + 1)}<>\n${inner}${'  '.repeat(ind + 1)}</>\n${pad}) : null}\n`;
  }

  const a = attrs(node);
  if (VOID.has(tag)) return `${pad}<${tag}${a} />\n`;
  const kids = node.childNodes.map(c => walk(c, ind + 1)).join('');
  return kids ? `${pad}<${tag}${a}>\n${kids}${pad}</${tag}>\n` : `${pad}<${tag}${a}></${tag}>\n`;
}

const html = fs.readFileSync(path.join(IN, 'index.html'), 'utf8');
const body = html.slice(html.indexOf('</helmet>') + 9, html.lastIndexOf('</body>'));
const screen = parse(body, { comment: false, blockTextElements: { script: true, style: true } })
  .querySelector('[data-screen-label]');

fs.mkdirSync(OUT, { recursive: true });
const parts = [];
for (const child of screen.childNodes) {
  if (child.nodeType !== 1) continue;
  parts.push({ tag: child.rawTagName.toLowerCase(), id: child.getAttribute('id') || '', jsx: walk(child, 3) });
}
fs.writeFileSync(path.join(OUT, '_parts.json'), JSON.stringify(parts, null, 1));
fs.writeFileSync(path.join(OUT, 'hover.css'), hoverRules.join('\n') + '\n');

console.log('bloques:', parts.length);
parts.forEach((p, i) => console.log(` ${String(i).padStart(2)} ${p.tag.padEnd(8)} ${(p.id || '-').padEnd(12)} ${p.jsx.length}b`));
console.log('reglas :hover:', hoverRules.length);
