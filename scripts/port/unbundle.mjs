/**
 * Desempaqueta el index.html autocontenido que exporta Claude Design.
 *
 *   node scripts/port/unbundle.mjs index.html <carpeta-salida>
 *
 * El archivo lleva dentro, en base64 (a veces comprimido), todas las imágenes,
 * tipografías y scripts. Esto los extrae, recupera el nombre original de cada
 * imagen comparando su contenido con public/assets, y reescribe las referencias
 * del HTML para dejar una versión legible con la que trabajar.
 */
import fs from 'node:fs';
import path from 'node:path';
import zlib from 'node:zlib';
import crypto from 'node:crypto';

const [SRC, OUT] = process.argv.slice(2);
if (!SRC || !OUT) { console.error('Uso: node scripts/port/unbundle.mjs <index.html> <salida>'); process.exit(1); }

const lines = fs.readFileSync(SRC, 'utf8').split('\n');
function grab(type) {
  const i = lines.findIndex(l => l.includes(`<script type="__bundler/${type}">`));
  if (i < 0) return null;
  const buf = [];
  for (let j = i + 1; j < lines.length && !lines[j].includes('</script>'); j++) buf.push(lines[j]);
  return JSON.parse(buf.join('\n'));
}
const manifest = grab('manifest');
const ext = grab('ext_resources') || [];
const template = grab('template');
if (!manifest || !template) { console.error('No parece un export empaquetado de Claude Design.'); process.exit(1); }

const EXT = { 'image/png':'.png','image/jpeg':'.jpg','image/webp':'.webp','image/svg+xml':'.svg',
              'font/woff2':'.woff2','font/woff':'.woff','application/javascript':'.js','text/javascript':'.js','text/css':'.css' };

// nombres reales conocidos, por contenido
const known = {};
const assetsDir = 'public/assets';
if (fs.existsSync(assetsDir)) for (const f of fs.readdirSync(assetsDir))
  known[crypto.createHash('sha1').update(fs.readFileSync(path.join(assetsDir, f))).digest('hex')] = f;

const urlByUuid = Object.fromEntries(ext.map(e => [e.uuid, e.id]));
for (const d of ['assets', 'fonts', 'vendor']) fs.mkdirSync(path.join(OUT, d), { recursive: true });

const map = {}, nuevas = [];
for (const [uuid, entry] of Object.entries(manifest)) {
  let bytes = Buffer.from(entry.data, 'base64');
  if (entry.compressed) bytes = zlib.gunzipSync(bytes);
  const ex = EXT[entry.mime] || '.bin';
  const sha = crypto.createHash('sha1').update(bytes).digest('hex');
  let rel;
  if (entry.mime.startsWith('font/')) rel = 'fonts/' + uuid + ex;
  else if (ex === '.js') {
    const url = urlByUuid[uuid];
    rel = 'vendor/' + (url ? path.basename(new URL(url).pathname) : uuid + '.js');
  } else {
    rel = 'assets/' + (known[sha] || uuid + ex);
    if (!known[sha]) nuevas.push({ file: uuid + ex, kb: Math.round(bytes.length / 1024) });
  }
  fs.writeFileSync(path.join(OUT, rel), bytes);
  map[uuid] = rel;
}

let html = template;
for (const [uuid, rel] of Object.entries(map)) html = html.split(uuid).join(rel);
fs.writeFileSync(path.join(OUT, 'index.html'), html);
fs.writeFileSync(path.join(OUT, 'names.json'), JSON.stringify(
  Object.fromEntries(Object.entries(map)
    .filter(([, r]) => r.startsWith('assets/'))
    .map(([, r]) => [path.basename(r), path.basename(r)])), null, 1));

console.log('assets extraídos:', Object.keys(map).length);
console.log('  nombre original recuperado:', Object.values(map).filter(r => r.startsWith('assets/') && !/^assets\/[0-9a-f-]{36}\./.test(r)).length);
if (nuevas.length) { console.log('  IMÁGENES NUEVAS (no están en public/assets):'); nuevas.forEach(n => console.log(`    ${n.file}  ${n.kb}KB`)); }
else console.log('  sin imágenes nuevas');
console.log('index.html legible:', html.length, 'bytes ->', path.join(OUT, 'index.html'));
