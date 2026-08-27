import Landing from '@/components/Landing';
import { getLanding } from '@/sanity/queries';

export default async function Page() {
  const d = await getLanding();
  return <Landing d={d} />;
}
