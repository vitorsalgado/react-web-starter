import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import BrowserLanguageDetector from 'i18next-browser-languagedetector'
import { Config } from '../conf'
import En from './en/translations.en.json'
import { convertLanguageJsonToObject } from './translations'

export const TranslationsJSON = {
  en: {
    translation: En,
  },
}

convertLanguageJsonToObject(En)

export const i18n = i18next
  .use(initReactI18next)
  .use(BrowserLanguageDetector)
  .init({
    resources: TranslationsJSON,
    fallbackLng: 'en',
    debug: !Config.isProd() && !Config.isTest(),
    interpolation: {
      escapeValue: false,
    },
  })
