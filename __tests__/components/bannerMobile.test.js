import React from 'react'
import renderer from 'react-test-renderer'

import BannerMobile from '../../src/components/BannerMobile'

jest.mock('../../src/helpers/utils')

describe('BannerMobile tests', () => {
    it('check it renders correctly with snapshot', () => {
        const tree = renderer.create(<BannerMobile />).toJSON()
        expect(tree).toMatchSnapshot()
    })
})
