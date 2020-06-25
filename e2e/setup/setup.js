const Puppeteer = require('puppeteer')
const Path = require('path')
const FileSystem = require('fs')
const OS = require('os')
const { execSync } = require('child_process')

const DIR = Path.join(OS.tmpdir(), 'jest_puppeteer_global_setup')

module.exports = async function () {
  const browser = await Puppeteer.launch()
  // store the browser instance so we can teardown it later
  // this global is only available in the teardown but not in TestEnvironments
  global.__BROWSER_GLOBAL__ = browser

  // use the file system to expose the wsEndpoint for TestEnvironments
  execSync(`mkdir -p ${DIR}`)
  FileSystem.writeFileSync(Path.join(DIR, 'wsEndpoint'), browser.wsEndpoint())
}
