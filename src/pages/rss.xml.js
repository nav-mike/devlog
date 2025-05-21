import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE_TITLE, SITE_DESCRIPTION, SITE_URL, SITE_AUTHOR } from '../consts';

// Sort posts by publication date
const sortPosts = (a, b) => 
  new Date(b.data.pubDate).valueOf() - new Date(a.data.pubDate).valueOf();

export async function GET(context) {
  const posts = (await getCollection('blog')).sort(sortPosts);
  
  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: SITE_URL,
    stylesheet: '/rss-style.xsl',
    customData: `
      <language>en-us</language>
      <copyright>${new Date().getFullYear()} ${SITE_AUTHOR}. All rights reserved.</copyright>
      <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
      <docs>https://validator.w3.org/feed/docs/rss2.html</docs>
      <generator>Astro</generator>
      <managingEditor>${SITE_AUTHOR} (contact@yourdomain.com)</managingEditor>
      <webMaster>${SITE_AUTHOR} (contact@yourdomain.com)</webMaster>
    `,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `${SITE_URL}/blog/${post.slug}/`,
      author: post.data.author || SITE_AUTHOR,
      categories: post.data.tags || [],
      customData: `
        <guid isPermaLink="true">${SITE_URL}/blog/${post.slug}/</guid>
        ${post.data.coverImage ? `<media:content url="${SITE_URL}${post.data.coverImage}" medium="image" />` : ''}
      `,
    })),
  });
}
