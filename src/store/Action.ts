import { Action as ReduxAction } from 'redux'
import { Error } from './Error'

export interface Action<T = undefined, E = Error | undefined> extends ReduxAction<string> {
  type: string
  payload: T
  error?: E
}
