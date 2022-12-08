import Head from "next/head";
import { useRouter } from "next/router";
import { siteMetadatum } from "contentlayer/generated";
import type { Blog, Authors } from "contentlayer/generated";

interface CommonSEOProps {
  title: string;
  description: string | undefined;
  ogType: string;
  ogImage:
    | string
    | {
        "@type": string;
        url: string;
      }[];
  twImage: string | undefined;
  canonicalUrl?: string;
}

const CommonSEO = ({
  title,
  description,
  ogType,
  ogImage,
  twImage,
  canonicalUrl,
}: CommonSEOProps) => {
  const router = useRouter();
  return (
    <Head>
      <title>{title}</title>
      <meta name="robots" content="follow, index" />
      <meta name="description" content={description} />
      <meta
        property="og:url"
        content={`${siteMetadatum.siteUrl}${router.asPath}`}
      />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content={siteMetadatum.title} />
      <meta property="og:description" content={description} />
      <meta property="og:title" content={title} />
      {Array.isArray(ogImage) ? (
        ogImage.map(({ url }) => (
          <meta property="og:image" content={url} key={url} />
        ))
      ) : (
        <meta property="og:image" content={ogImage} key={ogImage} />
      )}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={siteMetadatum.twitter} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={twImage} />
      <link
        rel="canonical"
        href={
          canonicalUrl
            ? canonicalUrl
            : `${siteMetadatum.siteUrl}${router.asPath}`
        }
      />
    </Head>
  );
};

interface PageSEOProps {
  title: string;
  description: string | undefined;
}

export const PageSEO = ({ title, description }: PageSEOProps) => {
  const ogImageUrl = `${siteMetadatum.siteUrl}${siteMetadatum.socialBanner}`;
  const twImageUrl = `${siteMetadatum.siteUrl}${siteMetadatum.socialBanner}`;
  return (
    <CommonSEO
      title={title}
      description={description}
      ogType="website"
      ogImage={ogImageUrl}
      twImage={twImageUrl}
    />
  );
};

export const TagSEO = ({ title, description }: PageSEOProps) => {
  const ogImageUrl = `${siteMetadatum.siteUrl}${siteMetadatum.socialBanner}`;
  const twImageUrl = `${siteMetadatum.siteUrl}${siteMetadatum.socialBanner}`;
  const router = useRouter();
  return (
    <>
      <CommonSEO
        title={title}
        description={description}
        ogType="website"
        ogImage={ogImageUrl}
        twImage={twImageUrl}
      />
      <Head>
        <link
          rel="alternate"
          type="application/rss+xml"
          title={`${description} - RSS feed`}
          href={`${siteMetadatum.siteUrl}${router.asPath}/feed.xml`}
        />
      </Head>
    </>
  );
};

interface BlogSeoProps extends Blog {
  authorDetails?: Authors[];
  url: string;
}

export const BlogSEO = ({
  authorDetails,
  title,
  summary,
  date,
  lastmod,
  url,
  images = [],
  canonicalUrl,
}: BlogSeoProps) => {
  const publishedAt = new Date(date).toISOString();
  const modifiedAt = new Date(lastmod || date).toISOString();
  const imagesArr =
    images.length === 0
      ? [siteMetadatum.socialBanner]
      : typeof images === "string"
      ? [images]
      : images;

  const featuredImages = imagesArr.map((img) => {
    return {
      "@type": "ImageObject",
      url: `${siteMetadatum.siteUrl}${img}`,
    };
  });

  let authorList;
  if (authorDetails) {
    authorList = authorDetails.map((author) => {
      return {
        "@type": "Person",
        name: author.name,
      };
    });
  } else {
    authorList = {
      "@type": "Person",
      name: siteMetadatum.author,
    };
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    headline: title,
    image: featuredImages,
    datePublished: publishedAt,
    dateModified: modifiedAt,
    author: authorList,
    publisher: {
      "@type": "Organization",
      name: siteMetadatum.author,
      logo: {
        "@type": "ImageObject",
        url: `${siteMetadatum.siteUrl}${siteMetadatum.siteLogo}`,
      },
    },
    description: summary,
  };

  const twImageUrl = featuredImages[0]?.url;

  return (
    <>
      <CommonSEO
        title={title}
        description={summary}
        ogType="article"
        ogImage={featuredImages}
        twImage={twImageUrl}
        canonicalUrl={canonicalUrl}
      />
      <Head>
        {date && (
          <meta property="article:published_time" content={publishedAt} />
        )}
        {lastmod && (
          <meta property="article:modified_time" content={modifiedAt} />
        )}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData, null, 2),
          }}
        />
      </Head>
    </>
  );
};
