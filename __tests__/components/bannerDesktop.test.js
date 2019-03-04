import BannerDesktop from 'components/BannerDesktop'

jest.mock('helpers/utils')

describe('BannerDesktop tests', () => {
    test('check it renders correctly with snapshot', () => {
        const tree = render(<BannerDesktop />)
        expect(tree).toMatchSnapshot()
    })
})
