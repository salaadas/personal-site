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
          style={styles.img}  
        />
      <div className="text-center">
        <p className="italic">
            I'm Thuc (salaadas) and I'm {new Date().getFullYear() - 2005} years old
        </p>
        <p>
          <Link className="link" href="/about">
            about
          </Link>{' '}
          //{' '}

          <Link className="link" href="/faq">
            faq
          </Link>{' '}
          //{' '}


          <Link className="link" href="/blogs">
            blogs
          </Link>{' '}
          //{' '}

          <a
            className="link"
            href="https://www.youtube.com/playlist?list=PLTEvdy7cOEn4FDXp4WGyb8aRI5w7VRQW9"
          >
            playlist
          </a>

        </p>
      </div>
    </div>
  );
};

export default Me;

const styles = {
  img: {
      display: `block`,
      marginTop: 0,
      marginBottom: 0,
      width: `auto`,
      height: 400,
      marginLeft: `auto`,
      marginRight: `auto`,
  },
};
