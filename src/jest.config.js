require('dotenv').config()

process.env.JEST_PUPPETEER_CONFIG =
  process.env.JEST_PUPPETEER_CONFIG || './e2e/setup/jest-puppeteer.config.js'

module.exports = {
  displayName: 'tests',
  verbose: true,
  notify: false,
  coverageDirectory: '../coverage',
  errorOnDeprecated: true,
  moduleNameMapper: { '\\.(css|scss|ico)$': 'identity-obj-proxy' },
  testEnvironment: 'enzyme',
  testEnvironmentOptions: {
    enzymeAdapter: 'react16'
  },
  snapshotSerializers: ['enzyme-to-json/serializer'],
  setupFilesAfterEnv: ['../config/testing/enzyme.setup.js'],
  testMatch: ['**/src/**spec.js(x)']
}
