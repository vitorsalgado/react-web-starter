require('dotenv').config()

process.env.JEST_PUPPETEER_CONFIG = process.env.JEST_PUPPETEER_CONFIG || './test/setup/jest-puppeteer.config.js'

module.exports = {
  displayName: 'e2e',
  verbose: true,
  notify: false,
  preset: './setup/preset.js',
  setupFilesAfterEnv: ['expect-puppeteer']

  // globalSetup: './setup/setup.js',
  // globalTeardown: './setup/teardown.js',
  // testEnvironment: './setup/puppeteer_environment.js'
}
