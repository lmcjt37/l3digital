const path = require('path')

module.exports = {
    transform: {
        '^.+\\.jsx?$': `<rootDir>/__tests__/jest-preprocess.js`,
    },
    moduleNameMapper: {
        '.+\\.(css|styl|less|sass|scss)$': `identity-obj-proxy`,
        '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': `<rootDir>/__tests__/__mocks__/file.mock.js`,
    },
    testMatch: ['**/?(*.)+(spec|test).[jt]s?(x)'],
    testPathIgnorePatterns: [`node_modules`, `.cache`],
    transformIgnorePatterns: [`node_modules/(?!(gatsby)/)`],
    globals: {
        __PATH_PREFIX__: ``,
    },
    setupFiles: [`<rootDir>/__tests__/__mocks__/loadershim.js`],
    setupFilesAfterEnv: ['<rootDir>/__tests__/setup-test-env.js'],
    moduleDirectories: [
        path.resolve(__dirname, 'src'),
        path.resolve(__dirname, '__tests__'),
        'node_modules',
    ],
}
