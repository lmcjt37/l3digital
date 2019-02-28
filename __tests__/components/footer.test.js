import React from 'react'
import renderer from 'react-test-renderer'

import Footer from '../../src/components/Footer'

describe('Footer tests', () => {
    it('check it renders correctly with snapshot', () => {
        const tree = renderer.create(<Footer />).toJSON()
        expect(tree).toMatchSnapshot()
    })
})
