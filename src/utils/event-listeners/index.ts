import { handleErrorEvent } from '../errors'

export default function registerWindowErrorEvents(): void {
  window.addEventListener('unhandledrejection', event => handleErrorEvent(event.reason))
  window.addEventListener('error', event => handleErrorEvent(event))
}
