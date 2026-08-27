/** Applies the new hero design to Sanity: swaps the image, drops the removed field. */
import { createClient } from '@sanity/client';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';

const token = JSON.parse(fs.readFileSync(path.join(os.homedir(), '.config', 'sanity', 'config.json'), 'utf8')).authToken;
const client = createClient({ projectId: 'rfkrnrkt', dataset: 'production', apiVersion: '2024-10-01', token, useCdn: false });

const file = 'hero-terreno-oficina-v2.png';
const asset = await client.assets.upload('image', fs.createReadStream(path.join('public', 'assets', file)), { filename: file });
console.log('imagen subida:', asset._id, (asset.size / 1024 / 1024).toFixed(1) + ' MB');

const res = await client
  .patch('landing')
  .set({ heroImage: { _type: 'image', asset: { _type: 'reference', _ref: asset._id } } })
  .unset(['heroScrollLabel'])
  .commit();
console.log('documento actualizado | revisión', res._rev);
