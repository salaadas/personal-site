module.exports = {
  siteMetadata: {
    title: `salaadas's personal site`,
    description: 'The dumpster fire for all things content',
    author: 'salaadas',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: [`.md`, `.mdx`],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: `blogs`,
        path: `${__dirname}/content/blogs`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: `assets`,
        path: `${__dirname}/content/assets`,
      },
    },
    'gatsby-transformer-remark',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    `gatsby-plugin-postcss`,
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: `${__dirname}/src/utils/typography`,
      },
    },
  ],
};
