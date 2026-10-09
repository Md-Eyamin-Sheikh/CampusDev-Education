import 'server-only';
import { readTabs } from '../sheets';
import { cacheLife, cacheTag } from 'next/cache';

export type SiteSettings = {
  key: string;
  valueBn: string;
  valueEn: string;
  type: string;
  notes: string;
};

export async function getSettings(): Promise<Record<string, SiteSettings>> {
  'use cache';
  cacheTag('cms');
  cacheLife('minutes');

  try {
    const data = await readTabs('CMS', ['Settings']);
    const rows = data['Settings'] || [];
    
    const settings: Record<string, SiteSettings> = {};
    for (const row of rows) {
      if (row.key) {
        settings[row.key] = {
          key: row.key,
          valueBn: row.valueBn || '',
          valueEn: row.valueEn || '',
          type: row.type || 'text',
          notes: row.notes || '',
        };
      }
    }
    return settings;
  } catch (error) {
    console.error('Error fetching settings from CMS:', error);
    return {};
  }
}
