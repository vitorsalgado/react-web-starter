'use strict'

const Puppeteer = require('puppeteer')
const Config = require('../config')

const DevServerURI = `http://0.0.0.0:${Config.devServer.port}`

describe('/ (Home)', () => {
  let Browser

  beforeAll(async () => (Browser = await Puppeteer.launch()))
  afterAll(() => Browser.close())

  it('should contain a #root element for React components', async () => {
    const page = await Browser.newPage()

    await page.goto(DevServerURI)
    await page.waitForSelector('#root')
  })
})
