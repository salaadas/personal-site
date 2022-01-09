import { Link, graphql } from 'gatsby';
import * as React from 'react';
import Me from '../components/Me';

const Index = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title;
  const posts = data.allMdx.nodes;

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        padding: 69,
      }}
    >
      <h1>{siteTitle}</h1>

      <Me />

      <p>Blogs:</p>
      <ul>
        {posts.reverse().map((post) => {
          const title = post.frontmatter.title || post.slug;
          return (
            <li key={post.slug}>
              <Link to={post.slug}>{title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Index;

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
        description
      }
    }

    allMdx {
      nodes {
        slug
        frontmatter {
          title
          description
        }
      }
    }
  }
`;
