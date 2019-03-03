import BannerMobile from '../../src/components/BannerMobile'

jest.mock('../../src/helpers/utils')

describe('BannerMobile tests', () => {
    test('check it renders correctly with snapshot', () => {
        const tree = render(<BannerMobile />)
        expect(tree).toMatchSnapshot()
    })
})
