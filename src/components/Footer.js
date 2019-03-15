import React from 'react'

import Social from './Social'

const Footer = () => (
    <footer id="footer">
        <div className="inner">
            <Social />
            <ul className="copyright">
                <li>&copy; {new Date().getFullYear()} L3 Digital</li>
                <li>All Rights Reserved</li>
            </ul>
        </div>
    </footer>
)

export default Footer
