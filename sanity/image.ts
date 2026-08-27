import { createImageUrlBuilder } from '@sanity/image-url';
import type { Image } from 'sanity';
import { dataset, projectId } from './env';

const builder = createImageUrlBuilder({ projectId, dataset });

/** Sanity image -> CDN URL. Returns '' when the field is empty so <img src> stays harmless. */
export function urlFor(source?: Image | null): string {
  if (!source || !(source as any).asset) return '';
  return builder.image(source).auto('format').fit('max').url();
}
