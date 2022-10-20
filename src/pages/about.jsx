import { graphql, Link } from 'gatsby';
import React, { useState } from 'react';
import Layout from '../components/layout';
import { GatsbyImage } from 'gatsby-plugin-image';
import Seo from '../components/seo';

const About = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="About" />
      <Link to="/">
        <h1>{siteTitle}</h1>
      </Link>

      <GatsbyImage
        image={data.file.childImageSharp.gatsbyImageData}
        alt="Me"
        style={styles.img}
      />

      <p>
        Tran Duy Thuc is a Senior student attending the VNU - HCM High School for the Gifted. Thuc works including researching computer sciences applications and robotics. 
      </p>

    </Layout>
  );
};

export default About;

const styles = {
  img: {
      display: `block`,
      marginTop: 0,
      marginBottom: 0,
      height: `auto`,
      width: 250,
      marginLeft: `0`,
      marginRight: `auto`,
  },
};

export const pageQuery = graphql`
  query {
    file(relativePath: { regex: "/portrait.jpg/" }) {
      childImageSharp {
        gatsbyImageData(
          layout: CONSTRAINED
          jpgOptions: { quality: 100 }
          webpOptions: { quality: 100 }
          transformOptions: { fit: COVER, cropFocus: CENTER }
        )
      }
    }
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`;
