import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import BannerDesktop from '../components/Banner'
import BannerMobile from '../components/BannerMobile'

import Article from '../templates/index-article'

import UtilsHelper from '../helpers/utils'

class HomeIndex extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isHandheld: false,
    }
  }

  handleResizeChange = () => {
    this.setState({ ...UtilsHelper.getScreenSize() })
  }

  componentDidMount() {
    this.handleResizeChange()
    window.addEventListener('resize', this.handleResizeChange)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResizeChange)
  }

  render() {
    const siteTitle = this.props.data.site.siteMetadata.title
    const siteDescription = this.props.data.site.siteMetadata.description

    let getBanner = () => {
      return this.state.isHandheld ? <BannerMobile /> : <BannerDesktop />
    }

    return (
      <div>
        <Helmet>
          <title>{siteTitle}</title>
          <meta name="description" content={siteDescription} />
        </Helmet>

        {getBanner()}

        <div id="main">
          <section id="one" className="tiles smooth-scroll-section">
            {this.props.data.allContentfulProject.edges.map(edge => (
              <Article {...edge.node} />
            ))}
          </section>
          <section id="two">
            <div className="inner">
              <header className="major">
                <h2>Who are we</h2>
              </header>
              <p>
                Initially started by 3 guys trying to bring together a wealth of
                knowledge from all different areas in development. They have a
                combined experience of nearly 30 years, spanning front and back
                end development, devops, mobile applications, and everything in
                between.
              </p>
              <ul className="actions">
                <li>
                  <Link to="/about" className="button next">
                    Find Out More
                  </Link>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    )
  }
}

export default HomeIndex

export const pageQuery = graphql`
  query PageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
    allContentfulProject(filter: { node_locale: { eq: "en-US" } }) {
      edges {
        node {
          title
          slug
          description {
            childMarkdownRemark {
              excerpt(pruneLength: 50)
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
