/** Points the footer's store links at the real app listings. */
import { createClient } from '@sanity/client';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';

const token = JSON.parse(fs.readFileSync(path.join(os.homedir(), '.config', 'sanity', 'config.json'), 'utf8')).authToken;
const client = createClient({ projectId: 'rfkrnrkt', dataset: 'production', apiVersion: '2024-10-01', token, useCdn: false });

const APP_STORE = 'https://apps.apple.com/cl/app/baumapp/id6751601274';
const PLAY_STORE = 'https://play.google.com/store/apps/details?id=com.baumsystem.baumapp';

const doc = await client.fetch('*[_id=="landing"][0]{footerColumns}');
const cols = doc.footerColumns;
cols[2].links[0].href = APP_STORE;
cols[2].links[1].href = PLAY_STORE;

const res = await client
  .patch('landing')
  .set({ footerColumns: cols, appStoreUrl: APP_STORE, playStoreUrl: PLAY_STORE })
  .commit();
console.log('actualizado | revisión', res._rev);
