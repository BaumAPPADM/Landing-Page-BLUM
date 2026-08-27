import { defineEnableDraftMode } from 'next-sanity/draft-mode';
import { client } from '@/sanity/client';

// The Studio calls this to turn on draft mode for the Presentation preview.
export const { GET } = defineEnableDraftMode({
  client: client.withConfig({ token: process.env.SANITY_API_READ_TOKEN }),
});
