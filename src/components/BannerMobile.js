import React from 'react'
import PropTypes from 'prop-types'

import Banner from 'components/Banner'

const BannerMobile = props => (
    <Banner classes="major">
        <div className="inner">
            <header className="major">
                <h1>We Are L3 Digital</h1>
            </header>
            <div className="content">
                <p>
                    A team of great collaborators, providing solutions to all
                    your development needs.
                </p>
                <ul className="actions">
                    <li>
                        <a
                            href="javascript:;"
                            className="button next"
                            onClick={props.scrollToWhoWeAreElement}
                        >
                            Learn more
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </Banner>
)

BannerMobile.propTypes = {
    scrollToWhoWeAreElement: PropTypes.func,
}

export default BannerMobile
