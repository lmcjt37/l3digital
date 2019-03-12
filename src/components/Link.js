import React from 'react'
import PropTypes from 'prop-types'
import { Link as GatsbyLink } from 'gatsby'

// destructure the props here and pass it only to GatsbyLink
const Link = ({ children, to, from, ...other }) => {
    // This assumes that any internal link (intended for Gatsby)
    // will start with exactly one slash, and that anything else is external.
    const internal = /^\/(?!\/)/.test(to)

    // Use Gatsby Link for internal links, and <a> for others
    if (internal) {
        return (
            <GatsbyLink to={to} state={{ from }} {...other}>
                {children}
            </GatsbyLink>
        )
    }
    return (
        <a href={to} {...other}>
            {children}
        </a>
    )
}

export default Link

Link.propTypes = {
    children: PropTypes.any,
    to: PropTypes.string,
    from: PropTypes.string,
}
