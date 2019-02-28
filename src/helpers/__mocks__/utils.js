// __mocks__/helpers/utils.js
'use strict'

const helper = jest.genMockFromModule('fs')

function getBannerClass() {
    return 'banner1'
}

helper.getBannerClass = getBannerClass

module.exports = helper
