import { concatCSS } from './index'

describe('Utils:Css', () => {
  it('should return provided css classes separated by a space', () => {
    const expected = 'class-1 class-2 class-3'

    expect(
      concatCSS('class-1', 'class-2', 'class-3'))
      .toEqual(expected)
  })
})
