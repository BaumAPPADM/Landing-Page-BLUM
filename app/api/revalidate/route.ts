import { revalidateTag } from 'next/cache';
import { NextResponse, type NextRequest } from 'next/server';
import { parseBody } from 'next-sanity/webhook';

/**
 * Sanity webhook target. Publishing in the Studio hits this route, which drops
 * the cached landing query so the next visitor sees the new content.
 */
export async function POST(req: NextRequest) {
  try {
    const { isValidSignature, body } = await parseBody<{ _type: string }>(
      req,
      process.env.SANITY_REVALIDATE_SECRET,
    );

    if (!isValidSignature) {
      return new NextResponse('Firma inválida', { status: 401 });
    }
    if (!body?._type) {
      return new NextResponse('Falta _type en el cuerpo', { status: 400 });
    }

    revalidateTag('landing', 'max');
    return NextResponse.json({ revalidated: true, type: body._type });
  } catch (err: any) {
    return new NextResponse(err?.message || 'Error', { status: 500 });
  }
}
