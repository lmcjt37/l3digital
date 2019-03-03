import React from 'react'
import renderer from 'react-test-renderer'

import Social from '../../src/components/Social'

describe('Social tests', () => {
    it('check it renders correctly with snapshot', () => {
        const tree = renderer.create(<Social />).toJSON()
        expect(tree).toMatchSnapshot()
    })
})
