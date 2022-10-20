import * as React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import favicon from '../../static/favicon.ico';

const useSiteMedata = () => {
    const { site } = useStaticQuery(
        graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            image
            siteUrl
          }
        }
      }
    `
    );

    return site.siteMetadata;
}

const Seo = ({ description, lang, meta, title, pathname, children }) => {
    const {title: defaultTitle, description: defaultDescription, image, siteUrl, author} = useSiteMedata();
    
    const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
        image: `${siteUrl}${image}`,
        url: `${siteUrl}${pathname || ``}`,
        author,
    }

    return (
        <Helmet
            htmlAttributes={{
                lang,
            }}
            title={seo.title}
            titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
            meta={[
                {
                    name: `description`,
                    content: seo.description,
                },
                {
                    property: `og:title`,
                    content: seo.title,
                },
                {
                    property: `og:description`,
                    content: seo.description,
                },
                {
                    property: `og:type`,
                    content: `website`,
                },
                {
                    name: `twitter:card`,
                    content: `summary`,
                },
                {
                    name: `twitter:image`,
                    content: seo.image,
                },
                {
                    name: `twitter:creator`,
                    content: seo.author,
                },
                {
                    name: `twitter:title`,
                    content: seo.title,
                },
                {
                    name: `twitter:description`,
                    content: seo.description,
                },
            ].concat(meta)}
            link={[
                { rel: 'shortcut icon', type: 'image/x-icon', href: `${favicon}` },
            ]}
        />
    );
};

Seo.defaultProps = {
    lang: `en`,
    meta: [],
    description: ``,
};

Seo.propTypes = {
    description: PropTypes.string,
    lang: PropTypes.string,
    meta: PropTypes.arrayOf(PropTypes.object),
    title: PropTypes.string.isRequired,
};

export default Seo;
