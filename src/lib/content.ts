import { getCollection, type CollectionEntry } from 'astro:content';
import type { Lang } from '@/i18n/ui';

/** Entry ids look like `en/my-post`; the slug is the part after the language folder. */
export const slugOf = (id: string) => id.split('/').slice(1).join('/');

export async function getPosts(lang: Lang): Promise<CollectionEntry<'blog'>[]> {
  const posts = await getCollection('blog', (e) => e.id.startsWith(`${lang}/`) && !e.data.draft);
  return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

export async function getCaseStudies(lang: Lang): Promise<CollectionEntry<'projects'>[]> {
  return getCollection('projects', (e) => e.id.startsWith(`${lang}/`));
}
