import { Action } from '@app/store'

export const applyReducers =
  <T>(...reducers: Array<(state: T, action: Action<any>) => T>) =>
  (state: T, action: Action<any>): T => {
    let st = state

    for (const reducer of reducers) {
      st = reducer(st, action)
    }

    return st
  }

export const actionIs =
  (type: string) =>
  (action: Action<any>): boolean =>
    type === action?.type

export const onlyWhen =
  (predicate: (action: Action<any>) => boolean, defaultState: any = {}) =>
  (reducer: (state: any, action: Action<any>) => any) =>
  (state: any, action: Action<any>): any => {
    if (state === null || typeof state === 'undefined') {
      return defaultState
    }

    const pred = predicate(action)

    if (pred) {
      return reducer(state, action)
    }

    return state
  }

export const forAction = (action: string) => onlyWhen(actionIs(action))
