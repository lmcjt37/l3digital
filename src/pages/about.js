import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import BannerContent from '../components/BannerContent'

import pic08 from '../assets/images/pic08.jpg'
import pic09 from '../assets/images/pic09.jpg'
import pic10 from '../assets/images/pic10.jpg'

const About = () => (
    <Layout>
        <Helmet>
            <title>About</title>
            <meta name="description" content="About Us Page" />
        </Helmet>

        <BannerContent />

        <div id="main">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h2>Sed amet aliquam</h2>
                    </header>
                    <p>
                        Nullam et orci eu lorem consequat tincidunt vivamus et
                        sagittis magna sed nunc rhoncus condimentum sem. In
                        efficitur ligula tate urna. Maecenas massa vel lacinia
                        pellentesque lorem ipsum dolor. Nullam et orci eu lorem
                        consequat tincidunt. Vivamus et sagittis libero. Nullam
                        et orci eu lorem consequat tincidunt vivamus et sagittis
                        magna sed nunc rhoncus condimentum sem. In efficitur
                        ligula tate urna.
                    </p>
                </div>
            </section>
            <section id="two" className="spotlights">
                <section>
                    <span className="image">
                        <img src={pic08} alt="" />
                    </span>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Guy One</h3>
                                <h4>Co-Founder</h4>
                            </header>
                            <p>
                                Nullam et orci eu lorem consequat tincidunt
                                vivamus et sagittis magna sed nunc rhoncus
                                condimentum sem. In efficitur ligula tate urna.
                                Maecenas massa sed magna lacinia magna
                                pellentesque lorem ipsum dolor. Nullam et orci
                                eu lorem consequat tincidunt. Vivamus et
                                sagittis tempus.
                            </p>
                        </div>
                    </div>
                </section>
                <section>
                    <span className="image">
                        <img src={pic09} alt="" />
                    </span>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Guy Two</h3>
                                <h4>Co-Founder</h4>
                            </header>
                            <p>
                                Nullam et orci eu lorem consequat tincidunt
                                vivamus et sagittis magna sed nunc rhoncus
                                condimentum sem. In efficitur ligula tate urna.
                                Maecenas massa sed magna lacinia magna
                                pellentesque lorem ipsum dolor. Nullam et orci
                                eu lorem consequat tincidunt. Vivamus et
                                sagittis tempus.
                            </p>
                        </div>
                    </div>
                </section>
                <section>
                    <span className="image">
                        <img src={pic10} alt="" />
                    </span>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Guy Three</h3>
                                <h4>Co-Founder</h4>
                            </header>
                            <p>
                                Nullam et orci eu lorem consequat tincidunt
                                vivamus et sagittis magna sed nunc rhoncus
                                condimentum sem. In efficitur ligula tate urna.
                                Maecenas massa sed magna lacinia magna
                                pellentesque lorem ipsum dolor. Nullam et orci
                                eu lorem consequat tincidunt. Vivamus et
                                sagittis tempus.
                            </p>
                        </div>
                    </div>
                </section>
            </section>
        </div>
    </Layout>
)

export default About
