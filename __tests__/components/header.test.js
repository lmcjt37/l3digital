import Header from '../../src/components/Header'

describe('Header tests', () => {
    it('check it renders correctly with snapshot', () => {
        const tree = render(<Header onToggleMenu={jest.fn()} />)
        expect(tree).toMatchSnapshot()
    })
})
