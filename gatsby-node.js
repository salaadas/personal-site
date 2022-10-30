const rimraf = require('rimraf');

const PUBLIC_FOLDER = `${__dirname}/public`;

const { createFilePath } = require('gatsby-source-filesystem');
const path = require('path');

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;
  const blogPost = path.resolve('./src/templates/blogPosts.jsx');

  const result = await graphql(`
    {
      allMdx (sort: {order: ASC, fields: [frontmatter___date]}) {
        nodes {
          slug
          frontmatter {
            title
          }
        }
      }
    }
  `);

  if (result.errors) {
    throw result.errors;
  }

  const posts = result.data.allMdx.nodes;

		posts.forEach((post, index) => {
    createPage({
      path: `/blogs/${post.slug}`,
      component: blogPost,
      context: {
					slug: post.slug,
					prev: index === 0 ? null : posts[index - 1].slug,
					next: index === (posts.length - 1) ? null : posts[index + 1].slug
      },
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === 'Mdx') {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};

exports.onPreBuild = () => {
  // empty /public folder
  rimraf.sync(PUBLIC_FOLDER + '/*');
};
