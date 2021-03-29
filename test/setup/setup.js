'use strict'

const Fs = require('fs')
const Os = require('os')
const Path = require('path')
const Puppeteer = require('puppeteer')

const DIR = Path.join(Os.tmpdir(), 'jest_puppeteer_global_setup')

module.exports = async function () {
  const browser = await Puppeteer.launch()

  global.__BROWSER_GLOBAL__ = browser

  Fs.writeFileSync(Path.join(DIR, 'wsEndpoint'), browser.wsEndpoint())
}
