import Landing from '@/components/Landing';
import { getLanding } from '@/sanity/queries';

/**
 * Bound how stale the prerendered HTML can get. <SanityLive> already refreshes
 * anyone with the page open the moment content is published; this is the safety
 * net for the first visitor after an edit, who would otherwise be served the
 * build-time snapshot indefinitely.
 */
export const revalidate = 60;

export default async function Page() {
  const d = await getLanding();
  return <Landing d={d} />;
}
