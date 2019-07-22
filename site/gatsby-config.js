module.exports = {
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src`,
        name: `src`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {},
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        cssLoaderOptions: {
          modules: true,
        },
      },
    },
    `gatsby-plugin-svg-sprite`,
  ],
}