import React from 'react'
import PropTypes from 'prop-types'

class InformationSection extends React.Component {
    render() {
        const { description, picture } = this.props
        return (
            <section>
                <span className="image">
                    <img src={picture.file.url} alt={picture.description} />
                </span>
                <div className="content">
                    <div className="inner">
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

InformationSection.propTypes = {
    description: PropTypes.shape({
        childMarkdownRemark: PropTypes.shape({
            html: PropTypes.string,
        }),
    }),
    picture: PropTypes.object,
}

export default InformationSection
