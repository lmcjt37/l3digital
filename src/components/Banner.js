import React from 'react'

import UtilsHelper from '../helpers/utils'

export default class Banner extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isMobile: false,
    }
  }

  componentDidMount() {
    this.setState({
      isMobile: UtilsHelper.isMobileDevice(),
    })
  }

  getInnerHtml() {
    if (this.state.isMobile) {
      return <h1>We Are L3 Digital</h1>
    } else {
      return (
        <svg
          className="intro"
          viewBox="0 0 300 60"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="0"
            y="26"
            width="100%"
            height="1"
            className="text-stroke"
            clipPath="url(#rect1)"
          />
          <rect
            x="0"
            y="26"
            width="100%"
            height="1"
            className="text-stroke rect-stroke-2"
            clipPath="url(#rect1)"
          />
          <text
            textAnchor="start"
            x="0"
            y="15"
            className="text text-stroke"
            clipPath="url(#text1)"
          >
            We Are L3 Digital
          </text>
          <text
            textAnchor="start"
            x="0"
            y="15"
            className="text text-stroke text-stroke-2"
            clipPath="url(#text1)"
          >
            We Are L3 Digital
          </text>
          <defs>
            <clipPath id="rect1">
              <rect x="0" y="26" width="100%" height="1" />
            </clipPath>
            <clipPath id="text1">
              <text textAnchor="start" x="0" y="15" className="text">
                We Are L3 Digital
              </text>
            </clipPath>
          </defs>
        </svg>
      )
    }
  }

  render() {
    return (
      <section id="banner" className="major">
        <div className="inner">
          <header className="major">{this.getInnerHtml()}</header>
          <div className="content">
            <p>
              A team of great collaborators, providing solutions to all your
              development needs.
            </p>
            <ul className="actions">
              <li>
                <a href="#one" className="button next">
                  Learn more
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    )
  }
}
