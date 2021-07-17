import { Action } from '@app/store'

export const applyReducers =
  <T>(...reducers: Array<(state: T, action: Action<never>) => T>) =>
  (state: T, action: Action<never>): T =>
    reducers.reduce((a: any, b: any) => a(b(state, action), action)) as any

export const actionIs =
  (type: string) =>
  (action: Action<never>): boolean =>
    type === action?.type

export const onlyWhen =
  (predicate: (action: Action<never>) => boolean, defaultState: any = {}) =>
  (reducer: (state: any, action: Action<never>) => any) =>
  (state: any = {}, action: Action<never>): any => {
    if (typeof state === 'undefined') {
      return defaultState
    }

    const pred = predicate(action)

    if (pred) {
      return reducer(state, action)
    }

    return state
  }
