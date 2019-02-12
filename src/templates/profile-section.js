import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ProfileSection extends Component {
    render() {
        const { title, role, description, profile } = this.props
        return (
            <section>
                <span className="image">
                    <img
                        src={profile.responsiveResolution.src}
                        alt={profile.description}
                    />
                </span>
                <div className="content">
                    <div className="inner">
                        <header className="major">
                            <h3>{title}</h3>
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
    title: PropTypes.string,
    role: PropTypes.string,
    description: PropTypes.string,
    profile: PropTypes.string,
}

export default ProfileSection
