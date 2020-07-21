import { when } from './'

describe('Utils::Fn', () => {
  it('should return the TRUE value when condition is true', () => {
    const expected = 'test'

    expect(
      when(true)
        .use(expected)
        .otherwise('fail'))
      .toEqual(expected)
  })

  it('should return the FALSE value when condition is false', () => {
    const expected = 'test'

    expect(
      when(false)
        .use('fail')
        .otherwise(expected))
      .toEqual(expected)
  })
})
