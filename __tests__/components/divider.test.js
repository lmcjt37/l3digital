import {
    Mountains,
    Fans,
    Asymmetric,
    Pyramids,
    Drops,
} from 'components/Divider'

describe('Divider tests', () => {
    test('check it renders <Mountains/> correctly with snapshot', () => {
        const tree = render(<Mountains />)
        expect(tree).toMatchSnapshot()
    })

    test('check it renders <Fans/> correctly with snapshot', () => {
        const tree = render(<Fans />)
        expect(tree).toMatchSnapshot()
    })

    test('check it renders <Asymmetric/> correctly with snapshot', () => {
        const tree = render(<Asymmetric />)
        expect(tree).toMatchSnapshot()
    })

    test('check it renders <Pyramids/> correctly with snapshot', () => {
        const tree = render(<Pyramids />)
        expect(tree).toMatchSnapshot()
    })

    test('check it renders <Drops/> correctly with snapshot', () => {
        const tree = render(<Drops />)
        expect(tree).toMatchSnapshot()
    })
})
