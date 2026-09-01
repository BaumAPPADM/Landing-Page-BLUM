/**
 * Uploads image files into Sanity's media library so the team can pick them in
 * the Studio. Skips anything already uploaded (matched by SHA-1), so re-running
 * is safe and does not create duplicates.
 *
 *   node scripts/upload-assets.mjs <archivo...>
 */
import { createClient } from '@sanity/client';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import crypto from 'node:crypto';

const token = JSON.parse(fs.readFileSync(path.join(os.homedir(), '.config', 'sanity', 'config.json'), 'utf8')).authToken;
const client = createClient({ projectId: 'rfkrnrkt', dataset: 'production', apiVersion: '2024-10-01', token, useCdn: false });

const files = process.argv.slice(2);
if (!files.length) { console.error('Uso: node scripts/upload-assets.mjs <archivo...>'); process.exit(1); }

const existing = new Set(
  (await client.fetch('*[_type == "sanity.imageAsset"].sha1hash')).filter(Boolean),
);

let subidas = 0, saltadas = 0;
for (const file of files) {
  const buf = fs.readFileSync(file);
  const sha = crypto.createHash('sha1').update(buf).digest('hex');
  const name = path.basename(file);
  if (existing.has(sha)) { console.log(`  ya estaba   ${name}`); saltadas++; continue; }
  await client.assets.upload('image', buf, { filename: name });
  existing.add(sha);
  console.log(`  subida      ${name}`);
  subidas++;
}
console.log(`\nsubidas: ${subidas} | ya estaban: ${saltadas}`);
