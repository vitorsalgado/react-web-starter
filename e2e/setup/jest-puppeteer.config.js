const Config = require('../../config')

module.exports = {
  launch: {
    headless: Config.testing.headless
  },
  browserContext: Config.testing.incognito ? 'incognito' : 'default',
  server: {
    command: `npm run start:headless`,
    port: Config.devServer.port,
    launchTimeout: 10000,
    debug: Config.testing.debug
  }
}
