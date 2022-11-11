import { graphql, Link } from 'gatsby';
import React, { useState } from 'react';
import Layout from '../components/layout';
import ListBlogs from '../components/ListBlogs';
import Seo from '../components/seo';

const groupBlogsByYear = (nodes) => {
  return nodes.reduce((list, node) => {

		if (node.frontmatter.date) {
				const date = node.frontmatter.date.split(', ');
				const newList = { ...list };
				if (newList.hasOwnProperty(date[1])) {
						newList[date[1]].push(node);
				} else {
						newList[date[1]] = [node];
				}
				return newList;
		} else {
				return list;
		}

  }, {});
};

const Blogs = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;
  const [blogs] = useState(groupBlogsByYear(data.allMdx.nodes));

  // console.log(blogs);

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="Blogs" />
      <Link to="/">
        <h1>{siteTitle}</h1>
      </Link>
      <ListBlogs list={blogs} />
    </Layout>
  );
};

export default Blogs;

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
          category
          date(formatString: "MMM DD, YYYY")
        }
      }
    }
  }
`;
