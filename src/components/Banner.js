import React from 'react'
import PropTypes from 'prop-types'

class Banner extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            beginAnimation: '',
        }
    }

    componentDidMount() {
        this.setState({ beginAnimation: 'go' })
    }

    componentWillUnmount() {
        this.setState({ beginAnimation: '' })
    }

    render() {
        return (
            <section id="banner" className="major">
                <div className="inner">
                    <header className="major">
                        <svg
                            className={'intro ' + this.state.beginAnimation}
                            viewBox="0 0 300 60"
                            xmlns="http://www.w3.org/2000/svg"
                            version="1.1"
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
                                    <rect
                                        x="0"
                                        y="26"
                                        width="100%"
                                        height="1"
                                    />
                                </clipPath>
                                <clipPath id="text1">
                                    <text
                                        textAnchor="start"
                                        x="0"
                                        y="15"
                                        className="text"
                                    >
                                        We Are L3 Digital
                                    </text>
                                </clipPath>
                            </defs>
                        </svg>
                    </header>
                    <div className="content">
                        <p>
                            A team of great collaborators, providing solutions
                            to all your development needs.
                        </p>
                        <ul className="actions">
                            <li>
                                <a href="javascript:;" 
                                    className="button next" 
                                    onClick={this.props.scrollToElement}>
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

Banner.propTypes = {
    scrollToElement: PropTypes.func,
}

export default Banner
