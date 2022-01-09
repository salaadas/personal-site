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
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 690,
              showCaptions: true,
            },
          },
          {
            resolve: 'gatsby-remark-video',
            options: {
              width: '100%',
              height: 'auto',
              preload: 'auto',
              muted: true,
              autoplay: true,
              playsinline: true,
              controls: true,
              loop: true,
            },
          },
        ],
      },
    },
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
