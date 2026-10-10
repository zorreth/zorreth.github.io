import rss from '@astrojs/rss';
import { getPosts } from '../utils/getPosts';

export async function GET(context) {
  const posts = await getPosts();

  return rss({
    title: 'Zorreth Blog',
    description: 'Full-stack developer, focused on building a high quality web applications of any size and purpose.',
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      author: 'Kirill Siukhin',
      link: `/blog/${post.id}/`,
    })),
  });
}
