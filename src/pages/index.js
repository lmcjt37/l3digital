import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import BannerDesktop from '../components/Banner'
import BannerMobile from '../components/BannerMobile'

import UtilsHelper from '../helpers/utils'

import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'
import pic05 from '../assets/images/pic05.jpg'
import pic06 from '../assets/images/pic06.jpg'

class HomeIndex extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isHandheld: false,
    }
  }

  handleResizeChange = () => {
    this.setState({ ...UtilsHelper.getScreenSize() })
  }

  componentDidMount() {
    this.handleResizeChange()
  }

  componentWillMount() {
    window.addEventListener('resize', this.handleResizeChange)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResizeChange)
  }

  render() {
    const siteTitle = this.props.data.site.siteMetadata.title
    const siteDescription = this.props.data.site.siteMetadata.description

    let getBanner = () => {
      if (this.state.isHandheld) {
        return <BannerMobile />
      } else {
        return <BannerDesktop />
      }
    }

    return (
      <div>
        <Helmet>
          <title>{siteTitle}</title>
          <meta name="description" content={siteDescription} />
        </Helmet>

        {getBanner()}

        <div id="main">
          <section id="one" className="tiles smooth-scroll-section">
            <article style={{ backgroundImage: `url(${pic01})` }}>
              <header className="major">
                <h3>Aliquam</h3>
                <p>Ipsum dolor sit amet</p>
              </header>
              <Link to="/projects" className="link primary" />
            </article>
            <article style={{ backgroundImage: `url(${pic02})` }}>
              <header className="major">
                <h3>Tempus</h3>
                <p>feugiat amet tempus</p>
              </header>
              <Link to="/projects" className="link primary" />
            </article>
            <article style={{ backgroundImage: `url(${pic03})` }}>
              <header className="major">
                <h3>Magna</h3>
                <p>Lorem etiam nullam</p>
              </header>
              <Link to="/projects" className="link primary" />
            </article>
            <article style={{ backgroundImage: `url(${pic04})` }}>
              <header className="major">
                <h3>Ipsum</h3>
                <p>Nisl sed aliquam</p>
              </header>
              <Link to="/projects" className="link primary" />
            </article>
            <article style={{ backgroundImage: `url(${pic05})` }}>
              <header className="major">
                <h3>Consequat</h3>
                <p>Ipsum dolor sit amet</p>
              </header>
              <Link to="/projects" className="link primary" />
            </article>
            <article style={{ backgroundImage: `url(${pic06})` }}>
              <header className="major">
                <h3>Etiam</h3>
                <p>Feugiat amet tempus</p>
              </header>
              <Link to="/projects" className="link primary" />
            </article>
          </section>
          <section id="two">
            <div className="inner">
              <header className="major">
                <h2>Who are we</h2>
              </header>
              <p>
                Initially started by 3 guys trying to bring together a wealth of
                knowledge from all different areas in development. They have a
                combined experience of nearly 30 years, spanning front and back
                end development, devops, mobile applications, and everything in
                between.
              </p>
              <ul className="actions">
                <li>
                  <Link to="/about" className="button next">
                    Find Out More
                  </Link>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    )
  }
}

export default HomeIndex

export const pageQuery = graphql`
  query PageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
