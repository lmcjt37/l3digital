import { StaticQuery } from 'gatsby'

import Layout from 'components/Layout'
import contactMock from '__mocks__/components/contact.mock'

beforeEach(() => {
    StaticQuery.mockImplementationOnce(({ render }) => render(contactMock))
})

describe('Layout tests', () => {
    test('check it renders correctly with snapshot', () => {
        const tree = render(<Layout location={{}} />)
        expect(tree).toMatchSnapshot()
    })
})
