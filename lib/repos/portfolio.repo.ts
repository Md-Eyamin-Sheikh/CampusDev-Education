import 'server-only';
import { readTabs } from '../sheets';
import { cacheTag } from 'next/cache';

export type PortfolioItem = {
  id: string;
  slug: string;
  status: string;
  sort: number;
  institutionNameBn: string;
  institutionNameEn: string;
  institutionType: string;
  district: string;
  projectType: string;
  summaryBn: string;
  summaryEn: string;
  liveUrl: string;
  thumbnailUrl: string;
  tags: string[];
  verified: boolean;
  permissionToPublish: boolean;
  completedOn: string;
  updatedAt: string;
};

export async function getPortfolio(): Promise<PortfolioItem[]> {
  'use cache';
  cacheTag('cms');

  try {
    const data = await readTabs('CMS', ['Portfolio']);
    const rows = data['Portfolio'] || [];
    
    const items: PortfolioItem[] = rows
      .map((row) => ({
        id: row.id || '',
        slug: row.slug || '',
        status: row.status || '',
        sort: Number(row.sort) || 0,
        institutionNameBn: row.institutionNameBn || '',
        institutionNameEn: row.institutionNameEn || '',
        institutionType: row.institutionType || '',
        district: row.district || '',
        projectType: row.projectType || '',
        summaryBn: row.summaryBn || '',
        summaryEn: row.summaryEn || '',
        liveUrl: row.liveUrl || '',
        thumbnailUrl: row.thumbnailUrl || '',
        tags: (row.tags || '').split(';').map((s: string) => s.trim()).filter(Boolean),
        verified: row.verified === 'TRUE' || row.verified === true,
        permissionToPublish: row.permissionToPublish === 'TRUE' || row.permissionToPublish === true,
        completedOn: row.completedOn || '',
        updatedAt: row.updatedAt || '',
      }))
      .filter((row) => row.status === 'published' && row.verified && row.permissionToPublish)
      .sort((a, b) => a.sort - b.sort);

    return items;
  } catch (error) {
    console.error('Error fetching portfolio from CMS:', error);
    return [];
  }
}

export async function getPortfolioBySlug(slug: string): Promise<PortfolioItem | null> {
  const portfolio = await getPortfolio();
  return portfolio.find(p => p.slug === slug) || null;
}
