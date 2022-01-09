import React, { useCallback, useMemo } from 'react';
import { Link } from 'gatsby';

const ListBlogs = ({ posts }) => {
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
    <>
      <p>Blogs:</p>
      <ul>{blogs}</ul>
    </>
  );
};

export default ListBlogs;
