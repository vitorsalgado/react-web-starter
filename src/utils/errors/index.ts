/* eslint-disable no-console */

export function handleErrorEvent(event: ErrorEvent): void {
  console.error(
    'An error occurred. Reason: ' +
      event.message +
      +'\n' +
      'Line: ' +
      event.lineno +
      '\n' +
      'Col: ' +
      event.colno +
      '\n' +
      'Source: ' +
      event.filename +
      '\n' +
      'Error:' +
      '\n' +
      event.error
  )
}

export const handleExceptionAndContinue = (message: string) => (err: Error) => {
  console.error(message, err)
  throw err
}
