import { createClient } from 'next-sanity';
import { apiVersion, dataset, projectId } from './env';

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  // Next caches this query itself (revalidate + tag), so going straight to the
  // API keeps builds and revalidations from picking up a stale CDN copy.
  useCdn: false,
  perspective: 'published',
});
