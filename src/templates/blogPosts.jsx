import { graphql, Link } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React from 'react';
import Layout from '../components/layout';
import { rhythm, scale } from '../utils/typography';

const BlogPosts = ({ data, location }) => {
  const post = data.mdx;
  const siteTitle = data.site.siteMetadata?.title || `Title`;

  return (
    <Layout location={location} title={siteTitle}>
      <Link to="/">🏠 ( . -.)</Link>
      <article>
        <header>
          <h1>{post.frontmatter.title}</h1>
          <p>
            📩
            <span className="italic">
              &gt;&gt; {post.frontmatter.description}
            </span>
          </p>
          <p style={styles.tag}>{post.frontmatter.date}</p>
          <p style={styles.tag}>{post.frontmatter.category}</p>
        </header>
        <section>
          <MDXRenderer>{post.body}</MDXRenderer>
        </section>
      </article>
    </Layout>
  );
};

export default BlogPosts;

const styles = {
  tag: {
    ...scale(-1 / 7),
    color: '#fff',
    display: `inline`,
    marginBottom: rhythm(1),
    borderRadius: 5,
    backgroundColor: '#a2a2a2',
    marginRight: rhythm(1 / 4),
  },
};

export const pageQuery = graphql`
  query PostsBySlugs($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    mdx(slug: { eq: $slug }) {
      body
      frontmatter {
        title
        description
        category
        date(formatString: "MMM DD, YYYY")
      }
    }
  }
`;
