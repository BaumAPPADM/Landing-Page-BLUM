import type { Metadata } from 'next';
import { draftMode } from 'next/headers';
import { VisualEditing } from 'next-sanity/visual-editing';
import './globals.css';
import './hover.css';
import { getLanding } from '@/sanity/queries';
import { urlFor } from '@/sanity/image';
import { SanityLive } from '@/sanity/live';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.blumapps.com';

export async function generateMetadata(): Promise<Metadata> {
  const d = await getLanding();
  const title = d?.seoTitle || 'BLUM · Software de riego: registro de medición y eventos';
  const description =
    d?.seoDescription ||
    'BLUM centraliza las mediciones y eventos que tu equipo registra en terreno, y te entrega alertas y tendencias para actuar antes de que las fallas afecten el cultivo.';
  const og = urlFor(d?.ogImage);
  return {
    // Sin metadataBase ni canonical, al compartir el enlace las redes no saben
    // cuál es el dominio oficial y pueden mostrar datos cacheados de antes.
    metadataBase: new URL(SITE_URL),
    title,
    description,
    alternates: { canonical: '/' },
    openGraph: {
      title,
      description,
      type: 'website',
      url: SITE_URL,
      siteName: 'BLUM',
      locale: 'es_CL',
      ...(og ? { images: [og] } : {}),
    },
    icons: { icon: '/assets/isotipo-nave.png' },
  };
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const { isEnabled: isDraft } = await draftMode();
  return (
    <html lang="es">
      <body>
        {children}
        <SanityLive />
        {isDraft ? <VisualEditing /> : null}
      </body>
    </html>
  );
}
