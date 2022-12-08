import React, { useState } from 'react';

import { siteMetadatum } from 'contentlayer/generated';
import type { Blog } from 'contentlayer/generated';

interface Props {
  content: Blog;
}

const Disqus = ({ content }: Props) => {
  const [enableLoadComments, setEnabledLoadComments] = useState(true);

  const COMMENTS_ID = 'disqus_thread';

  function LoadComments() {
    setEnabledLoadComments(false);

    // @ts-ignore
    window.disqus_config = function () {
      this.page.url = window.location.href;
      this.page.identifier = content.slug;
    };
    // @ts-ignore
    if (window.DISQUS === undefined) {
      const script = document.createElement('script');
      script.src = 'https://' + siteMetadatum.disqusConfigShortname + '.disqus.com/embed.js';
      // @ts-ignore
      script.setAttribute('data-timestamp', +new Date());
      script.setAttribute('crossorigin', 'anonymous');
      script.async = true;
      document.body.appendChild(script);
    } else {
      // @ts-ignore
      window.DISQUS.reset({ reload: true });
    }
  }

  return (
    <div className="pt-6 pb-6 text-center">
      {enableLoadComments && <button onClick={LoadComments}>Load Comments</button>}
      <div className="disqus-frame" id={COMMENTS_ID} />
    </div>
  );
};

export default Disqus;
