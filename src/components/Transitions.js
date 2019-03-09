import React from 'react'
import PropTypes from 'prop-types'
import {
    TransitionGroup,
    Transition as ReactTransition,
} from 'react-transition-group'

const timeout = 500

const getTransitionStyles = {
    entering: {
        position: `opacity ${timeout}ms ease-in-out`,
        opacity: 0,
    },
    entered: {
        transition: `opacity ${timeout}ms ease-in-out`,
        opacity: 1,
    },
    exiting: {
        transition: `all ${timeout}ms ease-in-out`,
        opacity: 0,
    },
}

class Transition extends React.PureComponent {
    render() {
        const { children, location } = this.props

        return (
            <TransitionGroup>
                <ReactTransition
                    // The key is necessary here because our ReactTransition
                    // needs to know when pages are entering/exiting the DOM
                    key={location.pathname}
                    timeout={{
                        enter: timeout,
                        exit: timeout,
                    }}
                >
                    {// Application of the styles depending on the status
                    // of page(entering, exiting, entered) in the DOM
                    status => (
                        <div
                            style={{
                                ...getTransitionStyles[status],
                            }}
                        >
                            {children}
                        </div>
                    )}
                </ReactTransition>
            </TransitionGroup>
        )
    }
}

Transition.propTypes = {
    children: PropTypes.object,
    location: PropTypes.object,
}

export default Transition
