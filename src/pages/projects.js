import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'

import { Asymmetric as Divider } from 'components/Divider'
import ProjectSection from 'templates/project-section'
import UtilsHelper from 'helpers/utils'

class Projects extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div id="main">
                <Helmet>
                    <title>Projects</title>
                    <meta name="description" content="Projects Page" />
                </Helmet>

                <section
                    id="banner"
                    className={`style2 ${UtilsHelper.getBannerClass()}`}
                >
                    <div className="inner">
                        <header className="major">
                            <h1>Projects</h1>
                        </header>
                        <div className="content">
                            <p>
                                A showcase of what our
                                <br />
                                team can do.
                            </p>
                        </div>
                    </div>
                </section>

                <Divider top flipY color="bg" />
                <section id="one">
                    <div className="inner">
                        <div
                            dangerouslySetInnerHTML={{
                                __html: this.props.data.contentfulCompany
                                    .whatWeDo.childMarkdownRemark.html,
                            }}
                        />
                    </div>
                </section>
                <Divider bottom flipX color="bg" />
                <section id="two" className="spotlights">
                    {this.props.data.allContentfulProject.edges.map(
                        (edge, id) => (
                            <ProjectSection {...edge.node} key={id} />
                        )
                    )}
                </section>
            </div>
        )
    }
}

Projects.propTypes = {
    data: PropTypes.shape({
        allContentfulProject: PropTypes.object,
        contentfulCompany: PropTypes.object,
    }),
}

export default Projects

export const projectsPageQuery = graphql`
    {
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
                        fluid(maxWidth: 600) {
                            src
                        }
                    }
                }
            }
        }
        contentfulCompany(contentful_id: { eq: "27CTUp0dfpHdukUkA75P4j" }) {
            whatWeDo {
                childMarkdownRemark {
                    html
                }
            }
        }
    }
`
