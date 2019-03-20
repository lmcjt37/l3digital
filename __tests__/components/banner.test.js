import { StaticQuery } from 'gatsby'

import Banner from 'components/Banner'
import bannerMock from '__mocks__/components/banner.mock'

jest.mock('helpers/utils')

beforeEach(() => {
    StaticQuery.mockImplementationOnce(({ render }) => render(bannerMock))
})

describe('Banner tests', () => {
    test('check it renders correctly with snapshot', () => {
        const tree = render(<Banner />)
        expect(tree).toMatchSnapshot()
    })
})
