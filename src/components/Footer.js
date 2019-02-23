import React from 'react'

const Footer = () => (
    <footer id="footer">
        <div className="inner">
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
            <ul className="copyright">
                <li>&copy; {new Date().getFullYear()} L3 Digital</li>
                <li>
                    Design: <a href="https://html5up.net">HTML5 UP</a>
                </li>
            </ul>
        </div>
    </footer>
)

export default Footer
