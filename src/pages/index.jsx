import { Link, graphql } from 'gatsby';
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import Layout from '../components/layout';
import Me from '../components/Me';

const Index = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title;
  const [posts] = useState(() => data.allMdx.nodes);
  const [time, setTime] = useState();

  useEffect(() => {
    const getHoChiMinhTime = () => {
      const d = new Date();
      const utc = d.getTime() + d.getTimezoneOffset() * 60 * 1000;
      const newD = new Date(utc + 1000 * 60 * 60 * 7);
      setTime(newD.toLocaleTimeString());
    };

    const interval = setInterval(getHoChiMinhTime, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const listBlogs = useCallback(() => {
    // [...posts].reverse().map((post) => {
    const list = [...posts].map((post) => {
      const title = post.frontmatter.title || post.slug;
      return (
        <li key={post.slug}>
          <Link className="link" to={post.slug}>
            {title}
          </Link>
        </li>
      );
    });

    return list;
  }, [posts]);

  const blogs = useMemo(listBlogs, [listBlogs]);

  return (
    <Layout>
      <h1>{siteTitle}</h1>
      <p className="italic">It is {time} in Ho Chi Minh city</p>

      <Me />

      <p>Blogs:</p>
      <ul>{blogs}</ul>
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
