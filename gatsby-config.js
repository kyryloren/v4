require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: 'Kyrylo Orlov | Independent web developer',
    description: `I am a passionate software developer and UI/UX designer based in New York. I have a drive for building high quality, polished user experiences, and working as a leader to deliver the best results possible.`,
    siteUrl: 'https://kyryloorlov.com',
    image: '/og.png',
    twitterUsername: '@kyryloren',
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
    `gatsby-background-image`,
    {
      resolve: 'gatsby-source-prismic',
      options: {
        repositoryName: process.env.GATSBY_PRISMIC_REPO,
        accessToken: process.env.GATSBY_PRISMIC_API,
        lang: '*',
        shouldDownloadImage: () => {
          return true;
        },
        schemas: {
          project: require('./src/schemas/project.json'),
        },
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        typekit: {
          id: process.env.TYPEKIT_ID,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-google-gtag',
      options: {
        trackingIds: ['G-KXRWLTWBRC'],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#ffffff`,
        display: `minimal-ui`,
        icon: `src/images/me.png`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
