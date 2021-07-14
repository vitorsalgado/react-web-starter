import 'expect-puppeteer'
import 'jest-environment-puppeteer'
import { devURL } from '@testing/utils'

describe('/ (Home)', () => {
  beforeAll(() => page.goto(devURL()))

  it('should contain a #root element', async () => {
    await page.waitForSelector('#root')
  })
})
