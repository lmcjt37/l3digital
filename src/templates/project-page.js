import React, { Component } from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'

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
                            <span className="image left">
                                <img
                                    src={featuredImage.resize.src}
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

ProjectPage.propTypes = {
    data: PropTypes.shape({
        allContentfulProject: PropTypes.object,
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
                resize {
                    src
                }
                description
            }
            url
        }
    }
`
