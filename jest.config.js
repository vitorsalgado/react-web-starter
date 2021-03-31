'use strict'

const Dotenv = require('dotenv')
const Path = require('path')

Dotenv.config()

process.env.JEST_PUPPETEER_CONFIG = process.env.JEST_PUPPETEER_CONFIG || './test/setup/jest-puppeteer.config.js'

module.exports = {
  projects: ['<rootDir>/src', '<rootDir>/test'],

  verbose: true,
  collectCoverage: false,
  restoreMocks: true,
  transform: { '^.+\\.tsx?$': 'ts-jest' },
  reporters: ['default'],
  watchPathIgnorePatterns: ['coverage'],
  rootDir: __dirname,
  globals: {
    'ts-jest': {
      tsconfig: Path.join(process.cwd(), 'tsconfig.json')
    }
  },

  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|ico|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/test/mocks/files/index.js',
    '\\.(css|less|scss)$': '<rootDir>/test/mocks/styles/index.js'
  }
}
