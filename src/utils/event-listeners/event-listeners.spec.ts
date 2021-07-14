import registerWindowErrorEvents from '@app/utils/event-listeners/index'

describe('Event Listeners', function () {
  it('should register to window error events', function () {
    registerWindowErrorEvents()
  })
})
