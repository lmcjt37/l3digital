import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'

import BannerContent from '../components/BannerContent'
import ProjectSection from '../templates/project-section'

class Projects extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <Helmet>
          <title>Projects</title>
          <meta name="description" content="Projects Page" />
        </Helmet>

        <BannerContent />

        <div id="main">
          <section id="one">
            <div className="inner">
              <header className="major">
                <h2>Sed amet aliquam</h2>
              </header>
              <p>
                Nullam et orci eu lorem consequat tincidunt vivamus et sagittis
                magna sed nunc rhoncus condimentum sem. In efficitur ligula tate
                urna. Maecenas massa vel lacinia pellentesque lorem ipsum dolor.
                Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis
                libero. Nullam et orci eu lorem consequat tincidunt vivamus et
                sagittis magna sed nunc rhoncus condimentum sem. In efficitur
                ligula tate urna.
              </p>
            </div>
          </section>
          <section id="two" className="spotlights">
            {this.props.data.allContentfulProject.edges.map((edge, id) => (
              <ProjectSection {...edge.node} key={id} />
            ))}
          </section>
        </div>
      </div>
    )
  }
}

Projects.propTypes = {
  data: PropTypes.object.required,
}

export default Projects

export const projectsPageQuery = graphql`
  query ProjectsPageQuery {
    allContentfulProject(filter: { node_locale: { eq: "en-US" } }) {
      edges {
        node {
          title
          slug
          description {
            childMarkdownRemark {
              html
            }
          }
          featuredImage {
            responsiveResolution {
              src
            }
          }
        }
      }
    }
  }
`
