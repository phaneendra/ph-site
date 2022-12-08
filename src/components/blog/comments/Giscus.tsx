import React, { useState, useEffect, useCallback } from 'react';
import { useTheme } from 'next-themes';

import { siteMetadatum } from 'contentlayer/generated';

interface Props {
  mapping: string;
}

const Giscus = ({ mapping }: Props) => {
  const [enableLoadComments, setEnabledLoadComments] = useState(true);
  const { theme, resolvedTheme } = useTheme();
  const commentsTheme =
    siteMetadatum.giscusConfigThemeURL === ''
      ? theme === 'dark' || resolvedTheme === 'dark'
        ? siteMetadatum.giscusConfigDarkTheme
        : siteMetadatum.giscusConfigTheme
      : siteMetadatum.giscusConfigThemeURL;

  const COMMENTS_ID = 'comments-container';

  const LoadComments = useCallback(() => {
    setEnabledLoadComments(false);
    const script = document.createElement('script');
    script.src = 'https://giscus.app/client.js';
    script.setAttribute('data-repo', siteMetadatum.giscusConfigRepo);
    script.setAttribute('data-repo-id', siteMetadatum.giscusConfigRepositoryId);
    script.setAttribute('data-category', siteMetadatum.giscusConfigCategory);
    script.setAttribute('data-category-id', siteMetadatum.giscusConfigCategoryId);
    script.setAttribute('data-mapping', mapping);
    script.setAttribute('data-reactions-enabled', siteMetadatum.giscusConfigReactions);
    script.setAttribute('data-emit-metadata', siteMetadatum.giscusConfigMetadata);
    script.setAttribute('data-theme', commentsTheme);
    script.setAttribute('crossorigin', 'anonymous');
    script.async = true;

    const comments = document.getElementById(COMMENTS_ID);
    if (comments) comments.appendChild(script);

    return () => {
      const comments = document.getElementById(COMMENTS_ID);
      if (comments) comments.innerHTML = '';
    };
  }, [commentsTheme, mapping]);

  // Reload on theme change
  useEffect(() => {
    const iframe = document.querySelector('iframe.giscus-frame');
    if (!iframe) return;
    LoadComments();
  }, [LoadComments]);

  return (
    <div className="pt-6 pb-6 text-center">
      {enableLoadComments && <button onClick={LoadComments}>Load Comments</button>}
      <div className="giscus" id={COMMENTS_ID} />
    </div>
  );
};

export default Giscus;
