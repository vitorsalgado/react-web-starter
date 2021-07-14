/* eslint-disable no-console */

import Config from '@app/config'

const error = (message?: any, ...optionalParams: any[]): void => {
  if (!Config.isLogEnabled()) return

  console.error(message, optionalParams)
}

const Logger = {
  error
}

export default Logger
