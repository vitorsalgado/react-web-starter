/* eslint-disable no-console */

import { Config } from '../conf'

const error = (message?: unknown, ...optionalParams: unknown[]): void => {
  if (!Config.isLogEnabled()) return

  console.error(message, optionalParams)
}

export const Logger = {
  error,
}
