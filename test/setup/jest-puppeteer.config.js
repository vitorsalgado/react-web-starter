/* eslint-disable @typescript-eslint/no-var-requires */

'use strict'

const Config = require('../../configs')

module.exports = {
  launch: {
    dumpio: true,
    devtools: !Config.testing.headless,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--start-maximized', '--disable-gpu'],
    headless: Config.testing.headless
  },
  browserContext: Config.testing.incognito ? 'incognito' : 'default',
  server: {
    command: `yarn start:headless`,
    port: Config.devServer.port,
    launchTimeout: 30000,
    debug: Config.testing.debug
  }
}
