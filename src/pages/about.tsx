import { MDXComponents } from "@/components/core/mdx/MDXComponents";
import { useMDXComponent } from "next-contentlayer/hooks";
import { allAuthors } from "contentlayer/generated";
import type { InferGetStaticPropsType } from "next";

const DEFAULT_LAYOUT = "AuthorLayout";

export const getStaticProps = async () => {
  const author = allAuthors.find((p) => p.slug === "default");
  return { props: { author } };
};

export default function About({
  author,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const MDXContent = useMDXComponent(author?.body.code || "");
  return (
    <MDXContent
      layout={author?.layout || DEFAULT_LAYOUT}
      components={{ ...MDXComponents }}
      content={author}
    />
  );
}
