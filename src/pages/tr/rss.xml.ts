import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { profile } from '@/data/profile';
import { ui } from '@/i18n/ui';
import { localizePath } from '@/i18n/utils';
import { getPosts, slugOf } from '@/lib/content';

export async function GET(context: APIContext) {
  const posts = await getPosts('tr');
  return rss({
    title: `${profile.name} · ${ui.tr['blog.title']}`,
    description: ui.tr['blog.lead'],
    site: context.site ?? profile.site,
    customData: '<language>tr</language>',
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: localizePath('tr', `/blog/${slugOf(post.id)}/`),
      categories: post.data.tags,
    })),
  });
}
