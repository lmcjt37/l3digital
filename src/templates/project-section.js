import React, { Component } from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

class ProjectSection extends Component {
    render() {
        const { slug, title, description, featuredImage } = this.props
        return (
            <section>
                <Link to={slug} className="image">
                    <img
                        src={featuredImage.resize.src}
                        alt={featuredImage.description}
                    />
                </Link>
                <div className="content">
                    <div className="inner">
                        <header className="major">
                            <h3>{title}</h3>
                        </header>
                        <div
                            dangerouslySetInnerHTML={{
                                __html: description.childMarkdownRemark.html,
                            }}
                        />
                        <ul className="actions">
                            <li>
                                <Link to={slug} className="button">
                                    Learn more
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        )
    }
}

ProjectSection.propTypes = {
    slug: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.shape({
        childMarkdownRemark: PropTypes.shape({
            html: PropTypes.string,
        }),
    }),
    featuredImage: PropTypes.object,
}

export default ProjectSection
