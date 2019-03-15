import React from 'react'
import PropTypes from 'prop-types'
import { withPrefix } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

import Link from 'components/Link'

class IndexArticle extends React.Component {
    render() {
        const { slug, title, description, featuredImage } = this.props
        return (
            <article>
                {/* <span
                    style={{
                        backgroundImage: `url(${featuredImage.fluid.src})`,
                    }}
                    className="child"
                /> */}
                <BackgroundImage
                    Tag="span"
                    className="child"
                    fluid={featuredImage.fluid}
                />
                <header className="major">
                    <h3>{title}</h3>
                    <p>{description.childMarkdownRemark.excerpt}</p>
                </header>
                <Link
                    to={withPrefix(slug)}
                    from="/"
                    aria-label={slug}
                    className="link primary"
                />
            </article>
        )
    }
}

IndexArticle.propTypes = {
    slug: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.object,
    featuredImage: PropTypes.object,
}

export default IndexArticle
