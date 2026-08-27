import { defineLive } from 'next-sanity/live';
import { client } from './client';

/**
 * Live content for Presentation: the Studio's preview pane re-renders as you
 * type. The token is read-only (viewer) and only reaches the browser while
 * draft mode is on, which only the Studio can turn on.
 */
export const { sanityFetch, SanityLive } = defineLive({
  client,
  serverToken: process.env.SANITY_API_READ_TOKEN,
  browserToken: process.env.SANITY_API_READ_TOKEN,
});
