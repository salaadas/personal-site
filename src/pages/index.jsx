import { graphql } from 'gatsby';
import React, { useState } from 'react';
import Layout from '../components/layout';
import Me from '../components/Me';
import useTime from '../hooks/useTime';
import ListBlogs from '../components/ListBlogs';

const Index = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title;
  const [posts] = useState(() => data.allMdx.nodes);
  const time = useTime();

  return (
    <Layout>
      <h1>{siteTitle}</h1>
      <p className="italic">It is {time} in Ho Chi Minh city</p>

      <Me />

      <ListBlogs posts={posts} />
    </Layout>
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
