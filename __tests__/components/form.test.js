import Form from 'components/Form'

describe('Form tests', () => {
    test('check it renders correctly with snapshot', () => {
        const tree = render(<Form />)
        expect(tree).toMatchSnapshot()
    })
})
