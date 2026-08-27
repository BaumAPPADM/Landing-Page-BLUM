import type { CSSProperties } from 'react';

const cache = new Map<string, CSSProperties>();

/**
 * Turns a CSS declaration string — kept verbatim from the original markup — into
 * a React style object. Values stay strings, which React accepts for every prop,
 * so nothing is lost in translation. Results are memoised per unique string.
 */
export function s(css?: string | null): CSSProperties {
  if (!css) return {};
  const hit = cache.get(css);
  if (hit) return hit;

  const out: Record<string, string> = {};
  for (const decl of css.split(';')) {
    const i = decl.indexOf(':');
    if (i < 0) continue;
    const prop = decl.slice(0, i).trim();
    const value = decl.slice(i + 1).trim();
    if (!prop || !value) continue;
    if (prop.startsWith('--')) { out[prop] = value; continue; }
    const camel = prop
      .replace(/^-(webkit|moz|ms|o)-/, (_, v) => v[0].toUpperCase() + v.slice(1) + '-')
      .replace(/-([a-z])/g, (_, c) => c.toUpperCase());
    out[camel] = value;
  }

  const frozen = out as CSSProperties;
  cache.set(css, frozen);
  return frozen;
}
