import { Logger } from '.'

describe('Log', function () {
  it('should log', function () {
    const mock = jest.spyOn(console, 'error').mockImplementation()

    Logger.error('msg 1')

    expect(mock).toBeCalledTimes(1)
    mock.mockRestore()
  })
})
