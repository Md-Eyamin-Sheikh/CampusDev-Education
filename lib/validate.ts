import { z } from 'zod';

export function normalizePhone(phone: string): string {
  const cleaned = phone.replace(/[\s-]/g, '');
  if (cleaned.startsWith('01')) {
    return '+88' + cleaned;
  }
  return cleaned;
}

const phoneRegex = /^(?:\+8801|01)[3-9]\d{8}$/;

export const LeadSchema = z.object({
  fullName: z.string().min(2).max(80),
  role: z.enum(['headmaster','principal','mudir','chairman','teacher','it_officer','other']),
  institutionName: z.string().min(2).max(120),
  institutionType: z.enum(['school','college','madrasa','coaching','kindergarten','technical','other']),
  district: z.string().min(2).max(60),
  phone: z.string().regex(phoneRegex, 'Invalid Bangladeshi phone number'),
  whatsappSame: z.boolean().default(true),
  email: z.string().email().optional().or(z.literal('')),
  message: z.string().max(1000).optional(),
  preferredTime: z.string().optional(),
  language: z.enum(['bn', 'en']).default('bn'),
  landingPage: z.string().optional(),
  utmSource: z.string().optional(),
  utmCampaign: z.string().optional(),
  consentGiven: z.literal(true),
  honeypot: z.string().optional(),
  turnstileToken: z.string().min(1)
});

export const EstimateSchema = z.object({
  institutionType: z.enum(['school','college','madrasa','coaching','kindergarten','technical','other']),
  sizeBand: z.enum(['small','medium','large']),
  modules: z.array(z.string()).min(1),
  languages: z.array(z.enum(['bn','en'])).min(1),
  deadlinePref: z.string().optional(),
  phone: z.string().regex(phoneRegex, 'Invalid Bangladeshi phone number'),
  consentGiven: z.literal(true),
  honeypot: z.string().optional(),
  turnstileToken: z.string().min(1)
});

export const AuditSchema = z.object({
  websiteUrl: z.string().url(),
  institutionName: z.string().min(2).max(120),
  phone: z.string().regex(phoneRegex, 'Invalid Bangladeshi phone number'),
  consentGiven: z.literal(true),
  honeypot: z.string().optional(),
  turnstileToken: z.string().min(1)
});

export type LeadInput = z.infer<typeof LeadSchema>;
export type EstimateInput = z.infer<typeof EstimateSchema>;
export type AuditInput = z.infer<typeof AuditSchema>;
