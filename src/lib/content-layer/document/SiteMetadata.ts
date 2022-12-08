import { defineNestedType, defineDocumentType } from 'contentlayer/source-files';

const Analytics = defineNestedType(() => ({
  name: 'Analytics',
  fields: {
    // If you want to use an analytics provider you have to add it to the
    // content security policy in the `next.config.js` file.
    // supports plausible, simpleAnalytics, umami or googleAnalytics
    plausibleDataDomain: {
      type: 'string',
      description: 'The site domain for plausible e.g. tailwind-nextjs-starter-blog.vercel.app',
    },
    simpleAnalytics: {
      type: 'boolean',
      description: 'e.g. true or false',
    },
    umamiWebsiteId: {
      type: 'string',
      description: 'e.g. 123e4567-e89b-12d3-a456-426614174000',
    },
    googleAnalyticsId: {
      type: 'string',
      description: 'e.g.  UA-000000-2 or G-XXXXXXX',
    },
  },
}));

const Newsletter = defineNestedType(() => ({
  name: 'Newsletter',
  fields: {
    // supports mailchimp, buttondown, convertkit, klaviyo
    // Please add your .env file and modify it according to your selection
    provider: { type: 'string', description: 'The provider id of newsletter' },
  },
}));

const NavLinks = defineNestedType(() => ({
  name: 'NavLinks',
  fields: {
    href: { type: 'string', description: 'The Link for navigation', required: true },
    title: { type: 'string', description: 'The display title of the Link', required: true },
  },
}));

export const SiteMetadata = defineDocumentType(() => ({
  name: 'SiteMetadata',
  filePathPattern: 'config/siteMetadata.json',
  isSingleton: true,
  fields: {
    title: {
      type: 'string',
      description: 'The title of the site',
      required: true,
    },
    author: {
      type: 'string',
      description: 'The main author of the site',
      required: true,
    },
    headerTitle: {
      type: 'string',
      description: 'The Header Title of the site',
    },
    headerNavLinks: {
      type: 'list',
      of: NavLinks,
      description: 'List of Header Navigation Links',
    },
    description: {
      type: 'string',
      description: 'The description of the site',
    },
    language: {
      type: 'string',
      description: 'The primary language of the site, ISO language codes',
    },
    locale: {
      type: 'string',
      description: 'The primary language of the site, ISO language codes',
    },
    theme: {
      type: 'string',
      description: 'The color theme of the site, can be one of "system", "dark", "light"',
    },
    siteUrl: {
      type: 'string',
      description: 'The deployed production url of the site',
    },
    siteRepo: {
      type: 'string',
      description: 'The github repo of the site',
    },
    siteLogo: {
      type: 'string',
      description: 'The url to the logo image of the site',
    },
    image: {
      type: 'string',
      description: 'The url to the author avtar image of the site',
    },
    socialBanner: {
      type: 'string',
      description: 'The url to the global twitter card of the site',
    },
    email: {
      type: 'string',
      description: 'The email id of the primary author of the site',
    },
    github: {
      type: 'string',
      description: 'The github url of the primary author of the site',
    },
    twitter: {
      type: 'string',
      description: 'The github url of the primary author of the site',
    },
    facebook: {
      type: 'string',
      description: 'The facebook url of the primary author of the site',
    },
    youtube: {
      type: 'string',
      description: 'The youtube url of the primary author of the site',
    },
    linkedin: {
      type: 'string',
      description: 'The linkedin url of the primary author of the site',
    },
    analytics: {
      type: 'nested',
      of: Analytics,
    },
    newsletter: {
      type: 'nested',
      of: Newsletter,
    },
    // TODO : Content layer does not support nested computed fields adding commnents as a flat structure
    // If you want to use a commenting system other than giscus you have to add it to the
    // content security policy in the `next.config.js` file.
    // Select a provider and use the environment variables associated to it
    // https://vercel.com/docs/environment-variables
    commentProvider: {
      type: 'string',
      description: 'The provider id of comment system supported providers: giscus, utterances, disqus',
    },
    // Visit the link below, and follow the steps in the 'configuration' section
    // https://giscus.app/
    giscusConfigMapping: {
      type: 'string',
      description: 'Supported options: pathname, url, title',
    },
    giscusConfigReactions: {
      type: 'string',
      description: 'Emoji reactions: 1 = enable / 0 = disable',
    },
    giscusConfigMetadata: {
      type: 'string',
      description: 'Send discussion metadata periodically to the parent window: 1 = enable / 0 = disable',
    },
    giscusConfigTheme: {
      type: 'string',
      description:
        'theme example: light, dark, dark_dimmed, dark_high_contrast transparent_dark, preferred_color_scheme, custom',
    },
    giscusConfigDarkTheme: {
      type: 'string',
      description: 'theme when dark mode',
    },
    giscusConfigThemeURL: {
      type: 'string',
      description:
        'If the theme option above is set to "custom" please provide a link below to your custom theme css file. example: https://giscus.app/themes/custom_example.css',
    },
    // Visit the link below, and follow the steps in the 'configuration' section
    // https://utteranc.es/
    utterancesConfigIssueTerm: {
      type: 'string',
      description: 'supported options: pathname, url, title',
    },
    utterancesConfigLabel: {
      type: 'string',
      description: 'label (optional): Comment 💬',
    },
    utterancesConfigTheme: {
      type: 'string',
      description:
        'theme example: github-light, github-dark, preferred-color-scheme github-dark-orange, icy-dark, dark-blue, photon-dark, boxy-light',
    },
    utterancesConfigDarkTheme: {
      type: 'string',
      description: 'theme when dark mode',
    },
  },
  computedFields: {
    // https://help.disqus.com/en/articles/1717111-what-s-a-shortname
    disqusConfigShortname: {
      type: 'string',
      resolve: () => process.env.NEXT_PUBLIC_DISQUS_SHORTNAME,
    },
    utterancesConfigRepo: {
      type: 'string',
      resolve: () => process.env.NEXT_PUBLIC_UTTERANCES_REPO,
    },
    giscusConfigRepo: {
      type: 'string',
      resolve: (doc) => process.env.NEXT_PUBLIC_GISCUS_REPO,
    },
    giscusConfigRepositoryId: {
      type: 'string',
      resolve: (doc) => process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
    },
    giscusConfigCategory: {
      type: 'string',
      resolve: (doc) => process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
    },
    giscusConfigCategoryId: {
      type: 'string',
      resolve: (doc) => process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
    },
  },
  extensions: {},
}));
