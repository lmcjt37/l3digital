import React from 'react'
import Helmet from 'react-helmet'
import { Link, withPrefix } from 'gatsby-link'
import '../assets/scss/main.scss'
import Header from '../components/Header'
import Menu from '../components/Menu'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

class Template extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isMenuVisible: false,
      loading: 'is-loading',
    }
    this.handleToggleMenu = this.handleToggleMenu.bind(this)
  }

  componentDidMount() {
    this.timeoutId = setTimeout(() => {
      this.setState({ loading: '' })

      let section = document.querySelectorAll('.smooth-scroll-section'),
        sections = {}

      Array.prototype.forEach.call(section, e => {
        sections[e.id] = {
          start: e.offsetTop,
          end: e.offsetTop + e.offsetHeight,
        }

        document
          .querySelector('a[href*=' + e.id + ']:not([href="#"]')
          .addEventListener('click', evt => {
            window.scroll({
              top: sections[e.id].start,
              left: 0,
              behavior: 'smooth',
            })
            evt.preventDefault()
          })
      })
    }, 100)
  }

  componentWillUnmount() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId)
    }
  }

  handleToggleMenu() {
    this.setState({
      isMenuVisible: !this.state.isMenuVisible,
    })
  }

  render() {
    const { children } = this.props

    return (
      <div
        className={`body ${this.state.loading} ${
          this.state.isMenuVisible ? 'is-menu-visible' : ''
        }`}
      >
        <Helmet>
          <link rel="stylesheet" href={withPrefix('skel.css')} />
        </Helmet>
        <div id="wrapper">
          <Header onToggleMenu={this.handleToggleMenu} />
          {children()}
          <Contact />
          <Footer />
        </div>
        <Menu onToggleMenu={this.handleToggleMenu} />
      </div>
    )
  }
}

Template.propTypes = {
  children: React.PropTypes.func,
}

export default Template
