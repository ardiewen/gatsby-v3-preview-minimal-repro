require("dotenv").config({
  path: `.env${process.env.NODE_ENV && `.${process.env.NODE_ENV}`}`,
});

module.exports = {
  siteMetadata: {
    title: "Gatsby Wordpress Typescript Boilerplate",
  },
  plugins: [
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        url: `${process.env.GATSBY_GRAPHQL_URL}`,
        verbose: true,
        schema: {
          perPage: 10,
          requestConcurrency: 5,
          previewRequestConcurrency: 2,
        },
      },
    },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
