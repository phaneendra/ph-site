import React, { useState, useEffect, useCallback } from 'react';
import { useTheme } from 'next-themes';

import { siteMetadatum } from 'contentlayer/generated';

interface Props {
  issueTerm: string;
}

const Utterances = ({ issueTerm }: Props) => {
  const [enableLoadComments, setEnabledLoadComments] = useState(true);
  const { theme, resolvedTheme } = useTheme();
  const commentsTheme =
    theme === 'dark' || resolvedTheme === 'dark'
      ? siteMetadatum.utterancesConfigDarkTheme
      : siteMetadatum.utterancesConfigTheme;

  const COMMENTS_ID = 'comments-container';

  const LoadComments = useCallback(() => {
    setEnabledLoadComments(false);
    const script = document.createElement('script');
    script.src = 'https://utteranc.es/client.js';
    script.setAttribute('repo', siteMetadatum.utterancesConfigRepo);
    script.setAttribute('issue-term', issueTerm);
    script.setAttribute('label', siteMetadatum.utterancesConfigLabel);
    script.setAttribute('theme', commentsTheme);
    script.setAttribute('crossorigin', 'anonymous');
    script.async = true;

    const comments = document.getElementById(COMMENTS_ID);
    if (comments) comments.appendChild(script);

    return () => {
      const comments = document.getElementById(COMMENTS_ID);
      if (comments) comments.innerHTML = '';
    };
  }, [commentsTheme, issueTerm]);

  // Reload on theme change
  useEffect(() => {
    const iframe = document.querySelector('iframe.utterances-frame');
    if (!iframe) return;
    LoadComments();
  }, [LoadComments]);

  // Added `relative` to fix a weird bug with `utterances-frame` position
  return (
    <div className="pt-6 pb-6 text-center">
      {enableLoadComments && <button onClick={LoadComments}>Load Comments</button>}
      <div className="utterances-frame relative" id={COMMENTS_ID} />
    </div>
  );
};

export default Utterances;
