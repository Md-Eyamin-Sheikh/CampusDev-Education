import 'server-only';
import { readTabs } from '../sheets';
import { cacheTag } from 'next/cache';

export type FAQ = {
  id: string;
  status: string;
  sort: number;
  category: string;
  questionBn: string;
  questionEn: string;
  answerBn: string;
  answerEn: string;
};

export async function getFAQs(category?: string): Promise<FAQ[]> {
  'use cache';
  cacheTag('cms');

  try {
    const data = await readTabs('CMS', ['FAQs']);
    const rows = data['FAQs'] || [];
    
    let faqs: FAQ[] = rows
      .map((row) => ({
        id: row.id || '',
        status: row.status || '',
        sort: Number(row.sort) || 0,
        category: row.category || '',
        questionBn: row.questionBn || '',
        questionEn: row.questionEn || '',
        answerBn: row.answerBn || '',
        answerEn: row.answerEn || '',
      }))
      .filter((row) => row.status === 'published')
      .sort((a, b) => a.sort - b.sort);

    if (category) {
      faqs = faqs.filter((faq) => faq.category === category);
    }

    return faqs;
  } catch (error) {
    console.error('Error fetching FAQs from CMS:', error);
    return [];
  }
}
