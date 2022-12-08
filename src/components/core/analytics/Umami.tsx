import Script from 'next/script';

import { siteMetadatum } from 'contentlayer/generated';

const UmamiScript = () => {
  return (
    <>
      <Script
        async
        defer
        data-website-id={siteMetadatum.analytics.umamiWebsiteId}
        src="https://umami.example.com/umami.js" // Replace with your umami instance
      />
    </>
  );
};

export default UmamiScript;
