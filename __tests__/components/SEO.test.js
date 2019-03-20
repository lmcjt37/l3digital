import { StaticQuery } from 'gatsby'

import SEO from 'components/SEO'
import SEOMock from '__mocks__/components/SEO.mock'

beforeEach(() => {
    StaticQuery.mockImplementationOnce(({ render }) => render(SEOMock))
})

describe('SEO tests', () => {
    test('check it renders correctly with snapshot', () => {
        const tree = render(<SEO title="Hello World" />)
        expect(tree).toMatchSnapshot()
    })
})
