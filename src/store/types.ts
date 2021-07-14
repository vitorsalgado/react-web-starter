import store from '@app/store/index'
import { Action as ReduxAction } from '@reduxjs/toolkit'
import rootReducer from '@app/store/root-reducer'

export type State = ReturnType<typeof rootReducer>
export type Dispatcher = typeof store.dispatch

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
