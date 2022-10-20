import { graphql, Link } from 'gatsby';
import React, { useState } from 'react';
import Layout from '../components/layout';
import { GatsbyImage } from 'gatsby-plugin-image';
import Seo from '../components/seo';

const About = ({ data, location }) => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { regex: "/portrait.jpg/" }) {
        childImageSharp {
          gatsbyImageData(
            layout: FULL_WIDTH
            jpgOptions: { quality: 100 }
            webpOptions: { quality: 100 }
            transformOptions: { fit: COVER, cropFocus: CENTER }
          )
        }
      }
      site {
        siteMetadata {
          author
        }
      }
    }
  `);


  const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="About" />
      <Link to="/">
        <h1>{siteTitle}</h1>
      </Link>

        <p>
            Tran Duy Thuc is a Senior student attending the VNU - HCM High School for the Gifted. Thuc works including researching computer sciences applications and robotics. 
        </p>

    </Layout>
  );
};

export default About;
