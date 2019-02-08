import React from 'react'
import PropTypes from 'prop-types'

const BannerMobile = (props) => (
  <section id="banner" className="major">
    <div className="inner">
      <header className="major">
        <h1>We Are L3 Digital</h1>
      </header>
      <div className="content">
        <p>
          A team of great collaborators, providing solutions to all your
          development needs.
        </p>
        <ul className="actions">
          <li>
            <a href="javascript:;" 
              className="button next"
              onClick={props.scrollToElement}>
                Learn more
            </a>
          </li>
        </ul>
      </div>
    </div>
  </section>
)

BannerMobile.propTypes = {
  scrollToElement: PropTypes.func,
}

export default BannerMobile
