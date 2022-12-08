import type { GetStaticProps, InferGetStaticPropsType } from "next";
import type { ParsedUrlQuery } from "querystring";
import { useMDXComponent } from "next-contentlayer/hooks";
import { allBlogs, allAuthors } from "contentlayer/generated";
import PageTitle from "@/components/PageTitle";
import { MDXComponents } from "@/components/core/mdx/MDXComponents";
import { sortedBlogPost } from "@/lib/content-layer/utils/sorted-blog-posts";

const DEFAULT_LAYOUT = "PostLayout";

export async function getStaticPaths() {
  const posts = allBlogs;
  return {
    paths: posts.map((p) => ({
      params: {
        slug: p.slug.split("/"),
      },
    })),
    fallback: false,
  };
}

interface Params extends ParsedUrlQuery {
  slug: string | string[];
}

export const getStaticProps: GetStaticProps = async (context) => {
  let { slug } = context.params as Params;
  slug = (slug as string[]).join("/");
  const allPosts = sortedBlogPost(allBlogs);
  const postIndex = allPosts.findIndex((post) => post.slug === slug);
  const prev = allPosts[postIndex + 1] || null;
  const next = allPosts[postIndex - 1] || null;
  const post = allPosts.find((post) => post.slug === slug);
  const authorList = post?.authors || ["default"];
  const authorDetails = authorList.map((author) => {
    return allAuthors.find((p) => p.slug === author);
  });

  return {
    props: {
      post,
      authorDetails,
      prev,
      next,
    },
  };
};

export default function Blog({
  post,
  authorDetails,
  prev,
  next,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const MDXContent = useMDXComponent(post?.body.code || "");

  return (
    <>
      {"draft" in post && post.draft !== true ? (
        <MDXContent
          layout={post.layout || DEFAULT_LAYOUT}
          toc={post.toc}
          components={{ ...MDXComponents }}
          content={post}
          authorDetails={authorDetails}
          prev={prev}
          next={next}
        />
      ) : (
        <div className="mt-24 text-center">
          <PageTitle>
            Under Construction{" "}
            <span role="img" aria-label="roadwork sign">
              🚧
            </span>
          </PageTitle>
        </div>
      )}
    </>
  );
}
