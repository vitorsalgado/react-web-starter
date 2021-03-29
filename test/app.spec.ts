import 'expect-puppeteer'
import * as Config from '../configs'

const { devURL } = Config.devServer

describe('/ (Home)', () => {
  let page: any
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  beforeEach(async () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    page = await browser.newPage()
    await page.goto(devURL)
  })

  it('should contain a #root element', async () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    await page.waitForSelector('#root')
  })
})
