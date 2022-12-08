import { PageSEO } from '@/components/core/SEO';
import { siteMetadatum } from 'contentlayer/generated';
import { allBlogs } from 'contentlayer/generated';
import ListLayout from 'src/layouts/ListLayout';
import { POSTS_PER_PAGE } from '..';
import { InferGetStaticPropsType } from 'next';
import { sortedBlogPost } from '@/lib/content-layer/utils/sorted-blog-posts';

export const getStaticPaths = async () => {
  const totalPosts = allBlogs;
  const totalPages = Math.ceil(totalPosts.length / POSTS_PER_PAGE);
  const paths = Array.from({ length: totalPages }, (_, i) => ({
    params: { page: (i + 1).toString() },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const {
    params: { page },
  } = context;
  const posts = await sortedBlogPost(allBlogs);
  const pageNumber = parseInt(page as string);
  const initialDisplayPosts = posts.slice(POSTS_PER_PAGE * (pageNumber - 1), POSTS_PER_PAGE * pageNumber);
  const pagination = {
    currentPage: pageNumber,
    totalPages: Math.ceil(posts.length / POSTS_PER_PAGE),
  };

  return {
    props: {
      posts,
      initialDisplayPosts,
      pagination,
    },
  };
};

export default function PostPage({
  posts,
  initialDisplayPosts,
  pagination,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <PageSEO title={siteMetadatum.title} description={siteMetadatum.description} />
      <ListLayout posts={posts} initialDisplayPosts={initialDisplayPosts} pagination={pagination} title="All Posts" />
    </>
  );
}
