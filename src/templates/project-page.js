import React, { Component } from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'

import Layout from '../components/Layout'
import Link from '../components/Link'

class ProjectPage extends Component {
    render() {
        const {
            title,
            description,
            shortDescription,
            featuredImage,
            url,
        } = this.props.data.contentfulProject
        return (
            <Layout>
                <Helmet>
                    <title>{title}</title>
                    <meta name="description" content={shortDescription} />
                </Helmet>

                <div id="main" className="alt">
                    <section id="one">
                        <div className="inner">
                            <Link
                                to="/projects"
                                className="button previous bottom-margin"
                            >
                                Projects
                            </Link>
                            <header className="major">
                                <h1>{title}</h1>
                            </header>
                            <span className="image left">
                                <img
                                    src={featuredImage.fluid.src}
                                    alt={featuredImage.description}
                                />
                            </span>
                            <div
                                className="text right"
                                dangerouslySetInnerHTML={{
                                    __html:
                                        description.childMarkdownRemark.html,
                                }}
                            />
                            <ul className="actions clearfix">
                                <li>
                                    <Link
                                        href={url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="button special"
                                    >
                                        Visit
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </section>
                </div>
            </Layout>
        )
    }
}

ProjectPage.propTypes = {
    data: PropTypes.shape({
        contentfulProject: PropTypes.object,
    }),
}

export default ProjectPage

export const projectPageQuery = graphql`
    query($slug: String!) {
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
                fluid(maxWidth: 600) {
                    src
                }
                description
            }
            url
        }
    }
`
