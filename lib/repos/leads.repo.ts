import 'server-only';
import { generateId } from '../ids';
import { appendRow } from '../sheets';
import { LeadInput } from '../validate';

export type LeadRow = {
  leadId: string;
  createdAt: string;
  fullName: string;
  role: string;
  institutionName: string;
  institutionType: string;
  district: string;
  phone: string;
  whatsappSame: boolean;
  email: string;
  message: string;
  preferredTime: string;
  language: string;
  source: string;
  landingPage: string;
  ip: string;
  status: string;
};

export async function createLead(data: LeadInput & { source: string; landingPage: string; language: string; ip?: string }): Promise<{ leadId: string }> {
  const leadId = generateId('LD');
  const now = new Date().toISOString();

  const row = [
    leadId,
    now,
    data.fullName,
    data.role,
    data.institutionName,
    data.institutionType,
    data.district,
    data.phone,
    data.whatsappSame,
    data.email || '',
    data.message || '',
    data.preferredTime || '',
    data.language,
    data.source,
    data.landingPage,
    data.ip || '',
    'new' // status
  ];

  try {
    await appendRow('CRM', 'Leads', row);
    await appendRow('CRM', 'Audit_Log', [now, 'api', 'create_lead', 'Leads', leadId, `source=${data.source}`]);
  } catch (error) {
    console.error('Error creating lead:', error);
  }

  return { leadId };
}
