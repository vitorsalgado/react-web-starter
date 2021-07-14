import Logger from '@app/utils/log'

export function handleErrorEvent(event: ErrorEvent): void {
  Logger.error(
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

export const handleExceptionAndContinue =
  (message: string) =>
  (err: Error): void => {
    Logger.error(message, err)
  }
