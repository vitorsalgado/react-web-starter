import { logError } from '../logger'

export const handleErr = (description: string) => logError(description)

export const handleException = (message: string, fatal = false) =>
  (err: Error) => logError(message, err)

export const handleExceptionAndContinue = (message: string, fatal = false) =>
  (err: Error) => {
    logError(message, err)
    throw err
  }
