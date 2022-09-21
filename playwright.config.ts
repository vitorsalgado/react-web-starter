import { PlaywrightTestConfig, devices } from '@playwright/test'
import Config from './config'

const PlaywrightConfig: PlaywrightTestConfig = {
  forbidOnly: !!Config.isCI,
  retries: Config.isCI ? 2 : 0,
  testDir: 'e2e/',
  webServer: {
    command: `npm run start:headless`,
    port: Config.devServer.port,
    timeout: 30000,
    reuseExistingServer: !Config.isCI,
  },
  use: {
    trace: 'on-first-retry',
    headless: true,
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
}

export default PlaywrightConfig
