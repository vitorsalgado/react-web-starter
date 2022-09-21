import { Config } from './libs/conf'
import { handleExceptionAndContinue } from './libs/errors'

export function registerServiceWorker(): void {
  if ('serviceWorker' in navigator && Config.isProd()) {
    window.addEventListener('load', () =>
      navigator.serviceWorker.register('/sw.js').catch(handleExceptionAndContinue('SW registration failed')),
    )
  }
}
