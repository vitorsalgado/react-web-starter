import { Middleware } from '@reduxjs/toolkit'
import { State } from '@app/store'

const Styles = {
  LightGray: 'color: gray; font-weight: lighter',
  Bold: 'font-weight: bolder',
  Blue: 'color: #03A9F4',
  Green: 'color: #4CAF50',
  Red: 'color: #F20404'
}

export const logger: Middleware<Record<string, unknown>, State> = store => next => action => {
  const hasError = !!action.error
  const title = `Dispatched %c${action.type} %c@ ${new Date().toLocaleTimeString()}${hasError ? ' %c!' : ''}`
  console.groupCollapsed(
    `${title}`,
    ...[[Styles.Bold, hasError ? Styles.Red : Styles.Blue].join('; '), Styles.LightGray, hasError ? Styles.Red : '']
  )

  console.log('%cPrevious State', ...[Styles.LightGray], store.getState())
  console.log('%cAction', ...[Styles.Blue], action)

  if (hasError) console.log('%cError', ...[Styles.Red], action.error)

  const result = next(action)

  console.log('%cNext State', ...[Styles.Green], store.getState())
  console.groupEnd()

  return result
}
