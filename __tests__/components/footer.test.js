import Footer from '../../src/components/Footer'

describe('Footer tests', () => {
    it('check it renders correctly with snapshot', () => {
        const tree = render(<Footer />)
        expect(tree).toMatchSnapshot()
    })
})
