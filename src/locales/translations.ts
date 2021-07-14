import { ConvertedToObjectType, TranslationJsonType } from './types'

export const Translations: ConvertedToObjectType<TranslationJsonType> = {} as any

export const convertLanguageJsonToObject = (json: any, objToConvertTo: any = Translations, current?: string) =>
  Object.keys(json).forEach(key => {
    const currentLookupKey = current ? `${current}.${key}` : key

    if (typeof json[key] === 'object') {
      objToConvertTo[key] = {}
      convertLanguageJsonToObject(json[key], objToConvertTo[key], currentLookupKey)
    } else {
      objToConvertTo[key] = currentLookupKey
    }
  })
