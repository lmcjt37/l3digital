const React = require('react')
const gatsby = jest.requireActual('gatsby')

module.exports = {
    ...gatsby,
    graphql: jest.fn(),
    Link: jest.fn().mockImplementation(({ to, activeClassName, ...rest }) =>
        React.createElement('a', {
            ...rest,
            href: to,
            activeclassname: activeClassName,
        })
    ),
    StaticQuery: jest.fn(),
}
