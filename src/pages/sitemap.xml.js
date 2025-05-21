import { SITE_URL } from '../consts';

export async function get() {
  // In a real implementation, you might fetch this from a CMS or file system
  const pages = [
    { url: '/', changefreq: 'daily', priority: 1.0 },
    { url: '/about', changefreq: 'monthly', priority: 0.8 },
    { url: '/roadmap', changefreq: 'weekly', priority: 0.9 },
    // Add more pages as needed
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${pages
      .map(
        (page) => `
      <url>
        <loc>${SITE_URL}${page.url}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>${page.changefreq}</changefreq>
        <priority>${page.priority}</priority>
      </url>
    `
      )
      .join('')}
  </urlset>`;

  return {
    body: sitemap,
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=86400', // 24 hours
    },
  };
}
