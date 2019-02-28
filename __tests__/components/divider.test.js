import React from 'react'
import renderer from 'react-test-renderer'

import {
    Mountains,
    Fans,
    Asymmetric,
    Pyramids,
    Drops,
} from '../../src/components/Divider'

describe('Divider tests', () => {
    it('check it renders <Mountains/> correctly with snapshot', () => {
        const tree = renderer.create(<Mountains />).toJSON()
        expect(tree).toMatchSnapshot()
    })

    it('check it renders <Fans/> correctly with snapshot', () => {
        const tree = renderer.create(<Fans />).toJSON()
        expect(tree).toMatchSnapshot()
    })

    it('check it renders <Asymmetric/> correctly with snapshot', () => {
        const tree = renderer.create(<Asymmetric />).toJSON()
        expect(tree).toMatchSnapshot()
    })

    it('check it renders <Pyramids/> correctly with snapshot', () => {
        const tree = renderer.create(<Pyramids />).toJSON()
        expect(tree).toMatchSnapshot()
    })

    it('check it renders <Drops/> correctly with snapshot', () => {
        const tree = renderer.create(<Drops />).toJSON()
        expect(tree).toMatchSnapshot()
    })
})
