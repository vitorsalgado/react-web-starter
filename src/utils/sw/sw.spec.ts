import registerServiceWorker from '@app/utils/sw/index'

describe('SW', function () {
  it('should try register Service Worker', function () {
    registerServiceWorker()
  })
})
