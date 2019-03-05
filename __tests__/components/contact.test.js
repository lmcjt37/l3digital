import { StaticQuery } from 'gatsby'

import Contact from 'components/Contact'
import contactMock from '__mocks__/contact.mock'

beforeEach(() => {
    StaticQuery.mockImplementationOnce(({ render }) => render(contactMock))
})

describe('Contact tests', () => {
    test('check it renders correctly with snapshot', () => {
        const tree = render(<Contact />)
        expect(tree).toMatchSnapshot()
    })
})
