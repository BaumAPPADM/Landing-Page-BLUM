import { groq } from 'next-sanity';
import { sanityFetch } from './live';

export const LANDING_QUERY = groq`*[_type == "landing"][0]`;

/**
 * defineLive handles caching and revalidation on its own: <SanityLive> keeps an
 * open connection, so publishing in the Studio refreshes the page without a
 * webhook or a polling interval.
 */
export async function getLanding(): Promise<any> {
  try {
    const { data } = await sanityFetch({ query: LANDING_QUERY });
    return data ?? null;
  } catch {
    // Sanity unreachable or dataset empty: fall back to the bundled defaults.
    return null;
  }
}
