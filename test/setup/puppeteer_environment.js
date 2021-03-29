'use strict'

const Fs = require('fs')
const Os = require('os')
const Path = require('path')
const Puppeteer = require('puppeteer')
const NodeEnvironment = require('jest-environment-node')

const DIR = Path.join(Os.tmpdir(), 'jest_puppeteer_global_setup')

class PuppeteerEnvironment extends NodeEnvironment {
  constructor(config) {
    super(config)
  }

  async setup() {
    await super.setup()

    const wsEndpoint = Fs.readFileSync(Path.join(DIR, 'wsEndpoint'), 'utf8')

    if (!wsEndpoint) {
      throw new Error('wsEndpoint not found')
    }

    this.global.__BROWSER__ = await Puppeteer.connect({
      browserWSEndpoint: wsEndpoint
    })
  }

  async teardown() {
    await super.teardown()
  }

  runScript(script) {
    return super.runScript(script)
  }
}

module.exports = PuppeteerEnvironment
