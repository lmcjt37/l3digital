import BannerDesktop from 'components/BannerDesktop'

jest.mock('helpers/utils')
jest.mock('components/Banner')

describe('BannerDesktop tests', () => {
    test('check it renders correctly with snapshot', () => {
        const tree = render(<BannerDesktop />)
        expect(tree).toMatchSnapshot()
    })
})
