import Config from './infrastructure/config'
import { handleExceptionAndContinue } from './utils/errors'

export function registerServiceWorker(): void {
  if ('serviceWorker' in navigator && Config.isProd()) {
    window.addEventListener('load', () =>
      navigator.serviceWorker.register('/sw.js').catch(handleExceptionAndContinue('SW registration failed')),
    )
  }
}
