import { ReactNode } from 'react';
import type { Blog, Authors } from 'contentlayer/generated';
import { Link, Image } from '@/components';
import PageTitle from '@/components/PageTitle';
import { BlogSEO } from '@/components/core/SEO';
import Tag from '@/components/Tag';
import Comments from '@/components/blog/comments';
import ScrollTopAndComment from '@/components/ScrollTopAndComment';
import { siteMetadatum } from 'contentlayer/generated';

const editUrl = (path) => `${siteMetadatum.siteRepo}/blob/master/data/${path}`;
const discussUrl = (path) =>
  `https://mobile.twitter.com/search?q=${encodeURIComponent(`${siteMetadatum.siteUrl}/${path}`)}`;

const postDateTemplate: Intl.DateTimeFormatOptions = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};

interface Props {
  content: Blog;
  authorDetails: Authors[];
  next?: { path: string; title: string };
  prev?: { path: string; title: string };
  children: ReactNode;
}

export default function PostLayout({ content, authorDetails, next, prev, children }: Props) {
  const { filePath, slug, path, date, title, tags } = content;
  const basePath = path.split('/')[0];

  return (
    <>
      <BlogSEO url={`${siteMetadatum.siteUrl}/${path}`} authorDetails={authorDetails} {...content} />
      <ScrollTopAndComment />
      <article>
        <div className="xl:divide-y xl:divide-border-color ">
          <header className="pt-6 xl:pb-6">
            <div className="space-y-1 text-center">
              <dl className="space-y-10">
                <div>
                  <dt className="sr-only">Published on</dt>
                  <dd className="text-base font-medium leading-6 text-base-muted">
                    <time dateTime={date}>
                      {new Date(date).toLocaleDateString(siteMetadatum.locale, postDateTemplate)}
                    </time>
                  </dd>
                </div>
              </dl>
              <div>
                <PageTitle>{title}</PageTitle>
              </div>
            </div>
          </header>
          <div
            className="divide-y divide-border-color bg-base-200/75 px-4 pb-8 xl:grid xl:grid-cols-4 xl:gap-x-6  xl:divide-y-0"
            style={{ gridTemplateRows: 'auto 1fr' }}
          >
            <dl className="pt-6 pb-10 xl:border-b xl:border-border-color xl:pt-11">
              <dt className="sr-only">Authors</dt>
              <dd>
                <ul className="flex justify-center space-x-8 sm:space-x-12 xl:block xl:space-x-0 xl:space-y-8">
                  {authorDetails.map((author) => (
                    <li className="flex items-center space-x-2" key={author.name}>
                      {author.avatar && (
                        <Image
                          src={author.avatar}
                          width={38}
                          height={38}
                          alt="avatar"
                          className="h-10 w-10 rounded-full"
                        />
                      )}
                      <dl className="whitespace-nowrap text-sm font-medium leading-5">
                        <dt className="sr-only">Name</dt>
                        <dd className="text-base-heading">{author.name}</dd>
                        <dt className="sr-only">Twitter</dt>
                        <dd>
                          {author.twitter && (
                            <Link href={author.twitter} className="text-primary hover:text-primary-focus">
                              {author.twitter.replace('https://twitter.com/', '@')}
                            </Link>
                          )}
                        </dd>
                      </dl>
                    </li>
                  ))}
                </ul>
              </dd>
            </dl>
            <div className="divide-y divide-border-color xl:col-span-3 xl:row-span-2 xl:pb-0">
              <div className="prose max-w-none pt-10 pb-8">{children}</div>
              <div className="pt-6 pb-6 text-sm">
                <Link href={discussUrl(slug)} rel="nofollow">
                  {'Discuss on Twitter'}
                </Link>
                {` • `}
                <Link href={editUrl(filePath)}>{'View on GitHub'}</Link>
              </div>
              <Comments content={content} />
            </div>
            <footer>
              <div className="divide-border-color text-sm font-medium leading-5 xl:col-start-1 xl:row-start-2 xl:divide-y">
                {tags && (
                  <div className="py-4 xl:py-8">
                    <h2 className="text-xs uppercase tracking-wide text-base-content">Tags</h2>
                    <div className="flex flex-wrap">
                      {tags.map((tag) => (
                        <Tag key={tag} text={tag} />
                      ))}
                    </div>
                  </div>
                )}
                {(next || prev) && (
                  <div className="flex justify-between py-4 xl:block xl:space-y-8 xl:py-8">
                    {prev && (
                      <div>
                        <h2 className="text-xs uppercase tracking-wide text-base-content">Previous Article</h2>
                        <div className="text-primary hover:text-primary-focus">
                          <Link href={`${prev.path}`}>{prev.title}</Link>
                        </div>
                      </div>
                    )}
                    {next && (
                      <div>
                        <h2 className="text-xs uppercase tracking-wide text-base-content">Next Article</h2>
                        <div className="text-primary hover:text-primary-focus">
                          <Link href={`/blog/${next.path}`}>{next.title}</Link>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
              <div className="pt-4 xl:pt-8">
                <Link href={`/${basePath}`} className="text-primary hover:text-primary-focus">
                  &larr; Back to the blog
                </Link>
              </div>
            </footer>
          </div>
        </div>
      </article>
    </>
  );
}
