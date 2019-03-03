import Menu from '../../src/components/Menu'

describe('Menu tests', () => {
    test('check it renders correctly with snapshot', () => {
        const tree = render(<Menu onToggleMenu={jest.fn()} />)
        expect(tree).toMatchSnapshot()
    })
})
