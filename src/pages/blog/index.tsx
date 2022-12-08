import { allBlogs } from "contentlayer/generated";
import type { InferGetStaticPropsType } from "next";
import { siteMetadatum } from "contentlayer/generated";
import ListLayout from "@/layouts/ListLayout";
import { PageSEO } from "@/components/core/SEO";
import { sortedBlogPost } from "@/lib/content-layer/utils/sorted-blog-posts";

export const POSTS_PER_PAGE = 5;

export const getStaticProps = async () => {
  const posts = sortedBlogPost(allBlogs);
  const initialDisplayPosts = posts.slice(0, POSTS_PER_PAGE);
  const pagination = {
    currentPage: 1,
    totalPages: Math.ceil(posts.length / POSTS_PER_PAGE),
  };

  return { props: { initialDisplayPosts, posts, pagination } };
};

export default function Blog({
  posts,
  initialDisplayPosts,
  pagination,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <PageSEO
        title={`Blog - ${siteMetadatum.author}`}
        description={siteMetadatum.description}
      />
      <ListLayout
        posts={posts}
        initialDisplayPosts={initialDisplayPosts}
        pagination={pagination}
        title="All Posts"
      />
    </>
  );
}
