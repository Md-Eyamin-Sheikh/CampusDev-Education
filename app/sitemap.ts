import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://eduweb.com.bd';

  const staticRoutes = [
    '',
    '/services',
    '/demos',
    '/pricing',
    '/estimator',
    '/process',
    '/about',
    '/contact',
    '/audit',
    '/privacy',
    '/terms'
  ];

  const serviceTypes = [
    'school',
    'college',
    'madrasa',
    'coaching',
    'kindergarten',
    'technical'
  ];

  const sitemapRoutes: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));

  const dynamicServiceRoutes: MetadataRoute.Sitemap = serviceTypes.map((type) => ({
    url: `${baseUrl}/services/${type}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [...sitemapRoutes, ...dynamicServiceRoutes];
}
