import { Action as ReduxAction } from 'redux'
import { Error } from './Error'

export interface Action<E = Error | undefined> extends ReduxAction<string> {
  type: string
  error?: E
}

export interface PayloadAction<T = undefined, E = Error | undefined> extends Action<E> {
  payload: T
}
