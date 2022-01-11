import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { graphql, useStaticQuery } from 'gatsby';

const Me = () => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { regex: "/IMG_0722.JPG/" }) {
        childImageSharp {
          gatsbyImageData(
            layout: FULL_WIDTH
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
      <GatsbyImage
        image={data.file.childImageSharp.gatsbyImageData}
        alt="My Avatar"
      />
      <p>I'm salaadas and I'm {new Date().getFullYear() - 2005} years old</p>
      <p>
        &gt;&gt; <a href="https://github.com/salaadas">github</a> &gt;&gt;{' '}
        <a href="https://www.youtube.com/playlist?list=PLTEvdy7cOEn4FDXp4WGyb8aRI5w7VRQW9">
          playlist
        </a>{' '}
        &gt;&gt;
      </p>
    </div>
  );
};

export default Me;
