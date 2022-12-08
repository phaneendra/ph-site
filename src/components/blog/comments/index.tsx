import { siteMetadatum } from 'contentlayer/generated';
import dynamic from 'next/dynamic';
import type { Blog } from 'contentlayer/generated';

interface Props {
  content: Blog;
}

const UtterancesComponent = dynamic(
  () => {
    return import('src/components/blog/comments/Utterances');
  },
  { ssr: false }
);
const GiscusComponent = dynamic(
  () => {
    return import('src/components/blog/comments/Giscus');
  },
  { ssr: false }
);
const DisqusComponent = dynamic(
  () => {
    return import('src/components/blog/comments/Disqus');
  },
  { ssr: false }
);

const Comments = ({ content }: Props) => {
  let term;
  switch (siteMetadatum.giscusConfigMapping || siteMetadatum.utterancesConfigIssueTerm) {
    case 'pathname':
      term = content.slug;
      break;
    case 'url':
      term = window.location.href;
      break;
    case 'title':
      term = content.title;
      break;
  }
  return (
    <div id="comment">
      {siteMetadatum.commentProvider === 'giscus' && <GiscusComponent mapping={term} />}
      {siteMetadatum.commentProvider === 'utterances' && <UtterancesComponent issueTerm={term} />}
      {siteMetadatum.commentProvider === 'disqus' && <DisqusComponent content={content} />}
    </div>
  );
};

export default Comments;
