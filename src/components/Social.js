import React from 'react'

import Link from './Link'

const Social = () => (
    <ul className="icons">
        <li>
            <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://twitter.com/l3digital_uk"
                className="icon alt fa-twitter"
            >
                <span className="label">Twitter</span>
            </Link>
        </li>
        <li>
            <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/l3digitaluk"
                className="icon alt fa-github"
            >
                <span className="label">GitHub</span>
            </Link>
        </li>
        <li>
            <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/l3-digital-uk/"
                className="icon alt fa-linkedin"
            >
                <span className="label">LinkedIn</span>
            </Link>
        </li>
    </ul>
)
export default Social
