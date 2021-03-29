const os = require('os')
const path = require('path')
const exec = require('child_process').exec

const DIR = path.join(os.tmpdir(), 'jest_puppeteer_global_setup')
module.exports = async function () {
  await global.__BROWSER_GLOBAL__.close()
  console.log(DIR)
  // await exec(`rm -rf ${DIR}`)
}
