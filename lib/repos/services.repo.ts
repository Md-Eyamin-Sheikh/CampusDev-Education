import 'server-only';
import { readTabs } from '../sheets';
import { cacheTag } from 'next/cache';

export type Service = {
  id: string;
  slug: string;
  status: string;
  sort: number;
  institutionType: string;
  titleBn: string;
  titleEn: string;
  summaryBn: string;
  summaryEn: string;
  icon: string;
  featuresBn: string[];
  featuresEn: string[];
  updatedAt: string;
};

export async function getServices(): Promise<Service[]> {
  'use cache';
  cacheTag('cms');

  try {
    const data = await readTabs('CMS', ['Services']);
    const rows = data['Services'] || [];
    
    const services: Service[] = rows
      .filter((row) => row.status === 'published')
      .map((row) => ({
        id: row.id || '',
        slug: row.slug || '',
        status: row.status || '',
        sort: Number(row.sort) || 0,
        institutionType: row.institutionType || '',
        titleBn: row.titleBn || '',
        titleEn: row.titleEn || '',
        summaryBn: row.summaryBn || '',
        summaryEn: row.summaryEn || '',
        icon: row.icon || '',
        featuresBn: (row.featuresBn || '').split(';').map((s: string) => s.trim()).filter(Boolean),
        featuresEn: (row.featuresEn || '').split(';').map((s: string) => s.trim()).filter(Boolean),
        updatedAt: row.updatedAt || '',
      }))
      .sort((a, b) => a.sort - b.sort);

    return services;
  } catch (error) {
    console.error('Error fetching services from CMS:', error);
    return [];
  }
}

export async function getServiceBySlug(slug: string): Promise<Service | null> {
  const services = await getServices();
  return services.find(s => s.slug === slug) || null;
}
