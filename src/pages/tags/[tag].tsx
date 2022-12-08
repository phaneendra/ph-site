import type { GetStaticProps, InferGetStaticPropsType } from "next";
import type { ParsedUrlQuery } from "querystring";
import { allBlogs } from "contentlayer/generated";
import { TagSEO } from "@/components/core/SEO";
import ListLayout from "@/layouts/ListLayout";
import { siteMetadatum } from "contentlayer/generated";
import { sortedBlogPost } from "@/lib/content-layer/utils/sorted-blog-posts";
import { getAllTags } from "@/lib/content-layer/utils/get-tags";
import kebabCase from "@/lib/utils/kebabCase";

export async function getStaticPaths() {
  const tags = await getAllTags(allBlogs);

  return {
    paths: Object.keys(tags).map((tag) => ({
      params: {
        tag,
      },
    })),
    fallback: false,
  };
}

interface Params extends ParsedUrlQuery {
  tag: string;
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { tag } = context.params as Params;
  const allPosts = await sortedBlogPost(allBlogs);
  const filteredPosts = allPosts.filter(
    (post) =>
      post.draft !== true && post.tags?.map((t) => kebabCase(t)).includes(tag)
  );

  return { props: { posts: filteredPosts, tag } };
};

export default function Tag({
  posts,
  tag,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  // Capitalize first letter and convert space to dash
  const title = tag[0]?.toUpperCase() + tag.split(" ").join("-").slice(1);
  return (
    <>
      <TagSEO
        title={`${tag} - ${siteMetadatum.title}`}
        description={`${tag} tags - ${siteMetadatum.author}`}
      />
      <ListLayout posts={posts} title={title} />
    </>
  );
}
