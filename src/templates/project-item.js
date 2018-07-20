import React, { Component } from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'

class ProjectItem extends Component {
  render() {
    const {
      title,
      description,
      shortDescription,
      featuredImage,
      url,
    } = this.props.data.contentfulProject
    return (
      <div>
        <Helmet>
          <title>{title}</title>
          <meta name="description" content={shortDescription} />
        </Helmet>

        <div id="main" className="alt">
          <section id="one">
            <div className="inner">
              <header className="major">
                <h1>{title}</h1>
              </header>
              <span className="image main">
                <img src={featuredImage.responsiveResolution.src} alt="" />
              </span>
              <div
                dangerouslySetInnerHTML={{
                  __html: description.childMarkdownRemark.html,
                }}
              />
              <ul className="actions">
                <li>
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button special"
                  >
                    Visit
                  </a>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    )
  }
}

ProjectItem.propTypes = {
  data: PropTypes.object.isRequired,
}

export default ProjectItem

export const projectItemQuery = graphql`
  query projectItemQuery($slug: String!) {
    contentfulProject(slug: { eq: $slug }) {
      slug
      title
      description {
        childMarkdownRemark {
          html
        }
      }
      shortDescription
      featuredImage {
        responsiveResolution {
          src
        }
      }
      url
    }
  }
`
