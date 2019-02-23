import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

const Menu = props => (
    <nav id="menu">
        <div className="inner">
            <ul className="links">
                <li>
                    <Link onClick={props.onToggleMenu} to="/">
                        Home
                    </Link>
                </li>
                <li>
                    <Link onClick={props.onToggleMenu} to="/projects">
                        Projects
                    </Link>
                </li>
                <li>
                    <Link onClick={props.onToggleMenu} to="/about">
                        About Us
                    </Link>
                </li>
            </ul>
            <ul className="icons">
                <li>
                    <a
                        href="https://twitter.com/l3digital_uk"
                        className="icon alt fa-twitter"
                    >
                        <span className="label">Twitter</span>
                    </a>
                </li>
                <li>
                    <a
                        href="https://github.com/l3digitaluk"
                        className="icon alt fa-github"
                    >
                        <span className="label">GitHub</span>
                    </a>
                </li>
                <li>
                    <a
                        href="https://www.linkedin.com/in/l3-digital-8a369b180/"
                        className="icon alt fa-linkedin"
                    >
                        <span className="label">LinkedIn</span>
                    </a>
                </li>
            </ul>
        </div>
        <a className="close" onClick={props.onToggleMenu} href="javascript:;">
            Close
        </a>
    </nav>
)

Menu.propTypes = {
    onToggleMenu: PropTypes.func,
}

export default Menu
