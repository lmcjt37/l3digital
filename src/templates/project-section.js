import React from 'react'
import PropTypes from 'prop-types'

import Link from '../components/Link'

class ProjectSection extends React.Component {
    render() {
        const { slug, title, description, featuredImage } = this.props
        return (
            <section>
                <Link to={slug} className="image">
                    <img
                        src={featuredImage.fluid.src}
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
