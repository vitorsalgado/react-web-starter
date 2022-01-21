import { i18n } from './i18n'
import { Translations } from './translations'

describe('i18n', () => {
  it('should initiate i18n', async () => {
    const t = await i18n
    expect(t).toBeDefined()
  })

  it('should initiate i18n with translations', async () => {
    const t = await i18n

    expect(t(Translations.helloWorld.title).length).toBeGreaterThan(0)
    expect(t(Translations.helloWorld.description).length).toBeGreaterThan(0)
  })
})
