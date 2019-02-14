///
//  Usage
//  -----
//  https://cesis.co/shape-divider/
//
//  Available properties:
//  bottom - Pins container to bottom
//  top - Pins container to top
//  flip - Flips 180 degrees on X axis
//  color - Changes the accent color of the svg
//          * available colours - ./src/assets/scss/libs/_vars (line 31)
//
//  Example
//  <DividerFour bottom flip color="bg"/>
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
    if (args.flip) {
        classes += ' divider-shape-flip'
    }
    if (args.color) {
        classes += ` divider-${args.color}`
    }
    return classes
}

const DividerOne = props => (
    <section id="DividerOne" className="major">
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

const DividerTwo = props => (
    <section id="DividerTwo" className="major">
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

const DividerThree = props => (
    <section id="DividerThree" className="major">
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

const DividerFour = props => {
    return (
        <section id="DividerFour" className="major">
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

export { DividerOne, DividerTwo, DividerThree, DividerFour }
