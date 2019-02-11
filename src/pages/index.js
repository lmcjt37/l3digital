import React from 'react'
import { Link, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'

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
        this.setScrollRef = element => {
            this.elementRef = element
        }
    }

    handleResizeChange() {
        this.setState({ ...UtilsHelper.getScreenSize() })
    }

    componentDidMount() {
        this.handleResizeChange()
        window.addEventListener('resize', this.handleResizeChange)
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResizeChange)
    }

    scrollToRefElement() {
        this.elementRef.scrollIntoView({ block: 'start', behavior: 'smooth' })
    }

    render() {
        const siteTitle = this.props.data.site.siteMetadata.title
        const siteDescription = this.props.data.site.siteMetadata.description

        let getBanner = () => {
            return this.state.isHandheld ? (
                <BannerMobile
                    scrollToElement={this.scrollToRefElement.bind(this)}
                />
            ) : (
                <BannerDesktop
                    scrollToElement={this.scrollToRefElement.bind(this)}
                />
            )
        }

        return (
            <div>
                <Helmet>
                    <title>{siteTitle}</title>
                    <meta name="description" content={siteDescription} />
                </Helmet>

                {getBanner()}

                <div id="main">
                    <section id="projects" className="tiles">
                        {this.props.data.allContentfulProject.edges.map(
                            (edge, id) => (
                                <Article {...edge.node} key={id} />
                            )
                        )}
                    </section>
                    <section id="who-are-we" ref={this.setScrollRef}>
                        <div className="inner">
                            <header className="major">
                                <h2>Who are we</h2>
                            </header>
                            <p>
                                Initially started by 3 guys trying to bring
                                together a wealth of knowledge from all
                                different areas in development. They have a
                                combined experience of nearly 30 years, spanning
                                front and back end development, devops, mobile
                                applications, and everything in between.
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

HomeIndex.propTypes = {
    data: PropTypes.object,
}

export default HomeIndex

export const pageQuery = graphql`
    {
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
                        resize {
                            src
                        }
                    }
                }
            }
        }
    }
`
