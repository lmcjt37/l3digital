import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import Image from 'gatsby-image'
import smoothscroll from 'smoothscroll-polyfill'

import Link from 'components/Link'
import BannerDesktop from 'components/BannerDesktop'
import BannerMobile from 'components/BannerMobile'
import { Pyramids as Divider } from 'components/Divider'
import SEO from 'components/SEO'
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
        this.setWhoWeAreScrollRef = element => {
            this.whoWeAreScrollRef = element
        }
        this.setFirstSectionScrollRef = element => {
            this.firstSectionScrollRef = element
        }
    }

    handleResizeChange() {
        let newState = UtilsHelper.getScreenSize()
        if (newState.isHandheld !== this.state.isHandheld) {
            this.setState({ ...newState })
        }
    }

    componentDidMount() {
        smoothscroll.polyfill()
        window.addEventListener('resize', this.handleResizeChange.bind(this))
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResizeChange.bind(this))
    }

    scrollToWhoWeAreElement() {
        this.whoWeAreScrollRef.scrollIntoView({
            block: 'start',
            behavior: 'smooth',
        })
    }

    scrollToFirstSectionElement() {
        this.firstSectionScrollRef.scrollIntoView({
            block: 'start',
            behavior: 'smooth',
        })
    }

    render() {
        let getPlaceholder = () => {
            if (this.props.data.allContentfulProject.edges % 2 !== 0) {
                return (
                    <article>
                        <Image
                            Tag="span"
                            className="child"
                            fluid={this.props.data.contentfulAsset.fluid}
                        />
                    </article>
                )
            }
        }

        let getBanner = () => {
            return this.state.isHandheld ? (
                <BannerMobile
                    scrollToWhoWeAreElement={this.scrollToWhoWeAreElement.bind(
                        this
                    )}
                />
            ) : (
                <BannerDesktop
                    scrollToWhoWeAreElement={this.scrollToWhoWeAreElement.bind(
                        this
                    )}
                    scrollToFirstSectionElement={this.scrollToFirstSectionElement.bind(
                        this
                    )}
                />
            )
        }

        return (
            <div id="main">
                <SEO title="Home" />
                {getBanner()}
                <section
                    id="information"
                    className="splits"
                    ref={this.setFirstSectionScrollRef}
                >
                    {this.props.data.allContentfulInformation.edges.map(
                        (edge, id) => (
                            <InformationSection {...edge.node} key={id} />
                        )
                    )}
                </section>
                <Divider top flipY color="bg" />
                <section id="who-are-we" ref={this.setWhoWeAreScrollRef}>
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
                                <Link
                                    to="/about"
                                    className="button next-effect effect"
                                >
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
                            ...GatsbyContentfulFluid
                        }
                    }
                }
            }
        }
        contentfulAsset(contentful_id: { eq: "2wi9qlZZiXi47zk3UVkALL" }) {
            fluid(maxWidth: 600) {
                ...GatsbyContentfulFluid
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
                        description
                    }
                }
            }
        }
    }
`
