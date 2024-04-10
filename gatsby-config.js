/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
    title: "Jake's Gatsby Site",
    author: "did you forget to add me",
  },
  plugins: ['gatsby-plugin-image',
          'gatsby-plugin-sharp',
          {
            resolve: "gatsby-source-filesystem",
            options: {
              name: `blog`,
              path: `${__dirname}/blog`,
            }
          },
          "gatsby-plugin-mdx",
          {
            resolve: "gatsby-source-graphql",
            options: {
              typeName: "drupal",
              fieldName: "Drupal",
              url: "https://csc496f22demo.tldr.dev/graphql"
            }
          },
          ],
};
