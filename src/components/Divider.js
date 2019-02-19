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

const getClasses = args => {
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
    if (args.flipX) {
        classes += ' divider-shape-flip-x'
    }
    if (args.flipY) {
        classes += ' divider-shape-flip-y'
    }
    if (args.color) {
        classes += ` divider-${args.color}`
    }
    return classes
}

const Mountains = props => (
    <section id="Mountains" className="major">
        <div className="divider-container">
            <div
                className={`divider-shape ${getClasses(props)}`}
                data-negative="false"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1000 100"
                    preserveAspectRatio="none"
                >
                    <path
                        className={`divider-shape-fill ${getClasses(props)}`}
                        opacity="0.20"
                        d="M473,67.3c-203.9,88.3-263.1-34-320.3,0C66,119.1,0,59.7,0,59.7V0h1000v59.7 c0,0-62.1,26.1-94.9,29.3c-32.8,3.3-62.8-12.3-75.8-22.1C806,49.6,745.3,8.7,694.9,4.7S492.4,59,473,67.3z"
                    />
                    <path
                        className={`divider-shape-fill ${getClasses(props)}`}
                        opacity="0.35"
                        d="M734,67.3c-45.5,0-77.2-23.2-129.1-39.1c-28.6-8.7-150.3-10.1-254,39.1 s-91.7-34.4-149.2,0C115.7,118.3,0,39.8,0,39.8V0h1000v36.5c0,0-28.2-18.5-92.1-18.5C810.2,18.1,775.7,67.3,734,67.3z"
                    />
                    <path
                        className={`divider-shape-fill ${getClasses(props)}`}
                        opacity="0.50"
                        d="M766.1,28.9c-200-57.5-266,65.5-395.1,19.5C242,1.8,242,5.4,184.8,20.6C128,35.8,132.3,44.9,89.9,52.5C28.6,63.7,0,0,0,0 h1000c0,0-9.9,40.9-83.6,48.1S829.6,47,766.1,28.9z"
                    />
                </svg>
            </div>
        </div>
    </section>
)

const Fans = props => (
    <section id="Fans" className="major">
        <div className="divider-container">
            <div
                className={`divider-shape ${getClasses(props)}`}
                data-negative="false"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 283.5 19.6"
                    preserveAspectRatio="none"
                >
                    <path
                        className={`divider-shape-fill ${getClasses(props)}`}
                        opacity="0.33"
                        d="M0 0L0 18.8 141.8 4.1 283.5 18.8 283.5 0z"
                    />
                    <path
                        className={`divider-shape-fill ${getClasses(props)}`}
                        opacity="0.33"
                        d="M0 0L0 12.6 141.8 4 283.5 12.6 283.5 0z"
                    />
                    <path
                        className={`divider-shape-fill ${getClasses(props)}`}
                        opacity="0.33"
                        d="M0 0L0 6.4 141.8 4 283.5 6.4 283.5 0z"
                    />
                    <path
                        className={`divider-shape-fill ${getClasses(props)}`}
                        opacity="1.0"
                        d="M0 0L0 1.2 141.8 4 283.5 1.2 283.5 0z"
                    />
                </svg>
            </div>
        </div>
    </section>
)

const Asymmetric = props => (
    <section id="Asymmetric" className="major">
        <div className="divider-container">
            <div
                className={`divider-shape ${getClasses(props)}`}
                data-negative="false"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1000 100"
                    preserveAspectRatio="none"
                >
                    <path
                        className={`divider-shape-fill ${getClasses(props)}`}
                        d="M738,99l262-93V0H0v5.6L738,99z"
                    />
                </svg>
            </div>
        </div>
    </section>
)

const Pyramids = props => {
    return (
        <section id="Pyramids" className="major">
            <div className="divider-container">
                <div
                    className={`divider-shape ${getClasses(props)}`}
                    data-negative="false"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1000 100"
                        preserveAspectRatio="none"
                    >
                        <path
                            className={`divider-shape-fill ${getClasses(
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
        <section id="Drops" className="major">
            <div className="divider-container">
                <div
                    className={`divider-shape ${getClasses(props)}`}
                    data-negative="false"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 283.5 27.8"
                        preserveAspectRatio="xMidYMax slice"
                    >
                        <path
                            className={`divider-shape-fill ${getClasses(
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

export { Mountains, Fans, Asymmetric, Pyramids, Drops }
