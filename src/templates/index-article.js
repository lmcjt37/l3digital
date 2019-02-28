import React, { Component } from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

class IndexArticle extends Component {
    render() {
        const { slug, title, description, featuredImage } = this.props
        return (
            <article>
                <span
                    style={{
                        backgroundImage: `url(${featuredImage.fluid.src})`,
                    }}
                    className="child"
                />
                <header className="major">
                    <h3>{title}</h3>
                    <p>{description.childMarkdownRemark.excerpt}</p>
                </header>
                <Link to={slug} className="link primary" />
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
