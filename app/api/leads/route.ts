import { NextRequest, NextResponse } from 'next/server';
import { LeadSchema, normalizePhone } from '../../../lib/validate';
import { createLead } from '../../../lib/repos/leads.repo';
import { sendTelegramAlert } from '../../../lib/alerts';

// TODO: Add Upstash rate limiting when @upstash/ratelimit is installed

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // 2. Check honeypot field
    if (body.honeypot) {
      return NextResponse.json({ ok: true, id: 'ok' }); // Silently discard
    }

    // 3. Validate body with Zod
    const parsed = LeadSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { ok: false, code: 'VALIDATION', message: 'Invalid input', errors: parsed.error.flatten() },
        { status: 422 }
      );
    }

    const data = parsed.data;

    // 5. Verify Turnstile token
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

    // 6. Normalize phone
    if (data.phone) {
      data.phone = normalizePhone(data.phone);
    }

    const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || '';

    const leadPayload = {
      ...data,
      source: data.utmSource || 'website_form',
      landingPage: data.landingPage || '/',
      language: data.language || 'bn',
      ip,
    };

    const { leadId } = await createLead(leadPayload);

    // 8. Call sendTelegramAlert
    await sendTelegramAlert({
      leadId,
      name: data.fullName,
      institution: data.institutionName,
      phone: data.phone,
      source: leadPayload.source,
      message: data.message,
    });

    // 10. Return success response
    return NextResponse.json(
      { ok: true, id: leadId }, 
      { headers: { 'Cache-Control': 'no-store' } }
    );
  } catch (error) {
    // 11. Catch all errors
    console.error('Lead submission error:', error);
    return NextResponse.json(
      { ok: false, code: 'TEMPORARY', message: 'Please try WhatsApp' },
      { status: 500, headers: { 'Cache-Control': 'no-store' } }
    );
  }
}
