import { test, expect } from '@playwright/test'
import { devURL } from './utils'

test.describe('/ (Home)', () => {
  test.beforeEach(({ page }) => page.goto(devURL()))

  test('should contain a #root element', async ({ page }) => {
    await expect(page.locator('#root')).toHaveCount(1)
  })
})
