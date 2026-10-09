import 'server-only';
import { readTabs } from '../sheets';
import { cacheLife, cacheTag } from 'next/cache';

export type Package = {
  id: string;
  status: string;
  sort: number;
  tier: string;
  nameBn: string;
  nameEn: string;
  priceFromBdt: number;
  billing: 'one_time' | 'monthly';
  deliveryDays: number;
  featuresBn: string[];
  featuresEn: string[];
  highlight: boolean;
  ctaLabelBn: string;
  ctaLabelEn: string;
};

export async function getPackages(): Promise<Package[]> {
  'use cache';
  cacheTag('cms');
  cacheLife('minutes');

  try {
    const data = await readTabs('CMS', ['Packages']);
    const rows = data['Packages'] || [];
    
    const packages: Package[] = rows
      .filter((row) => row.status === 'published')
      .map((row) => ({
        id: row.id || '',
        status: row.status || '',
        sort: Number(row.sort) || 0,
        tier: row.tier || '',
        nameBn: row.nameBn || '',
        nameEn: row.nameEn || '',
        priceFromBdt: Number(row.priceFromBdt) || 0,
        billing: (row.billing as 'one_time' | 'monthly') || 'one_time',
        deliveryDays: Number(row.deliveryDays) || 0,
        featuresBn: (row.featuresBn || '').split(';').map((s: string) => s.trim()).filter(Boolean),
        featuresEn: (row.featuresEn || '').split(';').map((s: string) => s.trim()).filter(Boolean),
        highlight: row.highlight === 'TRUE' || row.highlight === true,
        ctaLabelBn: row.ctaLabelBn || '',
        ctaLabelEn: row.ctaLabelEn || '',
      }))
      .sort((a, b) => a.sort - b.sort);

    return packages;
  } catch (error) {
    console.error('Error fetching packages from CMS:', error);
    return [];
  }
}
