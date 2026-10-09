import 'server-only';
import { generateId } from '../ids';
import { appendRow } from '../sheets';
import { EstimateInput } from '../validate';

export async function createEstimate(
  data: EstimateInput & { leadId?: string; pricingVersion: string }
): Promise<{ estimateId: string; estimateMin: number; estimateMax: number }> {
  const estimateId = generateId('ES');
  const leadId = data.leadId || generateId('LD');
  const now = new Date().toISOString();

  let estimateMin = 8000;
  let estimateMax = 18000;

  if (data.sizeBand === 'small') {
    estimateMin = 8000;
    estimateMax = 15000;
  } else if (data.sizeBand === 'medium') {
    estimateMin = 15000;
    estimateMax = 30000;
  } else if (data.sizeBand === 'large') {
    estimateMin = 30000;
    estimateMax = 80000;
  }

  const moduleBonus = (data.modules?.length || 0) * 1500;
  estimateMin += moduleBonus;
  estimateMax += moduleBonus;

  const row = [
    estimateId,
    now,
    leadId,
    data.institutionType,
    data.sizeBand,
    (data.modules || []).join(', '),
    (data.languages || ['bn']).join(', '),
    data.deadlinePref || '',
    data.phone,
    `${estimateMin}-${estimateMax}`,
    data.pricingVersion,
    'generated'
  ];

  try {
    await appendRow('CRM', 'Estimates', row);
    await appendRow('CRM', 'Audit_Log', [now, 'api', 'create_estimate', 'Estimates', estimateId, `leadId=${leadId}`]);
  } catch (error) {
    console.error('Error creating estimate:', error);
  }

  return { estimateId, estimateMin, estimateMax };
}
