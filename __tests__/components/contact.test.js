import React from 'react'
import renderer from 'react-test-renderer'
import { StaticQuery } from 'gatsby'

import Contact from '../../src/components/Contact'
import contactMock from '../__mocks__/contact.mock'

beforeEach(() => {
    StaticQuery.mockImplementationOnce(({ render }) => render(contactMock))
})

describe('Contact tests', () => {
    it('check it renders correctly with snapshot', () => {
        const tree = renderer.create(<Contact />).toJSON()
        expect(tree).toMatchSnapshot()
    })
})
