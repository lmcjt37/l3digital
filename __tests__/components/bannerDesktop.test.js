import BannerDesktop from '../../src/components/BannerDesktop'

jest.mock('../../src/helpers/utils')

describe('BannerDesktop tests', () => {
    it('check it renders correctly with snapshot', () => {
        const tree = render(<BannerDesktop />)
        expect(tree).toMatchSnapshot()
    })
})
