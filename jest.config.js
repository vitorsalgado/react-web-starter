'use strict'

require('dotenv').config()

process.env.JEST_PUPPETEER_CONFIG = process.env.JEST_PUPPETEER_CONFIG || './e2e/setup/jest-puppeteer.config.js'

module.exports = {
  projects: ['<rootDir>/src', '<rootDir>/e2e']
}
