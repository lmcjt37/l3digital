import React from 'react'
import PropTypes from 'prop-types'
import Link from '../components/Link'
import Social from '../components/Social'

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
            <Social />
        </div>
        <Link className="close" onClick={props.onToggleMenu} to="javascript:;">
            Close
        </Link>
    </nav>
)

Menu.propTypes = {
    onToggleMenu: PropTypes.func,
}

export default Menu
