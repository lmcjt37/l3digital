import React from 'react'
import Link from '../components/Link'
import Social from '../components/Social'

const Footer = () => (
    <footer id="footer">
        <div className="inner">
            <Social />
            <ul className="copyright">
                <li>&copy; {new Date().getFullYear()} L3 Digital</li>
                <li>
                    Design: <Link to="https://html5up.net">HTML5 UP</Link>
                </li>
            </ul>
        </div>
    </footer>
)

export default Footer
