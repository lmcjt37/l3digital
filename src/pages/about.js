import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'

import { Pyramids as Divider } from 'components/Divider'
import SEO from 'components/SEO'
import Banner from 'components/Banner'
import ProfileSection from 'templates/profile-section'

class About extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div id="main">
                <SEO title="About" />

                <Banner classes="style2">
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
                </Banner>

                <Divider top flipY color="bg" />
                <section id="one">
                    <div className="inner">
                        <div
                            dangerouslySetInnerHTML={{
                                __html: this.props.data.contentfulCompany
                                    .description.childMarkdownRemark.html,
                            }}
                        />
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
        )
    }
}

About.propTypes = {
    data: PropTypes.shape({
        contentfulCompany: PropTypes.object,
        allContentfulProfile: PropTypes.object,
    }),
}

export default About

export const aboutPageQuery = graphql`
    {
        contentfulCompany(contentful_id: { eq: "27CTUp0dfpHdukUkA75P4j" }) {
            title
            description {
                childMarkdownRemark {
                    html
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
                        fluid(maxWidth: 600) {
                            ...GatsbyContentfulFluid
                        }
                        description
                    }
                }
            }
        }
    }
`
