import React from 'react'
import PropTypes from 'prop-types'
import Image from 'gatsby-image'

class ProfileSection extends React.Component {
    render() {
        const { firstName, lastName, role, description, profile } = this.props
        return (
            <section>
                <span className="image">
                    <Image fluid={profile.fluid} alt={profile.description} />
                </span>
                <div className="content">
                    <div className="inner">
                        <header className="major">
                            <h3>{`${firstName} ${lastName}`}</h3>
                            <h4>{role}</h4>
                        </header>
                        <div
                            dangerouslySetInnerHTML={{
                                __html: description.childMarkdownRemark.html,
                            }}
                        />
                    </div>
                </div>
            </section>
        )
    }
}

ProfileSection.propTypes = {
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    role: PropTypes.string,
    description: PropTypes.shape({
        childMarkdownRemark: PropTypes.shape({
            html: PropTypes.string,
        }),
    }),
    profile: PropTypes.object,
}

export default ProfileSection
