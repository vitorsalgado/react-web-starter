import Logger from '@app/utils/log'

jest.mock('@app/config')

describe('Log', function () {
  it('should log', function () {
    Logger.error('msg 1')
  })
})
