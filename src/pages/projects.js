import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'

import Layout from '../components/layout'
import ProjectSection from '../templates/project-section'
import { Asymmetric as Divider } from '../components/Divider'

class Projects extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <Layout>
                <Helmet>
                    <title>Projects</title>
                    <meta name="description" content="Projects Page" />
                </Helmet>

                <section id="banner" className="style2">
                    <div className="inner">
                        <header className="major">
                            <h1>Banner Content</h1>
                        </header>
                        <div className="content">
                            <p>
                                Lorem ipsum dolor sit amet nullam consequat
                                <br />
                                sed veroeros. tempus adipiscing nulla.
                            </p>
                        </div>
                    </div>
                </section>

                <div id="main">
                    <Divider top flipY color="bg" />
                    <section id="one">
                        <div className="inner">
                            <header className="major">
                                <h2>Sed amet aliquam</h2>
                            </header>
                            <p>
                                Nullam et orci eu lorem consequat tincidunt
                                vivamus et sagittis magna sed nunc rhoncus
                                condimentum sem. In efficitur ligula tate urna.
                                Maecenas massa vel lacinia pellentesque lorem
                                ipsum dolor. Nullam et orci eu lorem consequat
                                tincidunt. Vivamus et sagittis libero. Nullam et
                                orci eu lorem consequat tincidunt vivamus et
                                sagittis magna sed nunc rhoncus condimentum sem.
                                In efficitur ligula tate urna.
                            </p>
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
            </Layout>
        )
    }
}

Projects.propTypes = {
    data: PropTypes.object.required,
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
                        resize {
                            src
                        }
                    }
                }
            }
        }
    }
`
