/* eslint-disable @typescript-eslint/no-explicit-any */
import GA from './GoogleAnalytics';
import Plausible from './Plausible';
import SimpleAnalytics from './SimpleAnalytics';
import Umami from './Umami';
import { siteMetadatum } from 'contentlayer/generated';

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    plausible?: (...args: any[]) => void;
    sa_event?: (...args: any[]) => void;
  }
}

const isProduction = process.env.NODE_ENV === 'production';

const Analytics = () => {
  return (
    <>
      {isProduction && siteMetadatum.analytics.plausibleDataDomain && <Plausible />}
      {isProduction && siteMetadatum.analytics.simpleAnalytics && <SimpleAnalytics />}
      {isProduction && siteMetadatum.analytics.umamiWebsiteId && <Umami />}
      {isProduction && siteMetadatum.analytics.googleAnalyticsId && <GA />}
    </>
  );
};

export default Analytics;
