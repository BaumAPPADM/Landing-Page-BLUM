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
  stega: {
    studioUrl: '/studio',
    // Only plain copy gets the invisible edit markers. iconPath feeds an SVG
    // `d` attribute and the colour/URL fields feed CSS — stega there renders
    // garbage, so they stay clean.
    filter: (props) => {
      const last = String(props.sourcePath[props.sourcePath.length - 1] ?? '');
      if (['iconPath', 'href', 'heroTitleAccentColor'].includes(last)) return false;
      if (/Url$|Color$|Path$/.test(last)) return false;
      return props.filterDefault(props);
    },
  },
});
