/* eslint-disable no-console */

import { Config } from '../../config'
import { runCatching } from '../fn/safety'

export enum LogLevel {
  DEBUG,
  INFO,
  WARN,
  ERROR,
  NONE
}

export let CurrentLevel: LogLevel = LogLevel.ERROR

export const initLogger = () => {
  try {
    const level = parseInt(Config.logLevel)
    CurrentLevel = isNaN(level)
      ? LogLevel.NONE
      : level
  } catch (e) {
    CurrentLevel = LogLevel.NONE
  }
}

export const logDebug = (...data: any[]) => {
  if (CurrentLevel <= LogLevel.DEBUG)
    console.debug(data)
}

export const logInfo = (...data: any[]) => {
  if (CurrentLevel <= LogLevel.INFO) {
    console.info(data)
  }
}

export const logWarn = (...data: any[]) => {
  if (CurrentLevel <= LogLevel.WARN)
    console.warn(data)
}

export const logError = (...data: any[]) => {
  if (CurrentLevel <= LogLevel.ERROR)
    console.error(data)
}

export const asPrettyJSON = (data: any) => JSON.stringify(data, null, 2)

export function Loggable(message?: string) {
  // tslint:disable-next-line:only-arrow-functions
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const method = descriptor.value

    descriptor.value = function (...args: any) {
      logInfo(message || `:: ${target} ${propertyKey}() called.`)
      logDebug(`:: Args: ${asPrettyJSON(args)}`)

      const result = method.apply(this, args)

      if (result) {
        logDebug(`:: ${target} ${propertyKey}() executed.`)
        runCatching(() => logDebug(asPrettyJSON(result)))
      } else {
        logDebug(`:: ${target} ${propertyKey}() executed.`)
      }

      return result
    }
  }
}
