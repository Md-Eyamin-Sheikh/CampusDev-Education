import { NextRequest, NextResponse } from 'next/server';
import { EstimateSchema } from '../../../lib/validate';
import { createEstimate } from '../../../lib/repos/estimates.repo';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Check honeypot field
    if (body.honeypot) {
      return NextResponse.json({ ok: true, id: 'ok' });
    }

    // Validate body with Zod
    const parsed = EstimateSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { ok: false, code: 'VALIDATION', message: 'Invalid input', errors: parsed.error.flatten() },
        { status: 422 }
      );
    }

    const data = parsed.data;

    // Verify Turnstile token
    if (process.env.TURNSTILE_SECRET) {
      const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || '';
      
      const formData = new URLSearchParams();
      formData.append('secret', process.env.TURNSTILE_SECRET);
      formData.append('response', data.turnstileToken || '');
      formData.append('remoteip', ip);

      const turnstileRes = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
        method: 'POST',
        body: formData,
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
      });

      const turnstileData = await turnstileRes.json();
      if (!turnstileData.success) {
        return NextResponse.json(
          { ok: false, code: 'BOT', message: 'Verification failed' },
          { status: 400 }
        );
      }
    }

    const pricingVersion = process.env.PRICING_VERSION || 'v1';
    
    const result = await createEstimate({ ...data, pricingVersion });

    return NextResponse.json(
      { 
        ok: true, 
        id: result.estimateId, 
        estimateMin: result.estimateMin, 
        estimateMax: result.estimateMax 
      }, 
      { headers: { 'Cache-Control': 'no-store' } }
    );
  } catch (error) {
    console.error('Estimate submission error:', error);
    return NextResponse.json(
      { ok: false, code: 'TEMPORARY', message: 'An error occurred while processing your estimate. Please try again.' },
      { status: 500, headers: { 'Cache-Control': 'no-store' } }
    );
  }
}
