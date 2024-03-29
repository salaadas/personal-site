module.exports = {
  siteMetadata: {
    title: `TRAN DUY THUC`,
    description: `Personal blog of my studying and daily life`,
    author: `Tran Duy Thuc`,
    image: `/lone_cypress.jpg`,
    siteUrl: `https://salaadas.vercel.app`,
  },
  plugins: [
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
    'gatsby-plugin-sharp',
    'gatsby-plugin-image',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: [`.md`, `.mdx`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              className: `linked-header`,
              isIconAfterHeader: true,
            },
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          {
            resolve: 'gatsby-remark-video',
            options: {
              maxWidth: 690,
              height: 'auto',
              preload: 'auto',
              muted: true,
              autoplay: true,
              playsinline: true,
              controls: true,
              loop: true,
            },
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 690,
							linkImagesToOriginal: false,
              // showCaptions: true,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          'gatsby-remark-smartypants',
        ],
      },
    },
    `gatsby-plugin-postcss`,
    'gatsby-plugin-twitter',
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: `${__dirname}/src/utils/typography`,
      },
    },
  ],
};
