/* eslint-disable no-console */

export const handleErr = (description: string) => console.error(description)

export const handleException = (message: string, fatal = false) => (err: Error) => console.error(message, err)

export const handleExceptionAndContinue = (message: string, fatal = false) => (err: Error) => {
  console.error(message, err)
  throw err
}
