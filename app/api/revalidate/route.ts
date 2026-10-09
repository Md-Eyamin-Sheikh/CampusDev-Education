import { NextRequest, NextResponse } from 'next/server';
import { revalidateTag } from 'next/cache';
import crypto from 'crypto';

export async function POST(request: NextRequest) {
  const secret = request.headers.get('x-revalidate-secret');
  const envSecret = process.env.REVALIDATE_SECRET || '';

  // Use constant-time comparison to prevent timing attacks
  const secretBuffer = Buffer.from(secret || '', 'utf-8');
  const envSecretBuffer = Buffer.from(envSecret, 'utf-8');

  let isMatch = false;
  if (secretBuffer.length === envSecretBuffer.length && envSecretBuffer.length > 0) {
    isMatch = crypto.timingSafeEqual(secretBuffer, envSecretBuffer);
  }

  if (!isMatch) {
    return NextResponse.json({ ok: false }, { status: 401 });
  }

  revalidateTag('cms', 'seconds');

  return NextResponse.json({ revalidated: true, now: Date.now() });
}

export async function GET() {
  return NextResponse.json({ ok: true, info: 'EduWeb revalidate endpoint' });
}
