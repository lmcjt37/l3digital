import React from 'react'
import Helmet from 'react-helmet'

import ProfileSection from '../templates/profile-section'

const About = () => (
    <div>
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
            <section id="two" className="spotlights">
                {this.props.data.allContentfulProfile.edges.map((edge, id) => (
                    <ProfileSection {...edge.node} key={id} />
                ))}
            </section>
        </div>
    </div>
)

export default About

export const aboutQuery = graphql`
    query aboutQuery {
        allContentfulCompany {
            edges {
                node {
                    title
                    description
                }
            }
        }
        allContentfulProfile(filter: { node_locale: { eq: "en-US" } }) {
            edges {
                node {
                    title
                    role
                    description {
                        childMarkdownRemark {
                            html
                        }
                    }
                    profile {
                        responsiveResolution {
                            src
                        }
                    }
                }
            }
        }
    }
`
