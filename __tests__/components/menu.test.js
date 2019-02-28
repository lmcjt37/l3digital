import React from 'react'
import renderer from 'react-test-renderer'

import Menu from '../../src/components/Menu'

describe('Menu tests', () => {
    it('check it renders correctly with snapshot', () => {
        const tree = renderer.create(<Menu onToggleMenu={jest.fn()} />).toJSON()
        expect(tree).toMatchSnapshot()
    })
})
