import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { graphql, useStaticQuery } from 'gatsby';

const Me = () => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { regex: "/kagome.jpeg/" }) {
        childImageSharp {
          gatsbyImageData(
            layout: FIXED
            width: 300
            height: 300
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

  return (
    <div>
      <GatsbyImage image={data.file.childImageSharp.gatsbyImageData} />
      <p>I'm neru and I'm 17 years old</p>
    </div>
  );
};

export default Me;
