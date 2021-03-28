require('dotenv').config()

process.env.JEST_PUPPETEER_CONFIG = process.env.JEST_PUPPETEER_CONFIG || './e2e/setup/jest-puppeteer.config.js'

module.exports = {
  displayName: 'e2e',
  verbose: true,
  notify: false,
  preset: './setup/preset.js',
  setupFilesAfterEnv: ['expect-puppeteer']
}
