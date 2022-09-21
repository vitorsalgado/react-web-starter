/* eslint-disable no-console */

import Config from '../config'

const error = (message?: unknown, ...optionalParams: unknown[]): void => {
  if (!Config.isLogEnabled()) return

  console.error(message, optionalParams)
}

const Logger = {
  error,
}

export default Logger
