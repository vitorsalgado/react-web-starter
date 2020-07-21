import { asPrettyJSON, logDebug } from '../logger'
import { Config } from '../../config'

export const checkStatus = (response: Response) =>
  response.status >= 200 && response.status < 300
    ? Promise.resolve(response)
    : Promise.reject(new Error(response.statusText))

export const toJSON = (response: Response) => response.json()

export const logResponse = <T>(response: T) => {
  if (Config.isDebug)
    logDebug(asPrettyJSON(response))

  return response
}
