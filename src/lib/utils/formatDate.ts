import { siteMetadatum } from 'contentlayer/generated';

const formatDate = (date: string) => {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  const now = new Date(date).toLocaleDateString(siteMetadatum.locale, options);

  return now;
};

export default formatDate;
