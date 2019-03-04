import BannerMobile from 'components/BannerMobile'

jest.mock('helpers/utils')

describe('BannerMobile tests', () => {
    test('check it renders correctly with snapshot', () => {
        const tree = render(<BannerMobile />)
        expect(tree).toMatchSnapshot()
    })
})
