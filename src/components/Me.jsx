import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { graphql, Link, useStaticQuery } from 'gatsby';

const Me = () => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { regex: "/catnip.jpeg/" }) {
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

  return (
    <div>
      <GatsbyImage
        image={data.file.childImageSharp.gatsbyImageData}
        alt="My Avatar"
      />
      <div className="text-center">
        <p className="italic">
          I'm salaadas and I'm {new Date().getFullYear() - 2005} years old
        </p>
        <p>
          |{' '}
          <a className="link" href="https://github.com/salaadas">
            github
          </a>{' '}
          |{' '}
          <a
            className="link"
            href="https://www.youtube.com/playlist?list=PLTEvdy7cOEn4FDXp4WGyb8aRI5w7VRQW9"
          >
            playlist
          </a>{' '}
          |{' '}
          <Link className="link" to="/blogs">
            blogs
          </Link>{' '}
          |
        </p>
      </div>
    </div>
  );
};

export default Me;
