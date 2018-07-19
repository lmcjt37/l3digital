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
  data: PropTypes.object.isRequired,
}

export default IndexArticle

export const indexArticleQuery = graphql`
  query indexArticleQuery($slug: String!) {
    contentfulProject(slug: { eq: $slug }) {
      slug
      title
      description {
        childMarkdownRemark {
          excerpt
        }
      }
      featuredImage {
        responsiveResolution {
          src
        }
      }
    }
  }
`
