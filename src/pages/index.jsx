import { graphql, Link } from 'gatsby';
import React from 'react';
import Layout from '../components/layout';
import Me from '../components/Me';
import useTime from '../hooks/useTime';
import Seo from '../components/seo';

const Index = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;
  const time = useTime();

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="Home" />
      <Link to="/">
        <h1>{siteTitle}</h1>
      </Link>
      <p className="italic">It is {time} in Ho Chi Minh city</p>

      <Me />
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
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
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
