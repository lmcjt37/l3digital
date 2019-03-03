import Social from '../../src/components/Social'

describe('Social tests', () => {
    test('check it renders correctly with snapshot', () => {
        const tree = render(<Social />)
        expect(tree).toMatchSnapshot()
    })
})
