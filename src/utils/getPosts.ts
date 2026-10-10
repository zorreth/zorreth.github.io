import { getCollection } from 'astro:content';

export async function getPosts() {
  const posts = await getCollection('blog');

  return posts
    .filter((p) => !p.data.draft)
    .sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime());
}
