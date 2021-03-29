const TsPreset = require('ts-jest/jest-preset')
const PuppeteerPreset = require('jest-puppeteer/jest-preset')

module.exports = { ...TsPreset, ...PuppeteerPreset }
