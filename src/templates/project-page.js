import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import Image from 'gatsby-image'

import Link from 'components/Link'
import SEO from 'components/SEO'

class ProjectPage extends React.Component {
    render() {
        const {
            title,
            description,
            featuredImage,
            url,
        } = this.props.data.contentfulProject

        // Workaround for HTML builds where
        // location.state is null
        const { location } = this.props
        var from = '/projects'
        var buttonTitle = 'Projects'
        if (location.state && location.state.from) {
            from = location.state.from
            buttonTitle = 'Back'
        }

        return (
            <div>
                <div id="main" className="alt">
                    <SEO title={title} />
                    <section id="one">
                        <div className="inner">
                            <Link
                                to={from}
                                className="button previous-effect effect bottom-margin"
                            >
                                {buttonTitle}
                            </Link>
                            <header className="major">
                                <h1>{title}</h1>
                            </header>
                            <span className="image left">
                                <Image
                                    fluid={featuredImage.fluid}
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
                                        Visit website
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

ProjectPage.propTypes = {
    data: PropTypes.shape({
        contentfulProject: PropTypes.object,
    }),
    location: PropTypes.object,
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
                    ...GatsbyContentfulFluid
                }
                description
            }
            url
        }
    }
`
