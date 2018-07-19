import React, { Component } from 'react'
import Link from 'gatsby-link'
import PropTypes from 'prop-types'

class IndexArticle extends Component {
  render() {
    const { slug, title, description, featuredImage } = this.props
    return (
      <article
        style={{
          backgroundImage: `url(${featuredImage.responsiveResolution.src})`,
        }}
      >
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
  description: PropTypes.string,
  featuredImage: PropTypes.string,
}

export default IndexArticle
