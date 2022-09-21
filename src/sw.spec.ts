import { registerServiceWorker } from './sw'

describe('SW', function () {
  it('should try to register Service Worker', function () {
    registerServiceWorker()
  })
})
