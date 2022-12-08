import type { Blog } from 'contentlayer/generated';

export const sluggifyTitle = (title: string) => {
  const re = /[^\w\s]/g;
  return title.trim().toLowerCase().replace(re, '').replace(/\s+/g, '-');
};

export async function getAllTags(allBlogs: Blog[]) {
  const tagCount: Record<string, number> = {};

  // Iterate through each post, putting all found tags into `tags`
  allBlogs.forEach((file) => {
    if (file.tags && file.draft !== true) {
      file.tags.forEach((tag) => {
        const formattedTag = sluggifyTitle(tag);
        if (formattedTag in tagCount) {
          tagCount[formattedTag] += 1;
        } else {
          tagCount[formattedTag] = 1;
        }
      });
    }
  });

  return tagCount;
}
