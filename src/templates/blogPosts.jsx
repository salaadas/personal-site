import { graphql, Link } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';
import { rhythm, scale } from '../utils/typography';

const BlogPosts = ({ data, location, pageContext }) => {
	const {next, prev} = pageContext;
  const post = data.mdx;
  const siteTitle = data.site.siteMetadata?.title || `Title`;
	const home = "/blogs/";

  return (
    <Layout location={location} title={siteTitle}>
      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
			<Link className="navigate-btn" to={home}>🏠 Index ( . -.)</Link>
      <article>
        <header>
          <h1>{post.frontmatter.title}</h1>
					{
					post.frontmatter.description && <><p className="desc">
            📩
            <span className="italic">
              &gt;&gt; {post.frontmatter.description}
            </span>
					</p>
					<p className="italic">
							{"=".repeat(post.frontmatter.description.trim().length)}
					</p>																				
					</>
					}
          <p style={styles.tag}>{post.frontmatter.date}</p>
          <p style={styles.tag}>{post.frontmatter.category}</p>
					<br/>
					<p style={styles.time}>A {post.timeToRead} minute read.</p>
        </header>
        <section>
          <MDXRenderer>{post.body}</MDXRenderer>
        </section>
      </article>
			<span style={styles.left}>{prev && <Link className="navigate-btn" to={home.concat(prev)}>⏪ {prev}</Link>}</span>
			<span style={styles.right}>{next && <Link className="navigate-btn" to={home.concat(next)}>{next} ⏩</Link>}</span>
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
    backgroundColor: '#828282',
    marginRight: rhythm(1 / 4),
  },
  time: {
    ...scale(-1 / 7),
		marginBottom: rhythm(1),
		color: '#db55db'
	},
	desc: {
		marginBottom: rhythm(1),		
	},
	left: {
			float: `left`
	},
	right: {
			float: `right`
	}
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
      excerpt(pruneLength: 160)
      frontmatter {
        title
        description
        category
        date(formatString: "MMM DD, YYYY")
      }
      timeToRead
    }
  }
`;
