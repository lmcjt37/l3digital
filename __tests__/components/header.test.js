import React from 'react'
import renderer from 'react-test-renderer'

import Header from '../../src/components/Header'

describe('Header tests', () => {
    it('check it renders correctly with snapshot', () => {
        const tree = renderer
            .create(<Header onToggleMenu={jest.fn()} />)
            .toJSON()
        expect(tree).toMatchSnapshot()
    })
})
