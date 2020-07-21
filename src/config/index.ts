export const Config = {
  isDebug: !!process.env.DEBUG_MODE,
  logLevel: process.env.LOG_LEVEL,

  analytics: {
    id: process.env.GOOGLE_ANALYTICS_ID,
    debugMode: !!process.env.GOOGLE_ANALYTICS_DEBUG_MODE,
    testMode: !!process.env.GOOGLE_ANALYTICS_TEST_MODE
  }
}
