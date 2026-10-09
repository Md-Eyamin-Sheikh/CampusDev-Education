import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://eduweb.com.bd';

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/thank-you', '/offline'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
