module.exports = {
  siteMetadata: {
    title: 'L3 Digital',
    author: 'L3 Digital',
    description: 'Website for L3 Digital',
  },
  pathPrefix: '/',
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          'gatsby-remark-copy-linked-files',
        ],
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: '8tdx56cjmkkt',
        accessToken:
          '2b854c2106224cb78a2daeefc52e93382f5541b01b1cd1bdee3137a16e549f86',
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
  ],
}
