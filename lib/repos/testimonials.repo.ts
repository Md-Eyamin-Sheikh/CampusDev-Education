import 'server-only';
import { readTabs } from '../sheets';
import { cacheTag } from 'next/cache';

export type Testimonial = {
  id: string;
  status: string;
  sort: number;
  quoteBn: string;
  quoteEn: string;
  authorName: string;
  authorRole: string;
  institutionName: string;
  consentGiven: boolean;
  consentDate: string;
};

export async function getTestimonials(): Promise<Testimonial[]> {
  'use cache';
  cacheTag('cms');

  try {
    const data = await readTabs('CMS', ['Testimonials']);
    const rows = data['Testimonials'] || [];
    
    const testimonials: Testimonial[] = rows
      .map((row) => ({
        id: row.id || '',
        status: row.status || '',
        sort: Number(row.sort) || 0,
        quoteBn: row.quoteBn || '',
        quoteEn: row.quoteEn || '',
        authorName: row.authorName || '',
        authorRole: row.authorRole || '',
        institutionName: row.institutionName || '',
        consentGiven: row.consentGiven === 'TRUE' || row.consentGiven === true,
        consentDate: row.consentDate || '',
      }))
      .filter((row) => row.status === 'published' && row.consentGiven)
      .sort((a, b) => a.sort - b.sort);

    return testimonials;
  } catch (error) {
    console.error('Error fetching testimonials from CMS:', error);
    return [];
  }
}
