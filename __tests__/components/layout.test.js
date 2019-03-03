import { StaticQuery } from 'gatsby'

import Layout from '../../src/components/Layout'
import contactMock from '../__mocks__/contact.mock'

beforeEach(() => {
    StaticQuery.mockImplementationOnce(({ render }) => render(contactMock))
})

describe('Layout tests', () => {
    test('check it renders correctly with snapshot', () => {
        const tree = render(<Layout />)
        expect(tree).toMatchSnapshot()
    })
})
