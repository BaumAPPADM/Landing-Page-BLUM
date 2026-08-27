'use client';

import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { apiVersion, dataset, projectId } from './sanity/env';
import { schemaTypes } from './sanity/schemas';

const SINGLETON_ID = 'landing';

export default defineConfig({
  name: 'blum',
  title: 'BLUM · Contenido',
  basePath: '/studio',
  projectId,
  dataset,
  schema: { types: schemaTypes },
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Contenido')
          .items([
            S.listItem()
              .title('Landing BLUM')
              .id(SINGLETON_ID)
              .child(
                S.document()
                  .schemaType('landing')
                  .documentId(SINGLETON_ID)
                  .title('Landing BLUM'),
              ),
          ]),
    }),
    visionTool({ defaultApiVersion: apiVersion }),
  ],
  document: {
    // The landing is a singleton: no "create new" and no duplicate/delete.
    actions: (prev, { schemaType }) =>
      schemaType === 'landing'
        ? prev.filter(({ action }) => action && !['unpublish', 'delete', 'duplicate'].includes(action))
        : prev,
  },
});
