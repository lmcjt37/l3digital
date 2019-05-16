///
//  Usage
//  -----
//  https://cesis.co/shape-divider/
//
//  Available properties:
//  bottom - Pins container to bottom
//  top - Pins container to top
//  flipX - Flips 180 degrees on X axis
//  flipY - Flips 180 degrees on Y axis
//  color - Changes the accent color of the svg
//          * available colours - ./src/assets/scss/libs/_vars (line 31)
//
//  Example
//  <Divider bottom flipX color="bg" />
//
///

import React from 'react'

const getContainerClasses = args => {
    if (!args) {
        return
    }
    var classes = ''
    if (args.top) {
        classes += ' divider-shape-top'
    }
    if (args.bottom) {
        classes += ' divider-shape-bottom'
    }
    return classes
}

const getSVGClasses = args => {
    if (!args) {
        return
    }
    var classes = ''
    if (args.flipX) {
        classes += ' divider-shape-flip-x'
    }
    if (args.flipY) {
        classes += ' divider-shape-flip-y'
    }
    return classes
}

const getPathClasses = args => {
    if (!args) {
        return
    }
    var classes = ''
    if (args.color) {
        classes += ` divider-${args.color}`
    }
    return classes
}

const Asymmetric = props => (
    <section className="asymmetric major">
        <div className="divider-container">
            <div
                className={`divider-shape ${getContainerClasses(props)}`}
                data-negative="false"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1000 100"
                    preserveAspectRatio="none"
                    className={`divider-shape ${getSVGClasses(props)}`}
                >
                    <path
                        className={`divider-shape-fill ${getPathClasses(
                            props
                        )}`}
                        d="M738,99l262-93V0H0v5.6L738,99z"
                    />
                </svg>
            </div>
        </div>
    </section>
)

const Pyramids = props => {
    return (
        <section className="pyramids major">
            <div className="divider-container">
                <div
                    className={`divider-shape ${getContainerClasses(props)}`}
                    data-negative="false"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1000 100"
                        preserveAspectRatio="none"
                        className={`divider-shape ${getSVGClasses(props)}`}
                    >
                        <path
                            className={`divider-shape-fill ${getPathClasses(
                                props
                            )}`}
                            d="M761.9,44.1L643.1,27.2L333.8,98L0,3.8V0l1000,0v3.9"
                        />
                    </svg>
                </div>
            </div>
        </section>
    )
}

const Drops = props => {
    return (
        <section className="drops major">
            <div className="divider-container">
                <div
                    className={`divider-shape ${getContainerClasses(props)}`}
                    data-negative="false"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 283.5 27.8"
                        preserveAspectRatio="xMidYMax slice"
                        className={`divider-shape ${getSVGClasses(props)}`}
                    >
                        <path
                            className={`divider-shape-fill ${getPathClasses(
                                props
                            )}`}
                            d="M0 0v1.4c.6.7 1.1 1.4 1.4 2 2 3.8 2.2 6.6 1.8 10.8-.3 3.3-2.4 9.4 0 12.3 1.7 2 3.7 1.4 4.6-.9 1.4-3.8-.7-8.2-.6-12 .1-3.7 3.2-5.5 6.9-4.9 4 .6 4.8 4 4.9 7.4.1 1.8-1.1 7 0 8.5.6.8 1.6 1.2 2.4.5 1.4-1.1.1-5.4.1-6.9.1-3.7.3-8.6 4.1-10.5 5-2.5 6.2 1.6 5.4 5.6-.4 1.7-1 9.2 2.9 6.3 1.5-1.1.7-3.5.5-4.9-.4-2.4-.4-4.3 1-6.5.9-1.4 2.4-3.1 4.2-3 2.4.1 2.7 2.2 4 3.7 1.5 1.8 1.8 2.2 3 .1 1.1-1.9 1.2-2.8 3.6-3.3 1.3-.3 4.8-1.4 5.9-.5 1.5 1.1.6 2.8.4 4.3-.2 1.1-.6 4 1.8 3.4 1.7-.4-.3-4.1.6-5.6 1.3-2.2 5.8-1.4 7 .5 1.3 2.1.5 5.8.1 8.1s-1.2 5-.6 7.4c1.3 5.1 4.4.9 4.3-2.4-.1-4.4-2-8.8-.5-13 .9-2.4 4.6-6.6 7.7-4.5 2.7 1.8.5 7.8.2 10.3-.2 1.7-.8 4.6.2 6.2.9 1.4 2 1.5 2.6-.3.5-1.5-.9-4.5-1-6.1-.2-1.7-.4-3.7.2-5.4 1.8-5.6 3.5 2.4 6.3.6 1.4-.9 4.3-9.4 6.1-3.1.6 2.2-1.3 7.8.7 8.9 4.2 2.3 1.5-7.1 2.2-8 3.1-4 4.7 3.8 6.1 4.1 3.1.7 2.8-7.9 8.1-4.5 1.7 1.1 2.9 3.3 3.2 5.2.4 2.2-1 4.5-.6 6.6 1 4.3 4.4 1.5 4.4-1.7 0-2.7-3-8.3 1.4-9.1 4.4-.9 7.3 3.5 7.8 6.9.3 2-1.5 10.9 1.3 11.3 4.1.6-3.2-15.7 4.8-15.8 4.7-.1 2.8 4.1 3.9 6.6 1 2.4 2.1 1 2.3-.8.3-1.9-.9-3.2 1.3-4.3 5.9-2.9 5.9 5.4 5.5 8.5-.3 2-1.7 8.4 2 8.1 6.9-.5-2.8-16.9 4.8-18.7 4.7-1.2 6.1 3.6 6.3 7.1.1 1.7-1.2 8.1.6 9.1 3.5 2 1.9-7 2-8.4.2-4 1.2-9.6 6.4-9.8 4.7-.2 3.2 4.6 2.7 7.5-.4 2.2 1.3 8.6 3.8 4.4 1.1-1.9-.3-4.1-.3-6 0-1.7.4-3.2 1.3-4.6 1-1.6 2.9-3.5 5.1-2.9 2.5.6 2.3 4.1 4.1 4.9 1.9.8 1.6-.9 2.3-2.1 1.2-2.1 2.1-2.1 4.4-2.4 1.4-.2 3.6-1.5 4.9-.5 2.3 1.7-.7 4.4.1 6.5.6 1.5 2.1 1.7 2.8.3.7-1.4-1.1-3.4-.3-4.8 1.4-2.5 6.2-1.2 7.2 1 2.3 4.8-3.3 12-.2 16.3 3 4.1 3.9-2.8 3.8-4.8-.4-4.3-2.1-8.9 0-13.1 1.3-2.5 5.9-5.7 7.9-2.4 2 3.2-1.3 9.8-.8 13.4.5 4.4 3.5 3.3 2.7-.8-.4-1.9-2.4-10 .6-11.1 3.7-1.4 2.8 7.2 6.5.4 2.2-4.1 4.9-3.1 5.2 1.2.1 1.5-.6 3.1-.4 4.6.2 1.9 1.8 3.7 3.3 1.3 1-1.6-2.6-10.4 2.9-7.3 2.6 1.5 1.6 6.5 4.8 2.7 1.3-1.5 1.7-3.6 4-3.7 2.2-.1 4 2.3 4.8 4.1 1.3 2.9-1.5 8.4.9 10.3 4.2 3.3 3-5.5 2.7-6.9-.6-3.9 1-7.2 5.5-5 4.1 2.1 4.3 7.7 4.1 11.6 0 .8-.6 9.5 2.5 5.2 1.2-1.7-.1-7.7.1-9.6.3-2.9 1.2-5.5 4.3-6.2 4.5-1 7.7 1.5 7.4 5.8-.2 3.5-1.8 7.7-.5 11.1 1 2.7 3.6 2.8 5 .2 1.6-3.1 0-8.3-.4-11.6-.4-4.2-.2-7 1.8-10.8 0 0-.1.1-.1.2-.2.4-.3.7-.4.8v.1c-.1.2-.1.2 0 0v-.1l.4-.8c0-.1.1-.1.1-.2.2-.4.5-.8.8-1.2V0H0zM282.7 3.4z"
                        />
                    </svg>
                </div>
            </div>
        </section>
    )
}

export { Asymmetric, Pyramids, Drops }
