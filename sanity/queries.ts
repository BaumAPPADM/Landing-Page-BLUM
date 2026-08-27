import { groq } from 'next-sanity';
import { client } from './client';

export const LANDING_QUERY = groq`*[_type == "landing"][0]`;

/** Cached fetch tagged 'landing' so the Sanity webhook can revalidate it on publish. */
export async function getLanding() {
  try {
    return await client.fetch(
      LANDING_QUERY,
      {},
      // 10s: lo que publicas en Sanity aparece en el sitio casi al instante,
      // sin dejar que cada visita golpee la API de Sanity.
      { next: { revalidate: 10, tags: ['landing'] } },
    );
  } catch {
    // Sanity unreachable or dataset empty: fall back to the bundled defaults.
    return null;
  }
}
