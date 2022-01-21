import Config from '../../config'
import { handleExceptionAndContinue } from '../errors'

export default function registerServiceWorker(): void {
  if ('serviceWorker' in navigator && Config.isProd) {
    window.addEventListener('load', () =>
      navigator.serviceWorker.register('/sw.js').catch(handleExceptionAndContinue('SW registration failed'))
    )
  }
}
