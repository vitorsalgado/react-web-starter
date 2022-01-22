/* eslint-disable @typescript-eslint/no-explicit-any */

import { TranslationJsonType } from './types'
import { ConvertedToObjectType } from './types'

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
