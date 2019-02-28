import {
    Mountains,
    Fans,
    Asymmetric,
    Pyramids,
    Drops,
} from '../../src/components/Divider'

describe('Divider tests', () => {
    it('check it renders <Mountains/> correctly with snapshot', () => {
        const tree = render(<Mountains />)
        expect(tree).toMatchSnapshot()
    })

    it('check it renders <Fans/> correctly with snapshot', () => {
        const tree = render(<Fans />)
        expect(tree).toMatchSnapshot()
    })

    it('check it renders <Asymmetric/> correctly with snapshot', () => {
        const tree = render(<Asymmetric />)
        expect(tree).toMatchSnapshot()
    })

    it('check it renders <Pyramids/> correctly with snapshot', () => {
        const tree = render(<Pyramids />)
        expect(tree).toMatchSnapshot()
    })

    it('check it renders <Drops/> correctly with snapshot', () => {
        const tree = render(<Drops />)
        expect(tree).toMatchSnapshot()
    })
})
