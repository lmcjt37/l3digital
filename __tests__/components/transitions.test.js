import Transitions from 'components/Transitions'

describe('Transitions tests', () => {
    test('check it renders correctly with snapshot', () => {
        const tree = render(<Transitions location={{}} />)
        expect(tree).toMatchSnapshot()
    })
})
