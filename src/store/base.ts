import { Action as ReduxAction } from 'redux'

export interface Error {
  code: string
  message: string
  extensions: Record<string, any>
}

export interface Action<T = undefined, E = Error | undefined> extends ReduxAction<string> {
  type: string
  payload: T
  error?: E
}
