import React from 'react'
import renderer from 'react-test-renderer'
import { StaticQuery } from 'gatsby'

import Layout from '../../src/components/Layout'
import contactMock from '../__mocks__/contact.mock'

beforeEach(() => {
    StaticQuery.mockImplementationOnce(({ render }) => render(contactMock))
})

describe('Layout tests', () => {
    it('check it renders correctly with snapshot', () => {
        const tree = renderer.create(<Layout />).toJSON()
        expect(tree).toMatchSnapshot()
    })
})
