import type { Blog } from 'contentlayer/generated';

export function sortedBlogPost(allBlogs: Blog[]) {
  const posts = allBlogs.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  return posts.filter((post) => !('draft' in post && post.draft === true));
}
