/* eslint-disable @typescript-eslint/no-var-requires */

'use strict'

const TsPreset = require('ts-jest/jest-preset')
const PuppeteerPreset = require('jest-puppeteer/jest-preset')

module.exports = { ...PuppeteerPreset, ...TsPreset }
