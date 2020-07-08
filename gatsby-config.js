require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const { RichText } = require('prismic-reactjs');

// We don't want to import every PrismJS component - so that's why they're required individually
const Prism = require('prismjs');
require('prismjs/components/prism-javascript');
require('prismjs/components/prism-css');
require('prismjs/components/prism-scss');
require('prismjs/components/prism-jsx');
require('prismjs/components/prism-bash');
require('prismjs/components/prism-json');
require('prismjs/components/prism-diff');
require('prismjs/components/prism-markdown');
require('prismjs/components/prism-graphql');

const { Elements } = RichText;

// Labels with this name will be inline code
const codeInline = ['text'];
// Labels with these names will become code blocks
const codeBlock = [
  'javascript',
  'css',
  'scss',
  'jsx',
  'bash',
  'json',
  'diff',
  'markdown',
  'graphql',
];

const {
  _pathPrefix,
  shortName,
  description,
  themeColor,
  backgroundColor,
  _title,
  _titleAlt,
  _url,
  author,
  logo,
  siteLanguage,
  twitter,
} = require('./config/website');

module.exports = {
  /* General Information */
  pathPrefix: _pathPrefix,
  siteMetadata: {
    title: _title,
    titleAlt: _titleAlt,
    shortName,
    author,
    siteLanguage,
    logo, // Logo for JSONLD
    url: _url,
    siteUrl: _url + _pathPrefix, // For gatsby-plugin-sitemap
    pathPrefix: _pathPrefix,
    description,
    banner: logo,
    twitter,
  },
  /* Plugins */
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-emotion',
    {
      resolve: 'gatsby-source-prismic',
      options: {
        repositoryName: 'swiss-startup-group',
        accessToken: `${process.env.API_KEY}`,
        linkResolver: () => (post) => `/${post.uid}`,
        schemas: {
          post: require('./src/schemas/post.json'),
          category: require('./src/schemas/category.json'),
        },
      },
    },
    'gatsby-plugin-lodash',
    // Although this starter doesn't use local files this plugin is necessary for the gatsby-image features of gatsby-source-prismic
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'src',
        path: `${__dirname}/src/`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'config/typography.js',
      },
    },
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: _title,
        short_name: _titleAlt,
        description,
        start_url: _pathPrefix,
        background_color: backgroundColor,
        theme_color: themeColor,
        display: 'standalone',
        icon: `src/logo.png`,
      },
    },
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: 'GTM-5TPTHQB',

        // Include GTM in development.
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: false,

        // Specify optional GTM environment details.
        // gtmAuth: "YOUR_GOOGLE_TAGMANAGER_ENVIROMENT_AUTH_STRING",
        // gtmPreview: "YOUR_GOOGLE_TAGMANAGER_ENVIROMENT_PREVIEW_NAME",
      },
    },
    // Must be placed at the end
    'gatsby-plugin-offline',
    // 'gatsby-plugin-netlify',
  ],
};
