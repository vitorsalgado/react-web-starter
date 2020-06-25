require('dotenv').config()

process.env.JEST_PUPPETEER_CONFIG =
  process.env.JEST_PUPPETEER_CONFIG || './e2e/setup/jest-puppeteer.config.js'

module.exports = {
  projects: [
    {
      displayName: 'tests',
      verbose: true,
      notify: false,
      testEnvironment: 'jsdom',
      coverageDirectory: '<rootDir>/coverage',
      errorOnDeprecated: true,
      moduleNameMapper: { '\\.(css|scss)$': 'identity-obj-proxy' },
      setupFilesAfterEnv: ['<rootDir>/config/testing/enzyme.setup.js'],
      snapshotSerializers: ['enzyme-to-json/serializer'],
      testMatch: ['**/src/**spec.js(x)']
    },

    {
      displayName: 'e2e',
      verbose: true,
      notify: false,
      preset: 'jest-puppeteer',
      setupFilesAfterEnv: ['expect-puppeteer']
    }
  ]
}
