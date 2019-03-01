import BannerDesktop from '../../src/components/BannerDesktop'

jest.mock('../../src/helpers/utils')

describe('BannerDesktop tests', () => {
    test('check it renders correctly with snapshot', () => {
        const tree = render(<BannerDesktop />)
        expect(tree).toMatchSnapshot()
    })
})
