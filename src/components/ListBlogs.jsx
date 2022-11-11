import React from 'react';
import { Link } from 'gatsby';

const ListBlogs = ({ list }) => {
  return (
    <>
      {Object.keys(list).sort(function(a, b) { return b - a; }).map((b) => ( // sort by year (newest to oldest)
        <div key={b} className="w-full">
          <h2 className="pl-1 text-lg font-semibold">{b}</h2>
          <ul className="list-none">
            {list[b].map((content) => (
              <li className="my-8">
                <Link className="text-transparent" to={content.slug}>
                  <p className="inline mr-8 text-sm min-w-[50px]">
                    {content.frontmatter.date.split(', ')[0]}
                  </p>
                  <h3 className="inline font-light .article-btn">
                    {content.frontmatter.title}
                  </h3>
                </Link>
                <small className="text-sky-50 mt-2 block italic">
                  #{content.frontmatter.category}
                </small>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};

export default ListBlogs;
