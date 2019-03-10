import React from 'react'
import PropTypes from 'prop-types'

import Header from './Header'
import Menu from './Menu'
import Contact from './Contact'
import Footer from './Footer'
import Transitions from './Transitions'

import 'assets/scss/main.scss'

class Layout extends React.Component {
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
        const { children, location } = this.props

        return (
            <div
                className={`body ${this.state.loading} ${
                    this.state.isMenuVisible ? 'is-menu-visible' : ''
                }`}
            >
                <div id="wrapper">
                    <Header onToggleMenu={this.handleToggleMenu} />

                    <Transitions location={location}>{children}</Transitions>

                    <Contact />
                    <Footer />
                </div>
                <Menu onToggleMenu={this.handleToggleMenu} />
            </div>
        )
    }
}

Layout.propTypes = {
    children: PropTypes.object,
    location: PropTypes.object,
}

export default Layout
