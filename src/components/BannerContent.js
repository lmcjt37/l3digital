import React from 'react'

// const BannerContent = props => (
class BannerContent extends React.Component {
  render() {
    let title = 'Some title'
    return (
      <section id="banner" className="style2">
        <div className="inner">
          <header className="major">
            <h1>{title}</h1>
          </header>
          <div className="content">
            <p>
              Lorem ipsum dolor sit amet nullam consequat<br />
              sed veroeros. tempus adipiscing nulla.
            </p>
          </div>
        </div>
      </section>
    )
  }
}

export default BannerContent
