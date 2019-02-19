import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'

import Layout from '../components/layout'
import ProfileSection from '../templates/profile-section'
import { Pyramids as Divider } from '../components/Divider'

class About extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <Layout>
                <Helmet>
                    <title>About</title>
                    <meta name="description" content="About Us Page" />
                </Helmet>

                <section id="banner" className="style2">
                    <div className="inner">
                        <header className="major">
                            <h1>Meet the team</h1>
                        </header>
                        <div className="content">
                            <p>
                                Get to know the team
                                <br />
                                before you work with us.
                            </p>
                        </div>
                    </div>
                </section>

                <div id="main">
                    <Divider top flipY color="bg" />
                    <section id="one">
                        <div className="inner">
                            {this.props.data.allContentfulCompany.edges.map(
                                (edge, id) => (
                                    <div
                                        key={id}
                                        dangerouslySetInnerHTML={{
                                            __html:
                                                edge.node.description
                                                    .childMarkdownRemark.html,
                                        }}
                                    />
                                )
                            )}
                        </div>
                    </section>
                    <Divider bottom flipX color="bg" />
                    <section id="two" className="spotlights">
                        {this.props.data.allContentfulProfile.edges.map(
                            (edge, id) => (
                                <ProfileSection {...edge.node} key={id} />
                            )
                        )}
                    </section>
                </div>
            </Layout>
        )
    }
}

About.propTypes = {
    data: PropTypes.object.required,
}

export default About

export const aboutPageQuery = graphql`
    {
        allContentfulCompany {
            edges {
                node {
                    title
                    description {
                        childMarkdownRemark {
                            html
                        }
                    }
                }
            }
        }
        allContentfulProfile(filter: { node_locale: { eq: "en-US" } }) {
            edges {
                node {
                    firstName
                    lastName
                    role
                    description {
                        childMarkdownRemark {
                            html
                        }
                    }
                    profile {
                        resize {
                            src
                        }
                    }
                }
            }
        }
    }
`
