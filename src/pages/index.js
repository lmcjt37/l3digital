import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'

import Link from 'components/Link'
import BannerDesktop from 'components/BannerDesktop'
import BannerMobile from 'components/BannerMobile'
import { Pyramids as Divider } from 'components/Divider'
import Article from 'templates/index-article'
import InformationSection from 'templates/information-section'
import UtilsHelper from 'helpers/utils'

class HomeIndex extends React.Component {
    constructor(props) {
        super(props)
        // Sets initial state for screen size only, state currently
        // only used for screen size. May need to be updated as
        // requirements change.
        this.state = UtilsHelper.getScreenSize()
        this.setScrollRef = element => {
            this.elementRef = element
        }
    }

    handleResizeChange() {
        let newState = UtilsHelper.getScreenSize()
        if (newState.isHandheld !== this.state.isHandheld) {
            this.setState({ ...newState })
        }
    }

    componentDidMount() {
        window.addEventListener('resize', this.handleResizeChange.bind(this))
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResizeChange.bind(this))
    }

    scrollToRefElement() {
        this.elementRef.scrollIntoView({ block: 'start', behavior: 'smooth' })
    }

    render() {
        const siteTitle = this.props.data.site.siteMetadata.title
        const siteDescription = this.props.data.site.siteMetadata.description

        let getPlaceholder = () => {
            if (this.props.data.allContentfulProject.edges % 2 !== 0) {
                return (
                    <article
                        style={{
                            backgroundImage: `url(${
                                this.props.data.contentfulAsset.fluid.src
                            })`,
                        }}
                    />
                )
            }
        }

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
            <div id="main">
                <Helmet>
                    <title>{siteTitle}</title>
                    <meta name="description" content={siteDescription} />
                </Helmet>

                {getBanner()}

                <section id="information" className="splits">
                    {this.props.data.allContentfulInformation.edges.map(
                        (edge, id) => (
                            <InformationSection {...edge.node} key={id} />
                        )
                    )}
                </section>
                <Divider top flipY color="bg" />
                <section id="who-are-we" ref={this.setScrollRef}>
                    <div className="inner">
                        <header className="major">
                            <h2>Who are we</h2>
                        </header>
                        <div
                            dangerouslySetInnerHTML={{
                                __html: this.props.data.contentfulCompany
                                    .whoWeAre.childMarkdownRemark.html,
                            }}
                        />
                        <ul className="actions">
                            <li>
                                <Link to="/about" className="button next">
                                    Find Out More
                                </Link>
                            </li>
                        </ul>
                    </div>
                </section>
                <Divider bottom flipX color="bg" />
                <section id="projects" className="tiles">
                    {this.props.data.allContentfulProject.edges.map(
                        (edge, id) => (
                            <Article {...edge.node} key={id} />
                        )
                    )}
                    {getPlaceholder()}
                </section>
            </div>
        )
    }
}

HomeIndex.propTypes = {
    data: PropTypes.shape({
        site: PropTypes.shape({
            siteMetadata: PropTypes.shape({
                title: PropTypes.string,
                description: PropTypes.string,
            }),
        }),
        allContentfulProject: PropTypes.object,
        contentfulAsset: PropTypes.object,
        contentfulCompany: PropTypes.object,
        allContentfulInformation: PropTypes.object,
    }),
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
                        fluid(maxWidth: 600) {
                            src
                        }
                    }
                }
            }
        }
        contentfulAsset(contentful_id: { eq: "2wi9qlZZiXi47zk3UVkALL" }) {
            fluid(maxWidth: 600) {
                src
            }
        }
        contentfulCompany(contentful_id: { eq: "27CTUp0dfpHdukUkA75P4j" }) {
            whoWeAre {
                childMarkdownRemark {
                    html
                }
            }
        }
        allContentfulInformation(filter: { node_locale: { eq: "en-US" } }) {
            edges {
                node {
                    description {
                        childMarkdownRemark {
                            html
                        }
                    }
                    picture {
                        file {
                            url
                        }
                    }
                }
            }
        }
    }
`
