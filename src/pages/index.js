import React from 'react'
import { graphql } from 'gatsby'
import Link from '../components/Link'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'

import Layout from '../components/layout'
import BannerDesktop from '../components/BannerDesktop'
import BannerMobile from '../components/BannerMobile'
import {
    Mountains as DividerOne,
    Pyramids as DividerTwo,
} from '../components/Divider'

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
        this.handleResizeChange.bind(this)
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
            <Layout>
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
                        {getPlaceholder()}
                    </section>
                    <DividerOne top color="accent2" />
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
                    <DividerTwo bottom flipX color="bg" />
                </div>
            </Layout>
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
                        resize {
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
    }
`
