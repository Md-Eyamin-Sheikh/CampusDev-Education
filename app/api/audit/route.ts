import { NextRequest, NextResponse } from 'next/server';
import { AuditSchema } from '../../../lib/validate';
import { createLead } from '../../../lib/repos/leads.repo';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Check honeypot field
    if (body.honeypot) {
      return NextResponse.json({ ok: true, id: 'ok' });
    }

    // Validate body with Zod
    const parsed = AuditSchema.safeParse(body);
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

    const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || '';

    const leadData = {
      fullName: data.institutionName || 'Audit Request',
      role: 'other' as const,
      institutionName: data.institutionName,
      institutionType: 'other' as const,
      district: 'Unknown',
      phone: data.phone,
      whatsappSame: true,
      message: `Audit request for website: ${data.websiteUrl}`,
      consentGiven: data.consentGiven,
      turnstileToken: data.turnstileToken || 'dev',
      source: 'audit',
      landingPage: '/audit',
      language: 'bn' as const,
      ip,
    };

    const { leadId } = await createLead(leadData);

    return NextResponse.json(
      { ok: true, id: leadId }, 
      { headers: { 'Cache-Control': 'no-store' } }
    );
  } catch (error) {
    console.error('Audit submission error:', error);
    return NextResponse.json(
      { ok: false, code: 'TEMPORARY', message: 'An error occurred while processing your audit request. Please try again.' },
      { status: 500, headers: { 'Cache-Control': 'no-store' } }
    );
  }
}
