import helper from '../../src/helpers/utils'

describe('Utils helper tests', () => {
    test('calls getScreenSize when innerWidth < 768', () => {
        window.innerWidth = 767

        expect(helper.getScreenSize()).toEqual({ isHandheld: true })
    })

    test('calls getScreenSize when innerWidth > 768', () => {
        window.innerWidth = 769

        expect(helper.getScreenSize()).toEqual({ isHandheld: false })
    })

    test('calls getScreenSize when window undefined', () => {
        window = 'undefined'

        expect(helper.getScreenSize()).toEqual({ isHandheld: false })
    })

    test('calls getBannerClass correctly', () => {
        // avoid messing with Math object itself
        const mockMath = Object.create(global.Math)
        mockMath.random = () => 0.5
        global.Math = mockMath

        expect(helper.getBannerClass()).toEqual('banner4')
    })
})
