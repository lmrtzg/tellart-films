/* eslint-disable quotes */
module.exports = {
  siteMetadata: {
    title: `Tellart Films | Apaixonados por contar histórias.`,
    description: `Somos uma produtora de cinema, filmes publicitários e filmes institucionais localizada na região de Porto Alegre.`,
    author: `Tellart Films`,
    lang: `pt-BR`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-eslint`,
      options: {
        test: /\.js$|\.jsx$|\.ts$|\.tsx$/,
        exclude: /(node_modules|.cache|public)/,
        stages: [`develop`],
        options: {
          emitWarning: true,
          failOnError: false,
        },
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Tellart Films`,
        short_name: `Tellart Films`,
        start_url: `/`,
        background_color: `#eee`,
        theme_color: `#f2df38`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
