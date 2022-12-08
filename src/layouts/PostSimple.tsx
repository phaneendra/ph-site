import { ReactNode } from 'react';
import type { Blog } from 'contentlayer/generated';
import { Link } from '@/components';
import PageTitle from '@/components/PageTitle';
import SectionContainer from '@/components/SectionContainer';
import { BlogSEO } from '@/components/core/SEO';
import Comments from '@/components/blog/comments';
import ScrollTopAndComment from '@/components/ScrollTopAndComment';
import { siteMetadatum } from 'contentlayer/generated';
import formatDate from '@/lib/utils/formatDate';

interface Props {
  content: Blog;
  children: ReactNode;
  next?: { path: string; title: string };
  prev?: { path: string; title: string };
}

export default function PostLayout({ content, next, prev, children }: Props) {
  const { path, date, title } = content;

  return (
    <SectionContainer>
      <BlogSEO url={`${siteMetadatum.siteUrl}/${path}`} {...content} />
      <ScrollTopAndComment />
      <article>
        <div>
          <header>
            <div className="space-y-1 border-b border-border-color pb-10 text-center">
              <dl>
                <div>
                  <dt className="sr-only">Published on</dt>
                  <dd className="text-base font-medium leading-6 text-base-muted">
                    <time dateTime={date}>{formatDate(date)}</time>
                  </dd>
                </div>
              </dl>
              <div>
                <PageTitle>{title}</PageTitle>
              </div>
            </div>
          </header>
          <div className="divide-y divide-border-color pb-8 xl:divide-y-0 " style={{ gridTemplateRows: 'auto 1fr' }}>
            <div className="divide-y divide-border-color xl:col-span-3 xl:row-span-2 xl:pb-0">
              <div className="dark:prose-dark prose max-w-none pt-10 pb-8">{children}</div>
            </div>
            <Comments content={content} />
            <footer>
              <div className="flex flex-col text-sm font-medium sm:flex-row sm:justify-between sm:text-base">
                {prev && (
                  <div className="pt-4 xl:pt-8">
                    <Link href={`${prev.path}`} className="text-primary hover:text-primary-focus">
                      &larr; {prev.title}
                    </Link>
                  </div>
                )}
                {next && (
                  <div className="pt-4 xl:pt-8">
                    <Link href={`${next.path}`} className="text-primary hover:text-primary-focus">
                      {next.title} &rarr;
                    </Link>
                  </div>
                )}
              </div>
            </footer>
          </div>
        </div>
      </article>
    </SectionContainer>
  );
}
