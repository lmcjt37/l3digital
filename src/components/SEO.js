import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

const Container = ({ data, description, lang, meta, keywords, title }) => {
    const { site } = data
    const metaDescription = description || site.siteMetadata.description
    return (
        <Helmet
            htmlAttributes={{
                lang,
            }}
            title={title}
            titleTemplate={`%s | ${site.siteMetadata.title}`}
            meta={[
                {
                    name: `description`,
                    content: metaDescription,
                },
                {
                    property: `og:title`,
                    content: title,
                },
                {
                    property: `og:description`,
                    content: metaDescription,
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
                    name: `twitter:creator`,
                    content: site.siteMetadata.author,
                },
                {
                    name: `twitter:title`,
                    content: title,
                },
                {
                    name: `twitter:description`,
                    content: metaDescription,
                },
            ]
                .concat(
                    keywords.length > 0
                        ? {
                              name: `keywords`,
                              content: keywords.join(`, `),
                          }
                        : []
                )
                .concat(meta)}
        />
    )
}

const SEO = props => (
    <StaticQuery
        query={graphql`
            {
                site {
                    siteMetadata {
                        title
                        description
                        author
                    }
                }
            }
        `}
        render={data => <Container data={data} {...props} />}
    />
)

SEO.defaultProps = {
    lang: `en`,
    meta: [],
    keywords: [`gatsby`, `application`, `react`],
}

Container.propTypes = {
    data: PropTypes.shape({
        site: PropTypes.object,
    }),
    description: PropTypes.string,
    lang: PropTypes.string,
    meta: PropTypes.array,
    keywords: PropTypes.arrayOf(PropTypes.string),
    title: PropTypes.string.isRequired,
}

export default SEO
