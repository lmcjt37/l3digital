import BannerMobile from '../../src/components/BannerMobile'

jest.mock('../../src/helpers/utils')

describe('BannerMobile tests', () => {
    it('check it renders correctly with snapshot', () => {
        const tree = render(<BannerMobile />)
        expect(tree).toMatchSnapshot()
    })
})
