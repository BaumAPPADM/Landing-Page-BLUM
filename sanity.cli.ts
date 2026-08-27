import { defineCliConfig } from 'sanity/cli';
import { dataset, projectId } from './sanity/env';

export default defineCliConfig({
  api: { projectId, dataset },
  studioHost: 'blum',
  deployment: { appId: 'nh88b9toxf2h78fqwixhmvrb' },
});
