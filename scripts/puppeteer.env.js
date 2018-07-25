'use strict'

const NodeEnvironment = require('jest-environment-node')
const Puppeteer = require('puppeteer')

class PuppeteerEnv extends NodeEnvironment {
  async setup () {
    await super.setup()
    this.global.__BROWSER__ = await Puppeteer.launch()
  }

  async teardown () {
    await super.teardown()
  }

  runScript (script) {
    return super.runScript(script)
  }
}

module.exports = PuppeteerEnv
