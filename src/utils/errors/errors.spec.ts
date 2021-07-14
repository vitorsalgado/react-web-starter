import { handleErrorEvent, handleExceptionAndContinue } from '@app/utils/errors/index'
import Logger from '@app/utils/log'

describe('Errors', function () {
  it('should handle error event logging the information', function () {
    Logger.error = jest.fn()

    handleErrorEvent({
      message: 'msg',
      lineno: 1,
      colno: 2,
      filename: 'fn',
      error: new Error('Controlled Failure')
    } as ErrorEvent)

    expect(Logger.error).toHaveBeenCalled()
  })

  it('should handle unhandled rejections logging the information', function () {
    Logger.error = jest.fn()

    handleExceptionAndContinue('msg')(new Error('Unhandled Rejection happened'))

    expect(Logger.error).toHaveBeenCalled()
  })
})
