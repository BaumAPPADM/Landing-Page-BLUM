/**
 * Pushes the copy changes from the latest design export into Sanity.
 * Rich text is taken verbatim from the export (see scratchpad/extract-rich.mjs),
 * so the bold runs match the design instead of being retyped.
 */
import { createClient } from '@sanity/client';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';

const token = JSON.parse(fs.readFileSync(path.join(os.homedir(), '.config', 'sanity', 'config.json'), 'utf8')).authToken;
const client = createClient({ projectId: 'rfkrnrkt', dataset: 'production', apiVersion: '2024-10-01', token, useCdn: false });

const RICH = JSON.parse(fs.readFileSync(process.argv[2], 'utf8'));
let n = 0;
const key = () => `k${++n}`;
const pt = (parts) => [{
  _type: 'block', _key: key(), style: 'normal', markDefs: [],
  children: parts.map(([text, mark]) => ({ _type: 'span', _key: key(), text, marks: mark ? [mark] : [] })),
}];

const doc = await client.fetch('*[_id=="landing"][0]{metodoStages, empezarCards}');

const stages = doc.metodoStages;
stages[2].desc = pt(RICH.metodoStage3);
const cards = doc.empezarCards;
cards[0].desc = pt(RICH.empezarCard0);
cards[1].desc = pt(RICH.empezarCard1);

const res = await client.patch('landing').set({
  heroTitlePost: 'Saber qué ocurre en terreno.',
  problemaParagraph: pt(RICH.problemaParagraph),
  metodoStages: stages,
  franjaText: pt(RICH.franjaText),
  appFlowText: pt(RICH.appFlowText),
  apiTitle: 'API abierta y sin costo',
  apiText: pt(RICH.apiText),
  apiCta: 'Consultar integración',
  empezarCards: cards,
  partnerBadge: 'CERTIFICADO',
  partnerRole: 'Ingeniería y servicios de riego tecnificado en Chile, Perú y México — el partner de origen de Blum.',
  planesApiNote: '* La API de Blum es abierta y sin costo. Solo se cotiza cuando la integración requiere un desarrollo a medida — disponible desde el plan Productor mediano.',
  contactoParagraph: pt(RICH.contactoParagraph),
}).commit();

console.log('contenido actualizado | revisión', res._rev);
