const OS = require('os')
const { execSync } = require('child_process')
const Path = require('path')

const DIR = path.join(OS.tmpdir(), 'jest_puppeteer_global_setup')

module.exports = async function () {
  // close the browser instance
  await global.__BROWSER_GLOBAL__.close()

  // clean-up the wsEndpoint file
  execSync(`rm -rf ${DIR}`)
}
