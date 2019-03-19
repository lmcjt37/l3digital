import Link from 'components/Link'

describe('Link tests', () => {
    test('check it renders internal link correctly with snapshot', () => {
        const tree = render(<Link to="/something-internal" />)
        expect(tree).toMatchSnapshot()
    })

    test('check it renders external link correctly with snapshot', () => {
        const tree = render(<Link to="https://www.google.com/" />)
        expect(tree).toMatchSnapshot()
    })
})
