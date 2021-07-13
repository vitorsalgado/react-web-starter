const Config = require('../../build/config')

module.exports = {
  launch: {
    dumpio: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
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
