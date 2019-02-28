import React from 'react'
import renderer from 'react-test-renderer'

import BannerDesktop from '../../src/components/BannerDesktop'

jest.mock('../../src/helpers/utils')

describe('BannerDesktop tests', () => {
    it('check it renders correctly with snapshot', () => {
        const tree = renderer.create(<BannerDesktop />).toJSON()
        expect(tree).toMatchSnapshot()
    })
})
